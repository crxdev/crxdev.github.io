(ns crx.portfolio.ui.component.nav
  (:require
   [crx.portfolio.ui.component.link :as link]
   [crx.portfolio.ui.router :as router]
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
     [:li {:margin [["1ch" 0]]}
      [(g.sel/& ::selected) {}
       [::link/link {:border-color        (theme/=>color ::theme/dark-gray)
                     :border-bottom-style :solid
                     :color               (theme/=>color ::theme/dark-gray)}]]]]]
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
  [opts index link-props]
  (let [selected-route (:selected opts)
        selected?      (and selected-route
                            (= (router/path-for selected-route)
                               (:href link-props)))
        link-props     (assoc link-props :selected? selected?)]
    (js/console.log (clj->js link-props))
    [:li {:key   index
          :class (style.lib/classes {::selected selected?})}
     [link/component link-props]]))

(def default-nav-links
  [{:href (router/path-for ::router/services) :icon [:fas :user-astronaut] :text "services"}
   {:href (router/path-for ::router/portfolio) :icon [:fas :palette] :text "portfolio"}
   {:href "https://github.com/crxdev" :icon [:fab :github] :text "crxdev"}
   {:href "https://github.com/localshred" :icon [:fab :github] :text "localshred"}])

(defn component
  [{:keys [links selected]
    :or   {links default-nav-links}}]
  (when (seq links)
    (r/with-let [nav-open? (r/atom nil)]
      [:nav {:class (style.lib/classes ::nav)}
       [:button
        {:class    (style.lib/classes :ui/mobile-only ::menu-btn)
         :on-click (fn [& _] (swap! nav-open? not))}
        [theme/icon [:fas (if @nav-open? :angle-up :angle-down)]]
        "Menu"]
       [:ul {:class (style.lib/classes :ui/not-mobile {:ui/show (true? @nav-open?)})}
        (doall (map-indexed (partial render-nav-link {:selected selected}) links))]])))
