(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){},16:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(2),i=t.n(o),c=(t(14),t(3)),l=t(4),s=t(6),m=t(5),u=t(7);t(16);function g(e){return r.a.createElement("header",{className:"inner-container"},r.a.createElement("h1",null,"Clicky Game"),r.a.createElement("div",null,e.message),r.a.createElement("div",null,r.a.createElement("div",null,"Current Score: ",e.currentScore),r.a.createElement("div",null,"Top Score: ",e.topScore)))}function d(e){return r.a.createElement("div",{className:"tile",onClick:function(){return e.handleTileClick(e.id)}},r.a.createElement("img",{alt:e.name,src:e.image}))}function f(e){return r.a.createElement("div",{className:"description"},r.a.createElement("h1",null,"HOW TO PLAY:"),r.a.createElement("p",null,"Click on any of the images below to start the game. Once you've begun, try and click as many images as you can without repeating yourself. If you click an image twice, you start over!"))}function p(e){e.forEach(function(e){return e.checked=!1})}var v=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(r)))).state={currentScore:0,topScore:0,message:"You've Guessed Correctly",tiles:[{id:0,name:"Robb",image:"images/Robb.jpeg"},{id:1,name:"Sansa",image:"images/Sansa.jpg"},{id:2,name:"Jon",image:"images/Jon.jpg"},{id:3,name:"Tyrion",image:"images/Tyrion.jpg"},{id:4,name:"Cersei",image:"images/Cersei.jpg"},{id:5,name:"Jamie",image:"images/Jamie.jpg"},{id:6,name:"Drogo",image:"images/Drogo.jpeg"},{id:7,name:"Khaleesi",image:"images/Khaleesi.jpg"},{id:8,name:"Ned Stark",image:"images/Ned.jpeg"},{id:9,name:"Night King",image:"images/King.jpg"},{id:10,name:"Grey Worm",image:"images/Worm.jpeg"},{id:11,name:"Theon Greyjoy",image:"images/Theon.png"}]},t.handleTileClick=function(e){t.state.tiles.forEach(function(n){if(n.id===e)if(!0===n.checked)t.setState({message:"Try Again!"}),t.state.currentScore>t.state.topscore?(t.setState({topscore:t.state.currentScore}),t.setState({currentScore:0}),p(t.state.tiles)):(t.setState({currentScore:0}),p(t.state.tiles));else{n.checked=!0,t.setState({currentScore:t.state.currentScore+1}),t.setState({message:"Well Done. Keep Going!"});var a=t.state.tiles.slice(0);a.sort(function(){return Math.random()-.5}),t.setState({tiles:a})}})},t}return Object(u.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(g,{currentScore:this.state.currentScore,topScore:this.state.topScore,message:this.state.message}),r.a.createElement(f,null),r.a.createElement("div",{className:"game-board"},this.state.tiles.map(function(n,t){return r.a.createElement(d,{key:t,id:n.id,handleTileClick:e.handleTileClick,char:n.name,image:n.image})})))}}]),n}(a.Component),h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(v,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/React-Memory-Game",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/React-Memory-Game","/service-worker.js");h?function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):w(e)})}}()},8:function(e,n,t){e.exports=t(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.89f8df9b.chunk.js.map