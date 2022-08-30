(ns crx.portfolio.ui.lib
  (:require
   [goog.string :as gstring]
   [goog.string.format]))

(def format gstring/format)

(defn truncate
  [n s]
  (let [count-str (count s)
        ellipses "…"
        n         (max n (count ellipses))]
    (println (- n (count ellipses)))
    (if (>= n count-str)
      s
      (str (subs s 0 n) ellipses))))

(comment

  (truncate 1 "hello")

  ;
  )
