(this["webpackJsonpclustering-app"]=this["webpackJsonpclustering-app"]||[]).push([[0],{11:function(t,n,e){t.exports=e(18)},16:function(t,n,e){},17:function(t,n,e){},18:function(t,n,e){"use strict";e.r(n);var r=e(0),o=e.n(r),a=e(4),i=e.n(a),u=e(8),s=e(5),c=e(6),l=e(10),f=e(7),p=(e(16),e(9)),h=["lightgreen","pink","orange"];function m(t){var n=0,e=0;return t.forEach((function(t){n+=t[0],e+=t[1]})),[n/t.length,e/t.length]}function v(t,n){var e=n[0]-t[0],r=n[1]-t[1];return e*=e,r*=r,Math.sqrt(e+r)}function g(t){var n=[],e=t.slice();return function(t,n,e){for(var r=n.length,o=Array.from({length:t},(function(t){return 0})),a=Array.from({length:t},(function(t){return[]})),i=0;i<t;i++){for(var u=0;u<r;u++)u%t===i&&a[i].push(n[u]);o[i]=m(a[i])}for(var s=0;s<50;s++){for(var c=Array.from({length:t},(function(t){return[]})),l=function(e){var r=Array.from({length:t},(function(t,r){return v(n[e],o[r])})),a=r.indexOf(Math.min.apply(Math,Object(p.a)(r)));console.log(r,a),c[a].push(n[e])},f=0;f<r;f++)l(f);for(var g=Array.from({length:t},(function(t){return 0})),d=0;d<t;d++)g[d]=m(c[d])}var y=[];a.forEach((function(t,n){t.forEach((function(t){y.push(t),e.push(h[n])}))})),n=y}(2,e,n),[t=e,n]}var d=window.innerWidth,y=window.innerHeight;window.onresize=function(){d=window.innerWidth,y=window.innerHeight};function b(t,n){return Math.floor(Math.random()*(n-t+1)+t)}var E=function(t){Object(l.a)(e,t);var n=Object(f.a)(e);function e(t){var r;return Object(s.a)(this,e),(r=n.call(this,t)).state={points:[]},r}return Object(c.a)(e,[{key:"componentDidMount",value:function(){this.resetPoints()}},{key:"resetPoints",value:function(){for(var t=[],n=0;n<50;n++)t.push([b(2*d/5,d),b(2*y/5,y)]);for(var e=50;e<100;e++)t.push([b(0,3*d/5),b(0,3*y/5)]);this.setState({points:t});for(var r=document.getElementsByClassName("a-point"),o=0;o<r.length;o++){r[o].style.backgroundColor="turquoise"}}},{key:"KmeansClustering",value:function(){for(var t=g(this.state.points),n=Object(u.a)(t,2),e=(n[0],n[1]),r=document.getElementsByClassName("a-point"),o=0;o<e.length;o++){r[o].style.backgroundColor=e[o]}}},{key:"render",value:function(){var t=this,n=this.state.points;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"points-container"},n.map((function(t,n){return o.a.createElement("div",{className:"a-point",key:n,style:{backgroundColor:"turquoise",left:"".concat(t[0],"px"),bottom:"".concat(t[1],"px")}})}))),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{title:"Generates a new random points",style:{position:"relative",top:"".concat(0*(y-20)/5,"px")},onClick:function(){return t.resetPoints()}},"Generate New Points"),o.a.createElement("button",{title:"K-means Clustering",id:"KmeansBtn",style:{position:"relative",top:"".concat(.5*(y-20)/5,"px")},onClick:function(){return t.KmeansClustering()}},"K-means Clustering")))}}]),e}(o.a.Component);e(17);var w=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(E,null))};i.a.render(o.a.createElement(w,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.b6ca514c.chunk.js.map