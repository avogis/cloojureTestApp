(defproject testapp "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [ring "1.4.0"]
                 [compojure "1.5.0"]
                 [hiccup "1.0.5"]
                 [metosin/compojure-api "1.0.2"]
                 [org.clojure/clojurescript "1.8.40"]
                 [reagent "0.6.0-alpha"]
                 [cljs-ajax "0.5.2"]]
  :main ^:skip-aot testapp.core
  :target-path "target/%s"
  :source-paths ["src/clj"]
  :plugins [[lein-figwheel "0.5.1"]]
  :profiles {:uberjar {:aot :all}}
  :cljsbuild {
    :builds [{ :id "testapp"
               :source-paths ["src/cljs"]
               :figwheel true
               :compiler {  :main "testapp.core"
                            :asset-path "js/out"
                            :output-to "resources/js/testapp.js"
                            :output-dir "resources/js/out" } } ]
              }
  :figwheel {:css-dirs ["resources/css"]
             :ring-handler testapp.handler/app}

)
