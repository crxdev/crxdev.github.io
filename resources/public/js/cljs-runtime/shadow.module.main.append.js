
shadow.cljs.devtools.client.env.module_loaded('main');

try { crx.portfolio.ui.init(); } catch (e) { console.error("An error occurred when calling (crx.portfolio.ui/init)"); throw(e); }