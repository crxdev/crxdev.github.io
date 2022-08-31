goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_40393 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_40393(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_40396 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_40396(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__38817 = coll;
var G__38818 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__38817,G__38818) : shadow.dom.lazy_native_coll_seq.call(null,G__38817,G__38818));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__38862 = arguments.length;
switch (G__38862) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__38885 = arguments.length;
switch (G__38885) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__38907 = arguments.length;
switch (G__38907) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__38936 = arguments.length;
switch (G__38936) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__38970 = arguments.length;
switch (G__38970) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__39016 = arguments.length;
switch (G__39016) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e39034){if((e39034 instanceof Object)){
var e = e39034;
return console.log("didnt support attachEvent",el,e);
} else {
throw e39034;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__39057 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__39058 = null;
var count__39059 = (0);
var i__39060 = (0);
while(true){
if((i__39060 < count__39059)){
var el = chunk__39058.cljs$core$IIndexed$_nth$arity$2(null,i__39060);
var handler_40408__$1 = ((function (seq__39057,chunk__39058,count__39059,i__39060,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39057,chunk__39058,count__39059,i__39060,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40408__$1);


var G__40410 = seq__39057;
var G__40411 = chunk__39058;
var G__40412 = count__39059;
var G__40413 = (i__39060 + (1));
seq__39057 = G__40410;
chunk__39058 = G__40411;
count__39059 = G__40412;
i__39060 = G__40413;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39057);
if(temp__5753__auto__){
var seq__39057__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39057__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39057__$1);
var G__40414 = cljs.core.chunk_rest(seq__39057__$1);
var G__40415 = c__4679__auto__;
var G__40416 = cljs.core.count(c__4679__auto__);
var G__40417 = (0);
seq__39057 = G__40414;
chunk__39058 = G__40415;
count__39059 = G__40416;
i__39060 = G__40417;
continue;
} else {
var el = cljs.core.first(seq__39057__$1);
var handler_40418__$1 = ((function (seq__39057,chunk__39058,count__39059,i__39060,el,seq__39057__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39057,chunk__39058,count__39059,i__39060,el,seq__39057__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40418__$1);


var G__40419 = cljs.core.next(seq__39057__$1);
var G__40420 = null;
var G__40421 = (0);
var G__40422 = (0);
seq__39057 = G__40419;
chunk__39058 = G__40420;
count__39059 = G__40421;
i__39060 = G__40422;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__39088 = arguments.length;
switch (G__39088) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__39118 = cljs.core.seq(events);
var chunk__39119 = null;
var count__39120 = (0);
var i__39121 = (0);
while(true){
if((i__39121 < count__39120)){
var vec__39139 = chunk__39119.cljs$core$IIndexed$_nth$arity$2(null,i__39121);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39139,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39139,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40425 = seq__39118;
var G__40426 = chunk__39119;
var G__40427 = count__39120;
var G__40428 = (i__39121 + (1));
seq__39118 = G__40425;
chunk__39119 = G__40426;
count__39120 = G__40427;
i__39121 = G__40428;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39118);
if(temp__5753__auto__){
var seq__39118__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39118__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39118__$1);
var G__40429 = cljs.core.chunk_rest(seq__39118__$1);
var G__40430 = c__4679__auto__;
var G__40431 = cljs.core.count(c__4679__auto__);
var G__40432 = (0);
seq__39118 = G__40429;
chunk__39119 = G__40430;
count__39120 = G__40431;
i__39121 = G__40432;
continue;
} else {
var vec__39152 = cljs.core.first(seq__39118__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39152,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39152,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40433 = cljs.core.next(seq__39118__$1);
var G__40434 = null;
var G__40435 = (0);
var G__40436 = (0);
seq__39118 = G__40433;
chunk__39119 = G__40434;
count__39120 = G__40435;
i__39121 = G__40436;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__39161 = cljs.core.seq(styles);
var chunk__39162 = null;
var count__39163 = (0);
var i__39164 = (0);
while(true){
if((i__39164 < count__39163)){
var vec__39177 = chunk__39162.cljs$core$IIndexed$_nth$arity$2(null,i__39164);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39177,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39177,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40439 = seq__39161;
var G__40440 = chunk__39162;
var G__40441 = count__39163;
var G__40442 = (i__39164 + (1));
seq__39161 = G__40439;
chunk__39162 = G__40440;
count__39163 = G__40441;
i__39164 = G__40442;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39161);
if(temp__5753__auto__){
var seq__39161__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39161__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39161__$1);
var G__40446 = cljs.core.chunk_rest(seq__39161__$1);
var G__40447 = c__4679__auto__;
var G__40448 = cljs.core.count(c__4679__auto__);
var G__40449 = (0);
seq__39161 = G__40446;
chunk__39162 = G__40447;
count__39163 = G__40448;
i__39164 = G__40449;
continue;
} else {
var vec__39183 = cljs.core.first(seq__39161__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39183,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39183,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40451 = cljs.core.next(seq__39161__$1);
var G__40452 = null;
var G__40453 = (0);
var G__40454 = (0);
seq__39161 = G__40451;
chunk__39162 = G__40452;
count__39163 = G__40453;
i__39164 = G__40454;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__39195_40456 = key;
var G__39195_40457__$1 = (((G__39195_40456 instanceof cljs.core.Keyword))?G__39195_40456.fqn:null);
switch (G__39195_40457__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_40464 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_40464,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_40464,"aria-");
}
})())){
el.setAttribute(ks_40464,value);
} else {
(el[ks_40464] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__39232){
var map__39234 = p__39232;
var map__39234__$1 = cljs.core.__destructure_map(map__39234);
var props = map__39234__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39234__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__39238 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39238,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39238,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39238,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__39243 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__39243,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__39243;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__39258 = arguments.length;
switch (G__39258) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__39274){
var vec__39276 = p__39274;
var seq__39277 = cljs.core.seq(vec__39276);
var first__39278 = cljs.core.first(seq__39277);
var seq__39277__$1 = cljs.core.next(seq__39277);
var nn = first__39278;
var first__39278__$1 = cljs.core.first(seq__39277__$1);
var seq__39277__$2 = cljs.core.next(seq__39277__$1);
var np = first__39278__$1;
var nc = seq__39277__$2;
var node = vec__39276;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39286 = nn;
var G__39287 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39286,G__39287) : create_fn.call(null,G__39286,G__39287));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39290 = nn;
var G__39291 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39290,G__39291) : create_fn.call(null,G__39290,G__39291));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__39303 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39303,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39303,(1),null);
var seq__39308_40477 = cljs.core.seq(node_children);
var chunk__39309_40478 = null;
var count__39310_40479 = (0);
var i__39311_40480 = (0);
while(true){
if((i__39311_40480 < count__39310_40479)){
var child_struct_40481 = chunk__39309_40478.cljs$core$IIndexed$_nth$arity$2(null,i__39311_40480);
var children_40482 = shadow.dom.dom_node(child_struct_40481);
if(cljs.core.seq_QMARK_(children_40482)){
var seq__39376_40483 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40482));
var chunk__39378_40484 = null;
var count__39379_40485 = (0);
var i__39380_40486 = (0);
while(true){
if((i__39380_40486 < count__39379_40485)){
var child_40488 = chunk__39378_40484.cljs$core$IIndexed$_nth$arity$2(null,i__39380_40486);
if(cljs.core.truth_(child_40488)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40488);


var G__40489 = seq__39376_40483;
var G__40490 = chunk__39378_40484;
var G__40491 = count__39379_40485;
var G__40492 = (i__39380_40486 + (1));
seq__39376_40483 = G__40489;
chunk__39378_40484 = G__40490;
count__39379_40485 = G__40491;
i__39380_40486 = G__40492;
continue;
} else {
var G__40493 = seq__39376_40483;
var G__40494 = chunk__39378_40484;
var G__40495 = count__39379_40485;
var G__40496 = (i__39380_40486 + (1));
seq__39376_40483 = G__40493;
chunk__39378_40484 = G__40494;
count__39379_40485 = G__40495;
i__39380_40486 = G__40496;
continue;
}
} else {
var temp__5753__auto___40498 = cljs.core.seq(seq__39376_40483);
if(temp__5753__auto___40498){
var seq__39376_40500__$1 = temp__5753__auto___40498;
if(cljs.core.chunked_seq_QMARK_(seq__39376_40500__$1)){
var c__4679__auto___40501 = cljs.core.chunk_first(seq__39376_40500__$1);
var G__40502 = cljs.core.chunk_rest(seq__39376_40500__$1);
var G__40503 = c__4679__auto___40501;
var G__40504 = cljs.core.count(c__4679__auto___40501);
var G__40505 = (0);
seq__39376_40483 = G__40502;
chunk__39378_40484 = G__40503;
count__39379_40485 = G__40504;
i__39380_40486 = G__40505;
continue;
} else {
var child_40507 = cljs.core.first(seq__39376_40500__$1);
if(cljs.core.truth_(child_40507)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40507);


var G__40508 = cljs.core.next(seq__39376_40500__$1);
var G__40509 = null;
var G__40510 = (0);
var G__40511 = (0);
seq__39376_40483 = G__40508;
chunk__39378_40484 = G__40509;
count__39379_40485 = G__40510;
i__39380_40486 = G__40511;
continue;
} else {
var G__40512 = cljs.core.next(seq__39376_40500__$1);
var G__40513 = null;
var G__40514 = (0);
var G__40515 = (0);
seq__39376_40483 = G__40512;
chunk__39378_40484 = G__40513;
count__39379_40485 = G__40514;
i__39380_40486 = G__40515;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40482);
}


var G__40516 = seq__39308_40477;
var G__40517 = chunk__39309_40478;
var G__40518 = count__39310_40479;
var G__40519 = (i__39311_40480 + (1));
seq__39308_40477 = G__40516;
chunk__39309_40478 = G__40517;
count__39310_40479 = G__40518;
i__39311_40480 = G__40519;
continue;
} else {
var temp__5753__auto___40520 = cljs.core.seq(seq__39308_40477);
if(temp__5753__auto___40520){
var seq__39308_40521__$1 = temp__5753__auto___40520;
if(cljs.core.chunked_seq_QMARK_(seq__39308_40521__$1)){
var c__4679__auto___40522 = cljs.core.chunk_first(seq__39308_40521__$1);
var G__40523 = cljs.core.chunk_rest(seq__39308_40521__$1);
var G__40524 = c__4679__auto___40522;
var G__40525 = cljs.core.count(c__4679__auto___40522);
var G__40526 = (0);
seq__39308_40477 = G__40523;
chunk__39309_40478 = G__40524;
count__39310_40479 = G__40525;
i__39311_40480 = G__40526;
continue;
} else {
var child_struct_40527 = cljs.core.first(seq__39308_40521__$1);
var children_40528 = shadow.dom.dom_node(child_struct_40527);
if(cljs.core.seq_QMARK_(children_40528)){
var seq__39417_40529 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40528));
var chunk__39419_40530 = null;
var count__39420_40531 = (0);
var i__39421_40532 = (0);
while(true){
if((i__39421_40532 < count__39420_40531)){
var child_40533 = chunk__39419_40530.cljs$core$IIndexed$_nth$arity$2(null,i__39421_40532);
if(cljs.core.truth_(child_40533)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40533);


var G__40534 = seq__39417_40529;
var G__40535 = chunk__39419_40530;
var G__40536 = count__39420_40531;
var G__40537 = (i__39421_40532 + (1));
seq__39417_40529 = G__40534;
chunk__39419_40530 = G__40535;
count__39420_40531 = G__40536;
i__39421_40532 = G__40537;
continue;
} else {
var G__40538 = seq__39417_40529;
var G__40539 = chunk__39419_40530;
var G__40540 = count__39420_40531;
var G__40541 = (i__39421_40532 + (1));
seq__39417_40529 = G__40538;
chunk__39419_40530 = G__40539;
count__39420_40531 = G__40540;
i__39421_40532 = G__40541;
continue;
}
} else {
var temp__5753__auto___40546__$1 = cljs.core.seq(seq__39417_40529);
if(temp__5753__auto___40546__$1){
var seq__39417_40547__$1 = temp__5753__auto___40546__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39417_40547__$1)){
var c__4679__auto___40548 = cljs.core.chunk_first(seq__39417_40547__$1);
var G__40549 = cljs.core.chunk_rest(seq__39417_40547__$1);
var G__40550 = c__4679__auto___40548;
var G__40551 = cljs.core.count(c__4679__auto___40548);
var G__40552 = (0);
seq__39417_40529 = G__40549;
chunk__39419_40530 = G__40550;
count__39420_40531 = G__40551;
i__39421_40532 = G__40552;
continue;
} else {
var child_40553 = cljs.core.first(seq__39417_40547__$1);
if(cljs.core.truth_(child_40553)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40553);


var G__40554 = cljs.core.next(seq__39417_40547__$1);
var G__40555 = null;
var G__40556 = (0);
var G__40557 = (0);
seq__39417_40529 = G__40554;
chunk__39419_40530 = G__40555;
count__39420_40531 = G__40556;
i__39421_40532 = G__40557;
continue;
} else {
var G__40558 = cljs.core.next(seq__39417_40547__$1);
var G__40559 = null;
var G__40560 = (0);
var G__40561 = (0);
seq__39417_40529 = G__40558;
chunk__39419_40530 = G__40559;
count__39420_40531 = G__40560;
i__39421_40532 = G__40561;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40528);
}


var G__40563 = cljs.core.next(seq__39308_40521__$1);
var G__40564 = null;
var G__40565 = (0);
var G__40566 = (0);
seq__39308_40477 = G__40563;
chunk__39309_40478 = G__40564;
count__39310_40479 = G__40565;
i__39311_40480 = G__40566;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__39547 = cljs.core.seq(node);
var chunk__39548 = null;
var count__39549 = (0);
var i__39550 = (0);
while(true){
if((i__39550 < count__39549)){
var n = chunk__39548.cljs$core$IIndexed$_nth$arity$2(null,i__39550);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40569 = seq__39547;
var G__40570 = chunk__39548;
var G__40571 = count__39549;
var G__40572 = (i__39550 + (1));
seq__39547 = G__40569;
chunk__39548 = G__40570;
count__39549 = G__40571;
i__39550 = G__40572;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39547);
if(temp__5753__auto__){
var seq__39547__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39547__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39547__$1);
var G__40573 = cljs.core.chunk_rest(seq__39547__$1);
var G__40574 = c__4679__auto__;
var G__40575 = cljs.core.count(c__4679__auto__);
var G__40576 = (0);
seq__39547 = G__40573;
chunk__39548 = G__40574;
count__39549 = G__40575;
i__39550 = G__40576;
continue;
} else {
var n = cljs.core.first(seq__39547__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40577 = cljs.core.next(seq__39547__$1);
var G__40578 = null;
var G__40579 = (0);
var G__40580 = (0);
seq__39547 = G__40577;
chunk__39548 = G__40578;
count__39549 = G__40579;
i__39550 = G__40580;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__39583 = arguments.length;
switch (G__39583) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__39604 = arguments.length;
switch (G__39604) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__39632 = arguments.length;
switch (G__39632) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___40588 = arguments.length;
var i__4865__auto___40589 = (0);
while(true){
if((i__4865__auto___40589 < len__4864__auto___40588)){
args__4870__auto__.push((arguments[i__4865__auto___40589]));

var G__40590 = (i__4865__auto___40589 + (1));
i__4865__auto___40589 = G__40590;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__39746_40593 = cljs.core.seq(nodes);
var chunk__39747_40594 = null;
var count__39748_40595 = (0);
var i__39749_40596 = (0);
while(true){
if((i__39749_40596 < count__39748_40595)){
var node_40598 = chunk__39747_40594.cljs$core$IIndexed$_nth$arity$2(null,i__39749_40596);
fragment.appendChild(shadow.dom._to_dom(node_40598));


var G__40599 = seq__39746_40593;
var G__40600 = chunk__39747_40594;
var G__40601 = count__39748_40595;
var G__40602 = (i__39749_40596 + (1));
seq__39746_40593 = G__40599;
chunk__39747_40594 = G__40600;
count__39748_40595 = G__40601;
i__39749_40596 = G__40602;
continue;
} else {
var temp__5753__auto___40603 = cljs.core.seq(seq__39746_40593);
if(temp__5753__auto___40603){
var seq__39746_40604__$1 = temp__5753__auto___40603;
if(cljs.core.chunked_seq_QMARK_(seq__39746_40604__$1)){
var c__4679__auto___40605 = cljs.core.chunk_first(seq__39746_40604__$1);
var G__40606 = cljs.core.chunk_rest(seq__39746_40604__$1);
var G__40607 = c__4679__auto___40605;
var G__40608 = cljs.core.count(c__4679__auto___40605);
var G__40609 = (0);
seq__39746_40593 = G__40606;
chunk__39747_40594 = G__40607;
count__39748_40595 = G__40608;
i__39749_40596 = G__40609;
continue;
} else {
var node_40611 = cljs.core.first(seq__39746_40604__$1);
fragment.appendChild(shadow.dom._to_dom(node_40611));


var G__40616 = cljs.core.next(seq__39746_40604__$1);
var G__40617 = null;
var G__40618 = (0);
var G__40619 = (0);
seq__39746_40593 = G__40616;
chunk__39747_40594 = G__40617;
count__39748_40595 = G__40618;
i__39749_40596 = G__40619;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq39735){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39735));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__39768_40626 = cljs.core.seq(scripts);
var chunk__39769_40627 = null;
var count__39770_40628 = (0);
var i__39771_40629 = (0);
while(true){
if((i__39771_40629 < count__39770_40628)){
var vec__39791_40631 = chunk__39769_40627.cljs$core$IIndexed$_nth$arity$2(null,i__39771_40629);
var script_tag_40632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39791_40631,(0),null);
var script_body_40633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39791_40631,(1),null);
eval(script_body_40633);


var G__40634 = seq__39768_40626;
var G__40635 = chunk__39769_40627;
var G__40636 = count__39770_40628;
var G__40637 = (i__39771_40629 + (1));
seq__39768_40626 = G__40634;
chunk__39769_40627 = G__40635;
count__39770_40628 = G__40636;
i__39771_40629 = G__40637;
continue;
} else {
var temp__5753__auto___40638 = cljs.core.seq(seq__39768_40626);
if(temp__5753__auto___40638){
var seq__39768_40639__$1 = temp__5753__auto___40638;
if(cljs.core.chunked_seq_QMARK_(seq__39768_40639__$1)){
var c__4679__auto___40640 = cljs.core.chunk_first(seq__39768_40639__$1);
var G__40641 = cljs.core.chunk_rest(seq__39768_40639__$1);
var G__40642 = c__4679__auto___40640;
var G__40643 = cljs.core.count(c__4679__auto___40640);
var G__40644 = (0);
seq__39768_40626 = G__40641;
chunk__39769_40627 = G__40642;
count__39770_40628 = G__40643;
i__39771_40629 = G__40644;
continue;
} else {
var vec__39796_40645 = cljs.core.first(seq__39768_40639__$1);
var script_tag_40646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39796_40645,(0),null);
var script_body_40647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39796_40645,(1),null);
eval(script_body_40647);


var G__40648 = cljs.core.next(seq__39768_40639__$1);
var G__40649 = null;
var G__40650 = (0);
var G__40651 = (0);
seq__39768_40626 = G__40648;
chunk__39769_40627 = G__40649;
count__39770_40628 = G__40650;
i__39771_40629 = G__40651;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__39802){
var vec__39804 = p__39802;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39804,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39804,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__39826 = arguments.length;
switch (G__39826) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__39870 = cljs.core.seq(style_keys);
var chunk__39871 = null;
var count__39872 = (0);
var i__39873 = (0);
while(true){
if((i__39873 < count__39872)){
var it = chunk__39871.cljs$core$IIndexed$_nth$arity$2(null,i__39873);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40653 = seq__39870;
var G__40654 = chunk__39871;
var G__40655 = count__39872;
var G__40656 = (i__39873 + (1));
seq__39870 = G__40653;
chunk__39871 = G__40654;
count__39872 = G__40655;
i__39873 = G__40656;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39870);
if(temp__5753__auto__){
var seq__39870__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39870__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39870__$1);
var G__40657 = cljs.core.chunk_rest(seq__39870__$1);
var G__40658 = c__4679__auto__;
var G__40659 = cljs.core.count(c__4679__auto__);
var G__40660 = (0);
seq__39870 = G__40657;
chunk__39871 = G__40658;
count__39872 = G__40659;
i__39873 = G__40660;
continue;
} else {
var it = cljs.core.first(seq__39870__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40664 = cljs.core.next(seq__39870__$1);
var G__40665 = null;
var G__40666 = (0);
var G__40667 = (0);
seq__39870 = G__40664;
chunk__39871 = G__40665;
count__39872 = G__40666;
i__39873 = G__40667;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k39883,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__39895 = k39883;
var G__39895__$1 = (((G__39895 instanceof cljs.core.Keyword))?G__39895.fqn:null);
switch (G__39895__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39883,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__39897){
var vec__39898 = p__39897;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39898,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39898,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39882){
var self__ = this;
var G__39882__$1 = this;
return (new cljs.core.RecordIter((0),G__39882__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39884,other39885){
var self__ = this;
var this39884__$1 = this;
return (((!((other39885 == null)))) && ((((this39884__$1.constructor === other39885.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39884__$1.x,other39885.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39884__$1.y,other39885.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39884__$1.__extmap,other39885.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k39883){
var self__ = this;
var this__4509__auto____$1 = this;
var G__39931 = k39883;
var G__39931__$1 = (((G__39931 instanceof cljs.core.Keyword))?G__39931.fqn:null);
switch (G__39931__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k39883);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__39882){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__39937 = cljs.core.keyword_identical_QMARK_;
var expr__39938 = k__4511__auto__;
if(cljs.core.truth_((pred__39937.cljs$core$IFn$_invoke$arity$2 ? pred__39937.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__39938) : pred__39937.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__39938)))){
return (new shadow.dom.Coordinate(G__39882,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39937.cljs$core$IFn$_invoke$arity$2 ? pred__39937.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__39938) : pred__39937.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__39938)))){
return (new shadow.dom.Coordinate(self__.x,G__39882,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__39882),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__39882){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__39882,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__39886){
var extmap__4542__auto__ = (function (){var G__39959 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39886,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__39886)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39959);
} else {
return G__39959;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__39886),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__39886),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k39977,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__39998 = k39977;
var G__39998__$1 = (((G__39998 instanceof cljs.core.Keyword))?G__39998.fqn:null);
switch (G__39998__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39977,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__40005){
var vec__40008 = p__40005;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40008,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40008,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39976){
var self__ = this;
var G__39976__$1 = this;
return (new cljs.core.RecordIter((0),G__39976__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39978,other39979){
var self__ = this;
var this39978__$1 = this;
return (((!((other39979 == null)))) && ((((this39978__$1.constructor === other39979.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39978__$1.w,other39979.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39978__$1.h,other39979.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39978__$1.__extmap,other39979.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k39977){
var self__ = this;
var this__4509__auto____$1 = this;
var G__40038 = k39977;
var G__40038__$1 = (((G__40038 instanceof cljs.core.Keyword))?G__40038.fqn:null);
switch (G__40038__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k39977);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__39976){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__40041 = cljs.core.keyword_identical_QMARK_;
var expr__40042 = k__4511__auto__;
if(cljs.core.truth_((pred__40041.cljs$core$IFn$_invoke$arity$2 ? pred__40041.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__40042) : pred__40041.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__40042)))){
return (new shadow.dom.Size(G__39976,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40041.cljs$core$IFn$_invoke$arity$2 ? pred__40041.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__40042) : pred__40041.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__40042)))){
return (new shadow.dom.Size(self__.w,G__39976,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__39976),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__39976){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__39976,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__39985){
var extmap__4542__auto__ = (function (){var G__40067 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39985,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__39985)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40067);
} else {
return G__40067;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__39985),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__39985),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__40704 = (i + (1));
var G__40705 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__40704;
ret = G__40705;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40123){
var vec__40125 = p__40123;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40125,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40125,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__40137 = arguments.length;
switch (G__40137) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__40716 = ps;
var G__40717 = (i + (1));
el__$1 = G__40716;
i = G__40717;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__40187 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40187,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40187,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40187,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__40192_40722 = cljs.core.seq(props);
var chunk__40193_40723 = null;
var count__40194_40724 = (0);
var i__40195_40725 = (0);
while(true){
if((i__40195_40725 < count__40194_40724)){
var vec__40215_40726 = chunk__40193_40723.cljs$core$IIndexed$_nth$arity$2(null,i__40195_40725);
var k_40727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40215_40726,(0),null);
var v_40728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40215_40726,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_40727);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40727),v_40728);


var G__40732 = seq__40192_40722;
var G__40733 = chunk__40193_40723;
var G__40734 = count__40194_40724;
var G__40735 = (i__40195_40725 + (1));
seq__40192_40722 = G__40732;
chunk__40193_40723 = G__40733;
count__40194_40724 = G__40734;
i__40195_40725 = G__40735;
continue;
} else {
var temp__5753__auto___40736 = cljs.core.seq(seq__40192_40722);
if(temp__5753__auto___40736){
var seq__40192_40737__$1 = temp__5753__auto___40736;
if(cljs.core.chunked_seq_QMARK_(seq__40192_40737__$1)){
var c__4679__auto___40738 = cljs.core.chunk_first(seq__40192_40737__$1);
var G__40739 = cljs.core.chunk_rest(seq__40192_40737__$1);
var G__40740 = c__4679__auto___40738;
var G__40741 = cljs.core.count(c__4679__auto___40738);
var G__40742 = (0);
seq__40192_40722 = G__40739;
chunk__40193_40723 = G__40740;
count__40194_40724 = G__40741;
i__40195_40725 = G__40742;
continue;
} else {
var vec__40224_40743 = cljs.core.first(seq__40192_40737__$1);
var k_40744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40224_40743,(0),null);
var v_40745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40224_40743,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_40744);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40744),v_40745);


var G__40746 = cljs.core.next(seq__40192_40737__$1);
var G__40747 = null;
var G__40748 = (0);
var G__40749 = (0);
seq__40192_40722 = G__40746;
chunk__40193_40723 = G__40747;
count__40194_40724 = G__40748;
i__40195_40725 = G__40749;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__40236 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40236,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40236,(1),null);
var seq__40241_40752 = cljs.core.seq(node_children);
var chunk__40243_40753 = null;
var count__40244_40754 = (0);
var i__40245_40755 = (0);
while(true){
if((i__40245_40755 < count__40244_40754)){
var child_struct_40756 = chunk__40243_40753.cljs$core$IIndexed$_nth$arity$2(null,i__40245_40755);
if((!((child_struct_40756 == null)))){
if(typeof child_struct_40756 === 'string'){
var text_40759 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_40759),child_struct_40756].join(''));
} else {
var children_40760 = shadow.dom.svg_node(child_struct_40756);
if(cljs.core.seq_QMARK_(children_40760)){
var seq__40318_40761 = cljs.core.seq(children_40760);
var chunk__40320_40762 = null;
var count__40321_40763 = (0);
var i__40322_40764 = (0);
while(true){
if((i__40322_40764 < count__40321_40763)){
var child_40765 = chunk__40320_40762.cljs$core$IIndexed$_nth$arity$2(null,i__40322_40764);
if(cljs.core.truth_(child_40765)){
node.appendChild(child_40765);


var G__40766 = seq__40318_40761;
var G__40767 = chunk__40320_40762;
var G__40768 = count__40321_40763;
var G__40769 = (i__40322_40764 + (1));
seq__40318_40761 = G__40766;
chunk__40320_40762 = G__40767;
count__40321_40763 = G__40768;
i__40322_40764 = G__40769;
continue;
} else {
var G__40770 = seq__40318_40761;
var G__40771 = chunk__40320_40762;
var G__40772 = count__40321_40763;
var G__40773 = (i__40322_40764 + (1));
seq__40318_40761 = G__40770;
chunk__40320_40762 = G__40771;
count__40321_40763 = G__40772;
i__40322_40764 = G__40773;
continue;
}
} else {
var temp__5753__auto___40774 = cljs.core.seq(seq__40318_40761);
if(temp__5753__auto___40774){
var seq__40318_40775__$1 = temp__5753__auto___40774;
if(cljs.core.chunked_seq_QMARK_(seq__40318_40775__$1)){
var c__4679__auto___40776 = cljs.core.chunk_first(seq__40318_40775__$1);
var G__40777 = cljs.core.chunk_rest(seq__40318_40775__$1);
var G__40778 = c__4679__auto___40776;
var G__40779 = cljs.core.count(c__4679__auto___40776);
var G__40780 = (0);
seq__40318_40761 = G__40777;
chunk__40320_40762 = G__40778;
count__40321_40763 = G__40779;
i__40322_40764 = G__40780;
continue;
} else {
var child_40782 = cljs.core.first(seq__40318_40775__$1);
if(cljs.core.truth_(child_40782)){
node.appendChild(child_40782);


var G__40783 = cljs.core.next(seq__40318_40775__$1);
var G__40784 = null;
var G__40785 = (0);
var G__40786 = (0);
seq__40318_40761 = G__40783;
chunk__40320_40762 = G__40784;
count__40321_40763 = G__40785;
i__40322_40764 = G__40786;
continue;
} else {
var G__40789 = cljs.core.next(seq__40318_40775__$1);
var G__40790 = null;
var G__40791 = (0);
var G__40792 = (0);
seq__40318_40761 = G__40789;
chunk__40320_40762 = G__40790;
count__40321_40763 = G__40791;
i__40322_40764 = G__40792;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_40760);
}
}


var G__40793 = seq__40241_40752;
var G__40794 = chunk__40243_40753;
var G__40795 = count__40244_40754;
var G__40796 = (i__40245_40755 + (1));
seq__40241_40752 = G__40793;
chunk__40243_40753 = G__40794;
count__40244_40754 = G__40795;
i__40245_40755 = G__40796;
continue;
} else {
var G__40798 = seq__40241_40752;
var G__40799 = chunk__40243_40753;
var G__40800 = count__40244_40754;
var G__40801 = (i__40245_40755 + (1));
seq__40241_40752 = G__40798;
chunk__40243_40753 = G__40799;
count__40244_40754 = G__40800;
i__40245_40755 = G__40801;
continue;
}
} else {
var temp__5753__auto___40802 = cljs.core.seq(seq__40241_40752);
if(temp__5753__auto___40802){
var seq__40241_40803__$1 = temp__5753__auto___40802;
if(cljs.core.chunked_seq_QMARK_(seq__40241_40803__$1)){
var c__4679__auto___40804 = cljs.core.chunk_first(seq__40241_40803__$1);
var G__40805 = cljs.core.chunk_rest(seq__40241_40803__$1);
var G__40806 = c__4679__auto___40804;
var G__40807 = cljs.core.count(c__4679__auto___40804);
var G__40808 = (0);
seq__40241_40752 = G__40805;
chunk__40243_40753 = G__40806;
count__40244_40754 = G__40807;
i__40245_40755 = G__40808;
continue;
} else {
var child_struct_40809 = cljs.core.first(seq__40241_40803__$1);
if((!((child_struct_40809 == null)))){
if(typeof child_struct_40809 === 'string'){
var text_40811 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_40811),child_struct_40809].join(''));
} else {
var children_40812 = shadow.dom.svg_node(child_struct_40809);
if(cljs.core.seq_QMARK_(children_40812)){
var seq__40336_40814 = cljs.core.seq(children_40812);
var chunk__40338_40815 = null;
var count__40339_40816 = (0);
var i__40340_40817 = (0);
while(true){
if((i__40340_40817 < count__40339_40816)){
var child_40818 = chunk__40338_40815.cljs$core$IIndexed$_nth$arity$2(null,i__40340_40817);
if(cljs.core.truth_(child_40818)){
node.appendChild(child_40818);


var G__40819 = seq__40336_40814;
var G__40820 = chunk__40338_40815;
var G__40821 = count__40339_40816;
var G__40822 = (i__40340_40817 + (1));
seq__40336_40814 = G__40819;
chunk__40338_40815 = G__40820;
count__40339_40816 = G__40821;
i__40340_40817 = G__40822;
continue;
} else {
var G__40823 = seq__40336_40814;
var G__40824 = chunk__40338_40815;
var G__40825 = count__40339_40816;
var G__40826 = (i__40340_40817 + (1));
seq__40336_40814 = G__40823;
chunk__40338_40815 = G__40824;
count__40339_40816 = G__40825;
i__40340_40817 = G__40826;
continue;
}
} else {
var temp__5753__auto___40827__$1 = cljs.core.seq(seq__40336_40814);
if(temp__5753__auto___40827__$1){
var seq__40336_40828__$1 = temp__5753__auto___40827__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40336_40828__$1)){
var c__4679__auto___40829 = cljs.core.chunk_first(seq__40336_40828__$1);
var G__40830 = cljs.core.chunk_rest(seq__40336_40828__$1);
var G__40831 = c__4679__auto___40829;
var G__40832 = cljs.core.count(c__4679__auto___40829);
var G__40833 = (0);
seq__40336_40814 = G__40830;
chunk__40338_40815 = G__40831;
count__40339_40816 = G__40832;
i__40340_40817 = G__40833;
continue;
} else {
var child_40834 = cljs.core.first(seq__40336_40828__$1);
if(cljs.core.truth_(child_40834)){
node.appendChild(child_40834);


var G__40835 = cljs.core.next(seq__40336_40828__$1);
var G__40836 = null;
var G__40837 = (0);
var G__40838 = (0);
seq__40336_40814 = G__40835;
chunk__40338_40815 = G__40836;
count__40339_40816 = G__40837;
i__40340_40817 = G__40838;
continue;
} else {
var G__40839 = cljs.core.next(seq__40336_40828__$1);
var G__40840 = null;
var G__40841 = (0);
var G__40842 = (0);
seq__40336_40814 = G__40839;
chunk__40338_40815 = G__40840;
count__40339_40816 = G__40841;
i__40340_40817 = G__40842;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_40812);
}
}


var G__40843 = cljs.core.next(seq__40241_40803__$1);
var G__40844 = null;
var G__40845 = (0);
var G__40846 = (0);
seq__40241_40752 = G__40843;
chunk__40243_40753 = G__40844;
count__40244_40754 = G__40845;
i__40245_40755 = G__40846;
continue;
} else {
var G__40847 = cljs.core.next(seq__40241_40803__$1);
var G__40848 = null;
var G__40849 = (0);
var G__40850 = (0);
seq__40241_40752 = G__40847;
chunk__40243_40753 = G__40848;
count__40244_40754 = G__40849;
i__40245_40755 = G__40850;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___40851 = arguments.length;
var i__4865__auto___40852 = (0);
while(true){
if((i__4865__auto___40852 < len__4864__auto___40851)){
args__4870__auto__.push((arguments[i__4865__auto___40852]));

var G__40853 = (i__4865__auto___40852 + (1));
i__4865__auto___40852 = G__40853;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq40361){
var G__40362 = cljs.core.first(seq40361);
var seq40361__$1 = cljs.core.next(seq40361);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40362,seq40361__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__40364 = arguments.length;
switch (G__40364) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__34734__auto___40865 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34735__auto__ = (function (){var switch__34044__auto__ = (function (state_40369){
var state_val_40370 = (state_40369[(1)]);
if((state_val_40370 === (1))){
var state_40369__$1 = state_40369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40369__$1,(2),once_or_cleanup);
} else {
if((state_val_40370 === (2))){
var inst_40366 = (state_40369[(2)]);
var inst_40367 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_40369__$1 = (function (){var statearr_40371 = state_40369;
(statearr_40371[(7)] = inst_40366);

return statearr_40371;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40369__$1,inst_40367);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__34045__auto__ = null;
var shadow$dom$state_machine__34045__auto____0 = (function (){
var statearr_40373 = [null,null,null,null,null,null,null,null];
(statearr_40373[(0)] = shadow$dom$state_machine__34045__auto__);

(statearr_40373[(1)] = (1));

return statearr_40373;
});
var shadow$dom$state_machine__34045__auto____1 = (function (state_40369){
while(true){
var ret_value__34046__auto__ = (function (){try{while(true){
var result__34047__auto__ = switch__34044__auto__(state_40369);
if(cljs.core.keyword_identical_QMARK_(result__34047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34047__auto__;
}
break;
}
}catch (e40374){var ex__34048__auto__ = e40374;
var statearr_40375_40872 = state_40369;
(statearr_40375_40872[(2)] = ex__34048__auto__);


if(cljs.core.seq((state_40369[(4)]))){
var statearr_40376_40873 = state_40369;
(statearr_40376_40873[(1)] = cljs.core.first((state_40369[(4)])));

} else {
throw ex__34048__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40874 = state_40369;
state_40369 = G__40874;
continue;
} else {
return ret_value__34046__auto__;
}
break;
}
});
shadow$dom$state_machine__34045__auto__ = function(state_40369){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__34045__auto____0.call(this);
case 1:
return shadow$dom$state_machine__34045__auto____1.call(this,state_40369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__34045__auto____0;
shadow$dom$state_machine__34045__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__34045__auto____1;
return shadow$dom$state_machine__34045__auto__;
})()
})();
var state__34736__auto__ = (function (){var statearr_40377 = f__34735__auto__();
(statearr_40377[(6)] = c__34734__auto___40865);

return statearr_40377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34736__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
