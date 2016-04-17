// Compiled by ClojureScript 1.8.40 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28420__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28420__auto__){
return or__28420__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28420__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__28420__auto__)){
return or__28420__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33529_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33529_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__33534 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33535 = null;
var count__33536 = (0);
var i__33537 = (0);
while(true){
if((i__33537 < count__33536)){
var n = cljs.core._nth.call(null,chunk__33535,i__33537);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33538 = seq__33534;
var G__33539 = chunk__33535;
var G__33540 = count__33536;
var G__33541 = (i__33537 + (1));
seq__33534 = G__33538;
chunk__33535 = G__33539;
count__33536 = G__33540;
i__33537 = G__33541;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33534);
if(temp__4657__auto__){
var seq__33534__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33534__$1)){
var c__29231__auto__ = cljs.core.chunk_first.call(null,seq__33534__$1);
var G__33542 = cljs.core.chunk_rest.call(null,seq__33534__$1);
var G__33543 = c__29231__auto__;
var G__33544 = cljs.core.count.call(null,c__29231__auto__);
var G__33545 = (0);
seq__33534 = G__33542;
chunk__33535 = G__33543;
count__33536 = G__33544;
i__33537 = G__33545;
continue;
} else {
var n = cljs.core.first.call(null,seq__33534__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33546 = cljs.core.next.call(null,seq__33534__$1);
var G__33547 = null;
var G__33548 = (0);
var G__33549 = (0);
seq__33534 = G__33546;
chunk__33535 = G__33547;
count__33536 = G__33548;
i__33537 = G__33549;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__33588_33595 = cljs.core.seq.call(null,deps);
var chunk__33589_33596 = null;
var count__33590_33597 = (0);
var i__33591_33598 = (0);
while(true){
if((i__33591_33598 < count__33590_33597)){
var dep_33599 = cljs.core._nth.call(null,chunk__33589_33596,i__33591_33598);
topo_sort_helper_STAR_.call(null,dep_33599,(depth + (1)),state);

var G__33600 = seq__33588_33595;
var G__33601 = chunk__33589_33596;
var G__33602 = count__33590_33597;
var G__33603 = (i__33591_33598 + (1));
seq__33588_33595 = G__33600;
chunk__33589_33596 = G__33601;
count__33590_33597 = G__33602;
i__33591_33598 = G__33603;
continue;
} else {
var temp__4657__auto___33604 = cljs.core.seq.call(null,seq__33588_33595);
if(temp__4657__auto___33604){
var seq__33588_33605__$1 = temp__4657__auto___33604;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33588_33605__$1)){
var c__29231__auto___33606 = cljs.core.chunk_first.call(null,seq__33588_33605__$1);
var G__33607 = cljs.core.chunk_rest.call(null,seq__33588_33605__$1);
var G__33608 = c__29231__auto___33606;
var G__33609 = cljs.core.count.call(null,c__29231__auto___33606);
var G__33610 = (0);
seq__33588_33595 = G__33607;
chunk__33589_33596 = G__33608;
count__33590_33597 = G__33609;
i__33591_33598 = G__33610;
continue;
} else {
var dep_33611 = cljs.core.first.call(null,seq__33588_33605__$1);
topo_sort_helper_STAR_.call(null,dep_33611,(depth + (1)),state);

var G__33612 = cljs.core.next.call(null,seq__33588_33605__$1);
var G__33613 = null;
var G__33614 = (0);
var G__33615 = (0);
seq__33588_33595 = G__33612;
chunk__33589_33596 = G__33613;
count__33590_33597 = G__33614;
i__33591_33598 = G__33615;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33592){
var vec__33594 = p__33592;
var x = cljs.core.nth.call(null,vec__33594,(0),null);
var xs = cljs.core.nthnext.call(null,vec__33594,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33594,x,xs,get_deps__$1){
return (function (p1__33550_SHARP_){
return clojure.set.difference.call(null,p1__33550_SHARP_,x);
});})(vec__33594,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__33628 = cljs.core.seq.call(null,provides);
var chunk__33629 = null;
var count__33630 = (0);
var i__33631 = (0);
while(true){
if((i__33631 < count__33630)){
var prov = cljs.core._nth.call(null,chunk__33629,i__33631);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33632_33640 = cljs.core.seq.call(null,requires);
var chunk__33633_33641 = null;
var count__33634_33642 = (0);
var i__33635_33643 = (0);
while(true){
if((i__33635_33643 < count__33634_33642)){
var req_33644 = cljs.core._nth.call(null,chunk__33633_33641,i__33635_33643);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33644,prov);

var G__33645 = seq__33632_33640;
var G__33646 = chunk__33633_33641;
var G__33647 = count__33634_33642;
var G__33648 = (i__33635_33643 + (1));
seq__33632_33640 = G__33645;
chunk__33633_33641 = G__33646;
count__33634_33642 = G__33647;
i__33635_33643 = G__33648;
continue;
} else {
var temp__4657__auto___33649 = cljs.core.seq.call(null,seq__33632_33640);
if(temp__4657__auto___33649){
var seq__33632_33650__$1 = temp__4657__auto___33649;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33632_33650__$1)){
var c__29231__auto___33651 = cljs.core.chunk_first.call(null,seq__33632_33650__$1);
var G__33652 = cljs.core.chunk_rest.call(null,seq__33632_33650__$1);
var G__33653 = c__29231__auto___33651;
var G__33654 = cljs.core.count.call(null,c__29231__auto___33651);
var G__33655 = (0);
seq__33632_33640 = G__33652;
chunk__33633_33641 = G__33653;
count__33634_33642 = G__33654;
i__33635_33643 = G__33655;
continue;
} else {
var req_33656 = cljs.core.first.call(null,seq__33632_33650__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33656,prov);

var G__33657 = cljs.core.next.call(null,seq__33632_33650__$1);
var G__33658 = null;
var G__33659 = (0);
var G__33660 = (0);
seq__33632_33640 = G__33657;
chunk__33633_33641 = G__33658;
count__33634_33642 = G__33659;
i__33635_33643 = G__33660;
continue;
}
} else {
}
}
break;
}

var G__33661 = seq__33628;
var G__33662 = chunk__33629;
var G__33663 = count__33630;
var G__33664 = (i__33631 + (1));
seq__33628 = G__33661;
chunk__33629 = G__33662;
count__33630 = G__33663;
i__33631 = G__33664;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33628);
if(temp__4657__auto__){
var seq__33628__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33628__$1)){
var c__29231__auto__ = cljs.core.chunk_first.call(null,seq__33628__$1);
var G__33665 = cljs.core.chunk_rest.call(null,seq__33628__$1);
var G__33666 = c__29231__auto__;
var G__33667 = cljs.core.count.call(null,c__29231__auto__);
var G__33668 = (0);
seq__33628 = G__33665;
chunk__33629 = G__33666;
count__33630 = G__33667;
i__33631 = G__33668;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33628__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33636_33669 = cljs.core.seq.call(null,requires);
var chunk__33637_33670 = null;
var count__33638_33671 = (0);
var i__33639_33672 = (0);
while(true){
if((i__33639_33672 < count__33638_33671)){
var req_33673 = cljs.core._nth.call(null,chunk__33637_33670,i__33639_33672);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33673,prov);

var G__33674 = seq__33636_33669;
var G__33675 = chunk__33637_33670;
var G__33676 = count__33638_33671;
var G__33677 = (i__33639_33672 + (1));
seq__33636_33669 = G__33674;
chunk__33637_33670 = G__33675;
count__33638_33671 = G__33676;
i__33639_33672 = G__33677;
continue;
} else {
var temp__4657__auto___33678__$1 = cljs.core.seq.call(null,seq__33636_33669);
if(temp__4657__auto___33678__$1){
var seq__33636_33679__$1 = temp__4657__auto___33678__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33636_33679__$1)){
var c__29231__auto___33680 = cljs.core.chunk_first.call(null,seq__33636_33679__$1);
var G__33681 = cljs.core.chunk_rest.call(null,seq__33636_33679__$1);
var G__33682 = c__29231__auto___33680;
var G__33683 = cljs.core.count.call(null,c__29231__auto___33680);
var G__33684 = (0);
seq__33636_33669 = G__33681;
chunk__33637_33670 = G__33682;
count__33638_33671 = G__33683;
i__33639_33672 = G__33684;
continue;
} else {
var req_33685 = cljs.core.first.call(null,seq__33636_33679__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33685,prov);

var G__33686 = cljs.core.next.call(null,seq__33636_33679__$1);
var G__33687 = null;
var G__33688 = (0);
var G__33689 = (0);
seq__33636_33669 = G__33686;
chunk__33637_33670 = G__33687;
count__33638_33671 = G__33688;
i__33639_33672 = G__33689;
continue;
}
} else {
}
}
break;
}

var G__33690 = cljs.core.next.call(null,seq__33628__$1);
var G__33691 = null;
var G__33692 = (0);
var G__33693 = (0);
seq__33628 = G__33690;
chunk__33629 = G__33691;
count__33630 = G__33692;
i__33631 = G__33693;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__33698_33702 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33699_33703 = null;
var count__33700_33704 = (0);
var i__33701_33705 = (0);
while(true){
if((i__33701_33705 < count__33700_33704)){
var ns_33706 = cljs.core._nth.call(null,chunk__33699_33703,i__33701_33705);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33706);

var G__33707 = seq__33698_33702;
var G__33708 = chunk__33699_33703;
var G__33709 = count__33700_33704;
var G__33710 = (i__33701_33705 + (1));
seq__33698_33702 = G__33707;
chunk__33699_33703 = G__33708;
count__33700_33704 = G__33709;
i__33701_33705 = G__33710;
continue;
} else {
var temp__4657__auto___33711 = cljs.core.seq.call(null,seq__33698_33702);
if(temp__4657__auto___33711){
var seq__33698_33712__$1 = temp__4657__auto___33711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33698_33712__$1)){
var c__29231__auto___33713 = cljs.core.chunk_first.call(null,seq__33698_33712__$1);
var G__33714 = cljs.core.chunk_rest.call(null,seq__33698_33712__$1);
var G__33715 = c__29231__auto___33713;
var G__33716 = cljs.core.count.call(null,c__29231__auto___33713);
var G__33717 = (0);
seq__33698_33702 = G__33714;
chunk__33699_33703 = G__33715;
count__33700_33704 = G__33716;
i__33701_33705 = G__33717;
continue;
} else {
var ns_33718 = cljs.core.first.call(null,seq__33698_33712__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33718);

var G__33719 = cljs.core.next.call(null,seq__33698_33712__$1);
var G__33720 = null;
var G__33721 = (0);
var G__33722 = (0);
seq__33698_33702 = G__33719;
chunk__33699_33703 = G__33720;
count__33700_33704 = G__33721;
i__33701_33705 = G__33722;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__28420__auto__ = goog.require__;
if(cljs.core.truth_(or__28420__auto__)){
return or__28420__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__33723__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33723 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33724__i = 0, G__33724__a = new Array(arguments.length -  0);
while (G__33724__i < G__33724__a.length) {G__33724__a[G__33724__i] = arguments[G__33724__i + 0]; ++G__33724__i;}
  args = new cljs.core.IndexedSeq(G__33724__a,0);
} 
return G__33723__delegate.call(this,args);};
G__33723.cljs$lang$maxFixedArity = 0;
G__33723.cljs$lang$applyTo = (function (arglist__33725){
var args = cljs.core.seq(arglist__33725);
return G__33723__delegate(args);
});
G__33723.cljs$core$IFn$_invoke$arity$variadic = G__33723__delegate;
return G__33723;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33727 = cljs.core._EQ_;
var expr__33728 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33727.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33728))){
var path_parts = ((function (pred__33727,expr__33728){
return (function (p1__33726_SHARP_){
return clojure.string.split.call(null,p1__33726_SHARP_,/[\/\\]/);
});})(pred__33727,expr__33728))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__33727,expr__33728){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33730){if((e33730 instanceof Error)){
var e = e33730;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33730;

}
}})());
});
;})(path_parts,sep,root,pred__33727,expr__33728))
} else {
if(cljs.core.truth_(pred__33727.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33728))){
return ((function (pred__33727,expr__33728){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__33727,expr__33728){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__33727,expr__33728))
);

return deferred.addErrback(((function (deferred,pred__33727,expr__33728){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__33727,expr__33728))
);
});
;})(pred__33727,expr__33728))
} else {
return ((function (pred__33727,expr__33728){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33727,expr__33728))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33731,callback){
var map__33734 = p__33731;
var map__33734__$1 = ((((!((map__33734 == null)))?((((map__33734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33734):map__33734);
var file_msg = map__33734__$1;
var request_url = cljs.core.get.call(null,map__33734__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33734,map__33734__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33734,map__33734__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__30586__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto__){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto__){
return (function (state_33758){
var state_val_33759 = (state_33758[(1)]);
if((state_val_33759 === (7))){
var inst_33754 = (state_33758[(2)]);
var state_33758__$1 = state_33758;
var statearr_33760_33780 = state_33758__$1;
(statearr_33760_33780[(2)] = inst_33754);

(statearr_33760_33780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33759 === (1))){
var state_33758__$1 = state_33758;
var statearr_33761_33781 = state_33758__$1;
(statearr_33761_33781[(2)] = null);

(statearr_33761_33781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33759 === (4))){
var inst_33738 = (state_33758[(7)]);
var inst_33738__$1 = (state_33758[(2)]);
var state_33758__$1 = (function (){var statearr_33762 = state_33758;
(statearr_33762[(7)] = inst_33738__$1);

return statearr_33762;
})();
if(cljs.core.truth_(inst_33738__$1)){
var statearr_33763_33782 = state_33758__$1;
(statearr_33763_33782[(1)] = (5));

} else {
var statearr_33764_33783 = state_33758__$1;
(statearr_33764_33783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33759 === (6))){
var state_33758__$1 = state_33758;
var statearr_33765_33784 = state_33758__$1;
(statearr_33765_33784[(2)] = null);

(statearr_33765_33784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33759 === (3))){
var inst_33756 = (state_33758[(2)]);
var state_33758__$1 = state_33758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33758__$1,inst_33756);
} else {
if((state_val_33759 === (2))){
var state_33758__$1 = state_33758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33758__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33759 === (11))){
var inst_33750 = (state_33758[(2)]);
var state_33758__$1 = (function (){var statearr_33766 = state_33758;
(statearr_33766[(8)] = inst_33750);

return statearr_33766;
})();
var statearr_33767_33785 = state_33758__$1;
(statearr_33767_33785[(2)] = null);

(statearr_33767_33785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33759 === (9))){
var inst_33742 = (state_33758[(9)]);
var inst_33744 = (state_33758[(10)]);
var inst_33746 = inst_33744.call(null,inst_33742);
var state_33758__$1 = state_33758;
var statearr_33768_33786 = state_33758__$1;
(statearr_33768_33786[(2)] = inst_33746);

(statearr_33768_33786[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33759 === (5))){
var inst_33738 = (state_33758[(7)]);
var inst_33740 = figwheel.client.file_reloading.blocking_load.call(null,inst_33738);
var state_33758__$1 = state_33758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33758__$1,(8),inst_33740);
} else {
if((state_val_33759 === (10))){
var inst_33742 = (state_33758[(9)]);
var inst_33748 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33742);
var state_33758__$1 = state_33758;
var statearr_33769_33787 = state_33758__$1;
(statearr_33769_33787[(2)] = inst_33748);

(statearr_33769_33787[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33759 === (8))){
var inst_33738 = (state_33758[(7)]);
var inst_33744 = (state_33758[(10)]);
var inst_33742 = (state_33758[(2)]);
var inst_33743 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33744__$1 = cljs.core.get.call(null,inst_33743,inst_33738);
var state_33758__$1 = (function (){var statearr_33770 = state_33758;
(statearr_33770[(9)] = inst_33742);

(statearr_33770[(10)] = inst_33744__$1);

return statearr_33770;
})();
if(cljs.core.truth_(inst_33744__$1)){
var statearr_33771_33788 = state_33758__$1;
(statearr_33771_33788[(1)] = (9));

} else {
var statearr_33772_33789 = state_33758__$1;
(statearr_33772_33789[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30586__auto__))
;
return ((function (switch__30474__auto__,c__30586__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30475__auto__ = null;
var figwheel$client$file_reloading$state_machine__30475__auto____0 = (function (){
var statearr_33776 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33776[(0)] = figwheel$client$file_reloading$state_machine__30475__auto__);

(statearr_33776[(1)] = (1));

return statearr_33776;
});
var figwheel$client$file_reloading$state_machine__30475__auto____1 = (function (state_33758){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_33758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e33777){if((e33777 instanceof Object)){
var ex__30478__auto__ = e33777;
var statearr_33778_33790 = state_33758;
(statearr_33778_33790[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33791 = state_33758;
state_33758 = G__33791;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30475__auto__ = function(state_33758){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30475__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30475__auto____1.call(this,state_33758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30475__auto____0;
figwheel$client$file_reloading$state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30475__auto____1;
return figwheel$client$file_reloading$state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto__))
})();
var state__30588__auto__ = (function (){var statearr_33779 = f__30587__auto__.call(null);
(statearr_33779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto__);

return statearr_33779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto__))
);

return c__30586__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33792,callback){
var map__33795 = p__33792;
var map__33795__$1 = ((((!((map__33795 == null)))?((((map__33795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33795):map__33795);
var file_msg = map__33795__$1;
var namespace = cljs.core.get.call(null,map__33795__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33795,map__33795__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33795,map__33795__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33797){
var map__33800 = p__33797;
var map__33800__$1 = ((((!((map__33800 == null)))?((((map__33800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33800):map__33800);
var file_msg = map__33800__$1;
var namespace = cljs.core.get.call(null,map__33800__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28408__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__28408__auto__){
var or__28420__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28420__auto__)){
return or__28420__auto__;
} else {
var or__28420__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28420__auto____$1)){
return or__28420__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28408__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33802,callback){
var map__33805 = p__33802;
var map__33805__$1 = ((((!((map__33805 == null)))?((((map__33805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33805):map__33805);
var file_msg = map__33805__$1;
var request_url = cljs.core.get.call(null,map__33805__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33805__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__30586__auto___33893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto___33893,out){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto___33893,out){
return (function (state_33875){
var state_val_33876 = (state_33875[(1)]);
if((state_val_33876 === (1))){
var inst_33853 = cljs.core.nth.call(null,files,(0),null);
var inst_33854 = cljs.core.nthnext.call(null,files,(1));
var inst_33855 = files;
var state_33875__$1 = (function (){var statearr_33877 = state_33875;
(statearr_33877[(7)] = inst_33853);

(statearr_33877[(8)] = inst_33854);

(statearr_33877[(9)] = inst_33855);

return statearr_33877;
})();
var statearr_33878_33894 = state_33875__$1;
(statearr_33878_33894[(2)] = null);

(statearr_33878_33894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (2))){
var inst_33858 = (state_33875[(10)]);
var inst_33855 = (state_33875[(9)]);
var inst_33858__$1 = cljs.core.nth.call(null,inst_33855,(0),null);
var inst_33859 = cljs.core.nthnext.call(null,inst_33855,(1));
var inst_33860 = (inst_33858__$1 == null);
var inst_33861 = cljs.core.not.call(null,inst_33860);
var state_33875__$1 = (function (){var statearr_33879 = state_33875;
(statearr_33879[(11)] = inst_33859);

(statearr_33879[(10)] = inst_33858__$1);

return statearr_33879;
})();
if(inst_33861){
var statearr_33880_33895 = state_33875__$1;
(statearr_33880_33895[(1)] = (4));

} else {
var statearr_33881_33896 = state_33875__$1;
(statearr_33881_33896[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (3))){
var inst_33873 = (state_33875[(2)]);
var state_33875__$1 = state_33875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33875__$1,inst_33873);
} else {
if((state_val_33876 === (4))){
var inst_33858 = (state_33875[(10)]);
var inst_33863 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33858);
var state_33875__$1 = state_33875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33875__$1,(7),inst_33863);
} else {
if((state_val_33876 === (5))){
var inst_33869 = cljs.core.async.close_BANG_.call(null,out);
var state_33875__$1 = state_33875;
var statearr_33882_33897 = state_33875__$1;
(statearr_33882_33897[(2)] = inst_33869);

(statearr_33882_33897[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (6))){
var inst_33871 = (state_33875[(2)]);
var state_33875__$1 = state_33875;
var statearr_33883_33898 = state_33875__$1;
(statearr_33883_33898[(2)] = inst_33871);

(statearr_33883_33898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (7))){
var inst_33859 = (state_33875[(11)]);
var inst_33865 = (state_33875[(2)]);
var inst_33866 = cljs.core.async.put_BANG_.call(null,out,inst_33865);
var inst_33855 = inst_33859;
var state_33875__$1 = (function (){var statearr_33884 = state_33875;
(statearr_33884[(12)] = inst_33866);

(statearr_33884[(9)] = inst_33855);

return statearr_33884;
})();
var statearr_33885_33899 = state_33875__$1;
(statearr_33885_33899[(2)] = null);

(statearr_33885_33899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__30586__auto___33893,out))
;
return ((function (switch__30474__auto__,c__30586__auto___33893,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30475__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30475__auto____0 = (function (){
var statearr_33889 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33889[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30475__auto__);

(statearr_33889[(1)] = (1));

return statearr_33889;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30475__auto____1 = (function (state_33875){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_33875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e33890){if((e33890 instanceof Object)){
var ex__30478__auto__ = e33890;
var statearr_33891_33900 = state_33875;
(statearr_33891_33900[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33901 = state_33875;
state_33875 = G__33901;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30475__auto__ = function(state_33875){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30475__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30475__auto____1.call(this,state_33875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30475__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30475__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto___33893,out))
})();
var state__30588__auto__ = (function (){var statearr_33892 = f__30587__auto__.call(null);
(statearr_33892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto___33893);

return statearr_33892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto___33893,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33902,opts){
var map__33906 = p__33902;
var map__33906__$1 = ((((!((map__33906 == null)))?((((map__33906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33906):map__33906);
var eval_body__$1 = cljs.core.get.call(null,map__33906__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33906__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28408__auto__ = eval_body__$1;
if(cljs.core.truth_(and__28408__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__28408__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e33908){var e = e33908;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__33909_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33909_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__33914){
var vec__33915 = p__33914;
var k = cljs.core.nth.call(null,vec__33915,(0),null);
var v = cljs.core.nth.call(null,vec__33915,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33916){
var vec__33917 = p__33916;
var k = cljs.core.nth.call(null,vec__33917,(0),null);
var v = cljs.core.nth.call(null,vec__33917,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33921,p__33922){
var map__34169 = p__33921;
var map__34169__$1 = ((((!((map__34169 == null)))?((((map__34169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34169):map__34169);
var opts = map__34169__$1;
var before_jsload = cljs.core.get.call(null,map__34169__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34169__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34169__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34170 = p__33922;
var map__34170__$1 = ((((!((map__34170 == null)))?((((map__34170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34170):map__34170);
var msg = map__34170__$1;
var files = cljs.core.get.call(null,map__34170__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34170__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34170__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30586__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto__,map__34169,map__34169__$1,opts,before_jsload,on_jsload,reload_dependents,map__34170,map__34170__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto__,map__34169,map__34169__$1,opts,before_jsload,on_jsload,reload_dependents,map__34170,map__34170__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34323){
var state_val_34324 = (state_34323[(1)]);
if((state_val_34324 === (7))){
var inst_34186 = (state_34323[(7)]);
var inst_34184 = (state_34323[(8)]);
var inst_34185 = (state_34323[(9)]);
var inst_34187 = (state_34323[(10)]);
var inst_34192 = cljs.core._nth.call(null,inst_34185,inst_34187);
var inst_34193 = figwheel.client.file_reloading.eval_body.call(null,inst_34192,opts);
var inst_34194 = (inst_34187 + (1));
var tmp34325 = inst_34186;
var tmp34326 = inst_34184;
var tmp34327 = inst_34185;
var inst_34184__$1 = tmp34326;
var inst_34185__$1 = tmp34327;
var inst_34186__$1 = tmp34325;
var inst_34187__$1 = inst_34194;
var state_34323__$1 = (function (){var statearr_34328 = state_34323;
(statearr_34328[(11)] = inst_34193);

(statearr_34328[(7)] = inst_34186__$1);

(statearr_34328[(8)] = inst_34184__$1);

(statearr_34328[(9)] = inst_34185__$1);

(statearr_34328[(10)] = inst_34187__$1);

return statearr_34328;
})();
var statearr_34329_34415 = state_34323__$1;
(statearr_34329_34415[(2)] = null);

(statearr_34329_34415[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (20))){
var inst_34227 = (state_34323[(12)]);
var inst_34235 = figwheel.client.file_reloading.sort_files.call(null,inst_34227);
var state_34323__$1 = state_34323;
var statearr_34330_34416 = state_34323__$1;
(statearr_34330_34416[(2)] = inst_34235);

(statearr_34330_34416[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (27))){
var state_34323__$1 = state_34323;
var statearr_34331_34417 = state_34323__$1;
(statearr_34331_34417[(2)] = null);

(statearr_34331_34417[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (1))){
var inst_34176 = (state_34323[(13)]);
var inst_34173 = before_jsload.call(null,files);
var inst_34174 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34175 = (function (){return ((function (inst_34176,inst_34173,inst_34174,state_val_34324,c__30586__auto__,map__34169,map__34169__$1,opts,before_jsload,on_jsload,reload_dependents,map__34170,map__34170__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33918_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33918_SHARP_);
});
;})(inst_34176,inst_34173,inst_34174,state_val_34324,c__30586__auto__,map__34169,map__34169__$1,opts,before_jsload,on_jsload,reload_dependents,map__34170,map__34170__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34176__$1 = cljs.core.filter.call(null,inst_34175,files);
var inst_34177 = cljs.core.not_empty.call(null,inst_34176__$1);
var state_34323__$1 = (function (){var statearr_34332 = state_34323;
(statearr_34332[(14)] = inst_34174);

(statearr_34332[(13)] = inst_34176__$1);

(statearr_34332[(15)] = inst_34173);

return statearr_34332;
})();
if(cljs.core.truth_(inst_34177)){
var statearr_34333_34418 = state_34323__$1;
(statearr_34333_34418[(1)] = (2));

} else {
var statearr_34334_34419 = state_34323__$1;
(statearr_34334_34419[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (24))){
var state_34323__$1 = state_34323;
var statearr_34335_34420 = state_34323__$1;
(statearr_34335_34420[(2)] = null);

(statearr_34335_34420[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (39))){
var inst_34277 = (state_34323[(16)]);
var state_34323__$1 = state_34323;
var statearr_34336_34421 = state_34323__$1;
(statearr_34336_34421[(2)] = inst_34277);

(statearr_34336_34421[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (46))){
var inst_34318 = (state_34323[(2)]);
var state_34323__$1 = state_34323;
var statearr_34337_34422 = state_34323__$1;
(statearr_34337_34422[(2)] = inst_34318);

(statearr_34337_34422[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (4))){
var inst_34221 = (state_34323[(2)]);
var inst_34222 = cljs.core.List.EMPTY;
var inst_34223 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34222);
var inst_34224 = (function (){return ((function (inst_34221,inst_34222,inst_34223,state_val_34324,c__30586__auto__,map__34169,map__34169__$1,opts,before_jsload,on_jsload,reload_dependents,map__34170,map__34170__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33919_SHARP_){
var and__28408__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33919_SHARP_);
if(cljs.core.truth_(and__28408__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33919_SHARP_));
} else {
return and__28408__auto__;
}
});
;})(inst_34221,inst_34222,inst_34223,state_val_34324,c__30586__auto__,map__34169,map__34169__$1,opts,before_jsload,on_jsload,reload_dependents,map__34170,map__34170__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34225 = cljs.core.filter.call(null,inst_34224,files);
var inst_34226 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34227 = cljs.core.concat.call(null,inst_34225,inst_34226);
var state_34323__$1 = (function (){var statearr_34338 = state_34323;
(statearr_34338[(12)] = inst_34227);

(statearr_34338[(17)] = inst_34221);

(statearr_34338[(18)] = inst_34223);

return statearr_34338;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34339_34423 = state_34323__$1;
(statearr_34339_34423[(1)] = (16));

} else {
var statearr_34340_34424 = state_34323__$1;
(statearr_34340_34424[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (15))){
var inst_34211 = (state_34323[(2)]);
var state_34323__$1 = state_34323;
var statearr_34341_34425 = state_34323__$1;
(statearr_34341_34425[(2)] = inst_34211);

(statearr_34341_34425[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (21))){
var inst_34237 = (state_34323[(19)]);
var inst_34237__$1 = (state_34323[(2)]);
var inst_34238 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34237__$1);
var state_34323__$1 = (function (){var statearr_34342 = state_34323;
(statearr_34342[(19)] = inst_34237__$1);

return statearr_34342;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34323__$1,(22),inst_34238);
} else {
if((state_val_34324 === (31))){
var inst_34321 = (state_34323[(2)]);
var state_34323__$1 = state_34323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34323__$1,inst_34321);
} else {
if((state_val_34324 === (32))){
var inst_34277 = (state_34323[(16)]);
var inst_34282 = inst_34277.cljs$lang$protocol_mask$partition0$;
var inst_34283 = (inst_34282 & (64));
var inst_34284 = inst_34277.cljs$core$ISeq$;
var inst_34285 = (inst_34283) || (inst_34284);
var state_34323__$1 = state_34323;
if(cljs.core.truth_(inst_34285)){
var statearr_34343_34426 = state_34323__$1;
(statearr_34343_34426[(1)] = (35));

} else {
var statearr_34344_34427 = state_34323__$1;
(statearr_34344_34427[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (40))){
var inst_34298 = (state_34323[(20)]);
var inst_34297 = (state_34323[(2)]);
var inst_34298__$1 = cljs.core.get.call(null,inst_34297,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34299 = cljs.core.get.call(null,inst_34297,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34300 = cljs.core.not_empty.call(null,inst_34298__$1);
var state_34323__$1 = (function (){var statearr_34345 = state_34323;
(statearr_34345[(20)] = inst_34298__$1);

(statearr_34345[(21)] = inst_34299);

return statearr_34345;
})();
if(cljs.core.truth_(inst_34300)){
var statearr_34346_34428 = state_34323__$1;
(statearr_34346_34428[(1)] = (41));

} else {
var statearr_34347_34429 = state_34323__$1;
(statearr_34347_34429[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (33))){
var state_34323__$1 = state_34323;
var statearr_34348_34430 = state_34323__$1;
(statearr_34348_34430[(2)] = false);

(statearr_34348_34430[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (13))){
var inst_34197 = (state_34323[(22)]);
var inst_34201 = cljs.core.chunk_first.call(null,inst_34197);
var inst_34202 = cljs.core.chunk_rest.call(null,inst_34197);
var inst_34203 = cljs.core.count.call(null,inst_34201);
var inst_34184 = inst_34202;
var inst_34185 = inst_34201;
var inst_34186 = inst_34203;
var inst_34187 = (0);
var state_34323__$1 = (function (){var statearr_34349 = state_34323;
(statearr_34349[(7)] = inst_34186);

(statearr_34349[(8)] = inst_34184);

(statearr_34349[(9)] = inst_34185);

(statearr_34349[(10)] = inst_34187);

return statearr_34349;
})();
var statearr_34350_34431 = state_34323__$1;
(statearr_34350_34431[(2)] = null);

(statearr_34350_34431[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (22))){
var inst_34241 = (state_34323[(23)]);
var inst_34240 = (state_34323[(24)]);
var inst_34245 = (state_34323[(25)]);
var inst_34237 = (state_34323[(19)]);
var inst_34240__$1 = (state_34323[(2)]);
var inst_34241__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34240__$1);
var inst_34242 = (function (){var all_files = inst_34237;
var res_SINGLEQUOTE_ = inst_34240__$1;
var res = inst_34241__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34241,inst_34240,inst_34245,inst_34237,inst_34240__$1,inst_34241__$1,state_val_34324,c__30586__auto__,map__34169,map__34169__$1,opts,before_jsload,on_jsload,reload_dependents,map__34170,map__34170__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33920_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33920_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34241,inst_34240,inst_34245,inst_34237,inst_34240__$1,inst_34241__$1,state_val_34324,c__30586__auto__,map__34169,map__34169__$1,opts,before_jsload,on_jsload,reload_dependents,map__34170,map__34170__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34243 = cljs.core.filter.call(null,inst_34242,inst_34240__$1);
var inst_34244 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34245__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34244);
var inst_34246 = cljs.core.not_empty.call(null,inst_34245__$1);
var state_34323__$1 = (function (){var statearr_34351 = state_34323;
(statearr_34351[(23)] = inst_34241__$1);

(statearr_34351[(24)] = inst_34240__$1);

(statearr_34351[(25)] = inst_34245__$1);

(statearr_34351[(26)] = inst_34243);

return statearr_34351;
})();
if(cljs.core.truth_(inst_34246)){
var statearr_34352_34432 = state_34323__$1;
(statearr_34352_34432[(1)] = (23));

} else {
var statearr_34353_34433 = state_34323__$1;
(statearr_34353_34433[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (36))){
var state_34323__$1 = state_34323;
var statearr_34354_34434 = state_34323__$1;
(statearr_34354_34434[(2)] = false);

(statearr_34354_34434[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (41))){
var inst_34298 = (state_34323[(20)]);
var inst_34302 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34303 = cljs.core.map.call(null,inst_34302,inst_34298);
var inst_34304 = cljs.core.pr_str.call(null,inst_34303);
var inst_34305 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34304)].join('');
var inst_34306 = figwheel.client.utils.log.call(null,inst_34305);
var state_34323__$1 = state_34323;
var statearr_34355_34435 = state_34323__$1;
(statearr_34355_34435[(2)] = inst_34306);

(statearr_34355_34435[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (43))){
var inst_34299 = (state_34323[(21)]);
var inst_34309 = (state_34323[(2)]);
var inst_34310 = cljs.core.not_empty.call(null,inst_34299);
var state_34323__$1 = (function (){var statearr_34356 = state_34323;
(statearr_34356[(27)] = inst_34309);

return statearr_34356;
})();
if(cljs.core.truth_(inst_34310)){
var statearr_34357_34436 = state_34323__$1;
(statearr_34357_34436[(1)] = (44));

} else {
var statearr_34358_34437 = state_34323__$1;
(statearr_34358_34437[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (29))){
var inst_34241 = (state_34323[(23)]);
var inst_34240 = (state_34323[(24)]);
var inst_34245 = (state_34323[(25)]);
var inst_34277 = (state_34323[(16)]);
var inst_34243 = (state_34323[(26)]);
var inst_34237 = (state_34323[(19)]);
var inst_34273 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34276 = (function (){var all_files = inst_34237;
var res_SINGLEQUOTE_ = inst_34240;
var res = inst_34241;
var files_not_loaded = inst_34243;
var dependencies_that_loaded = inst_34245;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34241,inst_34240,inst_34245,inst_34277,inst_34243,inst_34237,inst_34273,state_val_34324,c__30586__auto__,map__34169,map__34169__$1,opts,before_jsload,on_jsload,reload_dependents,map__34170,map__34170__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34275){
var map__34359 = p__34275;
var map__34359__$1 = ((((!((map__34359 == null)))?((((map__34359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34359):map__34359);
var namespace = cljs.core.get.call(null,map__34359__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34241,inst_34240,inst_34245,inst_34277,inst_34243,inst_34237,inst_34273,state_val_34324,c__30586__auto__,map__34169,map__34169__$1,opts,before_jsload,on_jsload,reload_dependents,map__34170,map__34170__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34277__$1 = cljs.core.group_by.call(null,inst_34276,inst_34243);
var inst_34279 = (inst_34277__$1 == null);
var inst_34280 = cljs.core.not.call(null,inst_34279);
var state_34323__$1 = (function (){var statearr_34361 = state_34323;
(statearr_34361[(28)] = inst_34273);

(statearr_34361[(16)] = inst_34277__$1);

return statearr_34361;
})();
if(inst_34280){
var statearr_34362_34438 = state_34323__$1;
(statearr_34362_34438[(1)] = (32));

} else {
var statearr_34363_34439 = state_34323__$1;
(statearr_34363_34439[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (44))){
var inst_34299 = (state_34323[(21)]);
var inst_34312 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34299);
var inst_34313 = cljs.core.pr_str.call(null,inst_34312);
var inst_34314 = [cljs.core.str("not required: "),cljs.core.str(inst_34313)].join('');
var inst_34315 = figwheel.client.utils.log.call(null,inst_34314);
var state_34323__$1 = state_34323;
var statearr_34364_34440 = state_34323__$1;
(statearr_34364_34440[(2)] = inst_34315);

(statearr_34364_34440[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (6))){
var inst_34218 = (state_34323[(2)]);
var state_34323__$1 = state_34323;
var statearr_34365_34441 = state_34323__$1;
(statearr_34365_34441[(2)] = inst_34218);

(statearr_34365_34441[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (28))){
var inst_34243 = (state_34323[(26)]);
var inst_34270 = (state_34323[(2)]);
var inst_34271 = cljs.core.not_empty.call(null,inst_34243);
var state_34323__$1 = (function (){var statearr_34366 = state_34323;
(statearr_34366[(29)] = inst_34270);

return statearr_34366;
})();
if(cljs.core.truth_(inst_34271)){
var statearr_34367_34442 = state_34323__$1;
(statearr_34367_34442[(1)] = (29));

} else {
var statearr_34368_34443 = state_34323__$1;
(statearr_34368_34443[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (25))){
var inst_34241 = (state_34323[(23)]);
var inst_34257 = (state_34323[(2)]);
var inst_34258 = cljs.core.not_empty.call(null,inst_34241);
var state_34323__$1 = (function (){var statearr_34369 = state_34323;
(statearr_34369[(30)] = inst_34257);

return statearr_34369;
})();
if(cljs.core.truth_(inst_34258)){
var statearr_34370_34444 = state_34323__$1;
(statearr_34370_34444[(1)] = (26));

} else {
var statearr_34371_34445 = state_34323__$1;
(statearr_34371_34445[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (34))){
var inst_34292 = (state_34323[(2)]);
var state_34323__$1 = state_34323;
if(cljs.core.truth_(inst_34292)){
var statearr_34372_34446 = state_34323__$1;
(statearr_34372_34446[(1)] = (38));

} else {
var statearr_34373_34447 = state_34323__$1;
(statearr_34373_34447[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (17))){
var state_34323__$1 = state_34323;
var statearr_34374_34448 = state_34323__$1;
(statearr_34374_34448[(2)] = recompile_dependents);

(statearr_34374_34448[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (3))){
var state_34323__$1 = state_34323;
var statearr_34375_34449 = state_34323__$1;
(statearr_34375_34449[(2)] = null);

(statearr_34375_34449[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (12))){
var inst_34214 = (state_34323[(2)]);
var state_34323__$1 = state_34323;
var statearr_34376_34450 = state_34323__$1;
(statearr_34376_34450[(2)] = inst_34214);

(statearr_34376_34450[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (2))){
var inst_34176 = (state_34323[(13)]);
var inst_34183 = cljs.core.seq.call(null,inst_34176);
var inst_34184 = inst_34183;
var inst_34185 = null;
var inst_34186 = (0);
var inst_34187 = (0);
var state_34323__$1 = (function (){var statearr_34377 = state_34323;
(statearr_34377[(7)] = inst_34186);

(statearr_34377[(8)] = inst_34184);

(statearr_34377[(9)] = inst_34185);

(statearr_34377[(10)] = inst_34187);

return statearr_34377;
})();
var statearr_34378_34451 = state_34323__$1;
(statearr_34378_34451[(2)] = null);

(statearr_34378_34451[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (23))){
var inst_34241 = (state_34323[(23)]);
var inst_34240 = (state_34323[(24)]);
var inst_34245 = (state_34323[(25)]);
var inst_34243 = (state_34323[(26)]);
var inst_34237 = (state_34323[(19)]);
var inst_34248 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34250 = (function (){var all_files = inst_34237;
var res_SINGLEQUOTE_ = inst_34240;
var res = inst_34241;
var files_not_loaded = inst_34243;
var dependencies_that_loaded = inst_34245;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34241,inst_34240,inst_34245,inst_34243,inst_34237,inst_34248,state_val_34324,c__30586__auto__,map__34169,map__34169__$1,opts,before_jsload,on_jsload,reload_dependents,map__34170,map__34170__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34249){
var map__34379 = p__34249;
var map__34379__$1 = ((((!((map__34379 == null)))?((((map__34379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34379):map__34379);
var request_url = cljs.core.get.call(null,map__34379__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34241,inst_34240,inst_34245,inst_34243,inst_34237,inst_34248,state_val_34324,c__30586__auto__,map__34169,map__34169__$1,opts,before_jsload,on_jsload,reload_dependents,map__34170,map__34170__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34251 = cljs.core.reverse.call(null,inst_34245);
var inst_34252 = cljs.core.map.call(null,inst_34250,inst_34251);
var inst_34253 = cljs.core.pr_str.call(null,inst_34252);
var inst_34254 = figwheel.client.utils.log.call(null,inst_34253);
var state_34323__$1 = (function (){var statearr_34381 = state_34323;
(statearr_34381[(31)] = inst_34248);

return statearr_34381;
})();
var statearr_34382_34452 = state_34323__$1;
(statearr_34382_34452[(2)] = inst_34254);

(statearr_34382_34452[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (35))){
var state_34323__$1 = state_34323;
var statearr_34383_34453 = state_34323__$1;
(statearr_34383_34453[(2)] = true);

(statearr_34383_34453[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (19))){
var inst_34227 = (state_34323[(12)]);
var inst_34233 = figwheel.client.file_reloading.expand_files.call(null,inst_34227);
var state_34323__$1 = state_34323;
var statearr_34384_34454 = state_34323__$1;
(statearr_34384_34454[(2)] = inst_34233);

(statearr_34384_34454[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (11))){
var state_34323__$1 = state_34323;
var statearr_34385_34455 = state_34323__$1;
(statearr_34385_34455[(2)] = null);

(statearr_34385_34455[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (9))){
var inst_34216 = (state_34323[(2)]);
var state_34323__$1 = state_34323;
var statearr_34386_34456 = state_34323__$1;
(statearr_34386_34456[(2)] = inst_34216);

(statearr_34386_34456[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (5))){
var inst_34186 = (state_34323[(7)]);
var inst_34187 = (state_34323[(10)]);
var inst_34189 = (inst_34187 < inst_34186);
var inst_34190 = inst_34189;
var state_34323__$1 = state_34323;
if(cljs.core.truth_(inst_34190)){
var statearr_34387_34457 = state_34323__$1;
(statearr_34387_34457[(1)] = (7));

} else {
var statearr_34388_34458 = state_34323__$1;
(statearr_34388_34458[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (14))){
var inst_34197 = (state_34323[(22)]);
var inst_34206 = cljs.core.first.call(null,inst_34197);
var inst_34207 = figwheel.client.file_reloading.eval_body.call(null,inst_34206,opts);
var inst_34208 = cljs.core.next.call(null,inst_34197);
var inst_34184 = inst_34208;
var inst_34185 = null;
var inst_34186 = (0);
var inst_34187 = (0);
var state_34323__$1 = (function (){var statearr_34389 = state_34323;
(statearr_34389[(7)] = inst_34186);

(statearr_34389[(32)] = inst_34207);

(statearr_34389[(8)] = inst_34184);

(statearr_34389[(9)] = inst_34185);

(statearr_34389[(10)] = inst_34187);

return statearr_34389;
})();
var statearr_34390_34459 = state_34323__$1;
(statearr_34390_34459[(2)] = null);

(statearr_34390_34459[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (45))){
var state_34323__$1 = state_34323;
var statearr_34391_34460 = state_34323__$1;
(statearr_34391_34460[(2)] = null);

(statearr_34391_34460[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (26))){
var inst_34241 = (state_34323[(23)]);
var inst_34240 = (state_34323[(24)]);
var inst_34245 = (state_34323[(25)]);
var inst_34243 = (state_34323[(26)]);
var inst_34237 = (state_34323[(19)]);
var inst_34260 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34262 = (function (){var all_files = inst_34237;
var res_SINGLEQUOTE_ = inst_34240;
var res = inst_34241;
var files_not_loaded = inst_34243;
var dependencies_that_loaded = inst_34245;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34241,inst_34240,inst_34245,inst_34243,inst_34237,inst_34260,state_val_34324,c__30586__auto__,map__34169,map__34169__$1,opts,before_jsload,on_jsload,reload_dependents,map__34170,map__34170__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34261){
var map__34392 = p__34261;
var map__34392__$1 = ((((!((map__34392 == null)))?((((map__34392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34392):map__34392);
var namespace = cljs.core.get.call(null,map__34392__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34392__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34241,inst_34240,inst_34245,inst_34243,inst_34237,inst_34260,state_val_34324,c__30586__auto__,map__34169,map__34169__$1,opts,before_jsload,on_jsload,reload_dependents,map__34170,map__34170__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34263 = cljs.core.map.call(null,inst_34262,inst_34241);
var inst_34264 = cljs.core.pr_str.call(null,inst_34263);
var inst_34265 = figwheel.client.utils.log.call(null,inst_34264);
var inst_34266 = (function (){var all_files = inst_34237;
var res_SINGLEQUOTE_ = inst_34240;
var res = inst_34241;
var files_not_loaded = inst_34243;
var dependencies_that_loaded = inst_34245;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34241,inst_34240,inst_34245,inst_34243,inst_34237,inst_34260,inst_34262,inst_34263,inst_34264,inst_34265,state_val_34324,c__30586__auto__,map__34169,map__34169__$1,opts,before_jsload,on_jsload,reload_dependents,map__34170,map__34170__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34241,inst_34240,inst_34245,inst_34243,inst_34237,inst_34260,inst_34262,inst_34263,inst_34264,inst_34265,state_val_34324,c__30586__auto__,map__34169,map__34169__$1,opts,before_jsload,on_jsload,reload_dependents,map__34170,map__34170__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34267 = setTimeout(inst_34266,(10));
var state_34323__$1 = (function (){var statearr_34394 = state_34323;
(statearr_34394[(33)] = inst_34265);

(statearr_34394[(34)] = inst_34260);

return statearr_34394;
})();
var statearr_34395_34461 = state_34323__$1;
(statearr_34395_34461[(2)] = inst_34267);

(statearr_34395_34461[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (16))){
var state_34323__$1 = state_34323;
var statearr_34396_34462 = state_34323__$1;
(statearr_34396_34462[(2)] = reload_dependents);

(statearr_34396_34462[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (38))){
var inst_34277 = (state_34323[(16)]);
var inst_34294 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34277);
var state_34323__$1 = state_34323;
var statearr_34397_34463 = state_34323__$1;
(statearr_34397_34463[(2)] = inst_34294);

(statearr_34397_34463[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (30))){
var state_34323__$1 = state_34323;
var statearr_34398_34464 = state_34323__$1;
(statearr_34398_34464[(2)] = null);

(statearr_34398_34464[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (10))){
var inst_34197 = (state_34323[(22)]);
var inst_34199 = cljs.core.chunked_seq_QMARK_.call(null,inst_34197);
var state_34323__$1 = state_34323;
if(inst_34199){
var statearr_34399_34465 = state_34323__$1;
(statearr_34399_34465[(1)] = (13));

} else {
var statearr_34400_34466 = state_34323__$1;
(statearr_34400_34466[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (18))){
var inst_34231 = (state_34323[(2)]);
var state_34323__$1 = state_34323;
if(cljs.core.truth_(inst_34231)){
var statearr_34401_34467 = state_34323__$1;
(statearr_34401_34467[(1)] = (19));

} else {
var statearr_34402_34468 = state_34323__$1;
(statearr_34402_34468[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (42))){
var state_34323__$1 = state_34323;
var statearr_34403_34469 = state_34323__$1;
(statearr_34403_34469[(2)] = null);

(statearr_34403_34469[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (37))){
var inst_34289 = (state_34323[(2)]);
var state_34323__$1 = state_34323;
var statearr_34404_34470 = state_34323__$1;
(statearr_34404_34470[(2)] = inst_34289);

(statearr_34404_34470[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (8))){
var inst_34197 = (state_34323[(22)]);
var inst_34184 = (state_34323[(8)]);
var inst_34197__$1 = cljs.core.seq.call(null,inst_34184);
var state_34323__$1 = (function (){var statearr_34405 = state_34323;
(statearr_34405[(22)] = inst_34197__$1);

return statearr_34405;
})();
if(inst_34197__$1){
var statearr_34406_34471 = state_34323__$1;
(statearr_34406_34471[(1)] = (10));

} else {
var statearr_34407_34472 = state_34323__$1;
(statearr_34407_34472[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30586__auto__,map__34169,map__34169__$1,opts,before_jsload,on_jsload,reload_dependents,map__34170,map__34170__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30474__auto__,c__30586__auto__,map__34169,map__34169__$1,opts,before_jsload,on_jsload,reload_dependents,map__34170,map__34170__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30475__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30475__auto____0 = (function (){
var statearr_34411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34411[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30475__auto__);

(statearr_34411[(1)] = (1));

return statearr_34411;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30475__auto____1 = (function (state_34323){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_34323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e34412){if((e34412 instanceof Object)){
var ex__30478__auto__ = e34412;
var statearr_34413_34473 = state_34323;
(statearr_34413_34473[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34474 = state_34323;
state_34323 = G__34474;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30475__auto__ = function(state_34323){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30475__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30475__auto____1.call(this,state_34323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30475__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30475__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto__,map__34169,map__34169__$1,opts,before_jsload,on_jsload,reload_dependents,map__34170,map__34170__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30588__auto__ = (function (){var statearr_34414 = f__30587__auto__.call(null);
(statearr_34414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto__);

return statearr_34414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto__,map__34169,map__34169__$1,opts,before_jsload,on_jsload,reload_dependents,map__34170,map__34170__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30586__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34477,link){
var map__34480 = p__34477;
var map__34480__$1 = ((((!((map__34480 == null)))?((((map__34480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34480):map__34480);
var file = cljs.core.get.call(null,map__34480__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34480,map__34480__$1,file){
return (function (p1__34475_SHARP_,p2__34476_SHARP_){
if(cljs.core._EQ_.call(null,p1__34475_SHARP_,p2__34476_SHARP_)){
return p1__34475_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34480,map__34480__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34486){
var map__34487 = p__34486;
var map__34487__$1 = ((((!((map__34487 == null)))?((((map__34487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34487):map__34487);
var match_length = cljs.core.get.call(null,map__34487__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34487__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34482_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34482_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args34489 = [];
var len__29489__auto___34492 = arguments.length;
var i__29490__auto___34493 = (0);
while(true){
if((i__29490__auto___34493 < len__29489__auto___34492)){
args34489.push((arguments[i__29490__auto___34493]));

var G__34494 = (i__29490__auto___34493 + (1));
i__29490__auto___34493 = G__34494;
continue;
} else {
}
break;
}

var G__34491 = args34489.length;
switch (G__34491) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34489.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34496_SHARP_,p2__34497_SHARP_){
return cljs.core.assoc.call(null,p1__34496_SHARP_,cljs.core.get.call(null,p2__34497_SHARP_,key),p2__34497_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__34498){
var map__34501 = p__34498;
var map__34501__$1 = ((((!((map__34501 == null)))?((((map__34501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34501):map__34501);
var f_data = map__34501__$1;
var file = cljs.core.get.call(null,map__34501__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34503,files_msg){
var map__34510 = p__34503;
var map__34510__$1 = ((((!((map__34510 == null)))?((((map__34510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34510):map__34510);
var opts = map__34510__$1;
var on_cssload = cljs.core.get.call(null,map__34510__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__34512_34516 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__34513_34517 = null;
var count__34514_34518 = (0);
var i__34515_34519 = (0);
while(true){
if((i__34515_34519 < count__34514_34518)){
var f_34520 = cljs.core._nth.call(null,chunk__34513_34517,i__34515_34519);
figwheel.client.file_reloading.reload_css_file.call(null,f_34520);

var G__34521 = seq__34512_34516;
var G__34522 = chunk__34513_34517;
var G__34523 = count__34514_34518;
var G__34524 = (i__34515_34519 + (1));
seq__34512_34516 = G__34521;
chunk__34513_34517 = G__34522;
count__34514_34518 = G__34523;
i__34515_34519 = G__34524;
continue;
} else {
var temp__4657__auto___34525 = cljs.core.seq.call(null,seq__34512_34516);
if(temp__4657__auto___34525){
var seq__34512_34526__$1 = temp__4657__auto___34525;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34512_34526__$1)){
var c__29231__auto___34527 = cljs.core.chunk_first.call(null,seq__34512_34526__$1);
var G__34528 = cljs.core.chunk_rest.call(null,seq__34512_34526__$1);
var G__34529 = c__29231__auto___34527;
var G__34530 = cljs.core.count.call(null,c__29231__auto___34527);
var G__34531 = (0);
seq__34512_34516 = G__34528;
chunk__34513_34517 = G__34529;
count__34514_34518 = G__34530;
i__34515_34519 = G__34531;
continue;
} else {
var f_34532 = cljs.core.first.call(null,seq__34512_34526__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_34532);

var G__34533 = cljs.core.next.call(null,seq__34512_34526__$1);
var G__34534 = null;
var G__34535 = (0);
var G__34536 = (0);
seq__34512_34516 = G__34533;
chunk__34513_34517 = G__34534;
count__34514_34518 = G__34535;
i__34515_34519 = G__34536;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__34510,map__34510__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__34510,map__34510__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map