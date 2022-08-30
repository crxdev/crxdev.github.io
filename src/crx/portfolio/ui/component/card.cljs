(ns crx.portfolio.ui.component.card
  (:require
   [clojure.string :as string]
   [crx.portfolio.ui.style.lib :as style.lib]
   [crx.portfolio.ui.style.proto :as style.proto]
   [crx.portfolio.ui.style.theme :as theme]))

(defmethod style.proto/->styles ::styles
  [_props]
  [[::card {:background (theme/=>color ::theme/light-gray)
            :color      (theme/=>color ::theme/dark-gray)
            :padding    "1em"
            :text-align :center}
    [:count {}]
    [:title {:margin 0 :padding 0}]
    [::has-error
     [::count {:color (theme/=>color ::theme/red)}]
     [::title {}]]]])

(defn component
  [{:keys [count class error error-detail title]
    :or   {class ""}}]
  (let [error? (not (string/blank? error))]
    [:div {:class (apply style.lib/classes (into [::card {::has-error error?}] class))}
     [:<>
      [:h1 {:class (style.lib/classes ::count)} (if error? error count)]
      [:h3 {:class (style.lib/classes ::title)} (if error? error-detail title)]]]))
