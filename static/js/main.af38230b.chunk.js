(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(6),s=a(2),c=a(9),o=a(1),l=a(8),u=a.n(l),d=a(0),m=function(e){var t=e.title;return Object(d.jsx)("h2",{className:"TodoInfo__title",children:t})},j=function(e){var t=e.name,a=e.email;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:t})},b=function(e){var t=e.todos;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){var t=e.title,a=e.user,n=e.id,i=e.completed;return Object(d.jsxs)("article",{"data-id":n,className:u()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(d.jsx)(m,{title:t}),Object(d.jsx)(j,{name:(null===a||void 0===a?void 0:a.name)||"",email:(null===a||void 0===a?void 0:a.email)||""})]},n)}))})},h=(a(15),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}];function f(e){return h.find((function(t){return t.id===e}))}var p=function(){var e=function(e){return e.map((function(e){var t=Object(c.a)({},e);return t.user=f(t.userId),t}))}(O),t=Object(o.useState)(e),a=Object(s.a)(t,2),n=a[0],i=a[1],l=Object(o.useState)(0),u=Object(s.a)(l,2),m=u[0],j=u[1],p=Object(o.useState)(""),v=Object(s.a)(p,2),x=v[0],y=v[1],S=Object(o.useState)(""),N=Object(s.a)(S,2),I=N[0],g=N[1],C=Object(o.useState)(!1),_=Object(s.a)(C,2),k=_[0],D=_[1],T=Object(o.useState)(!1),w=Object(s.a)(T,2),M=w[0],A=w[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),g(x.replace(/[^A-Za-z\s\d\u0400-\u04FF]/g,"")),0!==m&&""!==I||(A(0===m),D(""===x),0)){var t={id:Math.max.apply(Math,Object(r.a)(n.map((function(e){return e.id}))))+1,title:I,completed:!1,userId:m,user:f(m)};i([].concat(Object(r.a)(n),[t])),j(0),y(""),D(!1),A(!1)}},children:[Object(d.jsxs)("label",{className:"field",children:["Title: ",Object(d.jsx)("input",{type:"text",placeholder:"enter a title","data-cy":"titleInput",value:x,onChange:function(e){var t=e.target;y(t.value),D(!1)}}),k&&Object(d.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(d.jsxs)("div",{className:"field",children:["Choose a user: ",Object(d.jsxs)("select",{"data-cy":"userSelect",value:m,onChange:function(e){var t=e.target;j(+t.value),A(!1)},children:[Object(d.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),h.map((function(e){var t=e.id,a=e.name;return Object(d.jsx)("option",{value:t,children:a},t)}))]}),M&&Object(d.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(d.jsx)(b,{todos:n})]})};i.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.af38230b.chunk.js.map