
ig.module('plugins.pubnub.lib').defines(function(){

function w(){return function(){}}
window.JSON&&window.JSON.stringify||function(){function E(q){z.lastIndex=0;return z.test(q)?'"'+q.replace(z,function(r){var k=x[r];return typeof k==="string"?k:"\\u"+("0000"+r.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+q+'"'}function A(q,r){var k,m,t,C,u=h,o,f=r[q];if(f&&typeof f==="object"&&typeof f.toJSON==="function")f=f.toJSON(q);if(typeof v==="function")f=v.call(r,q,f);switch(typeof f){case "string":return E(f);case "number":return isFinite(f)?String(f):"null";case "boolean":case "null":return String(f);
case "object":if(!f)return"null";h+=D;o=[];if(Object.prototype.toString.apply(f)==="[object Array]"){C=f.length;for(k=0;k<C;k+=1)o[k]=A(k,f)||"null";t=o.length===0?"[]":h?"[\n"+h+o.join(",\n"+h)+"\n"+u+"]":"["+o.join(",")+"]";h=u;return t}if(v&&typeof v==="object"){C=v.length;for(k=0;k<C;k+=1){m=v[k];if(typeof m==="string")if(t=A(m,f))o.push(E(m)+(h?": ":":")+t)}}else for(m in f)if(Object.hasOwnProperty.call(f,m))if(t=A(m,f))o.push(E(m)+(h?": ":":")+t);t=o.length===0?"{}":h?"{\n"+h+o.join(",\n"+h)+
"\n"+u+"}":"{"+o.join(",")+"}";h=u;return t}}window.JSON||(window.JSON={});if(typeof String.prototype.toJSON!=="function")String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()};var z=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,h,D,x={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},v;if(typeof JSON.stringify!=="function")JSON.stringify=
function(q,r,k){var m;D=h="";if(typeof k==="number")for(m=0;m<k;m+=1)D+=" ";else if(typeof k==="string")D=k;if((v=r)&&typeof r!=="function"&&(typeof r!=="object"||typeof r.length!=="number"))throw Error("JSON.stringify");return A("",{"":q})};if(typeof JSON.parse!=="function")JSON.parse=function(q){return eval("("+q+")")}}();
window.PUBNUB||function(){function E(a){var b={},c=a.publish_key||"demo",e=a.subscribe_key||"demo",n=a.ssl?"s":"",l="http"+n+"://"+(a.origin||"pubsub.pubnub.com"),B={history:function(d,g){g=d.callback||g;var i=d.limit||100,j=d.channel,p=u();if(!j)return h("Missing Channel");if(!g)return h("Missing Callback");f({c:p,url:[l,"history",e,o(j),p,i],b:function(s){g(s)},a:function(s){h(s)}})},time:function(d){var g=u();f({c:g,url:[l,"time",g],b:function(i){d(i[0])},a:function(){d(0)}})},uuid:function(d){var g=
u();f({c:g,url:["http"+n+"://pubnub-prod.appspot.com/uuid?callback="+g],b:function(i){d(i[0])},a:function(){d(0)}})},analytics:function(d){var g=u(),i=d.limit||100,j=d.ago||0,p=d.duration||100,s=d.callback;f({c:g,b:function(G){s(G)},a:function(){s(0)},url:[["http"+n+"://pubnub-prod.appspot.com/analytics-channel?callback="+g,"sub-key="+e,"pub-key="+c,"channel="+o(d.channel||""),"limit="+i,"ago="+j,"duration="+p].join("&")]})},publish:function(d,g){g=g||d.callback||w();var i=d.message,j=d.channel,p=
u();if(!i)return h("Missing Message");if(!j)return h("Missing Channel");if(!c)return h("Missing Publish Key");i=JSON.stringify(i);i=[l,"publish",c,e,0,o(j),p,o(i)];if(i.join().length>1800)return h("Message Too Big");f({c:p,b:function(s){g(s)},a:function(){g([0,"Disconnected"])},url:i})},unsubscribe:function(d){d=d.channel;if(d in b){b[d].d=0;b[d].e&&b[d].e(0)}},subscribe:function(d,g){function i(){var O=u();if(b[j].d)b[j].e=f({c:O,url:[l,"subscribe",e,o(j),O,p],a:function(){setTimeout(i,1E3);B.time(function(H){H||
s()})},b:function(H){if(b[j].d){if(!G){G=1;U()}p=H[1];setTimeout(i,10);x(H[0],function(V){g(V)})}}})}var j=d.channel;g=g||d.callback;var p=0,s=d.error||w(),G=0,U=d.connect||w();if(!J)return P.push([d,g,B]);if(!j)return h("Missing Channel");if(!g)return h("Missing Callback");if(!e)return h("Missing Subscribe Key");j in b||(b[j]={});if(b[j].d)return h("Already Connected");b[j].d=1;i()},each:x,map:v,css:t,$:z,create:C,bind:r,supplant:q,head:k,search:D,attr:m,now:A,init:E};return B}function A(){return"x"+
++W+""+ +new Date}function z(a){return document.getElementById(a)}function h(a){console.log(a)}function D(a,b){var c=[];x(a.split(/\s+/),function(e){x((b||document).getElementsByTagName(e),function(n){c.push(n)})});return c}function x(a,b){if(a&&b)if(typeof a[0]!="undefined")for(var c=0,e=a.length;c<e;)b.call(a[c],a[c],c++);else for(c in a)a.hasOwnProperty&&a.hasOwnProperty(c)&&b.call(a[c],c,a[c])}function v(a,b){var c=[];x(a||[],function(e,n){c.push(b(e,n))});return c}function q(a,b){return a.replace(X,
function(c,e){return b[e]||c})}function r(a,b,c){x(a.split(","),function(e){function n(l){if(!l)l=window.event;if(!c(l)){l.cancelBubble=true;l.returnValue=false;l.preventDefault&&l.preventDefault();l.stopPropagation&&l.stopPropagation()}}if(b.addEventListener)b.addEventListener(e,n,false);else if(b.attachEvent)b.attachEvent("on"+e,n);else b["on"+e]=n})}function k(){return D("head")[0]}function m(a,b,c){if(c)a.setAttribute(b,c);else return a&&a.getAttribute&&a.getAttribute(b)}function t(a,b){for(var c in b)if(b.hasOwnProperty(c))try{a.style[c]=
b[c]+("|width|height|top|left|".indexOf(c)>0&&typeof b[c]=="number"?"px":"")}catch(e){}}function C(a){return document.createElement(a)}function u(){return K||y()?0:A()}function o(a){return v(encodeURIComponent(a).split(""),function(b){return"-_.!~*'()".indexOf(b)<0?b:"%"+b.charCodeAt(0).toString(16).toUpperCase()}).join("")}function f(a){function b(i,j){if(!l){l=1;i||g(j);c.onerror=null;clearTimeout(B);setTimeout(function(){i&&d();var p=z(n),s=p&&p.parentNode;s&&s.removeChild(p)},1E3)}}if(K||y())return Y(a);
var c=C("script"),e=a.c,n=A(),l=0,B=setTimeout(function(){b(1)},L),d=a.a||w(),g=a.b||w();window[e]=function(i){b(0,i)};c[Q]=Q;c.onerror=function(){b(1)};c.src=a.url.join(R);m(c,"id",n);k().appendChild(c);return b}function Y(a){function b(j){if(!n){n=1;clearTimeout(B);if(e){e.onerror=e.onload=null;e.abort&&e.abort();e=null}j&&d()}}function c(){if(!l){l=1;clearTimeout(B);try{response=JSON.parse(e.responseText)}catch(j){return b(1)}g(response)}}var e,n=0,l=0,B=setTimeout(function(){b(1)},L),d=a.a||w(),
g=a.b||w();try{e=y()||window.XDomainRequest&&new XDomainRequest||new XMLHttpRequest;e.onerror=function(){b(1)};e.onload=c;e.timeout=L;e.open("GET",a.url.join(R),true);e.send()}catch(i){b(0);K=0;return f(a)}return b}function S(){clearInterval(Z);if(!J){J=1;x(P,function(a){a[2].subscribe(a[0],a[1])})}}function y(){if(!M.get)return 0;var a={id:y.id++,send:w(),abort:function(){a.id={}},open:function(b,c){y[a.id]=a;M.get(a.id,c)}};return a}window.console||(window.console=window.console||{});console.log||
(console.log=(window.opera||{}).postError||w());var W=1,X=/{([\w\-]+)}/g,Q="async",R="/",L=14E4,I=navigator.userAgent,K=I.indexOf("MSIE 6")==-1,F=z("pubnub")||{},J=0,P=[],N=E({publish_key:m(F,"pub-key"),subscribe_key:m(F,"sub-key"),ssl:m(F,"ssl")=="on",origin:m(F,"origin")}),T=!location.href.indexOf("https")?"https://pubnub.s3.amazonaws.com/pubnub.swf":"http://cdn.pubnub.com/pubnub.swf";t(F,{position:"absolute",top:-1E3});I.indexOf("Firefox")>0||I.indexOf("MSIE 9")>0||I.indexOf("MSIE 6")>0||(F.innerHTML=
"<object id=pubnubs type=application/x-shockwave-flash width=1 height=1 data="+T+"><param name=movie value="+T+" /><param name=allowscriptaccess value=always /></object>");var M=z("pubnubs")||{},Z=setInterval(function(){!("chrome"in window)&&M.get&&S()},100);r("load",window,function(){setTimeout(S,1E3)});N.rdx=function(a,b){if(!b)return y[a].onerror();y[a].responseText=unescape(b);y[a].onload()};y.id=1E3;window.jQuery&&(window.jQuery.PUBNUB=N);window.PUBNUB=N}();

});
