(ns crx.portfolio.ui.router
  (:require
   [bidi.bidi :as bidi]
   [clojure.spec.alpha :as s]
   [clojure.string :as string]
   [crx.portfolio.ui.state :as state]
   [pushy.core :as pushy]
   [reagent.core :as r])
  (:import
   [goog Uri]))

(def routes
  ["/"
   [["" ::portfolio]
    ["services" ::services]
    [true ::not-found]]])

(def route? keyword?)
(s/def ::route route?)
(s/def ::handler ::route)
(s/def ::route-params (s/map-of keyword? string?))
(s/def ::route-match
  (s/keys :req-un [::handler]
          :opt-un [::route-params]))

(def match-route
  (partial bidi/match-route routes))

(def path-for
  (partial bidi/path-for routes))

(defn- navigate
  ^{:fm/doc
    "This needs to be private since it's used internally
    to update the event db without updating the window.location.href"
    :fm/args ::route}
  [route]
  (reset! state/route-ratom route))

(def ignore-paths
  #{})

;; Lifted from pushy.core/processable-url? (which is private)
;; Blank URLs are not processable.
;; By default only process relative URLs + URLs matching window's origin
(defn processable-url? [uri]
  (and (not (string/blank? uri))
       (not (ignore-paths ^String (.getPath uri))) ;; injected condition
       (or (and (not ^Boolean (.hasScheme uri)) (not ^Boolean (.hasDomain uri)))
           (some? (re-matches
                   (re-pattern (str "^" (.-origin js/location) ".*$"))
                   (str uri))))))

(def pushy-instance
  (memoize
   (fn []
     (pushy/pushy
      navigate
      match-route
      :processable-url? processable-url?))))

(defn navigate-to
  ^{:fm/doc  "Update the window.location with the path for the given route"
    :fm/args ::route}
  [& route-args]
  (if (route? (first route-args))
    (pushy/set-token! (pushy-instance) (apply path-for route-args))
    (js/console.warn (str "Cannot navigate to unknown route: " route-args))))

(defn navigate-to-redirect-or
  ^{:fm/doc "When navigating, redirect to the redirect args stored in state, if
  any. Otherwise redirect to the given [[fallback-route-args]]"}
  [& fallback-route-args]
  (if-let [route-args @state/redirect-route-args-ratom]
    (let [{:keys [handler route-params]
           :or   {route-params {}}}
          route-args]
      (->> (into [] route-params)
           (flatten)
           (apply navigate-to handler))
      (r/rswap! state/redirect-route-args-ratom (constantly nil)))
    (apply navigate-to fallback-route-args)))

(defn start!
  "Start the pushy history event subscriptions"
  []
  (pushy/start! (pushy-instance)))

(add-watch state/route-ratom ::get-redirect-route-args
           (fn [_ _ _ _]
             (when-let [redirect-route-args
                        (-> (Uri/parse js/window.location)
                            ^js/Object (.getQueryData)
                            (.get "redirect")
                            (match-route))]
               (->> (constantly redirect-route-args)
                    (r/rswap! state/redirect-route-args-ratom)))))
