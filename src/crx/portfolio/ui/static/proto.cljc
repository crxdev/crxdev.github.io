(ns crx.portfolio.ui.static.proto)

(defmulti content :crx.portfolio.ui.static/template-ident)
(defmulti filename :crx.portfolio.ui.static/template-ident)
