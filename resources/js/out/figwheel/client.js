// Compiled by ClojureScript 1.8.40 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__34972 = cljs.core._EQ_;
var expr__34973 = (function (){var or__28420__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e34976){if((e34976 instanceof Error)){
var e = e34976;
return false;
} else {
throw e34976;

}
}})();
if(cljs.core.truth_(or__28420__auto__)){
return or__28420__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__34972.call(null,"true",expr__34973))){
return true;
} else {
if(cljs.core.truth_(pred__34972.call(null,"false",expr__34973))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__34973)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e34978){if((e34978 instanceof Error)){
var e = e34978;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e34978;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__29496__auto__ = [];
var len__29489__auto___34980 = arguments.length;
var i__29490__auto___34981 = (0);
while(true){
if((i__29490__auto___34981 < len__29489__auto___34980)){
args__29496__auto__.push((arguments[i__29490__auto___34981]));

var G__34982 = (i__29490__auto___34981 + (1));
i__29490__auto___34981 = G__34982;
continue;
} else {
}
break;
}

var argseq__29497__auto__ = ((((0) < args__29496__auto__.length))?(new cljs.core.IndexedSeq(args__29496__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29497__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq34979){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34979));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34983){
var map__34986 = p__34983;
var map__34986__$1 = ((((!((map__34986 == null)))?((((map__34986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34986):map__34986);
var message = cljs.core.get.call(null,map__34986__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34986__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28420__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28420__auto__)){
return or__28420__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28408__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28408__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28408__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__30586__auto___35148 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto___35148,ch){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto___35148,ch){
return (function (state_35117){
var state_val_35118 = (state_35117[(1)]);
if((state_val_35118 === (7))){
var inst_35113 = (state_35117[(2)]);
var state_35117__$1 = state_35117;
var statearr_35119_35149 = state_35117__$1;
(statearr_35119_35149[(2)] = inst_35113);

(statearr_35119_35149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (1))){
var state_35117__$1 = state_35117;
var statearr_35120_35150 = state_35117__$1;
(statearr_35120_35150[(2)] = null);

(statearr_35120_35150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (4))){
var inst_35070 = (state_35117[(7)]);
var inst_35070__$1 = (state_35117[(2)]);
var state_35117__$1 = (function (){var statearr_35121 = state_35117;
(statearr_35121[(7)] = inst_35070__$1);

return statearr_35121;
})();
if(cljs.core.truth_(inst_35070__$1)){
var statearr_35122_35151 = state_35117__$1;
(statearr_35122_35151[(1)] = (5));

} else {
var statearr_35123_35152 = state_35117__$1;
(statearr_35123_35152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (15))){
var inst_35077 = (state_35117[(8)]);
var inst_35092 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35077);
var inst_35093 = cljs.core.first.call(null,inst_35092);
var inst_35094 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35093);
var inst_35095 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_35094)].join('');
var inst_35096 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35095);
var state_35117__$1 = state_35117;
var statearr_35124_35153 = state_35117__$1;
(statearr_35124_35153[(2)] = inst_35096);

(statearr_35124_35153[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (13))){
var inst_35101 = (state_35117[(2)]);
var state_35117__$1 = state_35117;
var statearr_35125_35154 = state_35117__$1;
(statearr_35125_35154[(2)] = inst_35101);

(statearr_35125_35154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (6))){
var state_35117__$1 = state_35117;
var statearr_35126_35155 = state_35117__$1;
(statearr_35126_35155[(2)] = null);

(statearr_35126_35155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (17))){
var inst_35099 = (state_35117[(2)]);
var state_35117__$1 = state_35117;
var statearr_35127_35156 = state_35117__$1;
(statearr_35127_35156[(2)] = inst_35099);

(statearr_35127_35156[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (3))){
var inst_35115 = (state_35117[(2)]);
var state_35117__$1 = state_35117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35117__$1,inst_35115);
} else {
if((state_val_35118 === (12))){
var inst_35076 = (state_35117[(9)]);
var inst_35090 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35076,opts);
var state_35117__$1 = state_35117;
if(cljs.core.truth_(inst_35090)){
var statearr_35128_35157 = state_35117__$1;
(statearr_35128_35157[(1)] = (15));

} else {
var statearr_35129_35158 = state_35117__$1;
(statearr_35129_35158[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (2))){
var state_35117__$1 = state_35117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35117__$1,(4),ch);
} else {
if((state_val_35118 === (11))){
var inst_35077 = (state_35117[(8)]);
var inst_35082 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35083 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35077);
var inst_35084 = cljs.core.async.timeout.call(null,(1000));
var inst_35085 = [inst_35083,inst_35084];
var inst_35086 = (new cljs.core.PersistentVector(null,2,(5),inst_35082,inst_35085,null));
var state_35117__$1 = state_35117;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35117__$1,(14),inst_35086);
} else {
if((state_val_35118 === (9))){
var inst_35077 = (state_35117[(8)]);
var inst_35103 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35104 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35077);
var inst_35105 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35104);
var inst_35106 = [cljs.core.str("Not loading: "),cljs.core.str(inst_35105)].join('');
var inst_35107 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35106);
var state_35117__$1 = (function (){var statearr_35130 = state_35117;
(statearr_35130[(10)] = inst_35103);

return statearr_35130;
})();
var statearr_35131_35159 = state_35117__$1;
(statearr_35131_35159[(2)] = inst_35107);

(statearr_35131_35159[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (5))){
var inst_35070 = (state_35117[(7)]);
var inst_35072 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35073 = (new cljs.core.PersistentArrayMap(null,2,inst_35072,null));
var inst_35074 = (new cljs.core.PersistentHashSet(null,inst_35073,null));
var inst_35075 = figwheel.client.focus_msgs.call(null,inst_35074,inst_35070);
var inst_35076 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35075);
var inst_35077 = cljs.core.first.call(null,inst_35075);
var inst_35078 = figwheel.client.autoload_QMARK_.call(null);
var state_35117__$1 = (function (){var statearr_35132 = state_35117;
(statearr_35132[(9)] = inst_35076);

(statearr_35132[(8)] = inst_35077);

return statearr_35132;
})();
if(cljs.core.truth_(inst_35078)){
var statearr_35133_35160 = state_35117__$1;
(statearr_35133_35160[(1)] = (8));

} else {
var statearr_35134_35161 = state_35117__$1;
(statearr_35134_35161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (14))){
var inst_35088 = (state_35117[(2)]);
var state_35117__$1 = state_35117;
var statearr_35135_35162 = state_35117__$1;
(statearr_35135_35162[(2)] = inst_35088);

(statearr_35135_35162[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (16))){
var state_35117__$1 = state_35117;
var statearr_35136_35163 = state_35117__$1;
(statearr_35136_35163[(2)] = null);

(statearr_35136_35163[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (10))){
var inst_35109 = (state_35117[(2)]);
var state_35117__$1 = (function (){var statearr_35137 = state_35117;
(statearr_35137[(11)] = inst_35109);

return statearr_35137;
})();
var statearr_35138_35164 = state_35117__$1;
(statearr_35138_35164[(2)] = null);

(statearr_35138_35164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (8))){
var inst_35076 = (state_35117[(9)]);
var inst_35080 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35076,opts);
var state_35117__$1 = state_35117;
if(cljs.core.truth_(inst_35080)){
var statearr_35139_35165 = state_35117__$1;
(statearr_35139_35165[(1)] = (11));

} else {
var statearr_35140_35166 = state_35117__$1;
(statearr_35140_35166[(1)] = (12));

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
});})(c__30586__auto___35148,ch))
;
return ((function (switch__30474__auto__,c__30586__auto___35148,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30475__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30475__auto____0 = (function (){
var statearr_35144 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35144[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30475__auto__);

(statearr_35144[(1)] = (1));

return statearr_35144;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30475__auto____1 = (function (state_35117){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_35117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e35145){if((e35145 instanceof Object)){
var ex__30478__auto__ = e35145;
var statearr_35146_35167 = state_35117;
(statearr_35146_35167[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35168 = state_35117;
state_35117 = G__35168;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30475__auto__ = function(state_35117){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30475__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30475__auto____1.call(this,state_35117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30475__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30475__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto___35148,ch))
})();
var state__30588__auto__ = (function (){var statearr_35147 = f__30587__auto__.call(null);
(statearr_35147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto___35148);

return statearr_35147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto___35148,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35169_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35169_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_35176 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35176){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_35174 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_35175 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_35175;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_35174;
}}catch (e35173){if((e35173 instanceof Error)){
var e = e35173;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35176], null));
} else {
var e = e35173;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_35176))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35177){
var map__35184 = p__35177;
var map__35184__$1 = ((((!((map__35184 == null)))?((((map__35184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35184):map__35184);
var opts = map__35184__$1;
var build_id = cljs.core.get.call(null,map__35184__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35184,map__35184__$1,opts,build_id){
return (function (p__35186){
var vec__35187 = p__35186;
var map__35188 = cljs.core.nth.call(null,vec__35187,(0),null);
var map__35188__$1 = ((((!((map__35188 == null)))?((((map__35188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35188):map__35188);
var msg = map__35188__$1;
var msg_name = cljs.core.get.call(null,map__35188__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__35187,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35187,map__35188,map__35188__$1,msg,msg_name,_,map__35184,map__35184__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35187,map__35188,map__35188__$1,msg,msg_name,_,map__35184,map__35184__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35184,map__35184__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35194){
var vec__35195 = p__35194;
var map__35196 = cljs.core.nth.call(null,vec__35195,(0),null);
var map__35196__$1 = ((((!((map__35196 == null)))?((((map__35196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35196):map__35196);
var msg = map__35196__$1;
var msg_name = cljs.core.get.call(null,map__35196__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__35195,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35198){
var map__35208 = p__35198;
var map__35208__$1 = ((((!((map__35208 == null)))?((((map__35208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35208):map__35208);
var on_compile_warning = cljs.core.get.call(null,map__35208__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35208__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35208,map__35208__$1,on_compile_warning,on_compile_fail){
return (function (p__35210){
var vec__35211 = p__35210;
var map__35212 = cljs.core.nth.call(null,vec__35211,(0),null);
var map__35212__$1 = ((((!((map__35212 == null)))?((((map__35212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35212):map__35212);
var msg = map__35212__$1;
var msg_name = cljs.core.get.call(null,map__35212__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__35211,(1));
var pred__35214 = cljs.core._EQ_;
var expr__35215 = msg_name;
if(cljs.core.truth_(pred__35214.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35215))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35214.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35215))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35208,map__35208__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30586__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto__,msg_hist,msg_names,msg){
return (function (state_35431){
var state_val_35432 = (state_35431[(1)]);
if((state_val_35432 === (7))){
var inst_35355 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
if(cljs.core.truth_(inst_35355)){
var statearr_35433_35479 = state_35431__$1;
(statearr_35433_35479[(1)] = (8));

} else {
var statearr_35434_35480 = state_35431__$1;
(statearr_35434_35480[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (20))){
var inst_35425 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35435_35481 = state_35431__$1;
(statearr_35435_35481[(2)] = inst_35425);

(statearr_35435_35481[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (27))){
var inst_35421 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35436_35482 = state_35431__$1;
(statearr_35436_35482[(2)] = inst_35421);

(statearr_35436_35482[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (1))){
var inst_35348 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35431__$1 = state_35431;
if(cljs.core.truth_(inst_35348)){
var statearr_35437_35483 = state_35431__$1;
(statearr_35437_35483[(1)] = (2));

} else {
var statearr_35438_35484 = state_35431__$1;
(statearr_35438_35484[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (24))){
var inst_35423 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35439_35485 = state_35431__$1;
(statearr_35439_35485[(2)] = inst_35423);

(statearr_35439_35485[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (4))){
var inst_35429 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35431__$1,inst_35429);
} else {
if((state_val_35432 === (15))){
var inst_35427 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35440_35486 = state_35431__$1;
(statearr_35440_35486[(2)] = inst_35427);

(statearr_35440_35486[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (21))){
var inst_35386 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35441_35487 = state_35431__$1;
(statearr_35441_35487[(2)] = inst_35386);

(statearr_35441_35487[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (31))){
var inst_35410 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35431__$1 = state_35431;
if(cljs.core.truth_(inst_35410)){
var statearr_35442_35488 = state_35431__$1;
(statearr_35442_35488[(1)] = (34));

} else {
var statearr_35443_35489 = state_35431__$1;
(statearr_35443_35489[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (32))){
var inst_35419 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35444_35490 = state_35431__$1;
(statearr_35444_35490[(2)] = inst_35419);

(statearr_35444_35490[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (33))){
var inst_35408 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35445_35491 = state_35431__$1;
(statearr_35445_35491[(2)] = inst_35408);

(statearr_35445_35491[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (13))){
var inst_35369 = figwheel.client.heads_up.clear.call(null);
var state_35431__$1 = state_35431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35431__$1,(16),inst_35369);
} else {
if((state_val_35432 === (22))){
var inst_35390 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35391 = figwheel.client.heads_up.append_message.call(null,inst_35390);
var state_35431__$1 = state_35431;
var statearr_35446_35492 = state_35431__$1;
(statearr_35446_35492[(2)] = inst_35391);

(statearr_35446_35492[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (36))){
var inst_35417 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35447_35493 = state_35431__$1;
(statearr_35447_35493[(2)] = inst_35417);

(statearr_35447_35493[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (29))){
var inst_35401 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35448_35494 = state_35431__$1;
(statearr_35448_35494[(2)] = inst_35401);

(statearr_35448_35494[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (6))){
var inst_35350 = (state_35431[(7)]);
var state_35431__$1 = state_35431;
var statearr_35449_35495 = state_35431__$1;
(statearr_35449_35495[(2)] = inst_35350);

(statearr_35449_35495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (28))){
var inst_35397 = (state_35431[(2)]);
var inst_35398 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35399 = figwheel.client.heads_up.display_warning.call(null,inst_35398);
var state_35431__$1 = (function (){var statearr_35450 = state_35431;
(statearr_35450[(8)] = inst_35397);

return statearr_35450;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35431__$1,(29),inst_35399);
} else {
if((state_val_35432 === (25))){
var inst_35395 = figwheel.client.heads_up.clear.call(null);
var state_35431__$1 = state_35431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35431__$1,(28),inst_35395);
} else {
if((state_val_35432 === (34))){
var inst_35412 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35431__$1 = state_35431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35431__$1,(37),inst_35412);
} else {
if((state_val_35432 === (17))){
var inst_35377 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35451_35496 = state_35431__$1;
(statearr_35451_35496[(2)] = inst_35377);

(statearr_35451_35496[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (3))){
var inst_35367 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35431__$1 = state_35431;
if(cljs.core.truth_(inst_35367)){
var statearr_35452_35497 = state_35431__$1;
(statearr_35452_35497[(1)] = (13));

} else {
var statearr_35453_35498 = state_35431__$1;
(statearr_35453_35498[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (12))){
var inst_35363 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35454_35499 = state_35431__$1;
(statearr_35454_35499[(2)] = inst_35363);

(statearr_35454_35499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (2))){
var inst_35350 = (state_35431[(7)]);
var inst_35350__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35431__$1 = (function (){var statearr_35455 = state_35431;
(statearr_35455[(7)] = inst_35350__$1);

return statearr_35455;
})();
if(cljs.core.truth_(inst_35350__$1)){
var statearr_35456_35500 = state_35431__$1;
(statearr_35456_35500[(1)] = (5));

} else {
var statearr_35457_35501 = state_35431__$1;
(statearr_35457_35501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (23))){
var inst_35393 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35431__$1 = state_35431;
if(cljs.core.truth_(inst_35393)){
var statearr_35458_35502 = state_35431__$1;
(statearr_35458_35502[(1)] = (25));

} else {
var statearr_35459_35503 = state_35431__$1;
(statearr_35459_35503[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (35))){
var state_35431__$1 = state_35431;
var statearr_35460_35504 = state_35431__$1;
(statearr_35460_35504[(2)] = null);

(statearr_35460_35504[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (19))){
var inst_35388 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35431__$1 = state_35431;
if(cljs.core.truth_(inst_35388)){
var statearr_35461_35505 = state_35431__$1;
(statearr_35461_35505[(1)] = (22));

} else {
var statearr_35462_35506 = state_35431__$1;
(statearr_35462_35506[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (11))){
var inst_35359 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35463_35507 = state_35431__$1;
(statearr_35463_35507[(2)] = inst_35359);

(statearr_35463_35507[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (9))){
var inst_35361 = figwheel.client.heads_up.clear.call(null);
var state_35431__$1 = state_35431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35431__$1,(12),inst_35361);
} else {
if((state_val_35432 === (5))){
var inst_35352 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35431__$1 = state_35431;
var statearr_35464_35508 = state_35431__$1;
(statearr_35464_35508[(2)] = inst_35352);

(statearr_35464_35508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (14))){
var inst_35379 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35431__$1 = state_35431;
if(cljs.core.truth_(inst_35379)){
var statearr_35465_35509 = state_35431__$1;
(statearr_35465_35509[(1)] = (18));

} else {
var statearr_35466_35510 = state_35431__$1;
(statearr_35466_35510[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (26))){
var inst_35403 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35431__$1 = state_35431;
if(cljs.core.truth_(inst_35403)){
var statearr_35467_35511 = state_35431__$1;
(statearr_35467_35511[(1)] = (30));

} else {
var statearr_35468_35512 = state_35431__$1;
(statearr_35468_35512[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (16))){
var inst_35371 = (state_35431[(2)]);
var inst_35372 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35373 = figwheel.client.format_messages.call(null,inst_35372);
var inst_35374 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35375 = figwheel.client.heads_up.display_error.call(null,inst_35373,inst_35374);
var state_35431__$1 = (function (){var statearr_35469 = state_35431;
(statearr_35469[(9)] = inst_35371);

return statearr_35469;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35431__$1,(17),inst_35375);
} else {
if((state_val_35432 === (30))){
var inst_35405 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35406 = figwheel.client.heads_up.display_warning.call(null,inst_35405);
var state_35431__$1 = state_35431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35431__$1,(33),inst_35406);
} else {
if((state_val_35432 === (10))){
var inst_35365 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35470_35513 = state_35431__$1;
(statearr_35470_35513[(2)] = inst_35365);

(statearr_35470_35513[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (18))){
var inst_35381 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35382 = figwheel.client.format_messages.call(null,inst_35381);
var inst_35383 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35384 = figwheel.client.heads_up.display_error.call(null,inst_35382,inst_35383);
var state_35431__$1 = state_35431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35431__$1,(21),inst_35384);
} else {
if((state_val_35432 === (37))){
var inst_35414 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35471_35514 = state_35431__$1;
(statearr_35471_35514[(2)] = inst_35414);

(statearr_35471_35514[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (8))){
var inst_35357 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35431__$1 = state_35431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35431__$1,(11),inst_35357);
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
});})(c__30586__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30474__auto__,c__30586__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30475__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30475__auto____0 = (function (){
var statearr_35475 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35475[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30475__auto__);

(statearr_35475[(1)] = (1));

return statearr_35475;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30475__auto____1 = (function (state_35431){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_35431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e35476){if((e35476 instanceof Object)){
var ex__30478__auto__ = e35476;
var statearr_35477_35515 = state_35431;
(statearr_35477_35515[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35516 = state_35431;
state_35431 = G__35516;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30475__auto__ = function(state_35431){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30475__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30475__auto____1.call(this,state_35431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30475__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30475__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto__,msg_hist,msg_names,msg))
})();
var state__30588__auto__ = (function (){var statearr_35478 = f__30587__auto__.call(null);
(statearr_35478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto__);

return statearr_35478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto__,msg_hist,msg_names,msg))
);

return c__30586__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30586__auto___35579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto___35579,ch){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto___35579,ch){
return (function (state_35562){
var state_val_35563 = (state_35562[(1)]);
if((state_val_35563 === (1))){
var state_35562__$1 = state_35562;
var statearr_35564_35580 = state_35562__$1;
(statearr_35564_35580[(2)] = null);

(statearr_35564_35580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (2))){
var state_35562__$1 = state_35562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35562__$1,(4),ch);
} else {
if((state_val_35563 === (3))){
var inst_35560 = (state_35562[(2)]);
var state_35562__$1 = state_35562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35562__$1,inst_35560);
} else {
if((state_val_35563 === (4))){
var inst_35550 = (state_35562[(7)]);
var inst_35550__$1 = (state_35562[(2)]);
var state_35562__$1 = (function (){var statearr_35565 = state_35562;
(statearr_35565[(7)] = inst_35550__$1);

return statearr_35565;
})();
if(cljs.core.truth_(inst_35550__$1)){
var statearr_35566_35581 = state_35562__$1;
(statearr_35566_35581[(1)] = (5));

} else {
var statearr_35567_35582 = state_35562__$1;
(statearr_35567_35582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (5))){
var inst_35550 = (state_35562[(7)]);
var inst_35552 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35550);
var state_35562__$1 = state_35562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35562__$1,(8),inst_35552);
} else {
if((state_val_35563 === (6))){
var state_35562__$1 = state_35562;
var statearr_35568_35583 = state_35562__$1;
(statearr_35568_35583[(2)] = null);

(statearr_35568_35583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (7))){
var inst_35558 = (state_35562[(2)]);
var state_35562__$1 = state_35562;
var statearr_35569_35584 = state_35562__$1;
(statearr_35569_35584[(2)] = inst_35558);

(statearr_35569_35584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (8))){
var inst_35554 = (state_35562[(2)]);
var state_35562__$1 = (function (){var statearr_35570 = state_35562;
(statearr_35570[(8)] = inst_35554);

return statearr_35570;
})();
var statearr_35571_35585 = state_35562__$1;
(statearr_35571_35585[(2)] = null);

(statearr_35571_35585[(1)] = (2));


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
});})(c__30586__auto___35579,ch))
;
return ((function (switch__30474__auto__,c__30586__auto___35579,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30475__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30475__auto____0 = (function (){
var statearr_35575 = [null,null,null,null,null,null,null,null,null];
(statearr_35575[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30475__auto__);

(statearr_35575[(1)] = (1));

return statearr_35575;
});
var figwheel$client$heads_up_plugin_$_state_machine__30475__auto____1 = (function (state_35562){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_35562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e35576){if((e35576 instanceof Object)){
var ex__30478__auto__ = e35576;
var statearr_35577_35586 = state_35562;
(statearr_35577_35586[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35587 = state_35562;
state_35562 = G__35587;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30475__auto__ = function(state_35562){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30475__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30475__auto____1.call(this,state_35562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30475__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30475__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto___35579,ch))
})();
var state__30588__auto__ = (function (){var statearr_35578 = f__30587__auto__.call(null);
(statearr_35578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto___35579);

return statearr_35578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto___35579,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30586__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto__){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto__){
return (function (state_35608){
var state_val_35609 = (state_35608[(1)]);
if((state_val_35609 === (1))){
var inst_35603 = cljs.core.async.timeout.call(null,(3000));
var state_35608__$1 = state_35608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35608__$1,(2),inst_35603);
} else {
if((state_val_35609 === (2))){
var inst_35605 = (state_35608[(2)]);
var inst_35606 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35608__$1 = (function (){var statearr_35610 = state_35608;
(statearr_35610[(7)] = inst_35605);

return statearr_35610;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35608__$1,inst_35606);
} else {
return null;
}
}
});})(c__30586__auto__))
;
return ((function (switch__30474__auto__,c__30586__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30475__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30475__auto____0 = (function (){
var statearr_35614 = [null,null,null,null,null,null,null,null];
(statearr_35614[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30475__auto__);

(statearr_35614[(1)] = (1));

return statearr_35614;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30475__auto____1 = (function (state_35608){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_35608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e35615){if((e35615 instanceof Object)){
var ex__30478__auto__ = e35615;
var statearr_35616_35618 = state_35608;
(statearr_35616_35618[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35619 = state_35608;
state_35608 = G__35619;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30475__auto__ = function(state_35608){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30475__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30475__auto____1.call(this,state_35608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30475__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30475__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto__))
})();
var state__30588__auto__ = (function (){var statearr_35617 = f__30587__auto__.call(null);
(statearr_35617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto__);

return statearr_35617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto__))
);

return c__30586__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35620){
var map__35627 = p__35620;
var map__35627__$1 = ((((!((map__35627 == null)))?((((map__35627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35627):map__35627);
var ed = map__35627__$1;
var formatted_exception = cljs.core.get.call(null,map__35627__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35627__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35627__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35629_35633 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35630_35634 = null;
var count__35631_35635 = (0);
var i__35632_35636 = (0);
while(true){
if((i__35632_35636 < count__35631_35635)){
var msg_35637 = cljs.core._nth.call(null,chunk__35630_35634,i__35632_35636);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35637);

var G__35638 = seq__35629_35633;
var G__35639 = chunk__35630_35634;
var G__35640 = count__35631_35635;
var G__35641 = (i__35632_35636 + (1));
seq__35629_35633 = G__35638;
chunk__35630_35634 = G__35639;
count__35631_35635 = G__35640;
i__35632_35636 = G__35641;
continue;
} else {
var temp__4657__auto___35642 = cljs.core.seq.call(null,seq__35629_35633);
if(temp__4657__auto___35642){
var seq__35629_35643__$1 = temp__4657__auto___35642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35629_35643__$1)){
var c__29231__auto___35644 = cljs.core.chunk_first.call(null,seq__35629_35643__$1);
var G__35645 = cljs.core.chunk_rest.call(null,seq__35629_35643__$1);
var G__35646 = c__29231__auto___35644;
var G__35647 = cljs.core.count.call(null,c__29231__auto___35644);
var G__35648 = (0);
seq__35629_35633 = G__35645;
chunk__35630_35634 = G__35646;
count__35631_35635 = G__35647;
i__35632_35636 = G__35648;
continue;
} else {
var msg_35649 = cljs.core.first.call(null,seq__35629_35643__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35649);

var G__35650 = cljs.core.next.call(null,seq__35629_35643__$1);
var G__35651 = null;
var G__35652 = (0);
var G__35653 = (0);
seq__35629_35633 = G__35650;
chunk__35630_35634 = G__35651;
count__35631_35635 = G__35652;
i__35632_35636 = G__35653;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35654){
var map__35657 = p__35654;
var map__35657__$1 = ((((!((map__35657 == null)))?((((map__35657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35657):map__35657);
var w = map__35657__$1;
var message = cljs.core.get.call(null,map__35657__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28408__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28408__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28408__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35665 = cljs.core.seq.call(null,plugins);
var chunk__35666 = null;
var count__35667 = (0);
var i__35668 = (0);
while(true){
if((i__35668 < count__35667)){
var vec__35669 = cljs.core._nth.call(null,chunk__35666,i__35668);
var k = cljs.core.nth.call(null,vec__35669,(0),null);
var plugin = cljs.core.nth.call(null,vec__35669,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35671 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35665,chunk__35666,count__35667,i__35668,pl_35671,vec__35669,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35671.call(null,msg_hist);
});})(seq__35665,chunk__35666,count__35667,i__35668,pl_35671,vec__35669,k,plugin))
);
} else {
}

var G__35672 = seq__35665;
var G__35673 = chunk__35666;
var G__35674 = count__35667;
var G__35675 = (i__35668 + (1));
seq__35665 = G__35672;
chunk__35666 = G__35673;
count__35667 = G__35674;
i__35668 = G__35675;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35665);
if(temp__4657__auto__){
var seq__35665__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35665__$1)){
var c__29231__auto__ = cljs.core.chunk_first.call(null,seq__35665__$1);
var G__35676 = cljs.core.chunk_rest.call(null,seq__35665__$1);
var G__35677 = c__29231__auto__;
var G__35678 = cljs.core.count.call(null,c__29231__auto__);
var G__35679 = (0);
seq__35665 = G__35676;
chunk__35666 = G__35677;
count__35667 = G__35678;
i__35668 = G__35679;
continue;
} else {
var vec__35670 = cljs.core.first.call(null,seq__35665__$1);
var k = cljs.core.nth.call(null,vec__35670,(0),null);
var plugin = cljs.core.nth.call(null,vec__35670,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35680 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35665,chunk__35666,count__35667,i__35668,pl_35680,vec__35670,k,plugin,seq__35665__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35680.call(null,msg_hist);
});})(seq__35665,chunk__35666,count__35667,i__35668,pl_35680,vec__35670,k,plugin,seq__35665__$1,temp__4657__auto__))
);
} else {
}

var G__35681 = cljs.core.next.call(null,seq__35665__$1);
var G__35682 = null;
var G__35683 = (0);
var G__35684 = (0);
seq__35665 = G__35681;
chunk__35666 = G__35682;
count__35667 = G__35683;
i__35668 = G__35684;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args35685 = [];
var len__29489__auto___35688 = arguments.length;
var i__29490__auto___35689 = (0);
while(true){
if((i__29490__auto___35689 < len__29489__auto___35688)){
args35685.push((arguments[i__29490__auto___35689]));

var G__35690 = (i__29490__auto___35689 + (1));
i__29490__auto___35689 = G__35690;
continue;
} else {
}
break;
}

var G__35687 = args35685.length;
switch (G__35687) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35685.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29496__auto__ = [];
var len__29489__auto___35696 = arguments.length;
var i__29490__auto___35697 = (0);
while(true){
if((i__29490__auto___35697 < len__29489__auto___35696)){
args__29496__auto__.push((arguments[i__29490__auto___35697]));

var G__35698 = (i__29490__auto___35697 + (1));
i__29490__auto___35697 = G__35698;
continue;
} else {
}
break;
}

var argseq__29497__auto__ = ((((0) < args__29496__auto__.length))?(new cljs.core.IndexedSeq(args__29496__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29497__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35693){
var map__35694 = p__35693;
var map__35694__$1 = ((((!((map__35694 == null)))?((((map__35694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35694):map__35694);
var opts = map__35694__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35692){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35692));
});

//# sourceMappingURL=client.js.map