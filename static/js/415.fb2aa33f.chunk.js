"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{2661:function(e,t,n){n.d(t,{Z:function(){return s}});n(2791);var r,a=n(168),c=n(5867).zo.div(r||(r=(0,a.Z)(["\n  background-color: #ff6666; /* \u0427\u0435\u0440\u0432\u043e\u043d\u0438\u0439 \u0444\u043e\u043d */\n  color: #fff; /* \u0411\u0456\u043b\u0438\u0439 \u043a\u043e\u043b\u0456\u0440 \u0442\u0435\u043a\u0441\u0442\u0443 */\n  border: 2px solid #cc0000; /* \u0427\u0435\u0440\u0432\u043e\u043d\u0430 \u0440\u0430\u043c\u043a\u0430 */\n  padding: 10px;\n  font-weight: bold;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  font-size: 16px;\n  margin: 10px;\n"]))),o=n(184),s=function(e){var t=e.message;return(0,o.jsx)(c,{children:t})}},2494:function(e,t,n){n.d(t,{e:function(){return f},Z:function(){return d}});var r,a=n(168),c=(n(2791),n(1087)),o=n(7689),s=n(4205),u=n(5867),i=n(184),l=(0,u.ZP)(c.rU)(r||(r=(0,a.Z)(["\n  text-decoration: none;\n"]))),p=function(e){var t=e.id,n=e.poster_path,r=e.title,a=(0,o.TH)();return(0,i.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6 col-12",children:(0,i.jsxs)("div",{className:"card h-100",children:[(0,i.jsx)(c.rU,{to:"/movies/".concat(t),state:{from:a},children:(0,i.jsx)("img",{src:n?"".concat("https://image.tmdb.org/t/p/w500").concat(n):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",className:"card-img-top",alt:r})}),(0,i.jsx)("div",{className:"card-body",children:(0,i.jsx)(l,{to:"/movies/".concat(t),state:{from:a},children:(0,i.jsx)(s.Gn,{className:"card-title",children:r})})})]})})},f=function(e){var t=e.movies,n=Array.isArray(t)&&t.length;return(0,i.jsx)("div",{className:"row g-4",children:n&&t.map((function(e){return(0,i.jsx)(p,{id:e.id,poster_path:e.poster_path,title:e.title},e.id)}))})},d=f},5415:function(e,t,n){n.r(t);var r=n(5861),a=n(9439),c=n(7757),o=n.n(c),s=n(2791),u=n(1835),i=n(2494),l=n(2661),p=n(4205),f=n(4390),d=n(184);t.default=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],v=(0,s.useState)(!1),g=(0,a.Z)(v,2),h=g[0],m=g[1],x=(0,s.useState)(null),w=(0,a.Z)(x,2),Z=w[0],b=w[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,f.Df)();case 4:t=e.sent,c(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),b(e.t0.message);case 11:return e.prev=11,m(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,d.jsxs)(p.im,{children:[h&&(0,d.jsx)(u.a,{}),Z&&(0,d.jsx)(l.Z,{message:Z}),(0,d.jsx)(p.Dx,{children:"Trend of day"}),(0,d.jsx)("div",{className:"row g-4",children:(0,d.jsx)(i.Z,{movies:n})})]})}},4390:function(e,t,n){n.d(t,{C3:function(){return l},Df:function(){return i},IQ:function(){return f},Jh:function(){return d},fh:function(){return p}});var r=n(5861),a=n(7757),c=n.n(a),o=n(1243),s="https://api.themoviedb.org/3",u="687e4525be1a45f56930e098a4988fd3",i=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s,"/trending/movie/day?language=en-US&api_key=").concat(u));case 2:return t=e.sent,n=t.data,console.log("data: ",n),console.log("data: ",n.results),e.abrupt("return",n.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s,"/search/movie?query=").concat(t,"&api_key=687e4525be1a45f56930e098a4988fd3"));case 2:return n=e.sent,r=n.data,console.log("data: ",r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s,"/movie/").concat(t,"?language=en-US&api_key=").concat(u));case 2:return n=e.sent,r=n.data,console.log("search (movieId):",r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s,"/movie/").concat(t,"/credits?language=en-US&api_key=").concat(u));case 2:return n=e.sent,r=n.data,console.log("getCast (data):",r),console.log("getCast (data.cast):",r.cast),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s,"/movie/").concat(t,"/reviews?language=en-US&api_key=").concat(u));case 2:return n=e.sent,r=n.data,console.log("getReviews (data):",r),console.log("getReviews (data.results):",r.results),e.abrupt("return",r.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.fb2aa33f.chunk.js.map