(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [testapp.core]))
(figwheel.client/start {:build-id "testapp", :websocket-url "ws://localhost:3449/figwheel-ws"})

