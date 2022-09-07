(ns crx.portfolio.ui.static.style
  (:require
   [garden.selectors :as g.sel]
   [crx.portfolio.ui.style.lib :as style.lib]
   [crx.portfolio.ui.component.card :as component.card]
   [crx.portfolio.ui.component.link :as component.link]
   [crx.portfolio.ui.component.layout :as layout]
   [crx.portfolio.ui.component.nav :as component.nav]
   [crx.portfolio.ui.page.portfolio :as page.portfolio]
   [crx.portfolio.ui.page.not-found :as page.not-found]
   [crx.portfolio.ui.page.services :as page.services]
   [crx.portfolio.ui.style.theme :as theme]
   [crx.portfolio.ui.style.proto :as style.proto])
  #?(:clj (:import clojure.lang.Keyword)))

(defmethod style.proto/->styles :default
  [_]
  nil)

(defonce styles
  [::theme/styles
   ::layout/styles
   ::page.portfolio/styles
   ::page.not-found/styles
   ::page.services/styles
   ::component.nav/styles
   ::component.link/styles
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
