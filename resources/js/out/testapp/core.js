// Compiled by ClojureScript 1.8.40 {}
goog.provide('testapp.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
testapp.core.current_method = reagent.core.atom.call(null,"");
testapp.core.method = (function testapp$core$method(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),cljs.core.nth.call(null,(cljs.core.deref.call(null,testapp.core.current_method)["arr"]),(1))], null);
});
testapp.core.handler = (function testapp$core$handler(response){
return cljs.core.reset_BANG_.call(null,testapp.core.current_method,response);
});
testapp.core.get_new_method = (function testapp$core$get_new_method(){
return ajax.core.GET.call(null,"api/new-method",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),testapp.core.handler], null));
});
testapp.core.agile_button = (function testapp$core$agile_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"mdl-button mdl-js-button mdl-button--raised mdl-button--colored",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),testapp.core.get_new_method], null),"Get a New method"], null);
});
testapp.core.button_container = (function testapp$core$button_container(){
return testapp.core.agile_button.call(null);
});
testapp.core.method_container = (function testapp$core$method_container(){
return testapp.core.method.call(null);
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return testapp.core.button_container;},new cljs.core.Symbol("testapp.core","button-container","testapp.core/button-container",-1508037534,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testapp.core","testapp.core",778176510,null),new cljs.core.Symbol(null,"button-container","button-container",226619972,null),"src/cljs/core.cljs",23,1,19,19,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testapp.core.button_container)?testapp.core.button_container.cljs$lang$test:null)]))], null),document.getElementById("js-here2"));
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return testapp.core.method_container;},new cljs.core.Symbol("testapp.core","method-container","testapp.core/method-container",-573657842,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testapp.core","testapp.core",778176510,null),new cljs.core.Symbol(null,"method-container","method-container",1801616368,null),"src/cljs/core.cljs",23,1,22,22,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testapp.core.method_container)?testapp.core.method_container.cljs$lang$test:null)]))], null),document.getElementById("new-cool-method"));

//# sourceMappingURL=core.js.map