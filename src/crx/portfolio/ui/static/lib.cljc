(ns crx.portfolio.ui.static.lib
  (:require
   [reagent.dom.server :as r.server]))

(defn ->html
  [component]
  (->>
   (if (fn? component) (component) component)
   (r.server/render-to-static-markup)))

(defn ->document
  [component]
  (str
   "<!DOCTYPE html>"
   (->html component)))
