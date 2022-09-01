(ns crx.portfolio.ui.component.layout.holy-grail
  (:require
   [crx.portfolio.ui.component.link :as link]
   [crx.portfolio.ui.style.font :as font]
   [crx.portfolio.ui.style.lib :as style.lib]
   [crx.portfolio.ui.style.proto :as style.proto]
   [crx.portfolio.ui.style.theme :as theme]
   [garden.units :as g.units]
   [garden.selectors :as g.sel]
   [reagent.core :as r]))

(defmethod style.proto/->styles ::styles
  [_props]
  [[:div#app {:background-color (theme/=>color ::theme/dark-gray)
              :color            (theme/=>color ::theme/light-gray)
              :min-width        (g.units/px 1000)}
    [:>
     [:main {:display          :flex
             :justify-content  :center
             :background-color (theme/=>color ::theme/dark-gray)
             :color            (theme/=>color ::theme/light-gray)
             :flex-direction   :row
             :font-family      font/stack
             :font-size        theme/text-size-baseline
             :font-weight      200
             :min-height       "100vh"}
      [:header {:background (theme/=>color ::theme/white)
                :flex       :auto
                :margin     [[0 :auto]]
                :padding    [["5vh" "2vw"]]
                :text-align :center}
       [:nav {:font-family font/code-stack}
        [:ul {:font-size       "0.8em"
              :list-style-type :none
              :text-align      :right
              :margin          0
              :padding         0
              :width           "100%"}
         [:li {:margin [["1ch" 0]]}]]]
       [:img#logo {}]]

      [:div#content {:display         :flex
                     :flex            2
                     :flex-direction  :column
                     :justify-content :space-between
                     :height          "100%"
                     :margin          [["5vh" "5vw"]]}
       [:>
        [:article {:flex 5}]]]

      [:footer {:color       (theme/=>color ::theme/purple)
                :flex        1
                :font-family font/code-stack
                :font-size   "0.6em"
                :margin-top  "3ch"
                :text-align  :center}
       [:p {:display    :inline-block
            :padding    [["3ch" "3ch" "0"]]
            :border-top [["1px" :dotted (theme/=>color ::theme/purple)]]}]]]]]

   [(theme/at-media-not-desktop
     [[:div#app {:min-width :auto
                 :width     "100vw"}
       [:>
        [:main {:flex-direction :column
                :font-size      "2.5ch"}
         [:header {:flex    0
                   :padding [["2vh" 0]]
                   :width   "100%"}
          [:nav
           [:ul {:align-items     :center
                 :display         :flex
                 :flex-direction  :row
                 :justify-content :center
                 :margin          [[0 :auto]]}
            [:li {:margin [["1ch" "2ch"]]}]]]
          [:img#logo {:max-height "10vh"
                      :max-width  "85%"}]]
         [:div#content {:margin [["2vh" :auto]]}]]]]])]

   [(theme/at-media-mobile
     [[:div#app
       [:>
        [:main
         [:header
          [:nav
           [::menu-btn {:display :inline-block}]
           [:ul {:display    :none
                 :text-align :center}
            [(g.sel/& :ui/show) {:display :block}]]]]]]]])]])

(defn render-nav-link
  [index link-props]
  [:li {:key index} [link/component link-props]])

(defn header
  [{:keys [nav-links]}]
  (r/with-let [nav-open? (r/atom nil)]
    [:header
     [:img#logo {:src "img/crxdev-logo.svg" :alt "crx//dev"}]
     (when (seq nav-links)
       [:nav
        [:button
         {:class    (style.lib/classes :ui/mobile-only ::menu-btn)
          :on-click (fn [& _] (swap! nav-open? not))}
         [theme/icon [:fas (if @nav-open? :angle-up :angle-down)]]
         "Menu"]
        [:ul {:class (style.lib/classes :ui/not-mobile {:ui/show (true? @nav-open?)})}
         (doall (map-indexed render-nav-link nav-links))]])]))

(def copyright-year
  (let [start-year   2022
        current-year (.getFullYear (new js/Date))]
    (if (< start-year current-year)
      (str start-year "-" current-year)
      start-year)))

(defn footer
  []
  [:footer
   [:p "made with <3 by crx//dev" [:br] "copyright " copyright-year]])

(defn component
  [props & children]
  [:main
   [header props]
   [:div#content
    (into [:article] children)
    [footer]]])
