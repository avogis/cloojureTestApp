(ns testapp.namer
  (:require [clojure.string :as s]))

(def prefix ["Magical", "Amazing", "Extreme", "Practical", "Best", "Functional"])
(def agile-method ["XP", "LeSS", "Scrum", "Kanban"])
(def suffix ["Method", "Design", "Quality"])



(defn random-case [string]
  (if (< 5 (rand-int 10))
    (s/upper-case string)
    (s/lower-case string)))

(defn crazy-case [string]
  (apply str (map random-case string)))


(defn random-names [x y z] (let [new-name (s/join " " [x y z])]
                             (if(< 5 (rand-int 10))
                               (crazy-case new-name)
                               new-name)))

(defn get-random-names [] (random-names (rand-nth prefix) (rand-nth agile-method) (rand-nth suffix)))
(get-random-names)


