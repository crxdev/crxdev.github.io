(ns crx.portfolio.ui.state
  (:require
   [clojure.spec.alpha :as s]
   [reagent.core :as r]))

(s/def ::route
  (s/keys
   :opt-un [::handler]))

(defonce route-ratom
  (r/atom nil))

(defonce redirect-route-args-ratom
  (r/atom nil))
