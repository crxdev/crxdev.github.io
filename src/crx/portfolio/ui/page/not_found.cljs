(ns crx.portfolio.ui.page.not-found
  (:require
   [crx.portfolio.ui.component.layout.holy-grail :as layout]
   [crx.portfolio.ui.page.proto :as page.proto]
   [crx.portfolio.ui.router :as router]
   [crx.portfolio.ui.style.proto :as style.proto]))

(defmethod style.proto/->styles ::styles
  [_props]
  [])

(defn render
  [_props]
  [layout/component {:title "not-found"}
   [:p "Probably best to head back to the "
    [:a {:href "javascript:history.back()"} "previous page"] "."]])

(defmethod page.proto/component ::router/not-found
  [props]
  [render props])

(defmethod page.proto/component :default
  [props]
  [render props])
