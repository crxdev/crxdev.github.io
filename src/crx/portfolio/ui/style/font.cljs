(ns crx.portfolio.ui.style.font
  (:require
   [crx.portfolio.ui.style.proto :as style.proto]
   [garden.stylesheet :as g.stylesheet]))

;; (defmethod style.proto/->styles ::playfair-display
;;   [_]
;;   [[(g.stylesheet/at-import
;;      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap")]])

;; (defmethod style.proto/->styles ::rubik
;;   [_]
;;   [[(g.stylesheet/at-import
;;      "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,500;1,300;1,500&display=swap")]])

(def stack
  [#_"'Playfair Display'"
   #_"Rubik"
   "Baskerville"
   "'Times New Roman'"
   "serif"
   "'Helvetica Neue'"
   "system-ui"
   "-apple-system"
   "BlinkMacSystemFont"
   "'Segoe UI'"
   "Roboto"
   "Oxygen"
   "Ubuntu"
   "Cantarell"
   "'Open Sans'"
   "sans-serif"
   "Helvetica"
   "Arial"
   "'Apple Color Emoji'"
   "'Segoe UI Emoji'"
   "'Segoe UI Symbol'"])

(def code-stack
  ["Consolas"
   "Monaco"
   "'Andale Mono'"
   "'Ubuntu Mono'"
   "monospace"])
