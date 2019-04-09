(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports.quotes=n(43),console.log(e.exports),e.exports.quote=n(46)},3:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"f",function(){return a}),n.d(t,"e",function(){return o}),n.d(t,"b",function(){return u}),n.d(t,"d",function(){return c}),n.d(t,"c",function(){return i});var r="LOAD_QUOTE",a="LOAD_QUOTE_SUCCESS",o="LOAD_QUOTE_ERROR",u="LOAD_QUOTES",c="LOAD_QUOTES_SUCCESS",i="LOAD_QUOTES_ERROR"},31:function(e,t,n){"use strict";(function(e){var r=n(6),a=n(8),o=n.n(a),u=n(10),c=n(12),i=n(13),s=n(14),l=n(18),d=n(15),p=n(17),h=n(9),f=n(0),b=n.n(f),O=n(51),g=n(11),m=n(5),v=n(16),y=n(26);n(47).config({path:y.join(e,"../.env")});var j=Object({NODE_ENV:"production",PUBLIC_URL:"/pdorsch6/motivation-app"}).DB_HOST,E=y.dirname("../");console.log(E);var q=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={quote:"",author:"",category:""},n.addQuote=n.addQuote.bind(Object(h.a)(Object(h.a)(n))),n.onFieldChange=n.onFieldChange.bind(Object(h.a)(Object(h.a)(n))),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"onFieldChange",value:function(e,t){this.setState(Object(c.a)({},e,t))}},{key:"addQuote",value:function(){var e=Object(u.a)(o.a.mark(function e(){var t,n,r,a,u,c,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,n=t.quote,r=t.author,a=t.category,e.prev=1,e.next=4,fetch("".concat(j,"/api/author"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r})});case 4:return u=e.sent,e.next=7,fetch("".concat(j,"/api/category"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({category:a})});case 7:if(c=e.sent,200!==u.statusCode&&400!==u.statusCode||200!==c.statusCode&&400!==c.statusCode){e.next=13;break}return e.next=11,fetch("".concat(j,"/api/quote"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({category:c.body.category._id,author:u.body.author._id,quote:n})});case 11:i=e.sent,console.log("Quote added: ",i);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log("ERROR: ",e.t0);case 18:case"end":return e.stop()}},e,this,[[1,15]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return b.a.createElement(b.a.Fragment,null,"Category:",b.a.createElement("input",{type:"text",onChange:function(t){return e.onFieldChange("category",t.target.value)},placeholder:"Category",style:{width:"200px"}}),b.a.createElement("br",null),"Quote:",b.a.createElement("input",{type:"text",onChange:function(t){return e.onFieldChange("quote",t.target.value)},placeholder:"Quote",style:{width:"200px"}}),b.a.createElement("br",null),"Author:",b.a.createElement("input",{type:"text",onChange:function(t){return e.onFieldChange("author",t.target.value)},placeholder:"Author",style:{width:"200px"}}),b.a.createElement("br",null),b.a.createElement("button",{onClick:this.addQuote},"ADD"))}}]),t}(f.Component);t.a=Object(O.a)(Object(g.b)(function(e){return{quotes:e.quotes.data,loading:e.quotes.loading,error:e.quotes.error}},function(e){return Object(m.b)(Object(r.a)({},v.quote),e)})(q))}).call(this,"/")},34:function(e,t,n){e.exports=n(50)},43:function(e,t,n){"use strict";n.r(t),n.d(t,"loadQuotes",function(){return l});var r=n(8),a=n.n(r),o=n(10),u=n(3),c=function(e){return{type:u.d,quotes:e}},i=function(e){return{type:u.c,error:e}},s=function(){return{type:u.b}};function l(){return function(){var e=Object(o.a)(a.a.mark(function e(t){var n,r,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(s()),"/api/quote/all",n={method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}},e.prev=3,e.next=6,fetch("/api/quote/all",n);case 6:return r=e.sent,e.next=9,r.json();case 9:if(o=e.sent,r.ok){e.next=12;break}return e.abrupt("return",t(i(o.message)));case 12:return e.abrupt("return",t(c(o.quotes)));case 15:return e.prev=15,e.t0=e.catch(3),e.abrupt("return",t(i(e.t0)));case 18:case"end":return e.stop()}},e,this,[[3,15]])}));return function(t){return e.apply(this,arguments)}}()}},46:function(e,t,n){"use strict";n.r(t),n.d(t,"loadQuote",function(){return l});var r=n(8),a=n.n(r),o=n(10),u=n(3),c=function(e){return{type:u.f,quote:e}},i=function(e){return{type:u.e,error:e}},s=function(){return{type:u.a}};function l(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r,o,u;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(s()),r="/api/quote/".concat(e),o={method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}},t.prev=3,t.next=6,fetch(r,o).json();case 6:if((u=t.sent).ok){t.next=9;break}return t.abrupt("return",n(i(u.message)));case 9:return t.abrupt("return",n(c(u.quote)));case 12:return t.prev=12,t.t0=t.catch(3),t.abrupt("return",n(i(t.t0)));case 15:case"end":return t.stop()}},t,this,[[3,12]])}));return function(e){return t.apply(this,arguments)}}()}},50:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(28),u=n.n(o),c=n(53),i=n(52);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(11),l=n(5),d=n(6),p=n(3),h={selectedQuote:null,quotes:null,loading:!0,error:null};var f=Object(l.c)({quote:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.a:return Object(d.a)({},e,{loading:!0});case p.f:return Object(d.a)({},e,{loading:!1,selectedQuote:t.quote,error:null});case p.e:return Object(d.a)({},e,{loading:!1,error:t.error});default:return e}},quotes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.b:return Object(d.a)({},e,{loading:!0});case p.d:return Object(d.a)({},e,{loading:!1,data:t.quotes,error:null});case p.c:return Object(d.a)({},e,{loading:!1,error:t.error});default:return e}}}),b=n(30),O=Object(l.d)(f,Object(l.a)(b.a)),g=n(13),m=n(14),v=n(18),y=n(15),j=n(17),E=n(51),q=n(16),C=n(31),x=function(e){function t(e){return Object(g.a)(this,t),Object(v.a)(this,Object(y.a)(t).call(this,e))}return Object(j.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.quotes,n=e.loadQuotes;t||n()}},{key:"render",value:function(){var e=this.props,t=e.quotes,n=(e.loading,e.error);return n?a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null," ",n," ")):a.a.createElement(a.a.Fragment,null,a.a.createElement("ul",null,t?t.map(function(e,t){return a.a.createElement("li",{key:t}," ",e.quote,"  ")}):a.a.createElement("p",null,"Loading...")),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement(C.a,null)))}}]),t}(r.Component),w=Object(E.a)(Object(s.b)(function(e){return{quotes:e.quotes.data,loading:e.quotes.loading,error:e.quotes.error}},function(e){return Object(l.b)(Object(d.a)({},q.quotes),e)})(x)),k=Object({NODE_ENV:"production",PUBLIC_URL:"/pdorsch6/motivation-app"}).REACT_APP_DB_HOST;console.log(k),u.a.render(a.a.createElement(s.a,{store:O},a.a.createElement(c.a,null,a.a.createElement(i.a,{path:"/",exact:!0,component:w}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.f7ea8ce3.chunk.js.map