goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___43648 = arguments.length;
var i__4865__auto___43649 = (0);
while(true){
if((i__4865__auto___43649 < len__4864__auto___43648)){
args__4870__auto__.push((arguments[i__4865__auto___43649]));

var G__43650 = (i__4865__auto___43649 + (1));
i__4865__auto___43649 = G__43650;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq42867){
var G__42868 = cljs.core.first(seq42867);
var seq42867__$1 = cljs.core.next(seq42867);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42868,seq42867__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__42877 = cljs.core.seq(sources);
var chunk__42878 = null;
var count__42879 = (0);
var i__42880 = (0);
while(true){
if((i__42880 < count__42879)){
var map__42944 = chunk__42878.cljs$core$IIndexed$_nth$arity$2(null,i__42880);
var map__42944__$1 = cljs.core.__destructure_map(map__42944);
var src = map__42944__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42944__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42944__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42944__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42944__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e42945){var e_43658 = e42945;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_43658);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_43658.message)].join('')));
}

var G__43659 = seq__42877;
var G__43660 = chunk__42878;
var G__43661 = count__42879;
var G__43662 = (i__42880 + (1));
seq__42877 = G__43659;
chunk__42878 = G__43660;
count__42879 = G__43661;
i__42880 = G__43662;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42877);
if(temp__5753__auto__){
var seq__42877__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42877__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__42877__$1);
var G__43663 = cljs.core.chunk_rest(seq__42877__$1);
var G__43664 = c__4679__auto__;
var G__43665 = cljs.core.count(c__4679__auto__);
var G__43666 = (0);
seq__42877 = G__43663;
chunk__42878 = G__43664;
count__42879 = G__43665;
i__42880 = G__43666;
continue;
} else {
var map__42952 = cljs.core.first(seq__42877__$1);
var map__42952__$1 = cljs.core.__destructure_map(map__42952);
var src = map__42952__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42952__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42952__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42952__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42952__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e42954){var e_43668 = e42954;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_43668);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_43668.message)].join('')));
}

var G__43669 = cljs.core.next(seq__42877__$1);
var G__43670 = null;
var G__43671 = (0);
var G__43672 = (0);
seq__42877 = G__43669;
chunk__42878 = G__43670;
count__42879 = G__43671;
i__42880 = G__43672;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__42957 = cljs.core.seq(js_requires);
var chunk__42958 = null;
var count__42959 = (0);
var i__42960 = (0);
while(true){
if((i__42960 < count__42959)){
var js_ns = chunk__42958.cljs$core$IIndexed$_nth$arity$2(null,i__42960);
var require_str_43678 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_43678);


var G__43679 = seq__42957;
var G__43680 = chunk__42958;
var G__43681 = count__42959;
var G__43682 = (i__42960 + (1));
seq__42957 = G__43679;
chunk__42958 = G__43680;
count__42959 = G__43681;
i__42960 = G__43682;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42957);
if(temp__5753__auto__){
var seq__42957__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42957__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__42957__$1);
var G__43685 = cljs.core.chunk_rest(seq__42957__$1);
var G__43686 = c__4679__auto__;
var G__43687 = cljs.core.count(c__4679__auto__);
var G__43688 = (0);
seq__42957 = G__43685;
chunk__42958 = G__43686;
count__42959 = G__43687;
i__42960 = G__43688;
continue;
} else {
var js_ns = cljs.core.first(seq__42957__$1);
var require_str_43691 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_43691);


var G__43692 = cljs.core.next(seq__42957__$1);
var G__43693 = null;
var G__43694 = (0);
var G__43695 = (0);
seq__42957 = G__43692;
chunk__42958 = G__43693;
count__42959 = G__43694;
i__42960 = G__43695;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__42972){
var map__42973 = p__42972;
var map__42973__$1 = cljs.core.__destructure_map(map__42973);
var msg = map__42973__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42973__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42973__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42977(s__42978){
return (new cljs.core.LazySeq(null,(function (){
var s__42978__$1 = s__42978;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42978__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__42985 = cljs.core.first(xs__6308__auto__);
var map__42985__$1 = cljs.core.__destructure_map(map__42985);
var src = map__42985__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42985__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42985__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__42978__$1,map__42985,map__42985__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__42973,map__42973__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42977_$_iter__42979(s__42980){
return (new cljs.core.LazySeq(null,((function (s__42978__$1,map__42985,map__42985__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__42973,map__42973__$1,msg,info,reload_info){
return (function (){
var s__42980__$1 = s__42980;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__42980__$1);
if(temp__5753__auto____$1){
var s__42980__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42980__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__42980__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__42982 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__42981 = (0);
while(true){
if((i__42981 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__42981);
cljs.core.chunk_append(b__42982,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__43705 = (i__42981 + (1));
i__42981 = G__43705;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42982),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42977_$_iter__42979(cljs.core.chunk_rest(s__42980__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42982),null);
}
} else {
var warning = cljs.core.first(s__42980__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42977_$_iter__42979(cljs.core.rest(s__42980__$2)));
}
} else {
return null;
}
break;
}
});})(s__42978__$1,map__42985,map__42985__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__42973,map__42973__$1,msg,info,reload_info))
,null,null));
});})(s__42978__$1,map__42985,map__42985__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__42973,map__42973__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42977(cljs.core.rest(s__42978__$1)));
} else {
var G__43706 = cljs.core.rest(s__42978__$1);
s__42978__$1 = G__43706;
continue;
}
} else {
var G__43707 = cljs.core.rest(s__42978__$1);
s__42978__$1 = G__43707;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__42990_43708 = cljs.core.seq(warnings);
var chunk__42991_43709 = null;
var count__42992_43710 = (0);
var i__42993_43711 = (0);
while(true){
if((i__42993_43711 < count__42992_43710)){
var map__43004_43712 = chunk__42991_43709.cljs$core$IIndexed$_nth$arity$2(null,i__42993_43711);
var map__43004_43713__$1 = cljs.core.__destructure_map(map__43004_43712);
var w_43714 = map__43004_43713__$1;
var msg_43715__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43004_43713__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_43716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43004_43713__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_43717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43004_43713__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_43718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43004_43713__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_43718)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_43716),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_43717),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_43715__$1)].join(''));


var G__43719 = seq__42990_43708;
var G__43720 = chunk__42991_43709;
var G__43721 = count__42992_43710;
var G__43722 = (i__42993_43711 + (1));
seq__42990_43708 = G__43719;
chunk__42991_43709 = G__43720;
count__42992_43710 = G__43721;
i__42993_43711 = G__43722;
continue;
} else {
var temp__5753__auto___43723 = cljs.core.seq(seq__42990_43708);
if(temp__5753__auto___43723){
var seq__42990_43724__$1 = temp__5753__auto___43723;
if(cljs.core.chunked_seq_QMARK_(seq__42990_43724__$1)){
var c__4679__auto___43725 = cljs.core.chunk_first(seq__42990_43724__$1);
var G__43726 = cljs.core.chunk_rest(seq__42990_43724__$1);
var G__43727 = c__4679__auto___43725;
var G__43728 = cljs.core.count(c__4679__auto___43725);
var G__43729 = (0);
seq__42990_43708 = G__43726;
chunk__42991_43709 = G__43727;
count__42992_43710 = G__43728;
i__42993_43711 = G__43729;
continue;
} else {
var map__43009_43730 = cljs.core.first(seq__42990_43724__$1);
var map__43009_43731__$1 = cljs.core.__destructure_map(map__43009_43730);
var w_43732 = map__43009_43731__$1;
var msg_43733__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43009_43731__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_43734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43009_43731__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_43735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43009_43731__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_43736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43009_43731__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_43736)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_43734),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_43735),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_43733__$1)].join(''));


var G__43737 = cljs.core.next(seq__42990_43724__$1);
var G__43738 = null;
var G__43739 = (0);
var G__43740 = (0);
seq__42990_43708 = G__43737;
chunk__42991_43709 = G__43738;
count__42992_43710 = G__43739;
i__42993_43711 = G__43740;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__42969_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__42969_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__43025){
var map__43027 = p__43025;
var map__43027__$1 = cljs.core.__destructure_map(map__43027);
var msg = map__43027__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43027__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43027__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__43030 = cljs.core.seq(updates);
var chunk__43032 = null;
var count__43033 = (0);
var i__43034 = (0);
while(true){
if((i__43034 < count__43033)){
var path = chunk__43032.cljs$core$IIndexed$_nth$arity$2(null,i__43034);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__43263_43744 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__43267_43745 = null;
var count__43268_43746 = (0);
var i__43269_43747 = (0);
while(true){
if((i__43269_43747 < count__43268_43746)){
var node_43748 = chunk__43267_43745.cljs$core$IIndexed$_nth$arity$2(null,i__43269_43747);
if(cljs.core.not(node_43748.shadow$old)){
var path_match_43749 = shadow.cljs.devtools.client.browser.match_paths(node_43748.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43749)){
var new_link_43751 = (function (){var G__43338 = node_43748.cloneNode(true);
G__43338.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43749),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43338;
})();
(node_43748.shadow$old = true);

(new_link_43751.onload = ((function (seq__43263_43744,chunk__43267_43745,count__43268_43746,i__43269_43747,seq__43030,chunk__43032,count__43033,i__43034,new_link_43751,path_match_43749,node_43748,path,map__43027,map__43027__$1,msg,updates,reload_info){
return (function (e){
var seq__43339_43752 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__43341_43753 = null;
var count__43342_43754 = (0);
var i__43343_43755 = (0);
while(true){
if((i__43343_43755 < count__43342_43754)){
var map__43351_43756 = chunk__43341_43753.cljs$core$IIndexed$_nth$arity$2(null,i__43343_43755);
var map__43351_43757__$1 = cljs.core.__destructure_map(map__43351_43756);
var task_43758 = map__43351_43757__$1;
var fn_str_43759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43351_43757__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43351_43757__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43761 = goog.getObjectByName(fn_str_43759,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43760)].join(''));

(fn_obj_43761.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43761.cljs$core$IFn$_invoke$arity$2(path,new_link_43751) : fn_obj_43761.call(null,path,new_link_43751));


var G__43762 = seq__43339_43752;
var G__43763 = chunk__43341_43753;
var G__43764 = count__43342_43754;
var G__43765 = (i__43343_43755 + (1));
seq__43339_43752 = G__43762;
chunk__43341_43753 = G__43763;
count__43342_43754 = G__43764;
i__43343_43755 = G__43765;
continue;
} else {
var temp__5753__auto___43766 = cljs.core.seq(seq__43339_43752);
if(temp__5753__auto___43766){
var seq__43339_43767__$1 = temp__5753__auto___43766;
if(cljs.core.chunked_seq_QMARK_(seq__43339_43767__$1)){
var c__4679__auto___43768 = cljs.core.chunk_first(seq__43339_43767__$1);
var G__43769 = cljs.core.chunk_rest(seq__43339_43767__$1);
var G__43770 = c__4679__auto___43768;
var G__43771 = cljs.core.count(c__4679__auto___43768);
var G__43772 = (0);
seq__43339_43752 = G__43769;
chunk__43341_43753 = G__43770;
count__43342_43754 = G__43771;
i__43343_43755 = G__43772;
continue;
} else {
var map__43361_43773 = cljs.core.first(seq__43339_43767__$1);
var map__43361_43774__$1 = cljs.core.__destructure_map(map__43361_43773);
var task_43775 = map__43361_43774__$1;
var fn_str_43776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43361_43774__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43361_43774__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43778 = goog.getObjectByName(fn_str_43776,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43777)].join(''));

(fn_obj_43778.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43778.cljs$core$IFn$_invoke$arity$2(path,new_link_43751) : fn_obj_43778.call(null,path,new_link_43751));


var G__43779 = cljs.core.next(seq__43339_43767__$1);
var G__43780 = null;
var G__43781 = (0);
var G__43782 = (0);
seq__43339_43752 = G__43779;
chunk__43341_43753 = G__43780;
count__43342_43754 = G__43781;
i__43343_43755 = G__43782;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_43748);
});})(seq__43263_43744,chunk__43267_43745,count__43268_43746,i__43269_43747,seq__43030,chunk__43032,count__43033,i__43034,new_link_43751,path_match_43749,node_43748,path,map__43027,map__43027__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43749], 0));

goog.dom.insertSiblingAfter(new_link_43751,node_43748);


var G__43783 = seq__43263_43744;
var G__43784 = chunk__43267_43745;
var G__43785 = count__43268_43746;
var G__43786 = (i__43269_43747 + (1));
seq__43263_43744 = G__43783;
chunk__43267_43745 = G__43784;
count__43268_43746 = G__43785;
i__43269_43747 = G__43786;
continue;
} else {
var G__43787 = seq__43263_43744;
var G__43788 = chunk__43267_43745;
var G__43789 = count__43268_43746;
var G__43790 = (i__43269_43747 + (1));
seq__43263_43744 = G__43787;
chunk__43267_43745 = G__43788;
count__43268_43746 = G__43789;
i__43269_43747 = G__43790;
continue;
}
} else {
var G__43791 = seq__43263_43744;
var G__43792 = chunk__43267_43745;
var G__43793 = count__43268_43746;
var G__43794 = (i__43269_43747 + (1));
seq__43263_43744 = G__43791;
chunk__43267_43745 = G__43792;
count__43268_43746 = G__43793;
i__43269_43747 = G__43794;
continue;
}
} else {
var temp__5753__auto___43795 = cljs.core.seq(seq__43263_43744);
if(temp__5753__auto___43795){
var seq__43263_43796__$1 = temp__5753__auto___43795;
if(cljs.core.chunked_seq_QMARK_(seq__43263_43796__$1)){
var c__4679__auto___43797 = cljs.core.chunk_first(seq__43263_43796__$1);
var G__43798 = cljs.core.chunk_rest(seq__43263_43796__$1);
var G__43799 = c__4679__auto___43797;
var G__43800 = cljs.core.count(c__4679__auto___43797);
var G__43801 = (0);
seq__43263_43744 = G__43798;
chunk__43267_43745 = G__43799;
count__43268_43746 = G__43800;
i__43269_43747 = G__43801;
continue;
} else {
var node_43804 = cljs.core.first(seq__43263_43796__$1);
if(cljs.core.not(node_43804.shadow$old)){
var path_match_43806 = shadow.cljs.devtools.client.browser.match_paths(node_43804.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43806)){
var new_link_43807 = (function (){var G__43371 = node_43804.cloneNode(true);
G__43371.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43806),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43371;
})();
(node_43804.shadow$old = true);

(new_link_43807.onload = ((function (seq__43263_43744,chunk__43267_43745,count__43268_43746,i__43269_43747,seq__43030,chunk__43032,count__43033,i__43034,new_link_43807,path_match_43806,node_43804,seq__43263_43796__$1,temp__5753__auto___43795,path,map__43027,map__43027__$1,msg,updates,reload_info){
return (function (e){
var seq__43376_43809 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__43378_43810 = null;
var count__43379_43811 = (0);
var i__43380_43812 = (0);
while(true){
if((i__43380_43812 < count__43379_43811)){
var map__43394_43814 = chunk__43378_43810.cljs$core$IIndexed$_nth$arity$2(null,i__43380_43812);
var map__43394_43815__$1 = cljs.core.__destructure_map(map__43394_43814);
var task_43816 = map__43394_43815__$1;
var fn_str_43817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43394_43815__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43394_43815__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43819 = goog.getObjectByName(fn_str_43817,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43818)].join(''));

(fn_obj_43819.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43819.cljs$core$IFn$_invoke$arity$2(path,new_link_43807) : fn_obj_43819.call(null,path,new_link_43807));


var G__43820 = seq__43376_43809;
var G__43821 = chunk__43378_43810;
var G__43822 = count__43379_43811;
var G__43823 = (i__43380_43812 + (1));
seq__43376_43809 = G__43820;
chunk__43378_43810 = G__43821;
count__43379_43811 = G__43822;
i__43380_43812 = G__43823;
continue;
} else {
var temp__5753__auto___43824__$1 = cljs.core.seq(seq__43376_43809);
if(temp__5753__auto___43824__$1){
var seq__43376_43825__$1 = temp__5753__auto___43824__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43376_43825__$1)){
var c__4679__auto___43826 = cljs.core.chunk_first(seq__43376_43825__$1);
var G__43827 = cljs.core.chunk_rest(seq__43376_43825__$1);
var G__43828 = c__4679__auto___43826;
var G__43829 = cljs.core.count(c__4679__auto___43826);
var G__43830 = (0);
seq__43376_43809 = G__43827;
chunk__43378_43810 = G__43828;
count__43379_43811 = G__43829;
i__43380_43812 = G__43830;
continue;
} else {
var map__43400_43831 = cljs.core.first(seq__43376_43825__$1);
var map__43400_43832__$1 = cljs.core.__destructure_map(map__43400_43831);
var task_43833 = map__43400_43832__$1;
var fn_str_43834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43400_43832__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43400_43832__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43836 = goog.getObjectByName(fn_str_43834,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43835)].join(''));

(fn_obj_43836.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43836.cljs$core$IFn$_invoke$arity$2(path,new_link_43807) : fn_obj_43836.call(null,path,new_link_43807));


var G__43837 = cljs.core.next(seq__43376_43825__$1);
var G__43838 = null;
var G__43839 = (0);
var G__43840 = (0);
seq__43376_43809 = G__43837;
chunk__43378_43810 = G__43838;
count__43379_43811 = G__43839;
i__43380_43812 = G__43840;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_43804);
});})(seq__43263_43744,chunk__43267_43745,count__43268_43746,i__43269_43747,seq__43030,chunk__43032,count__43033,i__43034,new_link_43807,path_match_43806,node_43804,seq__43263_43796__$1,temp__5753__auto___43795,path,map__43027,map__43027__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43806], 0));

goog.dom.insertSiblingAfter(new_link_43807,node_43804);


var G__43841 = cljs.core.next(seq__43263_43796__$1);
var G__43842 = null;
var G__43843 = (0);
var G__43844 = (0);
seq__43263_43744 = G__43841;
chunk__43267_43745 = G__43842;
count__43268_43746 = G__43843;
i__43269_43747 = G__43844;
continue;
} else {
var G__43845 = cljs.core.next(seq__43263_43796__$1);
var G__43846 = null;
var G__43847 = (0);
var G__43848 = (0);
seq__43263_43744 = G__43845;
chunk__43267_43745 = G__43846;
count__43268_43746 = G__43847;
i__43269_43747 = G__43848;
continue;
}
} else {
var G__43849 = cljs.core.next(seq__43263_43796__$1);
var G__43850 = null;
var G__43851 = (0);
var G__43852 = (0);
seq__43263_43744 = G__43849;
chunk__43267_43745 = G__43850;
count__43268_43746 = G__43851;
i__43269_43747 = G__43852;
continue;
}
}
} else {
}
}
break;
}


var G__43853 = seq__43030;
var G__43854 = chunk__43032;
var G__43855 = count__43033;
var G__43856 = (i__43034 + (1));
seq__43030 = G__43853;
chunk__43032 = G__43854;
count__43033 = G__43855;
i__43034 = G__43856;
continue;
} else {
var G__43857 = seq__43030;
var G__43858 = chunk__43032;
var G__43859 = count__43033;
var G__43860 = (i__43034 + (1));
seq__43030 = G__43857;
chunk__43032 = G__43858;
count__43033 = G__43859;
i__43034 = G__43860;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43030);
if(temp__5753__auto__){
var seq__43030__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43030__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__43030__$1);
var G__43861 = cljs.core.chunk_rest(seq__43030__$1);
var G__43862 = c__4679__auto__;
var G__43863 = cljs.core.count(c__4679__auto__);
var G__43864 = (0);
seq__43030 = G__43861;
chunk__43032 = G__43862;
count__43033 = G__43863;
i__43034 = G__43864;
continue;
} else {
var path = cljs.core.first(seq__43030__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__43402_43865 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__43406_43866 = null;
var count__43407_43867 = (0);
var i__43408_43868 = (0);
while(true){
if((i__43408_43868 < count__43407_43867)){
var node_43870 = chunk__43406_43866.cljs$core$IIndexed$_nth$arity$2(null,i__43408_43868);
if(cljs.core.not(node_43870.shadow$old)){
var path_match_43871 = shadow.cljs.devtools.client.browser.match_paths(node_43870.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43871)){
var new_link_43873 = (function (){var G__43477 = node_43870.cloneNode(true);
G__43477.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43871),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43477;
})();
(node_43870.shadow$old = true);

(new_link_43873.onload = ((function (seq__43402_43865,chunk__43406_43866,count__43407_43867,i__43408_43868,seq__43030,chunk__43032,count__43033,i__43034,new_link_43873,path_match_43871,node_43870,path,seq__43030__$1,temp__5753__auto__,map__43027,map__43027__$1,msg,updates,reload_info){
return (function (e){
var seq__43482_43874 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__43484_43875 = null;
var count__43485_43876 = (0);
var i__43486_43877 = (0);
while(true){
if((i__43486_43877 < count__43485_43876)){
var map__43500_43878 = chunk__43484_43875.cljs$core$IIndexed$_nth$arity$2(null,i__43486_43877);
var map__43500_43879__$1 = cljs.core.__destructure_map(map__43500_43878);
var task_43880 = map__43500_43879__$1;
var fn_str_43881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43500_43879__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43500_43879__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43883 = goog.getObjectByName(fn_str_43881,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43882)].join(''));

(fn_obj_43883.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43883.cljs$core$IFn$_invoke$arity$2(path,new_link_43873) : fn_obj_43883.call(null,path,new_link_43873));


var G__43885 = seq__43482_43874;
var G__43886 = chunk__43484_43875;
var G__43887 = count__43485_43876;
var G__43888 = (i__43486_43877 + (1));
seq__43482_43874 = G__43885;
chunk__43484_43875 = G__43886;
count__43485_43876 = G__43887;
i__43486_43877 = G__43888;
continue;
} else {
var temp__5753__auto___43890__$1 = cljs.core.seq(seq__43482_43874);
if(temp__5753__auto___43890__$1){
var seq__43482_43891__$1 = temp__5753__auto___43890__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43482_43891__$1)){
var c__4679__auto___43892 = cljs.core.chunk_first(seq__43482_43891__$1);
var G__43893 = cljs.core.chunk_rest(seq__43482_43891__$1);
var G__43894 = c__4679__auto___43892;
var G__43895 = cljs.core.count(c__4679__auto___43892);
var G__43896 = (0);
seq__43482_43874 = G__43893;
chunk__43484_43875 = G__43894;
count__43485_43876 = G__43895;
i__43486_43877 = G__43896;
continue;
} else {
var map__43507_43897 = cljs.core.first(seq__43482_43891__$1);
var map__43507_43898__$1 = cljs.core.__destructure_map(map__43507_43897);
var task_43899 = map__43507_43898__$1;
var fn_str_43900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43507_43898__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43507_43898__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43902 = goog.getObjectByName(fn_str_43900,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43901)].join(''));

(fn_obj_43902.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43902.cljs$core$IFn$_invoke$arity$2(path,new_link_43873) : fn_obj_43902.call(null,path,new_link_43873));


var G__43903 = cljs.core.next(seq__43482_43891__$1);
var G__43904 = null;
var G__43905 = (0);
var G__43906 = (0);
seq__43482_43874 = G__43903;
chunk__43484_43875 = G__43904;
count__43485_43876 = G__43905;
i__43486_43877 = G__43906;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_43870);
});})(seq__43402_43865,chunk__43406_43866,count__43407_43867,i__43408_43868,seq__43030,chunk__43032,count__43033,i__43034,new_link_43873,path_match_43871,node_43870,path,seq__43030__$1,temp__5753__auto__,map__43027,map__43027__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43871], 0));

goog.dom.insertSiblingAfter(new_link_43873,node_43870);


var G__43908 = seq__43402_43865;
var G__43909 = chunk__43406_43866;
var G__43910 = count__43407_43867;
var G__43911 = (i__43408_43868 + (1));
seq__43402_43865 = G__43908;
chunk__43406_43866 = G__43909;
count__43407_43867 = G__43910;
i__43408_43868 = G__43911;
continue;
} else {
var G__43912 = seq__43402_43865;
var G__43913 = chunk__43406_43866;
var G__43914 = count__43407_43867;
var G__43915 = (i__43408_43868 + (1));
seq__43402_43865 = G__43912;
chunk__43406_43866 = G__43913;
count__43407_43867 = G__43914;
i__43408_43868 = G__43915;
continue;
}
} else {
var G__43916 = seq__43402_43865;
var G__43917 = chunk__43406_43866;
var G__43918 = count__43407_43867;
var G__43919 = (i__43408_43868 + (1));
seq__43402_43865 = G__43916;
chunk__43406_43866 = G__43917;
count__43407_43867 = G__43918;
i__43408_43868 = G__43919;
continue;
}
} else {
var temp__5753__auto___43921__$1 = cljs.core.seq(seq__43402_43865);
if(temp__5753__auto___43921__$1){
var seq__43402_43922__$1 = temp__5753__auto___43921__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43402_43922__$1)){
var c__4679__auto___43923 = cljs.core.chunk_first(seq__43402_43922__$1);
var G__43924 = cljs.core.chunk_rest(seq__43402_43922__$1);
var G__43925 = c__4679__auto___43923;
var G__43926 = cljs.core.count(c__4679__auto___43923);
var G__43927 = (0);
seq__43402_43865 = G__43924;
chunk__43406_43866 = G__43925;
count__43407_43867 = G__43926;
i__43408_43868 = G__43927;
continue;
} else {
var node_43928 = cljs.core.first(seq__43402_43922__$1);
if(cljs.core.not(node_43928.shadow$old)){
var path_match_43930 = shadow.cljs.devtools.client.browser.match_paths(node_43928.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43930)){
var new_link_43931 = (function (){var G__43520 = node_43928.cloneNode(true);
G__43520.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43930),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43520;
})();
(node_43928.shadow$old = true);

(new_link_43931.onload = ((function (seq__43402_43865,chunk__43406_43866,count__43407_43867,i__43408_43868,seq__43030,chunk__43032,count__43033,i__43034,new_link_43931,path_match_43930,node_43928,seq__43402_43922__$1,temp__5753__auto___43921__$1,path,seq__43030__$1,temp__5753__auto__,map__43027,map__43027__$1,msg,updates,reload_info){
return (function (e){
var seq__43522_43932 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__43524_43933 = null;
var count__43525_43934 = (0);
var i__43526_43935 = (0);
while(true){
if((i__43526_43935 < count__43525_43934)){
var map__43544_43937 = chunk__43524_43933.cljs$core$IIndexed$_nth$arity$2(null,i__43526_43935);
var map__43544_43938__$1 = cljs.core.__destructure_map(map__43544_43937);
var task_43939 = map__43544_43938__$1;
var fn_str_43940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43544_43938__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43544_43938__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43944 = goog.getObjectByName(fn_str_43940,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43941)].join(''));

(fn_obj_43944.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43944.cljs$core$IFn$_invoke$arity$2(path,new_link_43931) : fn_obj_43944.call(null,path,new_link_43931));


var G__43945 = seq__43522_43932;
var G__43947 = chunk__43524_43933;
var G__43948 = count__43525_43934;
var G__43949 = (i__43526_43935 + (1));
seq__43522_43932 = G__43945;
chunk__43524_43933 = G__43947;
count__43525_43934 = G__43948;
i__43526_43935 = G__43949;
continue;
} else {
var temp__5753__auto___43950__$2 = cljs.core.seq(seq__43522_43932);
if(temp__5753__auto___43950__$2){
var seq__43522_43951__$1 = temp__5753__auto___43950__$2;
if(cljs.core.chunked_seq_QMARK_(seq__43522_43951__$1)){
var c__4679__auto___43952 = cljs.core.chunk_first(seq__43522_43951__$1);
var G__43953 = cljs.core.chunk_rest(seq__43522_43951__$1);
var G__43954 = c__4679__auto___43952;
var G__43955 = cljs.core.count(c__4679__auto___43952);
var G__43956 = (0);
seq__43522_43932 = G__43953;
chunk__43524_43933 = G__43954;
count__43525_43934 = G__43955;
i__43526_43935 = G__43956;
continue;
} else {
var map__43553_43957 = cljs.core.first(seq__43522_43951__$1);
var map__43553_43958__$1 = cljs.core.__destructure_map(map__43553_43957);
var task_43960 = map__43553_43958__$1;
var fn_str_43961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43553_43958__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43553_43958__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43963 = goog.getObjectByName(fn_str_43961,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43962)].join(''));

(fn_obj_43963.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43963.cljs$core$IFn$_invoke$arity$2(path,new_link_43931) : fn_obj_43963.call(null,path,new_link_43931));


var G__43964 = cljs.core.next(seq__43522_43951__$1);
var G__43965 = null;
var G__43966 = (0);
var G__43967 = (0);
seq__43522_43932 = G__43964;
chunk__43524_43933 = G__43965;
count__43525_43934 = G__43966;
i__43526_43935 = G__43967;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_43928);
});})(seq__43402_43865,chunk__43406_43866,count__43407_43867,i__43408_43868,seq__43030,chunk__43032,count__43033,i__43034,new_link_43931,path_match_43930,node_43928,seq__43402_43922__$1,temp__5753__auto___43921__$1,path,seq__43030__$1,temp__5753__auto__,map__43027,map__43027__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43930], 0));

goog.dom.insertSiblingAfter(new_link_43931,node_43928);


var G__43968 = cljs.core.next(seq__43402_43922__$1);
var G__43969 = null;
var G__43970 = (0);
var G__43971 = (0);
seq__43402_43865 = G__43968;
chunk__43406_43866 = G__43969;
count__43407_43867 = G__43970;
i__43408_43868 = G__43971;
continue;
} else {
var G__43972 = cljs.core.next(seq__43402_43922__$1);
var G__43973 = null;
var G__43974 = (0);
var G__43975 = (0);
seq__43402_43865 = G__43972;
chunk__43406_43866 = G__43973;
count__43407_43867 = G__43974;
i__43408_43868 = G__43975;
continue;
}
} else {
var G__43977 = cljs.core.next(seq__43402_43922__$1);
var G__43978 = null;
var G__43979 = (0);
var G__43980 = (0);
seq__43402_43865 = G__43977;
chunk__43406_43866 = G__43978;
count__43407_43867 = G__43979;
i__43408_43868 = G__43980;
continue;
}
}
} else {
}
}
break;
}


var G__43981 = cljs.core.next(seq__43030__$1);
var G__43982 = null;
var G__43983 = (0);
var G__43984 = (0);
seq__43030 = G__43981;
chunk__43032 = G__43982;
count__43033 = G__43983;
i__43034 = G__43984;
continue;
} else {
var G__43985 = cljs.core.next(seq__43030__$1);
var G__43986 = null;
var G__43987 = (0);
var G__43988 = (0);
seq__43030 = G__43985;
chunk__43032 = G__43986;
count__43033 = G__43987;
i__43034 = G__43988;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__43560){
var map__43563 = p__43560;
var map__43563__$1 = cljs.core.__destructure_map(map__43563);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43563__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__43593){
var map__43598 = p__43593;
var map__43598__$1 = cljs.core.__destructure_map(map__43598);
var _ = map__43598__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43598__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__43604,done,error){
var map__43605 = p__43604;
var map__43605__$1 = cljs.core.__destructure_map(map__43605);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43605__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__43606,done,error){
var map__43607 = p__43606;
var map__43607__$1 = cljs.core.__destructure_map(map__43607);
var msg = map__43607__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43607__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43607__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43607__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__43609){
var map__43610 = p__43609;
var map__43610__$1 = cljs.core.__destructure_map(map__43610);
var src = map__43610__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43610__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__43614 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__43614) : done.call(null,G__43614));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__43618){
var map__43619 = p__43618;
var map__43619__$1 = cljs.core.__destructure_map(map__43619);
var msg__$1 = map__43619__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43619__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e43620){var ex = e43620;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__43624){
var map__43625 = p__43624;
var map__43625__$1 = cljs.core.__destructure_map(map__43625);
var env = map__43625__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43625__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__43629){
var map__43630 = p__43629;
var map__43630__$1 = cljs.core.__destructure_map(map__43630);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43630__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43630__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__43631){
var map__43632 = p__43631;
var map__43632__$1 = cljs.core.__destructure_map(map__43632);
var svc = map__43632__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43632__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
