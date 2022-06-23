(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],Array(25).concat([function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(18),s=n.n(r),o=(n(25),n(7)),i=n(2),l=(n(26),n(27),n(0)),j=function(){return Object(l.jsx)("header",{className:"Header",children:Object(l.jsxs)("nav",{className:"Header__nav",children:[Object(l.jsx)(o.b,{className:"Header__navlink",to:"/",exact:!0,children:"Welcome page"}),Object(l.jsx)(o.b,{className:"Header__navlink",to:"/about",children:"About me"}),Object(l.jsx)(o.b,{className:"Header__navlink",to:"/projects",children:"My projects"}),Object(l.jsx)(o.b,{className:"Header__navlink",to:"/contacts",children:"My contacts"})]})})},u=n(8),b=(n(37),n(38),function(){return Object(l.jsx)("footer",{className:"Footer",children:Object(l.jsx)("p",{className:"Footer__text",children:"Choose a job you love, and you will never have to work a day in your life!"})})}),d=(n(39),function(e){var t=e.active,n=e.setActive,c=e.children;return Object(l.jsx)("div",{className:t?"Modal active":"Modal",onClick:function(){return n(!1)},"aria-hidden":"true",children:Object(l.jsx)("div",{className:t?"Modal__content active":"Modal__content",onClick:function(e){return e.stopPropagation()},"aria-hidden":"true",children:c})})}),h=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!0),s=Object(u.a)(r,2),o=s[0],i=s[1],j=Object(c.useState)(!1),h=Object(u.a)(j,2),m=h[0],p=h[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"HomePage",children:[Object(l.jsx)("h1",{className:"HomePage__title",children:"Hello!"}),Object(l.jsx)("p",{className:"HomePage__text",children:"I am very glad to see you here \ud83d\ude0a"}),Object(l.jsx)("p",{className:"HomePage__text",children:"My name is Oleg"}),Object(l.jsx)("p",{className:"HomePage__text",children:"Front-end developer from Ukraine \ud83d\udc9b\ud83d\udc99"}),o?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{className:"HomePage__text",children:"So, let's get acquainted!"}),Object(l.jsx)("p",{className:"HomePage__text",children:"What is your name?"}),Object(l.jsxs)("form",{className:"HomePage__form",onSubmit:function(e){e.preventDefault(),i(!1),p(!0)},children:[Object(l.jsx)("input",{type:"text",className:"HomePage__input",placeholder:"Enter your name",value:n,onChange:function(e){a(e.target.value.trim().toUpperCase())},required:!0}),Object(l.jsx)("button",{type:"submit",className:"HomePage__button",children:"say hi!"})]})]}):Object(l.jsx)("p",{className:"HomePage__text",children:"Welcome!"})]}),Object(l.jsx)(b,{}),Object(l.jsxs)(d,{active:m,setActive:p,children:[Object(l.jsx)("p",{className:"HomePage__text",children:"Nice to meet you, ".concat(n,"!")}),Object(l.jsx)("p",{className:"HomePage__text",children:"Now we are friends"}),Object(l.jsx)("p",{className:"HomePage__text",children:"You can start exploring my little WEB-world \ud83c\udf0d"}),Object(l.jsx)("a",{href:"https://lem47.github.io/react-portfolio-project/#/projects",className:"HomePage__link",children:"Enjoy!"})]})]})},m=(n(40),function(){return Object(l.jsx)("div",{className:"About",children:Object(l.jsx)("h1",{className:"About__title",children:"About me"})})}),p=(n(41),function(){return Object(l.jsxs)("div",{className:"ProjectsPage",children:[Object(l.jsx)("h1",{className:"ProjectsPage__title",children:"My React projects:"}),Object(l.jsx)(o.b,{className:"ProjectsPage__link",to:"/clock",children:"Matrix clock"}),Object(l.jsx)(o.b,{className:"ProjectsPage__link",to:"/people",children:"Fetching people from server"}),Object(l.jsx)(o.b,{className:"ProjectsPage__link",to:"/goods",children:"Dynamic list of goods"}),Object(l.jsx)("a",{href:"https://lem47.github.io/react_list-of-goods-hooks/",rel:"noreferrer",target:"_blank",className:"ProjectsPage__link",children:"List of goods with sorting"}),Object(l.jsx)("a",{href:"https://lem47.github.io/react_counter/",rel:"noreferrer",target:"_blank",className:"ProjectsPage__link",children:"Counter (with funny sound inside)"}),Object(l.jsx)("h1",{className:"ProjectsPage__title",children:"Landing pages:"}),Object(l.jsx)("a",{href:"https://lem47.github.io/creative-bakery/",rel:"noreferrer",target:"_blank",className:"ProjectsPage__link",children:"Creative Bakery"}),Object(l.jsx)("a",{href:"https://lem47.github.io/miami-landing/",rel:"noreferrer",target:"_blank",className:"ProjectsPage__link",children:"Miami Condo Kings"})]})}),x=n(3),f=n.n(x),O=n(6),_=(n(43),function(){var e=Object(O.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),v=(n(44),n(45),function(e){var t=e.person;return Object(l.jsxs)("tr",{className:"PersonRow",children:[Object(l.jsx)("td",{children:t.name}),Object(l.jsx)("td",{children:t.sex}),Object(l.jsx)("td",{children:t.born}),Object(l.jsx)("td",{children:t.died}),Object(l.jsx)("td",{children:t.motherName||"--no data--"}),Object(l.jsx)("td",{children:t.fatherName||"--no data--"})]})}),g=function(e){var t=e.people;return Object(l.jsxs)("table",{className:"PeopleTable",children:[Object(l.jsx)("th",{children:"name"}),Object(l.jsx)("th",{children:"sex"}),Object(l.jsx)("th",{children:"born"}),Object(l.jsx)("th",{children:"died"}),Object(l.jsx)("th",{children:"mother"}),Object(l.jsx)("th",{children:"father"}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsx)(v,{person:e},e.slug)}))})]})},k=(n(46),function(){return Object(l.jsxs)("div",{className:"loading-container",children:[Object(l.jsx)("div",{className:"spinner"}),Object(l.jsx)("div",{className:"spinner-center"}),Object(l.jsx)("div",{className:"loading-text",children:"Loading..."})]})}),N=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(O.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(l.jsxs)("div",{className:"PeoplePage",children:[Object(l.jsx)("h1",{className:"PeoplePage__title",children:"Fetching people from server"}),n?Object(l.jsx)(g,{people:n}):Object(l.jsx)(k,{})]})},y="https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json",C=function(){var e=Object(O.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(y);case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(O.a)(f.a.mark((function e(){var t,n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(y);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,c=n.slice(0,5),e.abrupt("return",c.sort((function(e,t){return e.name.localeCompare(t.name)})));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(O.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(y);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.filter((function(e){return"red"===e.color})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=(n(47),function(e){var t=e.goods;return Object(l.jsx)("ul",{className:"GoodList",children:t.map((function(e){var t=e.id,n=e.name,c=e.color;return Object(l.jsx)("li",{style:{color:c},children:n},t)}))})}),M=(n(48),function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],r=function(){var e=Object(O.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(O.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(O.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"Goods__title",children:"List of goods from server"}),Object(l.jsxs)("div",{className:"Goods",children:[Object(l.jsxs)("div",{className:"Goods__buttons",children:[Object(l.jsx)("button",{type:"button",className:"Goods__button",onClick:r,children:"Show all"}),Object(l.jsx)("button",{type:"button",className:"Goods__button",onClick:s,children:"Show 5 first"}),Object(l.jsx)("button",{type:"button",className:"Goods__button",onClick:o,children:"Show only red"})]}),n.length>0&&Object(l.jsx)(H,{goods:n}),n.length>0&&Object(l.jsx)("button",{type:"button",className:"Goods__button",onClick:function(){a([])},children:"Hide"})]})]})}),S=n(10),A=n(11),I=n(13),L=n(12),E=(n(49),n(50),function(e){Object(I.a)(n,e);var t=Object(L.a)(n);function n(){var e;Object(S.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={date:(new Date).toLocaleTimeString()},e.timerId=setInterval((function(){}),0),e}return Object(A.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=setInterval((function(){return e.tick()}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=this.props;t!==e&&console.log("The Clock was renamed from ".concat(e.name," to ").concat(t.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"tick",value:function(){this.setState({date:(new Date).toLocaleTimeString()}),console.log(this.state.date)}},{key:"render",value:function(){var e=this.state.date,t=this.props.name;return Object(l.jsxs)("div",{className:"Clock",children:[Object(l.jsxs)("h1",{className:"Clock__name",children:["Hello!",Object(l.jsx)("br",{})," ",Object(l.jsx)("br",{}),"I am a clock. My name is #".concat(t)]}),Object(l.jsx)("div",{"data-cy":"time",className:"Clock__time",children:e})]})}}]),n}(a.a.Component)),G=function(e){Object(I.a)(n,e);var t=Object(L.a)(n);function n(){var e;Object(S.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={isClockVisible:!1,clockName:0},e.showClock=function(){e.setState({isClockVisible:!0})},e.hideClock=function(){e.setState({isClockVisible:!1})},e.renameClock=function(){e.setState({clockName:Math.floor(100*Math.random())})},e}return Object(A.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isClockVisible,n=e.clockName;return Object(l.jsx)("div",{className:"ClockPage",children:Object(l.jsxs)("div",{className:"MatrixClock",children:[t&&Object(l.jsx)(E,{name:n}),Object(l.jsxs)("div",{className:"MatrixClock__buttons",children:[Object(l.jsx)("button",{className:"MatrixClock__button",type:"button",onClick:this.showClock,disabled:t,children:"SHOW CLOCK"}),Object(l.jsx)("button",{className:"MatrixClock__button",type:"button",onClick:this.renameClock,disabled:!t,children:"SET RANDOM NAME"}),Object(l.jsx)("button",{className:"MatrixClock__button",type:"button",onClick:this.hideClock,disabled:!t,children:"HIDE CLOCK"})]})]})})}}]),n}(a.a.Component),D=(n(51),function(){return Object(l.jsxs)("div",{className:"Contacts",children:[Object(l.jsx)("img",{src:"https://media3.giphy.com/media/lp0k7hYzMYrsfbxmxJ/giphy.gif?cid=ecf05e47lx9bfrrd2lv66rn2ixohv4i35nsowdn8g8euo7ep&rid=giphy.gif&ct=g",alt:"call me please",className:"Contacts__gif"}),Object(l.jsx)("h1",{className:"Contacts__title",children:"My contacts:"}),Object(l.jsx)("a",{href:"tel:+380500848001",className:"Contacts__link",children:"+380500848001"}),Object(l.jsx)("a",{href:"https://t.me/lementarev",rel:"noreferrer",target:"_blank",className:"Contacts__link",children:"TELEGRAM: @lementarev"}),Object(l.jsx)("a",{href:"mailto:lementarev@gmail.com",className:"Contacts__link",children:"GMAIL: lementarev@gmail.com"}),Object(l.jsx)("a",{href:"https://linkedin.com/in/oleg-lementarev",rel:"noreferrer",target:"_blank",className:"Contacts__link",children:"LINKEDIN: linkedin.com/in/oleg-lementarev"}),Object(l.jsx)("a",{href:"https://github.com/lem47",rel:"noreferrer",target:"_blank",className:"Contacts__link",children:"GITHUB: github.com/lem47"})]})}),F=(n(52),function(){return Object(l.jsx)("h1",{className:"NotFoundPage",children:"Page not found"})}),T=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{path:"/",exact:!0,component:h}),Object(l.jsx)(i.b,{path:"/about",exact:!0,component:m}),Object(l.jsx)(i.b,{path:"/projects",exact:!0,component:p}),Object(l.jsx)(i.b,{path:"/people",exact:!0,component:N}),Object(l.jsx)(i.b,{path:"/goods",exact:!0,component:M}),Object(l.jsx)(i.b,{path:"/clock",exact:!0,component:G}),Object(l.jsx)(i.b,{path:"/contacts",exact:!0,component:D}),Object(l.jsx)(i.a,{path:"/home",to:"/"}),Object(l.jsx)(F,{})]})]})};s.a.render(Object(l.jsx)(o.a,{children:Object(l.jsx)(T,{})}),document.getElementById("root"))}]),[[53,1,2]]]);
//# sourceMappingURL=main.3df39017.chunk.js.map