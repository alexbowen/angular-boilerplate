define(["utils/cookie"],function(e){return["$scope","$rootScope","APPLICATION",function(t,n,r){for(var i in r.modules)r.modules.hasOwnProperty(i)&&(t[i+"active"]=r.modules[i]);e.remove("TA-authToken"),n.title=r.name,n.$on("event:auth-loginConfirmed",function(){n.authenticated=!0}),n.$on("event:auth-loginRefused",function(e,t){n.authenticated=!1}),t.$apply()}]});