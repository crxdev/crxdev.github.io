(ns crx.portfolio.ui.component.loading
  (:require
   #_[clojure.spec.alpha :as s]
   [crx.portfolio.ui.style :as style.lib]
   [crx.portfolio.ui.style.theme :as theme]
   [crx.portfolio.ui.style.proto :as style.proto]))

(defmethod style.proto/->styles ::styles
  [_props]
  [[::container
    {:display     :grid
     :height      "100vh"
     :place-items :center
     :width       "100vw"}
    [:h1
     {:margin  0
      :padding 0}]]])

(defn component
  [_props]
  [:div {:class (style.lib/classes ::container)}
   [:h1 {:class (style.lib/classes ::theme/loading)} "loading..."]])
