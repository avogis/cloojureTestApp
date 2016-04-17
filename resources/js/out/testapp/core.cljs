(ns testapp.core
  (:require [reagent.core :as r]
            [ajax.core :as ajax]))

(def current-method (r/atom ""))

(defn method []
  (do
    (js/console.log "11111")
    (js/console.log (nth (aget @current-method "arr") 1))
    [:p (nth (aget @current-method "arr") 1)]))

(defn handler [response]
  (do
    (js/console.log "!!!!" (nth (aget response "arr") 1))
  (reset! current-method response)))

(defn get-new-method[]
  (do
    (js/console.log "???")
  (ajax/GET "api/new-method" {:handler handler})))

(defn agile-button []
  [:button {:onClick get-new-method} "New method"])

(defn button-container []
  (agile-button))

(defn method-container []
  (do
    (js/console.log "da fuc"))
  (method))

(r/render [#'button-container] (.getElementById js/document "js-here2"))
(r/render [#'method-container] (.getElementById js/document "js-here"))
;;(r/render [#'method] (.getElementById js/document "js-here"))
