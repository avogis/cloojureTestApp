(ns testapp.core
  (:require [reagent.core :as r]
            [ajax.core :as ajax]))

(def current-method (r/atom ""))

(defn method []
    [:h3 (nth (aget @current-method "arr") 1)])

(defn handler [response]
  (reset! current-method response))

(defn get-new-method[]
  (ajax/GET "api/new-method" {:handler handler}))

(defn agile-button []
  [:a {:class "mdl-button mdl-js-button mdl-button--raised mdl-button--colored" :onClick get-new-method} "Get a New method"])

(defn button-container []
  (agile-button))

(defn method-container []
  (method))

(r/render [#'button-container] (.getElementById js/document "js-here2"))
(r/render [#'method-container] (.getElementById js/document "new-cool-method"))
