"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[158],{494:function(n,e,t){t.d(e,{e:function(){return c},Z:function(){return i}});var r=t(87),o=t(184),a=function(n){var e=n.id,t=n.poster_path,a=n.title;return(0,o.jsx)("div",{children:(0,o.jsxs)(r.rU,{to:"/movies/".concat(e),children:[(0,o.jsx)("img",{src:t?"".concat("https://image.tmdb.org/t/p/w500").concat(t):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:a}),(0,o.jsx)("h2",{children:a})]})})},c=function(n){var e=n.movies;console.log("movies in MovieList: ",e);var t=Array.isArray(e)&&e.length;return(0,o.jsx)("div",{children:t&&e.map((function(n){return(0,o.jsx)("div",{children:(0,o.jsx)(a,{id:n.id,poster_path:n.poster_path,title:n.title},n.id)})}))})},i=c},158:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,o,a,c,i=t(861),s=t(439),u=t(757),l=t.n(u),p=t(791),d=t(87),f=t(390),h=t(835),v=t(494),m=t(168),g=t(867),x=t(719),b=g.zo.form(r||(r=(0,m.Z)(["\n  position: relative;\n\n  margin-bottom: 40px;\n"]))),y=g.zo.input(o||(o=(0,m.Z)(["\n  height: 36px;\n  width: 100%;\n\n  padding-left: 36px;\n\n  border-radius: 8px;\n  border-color: #132b55;\n  border-style: solid;\n"]))),w=g.zo.button(a||(a=(0,m.Z)(["\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n\n  background-color: transparent;\n  border: none;\n\n  cursor: pointer;\n"]))),k=(0,g.zo)(x.wTD)(c||(c=(0,m.Z)(["\n  display: block;\n\n  color: #132b55;\n\n  &:hover,\n  &:focus {\n    color: #a67000;\n  }\n"]))),j=t(184),Z=function(){var n,e,t=(0,d.lr)(),r=(0,s.Z)(t,2),o=r[0],a=r[1],c=(0,p.useState)([]),u=(0,s.Z)(c,2),m=u[0],g=u[1],x=(0,p.useState)(!1),Z=(0,s.Z)(x,2),_=Z[0],S=Z[1],q=o.get("query");return(0,p.useEffect)((function(){function n(){return(n=(0,i.Z)(l().mark((function n(){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,S(!0),n.next=4,(0,f.C3)(q);case 4:e=n.sent,g(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),"ERR_CANCELED"!==n.t0.code&&console.error("Something went wrong. Try again");case 11:return n.prev=11,S(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}q?function(){n.apply(this,arguments)}():g([])}),[q,a]),(0,j.jsxs)("div",{children:[(0,j.jsxs)(b,{role:"search",onSubmit:function(n){n.preventDefault();var e=n.currentTarget;a({query:e.elements.query.value}),e.reset()},children:[(0,j.jsx)(y,{type:"search",placeholder:"Search","aria-label":"Search",name:"query"}),(0,j.jsx)(w,{type:"submit",children:(0,j.jsx)(k,{size:"28"})})]}),_&&(0,j.jsx)(h.a,{}),0===(null===(n=m.results)||void 0===n?void 0:n.length)&&q&&(0,j.jsxs)("p",{children:["Sorry. We can't find movies matching your query \"",q,'".']}),0!==(null===(e=m.results)||void 0===e?void 0:e.length)&&(0,j.jsx)(v.e,{movies:m.results})]})}},390:function(n,e,t){t.d(e,{C3:function(){return l},Df:function(){return u},fh:function(){return p}});var r=t(861),o=t(757),a=t.n(o),c=t(243),i="https://api.themoviedb.org/3",s="687e4525be1a45f56930e098a4988fd3",u=function(){var n=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"/trending/movie/day?language=en-US&api_key=").concat(s));case 2:return e=n.sent,t=e.data,console.log("data: ",t),n.abrupt("return",t.results);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"/search/movie?query=").concat(e,"&api_key=687e4525be1a45f56930e098a4988fd3"));case 2:return t=n.sent,r=t.data,console.log("data: ",r),n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"/movie/").concat(e,"?language=en-US&api_key=").concat(s));case 2:return t=n.sent,r=t.data,console.log("search (movieId):",r),console.log("search (movieId):",r.belongs_to_collection),n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=158.628073bf.chunk.js.map