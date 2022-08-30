;;; Directory Local Variables
;;; For more information see (info "(emacs) Directory Variables")

((clojure-mode               ;; .clj files
  ;; Setup common aliases we want available
  (cider-clojure-cli-global-options . "-A:dev:repl")
  (cider-preferred-build-tool . clojure-cli) ;; Always use clojure-cli
  )

 (clojurescript-mode         ;; .cljs files
  ;; (https://shadow-cljs.github.io/docs/UsersGuide.html#_simplify_startup_with_dir_local)
  (cider-default-cljs-repl . shadow)
  ;; (cider-shadow-default-options . "ui")

  ;; Use this if we want to run multiple watches e.g. static css building
  ;; like I used to do in nuid/portal (comment out `cider-shadow-default-options` above)
  (eval
   . (cider-register-cljs-repl-type
      'crxdev-ui
      "(do
        (require
        '[clojure.core.async :as async]
        '[shadow.cljs.devtools.api :as shadow]
        '[clojure.java.shell :as shell])
       (shadow/watch :ui)
       (shadow/watch :static)
       (async/go
        (async/<! (async/timeout 5000))
        (shell/sh \"node\" \"./resources/bin/static.js\"))
       :started)"))

  ;; Use the pre-registered type
  (cider-default-cljs-repl . crxdev-ui)
  ))
