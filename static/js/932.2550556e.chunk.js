"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[932],{494:function(e,t,n){n.d(t,{e:function(){return c},Z:function(){return o}});var r=n(87),a=n(184),s=function(e){var t=e.id,n=e.poster_path,s=e.title;return(0,a.jsx)("div",{children:(0,a.jsxs)(r.rU,{to:"/movies/".concat(t),children:[(0,a.jsx)("img",{src:n?"".concat("https://image.tmdb.org/t/p/w500").concat(n):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:s}),(0,a.jsx)("h2",{children:s})]})})},c=function(e){var t=e.movies;console.log("movies in MovieList: ",t);var n=Array.isArray(t)&&t.length;return(0,a.jsx)("div",{children:n&&t.map((function(e){return(0,a.jsx)("div",{children:(0,a.jsx)(s,{id:e.id,poster_path:e.poster_path,title:e.title},e.id)})}))})},o=c},932:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),a=n(439),s=n(757),c=n.n(s),o=n(791),i=n(835),u=n(494),p=n(184),l=function(e){var t=e.message;return(0,p.jsx)("p",{children:t})},f=n(390),d=function(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),n=t[0],s=t[1],d=(0,o.useState)(!1),v=(0,a.Z)(d,2),h=v[0],m=v[1],g=(0,o.useState)(null),x=(0,a.Z)(g,2),j=x[0],k=x[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,f.D)();case 4:t=e.sent,s(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.massage),k(e.t0.message);case 12:return e.prev=12,m(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),console.log("Movies:",n),(0,p.jsxs)(p.Fragment,{children:[h&&(0,p.jsx)(i.a,{}),j&&(0,p.jsx)(l,{message:j}),(0,p.jsx)("h1",{children:"Trend of day"}),(0,p.jsx)(u.Z,{movies:n})]})}},390:function(e,t,n){n.d(t,{C:function(){return u},D:function(){return i}});var r=n(861),a=n(757),s=n.n(a),c=n(243),o="https://api.themoviedb.org/3",i=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o,"/trending/movie/day?language=en-US&api_key=").concat("687e4525be1a45f56930e098a4988fd3"));case 2:return t=e.sent,n=t.data,console.log("data: ",n),e.abrupt("return",n.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o,"/search/movie?query=").concat(t,"&api_key=687e4525be1a45f56930e098a4988fd3"));case 2:return n=e.sent,r=n.data,console.log("data: ",r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=932.2550556e.chunk.js.map