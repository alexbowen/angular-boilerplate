define(["angular","app/services","app/controllers"],function(e,t,n){return e.module("directives",["services","controllers"]).directive("appVersion",["version",function(e){return function(t,n,r){n.text(e)}}]).directive("login",function(){return{restrict:"E",controller:"LoginController",templateUrl:"js/application/view/partial/login.tpl",link:function(e,t,n){}}}).directive("getversion",function(){return{restrict:"E",controller:"GetVersionController",templateUrl:"js/application/view/partial/get.tpl",link:function(e,t,n){}}}).directive("setversion",function(){return{restrict:"E",controller:"SetVersionController",templateUrl:"js/application/view/partial/set.tpl",link:function(e,t,n){}}})});