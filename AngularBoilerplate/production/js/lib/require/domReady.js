(function(e){e(["require","exports","module"],function(e,t,n){function r(e){var t;for(t=0;t<e.length;t+=1)e[t](h)}function i(){var e=p;c&&e.length&&(p=[],r(e))}function s(){c||(c=!0,f&&clearInterval(f),i())}function o(e){return c?e(h):p.push(e),o}var u,a,f,l=typeof window!="undefined"&&window.document,c=!l,h=l?document:null,p=[];if(l){if(document.addEventListener)document.addEventListener("DOMContentLoaded",s,!1),window.addEventListener("load",s,!1);else if(window.attachEvent){window.attachEvent("onload",s),a=document.createElement("div");try{u=window.frameElement===null}catch(d){}a.doScroll&&u&&window.external&&(f=setInterval(function(){try{a.doScroll(),s()}catch(e){}},30))}document.readyState==="complete"&&s()}return o.version="2.0.1",o.load=function(e,t,n,r){r.isBuild?n(null):o(n)},o})})(typeof define=="function"?define:function(e){e(require,exports,module)});