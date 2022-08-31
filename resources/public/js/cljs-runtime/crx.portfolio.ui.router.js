goog.provide('crx.portfolio.ui.router');
crx.portfolio.ui.router.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword("crx.portfolio.ui.router","portfolio","crx.portfolio.ui.router/portfolio",286298462)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.Keyword("crx.portfolio.ui.router","not-found","crx.portfolio.ui.router/not-found",-494947588)], null)], null)], null);
crx.portfolio.ui.router.route_QMARK_ = cljs.core.keyword_QMARK_;
cljs.spec.alpha.def_impl(new cljs.core.Keyword("crx.portfolio.ui.router","route","crx.portfolio.ui.router/route",195598133),new cljs.core.Symbol("crx.portfolio.ui.router","route?","crx.portfolio.ui.router/route?",-789264814,null),crx.portfolio.ui.router.route_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("crx.portfolio.ui.router","handler","crx.portfolio.ui.router/handler",1280619572),new cljs.core.Keyword("crx.portfolio.ui.router","route","crx.portfolio.ui.router/route",195598133),new cljs.core.Keyword("crx.portfolio.ui.router","route","crx.portfolio.ui.router/route",195598133));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("crx.portfolio.ui.router","route-params","crx.portfolio.ui.router/route-params",-1780729049),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"string?","string?",-1129175764,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.core.string_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__36069){
return cljs.core.map_QMARK_(G__36069);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12139__auto__,v__12140__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12140__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("crx.portfolio.ui.router","route-match","crx.portfolio.ui.router/route-match",-1316819193),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("crx.portfolio.ui.router","handler","crx.portfolio.ui.router/handler",1280619572)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("crx.portfolio.ui.router","route-params","crx.portfolio.ui.router/route-params",-1780729049)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("crx.portfolio.ui.router","handler","crx.portfolio.ui.router/handler",1280619572)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("crx.portfolio.ui.router","route-params","crx.portfolio.ui.router/route-params",-1780729049)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__36070){
return cljs.core.map_QMARK_(G__36070);
}),(function (G__36070){
return cljs.core.contains_QMARK_(G__36070,new cljs.core.Keyword(null,"handler","handler",-195596612));
})], null),(function (G__36070){
return ((cljs.core.map_QMARK_(G__36070)) && (cljs.core.contains_QMARK_(G__36070,new cljs.core.Keyword(null,"handler","handler",-195596612))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("crx.portfolio.ui.router","handler","crx.portfolio.ui.router/handler",1280619572)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handler","handler",-195596612)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("crx.portfolio.ui.router","route-params","crx.portfolio.ui.router/route-params",-1780729049)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"handler","handler",-195596612)))], null),null])));
crx.portfolio.ui.router.match_route = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bidi.bidi.match_route,crx.portfolio.ui.router.routes);
crx.portfolio.ui.router.path_for = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bidi.bidi.path_for,crx.portfolio.ui.router.routes);
crx.portfolio.ui.router.navigate = (function crx$portfolio$ui$router$navigate(route){
return cljs.core.reset_BANG_(crx.portfolio.ui.state.route_ratom,route);
});
crx.portfolio.ui.router.ignore_paths = cljs.core.PersistentHashSet.EMPTY;
crx.portfolio.ui.router.processable_url_QMARK_ = (function crx$portfolio$ui$router$processable_url_QMARK_(uri){
return (((!(clojure.string.blank_QMARK_(uri)))) && (((cljs.core.not((function (){var G__36071 = uri.getPath();
return (crx.portfolio.ui.router.ignore_paths.cljs$core$IFn$_invoke$arity$1 ? crx.portfolio.ui.router.ignore_paths.cljs$core$IFn$_invoke$arity$1(G__36071) : crx.portfolio.ui.router.ignore_paths.call(null,G__36071));
})())) && (((((cljs.core.not(uri.hasScheme())) && (cljs.core.not(uri.hasDomain())))) || ((!((cljs.core.re_matches(cljs.core.re_pattern(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),".*$"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)) == null)))))))));
});
crx.portfolio.ui.router.pushy_instance = cljs.core.memoize((function (){
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic(crx.portfolio.ui.router.navigate,crx.portfolio.ui.router.match_route,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"processable-url?","processable-url?",1865408336),crx.portfolio.ui.router.processable_url_QMARK_], 0));
}));
crx.portfolio.ui.router.navigate_to = (function crx$portfolio$ui$router$navigate_to(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36079 = arguments.length;
var i__4865__auto___36080 = (0);
while(true){
if((i__4865__auto___36080 < len__4864__auto___36079)){
args__4870__auto__.push((arguments[i__4865__auto___36080]));

var G__36082 = (i__4865__auto___36080 + (1));
i__4865__auto___36080 = G__36082;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return crx.portfolio.ui.router.navigate_to.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(crx.portfolio.ui.router.navigate_to.cljs$core$IFn$_invoke$arity$variadic = (function (route_args){
if(cljs.core.truth_((function (){var G__36075 = cljs.core.first(route_args);
return (crx.portfolio.ui.router.route_QMARK_.cljs$core$IFn$_invoke$arity$1 ? crx.portfolio.ui.router.route_QMARK_.cljs$core$IFn$_invoke$arity$1(G__36075) : crx.portfolio.ui.router.route_QMARK_.call(null,G__36075));
})())){
return pushy.core.set_token_BANG_(crx.portfolio.ui.router.pushy_instance(),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(crx.portfolio.ui.router.path_for,route_args));
} else {
return console.warn(["Cannot navigate to unknown route: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(route_args)].join(''));
}
}));

(crx.portfolio.ui.router.navigate_to.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(crx.portfolio.ui.router.navigate_to.cljs$lang$applyTo = (function (seq36074){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36074));
}));

crx.portfolio.ui.router.navigate_to_redirect_or = (function crx$portfolio$ui$router$navigate_to_redirect_or(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36083 = arguments.length;
var i__4865__auto___36084 = (0);
while(true){
if((i__4865__auto___36084 < len__4864__auto___36083)){
args__4870__auto__.push((arguments[i__4865__auto___36084]));

var G__36085 = (i__4865__auto___36084 + (1));
i__4865__auto___36084 = G__36085;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return crx.portfolio.ui.router.navigate_to_redirect_or.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(crx.portfolio.ui.router.navigate_to_redirect_or.cljs$core$IFn$_invoke$arity$variadic = (function (fallback_route_args){
var temp__5751__auto__ = cljs.core.deref(crx.portfolio.ui.state.redirect_route_args_ratom);
if(cljs.core.truth_(temp__5751__auto__)){
var route_args = temp__5751__auto__;
var map__36077 = route_args;
var map__36077__$1 = cljs.core.__destructure_map(map__36077);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36077__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var route_params = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36077__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055),cljs.core.PersistentArrayMap.EMPTY);
cljs.core.apply.cljs$core$IFn$_invoke$arity$3(crx.portfolio.ui.router.navigate_to,handler,cljs.core.flatten(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,route_params)));

return reagent.core.rswap_BANG_(crx.portfolio.ui.state.redirect_route_args_ratom,cljs.core.constantly(null));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(crx.portfolio.ui.router.navigate_to,fallback_route_args);
}
}));

(crx.portfolio.ui.router.navigate_to_redirect_or.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(crx.portfolio.ui.router.navigate_to_redirect_or.cljs$lang$applyTo = (function (seq36076){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36076));
}));

/**
 * Start the pushy history event subscriptions
 */
crx.portfolio.ui.router.start_BANG_ = (function crx$portfolio$ui$router$start_BANG_(){
return pushy.core.start_BANG_(crx.portfolio.ui.router.pushy_instance());
});
cljs.core.add_watch(crx.portfolio.ui.state.route_ratom,new cljs.core.Keyword("crx.portfolio.ui.router","get-redirect-route-args","crx.portfolio.ui.router/get-redirect-route-args",723116463),(function (_,___$1,___$2,___$3){
var temp__5753__auto__ = crx.portfolio.ui.router.match_route(goog.Uri.parse(window.location).getQueryData().get("redirect"));
if(cljs.core.truth_(temp__5753__auto__)){
var redirect_route_args = temp__5753__auto__;
return reagent.core.rswap_BANG_(crx.portfolio.ui.state.redirect_route_args_ratom,cljs.core.constantly(redirect_route_args));
} else {
return null;
}
}));

//# sourceMappingURL=crx.portfolio.ui.router.js.map
