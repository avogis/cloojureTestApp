// Compiled by ClojureScript 1.8.40 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__29496__auto__ = [];
var len__29489__auto___34738 = arguments.length;
var i__29490__auto___34739 = (0);
while(true){
if((i__29490__auto___34739 < len__29489__auto___34738)){
args__29496__auto__.push((arguments[i__29490__auto___34739]));

var G__34740 = (i__29490__auto___34739 + (1));
i__29490__auto___34739 = G__34740;
continue;
} else {
}
break;
}

var argseq__29497__auto__ = ((((2) < args__29496__auto__.length))?(new cljs.core.IndexedSeq(args__29496__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29497__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__34730_34741 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__34731_34742 = null;
var count__34732_34743 = (0);
var i__34733_34744 = (0);
while(true){
if((i__34733_34744 < count__34732_34743)){
var k_34745 = cljs.core._nth.call(null,chunk__34731_34742,i__34733_34744);
e.setAttribute(cljs.core.name.call(null,k_34745),cljs.core.get.call(null,attrs,k_34745));

var G__34746 = seq__34730_34741;
var G__34747 = chunk__34731_34742;
var G__34748 = count__34732_34743;
var G__34749 = (i__34733_34744 + (1));
seq__34730_34741 = G__34746;
chunk__34731_34742 = G__34747;
count__34732_34743 = G__34748;
i__34733_34744 = G__34749;
continue;
} else {
var temp__4657__auto___34750 = cljs.core.seq.call(null,seq__34730_34741);
if(temp__4657__auto___34750){
var seq__34730_34751__$1 = temp__4657__auto___34750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34730_34751__$1)){
var c__29231__auto___34752 = cljs.core.chunk_first.call(null,seq__34730_34751__$1);
var G__34753 = cljs.core.chunk_rest.call(null,seq__34730_34751__$1);
var G__34754 = c__29231__auto___34752;
var G__34755 = cljs.core.count.call(null,c__29231__auto___34752);
var G__34756 = (0);
seq__34730_34741 = G__34753;
chunk__34731_34742 = G__34754;
count__34732_34743 = G__34755;
i__34733_34744 = G__34756;
continue;
} else {
var k_34757 = cljs.core.first.call(null,seq__34730_34751__$1);
e.setAttribute(cljs.core.name.call(null,k_34757),cljs.core.get.call(null,attrs,k_34757));

var G__34758 = cljs.core.next.call(null,seq__34730_34751__$1);
var G__34759 = null;
var G__34760 = (0);
var G__34761 = (0);
seq__34730_34741 = G__34758;
chunk__34731_34742 = G__34759;
count__34732_34743 = G__34760;
i__34733_34744 = G__34761;
continue;
}
} else {
}
}
break;
}

var seq__34734_34762 = cljs.core.seq.call(null,children);
var chunk__34735_34763 = null;
var count__34736_34764 = (0);
var i__34737_34765 = (0);
while(true){
if((i__34737_34765 < count__34736_34764)){
var ch_34766 = cljs.core._nth.call(null,chunk__34735_34763,i__34737_34765);
e.appendChild(ch_34766);

var G__34767 = seq__34734_34762;
var G__34768 = chunk__34735_34763;
var G__34769 = count__34736_34764;
var G__34770 = (i__34737_34765 + (1));
seq__34734_34762 = G__34767;
chunk__34735_34763 = G__34768;
count__34736_34764 = G__34769;
i__34737_34765 = G__34770;
continue;
} else {
var temp__4657__auto___34771 = cljs.core.seq.call(null,seq__34734_34762);
if(temp__4657__auto___34771){
var seq__34734_34772__$1 = temp__4657__auto___34771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34734_34772__$1)){
var c__29231__auto___34773 = cljs.core.chunk_first.call(null,seq__34734_34772__$1);
var G__34774 = cljs.core.chunk_rest.call(null,seq__34734_34772__$1);
var G__34775 = c__29231__auto___34773;
var G__34776 = cljs.core.count.call(null,c__29231__auto___34773);
var G__34777 = (0);
seq__34734_34762 = G__34774;
chunk__34735_34763 = G__34775;
count__34736_34764 = G__34776;
i__34737_34765 = G__34777;
continue;
} else {
var ch_34778 = cljs.core.first.call(null,seq__34734_34772__$1);
e.appendChild(ch_34778);

var G__34779 = cljs.core.next.call(null,seq__34734_34772__$1);
var G__34780 = null;
var G__34781 = (0);
var G__34782 = (0);
seq__34734_34762 = G__34779;
chunk__34735_34763 = G__34780;
count__34736_34764 = G__34781;
i__34737_34765 = G__34782;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq34727){
var G__34728 = cljs.core.first.call(null,seq34727);
var seq34727__$1 = cljs.core.next.call(null,seq34727);
var G__34729 = cljs.core.first.call(null,seq34727__$1);
var seq34727__$2 = cljs.core.next.call(null,seq34727__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__34728,G__34729,seq34727__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__29344__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29345__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29346__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29347__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29348__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__29344__auto__,prefer_table__29345__auto__,method_cache__29346__auto__,cached_hierarchy__29347__auto__,hierarchy__29348__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__29344__auto__,prefer_table__29345__auto__,method_cache__29346__auto__,cached_hierarchy__29347__auto__,hierarchy__29348__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29348__auto__,method_table__29344__auto__,prefer_table__29345__auto__,method_cache__29346__auto__,cached_hierarchy__29347__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_34783 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_34783.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_34783.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_34783.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_34783);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__34784,st_map){
var map__34789 = p__34784;
var map__34789__$1 = ((((!((map__34789 == null)))?((((map__34789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34789):map__34789);
var container_el = cljs.core.get.call(null,map__34789__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__34789,map__34789__$1,container_el){
return (function (p__34791){
var vec__34792 = p__34791;
var k = cljs.core.nth.call(null,vec__34792,(0),null);
var v = cljs.core.nth.call(null,vec__34792,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__34789,map__34789__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__34793,dom_str){
var map__34796 = p__34793;
var map__34796__$1 = ((((!((map__34796 == null)))?((((map__34796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34796):map__34796);
var c = map__34796__$1;
var content_area_el = cljs.core.get.call(null,map__34796__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__34798){
var map__34801 = p__34798;
var map__34801__$1 = ((((!((map__34801 == null)))?((((map__34801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34801):map__34801);
var content_area_el = cljs.core.get.call(null,map__34801__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__30586__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto__){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto__){
return (function (state_34844){
var state_val_34845 = (state_34844[(1)]);
if((state_val_34845 === (1))){
var inst_34829 = (state_34844[(7)]);
var inst_34829__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34830 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34831 = ["10px","10px","100%","68px","1.0"];
var inst_34832 = cljs.core.PersistentHashMap.fromArrays(inst_34830,inst_34831);
var inst_34833 = cljs.core.merge.call(null,inst_34832,style);
var inst_34834 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34829__$1,inst_34833);
var inst_34835 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34829__$1,msg);
var inst_34836 = cljs.core.async.timeout.call(null,(300));
var state_34844__$1 = (function (){var statearr_34846 = state_34844;
(statearr_34846[(7)] = inst_34829__$1);

(statearr_34846[(8)] = inst_34835);

(statearr_34846[(9)] = inst_34834);

return statearr_34846;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34844__$1,(2),inst_34836);
} else {
if((state_val_34845 === (2))){
var inst_34829 = (state_34844[(7)]);
var inst_34838 = (state_34844[(2)]);
var inst_34839 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_34840 = ["auto"];
var inst_34841 = cljs.core.PersistentHashMap.fromArrays(inst_34839,inst_34840);
var inst_34842 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34829,inst_34841);
var state_34844__$1 = (function (){var statearr_34847 = state_34844;
(statearr_34847[(10)] = inst_34838);

return statearr_34847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34844__$1,inst_34842);
} else {
return null;
}
}
});})(c__30586__auto__))
;
return ((function (switch__30474__auto__,c__30586__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__30475__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__30475__auto____0 = (function (){
var statearr_34851 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34851[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__30475__auto__);

(statearr_34851[(1)] = (1));

return statearr_34851;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__30475__auto____1 = (function (state_34844){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_34844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e34852){if((e34852 instanceof Object)){
var ex__30478__auto__ = e34852;
var statearr_34853_34855 = state_34844;
(statearr_34853_34855[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34856 = state_34844;
state_34844 = G__34856;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__30475__auto__ = function(state_34844){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__30475__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__30475__auto____1.call(this,state_34844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__30475__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__30475__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto__))
})();
var state__30588__auto__ = (function (){var statearr_34854 = f__30587__auto__.call(null);
(statearr_34854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto__);

return statearr_34854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto__))
);

return c__30586__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__34858 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__34858,(0),null);
var ln = cljs.core.nth.call(null,vec__34858,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__34861 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__34861,(0),null);
var file_line = cljs.core.nth.call(null,vec__34861,(1),null);
var file_column = cljs.core.nth.call(null,vec__34861,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__34861,file_name,file_line,file_column){
return (function (p1__34859_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__34859_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__34861,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__28420__auto__ = file_line;
if(cljs.core.truth_(or__28420__auto__)){
return or__28420__auto__;
} else {
var and__28408__auto__ = cause;
if(cljs.core.truth_(and__28408__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__28408__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__34864 = figwheel.client.heads_up.ensure_container.call(null);
var map__34864__$1 = ((((!((map__34864 == null)))?((((map__34864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34864):map__34864);
var content_area_el = cljs.core.get.call(null,map__34864__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__30586__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto__){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto__){
return (function (state_34912){
var state_val_34913 = (state_34912[(1)]);
if((state_val_34913 === (1))){
var inst_34895 = (state_34912[(7)]);
var inst_34895__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34896 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34897 = ["0.0"];
var inst_34898 = cljs.core.PersistentHashMap.fromArrays(inst_34896,inst_34897);
var inst_34899 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34895__$1,inst_34898);
var inst_34900 = cljs.core.async.timeout.call(null,(300));
var state_34912__$1 = (function (){var statearr_34914 = state_34912;
(statearr_34914[(7)] = inst_34895__$1);

(statearr_34914[(8)] = inst_34899);

return statearr_34914;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34912__$1,(2),inst_34900);
} else {
if((state_val_34913 === (2))){
var inst_34895 = (state_34912[(7)]);
var inst_34902 = (state_34912[(2)]);
var inst_34903 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_34904 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_34905 = cljs.core.PersistentHashMap.fromArrays(inst_34903,inst_34904);
var inst_34906 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34895,inst_34905);
var inst_34907 = cljs.core.async.timeout.call(null,(200));
var state_34912__$1 = (function (){var statearr_34915 = state_34912;
(statearr_34915[(9)] = inst_34906);

(statearr_34915[(10)] = inst_34902);

return statearr_34915;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34912__$1,(3),inst_34907);
} else {
if((state_val_34913 === (3))){
var inst_34895 = (state_34912[(7)]);
var inst_34909 = (state_34912[(2)]);
var inst_34910 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34895,"");
var state_34912__$1 = (function (){var statearr_34916 = state_34912;
(statearr_34916[(11)] = inst_34909);

return statearr_34916;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34912__$1,inst_34910);
} else {
return null;
}
}
}
});})(c__30586__auto__))
;
return ((function (switch__30474__auto__,c__30586__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__30475__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__30475__auto____0 = (function (){
var statearr_34920 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34920[(0)] = figwheel$client$heads_up$clear_$_state_machine__30475__auto__);

(statearr_34920[(1)] = (1));

return statearr_34920;
});
var figwheel$client$heads_up$clear_$_state_machine__30475__auto____1 = (function (state_34912){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_34912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e34921){if((e34921 instanceof Object)){
var ex__30478__auto__ = e34921;
var statearr_34922_34924 = state_34912;
(statearr_34922_34924[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34925 = state_34912;
state_34912 = G__34925;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__30475__auto__ = function(state_34912){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__30475__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__30475__auto____1.call(this,state_34912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__30475__auto____0;
figwheel$client$heads_up$clear_$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__30475__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto__))
})();
var state__30588__auto__ = (function (){var statearr_34923 = f__30587__auto__.call(null);
(statearr_34923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto__);

return statearr_34923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto__))
);

return c__30586__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__30586__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto__){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto__){
return (function (state_34957){
var state_val_34958 = (state_34957[(1)]);
if((state_val_34958 === (1))){
var inst_34947 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_34957__$1 = state_34957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34957__$1,(2),inst_34947);
} else {
if((state_val_34958 === (2))){
var inst_34949 = (state_34957[(2)]);
var inst_34950 = cljs.core.async.timeout.call(null,(400));
var state_34957__$1 = (function (){var statearr_34959 = state_34957;
(statearr_34959[(7)] = inst_34949);

return statearr_34959;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34957__$1,(3),inst_34950);
} else {
if((state_val_34958 === (3))){
var inst_34952 = (state_34957[(2)]);
var inst_34953 = figwheel.client.heads_up.clear.call(null);
var state_34957__$1 = (function (){var statearr_34960 = state_34957;
(statearr_34960[(8)] = inst_34952);

return statearr_34960;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34957__$1,(4),inst_34953);
} else {
if((state_val_34958 === (4))){
var inst_34955 = (state_34957[(2)]);
var state_34957__$1 = state_34957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34957__$1,inst_34955);
} else {
return null;
}
}
}
}
});})(c__30586__auto__))
;
return ((function (switch__30474__auto__,c__30586__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__30475__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__30475__auto____0 = (function (){
var statearr_34964 = [null,null,null,null,null,null,null,null,null];
(statearr_34964[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__30475__auto__);

(statearr_34964[(1)] = (1));

return statearr_34964;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__30475__auto____1 = (function (state_34957){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_34957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e34965){if((e34965 instanceof Object)){
var ex__30478__auto__ = e34965;
var statearr_34966_34968 = state_34957;
(statearr_34966_34968[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34969 = state_34957;
state_34957 = G__34969;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__30475__auto__ = function(state_34957){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__30475__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__30475__auto____1.call(this,state_34957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__30475__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__30475__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto__))
})();
var state__30588__auto__ = (function (){var statearr_34967 = f__30587__auto__.call(null);
(statearr_34967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto__);

return statearr_34967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto__))
);

return c__30586__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map