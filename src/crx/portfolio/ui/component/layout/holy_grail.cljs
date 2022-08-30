(ns crx.portfolio.ui.component.layout.holy-grail
  (:require
   [crx.portfolio.ui.style.lib :as style.lib]
   [crx.portfolio.ui.style.proto :as style.proto]
   [crx.portfolio.ui.style.theme :as theme]))

(defn border
  [color]
  [["0px" :solid color]])

(defmethod style.proto/->styles ::styles
  [_props]
  [[:div#app
    [:>
     [:main
      {#_#_:display          :flex
       :background-color (theme/=>color ::theme/dark-gray)
       :flex-direction   :row
       :min-height       "100%"}

      [:header
       {:flex       1
        :margin     [[0 :auto]]
        :text-align :center
        :background (theme/=>color ::theme/white)
        :padding    [["5vh" "2vw"]]}
       [:nav
        [:ul
         {:list-style-type :none
          :text-align      :left}
         [:li {}]]]
       [:img#logo {}]]

      [:div#content
       {:display         :flex
        :flex            2
        :flex-direction  :column
        :justify-content :space-between
        :height          "100%"
        :margin          [["5vh" "5vw"]]}]]]]])

(defn header
  [_props]
  [:header
   {:class (style.lib/classes :ui/flex)}
   [:img#logo {:src "img/crxdev-logo.svg" :alt "crx//dev"}]
   [:nav
    [:ul
     {:class (style.lib/classes :ui/flex)}
     [:li [:a {:href "https://github.com/crxdev"} "@crxdev on Github"]]
     [:li [:a {:href "https://github.com/localshred"} "@localshred on Github"]]]]])

(defn footer
  []
  [:footer
   (let [start-year   2022
         current-year (.getFullYear (new js/Date))
         year         (if (< start-year current-year)
                        (str start-year "-" current-year)
                        start-year)]
     [:p "made with <3 by " [:code "crx//dev"] [:br] "copyright " year])])

(defn component
  [props & children]
  [:main {:class (style.lib/classes :ui/flex :ui/vertical-center)}
   [header props]
   [:div#content
    (into [:article] children)
    [footer]]])
