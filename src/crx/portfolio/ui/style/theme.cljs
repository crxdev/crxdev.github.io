(ns crx.portfolio.ui.style.theme
  (:require
   ["@fortawesome/react-fontawesome" :as react-fa]
   [crx.portfolio.ui.style.font :as font]
   [crx.portfolio.ui.style.lib :as style.lib]
   [crx.portfolio.ui.style.proto :as style.proto]
   [garden.selectors :as g.sel]
   [garden.stylesheet :as g.stylesheet]
   [garden.units :as g.units]
   [reagent.core :as r]))

(def small-width  (g.units/px 384))
(def mobile-width (g.units/px 512))
(def tablet-width (g.units/px 1024))

(def unit    (g.units/px 21))
(def unit*2  (g.units/px* unit 2))
(def unit*3  (g.units/px* unit 3))
(def unit*4  (g.units/px* unit 4))
(def half    (g.units/px* unit 0.5))
(def third   (g.units/px* unit 0.333))
(def seventh (g.units/px* unit 0.14285714285714285))

(def =>color
  {::dark-gray     "#25283D"
   ::green         "#3E9F75"
   ::light-gray    "lightgray"
   ::light-green   "#17cba5"
   ::light-purple  "#c397bf"
   ::lightest-gray "#f4f4f4"
   ::mid-gray      "#979797"
   ::mustard       "#F3DE8A"
   ::purple        "#7E7F9A"
   ::red           "#ec0000"
   ::salmon        "#EB9486"
   ::white         "#fff"})

(def white-svg-filter     "invert(100%)")
(def lightgray-svg-filter "invert(83.5%)")
(def darkgray-svg-filter  "invert(16.5%)")

(def at-media-desktop
  (partial g.stylesheet/at-media {:screen    true
                                  :min-width (g.units/px+ tablet-width 1)}))

(def at-media-tablet
  (partial g.stylesheet/at-media {:screen    true
                                  :max-width tablet-width}))

(def at-media-not-desktop at-media-tablet)

(def at-media-only-tablet
  (partial g.stylesheet/at-media {:screen    true
                                  :min-width (g.units/px+ mobile-width 1)
                                  :max-width tablet-width}))

(def at-media-mobile
  (partial g.stylesheet/at-media {:screen    true
                                  :max-width mobile-width}))

(def at-media-not-mobile
  (partial g.stylesheet/at-media {:screen    true
                                  :min-width (g.units/px+ mobile-width 1)}))

(def at-media-small
  (partial g.stylesheet/at-media {:screen    true
                                  :max-width small-width}))

(def at-media-not-small
  (partial g.stylesheet/at-media {:screen    true
                                  :min-width (g.units/px+ small-width 1)}))

(def padding-not-mobile unit*3)
(def padding-mobile     unit)

(def text-size-baseline "3ch")
(def text-size-xs "0.6em")
(def text-size-sm "0.8em")
(def text-size-reg "1em")
(def text-size-lg "1.2em")
(def text-size-xl text-size-lg)
(def max-content-width "760px")

(def Icon (r/adapt-react-class react-fa/FontAwesomeIcon))

(defn icon
  [props-or-icon]
  (cond
    (vector? props-or-icon) [Icon {:class (style.lib/classes :ui/icon-left) :icon props-or-icon}]
    (map? props-or-icon)    [Icon props-or-icon]
    :else nil))

(defn at-supports
  ([m] (g.stylesheet/at-supports m [:& m]))
  ([m m2] (g.stylesheet/at-supports m [:& (merge m m2)])))

(defmethod style.proto/->styles ::styles
  [_]
  [[:html :body
    {:height           "100%"
     :margin           0
     :padding          0
     :background-color (=>color ::dark-gray)
     :color            (=>color ::light-gray)}]

   [:h1 :h2 :h3 :h4 :h5 :h6
    {:color  (=>color ::salmon)
     :margin [["0.5em" :auto]]}]

   [:h1 {:font-size "2.0em"}]
   [:h2 {:font-size "1.8em"}]
   [:h3 {:font-size "1.6em"}]
   [:h4 {:font-size "1.4em"}]
   [:h5 {:font-size "1.2em"}]
   [:h6 {:font-size "1.0em"}]

   [:h1:first-child
    :h2:first-child
    :h3:first-child
    :h4:first-child
    :h5:first-child
    :h6:first-child
    {:margin-top  0
     :padding-top 0}]

   [:h1:last-child
    :h2:last-child
    :h3:last-child
    :h4:last-child
    :h5:last-child
    :h6:last-child
    {:margin-bottom  0
     :padding-bottom 0}]

   [:a :a:visited
    {:border-bottom   [["1px" :dotted (=>color ::green)]]
     :color           (=>color ::green)
     :cursor          :pointer
     :text-decoration :none}]

   [:a:hover :a:visited:hover
    {:border-bottom-style :solid}]

   [:hr {:color  (=>color ::white)
         :border [["1px" :solid (=>color ::white)]]
         :width  "100%"}]

   [:input
    [(at-supports {:-webkit-appearance :none})]
    [(at-supports {:-webkit-border-radius 0} {:border-radius 0})]]

   [:ui/icon-left {:margin-right "1ch"}]
   [:ui/icon-right {:margin-left "1ch"}]

   [:ui/input {:box-sizing    :border-box
               :display       :block
               :max-width     "350px"
               :min-width     "200px"
               :width         "66%"
               :border        :none
               :border-bottom "2px dotted black"}
    [(g.sel/input (g.sel/not (g.sel/attr= :type :submit)))
     :textarea
     {:border        :none
      :font-size     text-size-lg
      :overflow      :hidden
      :text-overflow :ellipsis
      :width         "100%"}]]

   [:ui/input-row-error
    [:ui/input {:border-bottom "2px dotted red"}]]

   [:button :ui/button-link
    (g.sel/input (g.sel/attr= :type :submit))
    {:background-color (=>color ::green)
     :border           "1px solid transparent"
     :border-radius    "8px"
     :color            (=>color ::white)
     :cursor           :pointer
     :display          :inline-block
     :font-size        text-size-sm
     :padding          [["0.5ch" "1.5ch"]]
     :text-align       :center
     :transition       "background 150ms ease"}
    [:&:focus {:outline :none}]
    [:&:disabled {:background (=>color ::light-gray) :cursor :not-allowed}]
    [:&:disabled:hover {:background :auto}]]

   [(g.sel/a :ui/button-link) {:padding-bottom  "0.5em"
                               :text-decoration :none}
    [:&:hover {:text-decoration :underline}]]

   [:pre :span.code :ui/code
    {:background  "rgb(245,242,240)"
     :box-sizing  :border-box
     :font-family font/code-stack
     :padding     "2px 5px"
     :white-space :nowrap}]

   [:ui/emphasis   {:font-weight :bolder}]
   [:ui/error      {:color (=>color ::red)}]
   [:ui/hide       {:display :none}]
   [:ui/show       {:display :inherit}]
   [:ui/italic     {:font-style :italic}]
   [:ui/loading    {:font-family font/code-stack}]
   [:ui/text-xs    {:font-size text-size-xs}]
   [:ui/text-sm    {:font-size text-size-sm}]
   [:ui/text-reg   {:font-size text-size-reg}]
   [:ui/text-lg    {:font-size text-size-lg}]
   [:ui/text-xl    {:font-size text-size-xl}]
   [:ui/underlined {:text-decoration :underline}]

   [:ui/flex {:display "flex"}
    [(at-supports {:display "-webkit-box"})]
    [(at-supports {:display "-moz-box"})]
    [(at-supports {:display "-ms-flexbox"})]
    [(at-supports {:display "-webkit-flex"})]]

   [:ui/space-between {:justify-content "space-between"}
    [(at-supports {:-webkit-box-pack "justify"})]
    [(at-supports {:-moz-box-pack "justify"})]
    [(at-supports {:-ms-flex-pack "justify"})]]

   [:ui/space-around {:justify-content "space-around"}
    [(at-supports {:-ms-flex-pack "distribute"})]]

   [:ui/vertical-center {:justify-content "center"}
    [(at-supports {:-webkit-box-pack "center"})]
    [(at-supports {:-moz-box-pack "center"})]
    [(at-supports {:-webkit-justify-content "center"})]
    [(at-supports {:-ms-flex-pack "center"})]]

   [:ui/justify-content-start {:justify-content "start"}
    [(at-supports {:-webkit-box-pack "start"})]
    [(at-supports {:-moz-box-pack "start"})]
    [(at-supports {:-webkit-justify-content "start"})]
    [(at-supports {:-ms-flex-pack "start"})]]

   [:ui/align-center {:align-items "center"}
    [(at-supports {:-webkit-box-align "center"})]
    [(at-supports {:-ms-flex-align "center"})]]

   [:ui/grid {:align-items     :stretch
              :display         :flex
              :flex-flow       [[:row :wrap]]
              :justify-content :stretch}
    [:ui.grid/card {:border-radius "8px"
                    :box-shadow    "0px 0px 0px 12px rgba(0,0,0,0.2)"
                    :font-size     "0.8em"
                    :margin        "3ch"
                    :padding       "2ch"
                    :flex-basis    "35%"
                    :min-height    "20ch"}

     [:ui.grid.card/title {:color       (=>color ::salmon)
                           :font-family font/code-stack}]
     [:ui.grid.card/hero {}]
     [:ui.grid.card/description {}]]]

   [(at-media-desktop [[:ui/desktop-only :ui/not-mobile :ui/not-tablet {:display :inherit}]
                       [:ui/not-desktop :ui/mobile-only :ui/tablet-only {:display :none}]
                       [:ui/grid [:ui.grid/card {:flex-basis "35%"}]]])]
   [(at-media-not-desktop [[:ui/grid [:ui.grid/card {:flex-basis "100%"}]]])]

   [(at-media-tablet [[:ui/tablet-only :ui/not-mobile :ui/not-desktop {:display :inherit}]
                      [:body {:font-size "1.2rem"}]
                      [:ui/not-tablet :ui/desktop-only :ui/mobile-only {:display :none}]])]
   [(at-media-only-tablet [])]

   [(at-media-mobile [[:ui/mobile-only :ui/not-tablet :ui/not-desktop {:display :inherit}]
                      [:ui/not-mobile :ui/desktop-only :ui/tablet-only {:display :none}]
                      [:body {:font-size "1.1rem"}]
                      [:p :li {:line-height "1.75rem"}]
                      [:footer {:padding "0 7vw"}]
                      [:ui/input {:width "100%" :max-width :none}]])]
   [(at-media-not-mobile [[:a {:transition "color 150ms ease"}]])]])
