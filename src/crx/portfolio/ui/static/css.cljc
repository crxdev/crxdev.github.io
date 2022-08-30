(ns crx.portfolio.ui.static.css
  (:require
   [clojure.string :as string]
   [garden.core :as g]
   [crx.portfolio.ui.static.proto :as proto]
   [crx.portfolio.ui.static.style :as style]))

(defn ->css
  [props k]
  (if-let [garden (get props k)]
    (g/css {:pretty-print? false} garden)
    (println (str "Couldn't find styles for key " k))))

(defmethod proto/content :crx.portfolio.ui.static/css
  [props]
  (->> (map (partial ->css props) style/styles)
       (string/join "\n")))

(defmethod proto/filename :crx.portfolio.ui.static/css
  [_props]
  "/css/main.css")
