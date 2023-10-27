"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[158],{2494:function(e,n,t){t.d(n,{e:function(){return s},Z:function(){return u}});var r=t(1087),a=t(4205),o=t(184),c=function(e){var n=e.id,t=e.poster_path,c=e.title;return(0,o.jsx)("div",{children:(0,o.jsxs)(r.rU,{to:"/movies/".concat(n),children:[(0,o.jsx)("img",{src:t?"".concat("https://image.tmdb.org/t/p/w500").concat(t):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:c}),(0,o.jsx)(a.Dx,{children:c})]})})},s=function(e){var n=e.movies,t=Array.isArray(n)&&n.length;return(0,o.jsx)("div",{children:t&&n.map((function(e){return(0,o.jsx)("div",{children:(0,o.jsx)(c,{id:e.id,poster_path:e.poster_path,title:e.title},e.id)})}))})},u=s},7158:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r,a,o,c,s=t(5861),u=t(9439),i=t(7757),l=t.n(i),p=t(2791),d=t(1087),f=t(4390),h=t(1835),v=t(2494),g=t(168),m=t(5867),x=t(719),y=m.zo.form(r||(r=(0,g.Z)(["\n  position: relative;\n\n  margin-bottom: 40px;\n"]))),b=m.zo.input(a||(a=(0,g.Z)(["\n  height: 36px;\n  width: 100%;\n\n  padding-left: 36px;\n\n  border-radius: 8px;\n  border-color: #132b55;\n  border-style: solid;\n"]))),w=m.zo.button(o||(o=(0,g.Z)(["\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n\n  background-color: transparent;\n  border: none;\n\n  cursor: pointer;\n"]))),k=(0,m.zo)(x.wTD)(c||(c=(0,g.Z)(["\n  display: block;\n\n  color: #132b55;\n\n  &:hover,\n  &:focus {\n    color: #a67000;\n  }\n"]))),Z=t(184),j=function(){var e,n,t=(0,d.lr)(),r=(0,u.Z)(t,2),a=r[0],o=r[1],c=(0,p.useState)([]),i=(0,u.Z)(c,2),g=i[0],m=i[1],x=(0,p.useState)(!1),j=(0,u.Z)(x,2),_=j[0],S=j[1],C=a.get("query");return(0,p.useEffect)((function(){function e(){return(e=(0,s.Z)(l().mark((function e(){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S(!0),e.next=4,(0,f.C3)(C);case 4:n=e.sent,m(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code&&console.error("Something went wrong. Try again");case 11:return e.prev=11,S(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}C?function(){e.apply(this,arguments)}():m([])}),[C,o]),(0,Z.jsxs)("div",{children:[(0,Z.jsxs)(y,{role:"search",onSubmit:function(e){e.preventDefault();var n=e.currentTarget;o({query:n.elements.query.value}),n.reset()},children:[(0,Z.jsx)(b,{type:"search",placeholder:"Search","aria-label":"Search",name:"query"}),(0,Z.jsx)(w,{type:"submit",children:(0,Z.jsx)(k,{size:"28"})})]}),_&&(0,Z.jsx)(h.a,{}),0===(null===(e=g.results)||void 0===e?void 0:e.length)&&C&&(0,Z.jsxs)("p",{children:["Sorry. We can't find movies matching your query \"",C,'".']}),0!==(null===(n=g.results)||void 0===n?void 0:n.length)&&(0,Z.jsx)(v.e,{movies:g.results})]})}},4390:function(e,n,t){t.d(n,{C3:function(){return l},Df:function(){return i},IQ:function(){return d},Jh:function(){return f},fh:function(){return p}});var r=t(5861),a=t(7757),o=t.n(a),c=t(1243),s="https://api.themoviedb.org/3",u="687e4525be1a45f56930e098a4988fd3",i=function(){var e=(0,r.Z)(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"/trending/movie/day?language=en-US&api_key=").concat(u));case 2:return n=e.sent,t=n.data,console.log("data: ",t),console.log("data: ",t.results),e.abrupt("return",t.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"/search/movie?query=").concat(n,"&api_key=687e4525be1a45f56930e098a4988fd3"));case 2:return t=e.sent,r=t.data,console.log("data: ",r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"/movie/").concat(n,"?language=en-US&api_key=").concat(u));case 2:return t=e.sent,r=t.data,console.log("search (movieId):",r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"/movie/").concat(n,"/credits?language=en-US&api_key=").concat(u));case 2:return t=e.sent,r=t.data,console.log("getCast (data):",r),console.log("getCast (data.cast):",r.cast),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"/movie/").concat(n,"/reviews?language=en-US&api_key=").concat(u));case 2:return t=e.sent,r=t.data,console.log("getReviews (data):",r),console.log("getReviews (data.results):",r.results),e.abrupt("return",r.results);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=158.dd7ff550.chunk.js.map