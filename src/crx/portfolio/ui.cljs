(ns crx.portfolio.ui
  "This namespace contains your application and is the entrypoint for 'yarn start'."
  (:require
   [crx.portfolio.ui.config :refer [config]]
   [crx.portfolio.ui.page :as page]
   [crx.portfolio.ui.router :as router]
   [crx.portfolio.ui.style.icon :as icon]
   [reagent.core]
   [reagent.dom :as rd]))

(defn ^:dev/after-load render
  "Render the toplevel component for this app."
  []
  (js/console.log (clj->js {:config config}))
  (->>
   (. js/document getElementById "app")
   (rd/render [page/component])))

(defn ^:export init
  "Run application startup logic."
  []
  (try
    (router/start!)
    (icon/init!)
    (render)
    (catch :default e
      (js/console.error "Error loading the page")
      (js/console.error e)
      (->>
       (. js/document getElementById "app")
       (rd/render [:h1 "An error occurred loading the page"])))))
