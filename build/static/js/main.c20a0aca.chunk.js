(window.webpackJsonpwebprosjekt2=window.webpackJsonpwebprosjekt2||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),o=a(3),r=a.n(o),i=(a(9),a(1));function l(e){function t(t){console.log(e.active),e.changeActiveArt(t.target.name,t.target.value)}return n.a.createElement("form",null,n.a.createElement("h1",null,e.category),e.choices.map((function(a,c){return n.a.createElement("div",{key:c,className:"radio"},n.a.createElement("label",{className:"pointer"},n.a.createElement("input",{type:"radio",name:e.category,value:a,checked:e.active.includes(a),onChange:t,className:"pointer"}),a,n.a.createElement("span",{className:"checkmark"})))})))}function s(e){function t(t){e.changeActiveTab(t.target.name)}return n.a.createElement("div",{className:"tab flex-container-tab"},n.a.createElement("button",{className:"0"===e.active?"active tab":"tab",name:"0",onClick:t},"Art 1"),n.a.createElement("button",{className:"1"===e.active?"active tab":"tab",name:"1",onClick:t},"Art 2"),n.a.createElement("button",{className:"2"===e.active?"active tab":"tab",name:"2",onClick:t},"Art 3"),n.a.createElement("button",{className:"3"===e.active?"active tab":"tab",name:"3",onClick:t},"Art 4"))}function m(e){return n.a.createElement("div",{className:"card"},n.a.createElement("div",null,n.a.createElement(s,{changeActiveTab:e.changeActiveTab,active:e.activeTab})),n.a.createElement("div",{className:"grid-container-art"},n.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.image},className:"grid-item-image"}),n.a.createElement("div",{className:"grid-item-text"},null!==e.text&&e.text.split("\n").map((function(e,t){return n.a.createElement("p",{key:t},e)}))),n.a.createElement("div",{className:"grid-item-audio"},n.a.createElement("audio",{src:e.audio,type:"audio/mp3",controls:!0}))))}var u=[{category:"audio",choices:["acoustic","cinematic","rock"]},{category:"image",choices:["butterfly","flower","planet"]},{category:"text",choices:["lyric","poem","quote"]}];r.a.render(n.a.createElement((function(){var e=Object(c.useState)("acoustic"),t=Object(i.a)(e,2),a=t[0],o=t[1],r=Object(c.useState)("butterfly"),s=Object(i.a)(r,2),g=s[0],v=s[1],f=Object(c.useState)("lyric"),b=Object(i.a)(f,2),d=b[0],E=b[1],p=Object(c.useState)("0"),S=Object(i.a)(p,2),h=S[0],N=S[1],j=Object(c.useState)(null),O=Object(i.a)(j,2),k=O[0],y=O[1],I=Object(c.useState)(null),A=Object(i.a)(I,2),x=A[0],T=A[1],w=Object(c.useState)(null),J=Object(i.a)(w,2),C=J[0],B=J[1];function F(e,t){switch(e){case"audio":o(t);break;case"image":v(t);break;case"text":E(t)}}return Object(c.useEffect)((function(){y(null);var e="/prosjekt2/content/text/"+d+".json",t=sessionStorage.getItem(e);t?y(JSON.parse(t).items[h]):fetch(e).then((function(e){return e.json()})).then((function(t){y(t.items[h]),sessionStorage.setItem(e,JSON.stringify(t))}))}),[d,h]),Object(c.useEffect)((function(){B(null);var e="/prosjekt2"+"/content/audio/".concat(a,"/").concat(a).concat(h,".mp3"),t=sessionStorage.getItem(e);t?B(JSON.parse(t)):(B(e),sessionStorage.setItem(e,JSON.stringify(e)))}),[a,h]),Object(c.useEffect)((function(){T(null);var e="/prosjekt2"+"/content/image/".concat(g,"/").concat(g).concat(h,".svg"),t=sessionStorage.getItem(e);t?T(JSON.parse(t)):fetch(e).then((function(e){return e.text()})).then((function(t){T(t),sessionStorage.setItem(e,JSON.stringify(t))}))}),[g,h]),n.a.createElement("div",{className:"grid-container"},n.a.createElement("div",{className:"header"},n.a.createElement("h1",null,"ART EXHIBITION")),n.a.createElement("div",{className:"main"},n.a.createElement(m,{activeTab:h,image:x,text:k,audio:C,changeActiveTab:function(e){N(e)}}),n.a.createElement("div",{className:"btn-div"},n.a.createElement("button",{className:"fav-btn",onClick:function(){"undefined"!==typeof Storage&&(localStorage.setItem("favTab",h),localStorage.setItem("favImage",g),localStorage.setItem("favAudio",a),localStorage.setItem("favText",d))}},"Make Favourite"),n.a.createElement("button",{className:"fav-btn",onClick:function(e){e.preventDefault(),"undefined"!==typeof Storage&&(localStorage.favImage?(o(localStorage.getItem("favAudio")),v(localStorage.getItem("favImage")),E(localStorage.getItem("favText")),N(localStorage.getItem("favTab"))):console.log("You have no favourite :("))}},"Show Favourite"))),n.a.createElement("div",null,n.a.createElement("div",{className:"flex-container-radio footer"},u.map((function(e,t){return n.a.createElement(l,{changeActiveArt:F,active:[a,g,d],key:t,category:e.category,choices:e.choices})})))))}),null),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.c20a0aca.chunk.js.map