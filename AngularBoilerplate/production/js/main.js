require.config({paths:{app:"application",jquery:"lib/jquery/jquery",angular:"lib/bower_components/angular/angular",angularRoute:"lib/bower_components/angular-route/angular-route",angularMocks:"lib/bower_components/angular-mocks/angular-mocks",text:"lib/bower_components/requirejs-text/text",env:"config/environment",config:"config/application",mocks:"mocks/http"},shim:{angular:{exports:"angular"},angularRoute:["angular"],angularMocks:{deps:["angular"],exports:"angular.mock"}},urlArgs:"bust="+(new Date).getTime(),priority:["angular"]}),window.name="NG_DEFER_BOOTSTRAP!",require(["angular"],function(){require(["packages/bootstrap","packages/main"],function(e){angular.element(document.getElementsByTagName("html")[0]),angular.element().ready(function(){console.log("resume"),angular.resumeBootstrap([e.name])})})});