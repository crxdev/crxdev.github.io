(ns crx.portfolio.ui.component.layout.holy-grail
  (:require
   [crx.portfolio.ui.router :as router]
   [crx.portfolio.ui.style.font :as font]
   [crx.portfolio.ui.style.lib :as style.lib]
   [crx.portfolio.ui.style.proto :as style.proto]
   [crx.portfolio.ui.style.theme :as theme]
   [garden.units :as g.units]
   [garden.selectors :as g.sel]
   [reagent.core :as r]))

(defmethod style.proto/->styles ::styles
  [_props]
  [[:div#app
    {:background-color (theme/=>color ::theme/dark-gray)
     :color            (theme/=>color ::theme/light-gray)
     :min-width        (g.units/px 1000)}
    [:>
     [:main
      {:display          :flex
       :justify-content  :center
       :background-color (theme/=>color ::theme/dark-gray)
       :color            (theme/=>color ::theme/light-gray)
       :flex-direction   :row
       :font-family      font/stack
       :font-size        theme/text-size-baseline
       :font-weight      200
       :min-height       "100vh"}

      [:header
       {:flex       1
        :margin     [[0 :auto]]
        :text-align :center
        :background (theme/=>color ::theme/white)
        :padding    [["5vh" "2vw"]]}
       [:nav
        {:font-family font/code-stack}
        [:ul
         {:font-size       "0.8em"
          :list-style-type :none
          :text-align      :right
          :margin          0
          :padding         0
          :width           "100%"}
         [:li {:margin [["1ch" 0]]}]]]
       [:img#logo {}]]

      [:div#content
       {:display         :flex
        :flex            2
        :flex-direction  :column
        :justify-content :space-between
        :height          "100%"
        :margin          [["5vh" "5vw"]]}
       [:>
        [:article
         {:flex 5}]]]

      [:footer
       {:color       (theme/=>color ::theme/purple)
        :flex        1
        :font-family font/code-stack
        :font-size   "0.6em"
        :margin-top  "3ch"
        :text-align  :center}
       [:p
        {:display    :inline-block
         :padding    [["3ch" "3ch" "0"]]
         :border-top [["1px" :dotted (theme/=>color ::theme/purple)]]}]]]]]

   [(theme/at-media-not-desktop
     [[:div#app
       {:min-width :auto
        :width     "100vw"}
       [:>
        [:main
         {:flex-direction :column
          :font-size      "2.5ch"}
         [:header
          {:width   "100%"
           :padding [["2vh" 0]]}
          [:nav
           {}
           [:ul
            {:display         :flex
             :flex-direction  :row
             :align-items     :center
             :justify-content :center
             :margin          [[0 :auto]]}
            [:li
             {:margin [["1ch" "2ch"]]}]]]
          [:img#logo
           {:max-width  "85%"
            :max-height "10vh"}]]
         [:div#content
          {:margin [["2vh" :auto]]}
          [:article
           {}]]
         [:footer
          {}
          [:p
           {}]]]]]])]

   [(theme/at-media-mobile
     [[:div#app
       [:>
        [:main
         [:header
          [:nav
           [::menu-btn
            {:display :inline-block}]
           [:ul
            {:display    :none
             :text-align :center}
            [(g.sel/& :ui/show) {:display :block}]]]]]]]])]])

(defn header
  [_props]
  (r/with-let [open? (r/atom nil)]
    [:header
     [:img#logo {:src "img/crxdev-logo.svg" :alt "crx//dev"}]
     [:nav
      [:button
       {:class    (style.lib/classes :ui/mobile-only ::menu-btn)
        :on-click (fn [& _] (swap! open? not))}
       [theme/icon ["fas" (if @open? "angle-up" "angle-down")]]
       "Menu"]
      [:ul {:class (style.lib/classes :ui/not-mobile {:ui/show (true? @open?)})}
       [:li [:a {:href (router/path-for ::router/portfolio)} "portfolio"]]
       [:li [:a {:href "https://github.com/crxdev"} [theme/icon ["fab" "github"]] "crxdev"]]
       [:li [:a {:href "https://github.com/localshred"} [theme/icon ["fab" "github"]] "localshred"]]]]]))

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
