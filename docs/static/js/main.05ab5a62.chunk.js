(this["webpackJsonpcontact-processes-app"]=this["webpackJsonpcontact-processes-app"]||[]).push([[0],{17:function(t,e,n){},29:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n(0),i=n.n(a),s=n(21),o=n.n(s),c=(n(29),n(6)),l=n(7),h=n(9),d=n(8),u=n(3),f=(n(17),n(11)),x=n(4);var j=function(t,e){t=t||1;var n=e;return"function"===typeof e&&(n=e()),n||(n=Math.random()),-Math.log(n)/t},p=n(15),b=n(10),w=n.n(b),g=n(5);function y(){var t=Object(u.a)(["\n  position: absolute;\n  width: 100%;\n  height: ","px;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: opacity 0.2s;\n"]);return y=function(){return t},t}function v(){var t=Object(u.a)(["\n  flex: 1;\n  \n  circle {\n    transition: fill 0.2s;\n  }\n"]);return v=function(){return t},t}function m(){var t=Object(u.a)(["\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: stretch;\n  font-size: calc(10px + 2vmin);\n  color: white;\n"]);return m=function(){return t},t}var O=x.a.div(m()),k=200,C=x.a.svg(v()),L=x.a.div(y(),k),R=function(t,e,n){for(var r=t.filter((function(t){return t>=n}));0===r.length||r[r.length-1]<1+n;)r.push(j(e)+(0===r.length?n:r[r.length-1]));return r},S=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={t:0,pause:!0,showControls:!1,lambda:2,points:[{infected:!0,arrowsLeft:[],arrowsRight:[],deltas:[]},{infected:!0,arrowsLeft:[],arrowsRight:[],deltas:[]},{infected:!0,arrowsLeft:[],arrowsRight:[],deltas:[]},{infected:!0,arrowsLeft:[],arrowsRight:[],deltas:[]},{infected:!0,arrowsLeft:[],arrowsRight:[],deltas:[]},{infected:!0,arrowsLeft:[],arrowsRight:[],deltas:[]},{infected:!0,arrowsLeft:[],arrowsRight:[],deltas:[]},{infected:!0,arrowsLeft:[],arrowsRight:[],deltas:[]},{infected:!0,arrowsLeft:[],arrowsRight:[],deltas:[]},{infected:!0,arrowsLeft:[],arrowsRight:[],deltas:[]},{infected:!0,arrowsLeft:[],arrowsRight:[],deltas:[]},{infected:!0,arrowsLeft:[],arrowsRight:[],deltas:[]},{infected:!0,arrowsLeft:[],arrowsRight:[],deltas:[]},{infected:!0,arrowsLeft:[],arrowsRight:[],deltas:[]},{infected:!0,arrowsLeft:[],arrowsRight:[],deltas:[]},{infected:!0,arrowsLeft:[],arrowsRight:[],deltas:[]}]},t.play=function(){return t.setState({pause:!1})},t.pause=function(){return t.setState({pause:!0})},t.update=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t.setState((function(t){var n=t.points,r=t.t,a=t.lambda,i=t.pause,s=r+(e&&!i?.0025:0),o=n.map((function(t,e){var i=t.infected;return t.infected&&t.deltas.length>0&&t.deltas[0]>=r&&t.deltas[0]<s?i=!1:(e>0&&n[e-1].infected&&n[e-1].arrowsRight.length>0&&n[e-1].arrowsRight[0]>=r&&n[e-1].arrowsRight[0]<s||e<n.length-1&&n[e+1].infected&&n[e+1].arrowsLeft.length>0&&n[e+1].arrowsLeft[0]>=r&&n[e+1].arrowsLeft[0]<s)&&(i=!0),{infected:i,arrowsLeft:R(t.arrowsLeft,a,s),arrowsRight:R(t.arrowsRight,a,s),deltas:R(t.deltas,1,s)}}));return{t:s,points:o}}))},t.lambdaChange=function(e){var n=e.x;t.setState((function(t){return{lambda:n}}))},t.refresh=function(){t.setState((function(t){return{points:t.points.map((function(t){return Object(f.a)(Object(f.a)({},t),{},{infected:!0,arrowsLeft:[],arrowsRight:[],deltas:[]})}))}}),(function(){return t.update(!1)}))},t.lambdaChangeEnded=function(){false},t.showControls=function(e){return t.setState({showControls:!0})},t.hideControls=function(e){t.setState({showControls:!1}),e.preventDefault(),e.stopPropagation()},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.update,25)}},{key:"render",value:function(){var t=this.state,e=t.points,n=t.t,a=t.lambda,i=t.pause,s=t.showControls;return Object(r.jsxs)(O,{children:[Object(r.jsxs)(C,{viewBox:"0 0 1920 1080",children:[Object(r.jsx)("defs",{children:Object(r.jsx)("marker",{id:"head",orient:"auto",markerWidth:"2",markerHeight:"4",refX:"0.1",refY:"2",children:Object(r.jsx)("path",{d:"M0,0 V4 L2,2 Z",fill:"gray"})})}),Object(r.jsx)("line",{x1:0,y1:880,x2:1920,y2:880,stroke:"white",strokeWidth:"2"}),this.state.points.map((function(t,a){var i=2020/(e.length-1),s=a*i-50;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("line",{x1:s,y1:880,x2:s,y2:0,stroke:"gray",strokeWidth:1}),Object(r.jsx)("circle",{r:10,cx:s,cy:880,stroke:"white",fill:t.infected?"white":"var(--back-col)"}),t.arrowsLeft.map((function(t){return Object(r.jsx)("path",{markerEnd:"url(#head)",strokeWidth:4,stroke:"gray",d:"M ".concat(s-15,", ").concat(880-(t-n)/1*1080," h ").concat(35-i)})})),"}",t.arrowsRight.map((function(t){return Object(r.jsx)("path",{markerEnd:"url(#head)",strokeWidth:4,stroke:"gray",d:"M ".concat(s+15,", ").concat(880-(t-n)/1*1080," h ").concat(i-35)})})),"}",t.deltas.map((function(t){return Object(r.jsx)("text",{x:s-8,y:880-(t-n)/1*1080+8,fill:"white",children:"\u03b4"})}))]})}))]}),Object(r.jsxs)(L,{style:{opacity:s?1:0},onClick:this.showControls,children:[Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(r.jsx)(w.a,{children:"$\\lambda=".concat(a.toFixed(1),"$")}),Object(r.jsx)(p.a,{axis:"x",x:a,xstep:.1,xmin:.1,xmax:10,onChange:this.lambdaChange,onDragEnd:this.lambdaChangeEnded})]}),i?Object(r.jsx)(g.c,{style:{padding:"10px",margin:"10px"},stroke:"white",onClick:this.play}):Object(r.jsx)(g.b,{style:{padding:"10px",margin:"10px"},stroke:"white",onClick:this.pause}),Object(r.jsx)(g.d,{style:{padding:"10px",margin:"10px"},stroke:"white",onClick:this.refresh}),Object(r.jsx)(g.a,{style:{padding:"10px",margin:"10px"},stroke:"white",onClick:this.hideControls})]})]})}}]),n}(i.a.Component);function M(){var t=Object(u.a)(["\n  position: absolute;\n  width: 100%;\n  height: ","px;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: opacity 0.2s;\n"]);return M=function(){return t},t}function A(){var t=Object(u.a)(["\n  flex: 1;\n\n  circle {\n    transition: fill 0.2s;\n  }\n\n  line {\n    transition: stroke 0.2s;\n  }\n"]);return A=function(){return t},t}function F(){var t=Object(u.a)(["\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: stretch;\n  font-size: calc(10px + 2vmin);\n  color: white;\n"]);return F=function(){return t},t}for(var W=x.a.div(F()),D=30,E=0,B=0;B<9;B++)E+=Math.pow(6,B);var I=new Array(E),$=252.5,P=200,z=x.a.svg(A()),J=x.a.div(M(),P),T=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={t:0,pause:!0,showControls:!1,lambda:.2,infected:I},t.play=function(){return t.setState({pause:!1})},t.pause=function(){return t.setState({pause:!0})},t.updateBehavior=function(t){for(var e=t.infected,n=t.t,r=t.lambda,a=r/D,i=0;i<E;i++)if(1===e[i]&&(Math.random()<.03333333333333333&&(e[i]=0),i>0&&Math.random()<a&&(e[Math.floor((i-1)/6)]=1),6*i<=E))for(var s=1;s<=6;s++)Math.random()<a&&(e[6*i+s]=1);return{infected:e,t:n+1/D}},t.update=function(){t.state.pause||t.setState(t.updateBehavior)},t.lambdaChange=function(e){var n=e.x;t.setState((function(t){return{lambda:n}}))},t.refresh=function(){for(var e=0;e<E;e++)I[e]=1;for(var n=0;n<7;n++)I[n]=1;for(var r=7;r<E;r++)I[r]=0;t.setState({infected:I,t:0})},t.showControls=function(e){return t.setState({showControls:!0})},t.hideControls=function(e){t.setState({showControls:!1}),e.preventDefault(),e.stopPropagation()},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.interval=setInterval((function(){return window.requestAnimationFrame(t.update)}),33.333333333333336),this.refresh()}},{key:"renderLayer",value:function(t,e){for(var n=Math.pow(6,e),a=new Array(n),i=780/(n-1),s=50,o=0;o<n;o++)a[o]=Object(r.jsx)("line",{x1:50+e*$,x2:50+e*$,y1:s,y2:s+i,stroke:t[n+o]?"white":"var(--back-col)",strokeWidth:10}),s+=i;return a}},{key:"renderLayerAcc",value:function(t){for(var e=Math.pow(6,3),n=new Array(e+2),a=780/(e-1),i=Math.pow(6,t-3),s=50,o=0,c=0,l=0;l<t;l++)o+=Math.pow(6,l);for(var h=0;h<e;h++){for(var d=0,u=0;u<i;u++)d+=I[o],o++;c+=d,n[h]=Object(r.jsx)("line",{x1:50+t*$,x2:50+t*$,y1:s,y2:s+a,stroke:d>0?"white":"var(--back-col)",strokeWidth:10}),s+=a}return n[e]=Object(r.jsx)("rect",{x:50+t*$-5,y:50,width:10,height:780,fill:"transparent",stroke:"white"}),n[e+1]=Object(r.jsx)("text",{x:50+t*$,textAnchor:"middle",y:865,fill:"white",children:c}),n}},{key:"renderAccLayers",value:function(){for(var t=[],e=3;e<9;e++)t.push(this.renderLayerAcc(e));return t}},{key:"renderLayer1",value:function(){for(var t=new Array(6),e=1;e<=6;e++)t[e]=Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("circle",{r:10,cx:302.5,cy:50+156*(e-1),stroke:"white",fill:I[e]?"white":"var(--back-col)"}),Object(r.jsx)("line",{x1:65,y1:440,x2:287.5,y2:50+156*(e-1),stroke:"gray",strokeWidth:"2"})]});return t}},{key:"renderLayer2",value:function(){for(var t=new Array(36),e=1;e<=6;e++)for(var n=1;n<=6;n++)t[6*(e-1)+n-1]=Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("circle",{r:5,cx:555,cy:50+780/35*(6*(e-1)+n-1),stroke:"white",fill:I[6*e+n]?"white":"var(--back-col)"}),Object(r.jsx)("line",{x1:317.5,y1:50+156*(e-1),x2:545,y2:50+780/35*(6*(e-1)+n-1),stroke:"gray",strokeWidth:"2"})]});return t}},{key:"render",value:function(){var t=this.state,e=t.t,n=t.lambda,a=t.pause,i=t.showControls,s=t.infected;return Object(r.jsxs)(W,{children:[Object(r.jsxs)(z,{viewBox:"0 0 1920 1080",children:[Object(r.jsx)("line",{x1:0,y1:880,x2:1920,y2:880,stroke:"white",strokeWidth:"2"}),Object(r.jsx)("circle",{r:10,cx:50,cy:440,stroke:"white",fill:s[0]?"white":"var(--back-col)"}),this.renderLayer1(),this.renderLayer2(),"}",this.renderAccLayers(s).flat()]}),Object(r.jsxs)(J,{style:{opacity:i?1:0},onClick:this.showControls,children:[Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(r.jsx)(w.a,{children:"$\\lambda=".concat(n.toFixed(2),"$")}),Object(r.jsx)(p.a,{axis:"x",x:n,xstep:.01,xmin:.01,xmax:1,onChange:this.lambdaChange,onDragEnd:this.lambdaChangeEnded})]}),a?Object(r.jsx)(g.c,{style:{padding:"10px",margin:"10px"},stroke:"white",onClick:this.play}):Object(r.jsx)(g.b,{style:{padding:"10px",margin:"10px"},stroke:"white",onClick:this.pause}),Object(r.jsx)(g.d,{style:{padding:"10px",margin:"10px"},stroke:"white",onClick:this.refresh}),Object(r.jsx)(g.a,{style:{padding:"10px",margin:"10px"},stroke:"white",onClick:this.hideControls}),Object(r.jsx)(w.a,{children:"$t=".concat(e.toFixed(1),"$")})]})]})}}]),n}(i.a.Component);function q(){var t=Object(u.a)(["\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  > button {\n    width: 200px;\n    padding: 10px;\n    margin: 10px;\n  }\n  font-size: calc(10px + 2vmin);\n  color: white;\n"]);return q=function(){return t},t}var H=x.a.div(q()),N=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={status:"menu"},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(r.jsxs)("div",{className:"App",children:["tree"===this.state.status&&Object(r.jsx)(T,{}),"integers"===this.state.status&&Object(r.jsx)(S,{}),"menu"===this.state.status&&Object(r.jsxs)(H,{children:[Object(r.jsx)("button",{onClick:function(){return t.setState({status:"integers"})},children:"Simulate on integers!"}),Object(r.jsx)("button",{onClick:function(){return t.setState({status:"tree"})},children:"Simulate on tree!"})]})]})}}]),n}(i.a.Component),V=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),r(t),a(t),i(t),s(t)}))};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root")),V()}},[[40,1,2]]]);
//# sourceMappingURL=main.05ab5a62.chunk.js.map