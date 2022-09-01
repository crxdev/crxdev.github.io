(ns crx.portfolio.ui.data.portfolio
  (:require
   [cljs.spec.alpha :as s]
   [crx.portfolio.ui.component.link :as link]))

(def tags
  {:clj    "Clojure"
   :cljs   "ClojureScript"
   :docs   "Docs"
   :elm    "Elm"
   :game   "Games"
   :go     "Go"
   :js     "JavaScript"
   :mobile "Mobile"
   :node   "Node.js"
   :oss    "Open Source"
   :ruby   "Ruby"
   :ts     "TypeScript"
   :ui     "UI"
   :ux     "UX"
   :video  "Video"})

(defn tag?
  [t]
  (contains? tags t))

(s/def ::hiccup vector?)
(s/def ::title string?)
(s/def ::description (s/coll-of ::hiccup :min-count 1))
(s/def ::image string?)
(s/def ::video string?)

(s/def ::href string?)
(s/def ::text string?)
(s/def ::target #{"_blank"})
(s/def ::icon (s/tuple #{:far :fab :fas} (s/or :kw keyword? :str string?)))
(s/def ::link (s/keys :req-un [::href ::text]
                      :opt-un [::icon ::target]))
(s/def ::links (s/coll-of ::link))

(s/def ::tags (s/coll-of tag?))

(s/def ::project
  (s/keys :req-un [::title ::description (or ::image ::video)]
          :opt-un [::links ::tags]))

(s/def ::projects (s/coll-of ::project))

(def projects
  [{:title       "NuID Docs, SDKs"
    :image       "img/portfolio/nuid-portal.png"
    :description [[:p "During the pandemic I rewrote "
                   [link/component {:href "https://portal.nuid.io/docs" :text "NuID's developer portal" :target "_blank"}]
                   " along with all of the documentation for how to intereact
                     with the NuID ecosystem. I also ended up writing SDKs (essentially API
                     wrappers) for Clojure, Ruby, Go, and Node.js."]]
    :links       [{:href "https://portal.nuid.io/docs" :icon [:fas :book-open] :text "NuID Developer Portal" :target "_blank"}
                  {:href "https://github.com/orgs/NuID/repositories?q=sdk&type=all&language=&sort=" :icon [:fas :code] :text "Source for SDKs" :target "_blank"}]
    :tags [:oss :docs :ui :ux :ruby :clj :go :node]}
   {:title       "Elm Mastermind"
    :image       "img/portfolio/mastermind.png"
    :description [[:p "The game Mastermind (guess the color combination), written in elm."]]
    :links       [{:href "https://elm-mastermind.netlify.app/" :icon [:fas :gamepad] :text "Play" :target "_blank"}
                  {:href "https://github.com/localshred/elm-mastermind" :icon [:fas :code] :text "Source" :target "_blank"}]
    :tags [:game :elm :ui]}
   {:title       "Elm Games"
    :image       "img/portfolio/minesweeper.png"
    :description [[:p "Minesweeper and Tic-Tac-Toe, written in elm."]]
    :links       [{:href "https://localshred.github.io/elm-games/" :icon [:fas :gamepad] :text "Play" :target "_blank"}
                  {:href "https://github.com/localshred/elm-games" :icon [:fas :code] :text "Source" :target "_blank"}]
    :tags [:game :elm :ui]}
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
                   :target "_blank"}]
    :tags [:game :clj :ruby :video]}])

(comment

  (prn (s/explain-data ::projects projects))

  ;;
  )
