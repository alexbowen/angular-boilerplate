define("utils/history",["jquery","utils/support"],function(e,t){var n=function(n){var r=this;t.registerFeature("historyApi",!!window.history.pushState);if(!t.featureCompatibility("historyApi")){console.warn("history api not supported - destroying history model"),history.delete();return}e(window).on("url:changed",function(e,t){r.push(t.state,t.href)}),e(window).on("popstate",function(t){t.originalEvent.state&&(r.state=t.originalEvent.state),console.log("popstate heard",window.history,t),r.popped=!0,e(window).trigger("page:change",[{state:window.history.state}])}),this.state=n};return n.prototype={state:{},popped:!1,push:function(e,t){this.popped||(this.popped=!1,window.history.pushState(e,null,t))},replace:function(e){this.popped||(this.popped=!1,window.history.replaceState(e,null,""))}},new n});