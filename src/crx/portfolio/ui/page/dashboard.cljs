(ns crx.portfolio.ui.page.dashboard
  (:require
   [crx.portfolio.ui.component.layout.holy-grail :as layout]
   [crx.portfolio.ui.component.link :as link]
   [crx.portfolio.ui.page.proto :as page.proto]
   [crx.portfolio.ui.router :as router]
   [crx.portfolio.ui.style.lib :as style.lib]
   [crx.portfolio.ui.style.proto :as style.proto]
   [reagent.core]))

(defmethod style.proto/->styles ::styles
  [_props]
  [[::card-image {:width "100%"}]
   [:ui.grid.card/links {:list-style-type :none
                         :margin          0
                         :padding         0}
    [:li {:line-height "3ch"}]]])

(def projects
  [{:title       "NuID Docs, SDKs"
    :image       "img/portfolio/nuid-portal.png"
    :description [[:p "During the pandemic I rewrote "
                   [link/component {:href "https://portal.nuid.io/docs" :text "NuID's developer portal" :target "_blank"}]
                   " along with all of the documentation for how to intereact
                     with the NuID ecosystem. I also ended up writing SDKs (essentially API
                     wrappers) for Clojure, Ruby, Go, and Node.js."]]
    :links       [{:href "https://portal.nuid.io/docs" :icon [:fas :book-open] :text "NuID Developer Portal" :target "_blank"}
                  {:href "https://github.com/orgs/NuID/repositories?q=sdk&type=all&language=&sort=" :icon [:fas :code] :text "Source for SDKs" :target "_blank"}]}
   {:title       "Elm Mastermind"
    :image       "img/portfolio/mastermind.png"
    :description [[:p "The game Mastermind (guess the color combination), written in elm."]]
    :links       [{:href "https://elm-mastermind.netlify.app/" :icon [:fas :gamepad] :text "Play" :target "_blank"}
                  {:href "https://github.com/localshred/elm-mastermind" :icon [:fas :code] :text "Source" :target "_blank"}]}
   {:title       "Elm Games"
    :image       "img/portfolio/minesweeper.png"
    :description [[:p "Minesweeper and Tic-Tac-Toe, written in elm."]]
    :links       [{:href "https://localshred.github.io/elm-games/" :icon [:fas :gamepad] :text "Play" :target "_blank"}
                  {:href "https://github.com/localshred/elm-games" :icon [:fas :code] :text "Source" :target "_blank"}]}
   {:title       "Game of Life"
    :video       "https://www.youtube-nocookie.com/embed/IqkOy55iFUA"
    :description [[:p "Game of life written in Clojure and Ruby, circa 2015."]]
    :links       [{:href   "https://www.youtube.com/watch?v=IqkOy55iFUA"
                   :icon   [:fab :youtube]
                   :text   "Watch on Youtube"
                   :target "_blank"}
                  {:href   "https://github.com/localshred/game_of_life/tree/main/clojure"
                   :icon   [:fas :code]
                   :text   "Clojure Source"
                   :target "_blank"}
                  {:href   "https://github.com/localshred/game_of_life/tree/main/ruby"
                   :icon   [:fas :code]
                   :text   "Ruby Source"
                   :target "_blank"}]}])
(defn render-card-link
  [index link-props]
  [:li {:key index} [link/component link-props]])

(defn render-card
  [index {:keys [image title description video links]}]
  [:div {:key   index
         :class (style.lib/classes :ui.grid/card)}
   [:h4 {:class (style.lib/classes :ui.grid.card/title)} title]
   (when image
     (let [img              [:img {:class (style.lib/classes :ui.grid.card/hero ::card-image)
                                   :src   image}]
           first-link-props (first links)]
       (if first-link-props
         [:a first-link-props img]
         img)))
   (when video
     [:iframe
      {:class           (style.lib/classes :ui.grid.card/hero)
       :width           "100%"
       :frameborder     0
       :src             video
       :title           "YouTube video player"
       :allow           "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
       :allowFullScreen :allowFullScreen}])

   (into [:div {:class (style.lib/classes :ui.grid.card/description)}] description)
   (when (seq links)
     [:ul {:class (style.lib/classes :ui.grid.card/links)}
      (doall (map-indexed render-card-link links))])])

(def nav-links
  [{:href (router/path-for ::router/portfolio) :icon [:fas :palette] :text "portfolio"}
   {:href "https://github.com/crxdev" :icon [:fab :github] :text "crxdev"}
   {:href "https://github.com/localshred" :icon [:fab :github] :text "localshred"}])

(defn render
  [props]
  [:p "HI from render"]
  [layout/component
   (assoc props :nav-links nav-links)
   [:div {:class (style.lib/classes :ui/grid :ui/grid3)}
    (doall (map-indexed render-card projects))]])

(defmethod page.proto/component ::router/portfolio
  [props]
  [render props])
