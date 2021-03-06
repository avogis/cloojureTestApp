// Compiled by ClojureScript 1.8.40 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__30844_30848 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__30845_30849 = null;
var count__30846_30850 = (0);
var i__30847_30851 = (0);
while(true){
if((i__30847_30851 < count__30846_30850)){
var k_30852 = cljs.core._nth.call(null,chunk__30845_30849,i__30847_30851);
var v_30853 = (b[k_30852]);
(a[k_30852] = v_30853);

var G__30854 = seq__30844_30848;
var G__30855 = chunk__30845_30849;
var G__30856 = count__30846_30850;
var G__30857 = (i__30847_30851 + (1));
seq__30844_30848 = G__30854;
chunk__30845_30849 = G__30855;
count__30846_30850 = G__30856;
i__30847_30851 = G__30857;
continue;
} else {
var temp__4657__auto___30858 = cljs.core.seq.call(null,seq__30844_30848);
if(temp__4657__auto___30858){
var seq__30844_30859__$1 = temp__4657__auto___30858;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30844_30859__$1)){
var c__29237__auto___30860 = cljs.core.chunk_first.call(null,seq__30844_30859__$1);
var G__30861 = cljs.core.chunk_rest.call(null,seq__30844_30859__$1);
var G__30862 = c__29237__auto___30860;
var G__30863 = cljs.core.count.call(null,c__29237__auto___30860);
var G__30864 = (0);
seq__30844_30848 = G__30861;
chunk__30845_30849 = G__30862;
count__30846_30850 = G__30863;
i__30847_30851 = G__30864;
continue;
} else {
var k_30865 = cljs.core.first.call(null,seq__30844_30859__$1);
var v_30866 = (b[k_30865]);
(a[k_30865] = v_30866);

var G__30867 = cljs.core.next.call(null,seq__30844_30859__$1);
var G__30868 = null;
var G__30869 = (0);
var G__30870 = (0);
seq__30844_30848 = G__30867;
chunk__30845_30849 = G__30868;
count__30846_30850 = G__30869;
i__30847_30851 = G__30870;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__29032__auto__,writer__29033__auto__,opt__29034__auto__){
return cljs.core._write.call(null,writer__29033__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__29032__auto__,writer__29033__auto__,opt__29034__auto__){
return cljs.core._write.call(null,writer__29033__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args30871 = [];
var len__29495__auto___30874 = arguments.length;
var i__29496__auto___30875 = (0);
while(true){
if((i__29496__auto___30875 < len__29495__auto___30874)){
args30871.push((arguments[i__29496__auto___30875]));

var G__30876 = (i__29496__auto___30875 + (1));
i__29496__auto___30875 = G__30876;
continue;
} else {
}
break;
}

var G__30873 = args30871.length;
switch (G__30873) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30871.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__30878 = (i + (2));
var G__30879 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__30878;
ret = G__30879;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__29032__auto__,writer__29033__auto__,opt__29034__auto__){
return cljs.core._write.call(null,writer__29033__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__29032__auto__,writer__29033__auto__,opt__29034__auto__){
return cljs.core._write.call(null,writer__29033__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__30880_30884 = cljs.core.seq.call(null,v);
var chunk__30881_30885 = null;
var count__30882_30886 = (0);
var i__30883_30887 = (0);
while(true){
if((i__30883_30887 < count__30882_30886)){
var x_30888 = cljs.core._nth.call(null,chunk__30881_30885,i__30883_30887);
ret.push(x_30888);

var G__30889 = seq__30880_30884;
var G__30890 = chunk__30881_30885;
var G__30891 = count__30882_30886;
var G__30892 = (i__30883_30887 + (1));
seq__30880_30884 = G__30889;
chunk__30881_30885 = G__30890;
count__30882_30886 = G__30891;
i__30883_30887 = G__30892;
continue;
} else {
var temp__4657__auto___30893 = cljs.core.seq.call(null,seq__30880_30884);
if(temp__4657__auto___30893){
var seq__30880_30894__$1 = temp__4657__auto___30893;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30880_30894__$1)){
var c__29237__auto___30895 = cljs.core.chunk_first.call(null,seq__30880_30894__$1);
var G__30896 = cljs.core.chunk_rest.call(null,seq__30880_30894__$1);
var G__30897 = c__29237__auto___30895;
var G__30898 = cljs.core.count.call(null,c__29237__auto___30895);
var G__30899 = (0);
seq__30880_30884 = G__30896;
chunk__30881_30885 = G__30897;
count__30882_30886 = G__30898;
i__30883_30887 = G__30899;
continue;
} else {
var x_30900 = cljs.core.first.call(null,seq__30880_30894__$1);
ret.push(x_30900);

var G__30901 = cljs.core.next.call(null,seq__30880_30894__$1);
var G__30902 = null;
var G__30903 = (0);
var G__30904 = (0);
seq__30880_30884 = G__30901;
chunk__30881_30885 = G__30902;
count__30882_30886 = G__30903;
i__30883_30887 = G__30904;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__29032__auto__,writer__29033__auto__,opt__29034__auto__){
return cljs.core._write.call(null,writer__29033__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__29032__auto__,writer__29033__auto__,opt__29034__auto__){
return cljs.core._write.call(null,writer__29033__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__30905_30909 = cljs.core.seq.call(null,v);
var chunk__30906_30910 = null;
var count__30907_30911 = (0);
var i__30908_30912 = (0);
while(true){
if((i__30908_30912 < count__30907_30911)){
var x_30913 = cljs.core._nth.call(null,chunk__30906_30910,i__30908_30912);
ret.push(x_30913);

var G__30914 = seq__30905_30909;
var G__30915 = chunk__30906_30910;
var G__30916 = count__30907_30911;
var G__30917 = (i__30908_30912 + (1));
seq__30905_30909 = G__30914;
chunk__30906_30910 = G__30915;
count__30907_30911 = G__30916;
i__30908_30912 = G__30917;
continue;
} else {
var temp__4657__auto___30918 = cljs.core.seq.call(null,seq__30905_30909);
if(temp__4657__auto___30918){
var seq__30905_30919__$1 = temp__4657__auto___30918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30905_30919__$1)){
var c__29237__auto___30920 = cljs.core.chunk_first.call(null,seq__30905_30919__$1);
var G__30921 = cljs.core.chunk_rest.call(null,seq__30905_30919__$1);
var G__30922 = c__29237__auto___30920;
var G__30923 = cljs.core.count.call(null,c__29237__auto___30920);
var G__30924 = (0);
seq__30905_30909 = G__30921;
chunk__30906_30910 = G__30922;
count__30907_30911 = G__30923;
i__30908_30912 = G__30924;
continue;
} else {
var x_30925 = cljs.core.first.call(null,seq__30905_30919__$1);
ret.push(x_30925);

var G__30926 = cljs.core.next.call(null,seq__30905_30919__$1);
var G__30927 = null;
var G__30928 = (0);
var G__30929 = (0);
seq__30905_30909 = G__30926;
chunk__30906_30910 = G__30927;
count__30907_30911 = G__30928;
i__30908_30912 = G__30929;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__29032__auto__,writer__29033__auto__,opt__29034__auto__){
return cljs.core._write.call(null,writer__29033__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__30930_30934 = cljs.core.seq.call(null,v);
var chunk__30931_30935 = null;
var count__30932_30936 = (0);
var i__30933_30937 = (0);
while(true){
if((i__30933_30937 < count__30932_30936)){
var x_30938 = cljs.core._nth.call(null,chunk__30931_30935,i__30933_30937);
ret.push(x_30938);

var G__30939 = seq__30930_30934;
var G__30940 = chunk__30931_30935;
var G__30941 = count__30932_30936;
var G__30942 = (i__30933_30937 + (1));
seq__30930_30934 = G__30939;
chunk__30931_30935 = G__30940;
count__30932_30936 = G__30941;
i__30933_30937 = G__30942;
continue;
} else {
var temp__4657__auto___30943 = cljs.core.seq.call(null,seq__30930_30934);
if(temp__4657__auto___30943){
var seq__30930_30944__$1 = temp__4657__auto___30943;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30930_30944__$1)){
var c__29237__auto___30945 = cljs.core.chunk_first.call(null,seq__30930_30944__$1);
var G__30946 = cljs.core.chunk_rest.call(null,seq__30930_30944__$1);
var G__30947 = c__29237__auto___30945;
var G__30948 = cljs.core.count.call(null,c__29237__auto___30945);
var G__30949 = (0);
seq__30930_30934 = G__30946;
chunk__30931_30935 = G__30947;
count__30932_30936 = G__30948;
i__30933_30937 = G__30949;
continue;
} else {
var x_30950 = cljs.core.first.call(null,seq__30930_30944__$1);
ret.push(x_30950);

var G__30951 = cljs.core.next.call(null,seq__30930_30944__$1);
var G__30952 = null;
var G__30953 = (0);
var G__30954 = (0);
seq__30930_30934 = G__30951;
chunk__30931_30935 = G__30952;
count__30932_30936 = G__30953;
i__30933_30937 = G__30954;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__29032__auto__,writer__29033__auto__,opt__29034__auto__){
return cljs.core._write.call(null,writer__29033__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__29032__auto__,writer__29033__auto__,opt__29034__auto__){
return cljs.core._write.call(null,writer__29033__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args30955 = [];
var len__29495__auto___30966 = arguments.length;
var i__29496__auto___30967 = (0);
while(true){
if((i__29496__auto___30967 < len__29495__auto___30966)){
args30955.push((arguments[i__29496__auto___30967]));

var G__30968 = (i__29496__auto___30967 + (1));
i__29496__auto___30967 = G__30968;
continue;
} else {
}
break;
}

var G__30957 = args30955.length;
switch (G__30957) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30955.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__30958 = obj;
G__30958.push(kfn.call(null,k),vfn.call(null,v));

return G__30958;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x30959 = cljs.core.clone.call(null,handlers);
x30959.forEach = ((function (x30959,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__30960 = cljs.core.seq.call(null,coll);
var chunk__30961 = null;
var count__30962 = (0);
var i__30963 = (0);
while(true){
if((i__30963 < count__30962)){
var vec__30964 = cljs.core._nth.call(null,chunk__30961,i__30963);
var k = cljs.core.nth.call(null,vec__30964,(0),null);
var v = cljs.core.nth.call(null,vec__30964,(1),null);
f.call(null,v,k);

var G__30970 = seq__30960;
var G__30971 = chunk__30961;
var G__30972 = count__30962;
var G__30973 = (i__30963 + (1));
seq__30960 = G__30970;
chunk__30961 = G__30971;
count__30962 = G__30972;
i__30963 = G__30973;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30960);
if(temp__4657__auto__){
var seq__30960__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30960__$1)){
var c__29237__auto__ = cljs.core.chunk_first.call(null,seq__30960__$1);
var G__30974 = cljs.core.chunk_rest.call(null,seq__30960__$1);
var G__30975 = c__29237__auto__;
var G__30976 = cljs.core.count.call(null,c__29237__auto__);
var G__30977 = (0);
seq__30960 = G__30974;
chunk__30961 = G__30975;
count__30962 = G__30976;
i__30963 = G__30977;
continue;
} else {
var vec__30965 = cljs.core.first.call(null,seq__30960__$1);
var k = cljs.core.nth.call(null,vec__30965,(0),null);
var v = cljs.core.nth.call(null,vec__30965,(1),null);
f.call(null,v,k);

var G__30978 = cljs.core.next.call(null,seq__30960__$1);
var G__30979 = null;
var G__30980 = (0);
var G__30981 = (0);
seq__30960 = G__30978;
chunk__30961 = G__30979;
count__30962 = G__30980;
i__30963 = G__30981;
continue;
}
} else {
return null;
}
}
break;
}
});})(x30959,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x30959;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args30982 = [];
var len__29495__auto___30988 = arguments.length;
var i__29496__auto___30989 = (0);
while(true){
if((i__29496__auto___30989 < len__29495__auto___30988)){
args30982.push((arguments[i__29496__auto___30989]));

var G__30990 = (i__29496__auto___30989 + (1));
i__29496__auto___30989 = G__30990;
continue;
} else {
}
break;
}

var G__30984 = args30982.length;
switch (G__30984) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30982.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit30985 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit30985 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta30986){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta30986 = meta30986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit30985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30987,meta30986__$1){
var self__ = this;
var _30987__$1 = this;
return (new cognitect.transit.t_cognitect$transit30985(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta30986__$1));
});

cognitect.transit.t_cognitect$transit30985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30987){
var self__ = this;
var _30987__$1 = this;
return self__.meta30986;
});

cognitect.transit.t_cognitect$transit30985.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit30985.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit30985.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit30985.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit30985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta30986","meta30986",-553279352,null)], null);
});

cognitect.transit.t_cognitect$transit30985.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit30985.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit30985";

cognitect.transit.t_cognitect$transit30985.cljs$lang$ctorPrWriter = (function (this__29032__auto__,writer__29033__auto__,opt__29034__auto__){
return cljs.core._write.call(null,writer__29033__auto__,"cognitect.transit/t_cognitect$transit30985");
});

cognitect.transit.__GT_t_cognitect$transit30985 = (function cognitect$transit$__GT_t_cognitect$transit30985(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta30986){
return (new cognitect.transit.t_cognitect$transit30985(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta30986));
});

}

return (new cognitect.transit.t_cognitect$transit30985(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__28426__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__28426__auto__)){
return or__28426__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map