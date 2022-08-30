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
  [[::card-image {:width "100%"}]])

(def projects
  [{:key   :nuid-portal
    :title "NuID Docs, SDKs"
    :image "img/portfolio/nuid-portal.png"
    :description
    [[:p "In 2020-2021 I worked for "
      [:a {:href "" :target "_blank"} "NuID"]
      " and wrote their "
      [:a {:href "" :target "_blank"} "developer portal"]
      " along with all of the documentation for how to intereact
        with the NuID ecosystem. I also ended up writing
        SDKs (essentially API wrappers) for Clojure, Ruby,
        Go, and Node.js."]]}
   {:key   :elm-mastermind
    :title "Elm Mastermind"
    :image "img/portfolio/mastermind.png"
    :description
    [[:p "The game Mastermind (guess the color combination), written in elm."]]}
   {:key   :elm-games
    :title "Elm Games"
    :image "img/portfolio/minesweeper.png"
    :description
    [[:p "Minesweeper and Tic-Tac-Toe, written in elm."]]}
   {:key   :game-of-life
    :title "Game of Life"
    :video "https://www.youtube-nocookie.com/embed/IqkOy55iFUA"
    :description
    [[:p "Game of life written in Clojure and Ruby, circa 2015."]
     [:p
      [:a {:href "https://github.com/localshred/game_of_life/tree/main/clojure" :target "_blank"}
       [theme/icon ["fab" "github"]]
       "Clojure Source"]
      " | "
      [:a {:href "https://github.com/localshred/game_of_life/tree/main/ruby" :target "_blank"}
       [theme/icon ["fab" "github"]]
       "Ruby Source"]
      " | "
      [:a {:href "https://www.youtube.com/watch?v=IqkOy55iFUA" :target "_blank"}
       [theme/icon ["fab" "youtube"]]
       "Watch on Youtube"]]]}])

(defn render-card
  [{:keys [key image title description video]}]
  [:div
   {:key   key
    :class (style.lib/classes :ui.grid/card)}
   [:h4 {:class (style.lib/classes :ui.grid.card/title)} title]
   (when image
     [:img {:class (style.lib/classes :ui.grid.card/hero ::card-image)
            :src   image}])
   (when video
     [:iframe
      {:class           (style.lib/classes :ui.grid.card/hero)
       :width           "100%"
       :frameborder     0
       :src             video
       :title           "YouTube video player"
       :allow           "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
       :allowFullScreen :allowFullScreen}])

   (into [:div {:class (style.lib/classes :ui.grid.card/description)}]
         description)])

(defn render
  [props]
  [layout/component
   (assoc props :title "dashboard")
   [:div {:class (style.lib/classes :ui/grid :ui/grid3)}
    (map render-card projects)]])

(defmethod page.proto/component ::router/portfolio
  [props]
  [render props])
