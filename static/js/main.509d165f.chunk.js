(this["webpackJsonpclustering-app"]=this["webpackJsonpclustering-app"]||[]).push([[0],{11:function(n,t,e){n.exports=e(18)},16:function(n,t,e){},17:function(n,t,e){},18:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),a=e(4),i=e.n(a),u=e(8),s=e(5),c=e(6),l=e(10),f=e(7),p=(e(16),e(9)),h=["lightgreen","pink","orange"];function m(n){var t=0,e=0;return n.forEach((function(n){t+=n[0],e+=n[1]})),[t/n.length,e/n.length]}function v(n,t){var e=t[0]-n[0],r=t[1]-n[1];return e*=e,r*=r,Math.sqrt(e+r)}function g(n){var t=[],e=n.slice();return function(n,t,e){for(var r=t.length,o=Array.from({length:n},(function(n){return 0})),a=Array.from({length:n},(function(n){return[]})),i=0;i<n;i++){for(var u=0;u<r;u++)u%n===i&&a[i].push(t[u]);o[i]=m(a[i])}console.log(o);for(var s=0;s<50;s++){for(var c=Array.from({length:n},(function(n){return[]})),l=function(e){var r=Array.from({length:n},(function(n,r){return v(t[e],o[r])})),a=r.indexOf(Math.min.apply(Math,Object(p.a)(r)));console.log(r,a),c[a].push(t[e])},f=0;f<r;f++)l(f);for(var g=Array.from({length:n},(function(n){return 0})),d=0;d<n;d++)g[d]=m(c[d])}var y=[];a.forEach((function(n,t){n.forEach((function(n){y.push(n),e.push(h[t])}))})),t=y}(2,e,t),[n=e,t]}var d=window.innerWidth,y=window.innerHeight;window.onresize=function(){d=window.innerWidth,y=window.innerHeight};function b(n,t){return Math.floor(Math.random()*(t-n+1)+n)}var E=function(n){Object(l.a)(e,n);var t=Object(f.a)(e);function e(n){var r;return Object(s.a)(this,e),(r=t.call(this,n)).state={points:[]},r}return Object(c.a)(e,[{key:"componentDidMount",value:function(){this.resetPoints()}},{key:"resetPoints",value:function(){for(var n=[],t=0;t<50;t++)n.push([b(2*d/5,d),b(2*y/5,y)]);for(var e=50;e<100;e++)n.push([b(0,3*d/5),b(0,3*y/5)]);this.setState({points:n});for(var r=document.getElementsByClassName("a-point"),o=0;o<r.length;o++){r[o].style.backgroundColor="turquoise"}}},{key:"KmeansClustering",value:function(){for(var n=g(this.state.points),t=Object(u.a)(n,2),e=(t[0],t[1]),r=document.getElementsByClassName("a-point"),o=0;o<e.length;o++){r[o].style.backgroundColor=e[o]}}},{key:"render",value:function(){var n=this,t=this.state.points;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"points-container"},t.map((function(n,t){return o.a.createElement("div",{className:"a-point",key:t,style:{backgroundColor:"turquoise",left:"".concat(n[0],"px"),bottom:"".concat(n[1],"px")}})}))),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{title:"Generates a new random points",style:{position:"relative",top:"".concat(0*(y-20)/5,"px")},onClick:function(){return n.resetPoints()}},"Generate New Points"),o.a.createElement("button",{title:"K-means Clustering",id:"KmeansBtn",style:{position:"relative",top:"".concat(.5*(y-20)/5,"px")},onClick:function(){return n.KmeansClustering()}},"K-means Clustering")))}}]),e}(o.a.Component);e(17);var w=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(E,null))};i.a.render(o.a.createElement(w,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.509d165f.chunk.js.map