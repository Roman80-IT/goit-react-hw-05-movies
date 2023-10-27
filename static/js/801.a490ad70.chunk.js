"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[801],{2661:function(n,e,t){t.d(e,{Z:function(){return u}});t(2791);var r,a=t(168),o=t(5867).zo.div(r||(r=(0,a.Z)(["\n  background-color: #ff6666; /* \u0427\u0435\u0440\u0432\u043e\u043d\u0438\u0439 \u0444\u043e\u043d */\n  color: #fff; /* \u0411\u0456\u043b\u0438\u0439 \u043a\u043e\u043b\u0456\u0440 \u0442\u0435\u043a\u0441\u0442\u0443 */\n  border: 2px solid #cc0000; /* \u0427\u0435\u0440\u0432\u043e\u043d\u0430 \u0440\u0430\u043c\u043a\u0430 */\n  padding: 10px;\n  font-weight: bold;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  font-size: 16px;\n  margin: 10px;\n"]))),c=t(184),u=function(n){var e=n.message;return(0,c.jsx)(o,{children:e})}},9801:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,o,c=t(5861),u=t(9439),s=t(7757),i=t.n(s),p=t(2791),f=t(7689),l=t(4205),d=t(168),h=t(5867),v=h.zo.li(r||(r=(0,d.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 36px;\n  }\n\n  padding: 8px;\n\n  box-shadow: rgba(166, 112, 0, 0.2) 0px 0px 5px 0px,\n    rgba(166, 112, 0, 0.4) 0px 0px 1px 0px;\n"]))),x=h.zo.p(a||(a=(0,d.Z)(["\n  margin-bottom: 16px;\n\n  font-size: 20px;\n  font-weight: 600;\n"]))),g=h.zo.span(o||(o=(0,d.Z)(["\n  color: #132b55;\n"]))),m=t(184),w=function(n){var e=n.author,t=n.content;return(0,m.jsxs)(v,{children:[(0,m.jsxs)(x,{children:["Author: ",(0,m.jsx)(g,{children:e})]}),(0,m.jsx)("p",{children:t})]})},b=t(4390),Z=t(1835),k=t(2661),y=function(){var n=(0,f.UO)().movieId,e=(0,p.useState)([]),t=(0,u.Z)(e,2),r=t[0],a=t[1],o=(0,p.useState)(!1),s=(0,u.Z)(o,2),d=s[0],h=s[1],v=(0,p.useState)(null),x=(0,u.Z)(v,2),g=x[0],y=x[1],j=function(){window.scrollTo({top:500,behavior:"smooth"})};return(0,p.useEffect)((function(){function e(){return(e=(0,c.Z)(i().mark((function e(){var t,r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,(0,b.Jh)(n);case 4:t=e.sent,a(t),j(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),o=(null===(r=e.t0.response)||void 0===r?void 0:r.data.message)||"An error occurred while fetching reviews.",y(o);case 13:return e.prev=13,h(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),(0,m.jsxs)(l.im,{children:[d&&(0,m.jsx)(Z.a,{}),g&&(0,m.jsx)(k.Z,{message:g}),0===r.length?(0,m.jsx)("p",{children:"We don't have any reviews for this movie"}):(0,m.jsx)("ul",{children:r.map((function(n){var e=n.author,t=n.content,r=n.id;return(0,m.jsx)(w,{author:e,content:t},r)}))})]})}},4390:function(n,e,t){t.d(e,{C3:function(){return p},Df:function(){return i},IQ:function(){return l},Jh:function(){return d},fh:function(){return f}});var r=t(5861),a=t(7757),o=t.n(a),c=t(1243),u="https://api.themoviedb.org/3",s="687e4525be1a45f56930e098a4988fd3",i=function(){var n=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/trending/movie/day?language=en-US&api_key=").concat(s));case 2:return e=n.sent,t=e.data,console.log("data: ",t),console.log("data: ",t.results),n.abrupt("return",t.results);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/search/movie?query=").concat(e,"&api_key=687e4525be1a45f56930e098a4988fd3"));case 2:return t=n.sent,r=t.data,console.log("data: ",r),n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/movie/").concat(e,"?language=en-US&api_key=").concat(s));case 2:return t=n.sent,r=t.data,console.log("search (movieId):",r),n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/movie/").concat(e,"/credits?language=en-US&api_key=").concat(s));case 2:return t=n.sent,r=t.data,console.log("getCast (data):",r),console.log("getCast (data.cast):",r.cast),n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/movie/").concat(e,"/reviews?language=en-US&api_key=").concat(s));case 2:return t=n.sent,r=t.data,console.log("getReviews (data):",r),console.log("getReviews (data.results):",r.results),n.abrupt("return",r.results);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=801.a490ad70.chunk.js.map