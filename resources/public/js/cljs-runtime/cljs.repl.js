goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39230){
var map__39233 = p__39230;
var map__39233__$1 = cljs.core.__destructure_map(map__39233);
var m = map__39233__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39233__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39233__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39247_39635 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39248_39636 = null;
var count__39249_39637 = (0);
var i__39250_39638 = (0);
while(true){
if((i__39250_39638 < count__39249_39637)){
var f_39644 = chunk__39248_39636.cljs$core$IIndexed$_nth$arity$2(null,i__39250_39638);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39644], 0));


var G__39645 = seq__39247_39635;
var G__39646 = chunk__39248_39636;
var G__39647 = count__39249_39637;
var G__39648 = (i__39250_39638 + (1));
seq__39247_39635 = G__39645;
chunk__39248_39636 = G__39646;
count__39249_39637 = G__39647;
i__39250_39638 = G__39648;
continue;
} else {
var temp__5753__auto___39649 = cljs.core.seq(seq__39247_39635);
if(temp__5753__auto___39649){
var seq__39247_39651__$1 = temp__5753__auto___39649;
if(cljs.core.chunked_seq_QMARK_(seq__39247_39651__$1)){
var c__4679__auto___39654 = cljs.core.chunk_first(seq__39247_39651__$1);
var G__39656 = cljs.core.chunk_rest(seq__39247_39651__$1);
var G__39657 = c__4679__auto___39654;
var G__39658 = cljs.core.count(c__4679__auto___39654);
var G__39659 = (0);
seq__39247_39635 = G__39656;
chunk__39248_39636 = G__39657;
count__39249_39637 = G__39658;
i__39250_39638 = G__39659;
continue;
} else {
var f_39661 = cljs.core.first(seq__39247_39651__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39661], 0));


var G__39663 = cljs.core.next(seq__39247_39651__$1);
var G__39664 = null;
var G__39665 = (0);
var G__39666 = (0);
seq__39247_39635 = G__39663;
chunk__39248_39636 = G__39664;
count__39249_39637 = G__39665;
i__39250_39638 = G__39666;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39668 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_39668], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_39668)))?cljs.core.second(arglists_39668):arglists_39668)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39268_39677 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39270_39678 = null;
var count__39271_39679 = (0);
var i__39272_39680 = (0);
while(true){
if((i__39272_39680 < count__39271_39679)){
var vec__39313_39681 = chunk__39270_39678.cljs$core$IIndexed$_nth$arity$2(null,i__39272_39680);
var name_39682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39313_39681,(0),null);
var map__39316_39683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39313_39681,(1),null);
var map__39316_39684__$1 = cljs.core.__destructure_map(map__39316_39683);
var doc_39685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39316_39684__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39316_39684__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39682], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39686], 0));

if(cljs.core.truth_(doc_39685)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39685], 0));
} else {
}


var G__39690 = seq__39268_39677;
var G__39691 = chunk__39270_39678;
var G__39692 = count__39271_39679;
var G__39693 = (i__39272_39680 + (1));
seq__39268_39677 = G__39690;
chunk__39270_39678 = G__39691;
count__39271_39679 = G__39692;
i__39272_39680 = G__39693;
continue;
} else {
var temp__5753__auto___39695 = cljs.core.seq(seq__39268_39677);
if(temp__5753__auto___39695){
var seq__39268_39696__$1 = temp__5753__auto___39695;
if(cljs.core.chunked_seq_QMARK_(seq__39268_39696__$1)){
var c__4679__auto___39698 = cljs.core.chunk_first(seq__39268_39696__$1);
var G__39699 = cljs.core.chunk_rest(seq__39268_39696__$1);
var G__39700 = c__4679__auto___39698;
var G__39701 = cljs.core.count(c__4679__auto___39698);
var G__39702 = (0);
seq__39268_39677 = G__39699;
chunk__39270_39678 = G__39700;
count__39271_39679 = G__39701;
i__39272_39680 = G__39702;
continue;
} else {
var vec__39330_39703 = cljs.core.first(seq__39268_39696__$1);
var name_39704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39330_39703,(0),null);
var map__39333_39705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39330_39703,(1),null);
var map__39333_39706__$1 = cljs.core.__destructure_map(map__39333_39705);
var doc_39707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39333_39706__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39333_39706__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39704], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39708], 0));

if(cljs.core.truth_(doc_39707)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39707], 0));
} else {
}


var G__39711 = cljs.core.next(seq__39268_39696__$1);
var G__39712 = null;
var G__39713 = (0);
var G__39714 = (0);
seq__39268_39677 = G__39711;
chunk__39270_39678 = G__39712;
count__39271_39679 = G__39713;
i__39272_39680 = G__39714;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__39344 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39345 = null;
var count__39346 = (0);
var i__39347 = (0);
while(true){
if((i__39347 < count__39346)){
var role = chunk__39345.cljs$core$IIndexed$_nth$arity$2(null,i__39347);
var temp__5753__auto___39722__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___39722__$1)){
var spec_39723 = temp__5753__auto___39722__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39723)], 0));
} else {
}


var G__39724 = seq__39344;
var G__39725 = chunk__39345;
var G__39726 = count__39346;
var G__39727 = (i__39347 + (1));
seq__39344 = G__39724;
chunk__39345 = G__39725;
count__39346 = G__39726;
i__39347 = G__39727;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__39344);
if(temp__5753__auto____$1){
var seq__39344__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__39344__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39344__$1);
var G__39729 = cljs.core.chunk_rest(seq__39344__$1);
var G__39730 = c__4679__auto__;
var G__39731 = cljs.core.count(c__4679__auto__);
var G__39732 = (0);
seq__39344 = G__39729;
chunk__39345 = G__39730;
count__39346 = G__39731;
i__39347 = G__39732;
continue;
} else {
var role = cljs.core.first(seq__39344__$1);
var temp__5753__auto___39734__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___39734__$2)){
var spec_39736 = temp__5753__auto___39734__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39736)], 0));
} else {
}


var G__39737 = cljs.core.next(seq__39344__$1);
var G__39738 = null;
var G__39739 = (0);
var G__39740 = (0);
seq__39344 = G__39737;
chunk__39345 = G__39738;
count__39346 = G__39739;
i__39347 = G__39740;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__39743 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__39744 = cljs.core.ex_cause(t);
via = G__39743;
t = G__39744;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__39423 = datafied_throwable;
var map__39423__$1 = cljs.core.__destructure_map(map__39423);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39423__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39423__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39423__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__39424 = cljs.core.last(via);
var map__39424__$1 = cljs.core.__destructure_map(map__39424);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39424__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39424__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39424__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__39425 = data;
var map__39425__$1 = cljs.core.__destructure_map(map__39425);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39425__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39425__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39425__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__39426 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__39426__$1 = cljs.core.__destructure_map(map__39426);
var top_data = map__39426__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39426__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__39446 = phase;
var G__39446__$1 = (((G__39446 instanceof cljs.core.Keyword))?G__39446.fqn:null);
switch (G__39446__$1) {
case "read-source":
var map__39468 = data;
var map__39468__$1 = cljs.core.__destructure_map(map__39468);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39468__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39468__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__39470 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__39470__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39470,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39470);
var G__39470__$2 = (cljs.core.truth_((function (){var fexpr__39478 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39478.cljs$core$IFn$_invoke$arity$1 ? fexpr__39478.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39478.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39470__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39470__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39470__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39470__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__39480 = top_data;
var G__39480__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39480,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39480);
var G__39480__$2 = (cljs.core.truth_((function (){var fexpr__39488 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39488.cljs$core$IFn$_invoke$arity$1 ? fexpr__39488.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39488.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39480__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39480__$1);
var G__39480__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39480__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39480__$2);
var G__39480__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39480__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39480__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39480__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39480__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__39508 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39508,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39508,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39508,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39508,(3),null);
var G__39516 = top_data;
var G__39516__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39516,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__39516);
var G__39516__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39516__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__39516__$1);
var G__39516__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39516__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__39516__$2);
var G__39516__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39516__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39516__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39516__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39516__$4;
}

break;
case "execution":
var vec__39523 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39523,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39523,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39523,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39523,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__39409_SHARP_){
var or__4253__auto__ = (p1__39409_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__39529 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39529.cljs$core$IFn$_invoke$arity$1 ? fexpr__39529.cljs$core$IFn$_invoke$arity$1(p1__39409_SHARP_) : fexpr__39529.call(null,p1__39409_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__39533 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__39533__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39533,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__39533);
var G__39533__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39533__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39533__$1);
var G__39533__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39533__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__39533__$2);
var G__39533__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39533__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__39533__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39533__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39533__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39446__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__39560){
var map__39562 = p__39560;
var map__39562__$1 = cljs.core.__destructure_map(map__39562);
var triage_data = map__39562__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39562__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39562__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39562__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39562__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39562__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39562__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39562__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39562__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__39570 = phase;
var G__39570__$1 = (((G__39570 instanceof cljs.core.Keyword))?G__39570.fqn:null);
switch (G__39570__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__39573 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__39574 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39575 = loc;
var G__39576 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39579_39816 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39580_39817 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39581_39818 = true;
var _STAR_print_fn_STAR__temp_val__39582_39819 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39581_39818);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39582_39819);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39553_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39553_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39580_39817);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39579_39816);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39573,G__39574,G__39575,G__39576) : format.call(null,G__39573,G__39574,G__39575,G__39576));

break;
case "macroexpansion":
var G__39587 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__39588 = cause_type;
var G__39589 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39590 = loc;
var G__39591 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39587,G__39588,G__39589,G__39590,G__39591) : format.call(null,G__39587,G__39588,G__39589,G__39590,G__39591));

break;
case "compile-syntax-check":
var G__39593 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__39594 = cause_type;
var G__39595 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39596 = loc;
var G__39597 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39593,G__39594,G__39595,G__39596,G__39597) : format.call(null,G__39593,G__39594,G__39595,G__39596,G__39597));

break;
case "compilation":
var G__39599 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__39600 = cause_type;
var G__39601 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39602 = loc;
var G__39603 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39599,G__39600,G__39601,G__39602,G__39603) : format.call(null,G__39599,G__39600,G__39601,G__39602,G__39603));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__39605 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__39606 = symbol;
var G__39607 = loc;
var G__39608 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39609_39833 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39610_39834 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39611_39835 = true;
var _STAR_print_fn_STAR__temp_val__39612_39836 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39611_39835);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39612_39836);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39555_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39555_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39610_39834);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39609_39833);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39605,G__39606,G__39607,G__39608) : format.call(null,G__39605,G__39606,G__39607,G__39608));
} else {
var G__39617 = "Execution error%s at %s(%s).\n%s\n";
var G__39618 = cause_type;
var G__39619 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39620 = loc;
var G__39621 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39617,G__39618,G__39619,G__39620,G__39621) : format.call(null,G__39617,G__39618,G__39619,G__39620,G__39621));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39570__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
