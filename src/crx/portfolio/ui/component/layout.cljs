(ns crx.portfolio.ui.component.layout
  (:require
   [crx.portfolio.ui.component.nav :as nav]
   [crx.portfolio.ui.style.font :as font]
   [crx.portfolio.ui.style.proto :as style.proto]
   [crx.portfolio.ui.style.theme :as theme]
   [garden.units :as g.units]))

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
                :flex       1
                :margin     [[0 :auto]]
                :padding    [["5vh" "2vw"]]
                :text-align :center
                :max-width  "350px"}]
      [:div#content {:display         :flex
                     :flex            2
                     :flex-direction  :column
                     :justify-content :space-between
                     :height          "100%"
                     :margin          [["5vh" "2vw"]]}
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
         [:header {:flex      0
                   :padding   [["2vh" 0]]
                   :width     "100%"
                   :max-width "100%"}
          [:img#logo {:max-height "10vh"
                      :max-width  "85%"}]]
         [:div#content {:margin [["2vh" :auto]]}]]]]])]])

(defn header
  [props]
  [:header
   [:img#logo {:src "img/crxdev-logo.svg" :alt "crx//dev"}]
   [nav/component (:nav props)]])

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
