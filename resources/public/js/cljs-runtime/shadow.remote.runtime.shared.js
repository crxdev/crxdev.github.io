goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__36751,res){
var map__36760 = p__36751;
var map__36760__$1 = cljs.core.__destructure_map(map__36760);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36760__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36760__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__36763 = res;
var G__36763__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36763,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__36763);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36763__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__36763__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__36769 = arguments.length;
switch (G__36769) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__36776,msg,handlers,timeout_after_ms){
var map__36777 = p__36776;
var map__36777__$1 = cljs.core.__destructure_map(map__36777);
var runtime = map__36777__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36777__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37065 = arguments.length;
var i__4865__auto___37066 = (0);
while(true){
if((i__4865__auto___37066 < len__4864__auto___37065)){
args__4870__auto__.push((arguments[i__4865__auto___37066]));

var G__37068 = (i__4865__auto___37066 + (1));
i__4865__auto___37066 = G__37068;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__36806,ev,args){
var map__36807 = p__36806;
var map__36807__$1 = cljs.core.__destructure_map(map__36807);
var runtime = map__36807__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36807__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__36809 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__36812 = null;
var count__36813 = (0);
var i__36814 = (0);
while(true){
if((i__36814 < count__36813)){
var ext = chunk__36812.cljs$core$IIndexed$_nth$arity$2(null,i__36814);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__37076 = seq__36809;
var G__37077 = chunk__36812;
var G__37078 = count__36813;
var G__37079 = (i__36814 + (1));
seq__36809 = G__37076;
chunk__36812 = G__37077;
count__36813 = G__37078;
i__36814 = G__37079;
continue;
} else {
var G__37080 = seq__36809;
var G__37081 = chunk__36812;
var G__37082 = count__36813;
var G__37083 = (i__36814 + (1));
seq__36809 = G__37080;
chunk__36812 = G__37081;
count__36813 = G__37082;
i__36814 = G__37083;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36809);
if(temp__5753__auto__){
var seq__36809__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36809__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36809__$1);
var G__37086 = cljs.core.chunk_rest(seq__36809__$1);
var G__37087 = c__4679__auto__;
var G__37088 = cljs.core.count(c__4679__auto__);
var G__37089 = (0);
seq__36809 = G__37086;
chunk__36812 = G__37087;
count__36813 = G__37088;
i__36814 = G__37089;
continue;
} else {
var ext = cljs.core.first(seq__36809__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__37090 = cljs.core.next(seq__36809__$1);
var G__37091 = null;
var G__37092 = (0);
var G__37093 = (0);
seq__36809 = G__37090;
chunk__36812 = G__37091;
count__36813 = G__37092;
i__36814 = G__37093;
continue;
} else {
var G__37094 = cljs.core.next(seq__36809__$1);
var G__37095 = null;
var G__37096 = (0);
var G__37097 = (0);
seq__36809 = G__37094;
chunk__36812 = G__37095;
count__36813 = G__37096;
i__36814 = G__37097;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq36781){
var G__36782 = cljs.core.first(seq36781);
var seq36781__$1 = cljs.core.next(seq36781);
var G__36783 = cljs.core.first(seq36781__$1);
var seq36781__$2 = cljs.core.next(seq36781__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36782,G__36783,seq36781__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__36867,p__36868){
var map__36871 = p__36867;
var map__36871__$1 = cljs.core.__destructure_map(map__36871);
var runtime = map__36871__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36871__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__36873 = p__36868;
var map__36873__$1 = cljs.core.__destructure_map(map__36873);
var msg = map__36873__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36873__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__36877 = cljs.core.deref(state_ref);
var map__36877__$1 = cljs.core.__destructure_map(map__36877);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36877__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36877__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__36896){
var map__36901 = p__36896;
var map__36901__$1 = cljs.core.__destructure_map(map__36901);
var runtime = map__36901__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36901__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__36906,msg){
var map__36909 = p__36906;
var map__36909__$1 = cljs.core.__destructure_map(map__36909);
var runtime = map__36909__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36909__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__36925,key,p__36926){
var map__36928 = p__36925;
var map__36928__$1 = cljs.core.__destructure_map(map__36928);
var state = map__36928__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36928__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__36929 = p__36926;
var map__36929__$1 = cljs.core.__destructure_map(map__36929);
var spec = map__36929__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36929__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__36939,key,spec){
var map__36943 = p__36939;
var map__36943__$1 = cljs.core.__destructure_map(map__36943);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36943__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__36947_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__36947_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__36948_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__36948_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__36950_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__36950_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__36951_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__36951_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__36954_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__36954_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__36972,key){
var map__36973 = p__36972;
var map__36973__$1 = cljs.core.__destructure_map(map__36973);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36973__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__36984,msg){
var map__36986 = p__36984;
var map__36986__$1 = cljs.core.__destructure_map(map__36986);
var runtime = map__36986__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36986__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__36990,p__36991){
var map__36992 = p__36990;
var map__36992__$1 = cljs.core.__destructure_map(map__36992);
var runtime = map__36992__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36992__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__36993 = p__36991;
var map__36993__$1 = cljs.core.__destructure_map(map__36993);
var msg = map__36993__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36993__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36993__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__37006 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__37008 = null;
var count__37009 = (0);
var i__37010 = (0);
while(true){
if((i__37010 < count__37009)){
var map__37036 = chunk__37008.cljs$core$IIndexed$_nth$arity$2(null,i__37010);
var map__37036__$1 = cljs.core.__destructure_map(map__37036);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37036__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__37214 = seq__37006;
var G__37215 = chunk__37008;
var G__37216 = count__37009;
var G__37217 = (i__37010 + (1));
seq__37006 = G__37214;
chunk__37008 = G__37215;
count__37009 = G__37216;
i__37010 = G__37217;
continue;
} else {
var G__37218 = seq__37006;
var G__37219 = chunk__37008;
var G__37220 = count__37009;
var G__37221 = (i__37010 + (1));
seq__37006 = G__37218;
chunk__37008 = G__37219;
count__37009 = G__37220;
i__37010 = G__37221;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37006);
if(temp__5753__auto__){
var seq__37006__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37006__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37006__$1);
var G__37223 = cljs.core.chunk_rest(seq__37006__$1);
var G__37224 = c__4679__auto__;
var G__37225 = cljs.core.count(c__4679__auto__);
var G__37226 = (0);
seq__37006 = G__37223;
chunk__37008 = G__37224;
count__37009 = G__37225;
i__37010 = G__37226;
continue;
} else {
var map__37039 = cljs.core.first(seq__37006__$1);
var map__37039__$1 = cljs.core.__destructure_map(map__37039);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37039__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__37229 = cljs.core.next(seq__37006__$1);
var G__37230 = null;
var G__37231 = (0);
var G__37232 = (0);
seq__37006 = G__37229;
chunk__37008 = G__37230;
count__37009 = G__37231;
i__37010 = G__37232;
continue;
} else {
var G__37233 = cljs.core.next(seq__37006__$1);
var G__37234 = null;
var G__37235 = (0);
var G__37236 = (0);
seq__37006 = G__37233;
chunk__37008 = G__37234;
count__37009 = G__37235;
i__37010 = G__37236;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
