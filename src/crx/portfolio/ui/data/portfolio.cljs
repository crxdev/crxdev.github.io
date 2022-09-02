(ns crx.portfolio.ui.data.portfolio
  (:require
   [cljs.spec.alpha :as s]
   [crx.portfolio.ui.component.link :as link]))

(def tags
  {:clj      "Clojure"
   :cljs     "ClojureScript"
   :docs     "Docs"
   :elm      "Elm"
   :game     "Games"
   :go       "Go"
   :graphql  "GraphQL"
   :js       "JavaScript"
   :mobile   "Mobile"
   :newrelic "NewRelic"
   :node     "Node.js"
   :npm      "NPM"
   :oss      "Open Source"
   :protobuf "Protobuf"
   :rails    "Ruby on Rails"
   :rpc      "RPC"
   :ruby     "Ruby"
   :statsd   "StatsD"
   :ts       "TypeScript"
   :ui       "UI"
   :ux       "UX"
   :video    "Video"})

(def tag? (set (keys tags)))

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

(s/def ::tags (s/coll-of tag? :kind set?))

(s/def ::project
  (s/keys :req-un [::title ::description (or ::image ::video)]
          :opt-un [::links ::tags]))

(s/def ::projects (s/coll-of ::project))

(def projects
  [{:title       "Protobuf RubyGem"
    :image       "img/portfolio/ruby-protobuf.png"
    :description [[:p "Before google provided direct Ruby support for protocol
                       buffers, I forked a fledgling protobuf gem, rewrote it,
                       added RPC support, and released it into the world. As of
                       2022 there are over 7 million gem downloads."]]
    :links       [{:href "https://rubygems.org/gems/protobuf/" :text "RubyGems" :icon [:fas :gem] :target "_blank"}
                  {:href "https://github.com/ruby-protobuf/protobuf" :text "Source" :icon [:fas :code] :target "_blank"}
                  {:href "https://rubydoc.info/gems/protobuf" :text "Docs" :icon [:fas :book-open] :target "_blank"}]
    :tags        #{:ruby :protobuf :rpc :oss}}
   {:title       "NuID Docs, SDKs"
    :image       "img/portfolio/nuid-portal.png"
    :description [[:p "During the pandemic I rewrote "
                   [link/component {:href "https://portal.nuid.io/docs" :text "NuID's developer portal" :target "_blank"}]
                   " along with all of the documentation for how to intereact
                     with the NuID ecosystem. I also ended up writing SDKs
                     (essentially API wrappers) for Clojure, Ruby, Go, and
                     Node.js."]]
    :links       [{:href "https://portal.nuid.io/docs" :icon [:fas :book-open] :text "NuID Developer Portal" :target "_blank"}
                  {:href "https://github.com/orgs/NuID/repositories?q=sdk&type=all&language=&sort=" :icon [:fas :code] :text "Source for SDKs" :target "_blank"}]
    :tags        #{:oss :docs :ui :ux :ruby :clj :go :node :js}}
   {:title       "NSA RubyGem"
    :image       "img/portfolio/nsa-gem.png"
    :description [[:p "Listen to Rails " [:code "ActiveSupport::Notifications"] " and deliver
                       to a Statsd backend. This gem also supports writing your
                       own custom collectors. Built-in support for:"
                   [:ul
                    [:li [:code "ActionController"]]
                    [:li [:code "ActiveRecord"]]
                    [:li [:code "ActiveSupportCache"]]
                    [:li [:code "Sidekiq"]]]]]
    :links       [{:href "https://rubygems.org/gems/nsa/" :text "RubyGems" :icon [:fas :gem] :target "_blank"}
                  {:href "https://github.com/localshred/nsa" :icon [:fas :code] :text "Source" :target "_blank"}
                  {:href "https://rubydoc.info/gems/nsa" :text "Docs" :icon [:fas :book-open] :target "_blank"}]
    :tags        #{:ruby :rails :oss :statsd}}
   {:title       "Apollo-NewRelic NPM Package"
    :image       "img/portfolio/apollo-newrelic-npm.png"
    :description [[:p "Creates a "
                   [link/component {:href   "https://www.apollographql.com/"
                                    :target "_blank"
                                    :text   "NewRelic"}]
                   " transaction with associated custom attributes on each
                     graphql request/response, for use with the "
                   [link/component {:href   "https://www.apollographql.com/"
                                    :target "_blank"
                                    :text   "Apollo GraphQL library"}] "."]]
    :links       [{:href "https://www.npmjs.com/package/apollo-newrelic-extension" :text "NPM" :icon [:fas :gem] :target "_blank"}
                  {:href "https://github.com/localshred/apollo-newrelic-extension" :icon [:fas :code] :text "Source" :target "_blank"}]
    :tags        #{:js :npm :node :graphql :newrelic :oss}}
   {:title       "Elm Mastermind"
    :image       "img/portfolio/mastermind.png"
    :description [[:p "The game Mastermind (guess the color combination), written in elm."]]
    :links       [{:href "https://elm-mastermind.netlify.app/" :icon [:fas :gamepad] :text "Play" :target "_blank"}
                  {:href "https://github.com/localshred/elm-mastermind" :icon [:fas :code] :text "Source" :target "_blank"}]
    :tags        #{:game :elm :ui}}
   {:title       "Elm Games"
    :image       "img/portfolio/minesweeper.png"
    :description [[:p "Minesweeper and Tic-Tac-Toe, written in elm."]]
    :links       [{:href "https://localshred.github.io/elm-games/" :icon [:fas :gamepad] :text "Play" :target "_blank"}
                  {:href "https://github.com/localshred/elm-games" :icon [:fas :code] :text "Source" :target "_blank"}]
    :tags        #{:game :elm :ui}}
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
    :tags        #{:game :clj :ruby :video}}])

;;(comment

(js/console.log "PROJECTS" (s/explain-data ::projects projects))

  ;;
 ;; )
