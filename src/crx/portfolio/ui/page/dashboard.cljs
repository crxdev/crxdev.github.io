(ns crx.portfolio.ui.page.dashboard
  (:require
   [crx.portfolio.ui.component.layout.holy-grail :as layout]
   [crx.portfolio.ui.page.proto :as page.proto]
   [crx.portfolio.ui.router :as router]
   [crx.portfolio.ui.style.lib :as style.lib]
   [crx.portfolio.ui.style.proto :as style.proto]
   [crx.portfolio.ui.style.theme :as theme]
   [reagent.core]))

(defmethod style.proto/->styles ::styles
  [_props]
  [[::cards {:flex-direction :row}
    [::card {:margin "1em"
             :width  "250px"}]]
   [::reservations {:width "100%"}
    [:thead {}
     [:th {:border-bottom [["1px" :solid (theme/=>color ::theme/white)]]
           :margin        0
           :padding [["0.5em" 0]]}]]
    [:tbody {}
     [:td {:padding [["0.5em" 0]]}]]]])

(def projects
  [{:key   :nuid-portal
    :title "NuID Developer Portal"
    :image "img/crxdev-logo.svg"
    :description
    [:<>
     [:p "In 2020-2021 I worked for "
      [:a {:href "" :target "_blank"} "NuID"]
      " and wrote their "
      [:a {:href "" :target "_blank"} "developer portal"]
      " along with all of the documentation for how to intereact
        with the NuID ecosystem. I also ended up writing
        SDKs (essentially API wrappers) for Clojure, Ruby,
        Go, and Node.js."]]}
   {:key   :elm-mastermind
    :title "Elm Mastermind"
    :image "img/crxdev-logo.svg"
    :description
    [:<>
     [:p "The game Mastermind (guess the color combination), written in elm."]]}
   {:key   :elm-games
    :title "Elm Games"
    :image "img/crxdev-logo.svg"
    :description
    [:<>
     [:p "Minesweeper and Tic-Tac-Toe, written in elm."]]}
   {:key   :clj-game-of-life
    :title "Clojure Game of Life"
    :image "img/crxdev-logo.svg"
    :description
    [:<>
     [:p "Back when I was learning Clojure, I wrote the Game of Life again."]]}
   {:key   :ruby-game-of-life
    :title "Ruby Game of Life"
    :image "img/crxdev-logo.svg"
    :description
    [:<>
     [:p "My first stab at writing the Game of Life, in Ruby."]]}])

(defn render-card
  [{:keys [key image title description]}]
  [:div
   {:key   key
    :class (style.lib/classes :ui.grid/card)}
   [:img {:class (style.lib/classes :ui.grid.card/hero)
          :src   image}]
   [:h3 {:class (style.lib/classes :ui.grid.card/title)} title]
   (into [:div {:class (style.lib/classes :ui.grid.card/description)}]
         description)])

(defn render
  [props]
  [layout/component
   (assoc props :title "dashboard")
   [:h1 "Work, Work"]
   [:div {:class (style.lib/classes :ui/grid)}
    (map render-card projects)]])

(defmethod page.proto/component ::router/dashboard
  [props]
  [render props])
