(ns crx.portfolio.ui.page.services
  (:require
   [crx.portfolio.ui.component.layout :as layout]
   #_[crx.portfolio.ui.component.link :as link]
   #_[crx.portfolio.ui.data.portfolio :as data.portfolio]
   [crx.portfolio.ui.page.proto :as page.proto]
   [crx.portfolio.ui.router :as router]
   #_[crx.portfolio.ui.style.font :as font]
   [crx.portfolio.ui.style.lib :as style.lib]
   [crx.portfolio.ui.style.proto :as style.proto]
   #_[crx.portfolio.ui.style.theme :as theme]
   #_[garden.selectors :as g.sel]
   #_[reagent.core :as r]))

(defmethod style.proto/->styles ::styles
  [_props]
  [])

(defn render
  [_props]
  [layout/component
   {:nav {:selected ::router/services}}
   [:div {:class (style.lib/classes :ui/grid :ui/grid3)}
    "Services are a thing"]])

(defmethod page.proto/component ::router/services
  [props]
  [render props])
