(ns crx.portfolio.ui.style.lib
  (:require
   [clojure.string :as string]
   [garden.stylesheet :as g.stylesheet]))

  ;; TODO: macro hypotheses
(defn ->html-safe
  ([x] (when x (string/replace (str x) #"\W" "-")))
  ([x1 x2 & xs]
   (->>
    (into (vector x1 x2) xs)
    (into (vector) (comp (remove nil?) (map ->html-safe)))
    (string/join " "))))

(defn -classes-mapper
  [cls]
  (if (map? cls)
    (map (fn [[k v]] (when v k)) cls)
    [cls]))

(defn classes
  [& classnames]
  (->>
   (mapcat -classes-mapper classnames)
   (remove nil?)
   (map ->html-safe)))

(defn opacity
  [o]
  (let [ie8 (str "progid:DXImageTransform.Microsoft.Alpha(Opacity=" o ")")
        ie5 (str "alpha(opacity=" o ")")]
    [[:& {:opacity o}]
     [(g.stylesheet/at-supports {:-ms-filter ie8} {:-ms-filter ie8})]
     [(g.stylesheet/at-supports {:filter ie5} {:filter ie5})]]))

(defn -transition-prop
  [[k v]]
  (str (name k) " " v))

(defn transition
  [transitions]
  [[:& {:transition
        (->> transitions
             (map -transition-prop)
             (string/join ", "))}]])
