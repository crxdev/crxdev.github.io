(ns crx.portfolio.ui.static.style
  (:require
   [garden.selectors :as g.sel]
   [crx.portfolio.ui.style.lib :as style.lib]
   [crx.portfolio.ui.component.card :as component.card]
   [crx.portfolio.ui.component.layout.holy-grail :as layout.holy-grail]
   [crx.portfolio.ui.page.dashboard :as page.dashboard]
   [crx.portfolio.ui.page.not-found :as page.not-found]
   [crx.portfolio.ui.style.theme :as theme]
   [crx.portfolio.ui.style.font :as font]
   [crx.portfolio.ui.style.proto :as style.proto])
  #?(:clj (:import clojure.lang.Keyword)))

(defmethod style.proto/->styles :default
  [_]
  nil)

(defonce styles
  [::font/playfair-display
   ::font/rubik
   ::theme/styles
   ::layout.holy-grail/styles
   ::page.dashboard/styles
   ::page.not-found/styles
   ::component.card/styles])

(defn >>styles
  [props]
  (reduce
   (fn [acc k]
     (->> (assoc acc ::style.proto/style-ident k)
          (style.proto/->styles)
          (assoc acc k)))
   props
   styles))

(extend-protocol g.sel/ICSSSelector
  Keyword
  (css-selector [this]
    (if (namespace this)
      (str "." (style.lib/->html-safe this)) ; NOTE: always a class selector
      (name this))))
