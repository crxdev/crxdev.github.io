(ns crx.portfolio.ui.static
  (:require
   [crx.portfolio.ui.static.css]
   [crx.portfolio.ui.static.index]
   [crx.portfolio.ui.static.proto :as proto]
   [crx.portfolio.ui.static.style :as style]
   #?@(:node [["fs" :as fs]])))

(def targets
  [{::template-ident ::index}
   {::template-ident ::css}])

(defn spit-content
  [path content]
  #?(:clojure (spit path content)
     :node    (.writeFileSync fs path content)
     :default (println "Can't Write static contents" path (count content))))

;; TODO: read `root-dir` from shadow, closure defines, etc.
(defn generate!
  [& {:crx.portfolio.ui.env/keys [root-dir]
      :or                        {root-dir "resources/public"}
      :as                        props}]
  (doseq [ident targets]
    (prn (symbol (str "generating " ident)))
    (let [props   (-> props
                      (merge ident)
                      (style/>>styles))
          path    (str root-dir (proto/filename props))
          content (proto/content props)]
      (spit-content path content))))
