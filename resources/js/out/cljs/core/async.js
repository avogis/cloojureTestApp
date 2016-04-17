// Compiled by ClojureScript 1.8.40 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args30631 = [];
var len__29489__auto___30637 = arguments.length;
var i__29490__auto___30638 = (0);
while(true){
if((i__29490__auto___30638 < len__29489__auto___30637)){
args30631.push((arguments[i__29490__auto___30638]));

var G__30639 = (i__29490__auto___30638 + (1));
i__29490__auto___30638 = G__30639;
continue;
} else {
}
break;
}

var G__30633 = args30631.length;
switch (G__30633) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30631.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30634 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30634 = (function (f,blockable,meta30635){
this.f = f;
this.blockable = blockable;
this.meta30635 = meta30635;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30636,meta30635__$1){
var self__ = this;
var _30636__$1 = this;
return (new cljs.core.async.t_cljs$core$async30634(self__.f,self__.blockable,meta30635__$1));
});

cljs.core.async.t_cljs$core$async30634.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30636){
var self__ = this;
var _30636__$1 = this;
return self__.meta30635;
});

cljs.core.async.t_cljs$core$async30634.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30634.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30634.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30634.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30634.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30635","meta30635",-159173617,null)], null);
});

cljs.core.async.t_cljs$core$async30634.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30634.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30634";

cljs.core.async.t_cljs$core$async30634.cljs$lang$ctorPrWriter = (function (this__29026__auto__,writer__29027__auto__,opt__29028__auto__){
return cljs.core._write.call(null,writer__29027__auto__,"cljs.core.async/t_cljs$core$async30634");
});

cljs.core.async.__GT_t_cljs$core$async30634 = (function cljs$core$async$__GT_t_cljs$core$async30634(f__$1,blockable__$1,meta30635){
return (new cljs.core.async.t_cljs$core$async30634(f__$1,blockable__$1,meta30635));
});

}

return (new cljs.core.async.t_cljs$core$async30634(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args30643 = [];
var len__29489__auto___30646 = arguments.length;
var i__29490__auto___30647 = (0);
while(true){
if((i__29490__auto___30647 < len__29489__auto___30646)){
args30643.push((arguments[i__29490__auto___30647]));

var G__30648 = (i__29490__auto___30647 + (1));
i__29490__auto___30647 = G__30648;
continue;
} else {
}
break;
}

var G__30645 = args30643.length;
switch (G__30645) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30643.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args30650 = [];
var len__29489__auto___30653 = arguments.length;
var i__29490__auto___30654 = (0);
while(true){
if((i__29490__auto___30654 < len__29489__auto___30653)){
args30650.push((arguments[i__29490__auto___30654]));

var G__30655 = (i__29490__auto___30654 + (1));
i__29490__auto___30654 = G__30655;
continue;
} else {
}
break;
}

var G__30652 = args30650.length;
switch (G__30652) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30650.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args30657 = [];
var len__29489__auto___30660 = arguments.length;
var i__29490__auto___30661 = (0);
while(true){
if((i__29490__auto___30661 < len__29489__auto___30660)){
args30657.push((arguments[i__29490__auto___30661]));

var G__30662 = (i__29490__auto___30661 + (1));
i__29490__auto___30661 = G__30662;
continue;
} else {
}
break;
}

var G__30659 = args30657.length;
switch (G__30659) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30657.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30664 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30664);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30664,ret){
return (function (){
return fn1.call(null,val_30664);
});})(val_30664,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args30665 = [];
var len__29489__auto___30668 = arguments.length;
var i__29490__auto___30669 = (0);
while(true){
if((i__29490__auto___30669 < len__29489__auto___30668)){
args30665.push((arguments[i__29490__auto___30669]));

var G__30670 = (i__29490__auto___30669 + (1));
i__29490__auto___30669 = G__30670;
continue;
} else {
}
break;
}

var G__30667 = args30665.length;
switch (G__30667) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30665.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__29334__auto___30672 = n;
var x_30673 = (0);
while(true){
if((x_30673 < n__29334__auto___30672)){
(a[x_30673] = (0));

var G__30674 = (x_30673 + (1));
x_30673 = G__30674;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30675 = (i + (1));
i = G__30675;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30679 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30679 = (function (alt_flag,flag,meta30680){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30680 = meta30680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30681,meta30680__$1){
var self__ = this;
var _30681__$1 = this;
return (new cljs.core.async.t_cljs$core$async30679(self__.alt_flag,self__.flag,meta30680__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30679.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30681){
var self__ = this;
var _30681__$1 = this;
return self__.meta30680;
});})(flag))
;

cljs.core.async.t_cljs$core$async30679.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30679.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30679.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30679.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30679.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30680","meta30680",1420399572,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30679.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30679";

cljs.core.async.t_cljs$core$async30679.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__29026__auto__,writer__29027__auto__,opt__29028__auto__){
return cljs.core._write.call(null,writer__29027__auto__,"cljs.core.async/t_cljs$core$async30679");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30679 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30679(alt_flag__$1,flag__$1,meta30680){
return (new cljs.core.async.t_cljs$core$async30679(alt_flag__$1,flag__$1,meta30680));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30679(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30685 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30685 = (function (alt_handler,flag,cb,meta30686){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30686 = meta30686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30687,meta30686__$1){
var self__ = this;
var _30687__$1 = this;
return (new cljs.core.async.t_cljs$core$async30685(self__.alt_handler,self__.flag,self__.cb,meta30686__$1));
});

cljs.core.async.t_cljs$core$async30685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30687){
var self__ = this;
var _30687__$1 = this;
return self__.meta30686;
});

cljs.core.async.t_cljs$core$async30685.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30685.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30685.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30685.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30686","meta30686",2125380981,null)], null);
});

cljs.core.async.t_cljs$core$async30685.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30685";

cljs.core.async.t_cljs$core$async30685.cljs$lang$ctorPrWriter = (function (this__29026__auto__,writer__29027__auto__,opt__29028__auto__){
return cljs.core._write.call(null,writer__29027__auto__,"cljs.core.async/t_cljs$core$async30685");
});

cljs.core.async.__GT_t_cljs$core$async30685 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30685(alt_handler__$1,flag__$1,cb__$1,meta30686){
return (new cljs.core.async.t_cljs$core$async30685(alt_handler__$1,flag__$1,cb__$1,meta30686));
});

}

return (new cljs.core.async.t_cljs$core$async30685(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30688_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30688_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30689_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30689_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28420__auto__ = wport;
if(cljs.core.truth_(or__28420__auto__)){
return or__28420__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30690 = (i + (1));
i = G__30690;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28420__auto__ = ret;
if(cljs.core.truth_(or__28420__auto__)){
return or__28420__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28408__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28408__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28408__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__29496__auto__ = [];
var len__29489__auto___30696 = arguments.length;
var i__29490__auto___30697 = (0);
while(true){
if((i__29490__auto___30697 < len__29489__auto___30696)){
args__29496__auto__.push((arguments[i__29490__auto___30697]));

var G__30698 = (i__29490__auto___30697 + (1));
i__29490__auto___30697 = G__30698;
continue;
} else {
}
break;
}

var argseq__29497__auto__ = ((((1) < args__29496__auto__.length))?(new cljs.core.IndexedSeq(args__29496__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29497__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30693){
var map__30694 = p__30693;
var map__30694__$1 = ((((!((map__30694 == null)))?((((map__30694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30694):map__30694);
var opts = map__30694__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30691){
var G__30692 = cljs.core.first.call(null,seq30691);
var seq30691__$1 = cljs.core.next.call(null,seq30691);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30692,seq30691__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args30699 = [];
var len__29489__auto___30749 = arguments.length;
var i__29490__auto___30750 = (0);
while(true){
if((i__29490__auto___30750 < len__29489__auto___30749)){
args30699.push((arguments[i__29490__auto___30750]));

var G__30751 = (i__29490__auto___30750 + (1));
i__29490__auto___30750 = G__30751;
continue;
} else {
}
break;
}

var G__30701 = args30699.length;
switch (G__30701) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30699.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30586__auto___30753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto___30753){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto___30753){
return (function (state_30725){
var state_val_30726 = (state_30725[(1)]);
if((state_val_30726 === (7))){
var inst_30721 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
var statearr_30727_30754 = state_30725__$1;
(statearr_30727_30754[(2)] = inst_30721);

(statearr_30727_30754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (1))){
var state_30725__$1 = state_30725;
var statearr_30728_30755 = state_30725__$1;
(statearr_30728_30755[(2)] = null);

(statearr_30728_30755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (4))){
var inst_30704 = (state_30725[(7)]);
var inst_30704__$1 = (state_30725[(2)]);
var inst_30705 = (inst_30704__$1 == null);
var state_30725__$1 = (function (){var statearr_30729 = state_30725;
(statearr_30729[(7)] = inst_30704__$1);

return statearr_30729;
})();
if(cljs.core.truth_(inst_30705)){
var statearr_30730_30756 = state_30725__$1;
(statearr_30730_30756[(1)] = (5));

} else {
var statearr_30731_30757 = state_30725__$1;
(statearr_30731_30757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (13))){
var state_30725__$1 = state_30725;
var statearr_30732_30758 = state_30725__$1;
(statearr_30732_30758[(2)] = null);

(statearr_30732_30758[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (6))){
var inst_30704 = (state_30725[(7)]);
var state_30725__$1 = state_30725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30725__$1,(11),to,inst_30704);
} else {
if((state_val_30726 === (3))){
var inst_30723 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30725__$1,inst_30723);
} else {
if((state_val_30726 === (12))){
var state_30725__$1 = state_30725;
var statearr_30733_30759 = state_30725__$1;
(statearr_30733_30759[(2)] = null);

(statearr_30733_30759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (2))){
var state_30725__$1 = state_30725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30725__$1,(4),from);
} else {
if((state_val_30726 === (11))){
var inst_30714 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
if(cljs.core.truth_(inst_30714)){
var statearr_30734_30760 = state_30725__$1;
(statearr_30734_30760[(1)] = (12));

} else {
var statearr_30735_30761 = state_30725__$1;
(statearr_30735_30761[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (9))){
var state_30725__$1 = state_30725;
var statearr_30736_30762 = state_30725__$1;
(statearr_30736_30762[(2)] = null);

(statearr_30736_30762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (5))){
var state_30725__$1 = state_30725;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30737_30763 = state_30725__$1;
(statearr_30737_30763[(1)] = (8));

} else {
var statearr_30738_30764 = state_30725__$1;
(statearr_30738_30764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (14))){
var inst_30719 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
var statearr_30739_30765 = state_30725__$1;
(statearr_30739_30765[(2)] = inst_30719);

(statearr_30739_30765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (10))){
var inst_30711 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
var statearr_30740_30766 = state_30725__$1;
(statearr_30740_30766[(2)] = inst_30711);

(statearr_30740_30766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (8))){
var inst_30708 = cljs.core.async.close_BANG_.call(null,to);
var state_30725__$1 = state_30725;
var statearr_30741_30767 = state_30725__$1;
(statearr_30741_30767[(2)] = inst_30708);

(statearr_30741_30767[(1)] = (10));


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
});})(c__30586__auto___30753))
;
return ((function (switch__30474__auto__,c__30586__auto___30753){
return (function() {
var cljs$core$async$state_machine__30475__auto__ = null;
var cljs$core$async$state_machine__30475__auto____0 = (function (){
var statearr_30745 = [null,null,null,null,null,null,null,null];
(statearr_30745[(0)] = cljs$core$async$state_machine__30475__auto__);

(statearr_30745[(1)] = (1));

return statearr_30745;
});
var cljs$core$async$state_machine__30475__auto____1 = (function (state_30725){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_30725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e30746){if((e30746 instanceof Object)){
var ex__30478__auto__ = e30746;
var statearr_30747_30768 = state_30725;
(statearr_30747_30768[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30769 = state_30725;
state_30725 = G__30769;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
cljs$core$async$state_machine__30475__auto__ = function(state_30725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30475__auto____1.call(this,state_30725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30475__auto____0;
cljs$core$async$state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30475__auto____1;
return cljs$core$async$state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto___30753))
})();
var state__30588__auto__ = (function (){var statearr_30748 = f__30587__auto__.call(null);
(statearr_30748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto___30753);

return statearr_30748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto___30753))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30953){
var vec__30954 = p__30953;
var v = cljs.core.nth.call(null,vec__30954,(0),null);
var p = cljs.core.nth.call(null,vec__30954,(1),null);
var job = vec__30954;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30586__auto___31136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto___31136,res,vec__30954,v,p,job,jobs,results){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto___31136,res,vec__30954,v,p,job,jobs,results){
return (function (state_30959){
var state_val_30960 = (state_30959[(1)]);
if((state_val_30960 === (1))){
var state_30959__$1 = state_30959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30959__$1,(2),res,v);
} else {
if((state_val_30960 === (2))){
var inst_30956 = (state_30959[(2)]);
var inst_30957 = cljs.core.async.close_BANG_.call(null,res);
var state_30959__$1 = (function (){var statearr_30961 = state_30959;
(statearr_30961[(7)] = inst_30956);

return statearr_30961;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30959__$1,inst_30957);
} else {
return null;
}
}
});})(c__30586__auto___31136,res,vec__30954,v,p,job,jobs,results))
;
return ((function (switch__30474__auto__,c__30586__auto___31136,res,vec__30954,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____0 = (function (){
var statearr_30965 = [null,null,null,null,null,null,null,null];
(statearr_30965[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__);

(statearr_30965[(1)] = (1));

return statearr_30965;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____1 = (function (state_30959){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_30959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e30966){if((e30966 instanceof Object)){
var ex__30478__auto__ = e30966;
var statearr_30967_31137 = state_30959;
(statearr_30967_31137[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31138 = state_30959;
state_30959 = G__31138;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__ = function(state_30959){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____1.call(this,state_30959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto___31136,res,vec__30954,v,p,job,jobs,results))
})();
var state__30588__auto__ = (function (){var statearr_30968 = f__30587__auto__.call(null);
(statearr_30968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto___31136);

return statearr_30968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto___31136,res,vec__30954,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30969){
var vec__30970 = p__30969;
var v = cljs.core.nth.call(null,vec__30970,(0),null);
var p = cljs.core.nth.call(null,vec__30970,(1),null);
var job = vec__30970;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__29334__auto___31139 = n;
var __31140 = (0);
while(true){
if((__31140 < n__29334__auto___31139)){
var G__30971_31141 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30971_31141) {
case "compute":
var c__30586__auto___31143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31140,c__30586__auto___31143,G__30971_31141,n__29334__auto___31139,jobs,results,process,async){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (__31140,c__30586__auto___31143,G__30971_31141,n__29334__auto___31139,jobs,results,process,async){
return (function (state_30984){
var state_val_30985 = (state_30984[(1)]);
if((state_val_30985 === (1))){
var state_30984__$1 = state_30984;
var statearr_30986_31144 = state_30984__$1;
(statearr_30986_31144[(2)] = null);

(statearr_30986_31144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (2))){
var state_30984__$1 = state_30984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30984__$1,(4),jobs);
} else {
if((state_val_30985 === (3))){
var inst_30982 = (state_30984[(2)]);
var state_30984__$1 = state_30984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30984__$1,inst_30982);
} else {
if((state_val_30985 === (4))){
var inst_30974 = (state_30984[(2)]);
var inst_30975 = process.call(null,inst_30974);
var state_30984__$1 = state_30984;
if(cljs.core.truth_(inst_30975)){
var statearr_30987_31145 = state_30984__$1;
(statearr_30987_31145[(1)] = (5));

} else {
var statearr_30988_31146 = state_30984__$1;
(statearr_30988_31146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (5))){
var state_30984__$1 = state_30984;
var statearr_30989_31147 = state_30984__$1;
(statearr_30989_31147[(2)] = null);

(statearr_30989_31147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (6))){
var state_30984__$1 = state_30984;
var statearr_30990_31148 = state_30984__$1;
(statearr_30990_31148[(2)] = null);

(statearr_30990_31148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (7))){
var inst_30980 = (state_30984[(2)]);
var state_30984__$1 = state_30984;
var statearr_30991_31149 = state_30984__$1;
(statearr_30991_31149[(2)] = inst_30980);

(statearr_30991_31149[(1)] = (3));


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
});})(__31140,c__30586__auto___31143,G__30971_31141,n__29334__auto___31139,jobs,results,process,async))
;
return ((function (__31140,switch__30474__auto__,c__30586__auto___31143,G__30971_31141,n__29334__auto___31139,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____0 = (function (){
var statearr_30995 = [null,null,null,null,null,null,null];
(statearr_30995[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__);

(statearr_30995[(1)] = (1));

return statearr_30995;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____1 = (function (state_30984){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_30984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e30996){if((e30996 instanceof Object)){
var ex__30478__auto__ = e30996;
var statearr_30997_31150 = state_30984;
(statearr_30997_31150[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31151 = state_30984;
state_30984 = G__31151;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__ = function(state_30984){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____1.call(this,state_30984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__;
})()
;})(__31140,switch__30474__auto__,c__30586__auto___31143,G__30971_31141,n__29334__auto___31139,jobs,results,process,async))
})();
var state__30588__auto__ = (function (){var statearr_30998 = f__30587__auto__.call(null);
(statearr_30998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto___31143);

return statearr_30998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(__31140,c__30586__auto___31143,G__30971_31141,n__29334__auto___31139,jobs,results,process,async))
);


break;
case "async":
var c__30586__auto___31152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31140,c__30586__auto___31152,G__30971_31141,n__29334__auto___31139,jobs,results,process,async){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (__31140,c__30586__auto___31152,G__30971_31141,n__29334__auto___31139,jobs,results,process,async){
return (function (state_31011){
var state_val_31012 = (state_31011[(1)]);
if((state_val_31012 === (1))){
var state_31011__$1 = state_31011;
var statearr_31013_31153 = state_31011__$1;
(statearr_31013_31153[(2)] = null);

(statearr_31013_31153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (2))){
var state_31011__$1 = state_31011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31011__$1,(4),jobs);
} else {
if((state_val_31012 === (3))){
var inst_31009 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31011__$1,inst_31009);
} else {
if((state_val_31012 === (4))){
var inst_31001 = (state_31011[(2)]);
var inst_31002 = async.call(null,inst_31001);
var state_31011__$1 = state_31011;
if(cljs.core.truth_(inst_31002)){
var statearr_31014_31154 = state_31011__$1;
(statearr_31014_31154[(1)] = (5));

} else {
var statearr_31015_31155 = state_31011__$1;
(statearr_31015_31155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (5))){
var state_31011__$1 = state_31011;
var statearr_31016_31156 = state_31011__$1;
(statearr_31016_31156[(2)] = null);

(statearr_31016_31156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (6))){
var state_31011__$1 = state_31011;
var statearr_31017_31157 = state_31011__$1;
(statearr_31017_31157[(2)] = null);

(statearr_31017_31157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (7))){
var inst_31007 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31018_31158 = state_31011__$1;
(statearr_31018_31158[(2)] = inst_31007);

(statearr_31018_31158[(1)] = (3));


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
});})(__31140,c__30586__auto___31152,G__30971_31141,n__29334__auto___31139,jobs,results,process,async))
;
return ((function (__31140,switch__30474__auto__,c__30586__auto___31152,G__30971_31141,n__29334__auto___31139,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____0 = (function (){
var statearr_31022 = [null,null,null,null,null,null,null];
(statearr_31022[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__);

(statearr_31022[(1)] = (1));

return statearr_31022;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____1 = (function (state_31011){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_31011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e31023){if((e31023 instanceof Object)){
var ex__30478__auto__ = e31023;
var statearr_31024_31159 = state_31011;
(statearr_31024_31159[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31160 = state_31011;
state_31011 = G__31160;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__ = function(state_31011){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____1.call(this,state_31011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__;
})()
;})(__31140,switch__30474__auto__,c__30586__auto___31152,G__30971_31141,n__29334__auto___31139,jobs,results,process,async))
})();
var state__30588__auto__ = (function (){var statearr_31025 = f__30587__auto__.call(null);
(statearr_31025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto___31152);

return statearr_31025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(__31140,c__30586__auto___31152,G__30971_31141,n__29334__auto___31139,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31161 = (__31140 + (1));
__31140 = G__31161;
continue;
} else {
}
break;
}

var c__30586__auto___31162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto___31162,jobs,results,process,async){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto___31162,jobs,results,process,async){
return (function (state_31047){
var state_val_31048 = (state_31047[(1)]);
if((state_val_31048 === (1))){
var state_31047__$1 = state_31047;
var statearr_31049_31163 = state_31047__$1;
(statearr_31049_31163[(2)] = null);

(statearr_31049_31163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31048 === (2))){
var state_31047__$1 = state_31047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31047__$1,(4),from);
} else {
if((state_val_31048 === (3))){
var inst_31045 = (state_31047[(2)]);
var state_31047__$1 = state_31047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31047__$1,inst_31045);
} else {
if((state_val_31048 === (4))){
var inst_31028 = (state_31047[(7)]);
var inst_31028__$1 = (state_31047[(2)]);
var inst_31029 = (inst_31028__$1 == null);
var state_31047__$1 = (function (){var statearr_31050 = state_31047;
(statearr_31050[(7)] = inst_31028__$1);

return statearr_31050;
})();
if(cljs.core.truth_(inst_31029)){
var statearr_31051_31164 = state_31047__$1;
(statearr_31051_31164[(1)] = (5));

} else {
var statearr_31052_31165 = state_31047__$1;
(statearr_31052_31165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31048 === (5))){
var inst_31031 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31047__$1 = state_31047;
var statearr_31053_31166 = state_31047__$1;
(statearr_31053_31166[(2)] = inst_31031);

(statearr_31053_31166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31048 === (6))){
var inst_31033 = (state_31047[(8)]);
var inst_31028 = (state_31047[(7)]);
var inst_31033__$1 = cljs.core.async.chan.call(null,(1));
var inst_31034 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31035 = [inst_31028,inst_31033__$1];
var inst_31036 = (new cljs.core.PersistentVector(null,2,(5),inst_31034,inst_31035,null));
var state_31047__$1 = (function (){var statearr_31054 = state_31047;
(statearr_31054[(8)] = inst_31033__$1);

return statearr_31054;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31047__$1,(8),jobs,inst_31036);
} else {
if((state_val_31048 === (7))){
var inst_31043 = (state_31047[(2)]);
var state_31047__$1 = state_31047;
var statearr_31055_31167 = state_31047__$1;
(statearr_31055_31167[(2)] = inst_31043);

(statearr_31055_31167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31048 === (8))){
var inst_31033 = (state_31047[(8)]);
var inst_31038 = (state_31047[(2)]);
var state_31047__$1 = (function (){var statearr_31056 = state_31047;
(statearr_31056[(9)] = inst_31038);

return statearr_31056;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31047__$1,(9),results,inst_31033);
} else {
if((state_val_31048 === (9))){
var inst_31040 = (state_31047[(2)]);
var state_31047__$1 = (function (){var statearr_31057 = state_31047;
(statearr_31057[(10)] = inst_31040);

return statearr_31057;
})();
var statearr_31058_31168 = state_31047__$1;
(statearr_31058_31168[(2)] = null);

(statearr_31058_31168[(1)] = (2));


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
});})(c__30586__auto___31162,jobs,results,process,async))
;
return ((function (switch__30474__auto__,c__30586__auto___31162,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____0 = (function (){
var statearr_31062 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31062[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__);

(statearr_31062[(1)] = (1));

return statearr_31062;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____1 = (function (state_31047){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_31047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e31063){if((e31063 instanceof Object)){
var ex__30478__auto__ = e31063;
var statearr_31064_31169 = state_31047;
(statearr_31064_31169[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31170 = state_31047;
state_31047 = G__31170;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__ = function(state_31047){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____1.call(this,state_31047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto___31162,jobs,results,process,async))
})();
var state__30588__auto__ = (function (){var statearr_31065 = f__30587__auto__.call(null);
(statearr_31065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto___31162);

return statearr_31065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto___31162,jobs,results,process,async))
);


var c__30586__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto__,jobs,results,process,async){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto__,jobs,results,process,async){
return (function (state_31103){
var state_val_31104 = (state_31103[(1)]);
if((state_val_31104 === (7))){
var inst_31099 = (state_31103[(2)]);
var state_31103__$1 = state_31103;
var statearr_31105_31171 = state_31103__$1;
(statearr_31105_31171[(2)] = inst_31099);

(statearr_31105_31171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31104 === (20))){
var state_31103__$1 = state_31103;
var statearr_31106_31172 = state_31103__$1;
(statearr_31106_31172[(2)] = null);

(statearr_31106_31172[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31104 === (1))){
var state_31103__$1 = state_31103;
var statearr_31107_31173 = state_31103__$1;
(statearr_31107_31173[(2)] = null);

(statearr_31107_31173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31104 === (4))){
var inst_31068 = (state_31103[(7)]);
var inst_31068__$1 = (state_31103[(2)]);
var inst_31069 = (inst_31068__$1 == null);
var state_31103__$1 = (function (){var statearr_31108 = state_31103;
(statearr_31108[(7)] = inst_31068__$1);

return statearr_31108;
})();
if(cljs.core.truth_(inst_31069)){
var statearr_31109_31174 = state_31103__$1;
(statearr_31109_31174[(1)] = (5));

} else {
var statearr_31110_31175 = state_31103__$1;
(statearr_31110_31175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31104 === (15))){
var inst_31081 = (state_31103[(8)]);
var state_31103__$1 = state_31103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31103__$1,(18),to,inst_31081);
} else {
if((state_val_31104 === (21))){
var inst_31094 = (state_31103[(2)]);
var state_31103__$1 = state_31103;
var statearr_31111_31176 = state_31103__$1;
(statearr_31111_31176[(2)] = inst_31094);

(statearr_31111_31176[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31104 === (13))){
var inst_31096 = (state_31103[(2)]);
var state_31103__$1 = (function (){var statearr_31112 = state_31103;
(statearr_31112[(9)] = inst_31096);

return statearr_31112;
})();
var statearr_31113_31177 = state_31103__$1;
(statearr_31113_31177[(2)] = null);

(statearr_31113_31177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31104 === (6))){
var inst_31068 = (state_31103[(7)]);
var state_31103__$1 = state_31103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31103__$1,(11),inst_31068);
} else {
if((state_val_31104 === (17))){
var inst_31089 = (state_31103[(2)]);
var state_31103__$1 = state_31103;
if(cljs.core.truth_(inst_31089)){
var statearr_31114_31178 = state_31103__$1;
(statearr_31114_31178[(1)] = (19));

} else {
var statearr_31115_31179 = state_31103__$1;
(statearr_31115_31179[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31104 === (3))){
var inst_31101 = (state_31103[(2)]);
var state_31103__$1 = state_31103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31103__$1,inst_31101);
} else {
if((state_val_31104 === (12))){
var inst_31078 = (state_31103[(10)]);
var state_31103__$1 = state_31103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31103__$1,(14),inst_31078);
} else {
if((state_val_31104 === (2))){
var state_31103__$1 = state_31103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31103__$1,(4),results);
} else {
if((state_val_31104 === (19))){
var state_31103__$1 = state_31103;
var statearr_31116_31180 = state_31103__$1;
(statearr_31116_31180[(2)] = null);

(statearr_31116_31180[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31104 === (11))){
var inst_31078 = (state_31103[(2)]);
var state_31103__$1 = (function (){var statearr_31117 = state_31103;
(statearr_31117[(10)] = inst_31078);

return statearr_31117;
})();
var statearr_31118_31181 = state_31103__$1;
(statearr_31118_31181[(2)] = null);

(statearr_31118_31181[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31104 === (9))){
var state_31103__$1 = state_31103;
var statearr_31119_31182 = state_31103__$1;
(statearr_31119_31182[(2)] = null);

(statearr_31119_31182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31104 === (5))){
var state_31103__$1 = state_31103;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31120_31183 = state_31103__$1;
(statearr_31120_31183[(1)] = (8));

} else {
var statearr_31121_31184 = state_31103__$1;
(statearr_31121_31184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31104 === (14))){
var inst_31081 = (state_31103[(8)]);
var inst_31083 = (state_31103[(11)]);
var inst_31081__$1 = (state_31103[(2)]);
var inst_31082 = (inst_31081__$1 == null);
var inst_31083__$1 = cljs.core.not.call(null,inst_31082);
var state_31103__$1 = (function (){var statearr_31122 = state_31103;
(statearr_31122[(8)] = inst_31081__$1);

(statearr_31122[(11)] = inst_31083__$1);

return statearr_31122;
})();
if(inst_31083__$1){
var statearr_31123_31185 = state_31103__$1;
(statearr_31123_31185[(1)] = (15));

} else {
var statearr_31124_31186 = state_31103__$1;
(statearr_31124_31186[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31104 === (16))){
var inst_31083 = (state_31103[(11)]);
var state_31103__$1 = state_31103;
var statearr_31125_31187 = state_31103__$1;
(statearr_31125_31187[(2)] = inst_31083);

(statearr_31125_31187[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31104 === (10))){
var inst_31075 = (state_31103[(2)]);
var state_31103__$1 = state_31103;
var statearr_31126_31188 = state_31103__$1;
(statearr_31126_31188[(2)] = inst_31075);

(statearr_31126_31188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31104 === (18))){
var inst_31086 = (state_31103[(2)]);
var state_31103__$1 = state_31103;
var statearr_31127_31189 = state_31103__$1;
(statearr_31127_31189[(2)] = inst_31086);

(statearr_31127_31189[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31104 === (8))){
var inst_31072 = cljs.core.async.close_BANG_.call(null,to);
var state_31103__$1 = state_31103;
var statearr_31128_31190 = state_31103__$1;
(statearr_31128_31190[(2)] = inst_31072);

(statearr_31128_31190[(1)] = (10));


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
});})(c__30586__auto__,jobs,results,process,async))
;
return ((function (switch__30474__auto__,c__30586__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____0 = (function (){
var statearr_31132 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31132[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__);

(statearr_31132[(1)] = (1));

return statearr_31132;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____1 = (function (state_31103){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_31103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e31133){if((e31133 instanceof Object)){
var ex__30478__auto__ = e31133;
var statearr_31134_31191 = state_31103;
(statearr_31134_31191[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31192 = state_31103;
state_31103 = G__31192;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__ = function(state_31103){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____1.call(this,state_31103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30475__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto__,jobs,results,process,async))
})();
var state__30588__auto__ = (function (){var statearr_31135 = f__30587__auto__.call(null);
(statearr_31135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto__);

return statearr_31135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto__,jobs,results,process,async))
);

return c__30586__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args31193 = [];
var len__29489__auto___31196 = arguments.length;
var i__29490__auto___31197 = (0);
while(true){
if((i__29490__auto___31197 < len__29489__auto___31196)){
args31193.push((arguments[i__29490__auto___31197]));

var G__31198 = (i__29490__auto___31197 + (1));
i__29490__auto___31197 = G__31198;
continue;
} else {
}
break;
}

var G__31195 = args31193.length;
switch (G__31195) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31193.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args31200 = [];
var len__29489__auto___31203 = arguments.length;
var i__29490__auto___31204 = (0);
while(true){
if((i__29490__auto___31204 < len__29489__auto___31203)){
args31200.push((arguments[i__29490__auto___31204]));

var G__31205 = (i__29490__auto___31204 + (1));
i__29490__auto___31204 = G__31205;
continue;
} else {
}
break;
}

var G__31202 = args31200.length;
switch (G__31202) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31200.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args31207 = [];
var len__29489__auto___31260 = arguments.length;
var i__29490__auto___31261 = (0);
while(true){
if((i__29490__auto___31261 < len__29489__auto___31260)){
args31207.push((arguments[i__29490__auto___31261]));

var G__31262 = (i__29490__auto___31261 + (1));
i__29490__auto___31261 = G__31262;
continue;
} else {
}
break;
}

var G__31209 = args31207.length;
switch (G__31209) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31207.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30586__auto___31264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto___31264,tc,fc){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto___31264,tc,fc){
return (function (state_31235){
var state_val_31236 = (state_31235[(1)]);
if((state_val_31236 === (7))){
var inst_31231 = (state_31235[(2)]);
var state_31235__$1 = state_31235;
var statearr_31237_31265 = state_31235__$1;
(statearr_31237_31265[(2)] = inst_31231);

(statearr_31237_31265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (1))){
var state_31235__$1 = state_31235;
var statearr_31238_31266 = state_31235__$1;
(statearr_31238_31266[(2)] = null);

(statearr_31238_31266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (4))){
var inst_31212 = (state_31235[(7)]);
var inst_31212__$1 = (state_31235[(2)]);
var inst_31213 = (inst_31212__$1 == null);
var state_31235__$1 = (function (){var statearr_31239 = state_31235;
(statearr_31239[(7)] = inst_31212__$1);

return statearr_31239;
})();
if(cljs.core.truth_(inst_31213)){
var statearr_31240_31267 = state_31235__$1;
(statearr_31240_31267[(1)] = (5));

} else {
var statearr_31241_31268 = state_31235__$1;
(statearr_31241_31268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (13))){
var state_31235__$1 = state_31235;
var statearr_31242_31269 = state_31235__$1;
(statearr_31242_31269[(2)] = null);

(statearr_31242_31269[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (6))){
var inst_31212 = (state_31235[(7)]);
var inst_31218 = p.call(null,inst_31212);
var state_31235__$1 = state_31235;
if(cljs.core.truth_(inst_31218)){
var statearr_31243_31270 = state_31235__$1;
(statearr_31243_31270[(1)] = (9));

} else {
var statearr_31244_31271 = state_31235__$1;
(statearr_31244_31271[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (3))){
var inst_31233 = (state_31235[(2)]);
var state_31235__$1 = state_31235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31235__$1,inst_31233);
} else {
if((state_val_31236 === (12))){
var state_31235__$1 = state_31235;
var statearr_31245_31272 = state_31235__$1;
(statearr_31245_31272[(2)] = null);

(statearr_31245_31272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (2))){
var state_31235__$1 = state_31235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31235__$1,(4),ch);
} else {
if((state_val_31236 === (11))){
var inst_31212 = (state_31235[(7)]);
var inst_31222 = (state_31235[(2)]);
var state_31235__$1 = state_31235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31235__$1,(8),inst_31222,inst_31212);
} else {
if((state_val_31236 === (9))){
var state_31235__$1 = state_31235;
var statearr_31246_31273 = state_31235__$1;
(statearr_31246_31273[(2)] = tc);

(statearr_31246_31273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (5))){
var inst_31215 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31216 = cljs.core.async.close_BANG_.call(null,fc);
var state_31235__$1 = (function (){var statearr_31247 = state_31235;
(statearr_31247[(8)] = inst_31215);

return statearr_31247;
})();
var statearr_31248_31274 = state_31235__$1;
(statearr_31248_31274[(2)] = inst_31216);

(statearr_31248_31274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (14))){
var inst_31229 = (state_31235[(2)]);
var state_31235__$1 = state_31235;
var statearr_31249_31275 = state_31235__$1;
(statearr_31249_31275[(2)] = inst_31229);

(statearr_31249_31275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (10))){
var state_31235__$1 = state_31235;
var statearr_31250_31276 = state_31235__$1;
(statearr_31250_31276[(2)] = fc);

(statearr_31250_31276[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (8))){
var inst_31224 = (state_31235[(2)]);
var state_31235__$1 = state_31235;
if(cljs.core.truth_(inst_31224)){
var statearr_31251_31277 = state_31235__$1;
(statearr_31251_31277[(1)] = (12));

} else {
var statearr_31252_31278 = state_31235__$1;
(statearr_31252_31278[(1)] = (13));

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
});})(c__30586__auto___31264,tc,fc))
;
return ((function (switch__30474__auto__,c__30586__auto___31264,tc,fc){
return (function() {
var cljs$core$async$state_machine__30475__auto__ = null;
var cljs$core$async$state_machine__30475__auto____0 = (function (){
var statearr_31256 = [null,null,null,null,null,null,null,null,null];
(statearr_31256[(0)] = cljs$core$async$state_machine__30475__auto__);

(statearr_31256[(1)] = (1));

return statearr_31256;
});
var cljs$core$async$state_machine__30475__auto____1 = (function (state_31235){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_31235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e31257){if((e31257 instanceof Object)){
var ex__30478__auto__ = e31257;
var statearr_31258_31279 = state_31235;
(statearr_31258_31279[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31280 = state_31235;
state_31235 = G__31280;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
cljs$core$async$state_machine__30475__auto__ = function(state_31235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30475__auto____1.call(this,state_31235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30475__auto____0;
cljs$core$async$state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30475__auto____1;
return cljs$core$async$state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto___31264,tc,fc))
})();
var state__30588__auto__ = (function (){var statearr_31259 = f__30587__auto__.call(null);
(statearr_31259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto___31264);

return statearr_31259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto___31264,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30586__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto__){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto__){
return (function (state_31344){
var state_val_31345 = (state_31344[(1)]);
if((state_val_31345 === (7))){
var inst_31340 = (state_31344[(2)]);
var state_31344__$1 = state_31344;
var statearr_31346_31367 = state_31344__$1;
(statearr_31346_31367[(2)] = inst_31340);

(statearr_31346_31367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (1))){
var inst_31324 = init;
var state_31344__$1 = (function (){var statearr_31347 = state_31344;
(statearr_31347[(7)] = inst_31324);

return statearr_31347;
})();
var statearr_31348_31368 = state_31344__$1;
(statearr_31348_31368[(2)] = null);

(statearr_31348_31368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (4))){
var inst_31327 = (state_31344[(8)]);
var inst_31327__$1 = (state_31344[(2)]);
var inst_31328 = (inst_31327__$1 == null);
var state_31344__$1 = (function (){var statearr_31349 = state_31344;
(statearr_31349[(8)] = inst_31327__$1);

return statearr_31349;
})();
if(cljs.core.truth_(inst_31328)){
var statearr_31350_31369 = state_31344__$1;
(statearr_31350_31369[(1)] = (5));

} else {
var statearr_31351_31370 = state_31344__$1;
(statearr_31351_31370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (6))){
var inst_31331 = (state_31344[(9)]);
var inst_31324 = (state_31344[(7)]);
var inst_31327 = (state_31344[(8)]);
var inst_31331__$1 = f.call(null,inst_31324,inst_31327);
var inst_31332 = cljs.core.reduced_QMARK_.call(null,inst_31331__$1);
var state_31344__$1 = (function (){var statearr_31352 = state_31344;
(statearr_31352[(9)] = inst_31331__$1);

return statearr_31352;
})();
if(inst_31332){
var statearr_31353_31371 = state_31344__$1;
(statearr_31353_31371[(1)] = (8));

} else {
var statearr_31354_31372 = state_31344__$1;
(statearr_31354_31372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (3))){
var inst_31342 = (state_31344[(2)]);
var state_31344__$1 = state_31344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31344__$1,inst_31342);
} else {
if((state_val_31345 === (2))){
var state_31344__$1 = state_31344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31344__$1,(4),ch);
} else {
if((state_val_31345 === (9))){
var inst_31331 = (state_31344[(9)]);
var inst_31324 = inst_31331;
var state_31344__$1 = (function (){var statearr_31355 = state_31344;
(statearr_31355[(7)] = inst_31324);

return statearr_31355;
})();
var statearr_31356_31373 = state_31344__$1;
(statearr_31356_31373[(2)] = null);

(statearr_31356_31373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (5))){
var inst_31324 = (state_31344[(7)]);
var state_31344__$1 = state_31344;
var statearr_31357_31374 = state_31344__$1;
(statearr_31357_31374[(2)] = inst_31324);

(statearr_31357_31374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (10))){
var inst_31338 = (state_31344[(2)]);
var state_31344__$1 = state_31344;
var statearr_31358_31375 = state_31344__$1;
(statearr_31358_31375[(2)] = inst_31338);

(statearr_31358_31375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (8))){
var inst_31331 = (state_31344[(9)]);
var inst_31334 = cljs.core.deref.call(null,inst_31331);
var state_31344__$1 = state_31344;
var statearr_31359_31376 = state_31344__$1;
(statearr_31359_31376[(2)] = inst_31334);

(statearr_31359_31376[(1)] = (10));


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
});})(c__30586__auto__))
;
return ((function (switch__30474__auto__,c__30586__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30475__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30475__auto____0 = (function (){
var statearr_31363 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31363[(0)] = cljs$core$async$reduce_$_state_machine__30475__auto__);

(statearr_31363[(1)] = (1));

return statearr_31363;
});
var cljs$core$async$reduce_$_state_machine__30475__auto____1 = (function (state_31344){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_31344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e31364){if((e31364 instanceof Object)){
var ex__30478__auto__ = e31364;
var statearr_31365_31377 = state_31344;
(statearr_31365_31377[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31378 = state_31344;
state_31344 = G__31378;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30475__auto__ = function(state_31344){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30475__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30475__auto____1.call(this,state_31344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30475__auto____0;
cljs$core$async$reduce_$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30475__auto____1;
return cljs$core$async$reduce_$_state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto__))
})();
var state__30588__auto__ = (function (){var statearr_31366 = f__30587__auto__.call(null);
(statearr_31366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto__);

return statearr_31366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto__))
);

return c__30586__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args31379 = [];
var len__29489__auto___31431 = arguments.length;
var i__29490__auto___31432 = (0);
while(true){
if((i__29490__auto___31432 < len__29489__auto___31431)){
args31379.push((arguments[i__29490__auto___31432]));

var G__31433 = (i__29490__auto___31432 + (1));
i__29490__auto___31432 = G__31433;
continue;
} else {
}
break;
}

var G__31381 = args31379.length;
switch (G__31381) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31379.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30586__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto__){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto__){
return (function (state_31406){
var state_val_31407 = (state_31406[(1)]);
if((state_val_31407 === (7))){
var inst_31388 = (state_31406[(2)]);
var state_31406__$1 = state_31406;
var statearr_31408_31435 = state_31406__$1;
(statearr_31408_31435[(2)] = inst_31388);

(statearr_31408_31435[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31407 === (1))){
var inst_31382 = cljs.core.seq.call(null,coll);
var inst_31383 = inst_31382;
var state_31406__$1 = (function (){var statearr_31409 = state_31406;
(statearr_31409[(7)] = inst_31383);

return statearr_31409;
})();
var statearr_31410_31436 = state_31406__$1;
(statearr_31410_31436[(2)] = null);

(statearr_31410_31436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31407 === (4))){
var inst_31383 = (state_31406[(7)]);
var inst_31386 = cljs.core.first.call(null,inst_31383);
var state_31406__$1 = state_31406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31406__$1,(7),ch,inst_31386);
} else {
if((state_val_31407 === (13))){
var inst_31400 = (state_31406[(2)]);
var state_31406__$1 = state_31406;
var statearr_31411_31437 = state_31406__$1;
(statearr_31411_31437[(2)] = inst_31400);

(statearr_31411_31437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31407 === (6))){
var inst_31391 = (state_31406[(2)]);
var state_31406__$1 = state_31406;
if(cljs.core.truth_(inst_31391)){
var statearr_31412_31438 = state_31406__$1;
(statearr_31412_31438[(1)] = (8));

} else {
var statearr_31413_31439 = state_31406__$1;
(statearr_31413_31439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31407 === (3))){
var inst_31404 = (state_31406[(2)]);
var state_31406__$1 = state_31406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31406__$1,inst_31404);
} else {
if((state_val_31407 === (12))){
var state_31406__$1 = state_31406;
var statearr_31414_31440 = state_31406__$1;
(statearr_31414_31440[(2)] = null);

(statearr_31414_31440[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31407 === (2))){
var inst_31383 = (state_31406[(7)]);
var state_31406__$1 = state_31406;
if(cljs.core.truth_(inst_31383)){
var statearr_31415_31441 = state_31406__$1;
(statearr_31415_31441[(1)] = (4));

} else {
var statearr_31416_31442 = state_31406__$1;
(statearr_31416_31442[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31407 === (11))){
var inst_31397 = cljs.core.async.close_BANG_.call(null,ch);
var state_31406__$1 = state_31406;
var statearr_31417_31443 = state_31406__$1;
(statearr_31417_31443[(2)] = inst_31397);

(statearr_31417_31443[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31407 === (9))){
var state_31406__$1 = state_31406;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31418_31444 = state_31406__$1;
(statearr_31418_31444[(1)] = (11));

} else {
var statearr_31419_31445 = state_31406__$1;
(statearr_31419_31445[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31407 === (5))){
var inst_31383 = (state_31406[(7)]);
var state_31406__$1 = state_31406;
var statearr_31420_31446 = state_31406__$1;
(statearr_31420_31446[(2)] = inst_31383);

(statearr_31420_31446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31407 === (10))){
var inst_31402 = (state_31406[(2)]);
var state_31406__$1 = state_31406;
var statearr_31421_31447 = state_31406__$1;
(statearr_31421_31447[(2)] = inst_31402);

(statearr_31421_31447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31407 === (8))){
var inst_31383 = (state_31406[(7)]);
var inst_31393 = cljs.core.next.call(null,inst_31383);
var inst_31383__$1 = inst_31393;
var state_31406__$1 = (function (){var statearr_31422 = state_31406;
(statearr_31422[(7)] = inst_31383__$1);

return statearr_31422;
})();
var statearr_31423_31448 = state_31406__$1;
(statearr_31423_31448[(2)] = null);

(statearr_31423_31448[(1)] = (2));


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
});})(c__30586__auto__))
;
return ((function (switch__30474__auto__,c__30586__auto__){
return (function() {
var cljs$core$async$state_machine__30475__auto__ = null;
var cljs$core$async$state_machine__30475__auto____0 = (function (){
var statearr_31427 = [null,null,null,null,null,null,null,null];
(statearr_31427[(0)] = cljs$core$async$state_machine__30475__auto__);

(statearr_31427[(1)] = (1));

return statearr_31427;
});
var cljs$core$async$state_machine__30475__auto____1 = (function (state_31406){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_31406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e31428){if((e31428 instanceof Object)){
var ex__30478__auto__ = e31428;
var statearr_31429_31449 = state_31406;
(statearr_31429_31449[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31450 = state_31406;
state_31406 = G__31450;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
cljs$core$async$state_machine__30475__auto__ = function(state_31406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30475__auto____1.call(this,state_31406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30475__auto____0;
cljs$core$async$state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30475__auto____1;
return cljs$core$async$state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto__))
})();
var state__30588__auto__ = (function (){var statearr_31430 = f__30587__auto__.call(null);
(statearr_31430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto__);

return statearr_31430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto__))
);

return c__30586__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__29083__auto__ = (((_ == null))?null:_);
var m__29084__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__29083__auto__)]);
if(!((m__29084__auto__ == null))){
return m__29084__auto__.call(null,_);
} else {
var m__29084__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__29084__auto____$1 == null))){
return m__29084__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__29083__auto__ = (((m == null))?null:m);
var m__29084__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__29083__auto__)]);
if(!((m__29084__auto__ == null))){
return m__29084__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__29084__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__29084__auto____$1 == null))){
return m__29084__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__29083__auto__ = (((m == null))?null:m);
var m__29084__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__29083__auto__)]);
if(!((m__29084__auto__ == null))){
return m__29084__auto__.call(null,m,ch);
} else {
var m__29084__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__29084__auto____$1 == null))){
return m__29084__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__29083__auto__ = (((m == null))?null:m);
var m__29084__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__29083__auto__)]);
if(!((m__29084__auto__ == null))){
return m__29084__auto__.call(null,m);
} else {
var m__29084__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__29084__auto____$1 == null))){
return m__29084__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31672 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31672 = (function (mult,ch,cs,meta31673){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31673 = meta31673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31674,meta31673__$1){
var self__ = this;
var _31674__$1 = this;
return (new cljs.core.async.t_cljs$core$async31672(self__.mult,self__.ch,self__.cs,meta31673__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31672.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31674){
var self__ = this;
var _31674__$1 = this;
return self__.meta31673;
});})(cs))
;

cljs.core.async.t_cljs$core$async31672.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31672.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31672.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31672.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31672.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31672.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31672.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31673","meta31673",96031007,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31672.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31672.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31672";

cljs.core.async.t_cljs$core$async31672.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__29026__auto__,writer__29027__auto__,opt__29028__auto__){
return cljs.core._write.call(null,writer__29027__auto__,"cljs.core.async/t_cljs$core$async31672");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31672 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31672(mult__$1,ch__$1,cs__$1,meta31673){
return (new cljs.core.async.t_cljs$core$async31672(mult__$1,ch__$1,cs__$1,meta31673));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31672(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30586__auto___31893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto___31893,cs,m,dchan,dctr,done){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto___31893,cs,m,dchan,dctr,done){
return (function (state_31805){
var state_val_31806 = (state_31805[(1)]);
if((state_val_31806 === (7))){
var inst_31801 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
var statearr_31807_31894 = state_31805__$1;
(statearr_31807_31894[(2)] = inst_31801);

(statearr_31807_31894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (20))){
var inst_31706 = (state_31805[(7)]);
var inst_31716 = cljs.core.first.call(null,inst_31706);
var inst_31717 = cljs.core.nth.call(null,inst_31716,(0),null);
var inst_31718 = cljs.core.nth.call(null,inst_31716,(1),null);
var state_31805__$1 = (function (){var statearr_31808 = state_31805;
(statearr_31808[(8)] = inst_31717);

return statearr_31808;
})();
if(cljs.core.truth_(inst_31718)){
var statearr_31809_31895 = state_31805__$1;
(statearr_31809_31895[(1)] = (22));

} else {
var statearr_31810_31896 = state_31805__$1;
(statearr_31810_31896[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (27))){
var inst_31677 = (state_31805[(9)]);
var inst_31748 = (state_31805[(10)]);
var inst_31746 = (state_31805[(11)]);
var inst_31753 = (state_31805[(12)]);
var inst_31753__$1 = cljs.core._nth.call(null,inst_31746,inst_31748);
var inst_31754 = cljs.core.async.put_BANG_.call(null,inst_31753__$1,inst_31677,done);
var state_31805__$1 = (function (){var statearr_31811 = state_31805;
(statearr_31811[(12)] = inst_31753__$1);

return statearr_31811;
})();
if(cljs.core.truth_(inst_31754)){
var statearr_31812_31897 = state_31805__$1;
(statearr_31812_31897[(1)] = (30));

} else {
var statearr_31813_31898 = state_31805__$1;
(statearr_31813_31898[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (1))){
var state_31805__$1 = state_31805;
var statearr_31814_31899 = state_31805__$1;
(statearr_31814_31899[(2)] = null);

(statearr_31814_31899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (24))){
var inst_31706 = (state_31805[(7)]);
var inst_31723 = (state_31805[(2)]);
var inst_31724 = cljs.core.next.call(null,inst_31706);
var inst_31686 = inst_31724;
var inst_31687 = null;
var inst_31688 = (0);
var inst_31689 = (0);
var state_31805__$1 = (function (){var statearr_31815 = state_31805;
(statearr_31815[(13)] = inst_31723);

(statearr_31815[(14)] = inst_31687);

(statearr_31815[(15)] = inst_31689);

(statearr_31815[(16)] = inst_31688);

(statearr_31815[(17)] = inst_31686);

return statearr_31815;
})();
var statearr_31816_31900 = state_31805__$1;
(statearr_31816_31900[(2)] = null);

(statearr_31816_31900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (39))){
var state_31805__$1 = state_31805;
var statearr_31820_31901 = state_31805__$1;
(statearr_31820_31901[(2)] = null);

(statearr_31820_31901[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (4))){
var inst_31677 = (state_31805[(9)]);
var inst_31677__$1 = (state_31805[(2)]);
var inst_31678 = (inst_31677__$1 == null);
var state_31805__$1 = (function (){var statearr_31821 = state_31805;
(statearr_31821[(9)] = inst_31677__$1);

return statearr_31821;
})();
if(cljs.core.truth_(inst_31678)){
var statearr_31822_31902 = state_31805__$1;
(statearr_31822_31902[(1)] = (5));

} else {
var statearr_31823_31903 = state_31805__$1;
(statearr_31823_31903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (15))){
var inst_31687 = (state_31805[(14)]);
var inst_31689 = (state_31805[(15)]);
var inst_31688 = (state_31805[(16)]);
var inst_31686 = (state_31805[(17)]);
var inst_31702 = (state_31805[(2)]);
var inst_31703 = (inst_31689 + (1));
var tmp31817 = inst_31687;
var tmp31818 = inst_31688;
var tmp31819 = inst_31686;
var inst_31686__$1 = tmp31819;
var inst_31687__$1 = tmp31817;
var inst_31688__$1 = tmp31818;
var inst_31689__$1 = inst_31703;
var state_31805__$1 = (function (){var statearr_31824 = state_31805;
(statearr_31824[(18)] = inst_31702);

(statearr_31824[(14)] = inst_31687__$1);

(statearr_31824[(15)] = inst_31689__$1);

(statearr_31824[(16)] = inst_31688__$1);

(statearr_31824[(17)] = inst_31686__$1);

return statearr_31824;
})();
var statearr_31825_31904 = state_31805__$1;
(statearr_31825_31904[(2)] = null);

(statearr_31825_31904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (21))){
var inst_31727 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
var statearr_31829_31905 = state_31805__$1;
(statearr_31829_31905[(2)] = inst_31727);

(statearr_31829_31905[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (31))){
var inst_31753 = (state_31805[(12)]);
var inst_31757 = done.call(null,null);
var inst_31758 = cljs.core.async.untap_STAR_.call(null,m,inst_31753);
var state_31805__$1 = (function (){var statearr_31830 = state_31805;
(statearr_31830[(19)] = inst_31757);

return statearr_31830;
})();
var statearr_31831_31906 = state_31805__$1;
(statearr_31831_31906[(2)] = inst_31758);

(statearr_31831_31906[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (32))){
var inst_31745 = (state_31805[(20)]);
var inst_31748 = (state_31805[(10)]);
var inst_31746 = (state_31805[(11)]);
var inst_31747 = (state_31805[(21)]);
var inst_31760 = (state_31805[(2)]);
var inst_31761 = (inst_31748 + (1));
var tmp31826 = inst_31745;
var tmp31827 = inst_31746;
var tmp31828 = inst_31747;
var inst_31745__$1 = tmp31826;
var inst_31746__$1 = tmp31827;
var inst_31747__$1 = tmp31828;
var inst_31748__$1 = inst_31761;
var state_31805__$1 = (function (){var statearr_31832 = state_31805;
(statearr_31832[(22)] = inst_31760);

(statearr_31832[(20)] = inst_31745__$1);

(statearr_31832[(10)] = inst_31748__$1);

(statearr_31832[(11)] = inst_31746__$1);

(statearr_31832[(21)] = inst_31747__$1);

return statearr_31832;
})();
var statearr_31833_31907 = state_31805__$1;
(statearr_31833_31907[(2)] = null);

(statearr_31833_31907[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (40))){
var inst_31773 = (state_31805[(23)]);
var inst_31777 = done.call(null,null);
var inst_31778 = cljs.core.async.untap_STAR_.call(null,m,inst_31773);
var state_31805__$1 = (function (){var statearr_31834 = state_31805;
(statearr_31834[(24)] = inst_31777);

return statearr_31834;
})();
var statearr_31835_31908 = state_31805__$1;
(statearr_31835_31908[(2)] = inst_31778);

(statearr_31835_31908[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (33))){
var inst_31764 = (state_31805[(25)]);
var inst_31766 = cljs.core.chunked_seq_QMARK_.call(null,inst_31764);
var state_31805__$1 = state_31805;
if(inst_31766){
var statearr_31836_31909 = state_31805__$1;
(statearr_31836_31909[(1)] = (36));

} else {
var statearr_31837_31910 = state_31805__$1;
(statearr_31837_31910[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (13))){
var inst_31696 = (state_31805[(26)]);
var inst_31699 = cljs.core.async.close_BANG_.call(null,inst_31696);
var state_31805__$1 = state_31805;
var statearr_31838_31911 = state_31805__$1;
(statearr_31838_31911[(2)] = inst_31699);

(statearr_31838_31911[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (22))){
var inst_31717 = (state_31805[(8)]);
var inst_31720 = cljs.core.async.close_BANG_.call(null,inst_31717);
var state_31805__$1 = state_31805;
var statearr_31839_31912 = state_31805__$1;
(statearr_31839_31912[(2)] = inst_31720);

(statearr_31839_31912[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (36))){
var inst_31764 = (state_31805[(25)]);
var inst_31768 = cljs.core.chunk_first.call(null,inst_31764);
var inst_31769 = cljs.core.chunk_rest.call(null,inst_31764);
var inst_31770 = cljs.core.count.call(null,inst_31768);
var inst_31745 = inst_31769;
var inst_31746 = inst_31768;
var inst_31747 = inst_31770;
var inst_31748 = (0);
var state_31805__$1 = (function (){var statearr_31840 = state_31805;
(statearr_31840[(20)] = inst_31745);

(statearr_31840[(10)] = inst_31748);

(statearr_31840[(11)] = inst_31746);

(statearr_31840[(21)] = inst_31747);

return statearr_31840;
})();
var statearr_31841_31913 = state_31805__$1;
(statearr_31841_31913[(2)] = null);

(statearr_31841_31913[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (41))){
var inst_31764 = (state_31805[(25)]);
var inst_31780 = (state_31805[(2)]);
var inst_31781 = cljs.core.next.call(null,inst_31764);
var inst_31745 = inst_31781;
var inst_31746 = null;
var inst_31747 = (0);
var inst_31748 = (0);
var state_31805__$1 = (function (){var statearr_31842 = state_31805;
(statearr_31842[(20)] = inst_31745);

(statearr_31842[(10)] = inst_31748);

(statearr_31842[(27)] = inst_31780);

(statearr_31842[(11)] = inst_31746);

(statearr_31842[(21)] = inst_31747);

return statearr_31842;
})();
var statearr_31843_31914 = state_31805__$1;
(statearr_31843_31914[(2)] = null);

(statearr_31843_31914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (43))){
var state_31805__$1 = state_31805;
var statearr_31844_31915 = state_31805__$1;
(statearr_31844_31915[(2)] = null);

(statearr_31844_31915[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (29))){
var inst_31789 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
var statearr_31845_31916 = state_31805__$1;
(statearr_31845_31916[(2)] = inst_31789);

(statearr_31845_31916[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (44))){
var inst_31798 = (state_31805[(2)]);
var state_31805__$1 = (function (){var statearr_31846 = state_31805;
(statearr_31846[(28)] = inst_31798);

return statearr_31846;
})();
var statearr_31847_31917 = state_31805__$1;
(statearr_31847_31917[(2)] = null);

(statearr_31847_31917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (6))){
var inst_31737 = (state_31805[(29)]);
var inst_31736 = cljs.core.deref.call(null,cs);
var inst_31737__$1 = cljs.core.keys.call(null,inst_31736);
var inst_31738 = cljs.core.count.call(null,inst_31737__$1);
var inst_31739 = cljs.core.reset_BANG_.call(null,dctr,inst_31738);
var inst_31744 = cljs.core.seq.call(null,inst_31737__$1);
var inst_31745 = inst_31744;
var inst_31746 = null;
var inst_31747 = (0);
var inst_31748 = (0);
var state_31805__$1 = (function (){var statearr_31848 = state_31805;
(statearr_31848[(29)] = inst_31737__$1);

(statearr_31848[(20)] = inst_31745);

(statearr_31848[(10)] = inst_31748);

(statearr_31848[(30)] = inst_31739);

(statearr_31848[(11)] = inst_31746);

(statearr_31848[(21)] = inst_31747);

return statearr_31848;
})();
var statearr_31849_31918 = state_31805__$1;
(statearr_31849_31918[(2)] = null);

(statearr_31849_31918[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (28))){
var inst_31764 = (state_31805[(25)]);
var inst_31745 = (state_31805[(20)]);
var inst_31764__$1 = cljs.core.seq.call(null,inst_31745);
var state_31805__$1 = (function (){var statearr_31850 = state_31805;
(statearr_31850[(25)] = inst_31764__$1);

return statearr_31850;
})();
if(inst_31764__$1){
var statearr_31851_31919 = state_31805__$1;
(statearr_31851_31919[(1)] = (33));

} else {
var statearr_31852_31920 = state_31805__$1;
(statearr_31852_31920[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (25))){
var inst_31748 = (state_31805[(10)]);
var inst_31747 = (state_31805[(21)]);
var inst_31750 = (inst_31748 < inst_31747);
var inst_31751 = inst_31750;
var state_31805__$1 = state_31805;
if(cljs.core.truth_(inst_31751)){
var statearr_31853_31921 = state_31805__$1;
(statearr_31853_31921[(1)] = (27));

} else {
var statearr_31854_31922 = state_31805__$1;
(statearr_31854_31922[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (34))){
var state_31805__$1 = state_31805;
var statearr_31855_31923 = state_31805__$1;
(statearr_31855_31923[(2)] = null);

(statearr_31855_31923[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (17))){
var state_31805__$1 = state_31805;
var statearr_31856_31924 = state_31805__$1;
(statearr_31856_31924[(2)] = null);

(statearr_31856_31924[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (3))){
var inst_31803 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31805__$1,inst_31803);
} else {
if((state_val_31806 === (12))){
var inst_31732 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
var statearr_31857_31925 = state_31805__$1;
(statearr_31857_31925[(2)] = inst_31732);

(statearr_31857_31925[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (2))){
var state_31805__$1 = state_31805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31805__$1,(4),ch);
} else {
if((state_val_31806 === (23))){
var state_31805__$1 = state_31805;
var statearr_31858_31926 = state_31805__$1;
(statearr_31858_31926[(2)] = null);

(statearr_31858_31926[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (35))){
var inst_31787 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
var statearr_31859_31927 = state_31805__$1;
(statearr_31859_31927[(2)] = inst_31787);

(statearr_31859_31927[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (19))){
var inst_31706 = (state_31805[(7)]);
var inst_31710 = cljs.core.chunk_first.call(null,inst_31706);
var inst_31711 = cljs.core.chunk_rest.call(null,inst_31706);
var inst_31712 = cljs.core.count.call(null,inst_31710);
var inst_31686 = inst_31711;
var inst_31687 = inst_31710;
var inst_31688 = inst_31712;
var inst_31689 = (0);
var state_31805__$1 = (function (){var statearr_31860 = state_31805;
(statearr_31860[(14)] = inst_31687);

(statearr_31860[(15)] = inst_31689);

(statearr_31860[(16)] = inst_31688);

(statearr_31860[(17)] = inst_31686);

return statearr_31860;
})();
var statearr_31861_31928 = state_31805__$1;
(statearr_31861_31928[(2)] = null);

(statearr_31861_31928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (11))){
var inst_31686 = (state_31805[(17)]);
var inst_31706 = (state_31805[(7)]);
var inst_31706__$1 = cljs.core.seq.call(null,inst_31686);
var state_31805__$1 = (function (){var statearr_31862 = state_31805;
(statearr_31862[(7)] = inst_31706__$1);

return statearr_31862;
})();
if(inst_31706__$1){
var statearr_31863_31929 = state_31805__$1;
(statearr_31863_31929[(1)] = (16));

} else {
var statearr_31864_31930 = state_31805__$1;
(statearr_31864_31930[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (9))){
var inst_31734 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
var statearr_31865_31931 = state_31805__$1;
(statearr_31865_31931[(2)] = inst_31734);

(statearr_31865_31931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (5))){
var inst_31684 = cljs.core.deref.call(null,cs);
var inst_31685 = cljs.core.seq.call(null,inst_31684);
var inst_31686 = inst_31685;
var inst_31687 = null;
var inst_31688 = (0);
var inst_31689 = (0);
var state_31805__$1 = (function (){var statearr_31866 = state_31805;
(statearr_31866[(14)] = inst_31687);

(statearr_31866[(15)] = inst_31689);

(statearr_31866[(16)] = inst_31688);

(statearr_31866[(17)] = inst_31686);

return statearr_31866;
})();
var statearr_31867_31932 = state_31805__$1;
(statearr_31867_31932[(2)] = null);

(statearr_31867_31932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (14))){
var state_31805__$1 = state_31805;
var statearr_31868_31933 = state_31805__$1;
(statearr_31868_31933[(2)] = null);

(statearr_31868_31933[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (45))){
var inst_31795 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
var statearr_31869_31934 = state_31805__$1;
(statearr_31869_31934[(2)] = inst_31795);

(statearr_31869_31934[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (26))){
var inst_31737 = (state_31805[(29)]);
var inst_31791 = (state_31805[(2)]);
var inst_31792 = cljs.core.seq.call(null,inst_31737);
var state_31805__$1 = (function (){var statearr_31870 = state_31805;
(statearr_31870[(31)] = inst_31791);

return statearr_31870;
})();
if(inst_31792){
var statearr_31871_31935 = state_31805__$1;
(statearr_31871_31935[(1)] = (42));

} else {
var statearr_31872_31936 = state_31805__$1;
(statearr_31872_31936[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (16))){
var inst_31706 = (state_31805[(7)]);
var inst_31708 = cljs.core.chunked_seq_QMARK_.call(null,inst_31706);
var state_31805__$1 = state_31805;
if(inst_31708){
var statearr_31873_31937 = state_31805__$1;
(statearr_31873_31937[(1)] = (19));

} else {
var statearr_31874_31938 = state_31805__$1;
(statearr_31874_31938[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (38))){
var inst_31784 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
var statearr_31875_31939 = state_31805__$1;
(statearr_31875_31939[(2)] = inst_31784);

(statearr_31875_31939[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (30))){
var state_31805__$1 = state_31805;
var statearr_31876_31940 = state_31805__$1;
(statearr_31876_31940[(2)] = null);

(statearr_31876_31940[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (10))){
var inst_31687 = (state_31805[(14)]);
var inst_31689 = (state_31805[(15)]);
var inst_31695 = cljs.core._nth.call(null,inst_31687,inst_31689);
var inst_31696 = cljs.core.nth.call(null,inst_31695,(0),null);
var inst_31697 = cljs.core.nth.call(null,inst_31695,(1),null);
var state_31805__$1 = (function (){var statearr_31877 = state_31805;
(statearr_31877[(26)] = inst_31696);

return statearr_31877;
})();
if(cljs.core.truth_(inst_31697)){
var statearr_31878_31941 = state_31805__$1;
(statearr_31878_31941[(1)] = (13));

} else {
var statearr_31879_31942 = state_31805__$1;
(statearr_31879_31942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (18))){
var inst_31730 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
var statearr_31880_31943 = state_31805__$1;
(statearr_31880_31943[(2)] = inst_31730);

(statearr_31880_31943[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (42))){
var state_31805__$1 = state_31805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31805__$1,(45),dchan);
} else {
if((state_val_31806 === (37))){
var inst_31773 = (state_31805[(23)]);
var inst_31764 = (state_31805[(25)]);
var inst_31677 = (state_31805[(9)]);
var inst_31773__$1 = cljs.core.first.call(null,inst_31764);
var inst_31774 = cljs.core.async.put_BANG_.call(null,inst_31773__$1,inst_31677,done);
var state_31805__$1 = (function (){var statearr_31881 = state_31805;
(statearr_31881[(23)] = inst_31773__$1);

return statearr_31881;
})();
if(cljs.core.truth_(inst_31774)){
var statearr_31882_31944 = state_31805__$1;
(statearr_31882_31944[(1)] = (39));

} else {
var statearr_31883_31945 = state_31805__$1;
(statearr_31883_31945[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (8))){
var inst_31689 = (state_31805[(15)]);
var inst_31688 = (state_31805[(16)]);
var inst_31691 = (inst_31689 < inst_31688);
var inst_31692 = inst_31691;
var state_31805__$1 = state_31805;
if(cljs.core.truth_(inst_31692)){
var statearr_31884_31946 = state_31805__$1;
(statearr_31884_31946[(1)] = (10));

} else {
var statearr_31885_31947 = state_31805__$1;
(statearr_31885_31947[(1)] = (11));

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
});})(c__30586__auto___31893,cs,m,dchan,dctr,done))
;
return ((function (switch__30474__auto__,c__30586__auto___31893,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30475__auto__ = null;
var cljs$core$async$mult_$_state_machine__30475__auto____0 = (function (){
var statearr_31889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31889[(0)] = cljs$core$async$mult_$_state_machine__30475__auto__);

(statearr_31889[(1)] = (1));

return statearr_31889;
});
var cljs$core$async$mult_$_state_machine__30475__auto____1 = (function (state_31805){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_31805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e31890){if((e31890 instanceof Object)){
var ex__30478__auto__ = e31890;
var statearr_31891_31948 = state_31805;
(statearr_31891_31948[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31949 = state_31805;
state_31805 = G__31949;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30475__auto__ = function(state_31805){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30475__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30475__auto____1.call(this,state_31805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30475__auto____0;
cljs$core$async$mult_$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30475__auto____1;
return cljs$core$async$mult_$_state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto___31893,cs,m,dchan,dctr,done))
})();
var state__30588__auto__ = (function (){var statearr_31892 = f__30587__auto__.call(null);
(statearr_31892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto___31893);

return statearr_31892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto___31893,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args31950 = [];
var len__29489__auto___31953 = arguments.length;
var i__29490__auto___31954 = (0);
while(true){
if((i__29490__auto___31954 < len__29489__auto___31953)){
args31950.push((arguments[i__29490__auto___31954]));

var G__31955 = (i__29490__auto___31954 + (1));
i__29490__auto___31954 = G__31955;
continue;
} else {
}
break;
}

var G__31952 = args31950.length;
switch (G__31952) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31950.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__29083__auto__ = (((m == null))?null:m);
var m__29084__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__29083__auto__)]);
if(!((m__29084__auto__ == null))){
return m__29084__auto__.call(null,m,ch);
} else {
var m__29084__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__29084__auto____$1 == null))){
return m__29084__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__29083__auto__ = (((m == null))?null:m);
var m__29084__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__29083__auto__)]);
if(!((m__29084__auto__ == null))){
return m__29084__auto__.call(null,m,ch);
} else {
var m__29084__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__29084__auto____$1 == null))){
return m__29084__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__29083__auto__ = (((m == null))?null:m);
var m__29084__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__29083__auto__)]);
if(!((m__29084__auto__ == null))){
return m__29084__auto__.call(null,m);
} else {
var m__29084__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__29084__auto____$1 == null))){
return m__29084__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__29083__auto__ = (((m == null))?null:m);
var m__29084__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__29083__auto__)]);
if(!((m__29084__auto__ == null))){
return m__29084__auto__.call(null,m,state_map);
} else {
var m__29084__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__29084__auto____$1 == null))){
return m__29084__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__29083__auto__ = (((m == null))?null:m);
var m__29084__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__29083__auto__)]);
if(!((m__29084__auto__ == null))){
return m__29084__auto__.call(null,m,mode);
} else {
var m__29084__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__29084__auto____$1 == null))){
return m__29084__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29496__auto__ = [];
var len__29489__auto___31967 = arguments.length;
var i__29490__auto___31968 = (0);
while(true){
if((i__29490__auto___31968 < len__29489__auto___31967)){
args__29496__auto__.push((arguments[i__29490__auto___31968]));

var G__31969 = (i__29490__auto___31968 + (1));
i__29490__auto___31968 = G__31969;
continue;
} else {
}
break;
}

var argseq__29497__auto__ = ((((3) < args__29496__auto__.length))?(new cljs.core.IndexedSeq(args__29496__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29497__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31961){
var map__31962 = p__31961;
var map__31962__$1 = ((((!((map__31962 == null)))?((((map__31962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31962):map__31962);
var opts = map__31962__$1;
var statearr_31964_31970 = state;
(statearr_31964_31970[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31962,map__31962__$1,opts){
return (function (val){
var statearr_31965_31971 = state;
(statearr_31965_31971[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31962,map__31962__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31966_31972 = state;
(statearr_31966_31972[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31957){
var G__31958 = cljs.core.first.call(null,seq31957);
var seq31957__$1 = cljs.core.next.call(null,seq31957);
var G__31959 = cljs.core.first.call(null,seq31957__$1);
var seq31957__$2 = cljs.core.next.call(null,seq31957__$1);
var G__31960 = cljs.core.first.call(null,seq31957__$2);
var seq31957__$3 = cljs.core.next.call(null,seq31957__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31958,G__31959,G__31960,seq31957__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32136 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32136 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32137){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32137 = meta32137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32138,meta32137__$1){
var self__ = this;
var _32138__$1 = this;
return (new cljs.core.async.t_cljs$core$async32136(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32137__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32136.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32138){
var self__ = this;
var _32138__$1 = this;
return self__.meta32137;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32136.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32136.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32136.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async32136.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32136.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32136.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32136.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32136.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32136.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32137","meta32137",-1751224789,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32136.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32136.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32136";

cljs.core.async.t_cljs$core$async32136.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__29026__auto__,writer__29027__auto__,opt__29028__auto__){
return cljs.core._write.call(null,writer__29027__auto__,"cljs.core.async/t_cljs$core$async32136");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32136 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32136(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32137){
return (new cljs.core.async.t_cljs$core$async32136(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32137));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32136(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30586__auto___32299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto___32299,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto___32299,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32236){
var state_val_32237 = (state_32236[(1)]);
if((state_val_32237 === (7))){
var inst_32154 = (state_32236[(2)]);
var state_32236__$1 = state_32236;
var statearr_32238_32300 = state_32236__$1;
(statearr_32238_32300[(2)] = inst_32154);

(statearr_32238_32300[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (20))){
var inst_32166 = (state_32236[(7)]);
var state_32236__$1 = state_32236;
var statearr_32239_32301 = state_32236__$1;
(statearr_32239_32301[(2)] = inst_32166);

(statearr_32239_32301[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (27))){
var state_32236__$1 = state_32236;
var statearr_32240_32302 = state_32236__$1;
(statearr_32240_32302[(2)] = null);

(statearr_32240_32302[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (1))){
var inst_32142 = (state_32236[(8)]);
var inst_32142__$1 = calc_state.call(null);
var inst_32144 = (inst_32142__$1 == null);
var inst_32145 = cljs.core.not.call(null,inst_32144);
var state_32236__$1 = (function (){var statearr_32241 = state_32236;
(statearr_32241[(8)] = inst_32142__$1);

return statearr_32241;
})();
if(inst_32145){
var statearr_32242_32303 = state_32236__$1;
(statearr_32242_32303[(1)] = (2));

} else {
var statearr_32243_32304 = state_32236__$1;
(statearr_32243_32304[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (24))){
var inst_32210 = (state_32236[(9)]);
var inst_32196 = (state_32236[(10)]);
var inst_32189 = (state_32236[(11)]);
var inst_32210__$1 = inst_32189.call(null,inst_32196);
var state_32236__$1 = (function (){var statearr_32244 = state_32236;
(statearr_32244[(9)] = inst_32210__$1);

return statearr_32244;
})();
if(cljs.core.truth_(inst_32210__$1)){
var statearr_32245_32305 = state_32236__$1;
(statearr_32245_32305[(1)] = (29));

} else {
var statearr_32246_32306 = state_32236__$1;
(statearr_32246_32306[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (4))){
var inst_32157 = (state_32236[(2)]);
var state_32236__$1 = state_32236;
if(cljs.core.truth_(inst_32157)){
var statearr_32247_32307 = state_32236__$1;
(statearr_32247_32307[(1)] = (8));

} else {
var statearr_32248_32308 = state_32236__$1;
(statearr_32248_32308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (15))){
var inst_32183 = (state_32236[(2)]);
var state_32236__$1 = state_32236;
if(cljs.core.truth_(inst_32183)){
var statearr_32249_32309 = state_32236__$1;
(statearr_32249_32309[(1)] = (19));

} else {
var statearr_32250_32310 = state_32236__$1;
(statearr_32250_32310[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (21))){
var inst_32188 = (state_32236[(12)]);
var inst_32188__$1 = (state_32236[(2)]);
var inst_32189 = cljs.core.get.call(null,inst_32188__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32190 = cljs.core.get.call(null,inst_32188__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32191 = cljs.core.get.call(null,inst_32188__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32236__$1 = (function (){var statearr_32251 = state_32236;
(statearr_32251[(12)] = inst_32188__$1);

(statearr_32251[(11)] = inst_32189);

(statearr_32251[(13)] = inst_32190);

return statearr_32251;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32236__$1,(22),inst_32191);
} else {
if((state_val_32237 === (31))){
var inst_32218 = (state_32236[(2)]);
var state_32236__$1 = state_32236;
if(cljs.core.truth_(inst_32218)){
var statearr_32252_32311 = state_32236__$1;
(statearr_32252_32311[(1)] = (32));

} else {
var statearr_32253_32312 = state_32236__$1;
(statearr_32253_32312[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (32))){
var inst_32195 = (state_32236[(14)]);
var state_32236__$1 = state_32236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32236__$1,(35),out,inst_32195);
} else {
if((state_val_32237 === (33))){
var inst_32188 = (state_32236[(12)]);
var inst_32166 = inst_32188;
var state_32236__$1 = (function (){var statearr_32254 = state_32236;
(statearr_32254[(7)] = inst_32166);

return statearr_32254;
})();
var statearr_32255_32313 = state_32236__$1;
(statearr_32255_32313[(2)] = null);

(statearr_32255_32313[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (13))){
var inst_32166 = (state_32236[(7)]);
var inst_32173 = inst_32166.cljs$lang$protocol_mask$partition0$;
var inst_32174 = (inst_32173 & (64));
var inst_32175 = inst_32166.cljs$core$ISeq$;
var inst_32176 = (inst_32174) || (inst_32175);
var state_32236__$1 = state_32236;
if(cljs.core.truth_(inst_32176)){
var statearr_32256_32314 = state_32236__$1;
(statearr_32256_32314[(1)] = (16));

} else {
var statearr_32257_32315 = state_32236__$1;
(statearr_32257_32315[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (22))){
var inst_32195 = (state_32236[(14)]);
var inst_32196 = (state_32236[(10)]);
var inst_32194 = (state_32236[(2)]);
var inst_32195__$1 = cljs.core.nth.call(null,inst_32194,(0),null);
var inst_32196__$1 = cljs.core.nth.call(null,inst_32194,(1),null);
var inst_32197 = (inst_32195__$1 == null);
var inst_32198 = cljs.core._EQ_.call(null,inst_32196__$1,change);
var inst_32199 = (inst_32197) || (inst_32198);
var state_32236__$1 = (function (){var statearr_32258 = state_32236;
(statearr_32258[(14)] = inst_32195__$1);

(statearr_32258[(10)] = inst_32196__$1);

return statearr_32258;
})();
if(cljs.core.truth_(inst_32199)){
var statearr_32259_32316 = state_32236__$1;
(statearr_32259_32316[(1)] = (23));

} else {
var statearr_32260_32317 = state_32236__$1;
(statearr_32260_32317[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (36))){
var inst_32188 = (state_32236[(12)]);
var inst_32166 = inst_32188;
var state_32236__$1 = (function (){var statearr_32261 = state_32236;
(statearr_32261[(7)] = inst_32166);

return statearr_32261;
})();
var statearr_32262_32318 = state_32236__$1;
(statearr_32262_32318[(2)] = null);

(statearr_32262_32318[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (29))){
var inst_32210 = (state_32236[(9)]);
var state_32236__$1 = state_32236;
var statearr_32263_32319 = state_32236__$1;
(statearr_32263_32319[(2)] = inst_32210);

(statearr_32263_32319[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (6))){
var state_32236__$1 = state_32236;
var statearr_32264_32320 = state_32236__$1;
(statearr_32264_32320[(2)] = false);

(statearr_32264_32320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (28))){
var inst_32206 = (state_32236[(2)]);
var inst_32207 = calc_state.call(null);
var inst_32166 = inst_32207;
var state_32236__$1 = (function (){var statearr_32265 = state_32236;
(statearr_32265[(15)] = inst_32206);

(statearr_32265[(7)] = inst_32166);

return statearr_32265;
})();
var statearr_32266_32321 = state_32236__$1;
(statearr_32266_32321[(2)] = null);

(statearr_32266_32321[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (25))){
var inst_32232 = (state_32236[(2)]);
var state_32236__$1 = state_32236;
var statearr_32267_32322 = state_32236__$1;
(statearr_32267_32322[(2)] = inst_32232);

(statearr_32267_32322[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (34))){
var inst_32230 = (state_32236[(2)]);
var state_32236__$1 = state_32236;
var statearr_32268_32323 = state_32236__$1;
(statearr_32268_32323[(2)] = inst_32230);

(statearr_32268_32323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (17))){
var state_32236__$1 = state_32236;
var statearr_32269_32324 = state_32236__$1;
(statearr_32269_32324[(2)] = false);

(statearr_32269_32324[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (3))){
var state_32236__$1 = state_32236;
var statearr_32270_32325 = state_32236__$1;
(statearr_32270_32325[(2)] = false);

(statearr_32270_32325[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (12))){
var inst_32234 = (state_32236[(2)]);
var state_32236__$1 = state_32236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32236__$1,inst_32234);
} else {
if((state_val_32237 === (2))){
var inst_32142 = (state_32236[(8)]);
var inst_32147 = inst_32142.cljs$lang$protocol_mask$partition0$;
var inst_32148 = (inst_32147 & (64));
var inst_32149 = inst_32142.cljs$core$ISeq$;
var inst_32150 = (inst_32148) || (inst_32149);
var state_32236__$1 = state_32236;
if(cljs.core.truth_(inst_32150)){
var statearr_32271_32326 = state_32236__$1;
(statearr_32271_32326[(1)] = (5));

} else {
var statearr_32272_32327 = state_32236__$1;
(statearr_32272_32327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (23))){
var inst_32195 = (state_32236[(14)]);
var inst_32201 = (inst_32195 == null);
var state_32236__$1 = state_32236;
if(cljs.core.truth_(inst_32201)){
var statearr_32273_32328 = state_32236__$1;
(statearr_32273_32328[(1)] = (26));

} else {
var statearr_32274_32329 = state_32236__$1;
(statearr_32274_32329[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (35))){
var inst_32221 = (state_32236[(2)]);
var state_32236__$1 = state_32236;
if(cljs.core.truth_(inst_32221)){
var statearr_32275_32330 = state_32236__$1;
(statearr_32275_32330[(1)] = (36));

} else {
var statearr_32276_32331 = state_32236__$1;
(statearr_32276_32331[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (19))){
var inst_32166 = (state_32236[(7)]);
var inst_32185 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32166);
var state_32236__$1 = state_32236;
var statearr_32277_32332 = state_32236__$1;
(statearr_32277_32332[(2)] = inst_32185);

(statearr_32277_32332[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (11))){
var inst_32166 = (state_32236[(7)]);
var inst_32170 = (inst_32166 == null);
var inst_32171 = cljs.core.not.call(null,inst_32170);
var state_32236__$1 = state_32236;
if(inst_32171){
var statearr_32278_32333 = state_32236__$1;
(statearr_32278_32333[(1)] = (13));

} else {
var statearr_32279_32334 = state_32236__$1;
(statearr_32279_32334[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (9))){
var inst_32142 = (state_32236[(8)]);
var state_32236__$1 = state_32236;
var statearr_32280_32335 = state_32236__$1;
(statearr_32280_32335[(2)] = inst_32142);

(statearr_32280_32335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (5))){
var state_32236__$1 = state_32236;
var statearr_32281_32336 = state_32236__$1;
(statearr_32281_32336[(2)] = true);

(statearr_32281_32336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (14))){
var state_32236__$1 = state_32236;
var statearr_32282_32337 = state_32236__$1;
(statearr_32282_32337[(2)] = false);

(statearr_32282_32337[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (26))){
var inst_32196 = (state_32236[(10)]);
var inst_32203 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32196);
var state_32236__$1 = state_32236;
var statearr_32283_32338 = state_32236__$1;
(statearr_32283_32338[(2)] = inst_32203);

(statearr_32283_32338[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (16))){
var state_32236__$1 = state_32236;
var statearr_32284_32339 = state_32236__$1;
(statearr_32284_32339[(2)] = true);

(statearr_32284_32339[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (38))){
var inst_32226 = (state_32236[(2)]);
var state_32236__$1 = state_32236;
var statearr_32285_32340 = state_32236__$1;
(statearr_32285_32340[(2)] = inst_32226);

(statearr_32285_32340[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (30))){
var inst_32196 = (state_32236[(10)]);
var inst_32189 = (state_32236[(11)]);
var inst_32190 = (state_32236[(13)]);
var inst_32213 = cljs.core.empty_QMARK_.call(null,inst_32189);
var inst_32214 = inst_32190.call(null,inst_32196);
var inst_32215 = cljs.core.not.call(null,inst_32214);
var inst_32216 = (inst_32213) && (inst_32215);
var state_32236__$1 = state_32236;
var statearr_32286_32341 = state_32236__$1;
(statearr_32286_32341[(2)] = inst_32216);

(statearr_32286_32341[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (10))){
var inst_32142 = (state_32236[(8)]);
var inst_32162 = (state_32236[(2)]);
var inst_32163 = cljs.core.get.call(null,inst_32162,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32164 = cljs.core.get.call(null,inst_32162,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32165 = cljs.core.get.call(null,inst_32162,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32166 = inst_32142;
var state_32236__$1 = (function (){var statearr_32287 = state_32236;
(statearr_32287[(16)] = inst_32164);

(statearr_32287[(17)] = inst_32163);

(statearr_32287[(7)] = inst_32166);

(statearr_32287[(18)] = inst_32165);

return statearr_32287;
})();
var statearr_32288_32342 = state_32236__$1;
(statearr_32288_32342[(2)] = null);

(statearr_32288_32342[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (18))){
var inst_32180 = (state_32236[(2)]);
var state_32236__$1 = state_32236;
var statearr_32289_32343 = state_32236__$1;
(statearr_32289_32343[(2)] = inst_32180);

(statearr_32289_32343[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (37))){
var state_32236__$1 = state_32236;
var statearr_32290_32344 = state_32236__$1;
(statearr_32290_32344[(2)] = null);

(statearr_32290_32344[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (8))){
var inst_32142 = (state_32236[(8)]);
var inst_32159 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32142);
var state_32236__$1 = state_32236;
var statearr_32291_32345 = state_32236__$1;
(statearr_32291_32345[(2)] = inst_32159);

(statearr_32291_32345[(1)] = (10));


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
});})(c__30586__auto___32299,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30474__auto__,c__30586__auto___32299,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30475__auto__ = null;
var cljs$core$async$mix_$_state_machine__30475__auto____0 = (function (){
var statearr_32295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32295[(0)] = cljs$core$async$mix_$_state_machine__30475__auto__);

(statearr_32295[(1)] = (1));

return statearr_32295;
});
var cljs$core$async$mix_$_state_machine__30475__auto____1 = (function (state_32236){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_32236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e32296){if((e32296 instanceof Object)){
var ex__30478__auto__ = e32296;
var statearr_32297_32346 = state_32236;
(statearr_32297_32346[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32347 = state_32236;
state_32236 = G__32347;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30475__auto__ = function(state_32236){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30475__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30475__auto____1.call(this,state_32236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30475__auto____0;
cljs$core$async$mix_$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30475__auto____1;
return cljs$core$async$mix_$_state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto___32299,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30588__auto__ = (function (){var statearr_32298 = f__30587__auto__.call(null);
(statearr_32298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto___32299);

return statearr_32298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto___32299,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__29083__auto__ = (((p == null))?null:p);
var m__29084__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__29083__auto__)]);
if(!((m__29084__auto__ == null))){
return m__29084__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__29084__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__29084__auto____$1 == null))){
return m__29084__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__29083__auto__ = (((p == null))?null:p);
var m__29084__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__29083__auto__)]);
if(!((m__29084__auto__ == null))){
return m__29084__auto__.call(null,p,v,ch);
} else {
var m__29084__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__29084__auto____$1 == null))){
return m__29084__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args32348 = [];
var len__29489__auto___32351 = arguments.length;
var i__29490__auto___32352 = (0);
while(true){
if((i__29490__auto___32352 < len__29489__auto___32351)){
args32348.push((arguments[i__29490__auto___32352]));

var G__32353 = (i__29490__auto___32352 + (1));
i__29490__auto___32352 = G__32353;
continue;
} else {
}
break;
}

var G__32350 = args32348.length;
switch (G__32350) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32348.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__29083__auto__ = (((p == null))?null:p);
var m__29084__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29083__auto__)]);
if(!((m__29084__auto__ == null))){
return m__29084__auto__.call(null,p);
} else {
var m__29084__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29084__auto____$1 == null))){
return m__29084__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__29083__auto__ = (((p == null))?null:p);
var m__29084__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29083__auto__)]);
if(!((m__29084__auto__ == null))){
return m__29084__auto__.call(null,p,v);
} else {
var m__29084__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29084__auto____$1 == null))){
return m__29084__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args32356 = [];
var len__29489__auto___32481 = arguments.length;
var i__29490__auto___32482 = (0);
while(true){
if((i__29490__auto___32482 < len__29489__auto___32481)){
args32356.push((arguments[i__29490__auto___32482]));

var G__32483 = (i__29490__auto___32482 + (1));
i__29490__auto___32482 = G__32483;
continue;
} else {
}
break;
}

var G__32358 = args32356.length;
switch (G__32358) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32356.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28420__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28420__auto__)){
return or__28420__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28420__auto__,mults){
return (function (p1__32355_SHARP_){
if(cljs.core.truth_(p1__32355_SHARP_.call(null,topic))){
return p1__32355_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32355_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28420__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32359 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32359 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32360){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32360 = meta32360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32361,meta32360__$1){
var self__ = this;
var _32361__$1 = this;
return (new cljs.core.async.t_cljs$core$async32359(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32360__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32359.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32361){
var self__ = this;
var _32361__$1 = this;
return self__.meta32360;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32359.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32359.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32359.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async32359.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32359.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32359.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32359.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32359.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32360","meta32360",1287999730,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32359.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32359";

cljs.core.async.t_cljs$core$async32359.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__29026__auto__,writer__29027__auto__,opt__29028__auto__){
return cljs.core._write.call(null,writer__29027__auto__,"cljs.core.async/t_cljs$core$async32359");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32359 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32359(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32360){
return (new cljs.core.async.t_cljs$core$async32359(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32360));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32359(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30586__auto___32485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto___32485,mults,ensure_mult,p){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto___32485,mults,ensure_mult,p){
return (function (state_32433){
var state_val_32434 = (state_32433[(1)]);
if((state_val_32434 === (7))){
var inst_32429 = (state_32433[(2)]);
var state_32433__$1 = state_32433;
var statearr_32435_32486 = state_32433__$1;
(statearr_32435_32486[(2)] = inst_32429);

(statearr_32435_32486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (20))){
var state_32433__$1 = state_32433;
var statearr_32436_32487 = state_32433__$1;
(statearr_32436_32487[(2)] = null);

(statearr_32436_32487[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (1))){
var state_32433__$1 = state_32433;
var statearr_32437_32488 = state_32433__$1;
(statearr_32437_32488[(2)] = null);

(statearr_32437_32488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (24))){
var inst_32412 = (state_32433[(7)]);
var inst_32421 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32412);
var state_32433__$1 = state_32433;
var statearr_32438_32489 = state_32433__$1;
(statearr_32438_32489[(2)] = inst_32421);

(statearr_32438_32489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (4))){
var inst_32364 = (state_32433[(8)]);
var inst_32364__$1 = (state_32433[(2)]);
var inst_32365 = (inst_32364__$1 == null);
var state_32433__$1 = (function (){var statearr_32439 = state_32433;
(statearr_32439[(8)] = inst_32364__$1);

return statearr_32439;
})();
if(cljs.core.truth_(inst_32365)){
var statearr_32440_32490 = state_32433__$1;
(statearr_32440_32490[(1)] = (5));

} else {
var statearr_32441_32491 = state_32433__$1;
(statearr_32441_32491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (15))){
var inst_32406 = (state_32433[(2)]);
var state_32433__$1 = state_32433;
var statearr_32442_32492 = state_32433__$1;
(statearr_32442_32492[(2)] = inst_32406);

(statearr_32442_32492[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (21))){
var inst_32426 = (state_32433[(2)]);
var state_32433__$1 = (function (){var statearr_32443 = state_32433;
(statearr_32443[(9)] = inst_32426);

return statearr_32443;
})();
var statearr_32444_32493 = state_32433__$1;
(statearr_32444_32493[(2)] = null);

(statearr_32444_32493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (13))){
var inst_32388 = (state_32433[(10)]);
var inst_32390 = cljs.core.chunked_seq_QMARK_.call(null,inst_32388);
var state_32433__$1 = state_32433;
if(inst_32390){
var statearr_32445_32494 = state_32433__$1;
(statearr_32445_32494[(1)] = (16));

} else {
var statearr_32446_32495 = state_32433__$1;
(statearr_32446_32495[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (22))){
var inst_32418 = (state_32433[(2)]);
var state_32433__$1 = state_32433;
if(cljs.core.truth_(inst_32418)){
var statearr_32447_32496 = state_32433__$1;
(statearr_32447_32496[(1)] = (23));

} else {
var statearr_32448_32497 = state_32433__$1;
(statearr_32448_32497[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (6))){
var inst_32414 = (state_32433[(11)]);
var inst_32412 = (state_32433[(7)]);
var inst_32364 = (state_32433[(8)]);
var inst_32412__$1 = topic_fn.call(null,inst_32364);
var inst_32413 = cljs.core.deref.call(null,mults);
var inst_32414__$1 = cljs.core.get.call(null,inst_32413,inst_32412__$1);
var state_32433__$1 = (function (){var statearr_32449 = state_32433;
(statearr_32449[(11)] = inst_32414__$1);

(statearr_32449[(7)] = inst_32412__$1);

return statearr_32449;
})();
if(cljs.core.truth_(inst_32414__$1)){
var statearr_32450_32498 = state_32433__$1;
(statearr_32450_32498[(1)] = (19));

} else {
var statearr_32451_32499 = state_32433__$1;
(statearr_32451_32499[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (25))){
var inst_32423 = (state_32433[(2)]);
var state_32433__$1 = state_32433;
var statearr_32452_32500 = state_32433__$1;
(statearr_32452_32500[(2)] = inst_32423);

(statearr_32452_32500[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (17))){
var inst_32388 = (state_32433[(10)]);
var inst_32397 = cljs.core.first.call(null,inst_32388);
var inst_32398 = cljs.core.async.muxch_STAR_.call(null,inst_32397);
var inst_32399 = cljs.core.async.close_BANG_.call(null,inst_32398);
var inst_32400 = cljs.core.next.call(null,inst_32388);
var inst_32374 = inst_32400;
var inst_32375 = null;
var inst_32376 = (0);
var inst_32377 = (0);
var state_32433__$1 = (function (){var statearr_32453 = state_32433;
(statearr_32453[(12)] = inst_32374);

(statearr_32453[(13)] = inst_32399);

(statearr_32453[(14)] = inst_32377);

(statearr_32453[(15)] = inst_32376);

(statearr_32453[(16)] = inst_32375);

return statearr_32453;
})();
var statearr_32454_32501 = state_32433__$1;
(statearr_32454_32501[(2)] = null);

(statearr_32454_32501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (3))){
var inst_32431 = (state_32433[(2)]);
var state_32433__$1 = state_32433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32433__$1,inst_32431);
} else {
if((state_val_32434 === (12))){
var inst_32408 = (state_32433[(2)]);
var state_32433__$1 = state_32433;
var statearr_32455_32502 = state_32433__$1;
(statearr_32455_32502[(2)] = inst_32408);

(statearr_32455_32502[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (2))){
var state_32433__$1 = state_32433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32433__$1,(4),ch);
} else {
if((state_val_32434 === (23))){
var state_32433__$1 = state_32433;
var statearr_32456_32503 = state_32433__$1;
(statearr_32456_32503[(2)] = null);

(statearr_32456_32503[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (19))){
var inst_32414 = (state_32433[(11)]);
var inst_32364 = (state_32433[(8)]);
var inst_32416 = cljs.core.async.muxch_STAR_.call(null,inst_32414);
var state_32433__$1 = state_32433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32433__$1,(22),inst_32416,inst_32364);
} else {
if((state_val_32434 === (11))){
var inst_32374 = (state_32433[(12)]);
var inst_32388 = (state_32433[(10)]);
var inst_32388__$1 = cljs.core.seq.call(null,inst_32374);
var state_32433__$1 = (function (){var statearr_32457 = state_32433;
(statearr_32457[(10)] = inst_32388__$1);

return statearr_32457;
})();
if(inst_32388__$1){
var statearr_32458_32504 = state_32433__$1;
(statearr_32458_32504[(1)] = (13));

} else {
var statearr_32459_32505 = state_32433__$1;
(statearr_32459_32505[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (9))){
var inst_32410 = (state_32433[(2)]);
var state_32433__$1 = state_32433;
var statearr_32460_32506 = state_32433__$1;
(statearr_32460_32506[(2)] = inst_32410);

(statearr_32460_32506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (5))){
var inst_32371 = cljs.core.deref.call(null,mults);
var inst_32372 = cljs.core.vals.call(null,inst_32371);
var inst_32373 = cljs.core.seq.call(null,inst_32372);
var inst_32374 = inst_32373;
var inst_32375 = null;
var inst_32376 = (0);
var inst_32377 = (0);
var state_32433__$1 = (function (){var statearr_32461 = state_32433;
(statearr_32461[(12)] = inst_32374);

(statearr_32461[(14)] = inst_32377);

(statearr_32461[(15)] = inst_32376);

(statearr_32461[(16)] = inst_32375);

return statearr_32461;
})();
var statearr_32462_32507 = state_32433__$1;
(statearr_32462_32507[(2)] = null);

(statearr_32462_32507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (14))){
var state_32433__$1 = state_32433;
var statearr_32466_32508 = state_32433__$1;
(statearr_32466_32508[(2)] = null);

(statearr_32466_32508[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (16))){
var inst_32388 = (state_32433[(10)]);
var inst_32392 = cljs.core.chunk_first.call(null,inst_32388);
var inst_32393 = cljs.core.chunk_rest.call(null,inst_32388);
var inst_32394 = cljs.core.count.call(null,inst_32392);
var inst_32374 = inst_32393;
var inst_32375 = inst_32392;
var inst_32376 = inst_32394;
var inst_32377 = (0);
var state_32433__$1 = (function (){var statearr_32467 = state_32433;
(statearr_32467[(12)] = inst_32374);

(statearr_32467[(14)] = inst_32377);

(statearr_32467[(15)] = inst_32376);

(statearr_32467[(16)] = inst_32375);

return statearr_32467;
})();
var statearr_32468_32509 = state_32433__$1;
(statearr_32468_32509[(2)] = null);

(statearr_32468_32509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (10))){
var inst_32374 = (state_32433[(12)]);
var inst_32377 = (state_32433[(14)]);
var inst_32376 = (state_32433[(15)]);
var inst_32375 = (state_32433[(16)]);
var inst_32382 = cljs.core._nth.call(null,inst_32375,inst_32377);
var inst_32383 = cljs.core.async.muxch_STAR_.call(null,inst_32382);
var inst_32384 = cljs.core.async.close_BANG_.call(null,inst_32383);
var inst_32385 = (inst_32377 + (1));
var tmp32463 = inst_32374;
var tmp32464 = inst_32376;
var tmp32465 = inst_32375;
var inst_32374__$1 = tmp32463;
var inst_32375__$1 = tmp32465;
var inst_32376__$1 = tmp32464;
var inst_32377__$1 = inst_32385;
var state_32433__$1 = (function (){var statearr_32469 = state_32433;
(statearr_32469[(12)] = inst_32374__$1);

(statearr_32469[(14)] = inst_32377__$1);

(statearr_32469[(15)] = inst_32376__$1);

(statearr_32469[(16)] = inst_32375__$1);

(statearr_32469[(17)] = inst_32384);

return statearr_32469;
})();
var statearr_32470_32510 = state_32433__$1;
(statearr_32470_32510[(2)] = null);

(statearr_32470_32510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (18))){
var inst_32403 = (state_32433[(2)]);
var state_32433__$1 = state_32433;
var statearr_32471_32511 = state_32433__$1;
(statearr_32471_32511[(2)] = inst_32403);

(statearr_32471_32511[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (8))){
var inst_32377 = (state_32433[(14)]);
var inst_32376 = (state_32433[(15)]);
var inst_32379 = (inst_32377 < inst_32376);
var inst_32380 = inst_32379;
var state_32433__$1 = state_32433;
if(cljs.core.truth_(inst_32380)){
var statearr_32472_32512 = state_32433__$1;
(statearr_32472_32512[(1)] = (10));

} else {
var statearr_32473_32513 = state_32433__$1;
(statearr_32473_32513[(1)] = (11));

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
});})(c__30586__auto___32485,mults,ensure_mult,p))
;
return ((function (switch__30474__auto__,c__30586__auto___32485,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30475__auto__ = null;
var cljs$core$async$state_machine__30475__auto____0 = (function (){
var statearr_32477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32477[(0)] = cljs$core$async$state_machine__30475__auto__);

(statearr_32477[(1)] = (1));

return statearr_32477;
});
var cljs$core$async$state_machine__30475__auto____1 = (function (state_32433){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_32433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e32478){if((e32478 instanceof Object)){
var ex__30478__auto__ = e32478;
var statearr_32479_32514 = state_32433;
(statearr_32479_32514[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32515 = state_32433;
state_32433 = G__32515;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
cljs$core$async$state_machine__30475__auto__ = function(state_32433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30475__auto____1.call(this,state_32433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30475__auto____0;
cljs$core$async$state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30475__auto____1;
return cljs$core$async$state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto___32485,mults,ensure_mult,p))
})();
var state__30588__auto__ = (function (){var statearr_32480 = f__30587__auto__.call(null);
(statearr_32480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto___32485);

return statearr_32480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto___32485,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args32516 = [];
var len__29489__auto___32519 = arguments.length;
var i__29490__auto___32520 = (0);
while(true){
if((i__29490__auto___32520 < len__29489__auto___32519)){
args32516.push((arguments[i__29490__auto___32520]));

var G__32521 = (i__29490__auto___32520 + (1));
i__29490__auto___32520 = G__32521;
continue;
} else {
}
break;
}

var G__32518 = args32516.length;
switch (G__32518) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32516.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args32523 = [];
var len__29489__auto___32526 = arguments.length;
var i__29490__auto___32527 = (0);
while(true){
if((i__29490__auto___32527 < len__29489__auto___32526)){
args32523.push((arguments[i__29490__auto___32527]));

var G__32528 = (i__29490__auto___32527 + (1));
i__29490__auto___32527 = G__32528;
continue;
} else {
}
break;
}

var G__32525 = args32523.length;
switch (G__32525) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32523.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args32530 = [];
var len__29489__auto___32601 = arguments.length;
var i__29490__auto___32602 = (0);
while(true){
if((i__29490__auto___32602 < len__29489__auto___32601)){
args32530.push((arguments[i__29490__auto___32602]));

var G__32603 = (i__29490__auto___32602 + (1));
i__29490__auto___32602 = G__32603;
continue;
} else {
}
break;
}

var G__32532 = args32530.length;
switch (G__32532) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32530.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__30586__auto___32605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto___32605,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto___32605,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32571){
var state_val_32572 = (state_32571[(1)]);
if((state_val_32572 === (7))){
var state_32571__$1 = state_32571;
var statearr_32573_32606 = state_32571__$1;
(statearr_32573_32606[(2)] = null);

(statearr_32573_32606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32572 === (1))){
var state_32571__$1 = state_32571;
var statearr_32574_32607 = state_32571__$1;
(statearr_32574_32607[(2)] = null);

(statearr_32574_32607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32572 === (4))){
var inst_32535 = (state_32571[(7)]);
var inst_32537 = (inst_32535 < cnt);
var state_32571__$1 = state_32571;
if(cljs.core.truth_(inst_32537)){
var statearr_32575_32608 = state_32571__$1;
(statearr_32575_32608[(1)] = (6));

} else {
var statearr_32576_32609 = state_32571__$1;
(statearr_32576_32609[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32572 === (15))){
var inst_32567 = (state_32571[(2)]);
var state_32571__$1 = state_32571;
var statearr_32577_32610 = state_32571__$1;
(statearr_32577_32610[(2)] = inst_32567);

(statearr_32577_32610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32572 === (13))){
var inst_32560 = cljs.core.async.close_BANG_.call(null,out);
var state_32571__$1 = state_32571;
var statearr_32578_32611 = state_32571__$1;
(statearr_32578_32611[(2)] = inst_32560);

(statearr_32578_32611[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32572 === (6))){
var state_32571__$1 = state_32571;
var statearr_32579_32612 = state_32571__$1;
(statearr_32579_32612[(2)] = null);

(statearr_32579_32612[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32572 === (3))){
var inst_32569 = (state_32571[(2)]);
var state_32571__$1 = state_32571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32571__$1,inst_32569);
} else {
if((state_val_32572 === (12))){
var inst_32557 = (state_32571[(8)]);
var inst_32557__$1 = (state_32571[(2)]);
var inst_32558 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32557__$1);
var state_32571__$1 = (function (){var statearr_32580 = state_32571;
(statearr_32580[(8)] = inst_32557__$1);

return statearr_32580;
})();
if(cljs.core.truth_(inst_32558)){
var statearr_32581_32613 = state_32571__$1;
(statearr_32581_32613[(1)] = (13));

} else {
var statearr_32582_32614 = state_32571__$1;
(statearr_32582_32614[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32572 === (2))){
var inst_32534 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32535 = (0);
var state_32571__$1 = (function (){var statearr_32583 = state_32571;
(statearr_32583[(9)] = inst_32534);

(statearr_32583[(7)] = inst_32535);

return statearr_32583;
})();
var statearr_32584_32615 = state_32571__$1;
(statearr_32584_32615[(2)] = null);

(statearr_32584_32615[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32572 === (11))){
var inst_32535 = (state_32571[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32571,(10),Object,null,(9));
var inst_32544 = chs__$1.call(null,inst_32535);
var inst_32545 = done.call(null,inst_32535);
var inst_32546 = cljs.core.async.take_BANG_.call(null,inst_32544,inst_32545);
var state_32571__$1 = state_32571;
var statearr_32585_32616 = state_32571__$1;
(statearr_32585_32616[(2)] = inst_32546);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32571__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32572 === (9))){
var inst_32535 = (state_32571[(7)]);
var inst_32548 = (state_32571[(2)]);
var inst_32549 = (inst_32535 + (1));
var inst_32535__$1 = inst_32549;
var state_32571__$1 = (function (){var statearr_32586 = state_32571;
(statearr_32586[(7)] = inst_32535__$1);

(statearr_32586[(10)] = inst_32548);

return statearr_32586;
})();
var statearr_32587_32617 = state_32571__$1;
(statearr_32587_32617[(2)] = null);

(statearr_32587_32617[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32572 === (5))){
var inst_32555 = (state_32571[(2)]);
var state_32571__$1 = (function (){var statearr_32588 = state_32571;
(statearr_32588[(11)] = inst_32555);

return statearr_32588;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32571__$1,(12),dchan);
} else {
if((state_val_32572 === (14))){
var inst_32557 = (state_32571[(8)]);
var inst_32562 = cljs.core.apply.call(null,f,inst_32557);
var state_32571__$1 = state_32571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32571__$1,(16),out,inst_32562);
} else {
if((state_val_32572 === (16))){
var inst_32564 = (state_32571[(2)]);
var state_32571__$1 = (function (){var statearr_32589 = state_32571;
(statearr_32589[(12)] = inst_32564);

return statearr_32589;
})();
var statearr_32590_32618 = state_32571__$1;
(statearr_32590_32618[(2)] = null);

(statearr_32590_32618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32572 === (10))){
var inst_32539 = (state_32571[(2)]);
var inst_32540 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32571__$1 = (function (){var statearr_32591 = state_32571;
(statearr_32591[(13)] = inst_32539);

return statearr_32591;
})();
var statearr_32592_32619 = state_32571__$1;
(statearr_32592_32619[(2)] = inst_32540);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32571__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32572 === (8))){
var inst_32553 = (state_32571[(2)]);
var state_32571__$1 = state_32571;
var statearr_32593_32620 = state_32571__$1;
(statearr_32593_32620[(2)] = inst_32553);

(statearr_32593_32620[(1)] = (5));


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
});})(c__30586__auto___32605,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30474__auto__,c__30586__auto___32605,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30475__auto__ = null;
var cljs$core$async$state_machine__30475__auto____0 = (function (){
var statearr_32597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32597[(0)] = cljs$core$async$state_machine__30475__auto__);

(statearr_32597[(1)] = (1));

return statearr_32597;
});
var cljs$core$async$state_machine__30475__auto____1 = (function (state_32571){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_32571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e32598){if((e32598 instanceof Object)){
var ex__30478__auto__ = e32598;
var statearr_32599_32621 = state_32571;
(statearr_32599_32621[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32622 = state_32571;
state_32571 = G__32622;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
cljs$core$async$state_machine__30475__auto__ = function(state_32571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30475__auto____1.call(this,state_32571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30475__auto____0;
cljs$core$async$state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30475__auto____1;
return cljs$core$async$state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto___32605,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30588__auto__ = (function (){var statearr_32600 = f__30587__auto__.call(null);
(statearr_32600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto___32605);

return statearr_32600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto___32605,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args32624 = [];
var len__29489__auto___32680 = arguments.length;
var i__29490__auto___32681 = (0);
while(true){
if((i__29490__auto___32681 < len__29489__auto___32680)){
args32624.push((arguments[i__29490__auto___32681]));

var G__32682 = (i__29490__auto___32681 + (1));
i__29490__auto___32681 = G__32682;
continue;
} else {
}
break;
}

var G__32626 = args32624.length;
switch (G__32626) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32624.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30586__auto___32684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto___32684,out){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto___32684,out){
return (function (state_32656){
var state_val_32657 = (state_32656[(1)]);
if((state_val_32657 === (7))){
var inst_32635 = (state_32656[(7)]);
var inst_32636 = (state_32656[(8)]);
var inst_32635__$1 = (state_32656[(2)]);
var inst_32636__$1 = cljs.core.nth.call(null,inst_32635__$1,(0),null);
var inst_32637 = cljs.core.nth.call(null,inst_32635__$1,(1),null);
var inst_32638 = (inst_32636__$1 == null);
var state_32656__$1 = (function (){var statearr_32658 = state_32656;
(statearr_32658[(7)] = inst_32635__$1);

(statearr_32658[(8)] = inst_32636__$1);

(statearr_32658[(9)] = inst_32637);

return statearr_32658;
})();
if(cljs.core.truth_(inst_32638)){
var statearr_32659_32685 = state_32656__$1;
(statearr_32659_32685[(1)] = (8));

} else {
var statearr_32660_32686 = state_32656__$1;
(statearr_32660_32686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32657 === (1))){
var inst_32627 = cljs.core.vec.call(null,chs);
var inst_32628 = inst_32627;
var state_32656__$1 = (function (){var statearr_32661 = state_32656;
(statearr_32661[(10)] = inst_32628);

return statearr_32661;
})();
var statearr_32662_32687 = state_32656__$1;
(statearr_32662_32687[(2)] = null);

(statearr_32662_32687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32657 === (4))){
var inst_32628 = (state_32656[(10)]);
var state_32656__$1 = state_32656;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32656__$1,(7),inst_32628);
} else {
if((state_val_32657 === (6))){
var inst_32652 = (state_32656[(2)]);
var state_32656__$1 = state_32656;
var statearr_32663_32688 = state_32656__$1;
(statearr_32663_32688[(2)] = inst_32652);

(statearr_32663_32688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32657 === (3))){
var inst_32654 = (state_32656[(2)]);
var state_32656__$1 = state_32656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32656__$1,inst_32654);
} else {
if((state_val_32657 === (2))){
var inst_32628 = (state_32656[(10)]);
var inst_32630 = cljs.core.count.call(null,inst_32628);
var inst_32631 = (inst_32630 > (0));
var state_32656__$1 = state_32656;
if(cljs.core.truth_(inst_32631)){
var statearr_32665_32689 = state_32656__$1;
(statearr_32665_32689[(1)] = (4));

} else {
var statearr_32666_32690 = state_32656__$1;
(statearr_32666_32690[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32657 === (11))){
var inst_32628 = (state_32656[(10)]);
var inst_32645 = (state_32656[(2)]);
var tmp32664 = inst_32628;
var inst_32628__$1 = tmp32664;
var state_32656__$1 = (function (){var statearr_32667 = state_32656;
(statearr_32667[(11)] = inst_32645);

(statearr_32667[(10)] = inst_32628__$1);

return statearr_32667;
})();
var statearr_32668_32691 = state_32656__$1;
(statearr_32668_32691[(2)] = null);

(statearr_32668_32691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32657 === (9))){
var inst_32636 = (state_32656[(8)]);
var state_32656__$1 = state_32656;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32656__$1,(11),out,inst_32636);
} else {
if((state_val_32657 === (5))){
var inst_32650 = cljs.core.async.close_BANG_.call(null,out);
var state_32656__$1 = state_32656;
var statearr_32669_32692 = state_32656__$1;
(statearr_32669_32692[(2)] = inst_32650);

(statearr_32669_32692[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32657 === (10))){
var inst_32648 = (state_32656[(2)]);
var state_32656__$1 = state_32656;
var statearr_32670_32693 = state_32656__$1;
(statearr_32670_32693[(2)] = inst_32648);

(statearr_32670_32693[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32657 === (8))){
var inst_32635 = (state_32656[(7)]);
var inst_32636 = (state_32656[(8)]);
var inst_32637 = (state_32656[(9)]);
var inst_32628 = (state_32656[(10)]);
var inst_32640 = (function (){var cs = inst_32628;
var vec__32633 = inst_32635;
var v = inst_32636;
var c = inst_32637;
return ((function (cs,vec__32633,v,c,inst_32635,inst_32636,inst_32637,inst_32628,state_val_32657,c__30586__auto___32684,out){
return (function (p1__32623_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32623_SHARP_);
});
;})(cs,vec__32633,v,c,inst_32635,inst_32636,inst_32637,inst_32628,state_val_32657,c__30586__auto___32684,out))
})();
var inst_32641 = cljs.core.filterv.call(null,inst_32640,inst_32628);
var inst_32628__$1 = inst_32641;
var state_32656__$1 = (function (){var statearr_32671 = state_32656;
(statearr_32671[(10)] = inst_32628__$1);

return statearr_32671;
})();
var statearr_32672_32694 = state_32656__$1;
(statearr_32672_32694[(2)] = null);

(statearr_32672_32694[(1)] = (2));


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
});})(c__30586__auto___32684,out))
;
return ((function (switch__30474__auto__,c__30586__auto___32684,out){
return (function() {
var cljs$core$async$state_machine__30475__auto__ = null;
var cljs$core$async$state_machine__30475__auto____0 = (function (){
var statearr_32676 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32676[(0)] = cljs$core$async$state_machine__30475__auto__);

(statearr_32676[(1)] = (1));

return statearr_32676;
});
var cljs$core$async$state_machine__30475__auto____1 = (function (state_32656){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_32656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e32677){if((e32677 instanceof Object)){
var ex__30478__auto__ = e32677;
var statearr_32678_32695 = state_32656;
(statearr_32678_32695[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32696 = state_32656;
state_32656 = G__32696;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
cljs$core$async$state_machine__30475__auto__ = function(state_32656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30475__auto____1.call(this,state_32656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30475__auto____0;
cljs$core$async$state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30475__auto____1;
return cljs$core$async$state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto___32684,out))
})();
var state__30588__auto__ = (function (){var statearr_32679 = f__30587__auto__.call(null);
(statearr_32679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto___32684);

return statearr_32679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto___32684,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args32697 = [];
var len__29489__auto___32746 = arguments.length;
var i__29490__auto___32747 = (0);
while(true){
if((i__29490__auto___32747 < len__29489__auto___32746)){
args32697.push((arguments[i__29490__auto___32747]));

var G__32748 = (i__29490__auto___32747 + (1));
i__29490__auto___32747 = G__32748;
continue;
} else {
}
break;
}

var G__32699 = args32697.length;
switch (G__32699) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32697.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30586__auto___32750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto___32750,out){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto___32750,out){
return (function (state_32723){
var state_val_32724 = (state_32723[(1)]);
if((state_val_32724 === (7))){
var inst_32705 = (state_32723[(7)]);
var inst_32705__$1 = (state_32723[(2)]);
var inst_32706 = (inst_32705__$1 == null);
var inst_32707 = cljs.core.not.call(null,inst_32706);
var state_32723__$1 = (function (){var statearr_32725 = state_32723;
(statearr_32725[(7)] = inst_32705__$1);

return statearr_32725;
})();
if(inst_32707){
var statearr_32726_32751 = state_32723__$1;
(statearr_32726_32751[(1)] = (8));

} else {
var statearr_32727_32752 = state_32723__$1;
(statearr_32727_32752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32724 === (1))){
var inst_32700 = (0);
var state_32723__$1 = (function (){var statearr_32728 = state_32723;
(statearr_32728[(8)] = inst_32700);

return statearr_32728;
})();
var statearr_32729_32753 = state_32723__$1;
(statearr_32729_32753[(2)] = null);

(statearr_32729_32753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32724 === (4))){
var state_32723__$1 = state_32723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32723__$1,(7),ch);
} else {
if((state_val_32724 === (6))){
var inst_32718 = (state_32723[(2)]);
var state_32723__$1 = state_32723;
var statearr_32730_32754 = state_32723__$1;
(statearr_32730_32754[(2)] = inst_32718);

(statearr_32730_32754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32724 === (3))){
var inst_32720 = (state_32723[(2)]);
var inst_32721 = cljs.core.async.close_BANG_.call(null,out);
var state_32723__$1 = (function (){var statearr_32731 = state_32723;
(statearr_32731[(9)] = inst_32720);

return statearr_32731;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32723__$1,inst_32721);
} else {
if((state_val_32724 === (2))){
var inst_32700 = (state_32723[(8)]);
var inst_32702 = (inst_32700 < n);
var state_32723__$1 = state_32723;
if(cljs.core.truth_(inst_32702)){
var statearr_32732_32755 = state_32723__$1;
(statearr_32732_32755[(1)] = (4));

} else {
var statearr_32733_32756 = state_32723__$1;
(statearr_32733_32756[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32724 === (11))){
var inst_32700 = (state_32723[(8)]);
var inst_32710 = (state_32723[(2)]);
var inst_32711 = (inst_32700 + (1));
var inst_32700__$1 = inst_32711;
var state_32723__$1 = (function (){var statearr_32734 = state_32723;
(statearr_32734[(8)] = inst_32700__$1);

(statearr_32734[(10)] = inst_32710);

return statearr_32734;
})();
var statearr_32735_32757 = state_32723__$1;
(statearr_32735_32757[(2)] = null);

(statearr_32735_32757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32724 === (9))){
var state_32723__$1 = state_32723;
var statearr_32736_32758 = state_32723__$1;
(statearr_32736_32758[(2)] = null);

(statearr_32736_32758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32724 === (5))){
var state_32723__$1 = state_32723;
var statearr_32737_32759 = state_32723__$1;
(statearr_32737_32759[(2)] = null);

(statearr_32737_32759[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32724 === (10))){
var inst_32715 = (state_32723[(2)]);
var state_32723__$1 = state_32723;
var statearr_32738_32760 = state_32723__$1;
(statearr_32738_32760[(2)] = inst_32715);

(statearr_32738_32760[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32724 === (8))){
var inst_32705 = (state_32723[(7)]);
var state_32723__$1 = state_32723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32723__$1,(11),out,inst_32705);
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
});})(c__30586__auto___32750,out))
;
return ((function (switch__30474__auto__,c__30586__auto___32750,out){
return (function() {
var cljs$core$async$state_machine__30475__auto__ = null;
var cljs$core$async$state_machine__30475__auto____0 = (function (){
var statearr_32742 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32742[(0)] = cljs$core$async$state_machine__30475__auto__);

(statearr_32742[(1)] = (1));

return statearr_32742;
});
var cljs$core$async$state_machine__30475__auto____1 = (function (state_32723){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_32723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e32743){if((e32743 instanceof Object)){
var ex__30478__auto__ = e32743;
var statearr_32744_32761 = state_32723;
(statearr_32744_32761[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32762 = state_32723;
state_32723 = G__32762;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
cljs$core$async$state_machine__30475__auto__ = function(state_32723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30475__auto____1.call(this,state_32723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30475__auto____0;
cljs$core$async$state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30475__auto____1;
return cljs$core$async$state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto___32750,out))
})();
var state__30588__auto__ = (function (){var statearr_32745 = f__30587__auto__.call(null);
(statearr_32745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto___32750);

return statearr_32745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto___32750,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32770 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32770 = (function (map_LT_,f,ch,meta32771){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32771 = meta32771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32772,meta32771__$1){
var self__ = this;
var _32772__$1 = this;
return (new cljs.core.async.t_cljs$core$async32770(self__.map_LT_,self__.f,self__.ch,meta32771__$1));
});

cljs.core.async.t_cljs$core$async32770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32772){
var self__ = this;
var _32772__$1 = this;
return self__.meta32771;
});

cljs.core.async.t_cljs$core$async32770.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32770.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32770.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32770.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32770.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32773 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32773 = (function (map_LT_,f,ch,meta32771,_,fn1,meta32774){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32771 = meta32771;
this._ = _;
this.fn1 = fn1;
this.meta32774 = meta32774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32775,meta32774__$1){
var self__ = this;
var _32775__$1 = this;
return (new cljs.core.async.t_cljs$core$async32773(self__.map_LT_,self__.f,self__.ch,self__.meta32771,self__._,self__.fn1,meta32774__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32773.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32775){
var self__ = this;
var _32775__$1 = this;
return self__.meta32774;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32773.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32773.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32773.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32773.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32763_SHARP_){
return f1.call(null,(((p1__32763_SHARP_ == null))?null:self__.f.call(null,p1__32763_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32773.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32771","meta32771",439366435,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32770","cljs.core.async/t_cljs$core$async32770",-1048191225,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32774","meta32774",2036694937,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32773.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32773.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32773";

cljs.core.async.t_cljs$core$async32773.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__29026__auto__,writer__29027__auto__,opt__29028__auto__){
return cljs.core._write.call(null,writer__29027__auto__,"cljs.core.async/t_cljs$core$async32773");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32773 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32773(map_LT___$1,f__$1,ch__$1,meta32771__$1,___$2,fn1__$1,meta32774){
return (new cljs.core.async.t_cljs$core$async32773(map_LT___$1,f__$1,ch__$1,meta32771__$1,___$2,fn1__$1,meta32774));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32773(self__.map_LT_,self__.f,self__.ch,self__.meta32771,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28408__auto__ = ret;
if(cljs.core.truth_(and__28408__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28408__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32770.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32770.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32770.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32771","meta32771",439366435,null)], null);
});

cljs.core.async.t_cljs$core$async32770.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32770";

cljs.core.async.t_cljs$core$async32770.cljs$lang$ctorPrWriter = (function (this__29026__auto__,writer__29027__auto__,opt__29028__auto__){
return cljs.core._write.call(null,writer__29027__auto__,"cljs.core.async/t_cljs$core$async32770");
});

cljs.core.async.__GT_t_cljs$core$async32770 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32770(map_LT___$1,f__$1,ch__$1,meta32771){
return (new cljs.core.async.t_cljs$core$async32770(map_LT___$1,f__$1,ch__$1,meta32771));
});

}

return (new cljs.core.async.t_cljs$core$async32770(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32779 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32779 = (function (map_GT_,f,ch,meta32780){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32780 = meta32780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32781,meta32780__$1){
var self__ = this;
var _32781__$1 = this;
return (new cljs.core.async.t_cljs$core$async32779(self__.map_GT_,self__.f,self__.ch,meta32780__$1));
});

cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32781){
var self__ = this;
var _32781__$1 = this;
return self__.meta32780;
});

cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32779.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32780","meta32780",1515446176,null)], null);
});

cljs.core.async.t_cljs$core$async32779.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32779";

cljs.core.async.t_cljs$core$async32779.cljs$lang$ctorPrWriter = (function (this__29026__auto__,writer__29027__auto__,opt__29028__auto__){
return cljs.core._write.call(null,writer__29027__auto__,"cljs.core.async/t_cljs$core$async32779");
});

cljs.core.async.__GT_t_cljs$core$async32779 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32779(map_GT___$1,f__$1,ch__$1,meta32780){
return (new cljs.core.async.t_cljs$core$async32779(map_GT___$1,f__$1,ch__$1,meta32780));
});

}

return (new cljs.core.async.t_cljs$core$async32779(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32785 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32785 = (function (filter_GT_,p,ch,meta32786){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32786 = meta32786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32787,meta32786__$1){
var self__ = this;
var _32787__$1 = this;
return (new cljs.core.async.t_cljs$core$async32785(self__.filter_GT_,self__.p,self__.ch,meta32786__$1));
});

cljs.core.async.t_cljs$core$async32785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32787){
var self__ = this;
var _32787__$1 = this;
return self__.meta32786;
});

cljs.core.async.t_cljs$core$async32785.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32785.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32785.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32785.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32785.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32785.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32785.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32785.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32786","meta32786",-412756820,null)], null);
});

cljs.core.async.t_cljs$core$async32785.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32785.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32785";

cljs.core.async.t_cljs$core$async32785.cljs$lang$ctorPrWriter = (function (this__29026__auto__,writer__29027__auto__,opt__29028__auto__){
return cljs.core._write.call(null,writer__29027__auto__,"cljs.core.async/t_cljs$core$async32785");
});

cljs.core.async.__GT_t_cljs$core$async32785 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32785(filter_GT___$1,p__$1,ch__$1,meta32786){
return (new cljs.core.async.t_cljs$core$async32785(filter_GT___$1,p__$1,ch__$1,meta32786));
});

}

return (new cljs.core.async.t_cljs$core$async32785(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args32788 = [];
var len__29489__auto___32832 = arguments.length;
var i__29490__auto___32833 = (0);
while(true){
if((i__29490__auto___32833 < len__29489__auto___32832)){
args32788.push((arguments[i__29490__auto___32833]));

var G__32834 = (i__29490__auto___32833 + (1));
i__29490__auto___32833 = G__32834;
continue;
} else {
}
break;
}

var G__32790 = args32788.length;
switch (G__32790) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32788.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30586__auto___32836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto___32836,out){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto___32836,out){
return (function (state_32811){
var state_val_32812 = (state_32811[(1)]);
if((state_val_32812 === (7))){
var inst_32807 = (state_32811[(2)]);
var state_32811__$1 = state_32811;
var statearr_32813_32837 = state_32811__$1;
(statearr_32813_32837[(2)] = inst_32807);

(statearr_32813_32837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (1))){
var state_32811__$1 = state_32811;
var statearr_32814_32838 = state_32811__$1;
(statearr_32814_32838[(2)] = null);

(statearr_32814_32838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (4))){
var inst_32793 = (state_32811[(7)]);
var inst_32793__$1 = (state_32811[(2)]);
var inst_32794 = (inst_32793__$1 == null);
var state_32811__$1 = (function (){var statearr_32815 = state_32811;
(statearr_32815[(7)] = inst_32793__$1);

return statearr_32815;
})();
if(cljs.core.truth_(inst_32794)){
var statearr_32816_32839 = state_32811__$1;
(statearr_32816_32839[(1)] = (5));

} else {
var statearr_32817_32840 = state_32811__$1;
(statearr_32817_32840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (6))){
var inst_32793 = (state_32811[(7)]);
var inst_32798 = p.call(null,inst_32793);
var state_32811__$1 = state_32811;
if(cljs.core.truth_(inst_32798)){
var statearr_32818_32841 = state_32811__$1;
(statearr_32818_32841[(1)] = (8));

} else {
var statearr_32819_32842 = state_32811__$1;
(statearr_32819_32842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (3))){
var inst_32809 = (state_32811[(2)]);
var state_32811__$1 = state_32811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32811__$1,inst_32809);
} else {
if((state_val_32812 === (2))){
var state_32811__$1 = state_32811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32811__$1,(4),ch);
} else {
if((state_val_32812 === (11))){
var inst_32801 = (state_32811[(2)]);
var state_32811__$1 = state_32811;
var statearr_32820_32843 = state_32811__$1;
(statearr_32820_32843[(2)] = inst_32801);

(statearr_32820_32843[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (9))){
var state_32811__$1 = state_32811;
var statearr_32821_32844 = state_32811__$1;
(statearr_32821_32844[(2)] = null);

(statearr_32821_32844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (5))){
var inst_32796 = cljs.core.async.close_BANG_.call(null,out);
var state_32811__$1 = state_32811;
var statearr_32822_32845 = state_32811__$1;
(statearr_32822_32845[(2)] = inst_32796);

(statearr_32822_32845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (10))){
var inst_32804 = (state_32811[(2)]);
var state_32811__$1 = (function (){var statearr_32823 = state_32811;
(statearr_32823[(8)] = inst_32804);

return statearr_32823;
})();
var statearr_32824_32846 = state_32811__$1;
(statearr_32824_32846[(2)] = null);

(statearr_32824_32846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32812 === (8))){
var inst_32793 = (state_32811[(7)]);
var state_32811__$1 = state_32811;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32811__$1,(11),out,inst_32793);
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
});})(c__30586__auto___32836,out))
;
return ((function (switch__30474__auto__,c__30586__auto___32836,out){
return (function() {
var cljs$core$async$state_machine__30475__auto__ = null;
var cljs$core$async$state_machine__30475__auto____0 = (function (){
var statearr_32828 = [null,null,null,null,null,null,null,null,null];
(statearr_32828[(0)] = cljs$core$async$state_machine__30475__auto__);

(statearr_32828[(1)] = (1));

return statearr_32828;
});
var cljs$core$async$state_machine__30475__auto____1 = (function (state_32811){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_32811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e32829){if((e32829 instanceof Object)){
var ex__30478__auto__ = e32829;
var statearr_32830_32847 = state_32811;
(statearr_32830_32847[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32848 = state_32811;
state_32811 = G__32848;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
cljs$core$async$state_machine__30475__auto__ = function(state_32811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30475__auto____1.call(this,state_32811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30475__auto____0;
cljs$core$async$state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30475__auto____1;
return cljs$core$async$state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto___32836,out))
})();
var state__30588__auto__ = (function (){var statearr_32831 = f__30587__auto__.call(null);
(statearr_32831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto___32836);

return statearr_32831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto___32836,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32849 = [];
var len__29489__auto___32852 = arguments.length;
var i__29490__auto___32853 = (0);
while(true){
if((i__29490__auto___32853 < len__29489__auto___32852)){
args32849.push((arguments[i__29490__auto___32853]));

var G__32854 = (i__29490__auto___32853 + (1));
i__29490__auto___32853 = G__32854;
continue;
} else {
}
break;
}

var G__32851 = args32849.length;
switch (G__32851) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32849.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30586__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto__){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto__){
return (function (state_33021){
var state_val_33022 = (state_33021[(1)]);
if((state_val_33022 === (7))){
var inst_33017 = (state_33021[(2)]);
var state_33021__$1 = state_33021;
var statearr_33023_33064 = state_33021__$1;
(statearr_33023_33064[(2)] = inst_33017);

(statearr_33023_33064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (20))){
var inst_32987 = (state_33021[(7)]);
var inst_32998 = (state_33021[(2)]);
var inst_32999 = cljs.core.next.call(null,inst_32987);
var inst_32973 = inst_32999;
var inst_32974 = null;
var inst_32975 = (0);
var inst_32976 = (0);
var state_33021__$1 = (function (){var statearr_33024 = state_33021;
(statearr_33024[(8)] = inst_32976);

(statearr_33024[(9)] = inst_32973);

(statearr_33024[(10)] = inst_32975);

(statearr_33024[(11)] = inst_32974);

(statearr_33024[(12)] = inst_32998);

return statearr_33024;
})();
var statearr_33025_33065 = state_33021__$1;
(statearr_33025_33065[(2)] = null);

(statearr_33025_33065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (1))){
var state_33021__$1 = state_33021;
var statearr_33026_33066 = state_33021__$1;
(statearr_33026_33066[(2)] = null);

(statearr_33026_33066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (4))){
var inst_32962 = (state_33021[(13)]);
var inst_32962__$1 = (state_33021[(2)]);
var inst_32963 = (inst_32962__$1 == null);
var state_33021__$1 = (function (){var statearr_33027 = state_33021;
(statearr_33027[(13)] = inst_32962__$1);

return statearr_33027;
})();
if(cljs.core.truth_(inst_32963)){
var statearr_33028_33067 = state_33021__$1;
(statearr_33028_33067[(1)] = (5));

} else {
var statearr_33029_33068 = state_33021__$1;
(statearr_33029_33068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (15))){
var state_33021__$1 = state_33021;
var statearr_33033_33069 = state_33021__$1;
(statearr_33033_33069[(2)] = null);

(statearr_33033_33069[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (21))){
var state_33021__$1 = state_33021;
var statearr_33034_33070 = state_33021__$1;
(statearr_33034_33070[(2)] = null);

(statearr_33034_33070[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (13))){
var inst_32976 = (state_33021[(8)]);
var inst_32973 = (state_33021[(9)]);
var inst_32975 = (state_33021[(10)]);
var inst_32974 = (state_33021[(11)]);
var inst_32983 = (state_33021[(2)]);
var inst_32984 = (inst_32976 + (1));
var tmp33030 = inst_32973;
var tmp33031 = inst_32975;
var tmp33032 = inst_32974;
var inst_32973__$1 = tmp33030;
var inst_32974__$1 = tmp33032;
var inst_32975__$1 = tmp33031;
var inst_32976__$1 = inst_32984;
var state_33021__$1 = (function (){var statearr_33035 = state_33021;
(statearr_33035[(8)] = inst_32976__$1);

(statearr_33035[(9)] = inst_32973__$1);

(statearr_33035[(10)] = inst_32975__$1);

(statearr_33035[(11)] = inst_32974__$1);

(statearr_33035[(14)] = inst_32983);

return statearr_33035;
})();
var statearr_33036_33071 = state_33021__$1;
(statearr_33036_33071[(2)] = null);

(statearr_33036_33071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (22))){
var state_33021__$1 = state_33021;
var statearr_33037_33072 = state_33021__$1;
(statearr_33037_33072[(2)] = null);

(statearr_33037_33072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (6))){
var inst_32962 = (state_33021[(13)]);
var inst_32971 = f.call(null,inst_32962);
var inst_32972 = cljs.core.seq.call(null,inst_32971);
var inst_32973 = inst_32972;
var inst_32974 = null;
var inst_32975 = (0);
var inst_32976 = (0);
var state_33021__$1 = (function (){var statearr_33038 = state_33021;
(statearr_33038[(8)] = inst_32976);

(statearr_33038[(9)] = inst_32973);

(statearr_33038[(10)] = inst_32975);

(statearr_33038[(11)] = inst_32974);

return statearr_33038;
})();
var statearr_33039_33073 = state_33021__$1;
(statearr_33039_33073[(2)] = null);

(statearr_33039_33073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (17))){
var inst_32987 = (state_33021[(7)]);
var inst_32991 = cljs.core.chunk_first.call(null,inst_32987);
var inst_32992 = cljs.core.chunk_rest.call(null,inst_32987);
var inst_32993 = cljs.core.count.call(null,inst_32991);
var inst_32973 = inst_32992;
var inst_32974 = inst_32991;
var inst_32975 = inst_32993;
var inst_32976 = (0);
var state_33021__$1 = (function (){var statearr_33040 = state_33021;
(statearr_33040[(8)] = inst_32976);

(statearr_33040[(9)] = inst_32973);

(statearr_33040[(10)] = inst_32975);

(statearr_33040[(11)] = inst_32974);

return statearr_33040;
})();
var statearr_33041_33074 = state_33021__$1;
(statearr_33041_33074[(2)] = null);

(statearr_33041_33074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (3))){
var inst_33019 = (state_33021[(2)]);
var state_33021__$1 = state_33021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33021__$1,inst_33019);
} else {
if((state_val_33022 === (12))){
var inst_33007 = (state_33021[(2)]);
var state_33021__$1 = state_33021;
var statearr_33042_33075 = state_33021__$1;
(statearr_33042_33075[(2)] = inst_33007);

(statearr_33042_33075[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (2))){
var state_33021__$1 = state_33021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33021__$1,(4),in$);
} else {
if((state_val_33022 === (23))){
var inst_33015 = (state_33021[(2)]);
var state_33021__$1 = state_33021;
var statearr_33043_33076 = state_33021__$1;
(statearr_33043_33076[(2)] = inst_33015);

(statearr_33043_33076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (19))){
var inst_33002 = (state_33021[(2)]);
var state_33021__$1 = state_33021;
var statearr_33044_33077 = state_33021__$1;
(statearr_33044_33077[(2)] = inst_33002);

(statearr_33044_33077[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (11))){
var inst_32987 = (state_33021[(7)]);
var inst_32973 = (state_33021[(9)]);
var inst_32987__$1 = cljs.core.seq.call(null,inst_32973);
var state_33021__$1 = (function (){var statearr_33045 = state_33021;
(statearr_33045[(7)] = inst_32987__$1);

return statearr_33045;
})();
if(inst_32987__$1){
var statearr_33046_33078 = state_33021__$1;
(statearr_33046_33078[(1)] = (14));

} else {
var statearr_33047_33079 = state_33021__$1;
(statearr_33047_33079[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (9))){
var inst_33009 = (state_33021[(2)]);
var inst_33010 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33021__$1 = (function (){var statearr_33048 = state_33021;
(statearr_33048[(15)] = inst_33009);

return statearr_33048;
})();
if(cljs.core.truth_(inst_33010)){
var statearr_33049_33080 = state_33021__$1;
(statearr_33049_33080[(1)] = (21));

} else {
var statearr_33050_33081 = state_33021__$1;
(statearr_33050_33081[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (5))){
var inst_32965 = cljs.core.async.close_BANG_.call(null,out);
var state_33021__$1 = state_33021;
var statearr_33051_33082 = state_33021__$1;
(statearr_33051_33082[(2)] = inst_32965);

(statearr_33051_33082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (14))){
var inst_32987 = (state_33021[(7)]);
var inst_32989 = cljs.core.chunked_seq_QMARK_.call(null,inst_32987);
var state_33021__$1 = state_33021;
if(inst_32989){
var statearr_33052_33083 = state_33021__$1;
(statearr_33052_33083[(1)] = (17));

} else {
var statearr_33053_33084 = state_33021__$1;
(statearr_33053_33084[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (16))){
var inst_33005 = (state_33021[(2)]);
var state_33021__$1 = state_33021;
var statearr_33054_33085 = state_33021__$1;
(statearr_33054_33085[(2)] = inst_33005);

(statearr_33054_33085[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (10))){
var inst_32976 = (state_33021[(8)]);
var inst_32974 = (state_33021[(11)]);
var inst_32981 = cljs.core._nth.call(null,inst_32974,inst_32976);
var state_33021__$1 = state_33021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33021__$1,(13),out,inst_32981);
} else {
if((state_val_33022 === (18))){
var inst_32987 = (state_33021[(7)]);
var inst_32996 = cljs.core.first.call(null,inst_32987);
var state_33021__$1 = state_33021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33021__$1,(20),out,inst_32996);
} else {
if((state_val_33022 === (8))){
var inst_32976 = (state_33021[(8)]);
var inst_32975 = (state_33021[(10)]);
var inst_32978 = (inst_32976 < inst_32975);
var inst_32979 = inst_32978;
var state_33021__$1 = state_33021;
if(cljs.core.truth_(inst_32979)){
var statearr_33055_33086 = state_33021__$1;
(statearr_33055_33086[(1)] = (10));

} else {
var statearr_33056_33087 = state_33021__$1;
(statearr_33056_33087[(1)] = (11));

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
});})(c__30586__auto__))
;
return ((function (switch__30474__auto__,c__30586__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30475__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30475__auto____0 = (function (){
var statearr_33060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33060[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30475__auto__);

(statearr_33060[(1)] = (1));

return statearr_33060;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30475__auto____1 = (function (state_33021){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_33021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e33061){if((e33061 instanceof Object)){
var ex__30478__auto__ = e33061;
var statearr_33062_33088 = state_33021;
(statearr_33062_33088[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33089 = state_33021;
state_33021 = G__33089;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30475__auto__ = function(state_33021){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30475__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30475__auto____1.call(this,state_33021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30475__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30475__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto__))
})();
var state__30588__auto__ = (function (){var statearr_33063 = f__30587__auto__.call(null);
(statearr_33063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto__);

return statearr_33063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto__))
);

return c__30586__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args33090 = [];
var len__29489__auto___33093 = arguments.length;
var i__29490__auto___33094 = (0);
while(true){
if((i__29490__auto___33094 < len__29489__auto___33093)){
args33090.push((arguments[i__29490__auto___33094]));

var G__33095 = (i__29490__auto___33094 + (1));
i__29490__auto___33094 = G__33095;
continue;
} else {
}
break;
}

var G__33092 = args33090.length;
switch (G__33092) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33090.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args33097 = [];
var len__29489__auto___33100 = arguments.length;
var i__29490__auto___33101 = (0);
while(true){
if((i__29490__auto___33101 < len__29489__auto___33100)){
args33097.push((arguments[i__29490__auto___33101]));

var G__33102 = (i__29490__auto___33101 + (1));
i__29490__auto___33101 = G__33102;
continue;
} else {
}
break;
}

var G__33099 = args33097.length;
switch (G__33099) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33097.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args33104 = [];
var len__29489__auto___33155 = arguments.length;
var i__29490__auto___33156 = (0);
while(true){
if((i__29490__auto___33156 < len__29489__auto___33155)){
args33104.push((arguments[i__29490__auto___33156]));

var G__33157 = (i__29490__auto___33156 + (1));
i__29490__auto___33156 = G__33157;
continue;
} else {
}
break;
}

var G__33106 = args33104.length;
switch (G__33106) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33104.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30586__auto___33159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto___33159,out){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto___33159,out){
return (function (state_33130){
var state_val_33131 = (state_33130[(1)]);
if((state_val_33131 === (7))){
var inst_33125 = (state_33130[(2)]);
var state_33130__$1 = state_33130;
var statearr_33132_33160 = state_33130__$1;
(statearr_33132_33160[(2)] = inst_33125);

(statearr_33132_33160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (1))){
var inst_33107 = null;
var state_33130__$1 = (function (){var statearr_33133 = state_33130;
(statearr_33133[(7)] = inst_33107);

return statearr_33133;
})();
var statearr_33134_33161 = state_33130__$1;
(statearr_33134_33161[(2)] = null);

(statearr_33134_33161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (4))){
var inst_33110 = (state_33130[(8)]);
var inst_33110__$1 = (state_33130[(2)]);
var inst_33111 = (inst_33110__$1 == null);
var inst_33112 = cljs.core.not.call(null,inst_33111);
var state_33130__$1 = (function (){var statearr_33135 = state_33130;
(statearr_33135[(8)] = inst_33110__$1);

return statearr_33135;
})();
if(inst_33112){
var statearr_33136_33162 = state_33130__$1;
(statearr_33136_33162[(1)] = (5));

} else {
var statearr_33137_33163 = state_33130__$1;
(statearr_33137_33163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (6))){
var state_33130__$1 = state_33130;
var statearr_33138_33164 = state_33130__$1;
(statearr_33138_33164[(2)] = null);

(statearr_33138_33164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (3))){
var inst_33127 = (state_33130[(2)]);
var inst_33128 = cljs.core.async.close_BANG_.call(null,out);
var state_33130__$1 = (function (){var statearr_33139 = state_33130;
(statearr_33139[(9)] = inst_33127);

return statearr_33139;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33130__$1,inst_33128);
} else {
if((state_val_33131 === (2))){
var state_33130__$1 = state_33130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33130__$1,(4),ch);
} else {
if((state_val_33131 === (11))){
var inst_33110 = (state_33130[(8)]);
var inst_33119 = (state_33130[(2)]);
var inst_33107 = inst_33110;
var state_33130__$1 = (function (){var statearr_33140 = state_33130;
(statearr_33140[(10)] = inst_33119);

(statearr_33140[(7)] = inst_33107);

return statearr_33140;
})();
var statearr_33141_33165 = state_33130__$1;
(statearr_33141_33165[(2)] = null);

(statearr_33141_33165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (9))){
var inst_33110 = (state_33130[(8)]);
var state_33130__$1 = state_33130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33130__$1,(11),out,inst_33110);
} else {
if((state_val_33131 === (5))){
var inst_33107 = (state_33130[(7)]);
var inst_33110 = (state_33130[(8)]);
var inst_33114 = cljs.core._EQ_.call(null,inst_33110,inst_33107);
var state_33130__$1 = state_33130;
if(inst_33114){
var statearr_33143_33166 = state_33130__$1;
(statearr_33143_33166[(1)] = (8));

} else {
var statearr_33144_33167 = state_33130__$1;
(statearr_33144_33167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (10))){
var inst_33122 = (state_33130[(2)]);
var state_33130__$1 = state_33130;
var statearr_33145_33168 = state_33130__$1;
(statearr_33145_33168[(2)] = inst_33122);

(statearr_33145_33168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (8))){
var inst_33107 = (state_33130[(7)]);
var tmp33142 = inst_33107;
var inst_33107__$1 = tmp33142;
var state_33130__$1 = (function (){var statearr_33146 = state_33130;
(statearr_33146[(7)] = inst_33107__$1);

return statearr_33146;
})();
var statearr_33147_33169 = state_33130__$1;
(statearr_33147_33169[(2)] = null);

(statearr_33147_33169[(1)] = (2));


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
});})(c__30586__auto___33159,out))
;
return ((function (switch__30474__auto__,c__30586__auto___33159,out){
return (function() {
var cljs$core$async$state_machine__30475__auto__ = null;
var cljs$core$async$state_machine__30475__auto____0 = (function (){
var statearr_33151 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33151[(0)] = cljs$core$async$state_machine__30475__auto__);

(statearr_33151[(1)] = (1));

return statearr_33151;
});
var cljs$core$async$state_machine__30475__auto____1 = (function (state_33130){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_33130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e33152){if((e33152 instanceof Object)){
var ex__30478__auto__ = e33152;
var statearr_33153_33170 = state_33130;
(statearr_33153_33170[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33171 = state_33130;
state_33130 = G__33171;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
cljs$core$async$state_machine__30475__auto__ = function(state_33130){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30475__auto____1.call(this,state_33130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30475__auto____0;
cljs$core$async$state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30475__auto____1;
return cljs$core$async$state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto___33159,out))
})();
var state__30588__auto__ = (function (){var statearr_33154 = f__30587__auto__.call(null);
(statearr_33154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto___33159);

return statearr_33154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto___33159,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args33172 = [];
var len__29489__auto___33242 = arguments.length;
var i__29490__auto___33243 = (0);
while(true){
if((i__29490__auto___33243 < len__29489__auto___33242)){
args33172.push((arguments[i__29490__auto___33243]));

var G__33244 = (i__29490__auto___33243 + (1));
i__29490__auto___33243 = G__33244;
continue;
} else {
}
break;
}

var G__33174 = args33172.length;
switch (G__33174) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33172.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30586__auto___33246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto___33246,out){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto___33246,out){
return (function (state_33212){
var state_val_33213 = (state_33212[(1)]);
if((state_val_33213 === (7))){
var inst_33208 = (state_33212[(2)]);
var state_33212__$1 = state_33212;
var statearr_33214_33247 = state_33212__$1;
(statearr_33214_33247[(2)] = inst_33208);

(statearr_33214_33247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (1))){
var inst_33175 = (new Array(n));
var inst_33176 = inst_33175;
var inst_33177 = (0);
var state_33212__$1 = (function (){var statearr_33215 = state_33212;
(statearr_33215[(7)] = inst_33177);

(statearr_33215[(8)] = inst_33176);

return statearr_33215;
})();
var statearr_33216_33248 = state_33212__$1;
(statearr_33216_33248[(2)] = null);

(statearr_33216_33248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (4))){
var inst_33180 = (state_33212[(9)]);
var inst_33180__$1 = (state_33212[(2)]);
var inst_33181 = (inst_33180__$1 == null);
var inst_33182 = cljs.core.not.call(null,inst_33181);
var state_33212__$1 = (function (){var statearr_33217 = state_33212;
(statearr_33217[(9)] = inst_33180__$1);

return statearr_33217;
})();
if(inst_33182){
var statearr_33218_33249 = state_33212__$1;
(statearr_33218_33249[(1)] = (5));

} else {
var statearr_33219_33250 = state_33212__$1;
(statearr_33219_33250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (15))){
var inst_33202 = (state_33212[(2)]);
var state_33212__$1 = state_33212;
var statearr_33220_33251 = state_33212__$1;
(statearr_33220_33251[(2)] = inst_33202);

(statearr_33220_33251[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (13))){
var state_33212__$1 = state_33212;
var statearr_33221_33252 = state_33212__$1;
(statearr_33221_33252[(2)] = null);

(statearr_33221_33252[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (6))){
var inst_33177 = (state_33212[(7)]);
var inst_33198 = (inst_33177 > (0));
var state_33212__$1 = state_33212;
if(cljs.core.truth_(inst_33198)){
var statearr_33222_33253 = state_33212__$1;
(statearr_33222_33253[(1)] = (12));

} else {
var statearr_33223_33254 = state_33212__$1;
(statearr_33223_33254[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (3))){
var inst_33210 = (state_33212[(2)]);
var state_33212__$1 = state_33212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33212__$1,inst_33210);
} else {
if((state_val_33213 === (12))){
var inst_33176 = (state_33212[(8)]);
var inst_33200 = cljs.core.vec.call(null,inst_33176);
var state_33212__$1 = state_33212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33212__$1,(15),out,inst_33200);
} else {
if((state_val_33213 === (2))){
var state_33212__$1 = state_33212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33212__$1,(4),ch);
} else {
if((state_val_33213 === (11))){
var inst_33192 = (state_33212[(2)]);
var inst_33193 = (new Array(n));
var inst_33176 = inst_33193;
var inst_33177 = (0);
var state_33212__$1 = (function (){var statearr_33224 = state_33212;
(statearr_33224[(7)] = inst_33177);

(statearr_33224[(10)] = inst_33192);

(statearr_33224[(8)] = inst_33176);

return statearr_33224;
})();
var statearr_33225_33255 = state_33212__$1;
(statearr_33225_33255[(2)] = null);

(statearr_33225_33255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (9))){
var inst_33176 = (state_33212[(8)]);
var inst_33190 = cljs.core.vec.call(null,inst_33176);
var state_33212__$1 = state_33212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33212__$1,(11),out,inst_33190);
} else {
if((state_val_33213 === (5))){
var inst_33177 = (state_33212[(7)]);
var inst_33176 = (state_33212[(8)]);
var inst_33180 = (state_33212[(9)]);
var inst_33185 = (state_33212[(11)]);
var inst_33184 = (inst_33176[inst_33177] = inst_33180);
var inst_33185__$1 = (inst_33177 + (1));
var inst_33186 = (inst_33185__$1 < n);
var state_33212__$1 = (function (){var statearr_33226 = state_33212;
(statearr_33226[(12)] = inst_33184);

(statearr_33226[(11)] = inst_33185__$1);

return statearr_33226;
})();
if(cljs.core.truth_(inst_33186)){
var statearr_33227_33256 = state_33212__$1;
(statearr_33227_33256[(1)] = (8));

} else {
var statearr_33228_33257 = state_33212__$1;
(statearr_33228_33257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (14))){
var inst_33205 = (state_33212[(2)]);
var inst_33206 = cljs.core.async.close_BANG_.call(null,out);
var state_33212__$1 = (function (){var statearr_33230 = state_33212;
(statearr_33230[(13)] = inst_33205);

return statearr_33230;
})();
var statearr_33231_33258 = state_33212__$1;
(statearr_33231_33258[(2)] = inst_33206);

(statearr_33231_33258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (10))){
var inst_33196 = (state_33212[(2)]);
var state_33212__$1 = state_33212;
var statearr_33232_33259 = state_33212__$1;
(statearr_33232_33259[(2)] = inst_33196);

(statearr_33232_33259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (8))){
var inst_33176 = (state_33212[(8)]);
var inst_33185 = (state_33212[(11)]);
var tmp33229 = inst_33176;
var inst_33176__$1 = tmp33229;
var inst_33177 = inst_33185;
var state_33212__$1 = (function (){var statearr_33233 = state_33212;
(statearr_33233[(7)] = inst_33177);

(statearr_33233[(8)] = inst_33176__$1);

return statearr_33233;
})();
var statearr_33234_33260 = state_33212__$1;
(statearr_33234_33260[(2)] = null);

(statearr_33234_33260[(1)] = (2));


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
});})(c__30586__auto___33246,out))
;
return ((function (switch__30474__auto__,c__30586__auto___33246,out){
return (function() {
var cljs$core$async$state_machine__30475__auto__ = null;
var cljs$core$async$state_machine__30475__auto____0 = (function (){
var statearr_33238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33238[(0)] = cljs$core$async$state_machine__30475__auto__);

(statearr_33238[(1)] = (1));

return statearr_33238;
});
var cljs$core$async$state_machine__30475__auto____1 = (function (state_33212){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_33212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e33239){if((e33239 instanceof Object)){
var ex__30478__auto__ = e33239;
var statearr_33240_33261 = state_33212;
(statearr_33240_33261[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33262 = state_33212;
state_33212 = G__33262;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
cljs$core$async$state_machine__30475__auto__ = function(state_33212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30475__auto____1.call(this,state_33212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30475__auto____0;
cljs$core$async$state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30475__auto____1;
return cljs$core$async$state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto___33246,out))
})();
var state__30588__auto__ = (function (){var statearr_33241 = f__30587__auto__.call(null);
(statearr_33241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto___33246);

return statearr_33241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto___33246,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args33263 = [];
var len__29489__auto___33337 = arguments.length;
var i__29490__auto___33338 = (0);
while(true){
if((i__29490__auto___33338 < len__29489__auto___33337)){
args33263.push((arguments[i__29490__auto___33338]));

var G__33339 = (i__29490__auto___33338 + (1));
i__29490__auto___33338 = G__33339;
continue;
} else {
}
break;
}

var G__33265 = args33263.length;
switch (G__33265) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33263.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30586__auto___33341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30586__auto___33341,out){
return (function (){
var f__30587__auto__ = (function (){var switch__30474__auto__ = ((function (c__30586__auto___33341,out){
return (function (state_33307){
var state_val_33308 = (state_33307[(1)]);
if((state_val_33308 === (7))){
var inst_33303 = (state_33307[(2)]);
var state_33307__$1 = state_33307;
var statearr_33309_33342 = state_33307__$1;
(statearr_33309_33342[(2)] = inst_33303);

(statearr_33309_33342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33308 === (1))){
var inst_33266 = [];
var inst_33267 = inst_33266;
var inst_33268 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33307__$1 = (function (){var statearr_33310 = state_33307;
(statearr_33310[(7)] = inst_33267);

(statearr_33310[(8)] = inst_33268);

return statearr_33310;
})();
var statearr_33311_33343 = state_33307__$1;
(statearr_33311_33343[(2)] = null);

(statearr_33311_33343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33308 === (4))){
var inst_33271 = (state_33307[(9)]);
var inst_33271__$1 = (state_33307[(2)]);
var inst_33272 = (inst_33271__$1 == null);
var inst_33273 = cljs.core.not.call(null,inst_33272);
var state_33307__$1 = (function (){var statearr_33312 = state_33307;
(statearr_33312[(9)] = inst_33271__$1);

return statearr_33312;
})();
if(inst_33273){
var statearr_33313_33344 = state_33307__$1;
(statearr_33313_33344[(1)] = (5));

} else {
var statearr_33314_33345 = state_33307__$1;
(statearr_33314_33345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33308 === (15))){
var inst_33297 = (state_33307[(2)]);
var state_33307__$1 = state_33307;
var statearr_33315_33346 = state_33307__$1;
(statearr_33315_33346[(2)] = inst_33297);

(statearr_33315_33346[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33308 === (13))){
var state_33307__$1 = state_33307;
var statearr_33316_33347 = state_33307__$1;
(statearr_33316_33347[(2)] = null);

(statearr_33316_33347[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33308 === (6))){
var inst_33267 = (state_33307[(7)]);
var inst_33292 = inst_33267.length;
var inst_33293 = (inst_33292 > (0));
var state_33307__$1 = state_33307;
if(cljs.core.truth_(inst_33293)){
var statearr_33317_33348 = state_33307__$1;
(statearr_33317_33348[(1)] = (12));

} else {
var statearr_33318_33349 = state_33307__$1;
(statearr_33318_33349[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33308 === (3))){
var inst_33305 = (state_33307[(2)]);
var state_33307__$1 = state_33307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33307__$1,inst_33305);
} else {
if((state_val_33308 === (12))){
var inst_33267 = (state_33307[(7)]);
var inst_33295 = cljs.core.vec.call(null,inst_33267);
var state_33307__$1 = state_33307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33307__$1,(15),out,inst_33295);
} else {
if((state_val_33308 === (2))){
var state_33307__$1 = state_33307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33307__$1,(4),ch);
} else {
if((state_val_33308 === (11))){
var inst_33271 = (state_33307[(9)]);
var inst_33275 = (state_33307[(10)]);
var inst_33285 = (state_33307[(2)]);
var inst_33286 = [];
var inst_33287 = inst_33286.push(inst_33271);
var inst_33267 = inst_33286;
var inst_33268 = inst_33275;
var state_33307__$1 = (function (){var statearr_33319 = state_33307;
(statearr_33319[(11)] = inst_33287);

(statearr_33319[(7)] = inst_33267);

(statearr_33319[(12)] = inst_33285);

(statearr_33319[(8)] = inst_33268);

return statearr_33319;
})();
var statearr_33320_33350 = state_33307__$1;
(statearr_33320_33350[(2)] = null);

(statearr_33320_33350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33308 === (9))){
var inst_33267 = (state_33307[(7)]);
var inst_33283 = cljs.core.vec.call(null,inst_33267);
var state_33307__$1 = state_33307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33307__$1,(11),out,inst_33283);
} else {
if((state_val_33308 === (5))){
var inst_33271 = (state_33307[(9)]);
var inst_33275 = (state_33307[(10)]);
var inst_33268 = (state_33307[(8)]);
var inst_33275__$1 = f.call(null,inst_33271);
var inst_33276 = cljs.core._EQ_.call(null,inst_33275__$1,inst_33268);
var inst_33277 = cljs.core.keyword_identical_QMARK_.call(null,inst_33268,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33278 = (inst_33276) || (inst_33277);
var state_33307__$1 = (function (){var statearr_33321 = state_33307;
(statearr_33321[(10)] = inst_33275__$1);

return statearr_33321;
})();
if(cljs.core.truth_(inst_33278)){
var statearr_33322_33351 = state_33307__$1;
(statearr_33322_33351[(1)] = (8));

} else {
var statearr_33323_33352 = state_33307__$1;
(statearr_33323_33352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33308 === (14))){
var inst_33300 = (state_33307[(2)]);
var inst_33301 = cljs.core.async.close_BANG_.call(null,out);
var state_33307__$1 = (function (){var statearr_33325 = state_33307;
(statearr_33325[(13)] = inst_33300);

return statearr_33325;
})();
var statearr_33326_33353 = state_33307__$1;
(statearr_33326_33353[(2)] = inst_33301);

(statearr_33326_33353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33308 === (10))){
var inst_33290 = (state_33307[(2)]);
var state_33307__$1 = state_33307;
var statearr_33327_33354 = state_33307__$1;
(statearr_33327_33354[(2)] = inst_33290);

(statearr_33327_33354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33308 === (8))){
var inst_33271 = (state_33307[(9)]);
var inst_33267 = (state_33307[(7)]);
var inst_33275 = (state_33307[(10)]);
var inst_33280 = inst_33267.push(inst_33271);
var tmp33324 = inst_33267;
var inst_33267__$1 = tmp33324;
var inst_33268 = inst_33275;
var state_33307__$1 = (function (){var statearr_33328 = state_33307;
(statearr_33328[(14)] = inst_33280);

(statearr_33328[(7)] = inst_33267__$1);

(statearr_33328[(8)] = inst_33268);

return statearr_33328;
})();
var statearr_33329_33355 = state_33307__$1;
(statearr_33329_33355[(2)] = null);

(statearr_33329_33355[(1)] = (2));


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
});})(c__30586__auto___33341,out))
;
return ((function (switch__30474__auto__,c__30586__auto___33341,out){
return (function() {
var cljs$core$async$state_machine__30475__auto__ = null;
var cljs$core$async$state_machine__30475__auto____0 = (function (){
var statearr_33333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33333[(0)] = cljs$core$async$state_machine__30475__auto__);

(statearr_33333[(1)] = (1));

return statearr_33333;
});
var cljs$core$async$state_machine__30475__auto____1 = (function (state_33307){
while(true){
var ret_value__30476__auto__ = (function (){try{while(true){
var result__30477__auto__ = switch__30474__auto__.call(null,state_33307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30477__auto__;
}
break;
}
}catch (e33334){if((e33334 instanceof Object)){
var ex__30478__auto__ = e33334;
var statearr_33335_33356 = state_33307;
(statearr_33335_33356[(5)] = ex__30478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33357 = state_33307;
state_33307 = G__33357;
continue;
} else {
return ret_value__30476__auto__;
}
break;
}
});
cljs$core$async$state_machine__30475__auto__ = function(state_33307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30475__auto____1.call(this,state_33307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30475__auto____0;
cljs$core$async$state_machine__30475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30475__auto____1;
return cljs$core$async$state_machine__30475__auto__;
})()
;})(switch__30474__auto__,c__30586__auto___33341,out))
})();
var state__30588__auto__ = (function (){var statearr_33336 = f__30587__auto__.call(null);
(statearr_33336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30586__auto___33341);

return statearr_33336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30588__auto__);
});})(c__30586__auto___33341,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map