(ns crx.portfolio.ui.page.portfolio
  (:require
   [crx.portfolio.ui.component.layout :as layout]
   [crx.portfolio.ui.component.link :as link]
   [crx.portfolio.ui.data.portfolio :as data.portfolio]
   [crx.portfolio.ui.page.proto :as page.proto]
   [crx.portfolio.ui.router :as router]
   [crx.portfolio.ui.style.font :as font]
   [crx.portfolio.ui.style.lib :as style.lib]
   [crx.portfolio.ui.style.proto :as style.proto]
   [crx.portfolio.ui.style.theme :as theme]
   [garden.selectors :as g.sel]
   [reagent.core :as r]))

(defmethod style.proto/->styles ::styles
  [_props]
  [[:iframe {:border :none}]
   [::pill-list {:display         :flex
                 :flex-flow       [[:row :wrap]]
                 :list-style-type :none
                 :margin          0
                 :padding         0}
    [(g.sel/li ::tag-pill) {:background-color (theme/=>color ::theme/mustard)
                            :border-radius    "16px"
                            :line-height      "2ch"
                            :margin           "0.5ch"}
     [(g.sel/& ::tag-reset) {:background :none}
      [:a {:color     (theme/=>color ::theme/light-gray)
           :font-size "0.6em"}
       [:&:hover {:color (theme/=>color ::theme/dark-gray)}]]]
     [:ui/icon-left {:color (theme/=>color ::theme/dark-gray)}]
     [:a {:border      :none
          :color       (theme/=>color ::theme/dark-gray)
          :font-family font/code-stack
          :font-size   "0.8em"
          :padding     "2ch"
          :white-space :nowrap}]
     [:&:hover {:background-color (theme/=>color ::theme/salmon)}]]]

   [::card-image {:width "100%"}]
   [:ui.grid.card/links {:list-style-type :none
                         :margin          0
                         :padding         0}
    [:li {:line-height "3ch"}]]
   [:ui.grid.card/tags {:margin-top "2ch"}]])

(defn render-project-card-link
  [index link-props]
  [:li {:key index} [link/component link-props]])

(defn render-project-card-tag
  [{:keys [filter-by-tag]} index [tag tag-name]]
  [:li {:key   index
        :class (style.lib/classes ::tag-pill)}
   [link/component {:on-click (fn [] (filter-by-tag tag))
                    :text     tag-name}]])

(defn render-project-card
  [filter-props index {:keys [image title description video links tags]}]
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
       :src             video
       :title           "YouTube video player"
       :allow           "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
       :allowFullScreen :allowFullScreen}])

   (into [:div {:class (style.lib/classes :ui.grid.card/description)}] description)
   (when (seq links)
     [:ul {:class (style.lib/classes :ui.grid.card/links)}
      (doall (map-indexed render-project-card-link links))])
   (when (seq tags)
     [:ul {:class (style.lib/classes :ui.grid.card/tags ::pill-list)}
      (doall (->> tags
                  (map (fn [tag] [tag (get data.portfolio/tags tag)]))
                  (sort-by second)
                  (map-indexed (partial render-project-card-tag filter-props))))])])

(def nav-links
  [{:href (router/path-for ::router/services) :icon [:fas :user-astronaut] :text "services"}
   {:href (router/path-for ::router/portfolio) :icon [:fas :palette] :text "portfolio"}
   {:href "https://github.com/crxdev" :icon [:fab :github] :text "crxdev"}
   {:href "https://github.com/localshred" :icon [:fab :github] :text "localshred"}])

(defn render-tag-pill
  [remove-tag-filter index [tag tag-name]]
  [:li {:key index :class (style.lib/classes ::tag-pill)}
   [link/component {:on-click (partial remove-tag-filter tag)
                    :text     tag-name
                    :icon     [:fas :times]}]])

(defn filtered-projects
  [tags-filter]
  (filter (fn [project] (every? (:tags project) tags-filter))
          data.portfolio/projects))

(defn render
  [_props]
  (r/with-let [tag-filter        (r/atom #{})
               filter-by-tag     (fn [tag & _] (r/rswap! tag-filter conj tag))
               remove-tag-filter (fn [tag] (swap! tag-filter disj tag))
               clear-tag-filters (fn [& _] (swap! tag-filter (constantly #{})))
               filter-props      {:filter-by-tag filter-by-tag}
               visible-projects  (r/track (fn [] (let [tag-filter' @tag-filter]
                                                   (if (empty? tag-filter')
                                                     data.portfolio/projects
                                                     (filtered-projects tag-filter')))))]

    [layout/component
     {:nav {:selected ::router/portfolio}}
     (when-not (empty? @tag-filter)
       [:div
        [:ul {:class (style.lib/classes ::pill-list)}
         (doall (->> @tag-filter
                     (map (fn [tag] [tag (get data.portfolio/tags tag)]))
                     (sort-by second)
                     (map-indexed (partial render-tag-pill remove-tag-filter))))
         [:li {:key "reset-filter" :class (style.lib/classes ::tag-pill ::tag-reset)}
          [link/component {:on-click clear-tag-filters
                           :text     "Reset Filters"}]]]])
     [:div {:class (style.lib/classes :ui/grid :ui/grid3)}
      (doall (map-indexed (partial render-project-card filter-props) @visible-projects))]]))

(defmethod page.proto/component ::router/portfolio
  [props]
  [render props])
