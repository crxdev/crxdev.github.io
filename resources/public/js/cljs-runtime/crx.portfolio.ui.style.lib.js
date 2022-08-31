goog.provide('crx.portfolio.ui.style.lib');
crx.portfolio.ui.style.lib.__GT_html_safe = (function crx$portfolio$ui$style$lib$__GT_html_safe(var_args){
var G__42833 = arguments.length;
switch (G__42833) {
case 1:
return crx.portfolio.ui.style.lib.__GT_html_safe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___42863 = arguments.length;
var i__4865__auto___42864 = (0);
while(true){
if((i__4865__auto___42864 < len__4864__auto___42863)){
args_arr__4885__auto__.push((arguments[i__4865__auto___42864]));

var G__42865 = (i__4865__auto___42864 + (1));
i__4865__auto___42864 = G__42865;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return crx.portfolio.ui.style.lib.__GT_html_safe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(crx.portfolio.ui.style.lib.__GT_html_safe.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(x)){
return clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),/\W/,"-");
} else {
return null;
}
}));

(crx.portfolio.ui.style.lib.__GT_html_safe.cljs$core$IFn$_invoke$arity$variadic = (function (x1,x2,xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(crx.portfolio.ui.style.lib.__GT_html_safe)),cljs.core.into.cljs$core$IFn$_invoke$arity$2((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[x1,x2],null)),xs)));
}));

/** @this {Function} */
(crx.portfolio.ui.style.lib.__GT_html_safe.cljs$lang$applyTo = (function (seq42830){
var G__42831 = cljs.core.first(seq42830);
var seq42830__$1 = cljs.core.next(seq42830);
var G__42832 = cljs.core.first(seq42830__$1);
var seq42830__$2 = cljs.core.next(seq42830__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42831,G__42832,seq42830__$2);
}));

(crx.portfolio.ui.style.lib.__GT_html_safe.cljs$lang$maxFixedArity = (2));

crx.portfolio.ui.style.lib._classes_mapper = (function crx$portfolio$ui$style$lib$_classes_mapper(cls){
if(cljs.core.map_QMARK_(cls)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__42845){
var vec__42849 = p__42845;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42849,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42849,(1),null);
if(cljs.core.truth_(v)){
return k;
} else {
return null;
}
}),cls);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cls], null);
}
});
crx.portfolio.ui.style.lib.classes = (function crx$portfolio$ui$style$lib$classes(var_args){
var args__4870__auto__ = [];
var len__4864__auto___42870 = arguments.length;
var i__4865__auto___42871 = (0);
while(true){
if((i__4865__auto___42871 < len__4864__auto___42870)){
args__4870__auto__.push((arguments[i__4865__auto___42871]));

var G__42873 = (i__4865__auto___42871 + (1));
i__4865__auto___42871 = G__42873;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return crx.portfolio.ui.style.lib.classes.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(crx.portfolio.ui.style.lib.classes.cljs$core$IFn$_invoke$arity$variadic = (function (classnames){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(crx.portfolio.ui.style.lib.__GT_html_safe,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(crx.portfolio.ui.style.lib._classes_mapper,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([classnames], 0))));
}));

(crx.portfolio.ui.style.lib.classes.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(crx.portfolio.ui.style.lib.classes.cljs$lang$applyTo = (function (seq42852){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42852));
}));

crx.portfolio.ui.style.lib.opacity = (function crx$portfolio$ui$style$lib$opacity(o){
var ie8 = ["progid:DXImageTransform.Microsoft.Alpha(Opacity=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(o),")"].join('');
var ie5 = ["alpha(opacity=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(o),")"].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),o], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"-ms-filter","-ms-filter",-1546787993),ie8], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"-ms-filter","-ms-filter",-1546787993),ie8], null)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),ie5], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),ie5], null)], 0))], null)], null);
});
crx.portfolio.ui.style.lib._transition_prop = (function crx$portfolio$ui$style$lib$_transition_prop(p__42858){
var vec__42859 = p__42858;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42859,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42859,(1),null);
return [cljs.core.name(k)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
});
crx.portfolio.ui.style.lib.transition = (function crx$portfolio$ui$style$lib$transition(transitions){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(crx.portfolio.ui.style.lib._transition_prop,transitions))], null)], null)], null);
});

//# sourceMappingURL=crx.portfolio.ui.style.lib.js.map
