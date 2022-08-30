(ns crx.portfolio.ui.page
  (:require
   [clojure.spec.alpha :as s]
   [crx.portfolio.ui.router :as router]
   [crx.portfolio.ui.page.dashboard]
   [crx.portfolio.ui.page.not-found]
   [crx.portfolio.ui.page.proto :as page.proto]
   [crx.portfolio.ui.state :as state]))

(s/def ::props
  (s/keys :req [::router/route-match]))

(defn component
  []
  (let [unauthenticated? false ;; (nil? @state/session-ratom)
        route-match      (if unauthenticated?
                           {:handler ::router/loading}
                           @state/route-ratom)
        props            {::router/route-match route-match
                          ::router/page-ident  (:handler route-match)}]
    (js/console.log (clj->js props))
    [page.proto/component props]))
