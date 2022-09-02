(ns crx.portfolio.ui.component.nav
  (:require
   [crx.portfolio.ui.component.link :as link]
   [crx.portfolio.ui.style.font :as font]
   [crx.portfolio.ui.style.lib :as style.lib]
   [crx.portfolio.ui.style.proto :as style.proto]
   [crx.portfolio.ui.style.theme :as theme]
   [garden.selectors :as g.sel]
   [reagent.core :as r]))

(defmethod style.proto/->styles ::styles
  [_props]
  [[::nav {:font-family font/code-stack}
    [:ul {:font-size       "0.8em"
          :list-style-type :none
          :text-align      :right
          :margin          0
          :padding         0
          :width           "100%"}
     [:li {:margin [["1ch" 0]]}]]]
   [(theme/at-media-not-desktop
     [[::nav
       [:ul {:align-items     :center
             :display         :flex
             :flex-direction  :row
             :justify-content :center
             :margin          [[0 :auto]]}
        [:li {:margin [["1ch" "2ch"]]}]]]])]
   [(theme/at-media-mobile
     [[::nav
       [::menu-btn {:display :inline-block}]
       [:ul {:display    :none
             :text-align :center}
        [(g.sel/& :ui/show) {:display :block}]]]])]])

(defn render-nav-link
  [index link-props]
  [:li {:key index} [link/component link-props]])

(defn component
  [{:keys [nav-links]}]
  (when (seq nav-links)
    (r/with-let [nav-open? (r/atom nil)]
      [:nav {:class (style.lib/classes ::nav)}
       [:button
        {:class    (style.lib/classes :ui/mobile-only ::menu-btn)
         :on-click (fn [& _] (swap! nav-open? not))}
        [theme/icon [:fas (if @nav-open? :angle-up :angle-down)]]
        "Menu"]
       [:ul {:class (style.lib/classes :ui/not-mobile {:ui/show (true? @nav-open?)})}
        (doall (map-indexed render-nav-link nav-links))]])))
