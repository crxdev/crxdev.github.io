goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34832 = arguments.length;
switch (G__34832) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34837 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34837 = (function (f,blockable,meta34838){
this.f = f;
this.blockable = blockable;
this.meta34838 = meta34838;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34839,meta34838__$1){
var self__ = this;
var _34839__$1 = this;
return (new cljs.core.async.t_cljs$core$async34837(self__.f,self__.blockable,meta34838__$1));
}));

(cljs.core.async.t_cljs$core$async34837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34839){
var self__ = this;
var _34839__$1 = this;
return self__.meta34838;
}));

(cljs.core.async.t_cljs$core$async34837.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34837.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34837.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34837.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34837.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34838","meta34838",-1639210005,null)], null);
}));

(cljs.core.async.t_cljs$core$async34837.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34837.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34837");

(cljs.core.async.t_cljs$core$async34837.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34837");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34837.
 */
cljs.core.async.__GT_t_cljs$core$async34837 = (function cljs$core$async$__GT_t_cljs$core$async34837(f__$1,blockable__$1,meta34838){
return (new cljs.core.async.t_cljs$core$async34837(f__$1,blockable__$1,meta34838));
});

}

return (new cljs.core.async.t_cljs$core$async34837(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__34913 = arguments.length;
switch (G__34913) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__34930 = arguments.length;
switch (G__34930) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__34983 = arguments.length;
switch (G__34983) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_38803 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38803) : fn1.call(null,val_38803));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38803) : fn1.call(null,val_38803));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__35023 = arguments.length;
switch (G__35023) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___38821 = n;
var x_38823 = (0);
while(true){
if((x_38823 < n__4741__auto___38821)){
(a[x_38823] = x_38823);

var G__38824 = (x_38823 + (1));
x_38823 = G__38824;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35065 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35065 = (function (flag,meta35066){
this.flag = flag;
this.meta35066 = meta35066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35067,meta35066__$1){
var self__ = this;
var _35067__$1 = this;
return (new cljs.core.async.t_cljs$core$async35065(self__.flag,meta35066__$1));
}));

(cljs.core.async.t_cljs$core$async35065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35067){
var self__ = this;
var _35067__$1 = this;
return self__.meta35066;
}));

(cljs.core.async.t_cljs$core$async35065.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35065.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35065.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35065.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async35065.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35066","meta35066",-1040425484,null)], null);
}));

(cljs.core.async.t_cljs$core$async35065.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35065");

(cljs.core.async.t_cljs$core$async35065.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async35065");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35065.
 */
cljs.core.async.__GT_t_cljs$core$async35065 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35065(flag__$1,meta35066){
return (new cljs.core.async.t_cljs$core$async35065(flag__$1,meta35066));
});

}

return (new cljs.core.async.t_cljs$core$async35065(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35074 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35074 = (function (flag,cb,meta35075){
this.flag = flag;
this.cb = cb;
this.meta35075 = meta35075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35076,meta35075__$1){
var self__ = this;
var _35076__$1 = this;
return (new cljs.core.async.t_cljs$core$async35074(self__.flag,self__.cb,meta35075__$1));
}));

(cljs.core.async.t_cljs$core$async35074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35076){
var self__ = this;
var _35076__$1 = this;
return self__.meta35075;
}));

(cljs.core.async.t_cljs$core$async35074.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35074.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35074.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35074.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async35074.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35075","meta35075",-436027820,null)], null);
}));

(cljs.core.async.t_cljs$core$async35074.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35074.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35074");

(cljs.core.async.t_cljs$core$async35074.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async35074");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35074.
 */
cljs.core.async.__GT_t_cljs$core$async35074 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35074(flag__$1,cb__$1,meta35075){
return (new cljs.core.async.t_cljs$core$async35074(flag__$1,cb__$1,meta35075));
});

}

return (new cljs.core.async.t_cljs$core$async35074(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35094_SHARP_){
var G__35102 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35094_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35102) : fret.call(null,G__35102));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35097_SHARP_){
var G__35109 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35097_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35109) : fret.call(null,G__35109));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__38844 = (i + (1));
i = G__38844;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4870__auto__ = [];
var len__4864__auto___38853 = arguments.length;
var i__4865__auto___38854 = (0);
while(true){
if((i__4865__auto___38854 < len__4864__auto___38853)){
args__4870__auto__.push((arguments[i__4865__auto___38854]));

var G__38855 = (i__4865__auto___38854 + (1));
i__4865__auto___38854 = G__38855;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35122){
var map__35129 = p__35122;
var map__35129__$1 = cljs.core.__destructure_map(map__35129);
var opts = map__35129__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35116){
var G__35117 = cljs.core.first(seq35116);
var seq35116__$1 = cljs.core.next(seq35116);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35117,seq35116__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__35135 = arguments.length;
switch (G__35135) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34734__auto___38872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34735__auto__ = (function (){var switch__34044__auto__ = (function (state_35263){
var state_val_35266 = (state_35263[(1)]);
if((state_val_35266 === (7))){
var inst_35242 = (state_35263[(2)]);
var state_35263__$1 = state_35263;
var statearr_35275_38874 = state_35263__$1;
(statearr_35275_38874[(2)] = inst_35242);

(statearr_35275_38874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (1))){
var state_35263__$1 = state_35263;
var statearr_35278_38877 = state_35263__$1;
(statearr_35278_38877[(2)] = null);

(statearr_35278_38877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (4))){
var inst_35188 = (state_35263[(7)]);
var inst_35188__$1 = (state_35263[(2)]);
var inst_35190 = (inst_35188__$1 == null);
var state_35263__$1 = (function (){var statearr_35288 = state_35263;
(statearr_35288[(7)] = inst_35188__$1);

return statearr_35288;
})();
if(cljs.core.truth_(inst_35190)){
var statearr_35289_38882 = state_35263__$1;
(statearr_35289_38882[(1)] = (5));

} else {
var statearr_35290_38883 = state_35263__$1;
(statearr_35290_38883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (13))){
var state_35263__$1 = state_35263;
var statearr_35291_38886 = state_35263__$1;
(statearr_35291_38886[(2)] = null);

(statearr_35291_38886[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (6))){
var inst_35188 = (state_35263[(7)]);
var state_35263__$1 = state_35263;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35263__$1,(11),to,inst_35188);
} else {
if((state_val_35266 === (3))){
var inst_35253 = (state_35263[(2)]);
var state_35263__$1 = state_35263;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35263__$1,inst_35253);
} else {
if((state_val_35266 === (12))){
var state_35263__$1 = state_35263;
var statearr_35296_38890 = state_35263__$1;
(statearr_35296_38890[(2)] = null);

(statearr_35296_38890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (2))){
var state_35263__$1 = state_35263;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35263__$1,(4),from);
} else {
if((state_val_35266 === (11))){
var inst_35217 = (state_35263[(2)]);
var state_35263__$1 = state_35263;
if(cljs.core.truth_(inst_35217)){
var statearr_35297_38894 = state_35263__$1;
(statearr_35297_38894[(1)] = (12));

} else {
var statearr_35298_38895 = state_35263__$1;
(statearr_35298_38895[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (9))){
var state_35263__$1 = state_35263;
var statearr_35299_38896 = state_35263__$1;
(statearr_35299_38896[(2)] = null);

(statearr_35299_38896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (5))){
var state_35263__$1 = state_35263;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35300_38897 = state_35263__$1;
(statearr_35300_38897[(1)] = (8));

} else {
var statearr_35301_38898 = state_35263__$1;
(statearr_35301_38898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (14))){
var inst_35240 = (state_35263[(2)]);
var state_35263__$1 = state_35263;
var statearr_35302_38905 = state_35263__$1;
(statearr_35302_38905[(2)] = inst_35240);

(statearr_35302_38905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (10))){
var inst_35211 = (state_35263[(2)]);
var state_35263__$1 = state_35263;
var statearr_35304_38910 = state_35263__$1;
(statearr_35304_38910[(2)] = inst_35211);

(statearr_35304_38910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (8))){
var inst_35196 = cljs.core.async.close_BANG_(to);
var state_35263__$1 = state_35263;
var statearr_35305_38914 = state_35263__$1;
(statearr_35305_38914[(2)] = inst_35196);

(statearr_35305_38914[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__34045__auto__ = null;
var cljs$core$async$state_machine__34045__auto____0 = (function (){
var statearr_35307 = [null,null,null,null,null,null,null,null];
(statearr_35307[(0)] = cljs$core$async$state_machine__34045__auto__);

(statearr_35307[(1)] = (1));

return statearr_35307;
});
var cljs$core$async$state_machine__34045__auto____1 = (function (state_35263){
while(true){
var ret_value__34046__auto__ = (function (){try{while(true){
var result__34047__auto__ = switch__34044__auto__(state_35263);
if(cljs.core.keyword_identical_QMARK_(result__34047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34047__auto__;
}
break;
}
}catch (e35310){var ex__34048__auto__ = e35310;
var statearr_35311_38918 = state_35263;
(statearr_35311_38918[(2)] = ex__34048__auto__);


if(cljs.core.seq((state_35263[(4)]))){
var statearr_35313_38923 = state_35263;
(statearr_35313_38923[(1)] = cljs.core.first((state_35263[(4)])));

} else {
throw ex__34048__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38930 = state_35263;
state_35263 = G__38930;
continue;
} else {
return ret_value__34046__auto__;
}
break;
}
});
cljs$core$async$state_machine__34045__auto__ = function(state_35263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34045__auto____1.call(this,state_35263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34045__auto____0;
cljs$core$async$state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34045__auto____1;
return cljs$core$async$state_machine__34045__auto__;
})()
})();
var state__34736__auto__ = (function (){var statearr_35314 = f__34735__auto__();
(statearr_35314[(6)] = c__34734__auto___38872);

return statearr_35314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34736__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__35319){
var vec__35320 = p__35319;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35320,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35320,(1),null);
var job = vec__35320;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34734__auto___38937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34735__auto__ = (function (){var switch__34044__auto__ = (function (state_35327){
var state_val_35328 = (state_35327[(1)]);
if((state_val_35328 === (1))){
var state_35327__$1 = state_35327;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35327__$1,(2),res,v);
} else {
if((state_val_35328 === (2))){
var inst_35324 = (state_35327[(2)]);
var inst_35325 = cljs.core.async.close_BANG_(res);
var state_35327__$1 = (function (){var statearr_35330 = state_35327;
(statearr_35330[(7)] = inst_35324);

return statearr_35330;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35327__$1,inst_35325);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____0 = (function (){
var statearr_35331 = [null,null,null,null,null,null,null,null];
(statearr_35331[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__);

(statearr_35331[(1)] = (1));

return statearr_35331;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____1 = (function (state_35327){
while(true){
var ret_value__34046__auto__ = (function (){try{while(true){
var result__34047__auto__ = switch__34044__auto__(state_35327);
if(cljs.core.keyword_identical_QMARK_(result__34047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34047__auto__;
}
break;
}
}catch (e35335){var ex__34048__auto__ = e35335;
var statearr_35336_38949 = state_35327;
(statearr_35336_38949[(2)] = ex__34048__auto__);


if(cljs.core.seq((state_35327[(4)]))){
var statearr_35337_38950 = state_35327;
(statearr_35337_38950[(1)] = cljs.core.first((state_35327[(4)])));

} else {
throw ex__34048__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38951 = state_35327;
state_35327 = G__38951;
continue;
} else {
return ret_value__34046__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__ = function(state_35327){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____1.call(this,state_35327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__;
})()
})();
var state__34736__auto__ = (function (){var statearr_35345 = f__34735__auto__();
(statearr_35345[(6)] = c__34734__auto___38937);

return statearr_35345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34736__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__35347){
var vec__35348 = p__35347;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35348,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35348,(1),null);
var job = vec__35348;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___38955 = n;
var __38956 = (0);
while(true){
if((__38956 < n__4741__auto___38955)){
var G__35352_38957 = type;
var G__35352_38958__$1 = (((G__35352_38957 instanceof cljs.core.Keyword))?G__35352_38957.fqn:null);
switch (G__35352_38958__$1) {
case "compute":
var c__34734__auto___38961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38956,c__34734__auto___38961,G__35352_38957,G__35352_38958__$1,n__4741__auto___38955,jobs,results,process,async){
return (function (){
var f__34735__auto__ = (function (){var switch__34044__auto__ = ((function (__38956,c__34734__auto___38961,G__35352_38957,G__35352_38958__$1,n__4741__auto___38955,jobs,results,process,async){
return (function (state_35372){
var state_val_35373 = (state_35372[(1)]);
if((state_val_35373 === (1))){
var state_35372__$1 = state_35372;
var statearr_35374_38969 = state_35372__$1;
(statearr_35374_38969[(2)] = null);

(statearr_35374_38969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35373 === (2))){
var state_35372__$1 = state_35372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35372__$1,(4),jobs);
} else {
if((state_val_35373 === (3))){
var inst_35370 = (state_35372[(2)]);
var state_35372__$1 = state_35372;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35372__$1,inst_35370);
} else {
if((state_val_35373 === (4))){
var inst_35361 = (state_35372[(2)]);
var inst_35362 = process(inst_35361);
var state_35372__$1 = state_35372;
if(cljs.core.truth_(inst_35362)){
var statearr_35376_38971 = state_35372__$1;
(statearr_35376_38971[(1)] = (5));

} else {
var statearr_35377_38973 = state_35372__$1;
(statearr_35377_38973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35373 === (5))){
var state_35372__$1 = state_35372;
var statearr_35378_38974 = state_35372__$1;
(statearr_35378_38974[(2)] = null);

(statearr_35378_38974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35373 === (6))){
var state_35372__$1 = state_35372;
var statearr_35379_38977 = state_35372__$1;
(statearr_35379_38977[(2)] = null);

(statearr_35379_38977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35373 === (7))){
var inst_35368 = (state_35372[(2)]);
var state_35372__$1 = state_35372;
var statearr_35380_38978 = state_35372__$1;
(statearr_35380_38978[(2)] = inst_35368);

(statearr_35380_38978[(1)] = (3));


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
});})(__38956,c__34734__auto___38961,G__35352_38957,G__35352_38958__$1,n__4741__auto___38955,jobs,results,process,async))
;
return ((function (__38956,switch__34044__auto__,c__34734__auto___38961,G__35352_38957,G__35352_38958__$1,n__4741__auto___38955,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____0 = (function (){
var statearr_35383 = [null,null,null,null,null,null,null];
(statearr_35383[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__);

(statearr_35383[(1)] = (1));

return statearr_35383;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____1 = (function (state_35372){
while(true){
var ret_value__34046__auto__ = (function (){try{while(true){
var result__34047__auto__ = switch__34044__auto__(state_35372);
if(cljs.core.keyword_identical_QMARK_(result__34047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34047__auto__;
}
break;
}
}catch (e35385){var ex__34048__auto__ = e35385;
var statearr_35386_38987 = state_35372;
(statearr_35386_38987[(2)] = ex__34048__auto__);


if(cljs.core.seq((state_35372[(4)]))){
var statearr_35387_38988 = state_35372;
(statearr_35387_38988[(1)] = cljs.core.first((state_35372[(4)])));

} else {
throw ex__34048__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38991 = state_35372;
state_35372 = G__38991;
continue;
} else {
return ret_value__34046__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__ = function(state_35372){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____1.call(this,state_35372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__;
})()
;})(__38956,switch__34044__auto__,c__34734__auto___38961,G__35352_38957,G__35352_38958__$1,n__4741__auto___38955,jobs,results,process,async))
})();
var state__34736__auto__ = (function (){var statearr_35388 = f__34735__auto__();
(statearr_35388[(6)] = c__34734__auto___38961);

return statearr_35388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34736__auto__);
});})(__38956,c__34734__auto___38961,G__35352_38957,G__35352_38958__$1,n__4741__auto___38955,jobs,results,process,async))
);


break;
case "async":
var c__34734__auto___38992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38956,c__34734__auto___38992,G__35352_38957,G__35352_38958__$1,n__4741__auto___38955,jobs,results,process,async){
return (function (){
var f__34735__auto__ = (function (){var switch__34044__auto__ = ((function (__38956,c__34734__auto___38992,G__35352_38957,G__35352_38958__$1,n__4741__auto___38955,jobs,results,process,async){
return (function (state_35401){
var state_val_35402 = (state_35401[(1)]);
if((state_val_35402 === (1))){
var state_35401__$1 = state_35401;
var statearr_35407_38997 = state_35401__$1;
(statearr_35407_38997[(2)] = null);

(statearr_35407_38997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (2))){
var state_35401__$1 = state_35401;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35401__$1,(4),jobs);
} else {
if((state_val_35402 === (3))){
var inst_35399 = (state_35401[(2)]);
var state_35401__$1 = state_35401;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35401__$1,inst_35399);
} else {
if((state_val_35402 === (4))){
var inst_35391 = (state_35401[(2)]);
var inst_35392 = async(inst_35391);
var state_35401__$1 = state_35401;
if(cljs.core.truth_(inst_35392)){
var statearr_35412_38998 = state_35401__$1;
(statearr_35412_38998[(1)] = (5));

} else {
var statearr_35413_38999 = state_35401__$1;
(statearr_35413_38999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (5))){
var state_35401__$1 = state_35401;
var statearr_35414_39002 = state_35401__$1;
(statearr_35414_39002[(2)] = null);

(statearr_35414_39002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (6))){
var state_35401__$1 = state_35401;
var statearr_35415_39003 = state_35401__$1;
(statearr_35415_39003[(2)] = null);

(statearr_35415_39003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (7))){
var inst_35397 = (state_35401[(2)]);
var state_35401__$1 = state_35401;
var statearr_35416_39004 = state_35401__$1;
(statearr_35416_39004[(2)] = inst_35397);

(statearr_35416_39004[(1)] = (3));


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
});})(__38956,c__34734__auto___38992,G__35352_38957,G__35352_38958__$1,n__4741__auto___38955,jobs,results,process,async))
;
return ((function (__38956,switch__34044__auto__,c__34734__auto___38992,G__35352_38957,G__35352_38958__$1,n__4741__auto___38955,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____0 = (function (){
var statearr_35419 = [null,null,null,null,null,null,null];
(statearr_35419[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__);

(statearr_35419[(1)] = (1));

return statearr_35419;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____1 = (function (state_35401){
while(true){
var ret_value__34046__auto__ = (function (){try{while(true){
var result__34047__auto__ = switch__34044__auto__(state_35401);
if(cljs.core.keyword_identical_QMARK_(result__34047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34047__auto__;
}
break;
}
}catch (e35420){var ex__34048__auto__ = e35420;
var statearr_35421_39009 = state_35401;
(statearr_35421_39009[(2)] = ex__34048__auto__);


if(cljs.core.seq((state_35401[(4)]))){
var statearr_35422_39010 = state_35401;
(statearr_35422_39010[(1)] = cljs.core.first((state_35401[(4)])));

} else {
throw ex__34048__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39014 = state_35401;
state_35401 = G__39014;
continue;
} else {
return ret_value__34046__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__ = function(state_35401){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____1.call(this,state_35401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__;
})()
;})(__38956,switch__34044__auto__,c__34734__auto___38992,G__35352_38957,G__35352_38958__$1,n__4741__auto___38955,jobs,results,process,async))
})();
var state__34736__auto__ = (function (){var statearr_35427 = f__34735__auto__();
(statearr_35427[(6)] = c__34734__auto___38992);

return statearr_35427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34736__auto__);
});})(__38956,c__34734__auto___38992,G__35352_38957,G__35352_38958__$1,n__4741__auto___38955,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35352_38958__$1)].join('')));

}

var G__39019 = (__38956 + (1));
__38956 = G__39019;
continue;
} else {
}
break;
}

var c__34734__auto___39020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34735__auto__ = (function (){var switch__34044__auto__ = (function (state_35457){
var state_val_35459 = (state_35457[(1)]);
if((state_val_35459 === (7))){
var inst_35453 = (state_35457[(2)]);
var state_35457__$1 = state_35457;
var statearr_35470_39025 = state_35457__$1;
(statearr_35470_39025[(2)] = inst_35453);

(statearr_35470_39025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (1))){
var state_35457__$1 = state_35457;
var statearr_35472_39026 = state_35457__$1;
(statearr_35472_39026[(2)] = null);

(statearr_35472_39026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (4))){
var inst_35432 = (state_35457[(7)]);
var inst_35432__$1 = (state_35457[(2)]);
var inst_35434 = (inst_35432__$1 == null);
var state_35457__$1 = (function (){var statearr_35473 = state_35457;
(statearr_35473[(7)] = inst_35432__$1);

return statearr_35473;
})();
if(cljs.core.truth_(inst_35434)){
var statearr_35475_39029 = state_35457__$1;
(statearr_35475_39029[(1)] = (5));

} else {
var statearr_35477_39030 = state_35457__$1;
(statearr_35477_39030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (6))){
var inst_35432 = (state_35457[(7)]);
var inst_35438 = (state_35457[(8)]);
var inst_35438__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_35441 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35445 = [inst_35432,inst_35438__$1];
var inst_35446 = (new cljs.core.PersistentVector(null,2,(5),inst_35441,inst_35445,null));
var state_35457__$1 = (function (){var statearr_35481 = state_35457;
(statearr_35481[(8)] = inst_35438__$1);

return statearr_35481;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35457__$1,(8),jobs,inst_35446);
} else {
if((state_val_35459 === (3))){
var inst_35455 = (state_35457[(2)]);
var state_35457__$1 = state_35457;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35457__$1,inst_35455);
} else {
if((state_val_35459 === (2))){
var state_35457__$1 = state_35457;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35457__$1,(4),from);
} else {
if((state_val_35459 === (9))){
var inst_35450 = (state_35457[(2)]);
var state_35457__$1 = (function (){var statearr_35483 = state_35457;
(statearr_35483[(9)] = inst_35450);

return statearr_35483;
})();
var statearr_35484_39032 = state_35457__$1;
(statearr_35484_39032[(2)] = null);

(statearr_35484_39032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (5))){
var inst_35436 = cljs.core.async.close_BANG_(jobs);
var state_35457__$1 = state_35457;
var statearr_35485_39033 = state_35457__$1;
(statearr_35485_39033[(2)] = inst_35436);

(statearr_35485_39033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35459 === (8))){
var inst_35438 = (state_35457[(8)]);
var inst_35448 = (state_35457[(2)]);
var state_35457__$1 = (function (){var statearr_35487 = state_35457;
(statearr_35487[(10)] = inst_35448);

return statearr_35487;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35457__$1,(9),results,inst_35438);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____0 = (function (){
var statearr_35488 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35488[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__);

(statearr_35488[(1)] = (1));

return statearr_35488;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____1 = (function (state_35457){
while(true){
var ret_value__34046__auto__ = (function (){try{while(true){
var result__34047__auto__ = switch__34044__auto__(state_35457);
if(cljs.core.keyword_identical_QMARK_(result__34047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34047__auto__;
}
break;
}
}catch (e35490){var ex__34048__auto__ = e35490;
var statearr_35491_39038 = state_35457;
(statearr_35491_39038[(2)] = ex__34048__auto__);


if(cljs.core.seq((state_35457[(4)]))){
var statearr_35492_39039 = state_35457;
(statearr_35492_39039[(1)] = cljs.core.first((state_35457[(4)])));

} else {
throw ex__34048__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39044 = state_35457;
state_35457 = G__39044;
continue;
} else {
return ret_value__34046__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__ = function(state_35457){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____1.call(this,state_35457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__;
})()
})();
var state__34736__auto__ = (function (){var statearr_35493 = f__34735__auto__();
(statearr_35493[(6)] = c__34734__auto___39020);

return statearr_35493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34736__auto__);
}));


var c__34734__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34735__auto__ = (function (){var switch__34044__auto__ = (function (state_35546){
var state_val_35547 = (state_35546[(1)]);
if((state_val_35547 === (7))){
var inst_35542 = (state_35546[(2)]);
var state_35546__$1 = state_35546;
var statearr_35548_39047 = state_35546__$1;
(statearr_35548_39047[(2)] = inst_35542);

(statearr_35548_39047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (20))){
var state_35546__$1 = state_35546;
var statearr_35549_39050 = state_35546__$1;
(statearr_35549_39050[(2)] = null);

(statearr_35549_39050[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (1))){
var state_35546__$1 = state_35546;
var statearr_35552_39051 = state_35546__$1;
(statearr_35552_39051[(2)] = null);

(statearr_35552_39051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (4))){
var inst_35501 = (state_35546[(7)]);
var inst_35501__$1 = (state_35546[(2)]);
var inst_35503 = (inst_35501__$1 == null);
var state_35546__$1 = (function (){var statearr_35553 = state_35546;
(statearr_35553[(7)] = inst_35501__$1);

return statearr_35553;
})();
if(cljs.core.truth_(inst_35503)){
var statearr_35554_39052 = state_35546__$1;
(statearr_35554_39052[(1)] = (5));

} else {
var statearr_35555_39053 = state_35546__$1;
(statearr_35555_39053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (15))){
var inst_35522 = (state_35546[(8)]);
var state_35546__$1 = state_35546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35546__$1,(18),to,inst_35522);
} else {
if((state_val_35547 === (21))){
var inst_35537 = (state_35546[(2)]);
var state_35546__$1 = state_35546;
var statearr_35561_39054 = state_35546__$1;
(statearr_35561_39054[(2)] = inst_35537);

(statearr_35561_39054[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (13))){
var inst_35539 = (state_35546[(2)]);
var state_35546__$1 = (function (){var statearr_35562 = state_35546;
(statearr_35562[(9)] = inst_35539);

return statearr_35562;
})();
var statearr_35563_39055 = state_35546__$1;
(statearr_35563_39055[(2)] = null);

(statearr_35563_39055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (6))){
var inst_35501 = (state_35546[(7)]);
var state_35546__$1 = state_35546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35546__$1,(11),inst_35501);
} else {
if((state_val_35547 === (17))){
var inst_35532 = (state_35546[(2)]);
var state_35546__$1 = state_35546;
if(cljs.core.truth_(inst_35532)){
var statearr_35570_39061 = state_35546__$1;
(statearr_35570_39061[(1)] = (19));

} else {
var statearr_35571_39062 = state_35546__$1;
(statearr_35571_39062[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (3))){
var inst_35544 = (state_35546[(2)]);
var state_35546__$1 = state_35546;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35546__$1,inst_35544);
} else {
if((state_val_35547 === (12))){
var inst_35517 = (state_35546[(10)]);
var state_35546__$1 = state_35546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35546__$1,(14),inst_35517);
} else {
if((state_val_35547 === (2))){
var state_35546__$1 = state_35546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35546__$1,(4),results);
} else {
if((state_val_35547 === (19))){
var state_35546__$1 = state_35546;
var statearr_35582_39063 = state_35546__$1;
(statearr_35582_39063[(2)] = null);

(statearr_35582_39063[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (11))){
var inst_35517 = (state_35546[(2)]);
var state_35546__$1 = (function (){var statearr_35583 = state_35546;
(statearr_35583[(10)] = inst_35517);

return statearr_35583;
})();
var statearr_35584_39064 = state_35546__$1;
(statearr_35584_39064[(2)] = null);

(statearr_35584_39064[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (9))){
var state_35546__$1 = state_35546;
var statearr_35585_39068 = state_35546__$1;
(statearr_35585_39068[(2)] = null);

(statearr_35585_39068[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (5))){
var state_35546__$1 = state_35546;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35586_39069 = state_35546__$1;
(statearr_35586_39069[(1)] = (8));

} else {
var statearr_35588_39070 = state_35546__$1;
(statearr_35588_39070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (14))){
var inst_35526 = (state_35546[(11)]);
var inst_35522 = (state_35546[(8)]);
var inst_35522__$1 = (state_35546[(2)]);
var inst_35525 = (inst_35522__$1 == null);
var inst_35526__$1 = cljs.core.not(inst_35525);
var state_35546__$1 = (function (){var statearr_35602 = state_35546;
(statearr_35602[(11)] = inst_35526__$1);

(statearr_35602[(8)] = inst_35522__$1);

return statearr_35602;
})();
if(inst_35526__$1){
var statearr_35603_39072 = state_35546__$1;
(statearr_35603_39072[(1)] = (15));

} else {
var statearr_35604_39073 = state_35546__$1;
(statearr_35604_39073[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (16))){
var inst_35526 = (state_35546[(11)]);
var state_35546__$1 = state_35546;
var statearr_35605_39074 = state_35546__$1;
(statearr_35605_39074[(2)] = inst_35526);

(statearr_35605_39074[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (10))){
var inst_35514 = (state_35546[(2)]);
var state_35546__$1 = state_35546;
var statearr_35607_39078 = state_35546__$1;
(statearr_35607_39078[(2)] = inst_35514);

(statearr_35607_39078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (18))){
var inst_35529 = (state_35546[(2)]);
var state_35546__$1 = state_35546;
var statearr_35608_39079 = state_35546__$1;
(statearr_35608_39079[(2)] = inst_35529);

(statearr_35608_39079[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (8))){
var inst_35510 = cljs.core.async.close_BANG_(to);
var state_35546__$1 = state_35546;
var statearr_35610_39080 = state_35546__$1;
(statearr_35610_39080[(2)] = inst_35510);

(statearr_35610_39080[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____0 = (function (){
var statearr_35615 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35615[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__);

(statearr_35615[(1)] = (1));

return statearr_35615;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____1 = (function (state_35546){
while(true){
var ret_value__34046__auto__ = (function (){try{while(true){
var result__34047__auto__ = switch__34044__auto__(state_35546);
if(cljs.core.keyword_identical_QMARK_(result__34047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34047__auto__;
}
break;
}
}catch (e35617){var ex__34048__auto__ = e35617;
var statearr_35618_39081 = state_35546;
(statearr_35618_39081[(2)] = ex__34048__auto__);


if(cljs.core.seq((state_35546[(4)]))){
var statearr_35620_39082 = state_35546;
(statearr_35620_39082[(1)] = cljs.core.first((state_35546[(4)])));

} else {
throw ex__34048__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39083 = state_35546;
state_35546 = G__39083;
continue;
} else {
return ret_value__34046__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__ = function(state_35546){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____1.call(this,state_35546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34045__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34045__auto__;
})()
})();
var state__34736__auto__ = (function (){var statearr_35624 = f__34735__auto__();
(statearr_35624[(6)] = c__34734__auto__);

return statearr_35624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34736__auto__);
}));

return c__34734__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__35630 = arguments.length;
switch (G__35630) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__35642 = arguments.length;
switch (G__35642) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__35646 = arguments.length;
switch (G__35646) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__34734__auto___39092 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34735__auto__ = (function (){var switch__34044__auto__ = (function (state_35685){
var state_val_35686 = (state_35685[(1)]);
if((state_val_35686 === (7))){
var inst_35681 = (state_35685[(2)]);
var state_35685__$1 = state_35685;
var statearr_35689_39093 = state_35685__$1;
(statearr_35689_39093[(2)] = inst_35681);

(statearr_35689_39093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (1))){
var state_35685__$1 = state_35685;
var statearr_35690_39094 = state_35685__$1;
(statearr_35690_39094[(2)] = null);

(statearr_35690_39094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (4))){
var inst_35662 = (state_35685[(7)]);
var inst_35662__$1 = (state_35685[(2)]);
var inst_35663 = (inst_35662__$1 == null);
var state_35685__$1 = (function (){var statearr_35691 = state_35685;
(statearr_35691[(7)] = inst_35662__$1);

return statearr_35691;
})();
if(cljs.core.truth_(inst_35663)){
var statearr_35692_39103 = state_35685__$1;
(statearr_35692_39103[(1)] = (5));

} else {
var statearr_35693_39104 = state_35685__$1;
(statearr_35693_39104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (13))){
var state_35685__$1 = state_35685;
var statearr_35694_39105 = state_35685__$1;
(statearr_35694_39105[(2)] = null);

(statearr_35694_39105[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (6))){
var inst_35662 = (state_35685[(7)]);
var inst_35668 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35662) : p.call(null,inst_35662));
var state_35685__$1 = state_35685;
if(cljs.core.truth_(inst_35668)){
var statearr_35696_39111 = state_35685__$1;
(statearr_35696_39111[(1)] = (9));

} else {
var statearr_35697_39116 = state_35685__$1;
(statearr_35697_39116[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (3))){
var inst_35683 = (state_35685[(2)]);
var state_35685__$1 = state_35685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35685__$1,inst_35683);
} else {
if((state_val_35686 === (12))){
var state_35685__$1 = state_35685;
var statearr_35703_39117 = state_35685__$1;
(statearr_35703_39117[(2)] = null);

(statearr_35703_39117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (2))){
var state_35685__$1 = state_35685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35685__$1,(4),ch);
} else {
if((state_val_35686 === (11))){
var inst_35662 = (state_35685[(7)]);
var inst_35672 = (state_35685[(2)]);
var state_35685__$1 = state_35685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35685__$1,(8),inst_35672,inst_35662);
} else {
if((state_val_35686 === (9))){
var state_35685__$1 = state_35685;
var statearr_35708_39122 = state_35685__$1;
(statearr_35708_39122[(2)] = tc);

(statearr_35708_39122[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (5))){
var inst_35665 = cljs.core.async.close_BANG_(tc);
var inst_35666 = cljs.core.async.close_BANG_(fc);
var state_35685__$1 = (function (){var statearr_35711 = state_35685;
(statearr_35711[(8)] = inst_35665);

return statearr_35711;
})();
var statearr_35717_39123 = state_35685__$1;
(statearr_35717_39123[(2)] = inst_35666);

(statearr_35717_39123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (14))){
var inst_35679 = (state_35685[(2)]);
var state_35685__$1 = state_35685;
var statearr_35722_39127 = state_35685__$1;
(statearr_35722_39127[(2)] = inst_35679);

(statearr_35722_39127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (10))){
var state_35685__$1 = state_35685;
var statearr_35729_39128 = state_35685__$1;
(statearr_35729_39128[(2)] = fc);

(statearr_35729_39128[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (8))){
var inst_35674 = (state_35685[(2)]);
var state_35685__$1 = state_35685;
if(cljs.core.truth_(inst_35674)){
var statearr_35730_39129 = state_35685__$1;
(statearr_35730_39129[(1)] = (12));

} else {
var statearr_35731_39130 = state_35685__$1;
(statearr_35731_39130[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__34045__auto__ = null;
var cljs$core$async$state_machine__34045__auto____0 = (function (){
var statearr_35736 = [null,null,null,null,null,null,null,null,null];
(statearr_35736[(0)] = cljs$core$async$state_machine__34045__auto__);

(statearr_35736[(1)] = (1));

return statearr_35736;
});
var cljs$core$async$state_machine__34045__auto____1 = (function (state_35685){
while(true){
var ret_value__34046__auto__ = (function (){try{while(true){
var result__34047__auto__ = switch__34044__auto__(state_35685);
if(cljs.core.keyword_identical_QMARK_(result__34047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34047__auto__;
}
break;
}
}catch (e35738){var ex__34048__auto__ = e35738;
var statearr_35739_39131 = state_35685;
(statearr_35739_39131[(2)] = ex__34048__auto__);


if(cljs.core.seq((state_35685[(4)]))){
var statearr_35740_39133 = state_35685;
(statearr_35740_39133[(1)] = cljs.core.first((state_35685[(4)])));

} else {
throw ex__34048__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39137 = state_35685;
state_35685 = G__39137;
continue;
} else {
return ret_value__34046__auto__;
}
break;
}
});
cljs$core$async$state_machine__34045__auto__ = function(state_35685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34045__auto____1.call(this,state_35685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34045__auto____0;
cljs$core$async$state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34045__auto____1;
return cljs$core$async$state_machine__34045__auto__;
})()
})();
var state__34736__auto__ = (function (){var statearr_35745 = f__34735__auto__();
(statearr_35745[(6)] = c__34734__auto___39092);

return statearr_35745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34736__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34734__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34735__auto__ = (function (){var switch__34044__auto__ = (function (state_35777){
var state_val_35778 = (state_35777[(1)]);
if((state_val_35778 === (7))){
var inst_35772 = (state_35777[(2)]);
var state_35777__$1 = state_35777;
var statearr_35785_39142 = state_35777__$1;
(statearr_35785_39142[(2)] = inst_35772);

(statearr_35785_39142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35778 === (1))){
var inst_35752 = init;
var inst_35753 = inst_35752;
var state_35777__$1 = (function (){var statearr_35790 = state_35777;
(statearr_35790[(7)] = inst_35753);

return statearr_35790;
})();
var statearr_35792_39144 = state_35777__$1;
(statearr_35792_39144[(2)] = null);

(statearr_35792_39144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35778 === (4))){
var inst_35756 = (state_35777[(8)]);
var inst_35756__$1 = (state_35777[(2)]);
var inst_35757 = (inst_35756__$1 == null);
var state_35777__$1 = (function (){var statearr_35797 = state_35777;
(statearr_35797[(8)] = inst_35756__$1);

return statearr_35797;
})();
if(cljs.core.truth_(inst_35757)){
var statearr_35800_39149 = state_35777__$1;
(statearr_35800_39149[(1)] = (5));

} else {
var statearr_35801_39151 = state_35777__$1;
(statearr_35801_39151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35778 === (6))){
var inst_35753 = (state_35777[(7)]);
var inst_35760 = (state_35777[(9)]);
var inst_35756 = (state_35777[(8)]);
var inst_35760__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_35753,inst_35756) : f.call(null,inst_35753,inst_35756));
var inst_35763 = cljs.core.reduced_QMARK_(inst_35760__$1);
var state_35777__$1 = (function (){var statearr_35808 = state_35777;
(statearr_35808[(9)] = inst_35760__$1);

return statearr_35808;
})();
if(inst_35763){
var statearr_35810_39155 = state_35777__$1;
(statearr_35810_39155[(1)] = (8));

} else {
var statearr_35811_39156 = state_35777__$1;
(statearr_35811_39156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35778 === (3))){
var inst_35774 = (state_35777[(2)]);
var state_35777__$1 = state_35777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35777__$1,inst_35774);
} else {
if((state_val_35778 === (2))){
var state_35777__$1 = state_35777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35777__$1,(4),ch);
} else {
if((state_val_35778 === (9))){
var inst_35760 = (state_35777[(9)]);
var inst_35753 = inst_35760;
var state_35777__$1 = (function (){var statearr_35818 = state_35777;
(statearr_35818[(7)] = inst_35753);

return statearr_35818;
})();
var statearr_35825_39157 = state_35777__$1;
(statearr_35825_39157[(2)] = null);

(statearr_35825_39157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35778 === (5))){
var inst_35753 = (state_35777[(7)]);
var state_35777__$1 = state_35777;
var statearr_35834_39158 = state_35777__$1;
(statearr_35834_39158[(2)] = inst_35753);

(statearr_35834_39158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35778 === (10))){
var inst_35770 = (state_35777[(2)]);
var state_35777__$1 = state_35777;
var statearr_35839_39159 = state_35777__$1;
(statearr_35839_39159[(2)] = inst_35770);

(statearr_35839_39159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35778 === (8))){
var inst_35760 = (state_35777[(9)]);
var inst_35766 = cljs.core.deref(inst_35760);
var state_35777__$1 = state_35777;
var statearr_35840_39160 = state_35777__$1;
(statearr_35840_39160[(2)] = inst_35766);

(statearr_35840_39160[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__34045__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34045__auto____0 = (function (){
var statearr_35841 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35841[(0)] = cljs$core$async$reduce_$_state_machine__34045__auto__);

(statearr_35841[(1)] = (1));

return statearr_35841;
});
var cljs$core$async$reduce_$_state_machine__34045__auto____1 = (function (state_35777){
while(true){
var ret_value__34046__auto__ = (function (){try{while(true){
var result__34047__auto__ = switch__34044__auto__(state_35777);
if(cljs.core.keyword_identical_QMARK_(result__34047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34047__auto__;
}
break;
}
}catch (e35844){var ex__34048__auto__ = e35844;
var statearr_35845_39168 = state_35777;
(statearr_35845_39168[(2)] = ex__34048__auto__);


if(cljs.core.seq((state_35777[(4)]))){
var statearr_35847_39169 = state_35777;
(statearr_35847_39169[(1)] = cljs.core.first((state_35777[(4)])));

} else {
throw ex__34048__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39170 = state_35777;
state_35777 = G__39170;
continue;
} else {
return ret_value__34046__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34045__auto__ = function(state_35777){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34045__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34045__auto____1.call(this,state_35777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34045__auto____0;
cljs$core$async$reduce_$_state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34045__auto____1;
return cljs$core$async$reduce_$_state_machine__34045__auto__;
})()
})();
var state__34736__auto__ = (function (){var statearr_35849 = f__34735__auto__();
(statearr_35849[(6)] = c__34734__auto__);

return statearr_35849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34736__auto__);
}));

return c__34734__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34734__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34735__auto__ = (function (){var switch__34044__auto__ = (function (state_35861){
var state_val_35862 = (state_35861[(1)]);
if((state_val_35862 === (1))){
var inst_35856 = cljs.core.async.reduce(f__$1,init,ch);
var state_35861__$1 = state_35861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35861__$1,(2),inst_35856);
} else {
if((state_val_35862 === (2))){
var inst_35858 = (state_35861[(2)]);
var inst_35859 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_35858) : f__$1.call(null,inst_35858));
var state_35861__$1 = state_35861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35861__$1,inst_35859);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34045__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34045__auto____0 = (function (){
var statearr_35875 = [null,null,null,null,null,null,null];
(statearr_35875[(0)] = cljs$core$async$transduce_$_state_machine__34045__auto__);

(statearr_35875[(1)] = (1));

return statearr_35875;
});
var cljs$core$async$transduce_$_state_machine__34045__auto____1 = (function (state_35861){
while(true){
var ret_value__34046__auto__ = (function (){try{while(true){
var result__34047__auto__ = switch__34044__auto__(state_35861);
if(cljs.core.keyword_identical_QMARK_(result__34047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34047__auto__;
}
break;
}
}catch (e35877){var ex__34048__auto__ = e35877;
var statearr_35878_39174 = state_35861;
(statearr_35878_39174[(2)] = ex__34048__auto__);


if(cljs.core.seq((state_35861[(4)]))){
var statearr_35880_39175 = state_35861;
(statearr_35880_39175[(1)] = cljs.core.first((state_35861[(4)])));

} else {
throw ex__34048__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39176 = state_35861;
state_35861 = G__39176;
continue;
} else {
return ret_value__34046__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34045__auto__ = function(state_35861){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34045__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34045__auto____1.call(this,state_35861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34045__auto____0;
cljs$core$async$transduce_$_state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34045__auto____1;
return cljs$core$async$transduce_$_state_machine__34045__auto__;
})()
})();
var state__34736__auto__ = (function (){var statearr_35885 = f__34735__auto__();
(statearr_35885[(6)] = c__34734__auto__);

return statearr_35885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34736__auto__);
}));

return c__34734__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__35894 = arguments.length;
switch (G__35894) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34734__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34735__auto__ = (function (){var switch__34044__auto__ = (function (state_35929){
var state_val_35930 = (state_35929[(1)]);
if((state_val_35930 === (7))){
var inst_35908 = (state_35929[(2)]);
var state_35929__$1 = state_35929;
var statearr_35936_39181 = state_35929__$1;
(statearr_35936_39181[(2)] = inst_35908);

(statearr_35936_39181[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (1))){
var inst_35901 = cljs.core.seq(coll);
var inst_35902 = inst_35901;
var state_35929__$1 = (function (){var statearr_35937 = state_35929;
(statearr_35937[(7)] = inst_35902);

return statearr_35937;
})();
var statearr_35939_39182 = state_35929__$1;
(statearr_35939_39182[(2)] = null);

(statearr_35939_39182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (4))){
var inst_35902 = (state_35929[(7)]);
var inst_35906 = cljs.core.first(inst_35902);
var state_35929__$1 = state_35929;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35929__$1,(7),ch,inst_35906);
} else {
if((state_val_35930 === (13))){
var inst_35922 = (state_35929[(2)]);
var state_35929__$1 = state_35929;
var statearr_35949_39186 = state_35929__$1;
(statearr_35949_39186[(2)] = inst_35922);

(statearr_35949_39186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (6))){
var inst_35911 = (state_35929[(2)]);
var state_35929__$1 = state_35929;
if(cljs.core.truth_(inst_35911)){
var statearr_35951_39187 = state_35929__$1;
(statearr_35951_39187[(1)] = (8));

} else {
var statearr_35952_39188 = state_35929__$1;
(statearr_35952_39188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (3))){
var inst_35927 = (state_35929[(2)]);
var state_35929__$1 = state_35929;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35929__$1,inst_35927);
} else {
if((state_val_35930 === (12))){
var state_35929__$1 = state_35929;
var statearr_35960_39189 = state_35929__$1;
(statearr_35960_39189[(2)] = null);

(statearr_35960_39189[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (2))){
var inst_35902 = (state_35929[(7)]);
var state_35929__$1 = state_35929;
if(cljs.core.truth_(inst_35902)){
var statearr_35966_39190 = state_35929__$1;
(statearr_35966_39190[(1)] = (4));

} else {
var statearr_35967_39191 = state_35929__$1;
(statearr_35967_39191[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (11))){
var inst_35919 = cljs.core.async.close_BANG_(ch);
var state_35929__$1 = state_35929;
var statearr_35972_39192 = state_35929__$1;
(statearr_35972_39192[(2)] = inst_35919);

(statearr_35972_39192[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (9))){
var state_35929__$1 = state_35929;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35976_39193 = state_35929__$1;
(statearr_35976_39193[(1)] = (11));

} else {
var statearr_35979_39194 = state_35929__$1;
(statearr_35979_39194[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (5))){
var inst_35902 = (state_35929[(7)]);
var state_35929__$1 = state_35929;
var statearr_35984_39196 = state_35929__$1;
(statearr_35984_39196[(2)] = inst_35902);

(statearr_35984_39196[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (10))){
var inst_35924 = (state_35929[(2)]);
var state_35929__$1 = state_35929;
var statearr_35987_39198 = state_35929__$1;
(statearr_35987_39198[(2)] = inst_35924);

(statearr_35987_39198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (8))){
var inst_35902 = (state_35929[(7)]);
var inst_35913 = cljs.core.next(inst_35902);
var inst_35902__$1 = inst_35913;
var state_35929__$1 = (function (){var statearr_35989 = state_35929;
(statearr_35989[(7)] = inst_35902__$1);

return statearr_35989;
})();
var statearr_35992_39199 = state_35929__$1;
(statearr_35992_39199[(2)] = null);

(statearr_35992_39199[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__34045__auto__ = null;
var cljs$core$async$state_machine__34045__auto____0 = (function (){
var statearr_35995 = [null,null,null,null,null,null,null,null];
(statearr_35995[(0)] = cljs$core$async$state_machine__34045__auto__);

(statearr_35995[(1)] = (1));

return statearr_35995;
});
var cljs$core$async$state_machine__34045__auto____1 = (function (state_35929){
while(true){
var ret_value__34046__auto__ = (function (){try{while(true){
var result__34047__auto__ = switch__34044__auto__(state_35929);
if(cljs.core.keyword_identical_QMARK_(result__34047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34047__auto__;
}
break;
}
}catch (e35996){var ex__34048__auto__ = e35996;
var statearr_35999_39203 = state_35929;
(statearr_35999_39203[(2)] = ex__34048__auto__);


if(cljs.core.seq((state_35929[(4)]))){
var statearr_36003_39204 = state_35929;
(statearr_36003_39204[(1)] = cljs.core.first((state_35929[(4)])));

} else {
throw ex__34048__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39209 = state_35929;
state_35929 = G__39209;
continue;
} else {
return ret_value__34046__auto__;
}
break;
}
});
cljs$core$async$state_machine__34045__auto__ = function(state_35929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34045__auto____1.call(this,state_35929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34045__auto____0;
cljs$core$async$state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34045__auto____1;
return cljs$core$async$state_machine__34045__auto__;
})()
})();
var state__34736__auto__ = (function (){var statearr_36013 = f__34735__auto__();
(statearr_36013[(6)] = c__34734__auto__);

return statearr_36013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34736__auto__);
}));

return c__34734__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__36029 = arguments.length;
switch (G__36029) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_39215 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_39215(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_39216 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_39216(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_39217 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_39217(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_39219 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_39219(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36114 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36114 = (function (ch,cs,meta36115){
this.ch = ch;
this.cs = cs;
this.meta36115 = meta36115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36116,meta36115__$1){
var self__ = this;
var _36116__$1 = this;
return (new cljs.core.async.t_cljs$core$async36114(self__.ch,self__.cs,meta36115__$1));
}));

(cljs.core.async.t_cljs$core$async36114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36116){
var self__ = this;
var _36116__$1 = this;
return self__.meta36115;
}));

(cljs.core.async.t_cljs$core$async36114.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36114.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36114.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36114.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async36114.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async36114.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async36114.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36115","meta36115",-1046122434,null)], null);
}));

(cljs.core.async.t_cljs$core$async36114.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36114.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36114");

(cljs.core.async.t_cljs$core$async36114.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async36114");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36114.
 */
cljs.core.async.__GT_t_cljs$core$async36114 = (function cljs$core$async$mult_$___GT_t_cljs$core$async36114(ch__$1,cs__$1,meta36115){
return (new cljs.core.async.t_cljs$core$async36114(ch__$1,cs__$1,meta36115));
});

}

return (new cljs.core.async.t_cljs$core$async36114(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__34734__auto___39222 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34735__auto__ = (function (){var switch__34044__auto__ = (function (state_36340){
var state_val_36341 = (state_36340[(1)]);
if((state_val_36341 === (7))){
var inst_36333 = (state_36340[(2)]);
var state_36340__$1 = state_36340;
var statearr_36350_39227 = state_36340__$1;
(statearr_36350_39227[(2)] = inst_36333);

(statearr_36350_39227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (20))){
var inst_36202 = (state_36340[(7)]);
var inst_36218 = cljs.core.first(inst_36202);
var inst_36219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36218,(0),null);
var inst_36220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36218,(1),null);
var state_36340__$1 = (function (){var statearr_36357 = state_36340;
(statearr_36357[(8)] = inst_36219);

return statearr_36357;
})();
if(cljs.core.truth_(inst_36220)){
var statearr_36359_39228 = state_36340__$1;
(statearr_36359_39228[(1)] = (22));

} else {
var statearr_36360_39229 = state_36340__$1;
(statearr_36360_39229[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (27))){
var inst_36254 = (state_36340[(9)]);
var inst_36256 = (state_36340[(10)]);
var inst_36265 = (state_36340[(11)]);
var inst_36154 = (state_36340[(12)]);
var inst_36265__$1 = cljs.core._nth(inst_36254,inst_36256);
var inst_36266 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36265__$1,inst_36154,done);
var state_36340__$1 = (function (){var statearr_36365 = state_36340;
(statearr_36365[(11)] = inst_36265__$1);

return statearr_36365;
})();
if(cljs.core.truth_(inst_36266)){
var statearr_36367_39235 = state_36340__$1;
(statearr_36367_39235[(1)] = (30));

} else {
var statearr_36369_39236 = state_36340__$1;
(statearr_36369_39236[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (1))){
var state_36340__$1 = state_36340;
var statearr_36371_39237 = state_36340__$1;
(statearr_36371_39237[(2)] = null);

(statearr_36371_39237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (24))){
var inst_36202 = (state_36340[(7)]);
var inst_36228 = (state_36340[(2)]);
var inst_36229 = cljs.core.next(inst_36202);
var inst_36169 = inst_36229;
var inst_36170 = null;
var inst_36171 = (0);
var inst_36172 = (0);
var state_36340__$1 = (function (){var statearr_36385 = state_36340;
(statearr_36385[(13)] = inst_36228);

(statearr_36385[(14)] = inst_36172);

(statearr_36385[(15)] = inst_36169);

(statearr_36385[(16)] = inst_36171);

(statearr_36385[(17)] = inst_36170);

return statearr_36385;
})();
var statearr_36386_39241 = state_36340__$1;
(statearr_36386_39241[(2)] = null);

(statearr_36386_39241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (39))){
var state_36340__$1 = state_36340;
var statearr_36394_39242 = state_36340__$1;
(statearr_36394_39242[(2)] = null);

(statearr_36394_39242[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (4))){
var inst_36154 = (state_36340[(12)]);
var inst_36154__$1 = (state_36340[(2)]);
var inst_36156 = (inst_36154__$1 == null);
var state_36340__$1 = (function (){var statearr_36399 = state_36340;
(statearr_36399[(12)] = inst_36154__$1);

return statearr_36399;
})();
if(cljs.core.truth_(inst_36156)){
var statearr_36404_39244 = state_36340__$1;
(statearr_36404_39244[(1)] = (5));

} else {
var statearr_36405_39246 = state_36340__$1;
(statearr_36405_39246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (15))){
var inst_36172 = (state_36340[(14)]);
var inst_36169 = (state_36340[(15)]);
var inst_36171 = (state_36340[(16)]);
var inst_36170 = (state_36340[(17)]);
var inst_36197 = (state_36340[(2)]);
var inst_36198 = (inst_36172 + (1));
var tmp36387 = inst_36169;
var tmp36388 = inst_36171;
var tmp36389 = inst_36170;
var inst_36169__$1 = tmp36387;
var inst_36170__$1 = tmp36389;
var inst_36171__$1 = tmp36388;
var inst_36172__$1 = inst_36198;
var state_36340__$1 = (function (){var statearr_36414 = state_36340;
(statearr_36414[(14)] = inst_36172__$1);

(statearr_36414[(15)] = inst_36169__$1);

(statearr_36414[(16)] = inst_36171__$1);

(statearr_36414[(18)] = inst_36197);

(statearr_36414[(17)] = inst_36170__$1);

return statearr_36414;
})();
var statearr_36415_39251 = state_36340__$1;
(statearr_36415_39251[(2)] = null);

(statearr_36415_39251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (21))){
var inst_36232 = (state_36340[(2)]);
var state_36340__$1 = state_36340;
var statearr_36420_39253 = state_36340__$1;
(statearr_36420_39253[(2)] = inst_36232);

(statearr_36420_39253[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (31))){
var inst_36265 = (state_36340[(11)]);
var inst_36269 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36265);
var state_36340__$1 = state_36340;
var statearr_36421_39259 = state_36340__$1;
(statearr_36421_39259[(2)] = inst_36269);

(statearr_36421_39259[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (32))){
var inst_36254 = (state_36340[(9)]);
var inst_36256 = (state_36340[(10)]);
var inst_36255 = (state_36340[(19)]);
var inst_36253 = (state_36340[(20)]);
var inst_36271 = (state_36340[(2)]);
var inst_36272 = (inst_36256 + (1));
var tmp36417 = inst_36254;
var tmp36418 = inst_36255;
var tmp36419 = inst_36253;
var inst_36253__$1 = tmp36419;
var inst_36254__$1 = tmp36417;
var inst_36255__$1 = tmp36418;
var inst_36256__$1 = inst_36272;
var state_36340__$1 = (function (){var statearr_36422 = state_36340;
(statearr_36422[(9)] = inst_36254__$1);

(statearr_36422[(10)] = inst_36256__$1);

(statearr_36422[(19)] = inst_36255__$1);

(statearr_36422[(21)] = inst_36271);

(statearr_36422[(20)] = inst_36253__$1);

return statearr_36422;
})();
var statearr_36427_39260 = state_36340__$1;
(statearr_36427_39260[(2)] = null);

(statearr_36427_39260[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (40))){
var inst_36296 = (state_36340[(22)]);
var inst_36306 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36296);
var state_36340__$1 = state_36340;
var statearr_36432_39261 = state_36340__$1;
(statearr_36432_39261[(2)] = inst_36306);

(statearr_36432_39261[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (33))){
var inst_36276 = (state_36340[(23)]);
var inst_36280 = cljs.core.chunked_seq_QMARK_(inst_36276);
var state_36340__$1 = state_36340;
if(inst_36280){
var statearr_36433_39262 = state_36340__$1;
(statearr_36433_39262[(1)] = (36));

} else {
var statearr_36434_39263 = state_36340__$1;
(statearr_36434_39263[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (13))){
var inst_36191 = (state_36340[(24)]);
var inst_36194 = cljs.core.async.close_BANG_(inst_36191);
var state_36340__$1 = state_36340;
var statearr_36435_39264 = state_36340__$1;
(statearr_36435_39264[(2)] = inst_36194);

(statearr_36435_39264[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (22))){
var inst_36219 = (state_36340[(8)]);
var inst_36225 = cljs.core.async.close_BANG_(inst_36219);
var state_36340__$1 = state_36340;
var statearr_36444_39265 = state_36340__$1;
(statearr_36444_39265[(2)] = inst_36225);

(statearr_36444_39265[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (36))){
var inst_36276 = (state_36340[(23)]);
var inst_36289 = cljs.core.chunk_first(inst_36276);
var inst_36290 = cljs.core.chunk_rest(inst_36276);
var inst_36291 = cljs.core.count(inst_36289);
var inst_36253 = inst_36290;
var inst_36254 = inst_36289;
var inst_36255 = inst_36291;
var inst_36256 = (0);
var state_36340__$1 = (function (){var statearr_36450 = state_36340;
(statearr_36450[(9)] = inst_36254);

(statearr_36450[(10)] = inst_36256);

(statearr_36450[(19)] = inst_36255);

(statearr_36450[(20)] = inst_36253);

return statearr_36450;
})();
var statearr_36451_39267 = state_36340__$1;
(statearr_36451_39267[(2)] = null);

(statearr_36451_39267[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (41))){
var inst_36276 = (state_36340[(23)]);
var inst_36308 = (state_36340[(2)]);
var inst_36310 = cljs.core.next(inst_36276);
var inst_36253 = inst_36310;
var inst_36254 = null;
var inst_36255 = (0);
var inst_36256 = (0);
var state_36340__$1 = (function (){var statearr_36456 = state_36340;
(statearr_36456[(9)] = inst_36254);

(statearr_36456[(10)] = inst_36256);

(statearr_36456[(19)] = inst_36255);

(statearr_36456[(20)] = inst_36253);

(statearr_36456[(25)] = inst_36308);

return statearr_36456;
})();
var statearr_36459_39273 = state_36340__$1;
(statearr_36459_39273[(2)] = null);

(statearr_36459_39273[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (43))){
var state_36340__$1 = state_36340;
var statearr_36461_39275 = state_36340__$1;
(statearr_36461_39275[(2)] = null);

(statearr_36461_39275[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (29))){
var inst_36320 = (state_36340[(2)]);
var state_36340__$1 = state_36340;
var statearr_36466_39283 = state_36340__$1;
(statearr_36466_39283[(2)] = inst_36320);

(statearr_36466_39283[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (44))){
var inst_36330 = (state_36340[(2)]);
var state_36340__$1 = (function (){var statearr_36467 = state_36340;
(statearr_36467[(26)] = inst_36330);

return statearr_36467;
})();
var statearr_36469_39285 = state_36340__$1;
(statearr_36469_39285[(2)] = null);

(statearr_36469_39285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (6))){
var inst_36245 = (state_36340[(27)]);
var inst_36244 = cljs.core.deref(cs);
var inst_36245__$1 = cljs.core.keys(inst_36244);
var inst_36246 = cljs.core.count(inst_36245__$1);
var inst_36247 = cljs.core.reset_BANG_(dctr,inst_36246);
var inst_36252 = cljs.core.seq(inst_36245__$1);
var inst_36253 = inst_36252;
var inst_36254 = null;
var inst_36255 = (0);
var inst_36256 = (0);
var state_36340__$1 = (function (){var statearr_36476 = state_36340;
(statearr_36476[(9)] = inst_36254);

(statearr_36476[(28)] = inst_36247);

(statearr_36476[(10)] = inst_36256);

(statearr_36476[(19)] = inst_36255);

(statearr_36476[(20)] = inst_36253);

(statearr_36476[(27)] = inst_36245__$1);

return statearr_36476;
})();
var statearr_36479_39289 = state_36340__$1;
(statearr_36479_39289[(2)] = null);

(statearr_36479_39289[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (28))){
var inst_36253 = (state_36340[(20)]);
var inst_36276 = (state_36340[(23)]);
var inst_36276__$1 = cljs.core.seq(inst_36253);
var state_36340__$1 = (function (){var statearr_36481 = state_36340;
(statearr_36481[(23)] = inst_36276__$1);

return statearr_36481;
})();
if(inst_36276__$1){
var statearr_36487_39292 = state_36340__$1;
(statearr_36487_39292[(1)] = (33));

} else {
var statearr_36488_39293 = state_36340__$1;
(statearr_36488_39293[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (25))){
var inst_36256 = (state_36340[(10)]);
var inst_36255 = (state_36340[(19)]);
var inst_36260 = (inst_36256 < inst_36255);
var inst_36261 = inst_36260;
var state_36340__$1 = state_36340;
if(cljs.core.truth_(inst_36261)){
var statearr_36493_39299 = state_36340__$1;
(statearr_36493_39299[(1)] = (27));

} else {
var statearr_36494_39300 = state_36340__$1;
(statearr_36494_39300[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (34))){
var state_36340__$1 = state_36340;
var statearr_36497_39301 = state_36340__$1;
(statearr_36497_39301[(2)] = null);

(statearr_36497_39301[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (17))){
var state_36340__$1 = state_36340;
var statearr_36498_39302 = state_36340__$1;
(statearr_36498_39302[(2)] = null);

(statearr_36498_39302[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (3))){
var inst_36335 = (state_36340[(2)]);
var state_36340__$1 = state_36340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36340__$1,inst_36335);
} else {
if((state_val_36341 === (12))){
var inst_36237 = (state_36340[(2)]);
var state_36340__$1 = state_36340;
var statearr_36503_39307 = state_36340__$1;
(statearr_36503_39307[(2)] = inst_36237);

(statearr_36503_39307[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (2))){
var state_36340__$1 = state_36340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36340__$1,(4),ch);
} else {
if((state_val_36341 === (23))){
var state_36340__$1 = state_36340;
var statearr_36511_39312 = state_36340__$1;
(statearr_36511_39312[(2)] = null);

(statearr_36511_39312[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (35))){
var inst_36318 = (state_36340[(2)]);
var state_36340__$1 = state_36340;
var statearr_36513_39317 = state_36340__$1;
(statearr_36513_39317[(2)] = inst_36318);

(statearr_36513_39317[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (19))){
var inst_36202 = (state_36340[(7)]);
var inst_36209 = cljs.core.chunk_first(inst_36202);
var inst_36210 = cljs.core.chunk_rest(inst_36202);
var inst_36211 = cljs.core.count(inst_36209);
var inst_36169 = inst_36210;
var inst_36170 = inst_36209;
var inst_36171 = inst_36211;
var inst_36172 = (0);
var state_36340__$1 = (function (){var statearr_36519 = state_36340;
(statearr_36519[(14)] = inst_36172);

(statearr_36519[(15)] = inst_36169);

(statearr_36519[(16)] = inst_36171);

(statearr_36519[(17)] = inst_36170);

return statearr_36519;
})();
var statearr_36521_39325 = state_36340__$1;
(statearr_36521_39325[(2)] = null);

(statearr_36521_39325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (11))){
var inst_36169 = (state_36340[(15)]);
var inst_36202 = (state_36340[(7)]);
var inst_36202__$1 = cljs.core.seq(inst_36169);
var state_36340__$1 = (function (){var statearr_36526 = state_36340;
(statearr_36526[(7)] = inst_36202__$1);

return statearr_36526;
})();
if(inst_36202__$1){
var statearr_36527_39326 = state_36340__$1;
(statearr_36527_39326[(1)] = (16));

} else {
var statearr_36528_39327 = state_36340__$1;
(statearr_36528_39327[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (9))){
var inst_36239 = (state_36340[(2)]);
var state_36340__$1 = state_36340;
var statearr_36529_39329 = state_36340__$1;
(statearr_36529_39329[(2)] = inst_36239);

(statearr_36529_39329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (5))){
var inst_36167 = cljs.core.deref(cs);
var inst_36168 = cljs.core.seq(inst_36167);
var inst_36169 = inst_36168;
var inst_36170 = null;
var inst_36171 = (0);
var inst_36172 = (0);
var state_36340__$1 = (function (){var statearr_36533 = state_36340;
(statearr_36533[(14)] = inst_36172);

(statearr_36533[(15)] = inst_36169);

(statearr_36533[(16)] = inst_36171);

(statearr_36533[(17)] = inst_36170);

return statearr_36533;
})();
var statearr_36534_39334 = state_36340__$1;
(statearr_36534_39334[(2)] = null);

(statearr_36534_39334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (14))){
var state_36340__$1 = state_36340;
var statearr_36535_39335 = state_36340__$1;
(statearr_36535_39335[(2)] = null);

(statearr_36535_39335[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (45))){
var inst_36327 = (state_36340[(2)]);
var state_36340__$1 = state_36340;
var statearr_36537_39339 = state_36340__$1;
(statearr_36537_39339[(2)] = inst_36327);

(statearr_36537_39339[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (26))){
var inst_36245 = (state_36340[(27)]);
var inst_36322 = (state_36340[(2)]);
var inst_36323 = cljs.core.seq(inst_36245);
var state_36340__$1 = (function (){var statearr_36543 = state_36340;
(statearr_36543[(29)] = inst_36322);

return statearr_36543;
})();
if(inst_36323){
var statearr_36544_39340 = state_36340__$1;
(statearr_36544_39340[(1)] = (42));

} else {
var statearr_36545_39341 = state_36340__$1;
(statearr_36545_39341[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (16))){
var inst_36202 = (state_36340[(7)]);
var inst_36206 = cljs.core.chunked_seq_QMARK_(inst_36202);
var state_36340__$1 = state_36340;
if(inst_36206){
var statearr_36550_39342 = state_36340__$1;
(statearr_36550_39342[(1)] = (19));

} else {
var statearr_36551_39343 = state_36340__$1;
(statearr_36551_39343[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (38))){
var inst_36314 = (state_36340[(2)]);
var state_36340__$1 = state_36340;
var statearr_36556_39348 = state_36340__$1;
(statearr_36556_39348[(2)] = inst_36314);

(statearr_36556_39348[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (30))){
var state_36340__$1 = state_36340;
var statearr_36562_39349 = state_36340__$1;
(statearr_36562_39349[(2)] = null);

(statearr_36562_39349[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (10))){
var inst_36172 = (state_36340[(14)]);
var inst_36170 = (state_36340[(17)]);
var inst_36189 = cljs.core._nth(inst_36170,inst_36172);
var inst_36191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36189,(0),null);
var inst_36192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36189,(1),null);
var state_36340__$1 = (function (){var statearr_36563 = state_36340;
(statearr_36563[(24)] = inst_36191);

return statearr_36563;
})();
if(cljs.core.truth_(inst_36192)){
var statearr_36564_39350 = state_36340__$1;
(statearr_36564_39350[(1)] = (13));

} else {
var statearr_36568_39351 = state_36340__$1;
(statearr_36568_39351[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (18))){
var inst_36235 = (state_36340[(2)]);
var state_36340__$1 = state_36340;
var statearr_36570_39352 = state_36340__$1;
(statearr_36570_39352[(2)] = inst_36235);

(statearr_36570_39352[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (42))){
var state_36340__$1 = state_36340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36340__$1,(45),dchan);
} else {
if((state_val_36341 === (37))){
var inst_36276 = (state_36340[(23)]);
var inst_36296 = (state_36340[(22)]);
var inst_36154 = (state_36340[(12)]);
var inst_36296__$1 = cljs.core.first(inst_36276);
var inst_36301 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36296__$1,inst_36154,done);
var state_36340__$1 = (function (){var statearr_36571 = state_36340;
(statearr_36571[(22)] = inst_36296__$1);

return statearr_36571;
})();
if(cljs.core.truth_(inst_36301)){
var statearr_36575_39361 = state_36340__$1;
(statearr_36575_39361[(1)] = (39));

} else {
var statearr_36576_39362 = state_36340__$1;
(statearr_36576_39362[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (8))){
var inst_36172 = (state_36340[(14)]);
var inst_36171 = (state_36340[(16)]);
var inst_36175 = (inst_36172 < inst_36171);
var inst_36176 = inst_36175;
var state_36340__$1 = state_36340;
if(cljs.core.truth_(inst_36176)){
var statearr_36580_39363 = state_36340__$1;
(statearr_36580_39363[(1)] = (10));

} else {
var statearr_36581_39364 = state_36340__$1;
(statearr_36581_39364[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__34045__auto__ = null;
var cljs$core$async$mult_$_state_machine__34045__auto____0 = (function (){
var statearr_36587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36587[(0)] = cljs$core$async$mult_$_state_machine__34045__auto__);

(statearr_36587[(1)] = (1));

return statearr_36587;
});
var cljs$core$async$mult_$_state_machine__34045__auto____1 = (function (state_36340){
while(true){
var ret_value__34046__auto__ = (function (){try{while(true){
var result__34047__auto__ = switch__34044__auto__(state_36340);
if(cljs.core.keyword_identical_QMARK_(result__34047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34047__auto__;
}
break;
}
}catch (e36589){var ex__34048__auto__ = e36589;
var statearr_36590_39366 = state_36340;
(statearr_36590_39366[(2)] = ex__34048__auto__);


if(cljs.core.seq((state_36340[(4)]))){
var statearr_36591_39367 = state_36340;
(statearr_36591_39367[(1)] = cljs.core.first((state_36340[(4)])));

} else {
throw ex__34048__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39369 = state_36340;
state_36340 = G__39369;
continue;
} else {
return ret_value__34046__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34045__auto__ = function(state_36340){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34045__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34045__auto____1.call(this,state_36340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34045__auto____0;
cljs$core$async$mult_$_state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34045__auto____1;
return cljs$core$async$mult_$_state_machine__34045__auto__;
})()
})();
var state__34736__auto__ = (function (){var statearr_36592 = f__34735__auto__();
(statearr_36592[(6)] = c__34734__auto___39222);

return statearr_36592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34736__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__36598 = arguments.length;
switch (G__36598) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_39371 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_39371(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_39373 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_39373(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_39375 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_39375(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_39382 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_39382(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_39383 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_39383(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___39384 = arguments.length;
var i__4865__auto___39385 = (0);
while(true){
if((i__4865__auto___39385 < len__4864__auto___39384)){
args__4870__auto__.push((arguments[i__4865__auto___39385]));

var G__39386 = (i__4865__auto___39385 + (1));
i__4865__auto___39385 = G__39386;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36632){
var map__36633 = p__36632;
var map__36633__$1 = cljs.core.__destructure_map(map__36633);
var opts = map__36633__$1;
var statearr_36634_39387 = state;
(statearr_36634_39387[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_36635_39388 = state;
(statearr_36635_39388[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_36637_39389 = state;
(statearr_36637_39389[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36623){
var G__36624 = cljs.core.first(seq36623);
var seq36623__$1 = cljs.core.next(seq36623);
var G__36625 = cljs.core.first(seq36623__$1);
var seq36623__$2 = cljs.core.next(seq36623__$1);
var G__36626 = cljs.core.first(seq36623__$2);
var seq36623__$3 = cljs.core.next(seq36623__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36624,G__36625,G__36626,seq36623__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36659 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36659 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36660){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta36660 = meta36660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36661,meta36660__$1){
var self__ = this;
var _36661__$1 = this;
return (new cljs.core.async.t_cljs$core$async36659(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36660__$1));
}));

(cljs.core.async.t_cljs$core$async36659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36661){
var self__ = this;
var _36661__$1 = this;
return self__.meta36660;
}));

(cljs.core.async.t_cljs$core$async36659.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36659.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async36659.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36659.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36659.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36659.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36659.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36659.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36660","meta36660",-2060773759,null)], null);
}));

(cljs.core.async.t_cljs$core$async36659.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36659");

(cljs.core.async.t_cljs$core$async36659.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async36659");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36659.
 */
cljs.core.async.__GT_t_cljs$core$async36659 = (function cljs$core$async$mix_$___GT_t_cljs$core$async36659(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36660){
return (new cljs.core.async.t_cljs$core$async36659(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36660));
});

}

return (new cljs.core.async.t_cljs$core$async36659(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34734__auto___39485 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34735__auto__ = (function (){var switch__34044__auto__ = (function (state_36764){
var state_val_36765 = (state_36764[(1)]);
if((state_val_36765 === (7))){
var inst_36715 = (state_36764[(2)]);
var state_36764__$1 = state_36764;
if(cljs.core.truth_(inst_36715)){
var statearr_36770_39495 = state_36764__$1;
(statearr_36770_39495[(1)] = (8));

} else {
var statearr_36771_39499 = state_36764__$1;
(statearr_36771_39499[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (20))){
var inst_36707 = (state_36764[(7)]);
var state_36764__$1 = state_36764;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36764__$1,(23),out,inst_36707);
} else {
if((state_val_36765 === (1))){
var inst_36688 = calc_state();
var inst_36689 = cljs.core.__destructure_map(inst_36688);
var inst_36690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36689,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36689,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36689,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36693 = inst_36688;
var state_36764__$1 = (function (){var statearr_36775 = state_36764;
(statearr_36775[(8)] = inst_36691);

(statearr_36775[(9)] = inst_36693);

(statearr_36775[(10)] = inst_36692);

(statearr_36775[(11)] = inst_36690);

return statearr_36775;
})();
var statearr_36778_39511 = state_36764__$1;
(statearr_36778_39511[(2)] = null);

(statearr_36778_39511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (24))){
var inst_36697 = (state_36764[(12)]);
var inst_36693 = inst_36697;
var state_36764__$1 = (function (){var statearr_36779 = state_36764;
(statearr_36779[(9)] = inst_36693);

return statearr_36779;
})();
var statearr_36780_39517 = state_36764__$1;
(statearr_36780_39517[(2)] = null);

(statearr_36780_39517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (4))){
var inst_36709 = (state_36764[(13)]);
var inst_36707 = (state_36764[(7)]);
var inst_36706 = (state_36764[(2)]);
var inst_36707__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36706,(0),null);
var inst_36708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36706,(1),null);
var inst_36709__$1 = (inst_36707__$1 == null);
var state_36764__$1 = (function (){var statearr_36784 = state_36764;
(statearr_36784[(13)] = inst_36709__$1);

(statearr_36784[(14)] = inst_36708);

(statearr_36784[(7)] = inst_36707__$1);

return statearr_36784;
})();
if(cljs.core.truth_(inst_36709__$1)){
var statearr_36787_39518 = state_36764__$1;
(statearr_36787_39518[(1)] = (5));

} else {
var statearr_36788_39519 = state_36764__$1;
(statearr_36788_39519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (15))){
var inst_36699 = (state_36764[(15)]);
var inst_36733 = (state_36764[(16)]);
var inst_36733__$1 = cljs.core.empty_QMARK_(inst_36699);
var state_36764__$1 = (function (){var statearr_36790 = state_36764;
(statearr_36790[(16)] = inst_36733__$1);

return statearr_36790;
})();
if(inst_36733__$1){
var statearr_36798_39521 = state_36764__$1;
(statearr_36798_39521[(1)] = (17));

} else {
var statearr_36799_39522 = state_36764__$1;
(statearr_36799_39522[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (21))){
var inst_36697 = (state_36764[(12)]);
var inst_36693 = inst_36697;
var state_36764__$1 = (function (){var statearr_36808 = state_36764;
(statearr_36808[(9)] = inst_36693);

return statearr_36808;
})();
var statearr_36817_39526 = state_36764__$1;
(statearr_36817_39526[(2)] = null);

(statearr_36817_39526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (13))){
var inst_36725 = (state_36764[(2)]);
var inst_36726 = calc_state();
var inst_36693 = inst_36726;
var state_36764__$1 = (function (){var statearr_36830 = state_36764;
(statearr_36830[(17)] = inst_36725);

(statearr_36830[(9)] = inst_36693);

return statearr_36830;
})();
var statearr_36833_39528 = state_36764__$1;
(statearr_36833_39528[(2)] = null);

(statearr_36833_39528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (22))){
var inst_36755 = (state_36764[(2)]);
var state_36764__$1 = state_36764;
var statearr_36834_39530 = state_36764__$1;
(statearr_36834_39530[(2)] = inst_36755);

(statearr_36834_39530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (6))){
var inst_36708 = (state_36764[(14)]);
var inst_36712 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36708,change);
var state_36764__$1 = state_36764;
var statearr_36835_39531 = state_36764__$1;
(statearr_36835_39531[(2)] = inst_36712);

(statearr_36835_39531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (25))){
var state_36764__$1 = state_36764;
var statearr_36841_39532 = state_36764__$1;
(statearr_36841_39532[(2)] = null);

(statearr_36841_39532[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (17))){
var inst_36708 = (state_36764[(14)]);
var inst_36700 = (state_36764[(18)]);
var inst_36735 = (inst_36700.cljs$core$IFn$_invoke$arity$1 ? inst_36700.cljs$core$IFn$_invoke$arity$1(inst_36708) : inst_36700.call(null,inst_36708));
var inst_36736 = cljs.core.not(inst_36735);
var state_36764__$1 = state_36764;
var statearr_36847_39534 = state_36764__$1;
(statearr_36847_39534[(2)] = inst_36736);

(statearr_36847_39534[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (3))){
var inst_36759 = (state_36764[(2)]);
var state_36764__$1 = state_36764;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36764__$1,inst_36759);
} else {
if((state_val_36765 === (12))){
var state_36764__$1 = state_36764;
var statearr_36856_39536 = state_36764__$1;
(statearr_36856_39536[(2)] = null);

(statearr_36856_39536[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (2))){
var inst_36697 = (state_36764[(12)]);
var inst_36693 = (state_36764[(9)]);
var inst_36697__$1 = cljs.core.__destructure_map(inst_36693);
var inst_36699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36697__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36697__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36697__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36764__$1 = (function (){var statearr_36862 = state_36764;
(statearr_36862[(12)] = inst_36697__$1);

(statearr_36862[(18)] = inst_36700);

(statearr_36862[(15)] = inst_36699);

return statearr_36862;
})();
return cljs.core.async.ioc_alts_BANG_(state_36764__$1,(4),inst_36701);
} else {
if((state_val_36765 === (23))){
var inst_36744 = (state_36764[(2)]);
var state_36764__$1 = state_36764;
if(cljs.core.truth_(inst_36744)){
var statearr_36864_39538 = state_36764__$1;
(statearr_36864_39538[(1)] = (24));

} else {
var statearr_36866_39539 = state_36764__$1;
(statearr_36866_39539[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (19))){
var inst_36739 = (state_36764[(2)]);
var state_36764__$1 = state_36764;
var statearr_36872_39540 = state_36764__$1;
(statearr_36872_39540[(2)] = inst_36739);

(statearr_36872_39540[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (11))){
var inst_36708 = (state_36764[(14)]);
var inst_36722 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_36708);
var state_36764__$1 = state_36764;
var statearr_36878_39544 = state_36764__$1;
(statearr_36878_39544[(2)] = inst_36722);

(statearr_36878_39544[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (9))){
var inst_36730 = (state_36764[(19)]);
var inst_36708 = (state_36764[(14)]);
var inst_36699 = (state_36764[(15)]);
var inst_36730__$1 = (inst_36699.cljs$core$IFn$_invoke$arity$1 ? inst_36699.cljs$core$IFn$_invoke$arity$1(inst_36708) : inst_36699.call(null,inst_36708));
var state_36764__$1 = (function (){var statearr_36882 = state_36764;
(statearr_36882[(19)] = inst_36730__$1);

return statearr_36882;
})();
if(cljs.core.truth_(inst_36730__$1)){
var statearr_36883_39545 = state_36764__$1;
(statearr_36883_39545[(1)] = (14));

} else {
var statearr_36885_39546 = state_36764__$1;
(statearr_36885_39546[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (5))){
var inst_36709 = (state_36764[(13)]);
var state_36764__$1 = state_36764;
var statearr_36893_39552 = state_36764__$1;
(statearr_36893_39552[(2)] = inst_36709);

(statearr_36893_39552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (14))){
var inst_36730 = (state_36764[(19)]);
var state_36764__$1 = state_36764;
var statearr_36902_39554 = state_36764__$1;
(statearr_36902_39554[(2)] = inst_36730);

(statearr_36902_39554[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (26))){
var inst_36750 = (state_36764[(2)]);
var state_36764__$1 = state_36764;
var statearr_36903_39556 = state_36764__$1;
(statearr_36903_39556[(2)] = inst_36750);

(statearr_36903_39556[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (16))){
var inst_36741 = (state_36764[(2)]);
var state_36764__$1 = state_36764;
if(cljs.core.truth_(inst_36741)){
var statearr_36907_39558 = state_36764__$1;
(statearr_36907_39558[(1)] = (20));

} else {
var statearr_36910_39559 = state_36764__$1;
(statearr_36910_39559[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (10))){
var inst_36757 = (state_36764[(2)]);
var state_36764__$1 = state_36764;
var statearr_36911_39561 = state_36764__$1;
(statearr_36911_39561[(2)] = inst_36757);

(statearr_36911_39561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (18))){
var inst_36733 = (state_36764[(16)]);
var state_36764__$1 = state_36764;
var statearr_36912_39563 = state_36764__$1;
(statearr_36912_39563[(2)] = inst_36733);

(statearr_36912_39563[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (8))){
var inst_36707 = (state_36764[(7)]);
var inst_36720 = (inst_36707 == null);
var state_36764__$1 = state_36764;
if(cljs.core.truth_(inst_36720)){
var statearr_36913_39565 = state_36764__$1;
(statearr_36913_39565[(1)] = (11));

} else {
var statearr_36916_39566 = state_36764__$1;
(statearr_36916_39566[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__34045__auto__ = null;
var cljs$core$async$mix_$_state_machine__34045__auto____0 = (function (){
var statearr_36927 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36927[(0)] = cljs$core$async$mix_$_state_machine__34045__auto__);

(statearr_36927[(1)] = (1));

return statearr_36927;
});
var cljs$core$async$mix_$_state_machine__34045__auto____1 = (function (state_36764){
while(true){
var ret_value__34046__auto__ = (function (){try{while(true){
var result__34047__auto__ = switch__34044__auto__(state_36764);
if(cljs.core.keyword_identical_QMARK_(result__34047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34047__auto__;
}
break;
}
}catch (e36930){var ex__34048__auto__ = e36930;
var statearr_36931_39567 = state_36764;
(statearr_36931_39567[(2)] = ex__34048__auto__);


if(cljs.core.seq((state_36764[(4)]))){
var statearr_36932_39568 = state_36764;
(statearr_36932_39568[(1)] = cljs.core.first((state_36764[(4)])));

} else {
throw ex__34048__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39569 = state_36764;
state_36764 = G__39569;
continue;
} else {
return ret_value__34046__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34045__auto__ = function(state_36764){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34045__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34045__auto____1.call(this,state_36764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34045__auto____0;
cljs$core$async$mix_$_state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34045__auto____1;
return cljs$core$async$mix_$_state_machine__34045__auto__;
})()
})();
var state__34736__auto__ = (function (){var statearr_36936 = f__34735__auto__();
(statearr_36936[(6)] = c__34734__auto___39485);

return statearr_36936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34736__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_39572 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_39572(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_39578 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_39578(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_39584 = (function() {
var G__39585 = null;
var G__39585__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__39585__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__39585 = function(p,v){
switch(arguments.length){
case 1:
return G__39585__1.call(this,p);
case 2:
return G__39585__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39585.cljs$core$IFn$_invoke$arity$1 = G__39585__1;
G__39585.cljs$core$IFn$_invoke$arity$2 = G__39585__2;
return G__39585;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__37022 = arguments.length;
switch (G__37022) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_39584(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_39584(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__37041 = arguments.length;
switch (G__37041) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__37037_SHARP_){
if(cljs.core.truth_((p1__37037_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37037_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37037_SHARP_.call(null,topic)))){
return p1__37037_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37037_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37048 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37048 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37049){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37049 = meta37049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37050,meta37049__$1){
var self__ = this;
var _37050__$1 = this;
return (new cljs.core.async.t_cljs$core$async37048(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37049__$1));
}));

(cljs.core.async.t_cljs$core$async37048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37050){
var self__ = this;
var _37050__$1 = this;
return self__.meta37049;
}));

(cljs.core.async.t_cljs$core$async37048.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37048.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37048.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37048.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async37048.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async37048.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async37048.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async37048.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37049","meta37049",-1144385122,null)], null);
}));

(cljs.core.async.t_cljs$core$async37048.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37048");

(cljs.core.async.t_cljs$core$async37048.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async37048");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37048.
 */
cljs.core.async.__GT_t_cljs$core$async37048 = (function cljs$core$async$__GT_t_cljs$core$async37048(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37049){
return (new cljs.core.async.t_cljs$core$async37048(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37049));
});

}

return (new cljs.core.async.t_cljs$core$async37048(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34734__auto___39626 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34735__auto__ = (function (){var switch__34044__auto__ = (function (state_37205){
var state_val_37206 = (state_37205[(1)]);
if((state_val_37206 === (7))){
var inst_37201 = (state_37205[(2)]);
var state_37205__$1 = state_37205;
var statearr_37213_39627 = state_37205__$1;
(statearr_37213_39627[(2)] = inst_37201);

(statearr_37213_39627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (20))){
var state_37205__$1 = state_37205;
var statearr_37222_39628 = state_37205__$1;
(statearr_37222_39628[(2)] = null);

(statearr_37222_39628[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (1))){
var state_37205__$1 = state_37205;
var statearr_37228_39629 = state_37205__$1;
(statearr_37228_39629[(2)] = null);

(statearr_37228_39629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (24))){
var inst_37184 = (state_37205[(7)]);
var inst_37193 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37184);
var state_37205__$1 = state_37205;
var statearr_37237_39631 = state_37205__$1;
(statearr_37237_39631[(2)] = inst_37193);

(statearr_37237_39631[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (4))){
var inst_37119 = (state_37205[(8)]);
var inst_37119__$1 = (state_37205[(2)]);
var inst_37120 = (inst_37119__$1 == null);
var state_37205__$1 = (function (){var statearr_37240 = state_37205;
(statearr_37240[(8)] = inst_37119__$1);

return statearr_37240;
})();
if(cljs.core.truth_(inst_37120)){
var statearr_37242_39633 = state_37205__$1;
(statearr_37242_39633[(1)] = (5));

} else {
var statearr_37246_39634 = state_37205__$1;
(statearr_37246_39634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (15))){
var inst_37174 = (state_37205[(2)]);
var state_37205__$1 = state_37205;
var statearr_37249_39641 = state_37205__$1;
(statearr_37249_39641[(2)] = inst_37174);

(statearr_37249_39641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (21))){
var inst_37198 = (state_37205[(2)]);
var state_37205__$1 = (function (){var statearr_37254 = state_37205;
(statearr_37254[(9)] = inst_37198);

return statearr_37254;
})();
var statearr_37255_39650 = state_37205__$1;
(statearr_37255_39650[(2)] = null);

(statearr_37255_39650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (13))){
var inst_37156 = (state_37205[(10)]);
var inst_37158 = cljs.core.chunked_seq_QMARK_(inst_37156);
var state_37205__$1 = state_37205;
if(inst_37158){
var statearr_37259_39662 = state_37205__$1;
(statearr_37259_39662[(1)] = (16));

} else {
var statearr_37260_39667 = state_37205__$1;
(statearr_37260_39667[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (22))){
var inst_37190 = (state_37205[(2)]);
var state_37205__$1 = state_37205;
if(cljs.core.truth_(inst_37190)){
var statearr_37264_39669 = state_37205__$1;
(statearr_37264_39669[(1)] = (23));

} else {
var statearr_37265_39670 = state_37205__$1;
(statearr_37265_39670[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (6))){
var inst_37184 = (state_37205[(7)]);
var inst_37186 = (state_37205[(11)]);
var inst_37119 = (state_37205[(8)]);
var inst_37184__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37119) : topic_fn.call(null,inst_37119));
var inst_37185 = cljs.core.deref(mults);
var inst_37186__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37185,inst_37184__$1);
var state_37205__$1 = (function (){var statearr_37267 = state_37205;
(statearr_37267[(7)] = inst_37184__$1);

(statearr_37267[(11)] = inst_37186__$1);

return statearr_37267;
})();
if(cljs.core.truth_(inst_37186__$1)){
var statearr_37268_39673 = state_37205__$1;
(statearr_37268_39673[(1)] = (19));

} else {
var statearr_37269_39675 = state_37205__$1;
(statearr_37269_39675[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (25))){
var inst_37195 = (state_37205[(2)]);
var state_37205__$1 = state_37205;
var statearr_37271_39676 = state_37205__$1;
(statearr_37271_39676[(2)] = inst_37195);

(statearr_37271_39676[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (17))){
var inst_37156 = (state_37205[(10)]);
var inst_37165 = cljs.core.first(inst_37156);
var inst_37166 = cljs.core.async.muxch_STAR_(inst_37165);
var inst_37167 = cljs.core.async.close_BANG_(inst_37166);
var inst_37168 = cljs.core.next(inst_37156);
var inst_37134 = inst_37168;
var inst_37135 = null;
var inst_37136 = (0);
var inst_37137 = (0);
var state_37205__$1 = (function (){var statearr_37272 = state_37205;
(statearr_37272[(12)] = inst_37135);

(statearr_37272[(13)] = inst_37136);

(statearr_37272[(14)] = inst_37134);

(statearr_37272[(15)] = inst_37137);

(statearr_37272[(16)] = inst_37167);

return statearr_37272;
})();
var statearr_37273_39689 = state_37205__$1;
(statearr_37273_39689[(2)] = null);

(statearr_37273_39689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (3))){
var inst_37203 = (state_37205[(2)]);
var state_37205__$1 = state_37205;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37205__$1,inst_37203);
} else {
if((state_val_37206 === (12))){
var inst_37176 = (state_37205[(2)]);
var state_37205__$1 = state_37205;
var statearr_37277_39697 = state_37205__$1;
(statearr_37277_39697[(2)] = inst_37176);

(statearr_37277_39697[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (2))){
var state_37205__$1 = state_37205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37205__$1,(4),ch);
} else {
if((state_val_37206 === (23))){
var state_37205__$1 = state_37205;
var statearr_37279_39709 = state_37205__$1;
(statearr_37279_39709[(2)] = null);

(statearr_37279_39709[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (19))){
var inst_37186 = (state_37205[(11)]);
var inst_37119 = (state_37205[(8)]);
var inst_37188 = cljs.core.async.muxch_STAR_(inst_37186);
var state_37205__$1 = state_37205;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37205__$1,(22),inst_37188,inst_37119);
} else {
if((state_val_37206 === (11))){
var inst_37134 = (state_37205[(14)]);
var inst_37156 = (state_37205[(10)]);
var inst_37156__$1 = cljs.core.seq(inst_37134);
var state_37205__$1 = (function (){var statearr_37284 = state_37205;
(statearr_37284[(10)] = inst_37156__$1);

return statearr_37284;
})();
if(inst_37156__$1){
var statearr_37285_39718 = state_37205__$1;
(statearr_37285_39718[(1)] = (13));

} else {
var statearr_37292_39719 = state_37205__$1;
(statearr_37292_39719[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (9))){
var inst_37181 = (state_37205[(2)]);
var state_37205__$1 = state_37205;
var statearr_37294_39721 = state_37205__$1;
(statearr_37294_39721[(2)] = inst_37181);

(statearr_37294_39721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (5))){
var inst_37131 = cljs.core.deref(mults);
var inst_37132 = cljs.core.vals(inst_37131);
var inst_37133 = cljs.core.seq(inst_37132);
var inst_37134 = inst_37133;
var inst_37135 = null;
var inst_37136 = (0);
var inst_37137 = (0);
var state_37205__$1 = (function (){var statearr_37299 = state_37205;
(statearr_37299[(12)] = inst_37135);

(statearr_37299[(13)] = inst_37136);

(statearr_37299[(14)] = inst_37134);

(statearr_37299[(15)] = inst_37137);

return statearr_37299;
})();
var statearr_37302_39728 = state_37205__$1;
(statearr_37302_39728[(2)] = null);

(statearr_37302_39728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (14))){
var state_37205__$1 = state_37205;
var statearr_37307_39733 = state_37205__$1;
(statearr_37307_39733[(2)] = null);

(statearr_37307_39733[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (16))){
var inst_37156 = (state_37205[(10)]);
var inst_37160 = cljs.core.chunk_first(inst_37156);
var inst_37161 = cljs.core.chunk_rest(inst_37156);
var inst_37162 = cljs.core.count(inst_37160);
var inst_37134 = inst_37161;
var inst_37135 = inst_37160;
var inst_37136 = inst_37162;
var inst_37137 = (0);
var state_37205__$1 = (function (){var statearr_37308 = state_37205;
(statearr_37308[(12)] = inst_37135);

(statearr_37308[(13)] = inst_37136);

(statearr_37308[(14)] = inst_37134);

(statearr_37308[(15)] = inst_37137);

return statearr_37308;
})();
var statearr_37310_39741 = state_37205__$1;
(statearr_37310_39741[(2)] = null);

(statearr_37310_39741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (10))){
var inst_37135 = (state_37205[(12)]);
var inst_37136 = (state_37205[(13)]);
var inst_37134 = (state_37205[(14)]);
var inst_37137 = (state_37205[(15)]);
var inst_37146 = cljs.core._nth(inst_37135,inst_37137);
var inst_37151 = cljs.core.async.muxch_STAR_(inst_37146);
var inst_37152 = cljs.core.async.close_BANG_(inst_37151);
var inst_37153 = (inst_37137 + (1));
var tmp37304 = inst_37135;
var tmp37305 = inst_37136;
var tmp37306 = inst_37134;
var inst_37134__$1 = tmp37306;
var inst_37135__$1 = tmp37304;
var inst_37136__$1 = tmp37305;
var inst_37137__$1 = inst_37153;
var state_37205__$1 = (function (){var statearr_37316 = state_37205;
(statearr_37316[(12)] = inst_37135__$1);

(statearr_37316[(13)] = inst_37136__$1);

(statearr_37316[(14)] = inst_37134__$1);

(statearr_37316[(17)] = inst_37152);

(statearr_37316[(15)] = inst_37137__$1);

return statearr_37316;
})();
var statearr_37317_39742 = state_37205__$1;
(statearr_37317_39742[(2)] = null);

(statearr_37317_39742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (18))){
var inst_37171 = (state_37205[(2)]);
var state_37205__$1 = state_37205;
var statearr_37318_39745 = state_37205__$1;
(statearr_37318_39745[(2)] = inst_37171);

(statearr_37318_39745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (8))){
var inst_37136 = (state_37205[(13)]);
var inst_37137 = (state_37205[(15)]);
var inst_37143 = (inst_37137 < inst_37136);
var inst_37144 = inst_37143;
var state_37205__$1 = state_37205;
if(cljs.core.truth_(inst_37144)){
var statearr_37319_39750 = state_37205__$1;
(statearr_37319_39750[(1)] = (10));

} else {
var statearr_37320_39751 = state_37205__$1;
(statearr_37320_39751[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__34045__auto__ = null;
var cljs$core$async$state_machine__34045__auto____0 = (function (){
var statearr_37325 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37325[(0)] = cljs$core$async$state_machine__34045__auto__);

(statearr_37325[(1)] = (1));

return statearr_37325;
});
var cljs$core$async$state_machine__34045__auto____1 = (function (state_37205){
while(true){
var ret_value__34046__auto__ = (function (){try{while(true){
var result__34047__auto__ = switch__34044__auto__(state_37205);
if(cljs.core.keyword_identical_QMARK_(result__34047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34047__auto__;
}
break;
}
}catch (e37335){var ex__34048__auto__ = e37335;
var statearr_37336_39752 = state_37205;
(statearr_37336_39752[(2)] = ex__34048__auto__);


if(cljs.core.seq((state_37205[(4)]))){
var statearr_37337_39755 = state_37205;
(statearr_37337_39755[(1)] = cljs.core.first((state_37205[(4)])));

} else {
throw ex__34048__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39756 = state_37205;
state_37205 = G__39756;
continue;
} else {
return ret_value__34046__auto__;
}
break;
}
});
cljs$core$async$state_machine__34045__auto__ = function(state_37205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34045__auto____1.call(this,state_37205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34045__auto____0;
cljs$core$async$state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34045__auto____1;
return cljs$core$async$state_machine__34045__auto__;
})()
})();
var state__34736__auto__ = (function (){var statearr_37339 = f__34735__auto__();
(statearr_37339[(6)] = c__34734__auto___39626);

return statearr_37339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34736__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__37343 = arguments.length;
switch (G__37343) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__37354 = arguments.length;
switch (G__37354) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__37357 = arguments.length;
switch (G__37357) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__34734__auto___39761 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34735__auto__ = (function (){var switch__34044__auto__ = (function (state_37415){
var state_val_37416 = (state_37415[(1)]);
if((state_val_37416 === (7))){
var state_37415__$1 = state_37415;
var statearr_37417_39763 = state_37415__$1;
(statearr_37417_39763[(2)] = null);

(statearr_37417_39763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37416 === (1))){
var state_37415__$1 = state_37415;
var statearr_37418_39764 = state_37415__$1;
(statearr_37418_39764[(2)] = null);

(statearr_37418_39764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37416 === (4))){
var inst_37367 = (state_37415[(7)]);
var inst_37368 = (state_37415[(8)]);
var inst_37370 = (inst_37368 < inst_37367);
var state_37415__$1 = state_37415;
if(cljs.core.truth_(inst_37370)){
var statearr_37435_39766 = state_37415__$1;
(statearr_37435_39766[(1)] = (6));

} else {
var statearr_37436_39767 = state_37415__$1;
(statearr_37436_39767[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37416 === (15))){
var inst_37400 = (state_37415[(9)]);
var inst_37405 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_37400);
var state_37415__$1 = state_37415;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37415__$1,(17),out,inst_37405);
} else {
if((state_val_37416 === (13))){
var inst_37400 = (state_37415[(9)]);
var inst_37400__$1 = (state_37415[(2)]);
var inst_37401 = cljs.core.some(cljs.core.nil_QMARK_,inst_37400__$1);
var state_37415__$1 = (function (){var statearr_37446 = state_37415;
(statearr_37446[(9)] = inst_37400__$1);

return statearr_37446;
})();
if(cljs.core.truth_(inst_37401)){
var statearr_37447_39776 = state_37415__$1;
(statearr_37447_39776[(1)] = (14));

} else {
var statearr_37448_39777 = state_37415__$1;
(statearr_37448_39777[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37416 === (6))){
var state_37415__$1 = state_37415;
var statearr_37449_39781 = state_37415__$1;
(statearr_37449_39781[(2)] = null);

(statearr_37449_39781[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37416 === (17))){
var inst_37407 = (state_37415[(2)]);
var state_37415__$1 = (function (){var statearr_37473 = state_37415;
(statearr_37473[(10)] = inst_37407);

return statearr_37473;
})();
var statearr_37474_39782 = state_37415__$1;
(statearr_37474_39782[(2)] = null);

(statearr_37474_39782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37416 === (3))){
var inst_37412 = (state_37415[(2)]);
var state_37415__$1 = state_37415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37415__$1,inst_37412);
} else {
if((state_val_37416 === (12))){
var _ = (function (){var statearr_37475 = state_37415;
(statearr_37475[(4)] = cljs.core.rest((state_37415[(4)])));

return statearr_37475;
})();
var state_37415__$1 = state_37415;
var ex37466 = (state_37415__$1[(2)]);
var statearr_37476_39783 = state_37415__$1;
(statearr_37476_39783[(5)] = ex37466);


if((ex37466 instanceof Object)){
var statearr_37480_39785 = state_37415__$1;
(statearr_37480_39785[(1)] = (11));

(statearr_37480_39785[(5)] = null);

} else {
throw ex37466;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37416 === (2))){
var inst_37366 = cljs.core.reset_BANG_(dctr,cnt);
var inst_37367 = cnt;
var inst_37368 = (0);
var state_37415__$1 = (function (){var statearr_37489 = state_37415;
(statearr_37489[(11)] = inst_37366);

(statearr_37489[(7)] = inst_37367);

(statearr_37489[(8)] = inst_37368);

return statearr_37489;
})();
var statearr_37491_39789 = state_37415__$1;
(statearr_37491_39789[(2)] = null);

(statearr_37491_39789[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37416 === (11))){
var inst_37379 = (state_37415[(2)]);
var inst_37380 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_37415__$1 = (function (){var statearr_37492 = state_37415;
(statearr_37492[(12)] = inst_37379);

return statearr_37492;
})();
var statearr_37493_39790 = state_37415__$1;
(statearr_37493_39790[(2)] = inst_37380);

(statearr_37493_39790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37416 === (9))){
var inst_37368 = (state_37415[(8)]);
var _ = (function (){var statearr_37498 = state_37415;
(statearr_37498[(4)] = cljs.core.cons((12),(state_37415[(4)])));

return statearr_37498;
})();
var inst_37386 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_37368) : chs__$1.call(null,inst_37368));
var inst_37387 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_37368) : done.call(null,inst_37368));
var inst_37388 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_37386,inst_37387);
var ___$1 = (function (){var statearr_37500 = state_37415;
(statearr_37500[(4)] = cljs.core.rest((state_37415[(4)])));

return statearr_37500;
})();
var state_37415__$1 = state_37415;
var statearr_37503_39795 = state_37415__$1;
(statearr_37503_39795[(2)] = inst_37388);

(statearr_37503_39795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37416 === (5))){
var inst_37398 = (state_37415[(2)]);
var state_37415__$1 = (function (){var statearr_37504 = state_37415;
(statearr_37504[(13)] = inst_37398);

return statearr_37504;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37415__$1,(13),dchan);
} else {
if((state_val_37416 === (14))){
var inst_37403 = cljs.core.async.close_BANG_(out);
var state_37415__$1 = state_37415;
var statearr_37505_39800 = state_37415__$1;
(statearr_37505_39800[(2)] = inst_37403);

(statearr_37505_39800[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37416 === (16))){
var inst_37410 = (state_37415[(2)]);
var state_37415__$1 = state_37415;
var statearr_37507_39801 = state_37415__$1;
(statearr_37507_39801[(2)] = inst_37410);

(statearr_37507_39801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37416 === (10))){
var inst_37368 = (state_37415[(8)]);
var inst_37391 = (state_37415[(2)]);
var inst_37392 = (inst_37368 + (1));
var inst_37368__$1 = inst_37392;
var state_37415__$1 = (function (){var statearr_37510 = state_37415;
(statearr_37510[(14)] = inst_37391);

(statearr_37510[(8)] = inst_37368__$1);

return statearr_37510;
})();
var statearr_37511_39807 = state_37415__$1;
(statearr_37511_39807[(2)] = null);

(statearr_37511_39807[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37416 === (8))){
var inst_37396 = (state_37415[(2)]);
var state_37415__$1 = state_37415;
var statearr_37521_39809 = state_37415__$1;
(statearr_37521_39809[(2)] = inst_37396);

(statearr_37521_39809[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__34045__auto__ = null;
var cljs$core$async$state_machine__34045__auto____0 = (function (){
var statearr_37525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37525[(0)] = cljs$core$async$state_machine__34045__auto__);

(statearr_37525[(1)] = (1));

return statearr_37525;
});
var cljs$core$async$state_machine__34045__auto____1 = (function (state_37415){
while(true){
var ret_value__34046__auto__ = (function (){try{while(true){
var result__34047__auto__ = switch__34044__auto__(state_37415);
if(cljs.core.keyword_identical_QMARK_(result__34047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34047__auto__;
}
break;
}
}catch (e37530){var ex__34048__auto__ = e37530;
var statearr_37531_39810 = state_37415;
(statearr_37531_39810[(2)] = ex__34048__auto__);


if(cljs.core.seq((state_37415[(4)]))){
var statearr_37533_39813 = state_37415;
(statearr_37533_39813[(1)] = cljs.core.first((state_37415[(4)])));

} else {
throw ex__34048__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39814 = state_37415;
state_37415 = G__39814;
continue;
} else {
return ret_value__34046__auto__;
}
break;
}
});
cljs$core$async$state_machine__34045__auto__ = function(state_37415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34045__auto____1.call(this,state_37415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34045__auto____0;
cljs$core$async$state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34045__auto____1;
return cljs$core$async$state_machine__34045__auto__;
})()
})();
var state__34736__auto__ = (function (){var statearr_37537 = f__34735__auto__();
(statearr_37537[(6)] = c__34734__auto___39761);

return statearr_37537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34736__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__37544 = arguments.length;
switch (G__37544) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34734__auto___39823 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34735__auto__ = (function (){var switch__34044__auto__ = (function (state_37587){
var state_val_37588 = (state_37587[(1)]);
if((state_val_37588 === (7))){
var inst_37560 = (state_37587[(7)]);
var inst_37559 = (state_37587[(8)]);
var inst_37559__$1 = (state_37587[(2)]);
var inst_37560__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37559__$1,(0),null);
var inst_37563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37559__$1,(1),null);
var inst_37565 = (inst_37560__$1 == null);
var state_37587__$1 = (function (){var statearr_37596 = state_37587;
(statearr_37596[(9)] = inst_37563);

(statearr_37596[(7)] = inst_37560__$1);

(statearr_37596[(8)] = inst_37559__$1);

return statearr_37596;
})();
if(cljs.core.truth_(inst_37565)){
var statearr_37598_39827 = state_37587__$1;
(statearr_37598_39827[(1)] = (8));

} else {
var statearr_37599_39828 = state_37587__$1;
(statearr_37599_39828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37588 === (1))){
var inst_37548 = cljs.core.vec(chs);
var inst_37549 = inst_37548;
var state_37587__$1 = (function (){var statearr_37602 = state_37587;
(statearr_37602[(10)] = inst_37549);

return statearr_37602;
})();
var statearr_37607_39829 = state_37587__$1;
(statearr_37607_39829[(2)] = null);

(statearr_37607_39829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37588 === (4))){
var inst_37549 = (state_37587[(10)]);
var state_37587__$1 = state_37587;
return cljs.core.async.ioc_alts_BANG_(state_37587__$1,(7),inst_37549);
} else {
if((state_val_37588 === (6))){
var inst_37583 = (state_37587[(2)]);
var state_37587__$1 = state_37587;
var statearr_37622_39830 = state_37587__$1;
(statearr_37622_39830[(2)] = inst_37583);

(statearr_37622_39830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37588 === (3))){
var inst_37585 = (state_37587[(2)]);
var state_37587__$1 = state_37587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37587__$1,inst_37585);
} else {
if((state_val_37588 === (2))){
var inst_37549 = (state_37587[(10)]);
var inst_37552 = cljs.core.count(inst_37549);
var inst_37553 = (inst_37552 > (0));
var state_37587__$1 = state_37587;
if(cljs.core.truth_(inst_37553)){
var statearr_37643_39831 = state_37587__$1;
(statearr_37643_39831[(1)] = (4));

} else {
var statearr_37644_39832 = state_37587__$1;
(statearr_37644_39832[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37588 === (11))){
var inst_37549 = (state_37587[(10)]);
var inst_37576 = (state_37587[(2)]);
var tmp37630 = inst_37549;
var inst_37549__$1 = tmp37630;
var state_37587__$1 = (function (){var statearr_37649 = state_37587;
(statearr_37649[(10)] = inst_37549__$1);

(statearr_37649[(11)] = inst_37576);

return statearr_37649;
})();
var statearr_37650_39837 = state_37587__$1;
(statearr_37650_39837[(2)] = null);

(statearr_37650_39837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37588 === (9))){
var inst_37560 = (state_37587[(7)]);
var state_37587__$1 = state_37587;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37587__$1,(11),out,inst_37560);
} else {
if((state_val_37588 === (5))){
var inst_37581 = cljs.core.async.close_BANG_(out);
var state_37587__$1 = state_37587;
var statearr_37651_39840 = state_37587__$1;
(statearr_37651_39840[(2)] = inst_37581);

(statearr_37651_39840[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37588 === (10))){
var inst_37579 = (state_37587[(2)]);
var state_37587__$1 = state_37587;
var statearr_37652_39842 = state_37587__$1;
(statearr_37652_39842[(2)] = inst_37579);

(statearr_37652_39842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37588 === (8))){
var inst_37549 = (state_37587[(10)]);
var inst_37563 = (state_37587[(9)]);
var inst_37560 = (state_37587[(7)]);
var inst_37559 = (state_37587[(8)]);
var inst_37571 = (function (){var cs = inst_37549;
var vec__37555 = inst_37559;
var v = inst_37560;
var c = inst_37563;
return (function (p1__37539_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__37539_SHARP_);
});
})();
var inst_37572 = cljs.core.filterv(inst_37571,inst_37549);
var inst_37549__$1 = inst_37572;
var state_37587__$1 = (function (){var statearr_37663 = state_37587;
(statearr_37663[(10)] = inst_37549__$1);

return statearr_37663;
})();
var statearr_37664_39843 = state_37587__$1;
(statearr_37664_39843[(2)] = null);

(statearr_37664_39843[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__34045__auto__ = null;
var cljs$core$async$state_machine__34045__auto____0 = (function (){
var statearr_37668 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37668[(0)] = cljs$core$async$state_machine__34045__auto__);

(statearr_37668[(1)] = (1));

return statearr_37668;
});
var cljs$core$async$state_machine__34045__auto____1 = (function (state_37587){
while(true){
var ret_value__34046__auto__ = (function (){try{while(true){
var result__34047__auto__ = switch__34044__auto__(state_37587);
if(cljs.core.keyword_identical_QMARK_(result__34047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34047__auto__;
}
break;
}
}catch (e37674){var ex__34048__auto__ = e37674;
var statearr_37676_39845 = state_37587;
(statearr_37676_39845[(2)] = ex__34048__auto__);


if(cljs.core.seq((state_37587[(4)]))){
var statearr_37681_39846 = state_37587;
(statearr_37681_39846[(1)] = cljs.core.first((state_37587[(4)])));

} else {
throw ex__34048__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39848 = state_37587;
state_37587 = G__39848;
continue;
} else {
return ret_value__34046__auto__;
}
break;
}
});
cljs$core$async$state_machine__34045__auto__ = function(state_37587){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34045__auto____1.call(this,state_37587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34045__auto____0;
cljs$core$async$state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34045__auto____1;
return cljs$core$async$state_machine__34045__auto__;
})()
})();
var state__34736__auto__ = (function (){var statearr_37686 = f__34735__auto__();
(statearr_37686[(6)] = c__34734__auto___39823);

return statearr_37686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34736__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__37695 = arguments.length;
switch (G__37695) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34734__auto___39853 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34735__auto__ = (function (){var switch__34044__auto__ = (function (state_37724){
var state_val_37725 = (state_37724[(1)]);
if((state_val_37725 === (7))){
var inst_37706 = (state_37724[(7)]);
var inst_37706__$1 = (state_37724[(2)]);
var inst_37707 = (inst_37706__$1 == null);
var inst_37708 = cljs.core.not(inst_37707);
var state_37724__$1 = (function (){var statearr_37731 = state_37724;
(statearr_37731[(7)] = inst_37706__$1);

return statearr_37731;
})();
if(inst_37708){
var statearr_37732_39854 = state_37724__$1;
(statearr_37732_39854[(1)] = (8));

} else {
var statearr_37733_39855 = state_37724__$1;
(statearr_37733_39855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37725 === (1))){
var inst_37700 = (0);
var state_37724__$1 = (function (){var statearr_37738 = state_37724;
(statearr_37738[(8)] = inst_37700);

return statearr_37738;
})();
var statearr_37744_39856 = state_37724__$1;
(statearr_37744_39856[(2)] = null);

(statearr_37744_39856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37725 === (4))){
var state_37724__$1 = state_37724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37724__$1,(7),ch);
} else {
if((state_val_37725 === (6))){
var inst_37719 = (state_37724[(2)]);
var state_37724__$1 = state_37724;
var statearr_37750_39857 = state_37724__$1;
(statearr_37750_39857[(2)] = inst_37719);

(statearr_37750_39857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37725 === (3))){
var inst_37721 = (state_37724[(2)]);
var inst_37722 = cljs.core.async.close_BANG_(out);
var state_37724__$1 = (function (){var statearr_37752 = state_37724;
(statearr_37752[(9)] = inst_37721);

return statearr_37752;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37724__$1,inst_37722);
} else {
if((state_val_37725 === (2))){
var inst_37700 = (state_37724[(8)]);
var inst_37703 = (inst_37700 < n);
var state_37724__$1 = state_37724;
if(cljs.core.truth_(inst_37703)){
var statearr_37760_39860 = state_37724__$1;
(statearr_37760_39860[(1)] = (4));

} else {
var statearr_37762_39861 = state_37724__$1;
(statearr_37762_39861[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37725 === (11))){
var inst_37700 = (state_37724[(8)]);
var inst_37711 = (state_37724[(2)]);
var inst_37712 = (inst_37700 + (1));
var inst_37700__$1 = inst_37712;
var state_37724__$1 = (function (){var statearr_37764 = state_37724;
(statearr_37764[(10)] = inst_37711);

(statearr_37764[(8)] = inst_37700__$1);

return statearr_37764;
})();
var statearr_37766_39863 = state_37724__$1;
(statearr_37766_39863[(2)] = null);

(statearr_37766_39863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37725 === (9))){
var state_37724__$1 = state_37724;
var statearr_37770_39864 = state_37724__$1;
(statearr_37770_39864[(2)] = null);

(statearr_37770_39864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37725 === (5))){
var state_37724__$1 = state_37724;
var statearr_37771_39865 = state_37724__$1;
(statearr_37771_39865[(2)] = null);

(statearr_37771_39865[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37725 === (10))){
var inst_37716 = (state_37724[(2)]);
var state_37724__$1 = state_37724;
var statearr_37777_39866 = state_37724__$1;
(statearr_37777_39866[(2)] = inst_37716);

(statearr_37777_39866[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37725 === (8))){
var inst_37706 = (state_37724[(7)]);
var state_37724__$1 = state_37724;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37724__$1,(11),out,inst_37706);
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
});
return (function() {
var cljs$core$async$state_machine__34045__auto__ = null;
var cljs$core$async$state_machine__34045__auto____0 = (function (){
var statearr_37782 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37782[(0)] = cljs$core$async$state_machine__34045__auto__);

(statearr_37782[(1)] = (1));

return statearr_37782;
});
var cljs$core$async$state_machine__34045__auto____1 = (function (state_37724){
while(true){
var ret_value__34046__auto__ = (function (){try{while(true){
var result__34047__auto__ = switch__34044__auto__(state_37724);
if(cljs.core.keyword_identical_QMARK_(result__34047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34047__auto__;
}
break;
}
}catch (e37784){var ex__34048__auto__ = e37784;
var statearr_37785_39869 = state_37724;
(statearr_37785_39869[(2)] = ex__34048__auto__);


if(cljs.core.seq((state_37724[(4)]))){
var statearr_37788_39874 = state_37724;
(statearr_37788_39874[(1)] = cljs.core.first((state_37724[(4)])));

} else {
throw ex__34048__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39875 = state_37724;
state_37724 = G__39875;
continue;
} else {
return ret_value__34046__auto__;
}
break;
}
});
cljs$core$async$state_machine__34045__auto__ = function(state_37724){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34045__auto____1.call(this,state_37724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34045__auto____0;
cljs$core$async$state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34045__auto____1;
return cljs$core$async$state_machine__34045__auto__;
})()
})();
var state__34736__auto__ = (function (){var statearr_37796 = f__34735__auto__();
(statearr_37796[(6)] = c__34734__auto___39853);

return statearr_37796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34736__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37805 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37805 = (function (f,ch,meta37806){
this.f = f;
this.ch = ch;
this.meta37806 = meta37806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37807,meta37806__$1){
var self__ = this;
var _37807__$1 = this;
return (new cljs.core.async.t_cljs$core$async37805(self__.f,self__.ch,meta37806__$1));
}));

(cljs.core.async.t_cljs$core$async37805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37807){
var self__ = this;
var _37807__$1 = this;
return self__.meta37806;
}));

(cljs.core.async.t_cljs$core$async37805.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37805.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37805.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37805.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37805.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37826 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37826 = (function (f,ch,meta37806,_,fn1,meta37827){
this.f = f;
this.ch = ch;
this.meta37806 = meta37806;
this._ = _;
this.fn1 = fn1;
this.meta37827 = meta37827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37828,meta37827__$1){
var self__ = this;
var _37828__$1 = this;
return (new cljs.core.async.t_cljs$core$async37826(self__.f,self__.ch,self__.meta37806,self__._,self__.fn1,meta37827__$1));
}));

(cljs.core.async.t_cljs$core$async37826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37828){
var self__ = this;
var _37828__$1 = this;
return self__.meta37827;
}));

(cljs.core.async.t_cljs$core$async37826.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37826.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async37826.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37826.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__37800_SHARP_){
var G__37843 = (((p1__37800_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__37800_SHARP_) : self__.f.call(null,p1__37800_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__37843) : f1.call(null,G__37843));
});
}));

(cljs.core.async.t_cljs$core$async37826.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37806","meta37806",629184213,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37805","cljs.core.async/t_cljs$core$async37805",1464962894,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37827","meta37827",-1440192248,null)], null);
}));

(cljs.core.async.t_cljs$core$async37826.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37826.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37826");

(cljs.core.async.t_cljs$core$async37826.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async37826");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37826.
 */
cljs.core.async.__GT_t_cljs$core$async37826 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37826(f__$1,ch__$1,meta37806__$1,___$2,fn1__$1,meta37827){
return (new cljs.core.async.t_cljs$core$async37826(f__$1,ch__$1,meta37806__$1,___$2,fn1__$1,meta37827));
});

}

return (new cljs.core.async.t_cljs$core$async37826(self__.f,self__.ch,self__.meta37806,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__37857 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__37857) : self__.f.call(null,G__37857));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async37805.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37805.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async37805.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37806","meta37806",629184213,null)], null);
}));

(cljs.core.async.t_cljs$core$async37805.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37805.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37805");

(cljs.core.async.t_cljs$core$async37805.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async37805");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37805.
 */
cljs.core.async.__GT_t_cljs$core$async37805 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37805(f__$1,ch__$1,meta37806){
return (new cljs.core.async.t_cljs$core$async37805(f__$1,ch__$1,meta37806));
});

}

return (new cljs.core.async.t_cljs$core$async37805(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37868 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37868 = (function (f,ch,meta37869){
this.f = f;
this.ch = ch;
this.meta37869 = meta37869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37870,meta37869__$1){
var self__ = this;
var _37870__$1 = this;
return (new cljs.core.async.t_cljs$core$async37868(self__.f,self__.ch,meta37869__$1));
}));

(cljs.core.async.t_cljs$core$async37868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37870){
var self__ = this;
var _37870__$1 = this;
return self__.meta37869;
}));

(cljs.core.async.t_cljs$core$async37868.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37868.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37868.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37868.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37868.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37868.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async37868.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37869","meta37869",1744997705,null)], null);
}));

(cljs.core.async.t_cljs$core$async37868.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37868");

(cljs.core.async.t_cljs$core$async37868.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async37868");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37868.
 */
cljs.core.async.__GT_t_cljs$core$async37868 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37868(f__$1,ch__$1,meta37869){
return (new cljs.core.async.t_cljs$core$async37868(f__$1,ch__$1,meta37869));
});

}

return (new cljs.core.async.t_cljs$core$async37868(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37872 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37872 = (function (p,ch,meta37873){
this.p = p;
this.ch = ch;
this.meta37873 = meta37873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37874,meta37873__$1){
var self__ = this;
var _37874__$1 = this;
return (new cljs.core.async.t_cljs$core$async37872(self__.p,self__.ch,meta37873__$1));
}));

(cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37874){
var self__ = this;
var _37874__$1 = this;
return self__.meta37873;
}));

(cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async37872.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37873","meta37873",1239507985,null)], null);
}));

(cljs.core.async.t_cljs$core$async37872.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37872.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37872");

(cljs.core.async.t_cljs$core$async37872.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async37872");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37872.
 */
cljs.core.async.__GT_t_cljs$core$async37872 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37872(p__$1,ch__$1,meta37873){
return (new cljs.core.async.t_cljs$core$async37872(p__$1,ch__$1,meta37873));
});

}

return (new cljs.core.async.t_cljs$core$async37872(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__37888 = arguments.length;
switch (G__37888) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34734__auto___39908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34735__auto__ = (function (){var switch__34044__auto__ = (function (state_37929){
var state_val_37930 = (state_37929[(1)]);
if((state_val_37930 === (7))){
var inst_37923 = (state_37929[(2)]);
var state_37929__$1 = state_37929;
var statearr_37934_39909 = state_37929__$1;
(statearr_37934_39909[(2)] = inst_37923);

(statearr_37934_39909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37930 === (1))){
var state_37929__$1 = state_37929;
var statearr_37936_39913 = state_37929__$1;
(statearr_37936_39913[(2)] = null);

(statearr_37936_39913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37930 === (4))){
var inst_37909 = (state_37929[(7)]);
var inst_37909__$1 = (state_37929[(2)]);
var inst_37910 = (inst_37909__$1 == null);
var state_37929__$1 = (function (){var statearr_37937 = state_37929;
(statearr_37937[(7)] = inst_37909__$1);

return statearr_37937;
})();
if(cljs.core.truth_(inst_37910)){
var statearr_37940_39914 = state_37929__$1;
(statearr_37940_39914[(1)] = (5));

} else {
var statearr_37944_39915 = state_37929__$1;
(statearr_37944_39915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37930 === (6))){
var inst_37909 = (state_37929[(7)]);
var inst_37914 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37909) : p.call(null,inst_37909));
var state_37929__$1 = state_37929;
if(cljs.core.truth_(inst_37914)){
var statearr_37945_39916 = state_37929__$1;
(statearr_37945_39916[(1)] = (8));

} else {
var statearr_37949_39917 = state_37929__$1;
(statearr_37949_39917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37930 === (3))){
var inst_37927 = (state_37929[(2)]);
var state_37929__$1 = state_37929;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37929__$1,inst_37927);
} else {
if((state_val_37930 === (2))){
var state_37929__$1 = state_37929;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37929__$1,(4),ch);
} else {
if((state_val_37930 === (11))){
var inst_37917 = (state_37929[(2)]);
var state_37929__$1 = state_37929;
var statearr_37953_39918 = state_37929__$1;
(statearr_37953_39918[(2)] = inst_37917);

(statearr_37953_39918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37930 === (9))){
var state_37929__$1 = state_37929;
var statearr_37965_39920 = state_37929__$1;
(statearr_37965_39920[(2)] = null);

(statearr_37965_39920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37930 === (5))){
var inst_37912 = cljs.core.async.close_BANG_(out);
var state_37929__$1 = state_37929;
var statearr_37966_39922 = state_37929__$1;
(statearr_37966_39922[(2)] = inst_37912);

(statearr_37966_39922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37930 === (10))){
var inst_37920 = (state_37929[(2)]);
var state_37929__$1 = (function (){var statearr_37970 = state_37929;
(statearr_37970[(8)] = inst_37920);

return statearr_37970;
})();
var statearr_37971_39923 = state_37929__$1;
(statearr_37971_39923[(2)] = null);

(statearr_37971_39923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37930 === (8))){
var inst_37909 = (state_37929[(7)]);
var state_37929__$1 = state_37929;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37929__$1,(11),out,inst_37909);
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
});
return (function() {
var cljs$core$async$state_machine__34045__auto__ = null;
var cljs$core$async$state_machine__34045__auto____0 = (function (){
var statearr_37979 = [null,null,null,null,null,null,null,null,null];
(statearr_37979[(0)] = cljs$core$async$state_machine__34045__auto__);

(statearr_37979[(1)] = (1));

return statearr_37979;
});
var cljs$core$async$state_machine__34045__auto____1 = (function (state_37929){
while(true){
var ret_value__34046__auto__ = (function (){try{while(true){
var result__34047__auto__ = switch__34044__auto__(state_37929);
if(cljs.core.keyword_identical_QMARK_(result__34047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34047__auto__;
}
break;
}
}catch (e37980){var ex__34048__auto__ = e37980;
var statearr_37981_39924 = state_37929;
(statearr_37981_39924[(2)] = ex__34048__auto__);


if(cljs.core.seq((state_37929[(4)]))){
var statearr_37983_39925 = state_37929;
(statearr_37983_39925[(1)] = cljs.core.first((state_37929[(4)])));

} else {
throw ex__34048__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39926 = state_37929;
state_37929 = G__39926;
continue;
} else {
return ret_value__34046__auto__;
}
break;
}
});
cljs$core$async$state_machine__34045__auto__ = function(state_37929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34045__auto____1.call(this,state_37929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34045__auto____0;
cljs$core$async$state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34045__auto____1;
return cljs$core$async$state_machine__34045__auto__;
})()
})();
var state__34736__auto__ = (function (){var statearr_37986 = f__34735__auto__();
(statearr_37986[(6)] = c__34734__auto___39908);

return statearr_37986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34736__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__37988 = arguments.length;
switch (G__37988) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34734__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34735__auto__ = (function (){var switch__34044__auto__ = (function (state_38080){
var state_val_38085 = (state_38080[(1)]);
if((state_val_38085 === (7))){
var inst_38075 = (state_38080[(2)]);
var state_38080__$1 = state_38080;
var statearr_38114_39933 = state_38080__$1;
(statearr_38114_39933[(2)] = inst_38075);

(statearr_38114_39933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (20))){
var inst_38038 = (state_38080[(7)]);
var inst_38049 = (state_38080[(2)]);
var inst_38050 = cljs.core.next(inst_38038);
var inst_38012 = inst_38050;
var inst_38013 = null;
var inst_38014 = (0);
var inst_38015 = (0);
var state_38080__$1 = (function (){var statearr_38135 = state_38080;
(statearr_38135[(8)] = inst_38013);

(statearr_38135[(9)] = inst_38015);

(statearr_38135[(10)] = inst_38049);

(statearr_38135[(11)] = inst_38012);

(statearr_38135[(12)] = inst_38014);

return statearr_38135;
})();
var statearr_38156_39940 = state_38080__$1;
(statearr_38156_39940[(2)] = null);

(statearr_38156_39940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (1))){
var state_38080__$1 = state_38080;
var statearr_38158_39941 = state_38080__$1;
(statearr_38158_39941[(2)] = null);

(statearr_38158_39941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (4))){
var inst_38001 = (state_38080[(13)]);
var inst_38001__$1 = (state_38080[(2)]);
var inst_38002 = (inst_38001__$1 == null);
var state_38080__$1 = (function (){var statearr_38159 = state_38080;
(statearr_38159[(13)] = inst_38001__$1);

return statearr_38159;
})();
if(cljs.core.truth_(inst_38002)){
var statearr_38160_39942 = state_38080__$1;
(statearr_38160_39942[(1)] = (5));

} else {
var statearr_38162_39943 = state_38080__$1;
(statearr_38162_39943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (15))){
var state_38080__$1 = state_38080;
var statearr_38178_39944 = state_38080__$1;
(statearr_38178_39944[(2)] = null);

(statearr_38178_39944[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (21))){
var state_38080__$1 = state_38080;
var statearr_38179_39945 = state_38080__$1;
(statearr_38179_39945[(2)] = null);

(statearr_38179_39945[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (13))){
var inst_38013 = (state_38080[(8)]);
var inst_38015 = (state_38080[(9)]);
var inst_38012 = (state_38080[(11)]);
var inst_38014 = (state_38080[(12)]);
var inst_38034 = (state_38080[(2)]);
var inst_38035 = (inst_38015 + (1));
var tmp38167 = inst_38013;
var tmp38168 = inst_38012;
var tmp38169 = inst_38014;
var inst_38012__$1 = tmp38168;
var inst_38013__$1 = tmp38167;
var inst_38014__$1 = tmp38169;
var inst_38015__$1 = inst_38035;
var state_38080__$1 = (function (){var statearr_38181 = state_38080;
(statearr_38181[(8)] = inst_38013__$1);

(statearr_38181[(9)] = inst_38015__$1);

(statearr_38181[(11)] = inst_38012__$1);

(statearr_38181[(14)] = inst_38034);

(statearr_38181[(12)] = inst_38014__$1);

return statearr_38181;
})();
var statearr_38182_39947 = state_38080__$1;
(statearr_38182_39947[(2)] = null);

(statearr_38182_39947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (22))){
var state_38080__$1 = state_38080;
var statearr_38183_39948 = state_38080__$1;
(statearr_38183_39948[(2)] = null);

(statearr_38183_39948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (6))){
var inst_38001 = (state_38080[(13)]);
var inst_38010 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38001) : f.call(null,inst_38001));
var inst_38011 = cljs.core.seq(inst_38010);
var inst_38012 = inst_38011;
var inst_38013 = null;
var inst_38014 = (0);
var inst_38015 = (0);
var state_38080__$1 = (function (){var statearr_38189 = state_38080;
(statearr_38189[(8)] = inst_38013);

(statearr_38189[(9)] = inst_38015);

(statearr_38189[(11)] = inst_38012);

(statearr_38189[(12)] = inst_38014);

return statearr_38189;
})();
var statearr_38193_39951 = state_38080__$1;
(statearr_38193_39951[(2)] = null);

(statearr_38193_39951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (17))){
var inst_38038 = (state_38080[(7)]);
var inst_38042 = cljs.core.chunk_first(inst_38038);
var inst_38043 = cljs.core.chunk_rest(inst_38038);
var inst_38044 = cljs.core.count(inst_38042);
var inst_38012 = inst_38043;
var inst_38013 = inst_38042;
var inst_38014 = inst_38044;
var inst_38015 = (0);
var state_38080__$1 = (function (){var statearr_38202 = state_38080;
(statearr_38202[(8)] = inst_38013);

(statearr_38202[(9)] = inst_38015);

(statearr_38202[(11)] = inst_38012);

(statearr_38202[(12)] = inst_38014);

return statearr_38202;
})();
var statearr_38203_39954 = state_38080__$1;
(statearr_38203_39954[(2)] = null);

(statearr_38203_39954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (3))){
var inst_38077 = (state_38080[(2)]);
var state_38080__$1 = state_38080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38080__$1,inst_38077);
} else {
if((state_val_38085 === (12))){
var inst_38062 = (state_38080[(2)]);
var state_38080__$1 = state_38080;
var statearr_38204_39955 = state_38080__$1;
(statearr_38204_39955[(2)] = inst_38062);

(statearr_38204_39955[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (2))){
var state_38080__$1 = state_38080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38080__$1,(4),in$);
} else {
if((state_val_38085 === (23))){
var inst_38073 = (state_38080[(2)]);
var state_38080__$1 = state_38080;
var statearr_38215_39958 = state_38080__$1;
(statearr_38215_39958[(2)] = inst_38073);

(statearr_38215_39958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (19))){
var inst_38057 = (state_38080[(2)]);
var state_38080__$1 = state_38080;
var statearr_38217_39960 = state_38080__$1;
(statearr_38217_39960[(2)] = inst_38057);

(statearr_38217_39960[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (11))){
var inst_38038 = (state_38080[(7)]);
var inst_38012 = (state_38080[(11)]);
var inst_38038__$1 = cljs.core.seq(inst_38012);
var state_38080__$1 = (function (){var statearr_38222 = state_38080;
(statearr_38222[(7)] = inst_38038__$1);

return statearr_38222;
})();
if(inst_38038__$1){
var statearr_38223_39961 = state_38080__$1;
(statearr_38223_39961[(1)] = (14));

} else {
var statearr_38224_39962 = state_38080__$1;
(statearr_38224_39962[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (9))){
var inst_38064 = (state_38080[(2)]);
var inst_38065 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_38080__$1 = (function (){var statearr_38227 = state_38080;
(statearr_38227[(15)] = inst_38064);

return statearr_38227;
})();
if(cljs.core.truth_(inst_38065)){
var statearr_38240_39963 = state_38080__$1;
(statearr_38240_39963[(1)] = (21));

} else {
var statearr_38241_39964 = state_38080__$1;
(statearr_38241_39964[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (5))){
var inst_38004 = cljs.core.async.close_BANG_(out);
var state_38080__$1 = state_38080;
var statearr_38242_39965 = state_38080__$1;
(statearr_38242_39965[(2)] = inst_38004);

(statearr_38242_39965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (14))){
var inst_38038 = (state_38080[(7)]);
var inst_38040 = cljs.core.chunked_seq_QMARK_(inst_38038);
var state_38080__$1 = state_38080;
if(inst_38040){
var statearr_38248_39966 = state_38080__$1;
(statearr_38248_39966[(1)] = (17));

} else {
var statearr_38249_39967 = state_38080__$1;
(statearr_38249_39967[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (16))){
var inst_38060 = (state_38080[(2)]);
var state_38080__$1 = state_38080;
var statearr_38254_39968 = state_38080__$1;
(statearr_38254_39968[(2)] = inst_38060);

(statearr_38254_39968[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (10))){
var inst_38013 = (state_38080[(8)]);
var inst_38015 = (state_38080[(9)]);
var inst_38031 = cljs.core._nth(inst_38013,inst_38015);
var state_38080__$1 = state_38080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38080__$1,(13),out,inst_38031);
} else {
if((state_val_38085 === (18))){
var inst_38038 = (state_38080[(7)]);
var inst_38047 = cljs.core.first(inst_38038);
var state_38080__$1 = state_38080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38080__$1,(20),out,inst_38047);
} else {
if((state_val_38085 === (8))){
var inst_38015 = (state_38080[(9)]);
var inst_38014 = (state_38080[(12)]);
var inst_38017 = (inst_38015 < inst_38014);
var inst_38018 = inst_38017;
var state_38080__$1 = state_38080;
if(cljs.core.truth_(inst_38018)){
var statearr_38266_39971 = state_38080__$1;
(statearr_38266_39971[(1)] = (10));

} else {
var statearr_38267_39972 = state_38080__$1;
(statearr_38267_39972[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34045__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34045__auto____0 = (function (){
var statearr_38272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38272[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34045__auto__);

(statearr_38272[(1)] = (1));

return statearr_38272;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34045__auto____1 = (function (state_38080){
while(true){
var ret_value__34046__auto__ = (function (){try{while(true){
var result__34047__auto__ = switch__34044__auto__(state_38080);
if(cljs.core.keyword_identical_QMARK_(result__34047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34047__auto__;
}
break;
}
}catch (e38277){var ex__34048__auto__ = e38277;
var statearr_38280_39974 = state_38080;
(statearr_38280_39974[(2)] = ex__34048__auto__);


if(cljs.core.seq((state_38080[(4)]))){
var statearr_38281_39980 = state_38080;
(statearr_38281_39980[(1)] = cljs.core.first((state_38080[(4)])));

} else {
throw ex__34048__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39984 = state_38080;
state_38080 = G__39984;
continue;
} else {
return ret_value__34046__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34045__auto__ = function(state_38080){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34045__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34045__auto____1.call(this,state_38080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34045__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34045__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34045__auto__;
})()
})();
var state__34736__auto__ = (function (){var statearr_38287 = f__34735__auto__();
(statearr_38287[(6)] = c__34734__auto__);

return statearr_38287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34736__auto__);
}));

return c__34734__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38294 = arguments.length;
switch (G__38294) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__38311 = arguments.length;
switch (G__38311) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__38325 = arguments.length;
switch (G__38325) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34734__auto___39999 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34735__auto__ = (function (){var switch__34044__auto__ = (function (state_38360){
var state_val_38361 = (state_38360[(1)]);
if((state_val_38361 === (7))){
var inst_38355 = (state_38360[(2)]);
var state_38360__$1 = state_38360;
var statearr_38365_40003 = state_38360__$1;
(statearr_38365_40003[(2)] = inst_38355);

(statearr_38365_40003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (1))){
var inst_38337 = null;
var state_38360__$1 = (function (){var statearr_38366 = state_38360;
(statearr_38366[(7)] = inst_38337);

return statearr_38366;
})();
var statearr_38367_40004 = state_38360__$1;
(statearr_38367_40004[(2)] = null);

(statearr_38367_40004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (4))){
var inst_38340 = (state_38360[(8)]);
var inst_38340__$1 = (state_38360[(2)]);
var inst_38341 = (inst_38340__$1 == null);
var inst_38342 = cljs.core.not(inst_38341);
var state_38360__$1 = (function (){var statearr_38369 = state_38360;
(statearr_38369[(8)] = inst_38340__$1);

return statearr_38369;
})();
if(inst_38342){
var statearr_38370_40006 = state_38360__$1;
(statearr_38370_40006[(1)] = (5));

} else {
var statearr_38373_40007 = state_38360__$1;
(statearr_38373_40007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (6))){
var state_38360__$1 = state_38360;
var statearr_38375_40011 = state_38360__$1;
(statearr_38375_40011[(2)] = null);

(statearr_38375_40011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (3))){
var inst_38357 = (state_38360[(2)]);
var inst_38358 = cljs.core.async.close_BANG_(out);
var state_38360__$1 = (function (){var statearr_38376 = state_38360;
(statearr_38376[(9)] = inst_38357);

return statearr_38376;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38360__$1,inst_38358);
} else {
if((state_val_38361 === (2))){
var state_38360__$1 = state_38360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38360__$1,(4),ch);
} else {
if((state_val_38361 === (11))){
var inst_38340 = (state_38360[(8)]);
var inst_38349 = (state_38360[(2)]);
var inst_38337 = inst_38340;
var state_38360__$1 = (function (){var statearr_38384 = state_38360;
(statearr_38384[(7)] = inst_38337);

(statearr_38384[(10)] = inst_38349);

return statearr_38384;
})();
var statearr_38385_40012 = state_38360__$1;
(statearr_38385_40012[(2)] = null);

(statearr_38385_40012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (9))){
var inst_38340 = (state_38360[(8)]);
var state_38360__$1 = state_38360;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38360__$1,(11),out,inst_38340);
} else {
if((state_val_38361 === (5))){
var inst_38340 = (state_38360[(8)]);
var inst_38337 = (state_38360[(7)]);
var inst_38344 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38340,inst_38337);
var state_38360__$1 = state_38360;
if(inst_38344){
var statearr_38394_40013 = state_38360__$1;
(statearr_38394_40013[(1)] = (8));

} else {
var statearr_38395_40014 = state_38360__$1;
(statearr_38395_40014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (10))){
var inst_38352 = (state_38360[(2)]);
var state_38360__$1 = state_38360;
var statearr_38397_40015 = state_38360__$1;
(statearr_38397_40015[(2)] = inst_38352);

(statearr_38397_40015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (8))){
var inst_38337 = (state_38360[(7)]);
var tmp38392 = inst_38337;
var inst_38337__$1 = tmp38392;
var state_38360__$1 = (function (){var statearr_38402 = state_38360;
(statearr_38402[(7)] = inst_38337__$1);

return statearr_38402;
})();
var statearr_38403_40016 = state_38360__$1;
(statearr_38403_40016[(2)] = null);

(statearr_38403_40016[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__34045__auto__ = null;
var cljs$core$async$state_machine__34045__auto____0 = (function (){
var statearr_38404 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38404[(0)] = cljs$core$async$state_machine__34045__auto__);

(statearr_38404[(1)] = (1));

return statearr_38404;
});
var cljs$core$async$state_machine__34045__auto____1 = (function (state_38360){
while(true){
var ret_value__34046__auto__ = (function (){try{while(true){
var result__34047__auto__ = switch__34044__auto__(state_38360);
if(cljs.core.keyword_identical_QMARK_(result__34047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34047__auto__;
}
break;
}
}catch (e38405){var ex__34048__auto__ = e38405;
var statearr_38406_40019 = state_38360;
(statearr_38406_40019[(2)] = ex__34048__auto__);


if(cljs.core.seq((state_38360[(4)]))){
var statearr_38407_40020 = state_38360;
(statearr_38407_40020[(1)] = cljs.core.first((state_38360[(4)])));

} else {
throw ex__34048__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40022 = state_38360;
state_38360 = G__40022;
continue;
} else {
return ret_value__34046__auto__;
}
break;
}
});
cljs$core$async$state_machine__34045__auto__ = function(state_38360){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34045__auto____1.call(this,state_38360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34045__auto____0;
cljs$core$async$state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34045__auto____1;
return cljs$core$async$state_machine__34045__auto__;
})()
})();
var state__34736__auto__ = (function (){var statearr_38408 = f__34735__auto__();
(statearr_38408[(6)] = c__34734__auto___39999);

return statearr_38408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34736__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__38414 = arguments.length;
switch (G__38414) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34734__auto___40024 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34735__auto__ = (function (){var switch__34044__auto__ = (function (state_38462){
var state_val_38463 = (state_38462[(1)]);
if((state_val_38463 === (7))){
var inst_38458 = (state_38462[(2)]);
var state_38462__$1 = state_38462;
var statearr_38471_40025 = state_38462__$1;
(statearr_38471_40025[(2)] = inst_38458);

(statearr_38471_40025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38463 === (1))){
var inst_38416 = (new Array(n));
var inst_38417 = inst_38416;
var inst_38418 = (0);
var state_38462__$1 = (function (){var statearr_38474 = state_38462;
(statearr_38474[(7)] = inst_38417);

(statearr_38474[(8)] = inst_38418);

return statearr_38474;
})();
var statearr_38475_40026 = state_38462__$1;
(statearr_38475_40026[(2)] = null);

(statearr_38475_40026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38463 === (4))){
var inst_38421 = (state_38462[(9)]);
var inst_38421__$1 = (state_38462[(2)]);
var inst_38422 = (inst_38421__$1 == null);
var inst_38423 = cljs.core.not(inst_38422);
var state_38462__$1 = (function (){var statearr_38476 = state_38462;
(statearr_38476[(9)] = inst_38421__$1);

return statearr_38476;
})();
if(inst_38423){
var statearr_38477_40029 = state_38462__$1;
(statearr_38477_40029[(1)] = (5));

} else {
var statearr_38478_40030 = state_38462__$1;
(statearr_38478_40030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38463 === (15))){
var inst_38449 = (state_38462[(2)]);
var state_38462__$1 = state_38462;
var statearr_38489_40031 = state_38462__$1;
(statearr_38489_40031[(2)] = inst_38449);

(statearr_38489_40031[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38463 === (13))){
var state_38462__$1 = state_38462;
var statearr_38495_40032 = state_38462__$1;
(statearr_38495_40032[(2)] = null);

(statearr_38495_40032[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38463 === (6))){
var inst_38418 = (state_38462[(8)]);
var inst_38445 = (inst_38418 > (0));
var state_38462__$1 = state_38462;
if(cljs.core.truth_(inst_38445)){
var statearr_38500_40034 = state_38462__$1;
(statearr_38500_40034[(1)] = (12));

} else {
var statearr_38501_40036 = state_38462__$1;
(statearr_38501_40036[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38463 === (3))){
var inst_38460 = (state_38462[(2)]);
var state_38462__$1 = state_38462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38462__$1,inst_38460);
} else {
if((state_val_38463 === (12))){
var inst_38417 = (state_38462[(7)]);
var inst_38447 = cljs.core.vec(inst_38417);
var state_38462__$1 = state_38462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38462__$1,(15),out,inst_38447);
} else {
if((state_val_38463 === (2))){
var state_38462__$1 = state_38462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38462__$1,(4),ch);
} else {
if((state_val_38463 === (11))){
var inst_38439 = (state_38462[(2)]);
var inst_38440 = (new Array(n));
var inst_38417 = inst_38440;
var inst_38418 = (0);
var state_38462__$1 = (function (){var statearr_38510 = state_38462;
(statearr_38510[(10)] = inst_38439);

(statearr_38510[(7)] = inst_38417);

(statearr_38510[(8)] = inst_38418);

return statearr_38510;
})();
var statearr_38512_40039 = state_38462__$1;
(statearr_38512_40039[(2)] = null);

(statearr_38512_40039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38463 === (9))){
var inst_38417 = (state_38462[(7)]);
var inst_38437 = cljs.core.vec(inst_38417);
var state_38462__$1 = state_38462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38462__$1,(11),out,inst_38437);
} else {
if((state_val_38463 === (5))){
var inst_38421 = (state_38462[(9)]);
var inst_38432 = (state_38462[(11)]);
var inst_38417 = (state_38462[(7)]);
var inst_38418 = (state_38462[(8)]);
var inst_38431 = (inst_38417[inst_38418] = inst_38421);
var inst_38432__$1 = (inst_38418 + (1));
var inst_38433 = (inst_38432__$1 < n);
var state_38462__$1 = (function (){var statearr_38514 = state_38462;
(statearr_38514[(11)] = inst_38432__$1);

(statearr_38514[(12)] = inst_38431);

return statearr_38514;
})();
if(cljs.core.truth_(inst_38433)){
var statearr_38515_40044 = state_38462__$1;
(statearr_38515_40044[(1)] = (8));

} else {
var statearr_38516_40045 = state_38462__$1;
(statearr_38516_40045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38463 === (14))){
var inst_38452 = (state_38462[(2)]);
var inst_38456 = cljs.core.async.close_BANG_(out);
var state_38462__$1 = (function (){var statearr_38518 = state_38462;
(statearr_38518[(13)] = inst_38452);

return statearr_38518;
})();
var statearr_38519_40046 = state_38462__$1;
(statearr_38519_40046[(2)] = inst_38456);

(statearr_38519_40046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38463 === (10))){
var inst_38443 = (state_38462[(2)]);
var state_38462__$1 = state_38462;
var statearr_38520_40050 = state_38462__$1;
(statearr_38520_40050[(2)] = inst_38443);

(statearr_38520_40050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38463 === (8))){
var inst_38432 = (state_38462[(11)]);
var inst_38417 = (state_38462[(7)]);
var tmp38517 = inst_38417;
var inst_38417__$1 = tmp38517;
var inst_38418 = inst_38432;
var state_38462__$1 = (function (){var statearr_38526 = state_38462;
(statearr_38526[(7)] = inst_38417__$1);

(statearr_38526[(8)] = inst_38418);

return statearr_38526;
})();
var statearr_38527_40051 = state_38462__$1;
(statearr_38527_40051[(2)] = null);

(statearr_38527_40051[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__34045__auto__ = null;
var cljs$core$async$state_machine__34045__auto____0 = (function (){
var statearr_38538 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38538[(0)] = cljs$core$async$state_machine__34045__auto__);

(statearr_38538[(1)] = (1));

return statearr_38538;
});
var cljs$core$async$state_machine__34045__auto____1 = (function (state_38462){
while(true){
var ret_value__34046__auto__ = (function (){try{while(true){
var result__34047__auto__ = switch__34044__auto__(state_38462);
if(cljs.core.keyword_identical_QMARK_(result__34047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34047__auto__;
}
break;
}
}catch (e38539){var ex__34048__auto__ = e38539;
var statearr_38540_40056 = state_38462;
(statearr_38540_40056[(2)] = ex__34048__auto__);


if(cljs.core.seq((state_38462[(4)]))){
var statearr_38541_40058 = state_38462;
(statearr_38541_40058[(1)] = cljs.core.first((state_38462[(4)])));

} else {
throw ex__34048__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40060 = state_38462;
state_38462 = G__40060;
continue;
} else {
return ret_value__34046__auto__;
}
break;
}
});
cljs$core$async$state_machine__34045__auto__ = function(state_38462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34045__auto____1.call(this,state_38462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34045__auto____0;
cljs$core$async$state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34045__auto____1;
return cljs$core$async$state_machine__34045__auto__;
})()
})();
var state__34736__auto__ = (function (){var statearr_38544 = f__34735__auto__();
(statearr_38544[(6)] = c__34734__auto___40024);

return statearr_38544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34736__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__38556 = arguments.length;
switch (G__38556) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34734__auto___40068 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34735__auto__ = (function (){var switch__34044__auto__ = (function (state_38605){
var state_val_38606 = (state_38605[(1)]);
if((state_val_38606 === (7))){
var inst_38597 = (state_38605[(2)]);
var state_38605__$1 = state_38605;
var statearr_38607_40070 = state_38605__$1;
(statearr_38607_40070[(2)] = inst_38597);

(statearr_38607_40070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38606 === (1))){
var inst_38557 = [];
var inst_38558 = inst_38557;
var inst_38559 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38605__$1 = (function (){var statearr_38609 = state_38605;
(statearr_38609[(7)] = inst_38558);

(statearr_38609[(8)] = inst_38559);

return statearr_38609;
})();
var statearr_38610_40071 = state_38605__$1;
(statearr_38610_40071[(2)] = null);

(statearr_38610_40071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38606 === (4))){
var inst_38562 = (state_38605[(9)]);
var inst_38562__$1 = (state_38605[(2)]);
var inst_38563 = (inst_38562__$1 == null);
var inst_38564 = cljs.core.not(inst_38563);
var state_38605__$1 = (function (){var statearr_38611 = state_38605;
(statearr_38611[(9)] = inst_38562__$1);

return statearr_38611;
})();
if(inst_38564){
var statearr_38616_40075 = state_38605__$1;
(statearr_38616_40075[(1)] = (5));

} else {
var statearr_38617_40076 = state_38605__$1;
(statearr_38617_40076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38606 === (15))){
var inst_38558 = (state_38605[(7)]);
var inst_38589 = cljs.core.vec(inst_38558);
var state_38605__$1 = state_38605;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38605__$1,(18),out,inst_38589);
} else {
if((state_val_38606 === (13))){
var inst_38584 = (state_38605[(2)]);
var state_38605__$1 = state_38605;
var statearr_38624_40079 = state_38605__$1;
(statearr_38624_40079[(2)] = inst_38584);

(statearr_38624_40079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38606 === (6))){
var inst_38558 = (state_38605[(7)]);
var inst_38586 = inst_38558.length;
var inst_38587 = (inst_38586 > (0));
var state_38605__$1 = state_38605;
if(cljs.core.truth_(inst_38587)){
var statearr_38625_40080 = state_38605__$1;
(statearr_38625_40080[(1)] = (15));

} else {
var statearr_38627_40081 = state_38605__$1;
(statearr_38627_40081[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38606 === (17))){
var inst_38594 = (state_38605[(2)]);
var inst_38595 = cljs.core.async.close_BANG_(out);
var state_38605__$1 = (function (){var statearr_38628 = state_38605;
(statearr_38628[(10)] = inst_38594);

return statearr_38628;
})();
var statearr_38629_40083 = state_38605__$1;
(statearr_38629_40083[(2)] = inst_38595);

(statearr_38629_40083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38606 === (3))){
var inst_38599 = (state_38605[(2)]);
var state_38605__$1 = state_38605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38605__$1,inst_38599);
} else {
if((state_val_38606 === (12))){
var inst_38558 = (state_38605[(7)]);
var inst_38577 = cljs.core.vec(inst_38558);
var state_38605__$1 = state_38605;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38605__$1,(14),out,inst_38577);
} else {
if((state_val_38606 === (2))){
var state_38605__$1 = state_38605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38605__$1,(4),ch);
} else {
if((state_val_38606 === (11))){
var inst_38562 = (state_38605[(9)]);
var inst_38558 = (state_38605[(7)]);
var inst_38566 = (state_38605[(11)]);
var inst_38574 = inst_38558.push(inst_38562);
var tmp38633 = inst_38558;
var inst_38558__$1 = tmp38633;
var inst_38559 = inst_38566;
var state_38605__$1 = (function (){var statearr_38634 = state_38605;
(statearr_38634[(12)] = inst_38574);

(statearr_38634[(7)] = inst_38558__$1);

(statearr_38634[(8)] = inst_38559);

return statearr_38634;
})();
var statearr_38635_40089 = state_38605__$1;
(statearr_38635_40089[(2)] = null);

(statearr_38635_40089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38606 === (9))){
var inst_38559 = (state_38605[(8)]);
var inst_38570 = cljs.core.keyword_identical_QMARK_(inst_38559,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_38605__$1 = state_38605;
var statearr_38636_40092 = state_38605__$1;
(statearr_38636_40092[(2)] = inst_38570);

(statearr_38636_40092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38606 === (5))){
var inst_38562 = (state_38605[(9)]);
var inst_38559 = (state_38605[(8)]);
var inst_38567 = (state_38605[(13)]);
var inst_38566 = (state_38605[(11)]);
var inst_38566__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38562) : f.call(null,inst_38562));
var inst_38567__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38566__$1,inst_38559);
var state_38605__$1 = (function (){var statearr_38640 = state_38605;
(statearr_38640[(13)] = inst_38567__$1);

(statearr_38640[(11)] = inst_38566__$1);

return statearr_38640;
})();
if(inst_38567__$1){
var statearr_38641_40095 = state_38605__$1;
(statearr_38641_40095[(1)] = (8));

} else {
var statearr_38642_40096 = state_38605__$1;
(statearr_38642_40096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38606 === (14))){
var inst_38562 = (state_38605[(9)]);
var inst_38566 = (state_38605[(11)]);
var inst_38579 = (state_38605[(2)]);
var inst_38580 = [];
var inst_38581 = inst_38580.push(inst_38562);
var inst_38558 = inst_38580;
var inst_38559 = inst_38566;
var state_38605__$1 = (function (){var statearr_38643 = state_38605;
(statearr_38643[(14)] = inst_38581);

(statearr_38643[(15)] = inst_38579);

(statearr_38643[(7)] = inst_38558);

(statearr_38643[(8)] = inst_38559);

return statearr_38643;
})();
var statearr_38644_40099 = state_38605__$1;
(statearr_38644_40099[(2)] = null);

(statearr_38644_40099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38606 === (16))){
var state_38605__$1 = state_38605;
var statearr_38646_40101 = state_38605__$1;
(statearr_38646_40101[(2)] = null);

(statearr_38646_40101[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38606 === (10))){
var inst_38572 = (state_38605[(2)]);
var state_38605__$1 = state_38605;
if(cljs.core.truth_(inst_38572)){
var statearr_38647_40104 = state_38605__$1;
(statearr_38647_40104[(1)] = (11));

} else {
var statearr_38648_40105 = state_38605__$1;
(statearr_38648_40105[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38606 === (18))){
var inst_38591 = (state_38605[(2)]);
var state_38605__$1 = state_38605;
var statearr_38650_40108 = state_38605__$1;
(statearr_38650_40108[(2)] = inst_38591);

(statearr_38650_40108[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38606 === (8))){
var inst_38567 = (state_38605[(13)]);
var state_38605__$1 = state_38605;
var statearr_38651_40111 = state_38605__$1;
(statearr_38651_40111[(2)] = inst_38567);

(statearr_38651_40111[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__34045__auto__ = null;
var cljs$core$async$state_machine__34045__auto____0 = (function (){
var statearr_38652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38652[(0)] = cljs$core$async$state_machine__34045__auto__);

(statearr_38652[(1)] = (1));

return statearr_38652;
});
var cljs$core$async$state_machine__34045__auto____1 = (function (state_38605){
while(true){
var ret_value__34046__auto__ = (function (){try{while(true){
var result__34047__auto__ = switch__34044__auto__(state_38605);
if(cljs.core.keyword_identical_QMARK_(result__34047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34047__auto__;
}
break;
}
}catch (e38653){var ex__34048__auto__ = e38653;
var statearr_38654_40118 = state_38605;
(statearr_38654_40118[(2)] = ex__34048__auto__);


if(cljs.core.seq((state_38605[(4)]))){
var statearr_38655_40119 = state_38605;
(statearr_38655_40119[(1)] = cljs.core.first((state_38605[(4)])));

} else {
throw ex__34048__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40120 = state_38605;
state_38605 = G__40120;
continue;
} else {
return ret_value__34046__auto__;
}
break;
}
});
cljs$core$async$state_machine__34045__auto__ = function(state_38605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34045__auto____1.call(this,state_38605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34045__auto____0;
cljs$core$async$state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34045__auto____1;
return cljs$core$async$state_machine__34045__auto__;
})()
})();
var state__34736__auto__ = (function (){var statearr_38656 = f__34735__auto__();
(statearr_38656[(6)] = c__34734__auto___40068);

return statearr_38656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34736__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
