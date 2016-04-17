// Compiled by ClojureScript 1.8.40 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34553_34567 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34554_34568 = null;
var count__34555_34569 = (0);
var i__34556_34570 = (0);
while(true){
if((i__34556_34570 < count__34555_34569)){
var f_34571 = cljs.core._nth.call(null,chunk__34554_34568,i__34556_34570);
cljs.core.println.call(null,"  ",f_34571);

var G__34572 = seq__34553_34567;
var G__34573 = chunk__34554_34568;
var G__34574 = count__34555_34569;
var G__34575 = (i__34556_34570 + (1));
seq__34553_34567 = G__34572;
chunk__34554_34568 = G__34573;
count__34555_34569 = G__34574;
i__34556_34570 = G__34575;
continue;
} else {
var temp__4657__auto___34576 = cljs.core.seq.call(null,seq__34553_34567);
if(temp__4657__auto___34576){
var seq__34553_34577__$1 = temp__4657__auto___34576;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34553_34577__$1)){
var c__29231__auto___34578 = cljs.core.chunk_first.call(null,seq__34553_34577__$1);
var G__34579 = cljs.core.chunk_rest.call(null,seq__34553_34577__$1);
var G__34580 = c__29231__auto___34578;
var G__34581 = cljs.core.count.call(null,c__29231__auto___34578);
var G__34582 = (0);
seq__34553_34567 = G__34579;
chunk__34554_34568 = G__34580;
count__34555_34569 = G__34581;
i__34556_34570 = G__34582;
continue;
} else {
var f_34583 = cljs.core.first.call(null,seq__34553_34577__$1);
cljs.core.println.call(null,"  ",f_34583);

var G__34584 = cljs.core.next.call(null,seq__34553_34577__$1);
var G__34585 = null;
var G__34586 = (0);
var G__34587 = (0);
seq__34553_34567 = G__34584;
chunk__34554_34568 = G__34585;
count__34555_34569 = G__34586;
i__34556_34570 = G__34587;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34588 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28420__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28420__auto__)){
return or__28420__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34588);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34588)))?cljs.core.second.call(null,arglists_34588):arglists_34588));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34557 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34558 = null;
var count__34559 = (0);
var i__34560 = (0);
while(true){
if((i__34560 < count__34559)){
var vec__34561 = cljs.core._nth.call(null,chunk__34558,i__34560);
var name = cljs.core.nth.call(null,vec__34561,(0),null);
var map__34562 = cljs.core.nth.call(null,vec__34561,(1),null);
var map__34562__$1 = ((((!((map__34562 == null)))?((((map__34562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34562):map__34562);
var doc = cljs.core.get.call(null,map__34562__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__34562__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__34589 = seq__34557;
var G__34590 = chunk__34558;
var G__34591 = count__34559;
var G__34592 = (i__34560 + (1));
seq__34557 = G__34589;
chunk__34558 = G__34590;
count__34559 = G__34591;
i__34560 = G__34592;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34557);
if(temp__4657__auto__){
var seq__34557__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34557__$1)){
var c__29231__auto__ = cljs.core.chunk_first.call(null,seq__34557__$1);
var G__34593 = cljs.core.chunk_rest.call(null,seq__34557__$1);
var G__34594 = c__29231__auto__;
var G__34595 = cljs.core.count.call(null,c__29231__auto__);
var G__34596 = (0);
seq__34557 = G__34593;
chunk__34558 = G__34594;
count__34559 = G__34595;
i__34560 = G__34596;
continue;
} else {
var vec__34564 = cljs.core.first.call(null,seq__34557__$1);
var name = cljs.core.nth.call(null,vec__34564,(0),null);
var map__34565 = cljs.core.nth.call(null,vec__34564,(1),null);
var map__34565__$1 = ((((!((map__34565 == null)))?((((map__34565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34565):map__34565);
var doc = cljs.core.get.call(null,map__34565__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__34565__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__34597 = cljs.core.next.call(null,seq__34557__$1);
var G__34598 = null;
var G__34599 = (0);
var G__34600 = (0);
seq__34557 = G__34597;
chunk__34558 = G__34598;
count__34559 = G__34599;
i__34560 = G__34600;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map