(ns crx.portfolio.ui.page.portfolio
  (:require
   [crx.portfolio.ui.component.layout.holy-grail :as layout]
   [crx.portfolio.ui.component.link :as link]
   [crx.portfolio.ui.page.proto :as page.proto]
   [crx.portfolio.ui.router :as router]
   [crx.portfolio.ui.style.lib :as style.lib]
   [crx.portfolio.ui.style.proto :as style.proto]
   [crx.portfolio.ui.style.theme :as theme]
   [crx.portfolio.ui.data.portfolio :as data.portfolio]
   [reagent.core :as r]))

(defmethod style.proto/->styles ::styles
  [_props]
  [[:iframe {:border :none}]
   [::card-image {:width "100%"}]
   [:ui.grid.card/links {:list-style-type :none
                         :margin          0
                         :padding         0}
    [:li {:line-height "3ch"}]]])

(defn render-project-card-link
  [index link-props]
  [:li {:key index} [link/component link-props]])

(defn render-project-card-tags
  [{:keys [filter-by-tag]} index tag]
  [:li {:key index}
   [link/component {:on-click (fn [] (filter-by-tag tag))
                    :text     (tag data.portfolio/tags)}]])

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
     [:ul {:class (style.lib/classes :ui.grid.card/tags)}
      (doall (map-indexed (partial render-project-card-tags filter-props) tags))])])

(def nav-links
  [{:href (router/path-for ::router/portfolio) :icon [:fas :palette] :text "portfolio"}
   {:href "https://github.com/crxdev" :icon [:fab :github] :text "crxdev"}
   {:href "https://github.com/localshred" :icon [:fab :github] :text "localshred"}])

(defn render
  [props]
  (r/with-let [tag-filter        (r/atom #{})
               filter-by-tag     (fn [tag] (r/rswap! tag-filter conj tag))
               remove-tag-filter (fn [tag] (swap! tag-filter disj tag))
               clear-tag-filters (fn [] (swap! tag-filter #{}))
               filter-props      {:filter-by-tag filter-by-tag}
               visible-projects  (r/track (fn []
                                            (let [tag-filter' @tag-filter]
                                              (if (empty? tag-filter')
                                                data.portfolio/projects
                                                (do
                                                  (js/console.log (clj->js {:tag-filter tag-filter'}))
                                                  (filter (fn [{:keys [tags] :as project}]
                                                            (js/console.log (clj->js project))
                                                            (some tag-filter' tags))
                                                          data.portfolio/projects))))))]

    [layout/component
     (assoc props :nav-links nav-links)
     (when-not (empty? @tag-filter)
       [:<>
        [:ul
         (doall (map-indexed
                 (fn [index tag]
                   [:li {:key index}
                    [:span (tag data.portfolio/tags)]
                    [link/component {:on-click (fn [] (remove-tag-filter tag))
                                     :text (theme/icon [:fas :times])}]])
                 @tag-filter))]
        [link/component {:on-click (fn [] (clear-tag-filters)) :text "Clear All Tags"}]])
     [:div {:class (style.lib/classes :ui/grid :ui/grid3)}
      (doall (map-indexed (partial render-project-card filter-props) @visible-projects))]]))

(defmethod page.proto/component ::router/portfolio
  [props]
  [render props])
