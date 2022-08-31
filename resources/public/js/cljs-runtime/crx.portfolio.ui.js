goog.provide('crx.portfolio.ui');
/**
 * Render the toplevel component for this app.
 */
crx.portfolio.ui.render = (function crx$portfolio$ui$render(){
console.log(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"config","config",994861415),crx.portfolio.ui.config.config], null)));

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crx.portfolio.ui.page.component], null),document.getElementById("app"));
});
/**
 * Run application startup logic.
 */
crx.portfolio.ui.init = (function crx$portfolio$ui$init(){
try{crx.portfolio.ui.router.start_BANG_();

crx.portfolio.ui.style.icon.init_BANG_();

return crx.portfolio.ui.render();
}catch (e35800){var e = e35800;
console.error("Error loading the page");

console.error(e);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"An error occurred loading the page"], null),document.getElementById("app"));
}});
goog.exportSymbol('crx.portfolio.ui.init', crx.portfolio.ui.init);

//# sourceMappingURL=crx.portfolio.ui.js.map
