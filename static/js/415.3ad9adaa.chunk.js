"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{4126:function(r,t,e){var n=e(7689),a=e(1087),u=e(184);t.Z=function(r){var t=r.films,e=(0,n.TH)();return(0,u.jsx)("ul",{children:t.map((function(r){return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(r.id),state:{from:e},cover:r.poster_path,children:r.title})},r.id)}))})}},5415:function(r,t,e){e.r(t);var n=e(5861),a=e(9439),u=e(7757),c=e.n(u),s=e(2791),i=e(4126),o=e(1022),f=e(184);t.default=function(){var r=(0,s.useState)([]),t=(0,a.Z)(r,2),e=t[0],u=t[1];return(0,s.useEffect)((function(){var r=function(){var r=(0,n.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,o.wr)();case 3:t=r.sent,u(t),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Trending Movies"}),0!==e.length&&(0,f.jsx)(i.Z,{films:e})]})}},1022:function(r,t,e){e.d(t,{Hx:function(){return v},Y5:function(){return o},o1:function(){return f},uV:function(){return p},wr:function(){return i}});var n=e(5861),a=e(7757),u=e.n(a),c=e(5294);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s={params:{api_key:"4d6ce842c83d3eed5fa687f1f99b0d79",language:"en-US"}},i=function(){var r=(0,n.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("trending/movie/day",s);case 2:return t=r.sent,r.abrupt("return",t.data.results);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(t),s);case 2:return e=r.sent,r.abrupt("return",e.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/search/movie?query=".concat(t),s);case 2:return e=r.sent,r.abrupt("return",e.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(t,"/credits?"),s);case 2:return e=r.sent,r.abrupt("return",e.data.cast);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(t,"/reviews?"),s);case 2:return e=r.sent,r.abrupt("return",e.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.3ad9adaa.chunk.js.map