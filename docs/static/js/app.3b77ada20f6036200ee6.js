webpackJsonp([1],{"2MHc":function(t,e){},JjOb:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("/5sW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")(null,r,!1,function(t){n("2MHc")},null,null).exports,s=n("/ocq"),a={isLoadBeforehand:!1,shiftOffset:100,getWindowHeight:function(){return document.documentElement.clientHeight},getWindowWidth:function(){return document.documentElement.clientWidth},getElementHeight:function(t){return t.clientHeight},getElementWidth:function(t){return t.clientWidth},getScrollOffsetHeight:function(){return window.pageYOffset||document.documentElement.scrollTop},getScrollOffsetWidth:function(){return window.pageXOffset||document.documentElement.scrollLeft},formatDate:function(t){return i.a.moment(t).format("DD.MM.YYYY hh:mm:ss")},mergeArrays:function(t,e){return Array.isArray(t)&&Array.isArray(e)?e.forEach(function(e){-1===t.indexOf(e)&&t.push(e)}):console.error("Not an array passed"),t},diffArrays:function(t,e){return Array.isArray(t)&&Array.isArray(e)?e.forEach(function(e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}):console.error("Not an array passed"),t},isElementBottomVisible:function(t){if(this.getWindowHeight()+this.shift(this.getScrollOffsetHeight())>=t.offsetTop+t.offsetHeight)return!0},isElementTopVisible:function(t){if(this.getWindowHeight()+this.shift(this.getScrollOffsetHeight())>=t.offsetTop)return!0},isElementRightVisible:function(t){if(this.getWindowWidth()+this.shift(this.getScrollOffsetWidth())>=t.offsetLeft+t.offsetWidth)return!0},shift:function(t){return this.isLoadBeforehand?t+this.shiftOffset:t}},c={name:"Box",components:{},props:{index:{type:Number}},data:function(){return{checked:!1,number:""}},methods:{save:function(){console.log("Index: "+this.index+" Value: "+this.number)},filter:function(t){t.target.value=this.number.replace("/D/g","")}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{key:t.index,staticClass:"box",attrs:{index:t.index}},[n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.checked,expression:"checked",modifiers:{lazy:!0}}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,null)>-1:t.checked},on:{change:function(e){var n=t.checked,i=e.target,r=!!i.checked;if(Array.isArray(n)){var o=t._i(n,null);i.checked?o<0&&(t.checked=n.concat([null])):o>-1&&(t.checked=n.slice(0,o).concat(n.slice(o+1)))}else t.checked=r}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],attrs:{type:"number",disabled:t.checked},domProps:{value:t.number},on:{input:[function(e){e.target.composing||(t.number=e.target.value)},t.filter]}}),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:t.checked,expression:"checked"}],on:{click:t.save}},[t._v("Save")])])},staticRenderFns:[]};var l=n("VU/8")(c,u,!1,function(t){n("JjOb")},"data-v-3475c60a",null).exports,f=n("c/Tr"),h=n.n(f),d={name:"Ruler",props:{amount:{type:Number,required:!0},position:{type:String,required:!0},step:{type:Number,default:100}},computed:{items:function(){return Array(this.amount).fill(null)},isTop:function(){return"ruler-top"==this.$el.className},isLeft:function(){return"ruler-left"==this.$el.className}},updated:function(){var t=this,e=this.$el.querySelectorAll(".index");this.isTop&&h()(e).forEach(function(e){e.style["min-width"]=t.step+"px"}),this.isLeft&&h()(e).forEach(function(e){e.style["min-height"]=t.step+"px"}),window.addEventListener("scroll",this.shiftPosition)},methods:{shiftPosition:function(){var t=void 0;this.isTop&&(t=a.getScrollOffsetWidth(),this.$refs.stack.style.transform="translateX(-"+t+"px)"),this.isLeft&&(t=a.getScrollOffsetHeight(),this.$refs.stack.style.transform="translateY(-"+t+"px)")}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"ruler-"+t.position},[n("div",{ref:"stack",staticClass:"stack"},t._l(t.items,function(e,i){return n("div",{key:t.position+i,staticClass:"index",attrs:{index:i}})}))])},staticRenderFns:[]};var m={name:"home",components:{Box:l,Ruler:n("VU/8")(d,p,!1,function(t){n("lRsD")},"data-v-37a53d5e",null).exports},data:function(){return{rowsCounter:1,colsCounter:1,containerW:a.getWindowWidth(),containerH:a.getWindowHeight(),delay:!0}},mounted:function(){this.init(),window.addEventListener("scroll",this.updateCounters)},computed:{rows:function(){return Array(this.rowsCounter)},cols:function(){return Array(this.colsCounter)}},methods:{init:function(){a.isLoadBeforehand=!0;var t=this.$el.querySelector(".box");this.rowsCounter=Math.ceil(this.containerH/t.clientHeight),this.colsCounter=Math.ceil(this.containerW/t.clientWidth)},updateCounters:function(){var t=this;a.isElementRightVisible(this.$el)&&this.timeout(function(){return t.colsCounter++}),a.isElementBottomVisible(this.$el)&&this.timeout(function(){return t.rowsCounter++})},timeout:function(t){this.delay?setTimeout(t,500):t()}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{attrs:{id:"optional"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.delay,expression:"delay"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.delay)?t._i(t.delay,null)>-1:t.delay},on:{change:function(e){var n=t.delay,i=e.target,r=!!i.checked;if(Array.isArray(n)){var o=t._i(n,null);i.checked?o<0&&(t.delay=n.concat([null])):o>-1&&(t.delay=n.slice(0,o).concat(n.slice(o+1)))}else t.delay=r}}}),t._v(" Set/Unset delay\n    ")]),t._v(" "),n("Ruler",{attrs:{amount:t.colsCounter,position:"top"}}),t._v(" "),n("Ruler",{attrs:{amount:t.rowsCounter,position:"left"}}),t._v(" "),t._l(t.rows,function(e,i){return n("div",{key:i,staticClass:"container-flex"},t._l(t.cols,function(e,r){return n("Box",{attrs:{index:t.cols.length*i+ ++r}})}))})],2)},staticRenderFns:[]};var y=n("VU/8")(m,v,!1,function(t){n("xLQx")},"data-v-b26eb410",null).exports;i.a.use(s.a);var g=new s.a({mode:"history",base:Object({NODE_ENV:"production"}).BASE_URL,routes:[{path:"/",name:"home",component:y}]}),_=function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:n});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[n].concat(t.init):n,e.call(this,t)}}function n(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},w="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */function b(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}var x=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},E={namespaced:{configurable:!0}};E.namespaced.get=function(){return!!this._rawModule.namespaced},x.prototype.addChild=function(t,e){this._children[t]=e},x.prototype.removeChild=function(t){delete this._children[t]},x.prototype.getChild=function(t){return this._children[t]},x.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},x.prototype.forEachChild=function(t){b(this._children,t)},x.prototype.forEachGetter=function(t){this._rawModule.getters&&b(this._rawModule.getters,t)},x.prototype.forEachAction=function(t){this._rawModule.actions&&b(this._rawModule.actions,t)},x.prototype.forEachMutation=function(t){this._rawModule.mutations&&b(this._rawModule.mutations,t)},Object.defineProperties(x.prototype,E);var k=function(t){this.register([],t,!1)};k.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},k.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return t+((e=e.getChild(n)).namespaced?n+"/":"")},"")},k.prototype.update=function(t){!function t(e,n,i){0;n.update(i);if(i.modules)for(var r in i.modules){if(!n.getChild(r))return void 0;t(e.concat(r),n.getChild(r),i.modules[r])}}([],this.root,t)},k.prototype.register=function(t,e,n){var i=this;void 0===n&&(n=!0);var r=new x(e,n);0===t.length?this.root=r:this.get(t.slice(0,-1)).addChild(t[t.length-1],r);e.modules&&b(e.modules,function(e,r){i.register(t.concat(r),e,n)})},k.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var O;var $=function(t){var e=this;void 0===t&&(t={}),!O&&"undefined"!=typeof window&&window.Vue&&W(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1);var r=t.state;void 0===r&&(r={}),"function"==typeof r&&(r=r()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new k(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new O;var o=this,s=this.dispatch,a=this.commit;this.dispatch=function(t,e){return s.call(o,t,e)},this.commit=function(t,e,n){return a.call(o,t,e,n)},this.strict=i,H(this,r,[],this._modules.root),S(this,r),n.forEach(function(t){return t(e)}),O.config.devtools&&function(t){w&&(t._devtoolHook=w,w.emit("vuex:init",t),w.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){w.emit("vuex:mutation",t,e)}))}(this)},C={state:{configurable:!0}};function A(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function M(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;H(t,n,[],t._modules.root,!0),S(t,n,e)}function S(t,e,n){var i=t._vm;t.getters={};var r={};b(t._wrappedGetters,function(e,n){r[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var o=O.config.silent;O.config.silent=!0,t._vm=new O({data:{$$state:e},computed:r}),O.config.silent=o,t.strict&&function(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}(t),i&&(n&&t._withCommit(function(){i._data.$$state=null}),O.nextTick(function(){return i.$destroy()}))}function H(t,e,n,i,r){var o=!n.length,s=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[s]=i),!o&&!r){var a=N(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){O.set(a,c,i.state)})}var u=i.context=function(t,e,n){var i=""===e,r={dispatch:i?t.dispatch:function(n,i,r){var o=j(n,i,r),s=o.payload,a=o.options,c=o.type;return a&&a.root||(c=e+c),t.dispatch(c,s)},commit:i?t.commit:function(n,i,r){var o=j(n,i,r),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=e+c),t.commit(c,s,a)}};return Object.defineProperties(r,{getters:{get:i?function(){return t.getters}:function(){return function(t,e){var n={},i=e.length;return Object.keys(t.getters).forEach(function(r){if(r.slice(0,i)===e){var o=r.slice(i);Object.defineProperty(n,o,{get:function(){return t.getters[r]},enumerable:!0})}}),n}(t,e)}},state:{get:function(){return N(t.state,n)}}}),r}(t,s,n);i.forEachMutation(function(e,n){!function(t,e,n,i){(t._mutations[e]||(t._mutations[e]=[])).push(function(e){n.call(t,i.state,e)})}(t,s+n,e,u)}),i.forEachAction(function(e,n){var i=e.root?n:s+n,r=e.handler||e;!function(t,e,n,i){(t._actions[e]||(t._actions[e]=[])).push(function(e,r){var o,s=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},e,r);return(o=s)&&"function"==typeof o.then||(s=Promise.resolve(s)),t._devtoolHook?s.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):s})}(t,i,r,u)}),i.forEachGetter(function(e,n){!function(t,e,n,i){if(t._wrappedGetters[e])return void 0;t._wrappedGetters[e]=function(t){return n(i.state,i.getters,t.state,t.getters)}}(t,s+n,e,u)}),i.forEachChild(function(i,o){H(t,e,n.concat(o),i,r)})}function N(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function j(t,e,n){var i;return null!==(i=t)&&"object"==typeof i&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function W(t){O&&t===O||_(O=t)}C.state.get=function(){return this._vm._data.$$state},C.state.set=function(t){0},$.prototype.commit=function(t,e,n){var i=this,r=j(t,e,n),o=r.type,s=r.payload,a=(r.options,{type:o,payload:s}),c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(t){t(s)})}),this._subscribers.forEach(function(t){return t(a,i.state)}))},$.prototype.dispatch=function(t,e){var n=this,i=j(t,e),r=i.type,o=i.payload,s={type:r,payload:o},a=this._actions[r];if(a)return this._actionSubscribers.forEach(function(t){return t(s,n.state)}),a.length>1?Promise.all(a.map(function(t){return t(o)})):a[0](o)},$.prototype.subscribe=function(t){return A(t,this._subscribers)},$.prototype.subscribeAction=function(t){return A(t,this._actionSubscribers)},$.prototype.watch=function(t,e,n){var i=this;return this._watcherVM.$watch(function(){return t(i.state,i.getters)},e,n)},$.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},$.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),H(this,this.state,t,this._modules.get(t),n.preserveState),S(this,this.state)},$.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=N(e.state,t.slice(0,-1));O.delete(n,t[t.length-1])}),M(this)},$.prototype.hotUpdate=function(t){this._modules.update(t),M(this,!0)},$.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties($.prototype,C);var V=T(function(t,e){var n={};return G(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var i=B(this.$store,"mapState",t);if(!i)return;e=i.context.state,n=i.context.getters}return"function"==typeof r?r.call(this,e,n):e[r]},n[i].vuex=!0}),n}),L=T(function(t,e){var n={};return G(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=this.$store.commit;if(t){var o=B(this.$store,"mapMutations",t);if(!o)return;i=o.context.commit}return"function"==typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}}),n}),P=T(function(t,e){var n={};return G(e).forEach(function(e){var i=e.key,r=e.val;r=t+r,n[i]=function(){if(!t||B(this.$store,"mapGetters",t))return this.$store.getters[r]},n[i].vuex=!0}),n}),R=T(function(t,e){var n={};return G(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=this.$store.dispatch;if(t){var o=B(this.$store,"mapActions",t);if(!o)return;i=o.context.dispatch}return"function"==typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}}),n});function G(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function T(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function B(t,e,n){return t._modulesNamespaceMap[n]}var D={Store:$,install:W,version:"3.0.1",mapState:V,mapMutations:L,mapGetters:P,mapActions:R,createNamespacedHelpers:function(t){return{mapState:V.bind(null,t),mapGetters:P.bind(null,t),mapMutations:L.bind(null,t),mapActions:R.bind(null,t)}}};i.a.use(D);var U=new D.Store({state:{},mutations:{},actions:{}});i.a.config.productionTip=!1,new i.a({router:g,store:U,render:function(t){return t(o)}}).$mount("#app")},lRsD:function(t,e){},xLQx:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3b77ada20f6036200ee6.js.map