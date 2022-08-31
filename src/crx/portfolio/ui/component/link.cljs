(ns crx.portfolio.ui.component.link
  (:require
   [crx.portfolio.ui.style.lib :as style.lib]
   [crx.portfolio.ui.style.proto :as style.proto]
   [crx.portfolio.ui.style.theme :as theme]))

(defmethod style.proto/->styles ::styles
  [_props]
  [[::link
    [:span.icon-left {}]
    [:span.text {}]
    [:span.icon-right {}]]])

(defn component
  [{:keys [class icon target text] :as props}]
  (let [external?    (= "_blank" target)
        classes      (apply style.lib/classes (into [::link] class))
        anchor-props (-> props
                         (assoc :class classes)
                         (dissoc :icon :text))]
    [:a anchor-props
     (when icon
       [theme/icon {:class (style.lib/classes :ui/icon-left)
                    :icon  icon}])
     [:span.text text]
     (when external?
       [theme/icon {:class (style.lib/classes :ui/icon-right)
                    :icon  [:fas :arrow-up-right-from-square]}])]))
