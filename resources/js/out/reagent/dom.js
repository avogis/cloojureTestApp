// Compiled by ClojureScript 1.8.40 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__28420__auto__ = (function (){var and__28408__auto__ = typeof ReactDOM !== 'undefined';
if(and__28408__auto__){
return ReactDOM;
} else {
return and__28408__auto__;
}
})();
if(cljs.core.truth_(or__28420__auto__)){
return or__28420__auto__;
} else {
var and__28408__auto__ = typeof require !== 'undefined';
if(and__28408__auto__){
return require("react-dom");
} else {
return and__28408__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str("dom")].join('')));
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_29958 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_29958){
return (function (){
var _STAR_always_update_STAR_29959 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_29959;
}});})(_STAR_always_update_STAR_29958))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_29958;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args29960 = [];
var len__29489__auto___29963 = arguments.length;
var i__29490__auto___29964 = (0);
while(true){
if((i__29490__auto___29964 < len__29489__auto___29963)){
args29960.push((arguments[i__29490__auto___29964]));

var G__29965 = (i__29490__auto___29964 + (1));
i__29490__auto___29964 = G__29965;
continue;
} else {
}
break;
}

var G__29962 = args29960.length;
switch (G__29962) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29960.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.dom["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
var seq__29971_29975 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__29972_29976 = null;
var count__29973_29977 = (0);
var i__29974_29978 = (0);
while(true){
if((i__29974_29978 < count__29973_29977)){
var v_29979 = cljs.core._nth.call(null,chunk__29972_29976,i__29974_29978);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_29979);

var G__29980 = seq__29971_29975;
var G__29981 = chunk__29972_29976;
var G__29982 = count__29973_29977;
var G__29983 = (i__29974_29978 + (1));
seq__29971_29975 = G__29980;
chunk__29972_29976 = G__29981;
count__29973_29977 = G__29982;
i__29974_29978 = G__29983;
continue;
} else {
var temp__4657__auto___29984 = cljs.core.seq.call(null,seq__29971_29975);
if(temp__4657__auto___29984){
var seq__29971_29985__$1 = temp__4657__auto___29984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29971_29985__$1)){
var c__29231__auto___29986 = cljs.core.chunk_first.call(null,seq__29971_29985__$1);
var G__29987 = cljs.core.chunk_rest.call(null,seq__29971_29985__$1);
var G__29988 = c__29231__auto___29986;
var G__29989 = cljs.core.count.call(null,c__29231__auto___29986);
var G__29990 = (0);
seq__29971_29975 = G__29987;
chunk__29972_29976 = G__29988;
count__29973_29977 = G__29989;
i__29974_29978 = G__29990;
continue;
} else {
var v_29991 = cljs.core.first.call(null,seq__29971_29985__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_29991);

var G__29992 = cljs.core.next.call(null,seq__29971_29985__$1);
var G__29993 = null;
var G__29994 = (0);
var G__29995 = (0);
seq__29971_29975 = G__29992;
chunk__29972_29976 = G__29993;
count__29973_29977 = G__29994;
i__29974_29978 = G__29995;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map