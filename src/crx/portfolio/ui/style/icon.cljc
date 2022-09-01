(ns crx.portfolio.ui.style.icon
  (:require
   ["@fortawesome/fontawesome-svg-core" :as fa]
   ["@fortawesome/free-brands-svg-icons/faGithub" :refer [faGithub]]
   ["@fortawesome/free-brands-svg-icons/faYoutube" :refer [faYoutube]]
   ["@fortawesome/free-solid-svg-icons/faAngleDown" :refer [faAngleDown]]
   ["@fortawesome/free-solid-svg-icons/faAngleUp" :refer [faAngleUp]]
   ["@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare" :refer [faArrowUpRightFromSquare]]
   ["@fortawesome/free-solid-svg-icons/faBookOpen" :refer [faBookOpen]]
   ["@fortawesome/free-solid-svg-icons/faCode" :refer [faCode]]
   ["@fortawesome/free-solid-svg-icons/faGamepad" :refer [faGamepad]]
   ["@fortawesome/free-solid-svg-icons/faGem" :refer [faGem]]
   ["@fortawesome/free-solid-svg-icons/faPalette" :refer [faPalette]]
   ["@fortawesome/free-solid-svg-icons/faTimes" :refer [faTimes]]
   #_["@fortawesome/free-brands-svg-icons/faNpm" :refer [faNpm]]
   #_["@fortawesome/free-regular-svg-icons/faFileAlt" :refer [faFileAlt]]
   #_["@fortawesome/free-regular-svg-icons/faFilePdf" :refer [faFilePdf]]
   #_["@fortawesome/free-solid-svg-icons/faAngleRight" :refer [faAngleRight]]
   #_["@fortawesome/free-solid-svg-icons/faCloudDownloadAlt" :refer [faCloudDownloadAlt]]
   #_["@fortawesome/free-solid-svg-icons/faCheck" :refer [faCheck]]
   #_["@fortawesome/free-solid-svg-icons/faCodeBranch" :refer [faCodeBranch]]
   #_["@fortawesome/free-solid-svg-icons/faEye" :refer [faEye]]
   #_["@fortawesome/free-solid-svg-icons/faEyeSlash" :refer [faEyeSlash]]
   #_["@fortawesome/free-solid-svg-icons/faExclamationCircle" :refer [faExclamationCircle]]
   #_["@fortawesome/free-solid-svg-icons/faExternalLinkAlt" :refer [faExternalLinkAlt]]
   #_["@fortawesome/free-solid-svg-icons/faMicrophone" :refer [faMicrophone]]
   #_["@fortawesome/free-solid-svg-icons/faMobileAlt" :refer [faMobileAlt]]
   #_["@fortawesome/free-solid-svg-icons/faServer" :refer [faServer]]
   #_["@fortawesome/free-solid-svg-icons/faTrashAlt" :refer [faTrashAlt]]))

(defn ^:dev/after-load init!
  []
  (fa/library.add
   faAngleDown
   faAngleUp
   faArrowUpRightFromSquare
   faBookOpen
   faCode
   faGamepad
   faGem
   faGithub
   faPalette
   faTimes
   faYoutube
   #_faAngleRight
   #_faCheck
   #_faCloudDownloadAlt
   #_faCodeBranch
   #_faExclamationCircle
   #_faExternalLinkAlt
   #_faEye
   #_faEyeSlash
   #_faFileAlt
   #_faFilePdf
   #_faMicrophone
   #_faMobileAlt
   #_faNpm
   #_faServer
   #_faTrashAlt))
