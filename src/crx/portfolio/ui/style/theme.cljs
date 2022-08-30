(ns crx.portfolio.ui.style.theme
  (:require
   #_["@fortawesome/react-fontawesome" :as react-fa]
   [garden.selectors :as g.sel]
   [garden.stylesheet :as g.stylesheet]
   [garden.units :as g.units]
   [crx.portfolio.ui.style.font :as font]
   [crx.portfolio.ui.style.proto :as style.proto]))

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
  (partial
   g.stylesheet/at-media
   {:screen    true
    :min-width (g.units/px+ tablet-width 1)}))

(def at-media-tablet
  (partial
   g.stylesheet/at-media
   {:screen    true
    :max-width tablet-width}))

(def at-media-tablet-strict
  (partial
   g.stylesheet/at-media
   {:screen    true
    :min-width (g.units/px+ mobile-width 1)
    :max-width tablet-width}))

(def at-media-mobile
  (partial
   g.stylesheet/at-media
   {:screen    true
    :max-width mobile-width}))

(def at-media-not-mobile
  (partial
   g.stylesheet/at-media
   {:screen    true
    :min-width (g.units/px+ mobile-width 1)}))

(def at-media-small
  (partial
   g.stylesheet/at-media
   {:screen    true
    :max-width small-width}))

(def at-media-not-small
  (partial
   g.stylesheet/at-media
   {:screen    true
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

;; (def icon
;;   (r/adapt-react-class react-fa/FontAwesomeIcon))

(defmethod style.proto/->styles ::styles
  [_]
  [[:html :body
    {:color            (=>color ::light-gray)
     :background-color (=>color ::dark-gray)
     :font-family      font/stack
     :font-size        text-size-baseline
     :font-weight      200
     :height           "100%"
     :margin           0
     :padding          0}]

   [:p {:margin "0.5em"}]

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
    {:border-bottom   [["2px" :dashed (=>color ::green)]]
     :color           (=>color ::green)
     :cursor          :pointer
     :text-decoration :none}]

   [:a:hover :a:visited:hover
    {:border-bottom-style :solid}]

   [:hr {:color        (=>color ::white)
         :border       "1px solid"
         :border-color (=>color ::white)
         :width        "100%"}]

   [:input
    [(g.stylesheet/at-supports
      {:-webkit-appearance :none}
      [:& {:-webkit-appearance :none}])]
    [(g.stylesheet/at-supports
      {:-webkit-border-radius 0}
      [:& {:-webkit-border-radius 0
           :border-radius         0}])]]

   [:ui/input
    {:box-sizing    :border-box
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
    [:ui/input
     {:border-bottom "2px dotted red"}]]

   [:button :ui/button-link
    (g.sel/input (g.sel/attr= :type :submit))
    {:background (=>color ::white)
     :border     :none
     :color      :white
     :cursor     :pointer
     :font-size  text-size-lg
     :min-width  "150px"
     :padding    "7.5px 15px"
     :text-align "center"
     :transition "background 150ms ease"
     :width      "25%"}
    [:&:focus {:outline :none}]
    [:&:hover {:background (=>color ::white) :color :white}]
    [:&:disabled {:background (=>color ::light-gray) :cursor :not-allowed}]
    [:&:disabled:hover {:background :auto}]]

   [(g.sel/a :ui/button-link)
    {:padding-bottom  "0.5em"
     :text-decoration :none}
    [:&:hover {:text-decoration :underline}]]

   [:pre
    :span.code
    :ui/code
    {:background  "rgb(245,242,240)"
     :box-sizing  :border-box
     :font-family font/code-stack
     :padding     "2px 5px"
     :white-space :nowrap}]

   [:ui/emphasis   {:font-weight :bolder}]
   [:ui/error      {:color (=>color ::red)}]
   [:ui/hide       {:display :none}]
   [:ui/italic     {:font-style :italic}]
   [:ui/loading    {:font-family :monospace}]
   [:ui/text-xs    {:font-size text-size-xs}]
   [:ui/text-sm    {:font-size text-size-sm}]
   [:ui/text-reg   {:font-size text-size-reg}]
   [:ui/text-lg    {:font-size text-size-lg}]
   [:ui/text-xl    {:font-size text-size-xl}]
   [:ui/underlined {:text-decoration :underline}]

   [:ui/flex
    {:display "flex"}
    [(g.stylesheet/at-supports
      {:display "-webkit-box"}
      [:& {:display "-webkit-box"}])]
    [(g.stylesheet/at-supports
      {:display "-moz-box"}
      [:& {:display "-moz-box"}])]
    [(g.stylesheet/at-supports
      {:display "-ms-flexbox"}
      [:& {:display "-ms-flexbox"}])]
    [(g.stylesheet/at-supports
      {:display "-webkit-flex"}
      [:& {:display "-webkit-flex"}])]]

   [:ui/space-between
    {:justify-content "space-between"}
    [(g.stylesheet/at-supports
      {:-webkit-box-pack "justify"}
      [:& {:-webkit-box-pack "justify"}])]
    [(g.stylesheet/at-supports
      {:-moz-box-pack "justify"}
      [:& {:-moz-box-pack "justify"}])]
    [(g.stylesheet/at-supports
      {:-ms-flex-pack "justify"}
      [:& {:-ms-flex-pack "justify"}])]]

   [:ui/space-around
    {:justify-content "space-around"}
    [(g.stylesheet/at-supports
      {:-ms-flex-pack "distribute"}
      [:& {:-ms-flex-pack "distribute"}])]]

   [:ui/vertical-center
    {:justify-content "center"}
    [(g.stylesheet/at-supports
      {:-webkit-box-pack "center"}
      [:& {:-webkit-box-pack "center"}])]
    [(g.stylesheet/at-supports
      {:-moz-box-pack "center"}
      [:& {:-moz-box-pack "center"}])]
    [(g.stylesheet/at-supports
      {:-webkit-justify-content "center"}
      [:& {:-webkit-justify-content "center"}])]
    [(g.stylesheet/at-supports
      {:-ms-flex-pack "center"}
      [:& {:-ms-flex-pack "center"}])]]

   [:ui/justify-content-start
    {:justify-content "start"}
    [(g.stylesheet/at-supports
      {:-webkit-box-pack "start"}
      [:& {:-webkit-box-pack "start"}])]
    [(g.stylesheet/at-supports
      {:-moz-box-pack "start"}
      [:& {:-moz-box-pack "start"}])]
    [(g.stylesheet/at-supports
      {:-webkit-justify-content "start"}
      [:& {:-webkit-justify-content "start"}])]
    [(g.stylesheet/at-supports
      {:-ms-flex-pack "start"}
      [:& {:-ms-flex-pack "start"}])]]

   [:ui/align-center
    {:align-items "center"}
    [(g.stylesheet/at-supports
      {:-webkit-box-align "center"}
      [:& {:-webkit-box-align "center"}])]
    [(g.stylesheet/at-supports
      {:-ms-flex-align "center"}
      [:& {:-ms-flex-align "center"}])]]

   [:ui/grid
    {:display         :flex
     :flex-direction  :row
     :justify-content :space-between
     :align-items     :flex-start
     :flex-wrap       :wrap}
    [:ui.grid/card
     {:flex-basis "40%"
      :min-height "30%"
      :font-size  "0.8em"
      :margin     [["1vh 1vw"]]}
     [:ui.grid.card/hero {}]
     [:ui.grid.card/title {}]
     [:uiui.grid.card/description {}]]]

   [(at-media-desktop
     [[:ui/not-desktop :ui/mobile-only :ui/tablet-only {:display :none}]])]
   [(at-media-not-mobile
     [[:a {:transition "color 150ms ease"}]])]
   [(at-media-tablet
     [[:body {:font-size "1.2rem"}]
      [:ui/not-tablet :ui/desktop-only :ui/mobile-only {:display :none}]])]
   [(at-media-tablet-strict [])]
   [(at-media-mobile
     [[:body {:font-size "1.1rem"}]
      [:p :li {:line-height "1.75rem"}]
      [:ui/input {:width "100%" :max-width :none}]
      [:button {:width "100%" :max-width :none}]
      [:ui/not-mobile :ui/desktop-only :ui/tablet-only {:display :none}]
      [:footer {:padding "0 7vw"}]])]])
