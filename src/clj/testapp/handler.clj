(ns testapp.handler
  (:require [ring.adapter.jetty :as jetty]
            [testapp.namer :as namer]
            [compojure.api.sweet :refer :all]
            [hiccup.page :as h]
            [ring.middleware.resource :as resource]))


(def head [:head
            [:link {:rel "stylesheet" :href "https://fonts.googleapis.com/icon?family=Material+Icons"}]
            [:link {:rel "stylesheet" :href "https://code.getmdl.io/1.1.3/material.indigo-pink.min.css"}]
            [:link {:rel "stylesheet" :href "style.css"}]
            [:script {:src "https://code.getmdl.io/1.1.3/material.min.js"}]
            [:title "Agile method"]])

(def navigation [:header {:class "mdl-layout__header"}
                [:div {:class "mdl-layout__header-row"}
                 [:span {:class "mdl-layout-title"} ""]
                 [:div {:class "mdl-layout-spacer"}]
                 [:nav {:class "mdl-navigation"}
                  [:a {:class "mdl-navigation__link" :href "/"} "New Method" ]
                  [:a {:class "mdl-navigation__link" :href "about"} "About" ]]]])


(defn page-content [content]
  (h/html5 head [:body
                [:div {:id "js-here"}]
                [:script {:src "/js/testapp.js" :type "text/javascript"}]
                [:div {:class "mdl-layout mdl-js-layout mdl-layout--fixed-header"}
                navigation content ]]))

(defn method-page [call-function] [:div[:h1 "Your new agile method:"]
                  [:h3 {:id "new-cool-method"} (call-function)]
                  [:a {:class "mdl-button mdl-js-button mdl-button--raised mdl-button--colored" :id "new-method-button" :href "/"} "Get a New Method" ]
                  [:div {:class "mdl-button mdl-js-button mdl-button--raised mdl-button--colored" :id "js-here2"}]
                  [:script {:src "/js/testapp.js" :type "text/javascript"}]])

(defn about-page [] )

(defroutes the-routes
  (GET "/" [] (page-content (method-page namer/get-random-names)))
  (GET "/about" [] (h/html5 head [:body
                                  [:div {:class "mdl-layout mdl-js-layout mdl-layout--fixed-header"}
                                   navigation
                                    [:h3 "I'm a clojure noob"]]]))
  (api
   {:swagger
    {:ui "/api-docs"
     :spec "/swagger.json"
     :data {:info {:title "Sample API"
                   :description "Compojure Api example"}
            :tags [{:name "api", :description "some apis"}]}}}
   (context "/api" []
     :tags ["api"]
     (GET "/plus" []
       :return {:result Long}
       :query-params [x :- Long, y :- Long]
       :summary "adds two numbers together"
       {:status 200
        :headers {"Content-Type" "application/json"}
        :body  {:result (+ x y)}})
      (GET "/new-method" []
        :summary "returns random method"
           {:status 200
            :headers {"Content-Type" "application/json"}
            :body {:result (namer/get-random-names)}}))))

(def app (-> the-routes (resource/wrap-resource "/")))
(def server (jetty/run-jetty #'app {:port 3000 :join? false}))

(.stop server)
(.start server)
