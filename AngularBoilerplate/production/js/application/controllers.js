define(["angular","config","app/controllers/application","app/controllers/route","app/controllers/partial/login","app/controllers/partial/menu"],function(e){return e.module("controllers",["APPLICATION"]).controller("ApplicationController",["$scope","$injector",function(e,t){require(["app/controllers/application"],function(n){t.invoke(n,this,{$scope:e})})}]).controller("RouteController",["$scope","$injector",function(e,t){require(["app/controllers/route"],function(n){t.invoke(n,this,{$scope:e})})}]).controller("LoginController",["$scope","$injector",function(e,t){require(["app/controllers/partial/login"],function(n){t.invoke(n,this,{$scope:e})})}]).controller("MenuController",["$scope","$injector",function(e,t){require(["app/controllers/partial/menu"],function(n){t.invoke(n,this,{$scope:e})})}])});