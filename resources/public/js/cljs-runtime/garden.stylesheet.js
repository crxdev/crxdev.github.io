goog.provide('garden.stylesheet');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__4870__auto__ = [];
var len__4864__auto___42783 = arguments.length;
var i__4865__auto___42784 = (0);
while(true){
if((i__4865__auto___42784 < len__4864__auto___42783)){
args__4870__auto__.push((arguments[i__4865__auto___42784]));

var G__42787 = (i__4865__auto___42784 + (1));
i__4865__auto___42784 = G__42787;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (((typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__42788__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__42788 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__42790__i = 0, G__42790__a = new Array(arguments.length -  0);
while (G__42790__i < G__42790__a.length) {G__42790__a[G__42790__i] = arguments[G__42790__i + 0]; ++G__42790__i;}
  children = new cljs.core.IndexedSeq(G__42790__a,0,null);
} 
return G__42788__delegate.call(this,children);};
G__42788.cljs$lang$maxFixedArity = 0;
G__42788.cljs$lang$applyTo = (function (arglist__42794){
var children = cljs.core.seq(arglist__42794);
return G__42788__delegate(children);
});
G__42788.cljs$core$IFn$_invoke$arity$variadic = G__42788__delegate;
return G__42788;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq42695){
var G__42696 = cljs.core.first(seq42695);
var seq42695__$1 = cljs.core.next(seq42695);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42696,seq42695__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__42801__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__42801 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42802__i = 0, G__42802__a = new Array(arguments.length -  0);
while (G__42802__i < G__42802__a.length) {G__42802__a[G__42802__i] = arguments[G__42802__i + 0]; ++G__42802__i;}
  args = new cljs.core.IndexedSeq(G__42802__a,0,null);
} 
return G__42801__delegate.call(this,args);};
G__42801.cljs$lang$maxFixedArity = 0;
G__42801.cljs$lang$applyTo = (function (arglist__42803){
var args = cljs.core.seq(arglist__42803);
return G__42801__delegate(args);
});
G__42801.cljs$core$IFn$_invoke$arity$variadic = G__42801__delegate;
return G__42801;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__4870__auto__ = [];
var len__4864__auto___42806 = arguments.length;
var i__4865__auto___42810 = (0);
while(true){
if((i__4865__auto___42810 < len__4864__auto___42806)){
args__4870__auto__.push((arguments[i__4865__auto___42810]));

var G__42811 = (i__4865__auto___42810 + (1));
i__4865__auto___42810 = G__42811;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq42713){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42713));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__42725 = arguments.length;
switch (G__42725) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___42814 = arguments.length;
var i__4865__auto___42815 = (0);
while(true){
if((i__4865__auto___42815 < len__4864__auto___42814)){
args_arr__4885__auto__.push((arguments[i__4865__auto___42815]));

var G__42817 = (i__4865__auto___42815 + (1));
i__4865__auto___42815 = G__42817;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4886__auto__);

}
});

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq42719){
var G__42720 = cljs.core.first(seq42719);
var seq42719__$1 = cljs.core.next(seq42719);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42720,seq42719__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4870__auto__ = [];
var len__4864__auto___42821 = arguments.length;
var i__4865__auto___42822 = (0);
while(true){
if((i__4865__auto___42822 < len__4864__auto___42821)){
args__4870__auto__.push((arguments[i__4865__auto___42822]));

var G__42823 = (i__4865__auto___42822 + (1));
i__4865__auto___42822 = G__42823;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq42736){
var G__42737 = cljs.core.first(seq42736);
var seq42736__$1 = cljs.core.next(seq42736);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42737,seq42736__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4870__auto__ = [];
var len__4864__auto___42826 = arguments.length;
var i__4865__auto___42827 = (0);
while(true){
if((i__4865__auto___42827 < len__4864__auto___42826)){
args__4870__auto__.push((arguments[i__4865__auto___42827]));

var G__42828 = (i__4865__auto___42827 + (1));
i__4865__auto___42827 = G__42828;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq42744){
var G__42745 = cljs.core.first(seq42744);
var seq42744__$1 = cljs.core.next(seq42744);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42745,seq42744__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4870__auto__ = [];
var len__4864__auto___42834 = arguments.length;
var i__4865__auto___42835 = (0);
while(true){
if((i__4865__auto___42835 < len__4864__auto___42834)){
args__4870__auto__.push((arguments[i__4865__auto___42835]));

var G__42836 = (i__4865__auto___42835 + (1));
i__4865__auto___42835 = G__42836;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq42757){
var G__42759 = cljs.core.first(seq42757);
var seq42757__$1 = cljs.core.next(seq42757);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42759,seq42757__$1);
}));

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=garden.stylesheet.js.map
