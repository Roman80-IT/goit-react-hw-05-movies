"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{3121:function(e,t,n){n(2791);var r=n(9014),a=n(184);t.Z=function(e){var t=e.message;return t&&r.Am.error(t),(0,a.jsx)("p",{children:t})}},2494:function(e,t,n){n.d(t,{e:function(){return s},Z:function(){return u}});var r=n(1087),a=n(4205),c=n(184),o=function(e){var t=e.id,n=e.poster_path,o=e.title;return(0,c.jsx)("div",{children:(0,c.jsxs)(r.rU,{to:"/movies/".concat(t),children:[(0,c.jsx)("img",{src:n?"".concat("https://image.tmdb.org/t/p/w500").concat(n):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:o}),(0,c.jsx)(a.Dx,{children:o})]})})},s=function(e){var t=e.movies;console.log("movies in MovieList: ",t);var n=Array.isArray(t)&&t.length;return(0,c.jsx)("div",{children:n&&t.map((function(e){return(0,c.jsx)("div",{children:(0,c.jsx)(o,{id:e.id,poster_path:e.poster_path,title:e.title},e.id)})}))})},u=s},5415:function(e,t,n){n.r(t);var r=n(5861),a=n(9439),c=n(7757),o=n.n(c),s=n(2791),u=n(1835),i=n(2494),p=n(3121),f=n(4205),l=n(4390),d=n(184);t.default=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],v=(0,s.useState)(!1),h=(0,a.Z)(v,2),g=h[0],m=h[1],x=(0,s.useState)(null),k=(0,a.Z)(x,2),Z=k[0],w=k[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,l.Df)();case 4:t=e.sent,c(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.massage),w(e.t0.message);case 12:return e.prev=12,m(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),console.log("Movies:",n),(0,d.jsxs)(f.im,{children:[g&&(0,d.jsx)(u.a,{}),Z&&(0,d.jsx)(p.Z,{message:Z}),(0,d.jsx)(f.Dx,{children:"Trend of day"}),(0,d.jsx)("div",{children:(0,d.jsx)(i.Z,{movies:n})})]})}},4390:function(e,t,n){n.d(t,{C3:function(){return p},Df:function(){return i},IQ:function(){return l},fh:function(){return f}});var r=n(5861),a=n(7757),c=n.n(a),o=n(1243),s="https://api.themoviedb.org/3",u="687e4525be1a45f56930e098a4988fd3",i=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s,"/trending/movie/day?language=en-US&api_key=").concat(u));case 2:return t=e.sent,n=t.data,console.log("data: ",n),console.log("data: ",n.results),e.abrupt("return",n.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s,"/search/movie?query=").concat(t,"&api_key=687e4525be1a45f56930e098a4988fd3"));case 2:return n=e.sent,r=n.data,console.log("data: ",r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s,"/movie/").concat(t,"?language=en-US&api_key=").concat(u));case 2:return n=e.sent,r=n.data,console.log("search (movieId):",r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s,"/movie/").concat(t,"/credits?language=en-US&api_key=").concat(u));case 2:return n=e.sent,r=n.data,console.log("getCast (data):",r),console.log("getCast (data.cast):",r.cast),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.1ff5826d.chunk.js.map