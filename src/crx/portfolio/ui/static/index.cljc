(ns crx.portfolio.ui.static.index
  (:require
   [crx.portfolio.ui.static.lib :as gen.lib]
   [crx.portfolio.ui.static.proto :as proto]))

(defn component
  [_props]
  [:html
   [:head
    [:title "crx//dev"]
    [:meta {:charset "utf-8"}]
    [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]

    ;; OpenGraph
    [:meta {:prefix "og: http://ogp.me/ns#" :property "og:site_name" :content "crx//dev"}]
    [:meta {:prefix "og: http://ogp.me/ns#" :property "og:title" :content "crxdev"}]
    [:meta {:prefix "og: http://ogp.me/ns#" :property "og:url" :content "https://crxdev.io"}]
    [:meta {:prefix "og: http://ogp.me/ns#" :property "og:description" :content "Crux Development"}]
    [:meta {:prefix "og: http://ogp.me/ns#" :property "og:image" :content "https://crxdev.io/img/crxdev-logo.svg"}]
    [:meta {:prefix "og: http://ogp.me/ns#" :property "og:image:width" :content "778"}]
    [:meta {:prefix "og: http://ogp.me/ns#" :property "og:image:height" :content "300"}]

    ;; Twitter card
    [:meta {:name "twitter:card" :content "summary_large_image"}]
    [:meta {:name "twitter:site" :content "@crxdev"}]
    [:meta {:name "twitter:title" :content "crx//dev"}]
    [:meta {:name "twitter:description" :content "Crux Development"}]
    [:meta {:name "twitter:url" :content "https://crxdev.io"}]
    [:meta {:name "twitter:image" :content "https://crxdev.io/img/crxdev-logo.svg"}]
    [:meta {:name "twitter:image:alt" :content "crxdev"}]

    [:link {:rel "canonical" :href "https://crxdev.io"}]
    [:link {:rel "shortcut icon" :href "/favicon.ico" :type "image/x-icon"}]

    ;; CSS
    [:link {:rel "stylesheet" :href "/css/main.css" :type "text/css"}]

    [:body
     [:noscript "You need to enable JavaScript to run this app."]
     [:div#app]
     [:script {:src "/js/main.js"}]
     #_[:script "crx.portfolio.ui.init()"]]]])

(defmethod proto/content :crx.portfolio.ui.static/index
  [props]
  (gen.lib/->document (component props)))

(defmethod proto/filename :crx.portfolio.ui.static/index
  [_props]
  "/index.html")
