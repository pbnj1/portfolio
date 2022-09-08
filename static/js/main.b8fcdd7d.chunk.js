(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{29:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),r=c(18),n=c.n(r),i=c(19),o=c(20),l=c(21),j=c(24),d=c(7),b=c(2),h=(c(29),c(0));var m=function(){return Object(h.jsx)("nav",{className:"navbar",children:Object(h.jsxs)("ul",{className:"flex-row ",children:[Object(h.jsx)("li",{className:"mx-2",children:Object(h.jsx)(d.b,{to:"/about",children:"About Me"})}),Object(h.jsx)("li",{className:"mx-2",children:Object(h.jsx)(d.b,{to:"/portfolio",children:"Portfolio"})}),Object(h.jsx)("li",{className:"mx-2",children:Object(h.jsx)(d.b,{to:"/contact",children:"Contact"})}),Object(h.jsx)("li",{className:"mx-2",children:Object(h.jsx)(d.b,{to:"/resume",children:"Resume"})})]})})};var x=function(){return Object(h.jsxs)("header",{className:"flex-row px-1",children:[Object(h.jsx)("div",{className:"logo ",children:Object(h.jsx)("h1",{children:Object(h.jsx)(d.b,{to:"/",children:"Pete Wang"})})}),Object(h.jsx)(m,{})]})},O=c.p+"static/media/pic.8d2cbbca.png";var u=function(){return Object(h.jsxs)("section",{className:"home my-5",children:[Object(h.jsxs)("div",{className:"title",children:[Object(h.jsx)("h2",{children:"Hi, I'm Pete"}),Object(h.jsx)("p",{children:"Thanks For Checking Out My Portfolio!"}),Object(h.jsx)(d.b,{to:"portfolio",children:Object(h.jsx)("button",{children:"View my Projects"})})]}),Object(h.jsx)("div",{className:"pic",children:Object(h.jsx)("img",{style:{border:"5px solid white",borderRadius:"50%"},src:O,alt:"profile pic"})})]})};var p=function(){return Object(h.jsxs)("section",{class:"about",children:[Object(h.jsx)("h1",{id:"about",children:"About Me"}),Object(h.jsx)("p",{children:"I am passionate about helping others improve quality of life through technology. I am a software engineer drawing on my transferrable skills of 15 years as a physical therapist to create solutions to complex problems, root cause analysis, and cross functional communication. I am searching for a junior/associate software engineering position. When I am not working I enjoy spending time with my family, hiking with our dog, and streaming too many hours of Netflix! I love animals, health and wellness, and doing my part to leave this world a better place."})]})},g=c(11),f=c(15),v=c(16);var w=function(){var e=Object(s.useState)({name:"",email:"",message:""}),t=Object(v.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)(""),n=Object(v.a)(r,2),i=n[0],o=n[1],l=c.name,j=c.email,d=c.message,b=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);o(t?"":"Your email is invalid.")}else e.target.value.length?o(""):o("".concat(e.target.name," is required."));i||(a(Object(f.a)(Object(f.a)({},c),{},Object(g.a)({},e.target.name,e.target.value))),console.log("Handle Form",c))};return Object(h.jsxs)("section",{children:[Object(h.jsx)("h1",{"data-testid":"h1tag",children:"Contact Me"}),Object(h.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),i||console.log("Submit Form",c)},children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(h.jsx)("input",{type:"text",name:"name",defaultValue:l,onBlur:b})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(h.jsx)("input",{type:"email",name:"email",defaultValue:j,onBlur:b})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(h.jsx)("textarea",{name:"message",rows:"5",defaultValue:d,onBlur:b})]}),i&&Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"error-text",children:i})}),Object(h.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})},y=c.p+"static/media/teamID.61525e93.png",k=c.p+"static/media/textEditor.a6cebc03.png",N=(c.p,c.p+"static/media/carbonCombaters.f9cfbd30.png"),C=c.p+"static/media/noTime.0cd70579.png",S=c.p+"static/media/noteTaker.f540bf59.png",I=c.p+"static/media/carded.c4ffe759.png";var F=function(){return Object(h.jsx)("section",{class:"portfolio ",children:Object(h.jsxs)("div",{class:"d-flexd-flex flex-row row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4",children:[Object(h.jsx)("div",{class:"col",children:Object(h.jsxs)("div",{class:"card",children:[Object(h.jsx)("img",{src:N,alt:"carbonComabters",class:"card-img-top"}),Object(h.jsx)("div",{class:"card-body",children:Object(h.jsx)("a",{href:"https://carbon-combaters.herokuapp.com/landing",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("button",{children:"Website"})})})]})}),Object(h.jsx)("div",{class:"col",children:Object(h.jsxs)("div",{class:"card",children:[Object(h.jsx)("img",{src:C,alt:"No Time to Weight",class:"card-img-top"}),Object(h.jsx)("div",{class:"card-body",children:Object(h.jsx)("a",{href:"https://pbnj1.github.io/No-time-to-weight-app",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("button",{children:"Website"})})})]})}),Object(h.jsx)("div",{class:"col",children:Object(h.jsxs)("div",{class:"card",children:[Object(h.jsx)("img",{src:S,alt:"Final Project",class:"card-img-top"}),Object(h.jsx)("div",{class:"card-body",children:Object(h.jsx)("a",{href:"https://limitless-shore-06713.herokuapp.com/",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("button",{children:"Website"})})})]})}),Object(h.jsx)("div",{class:"col",children:Object(h.jsxs)("div",{class:"card",children:[Object(h.jsx)("img",{src:y,alt:"Coming Soon",class:"card-img-top"}),Object(h.jsx)("div",{class:"card-body",children:Object(h.jsx)("a",{href:"https://github.com/pbnj1/Team-member-ID-fabricator",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("button",{children:"GitHub"})})})]})}),Object(h.jsx)("div",{class:"col",children:Object(h.jsxs)("div",{class:"card",children:[Object(h.jsx)("img",{src:k,alt:"Coming Soon",class:"card-img-top"}),Object(h.jsx)("div",{class:"card-body",children:Object(h.jsx)("a",{href:"https://github.com/pbnj1/Do-you-even-text",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("button",{children:"GitHub"})})})]})}),Object(h.jsx)("div",{class:"col",children:Object(h.jsxs)("div",{class:"card",children:[Object(h.jsx)("img",{src:I,alt:"Coming Soon",class:"card-img-top"}),Object(h.jsx)("div",{class:"card-body",children:Object(h.jsx)("a",{href:"https://get-carded.herokuapp.com/",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("button",{children:"Website"})})})]})})]})})},W=c(17);var P=function(){return Object(h.jsx)("div",{className:"footer-div",children:Object(h.jsx)("footer",{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("a",{href:"https://github.com/pbnj1",target:"blank",children:Object(h.jsx)("li",{children:Object(h.jsx)(W.a,{})})}),Object(h.jsx)("a",{href:" https://www.linkedin.com/in/pete-wang-SWE",target:"blank",children:Object(h.jsx)("li",{children:Object(h.jsx)(W.b,{})})})]})})})},B=c.p+"static/media/resume.93c06fe2.png";var D=function(){return Object(h.jsx)("section",{children:Object(h.jsx)("div",{class:"col",children:Object(h.jsxs)("div",{class:"card",children:[Object(h.jsx)("img",{src:B,alt:"resume",class:"card-img-top"}),Object(h.jsx)("div",{class:"card-body",children:Object(h.jsx)("a",{href:"https://drive.google.com/file/d/10QHmpjtvsbnWVBVeplcSiD0j3IdQ08mL/view?usp=sharing",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("button",{children:"Download"})})})]})})})},T=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(h.jsx)(d.a,{basename:"/",children:Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(x,{}),Object(h.jsxs)("main",{children:[Object(h.jsx)(b.a,{exact:!0,path:"/",component:u}),Object(h.jsx)(b.a,{exact:!0,path:"/about",component:p}),Object(h.jsx)(b.a,{exact:!0,path:"/contact",component:w}),Object(h.jsx)(b.a,{exact:!0,path:"/portfolio",component:F}),Object(h.jsx)(b.a,{exact:!0,path:"/resume",component:D})]}),Object(h.jsx)(P,{})]})})}}]),c}(s.Component),_=T;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),r(e),n(e)}))};n.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(_,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),M()}},[[39,1,2]]]);
//# sourceMappingURL=main.b8fcdd7d.chunk.js.map