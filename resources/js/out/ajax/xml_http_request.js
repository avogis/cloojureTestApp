// Compiled by ClojureScript 1.8.40 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__30802,handler){
var map__30803 = p__30802;
var map__30803__$1 = ((((!((map__30803 == null)))?((((map__30803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30803):map__30803);
var uri = cljs.core.get.call(null,map__30803__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__30803__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__30803__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__30803__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__30803__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__30803__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__30803__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__30803,map__30803__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__30801_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__30801_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__30803,map__30803__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___30811 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___30811)){
var response_type_30812 = temp__4657__auto___30811;
this$__$1.responseType = cljs.core.name.call(null,response_type_30812);
} else {
}

var seq__30805_30813 = cljs.core.seq.call(null,headers);
var chunk__30806_30814 = null;
var count__30807_30815 = (0);
var i__30808_30816 = (0);
while(true){
if((i__30808_30816 < count__30807_30815)){
var vec__30809_30817 = cljs.core._nth.call(null,chunk__30806_30814,i__30808_30816);
var k_30818 = cljs.core.nth.call(null,vec__30809_30817,(0),null);
var v_30819 = cljs.core.nth.call(null,vec__30809_30817,(1),null);
this$__$1.setRequestHeader(k_30818,v_30819);

var G__30820 = seq__30805_30813;
var G__30821 = chunk__30806_30814;
var G__30822 = count__30807_30815;
var G__30823 = (i__30808_30816 + (1));
seq__30805_30813 = G__30820;
chunk__30806_30814 = G__30821;
count__30807_30815 = G__30822;
i__30808_30816 = G__30823;
continue;
} else {
var temp__4657__auto___30824 = cljs.core.seq.call(null,seq__30805_30813);
if(temp__4657__auto___30824){
var seq__30805_30825__$1 = temp__4657__auto___30824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30805_30825__$1)){
var c__29237__auto___30826 = cljs.core.chunk_first.call(null,seq__30805_30825__$1);
var G__30827 = cljs.core.chunk_rest.call(null,seq__30805_30825__$1);
var G__30828 = c__29237__auto___30826;
var G__30829 = cljs.core.count.call(null,c__29237__auto___30826);
var G__30830 = (0);
seq__30805_30813 = G__30827;
chunk__30806_30814 = G__30828;
count__30807_30815 = G__30829;
i__30808_30816 = G__30830;
continue;
} else {
var vec__30810_30831 = cljs.core.first.call(null,seq__30805_30825__$1);
var k_30832 = cljs.core.nth.call(null,vec__30810_30831,(0),null);
var v_30833 = cljs.core.nth.call(null,vec__30810_30831,(1),null);
this$__$1.setRequestHeader(k_30832,v_30833);

var G__30834 = cljs.core.next.call(null,seq__30805_30825__$1);
var G__30835 = null;
var G__30836 = (0);
var G__30837 = (0);
seq__30805_30813 = G__30834;
chunk__30806_30814 = G__30835;
count__30807_30815 = G__30836;
i__30808_30816 = G__30837;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__28426__auto__ = body;
if(cljs.core.truth_(or__28426__auto__)){
return or__28426__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map