(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),l=c.n(n),a=c(19),i=c.n(a),r=(c(26),c(27),c(28),c(2)),j=c(5),o=c(4),d=c.n(o),b=function(e){var t=Object(n.useState)([]),c=Object(j.a)(t,2),l=c[0],a=c[1];return Object(n.useEffect)((function(){d.a.get("http://localhost:8000/api/pets/sorted").then((function(e){return a(e.data.results)})).catch((function(e){return console.log(e)}))}),[]),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-9",children:Object(s.jsx)("h1",{children:"Pet Shelter"})}),Object(s.jsx)("div",{className:"col",children:Object(s.jsx)(r.a,{to:"/create",children:"add a pet to the shelter"})})]}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("h3",{children:"These pets are looking for a good home"})}),Object(s.jsxs)("table",{className:"table col-8",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Name"}),Object(s.jsx)("th",{children:"Type"}),Object(s.jsx)("th",{children:"Actions"})]})}),Object(s.jsx)("tbody",{children:l.map((function(e,t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.name}),Object(s.jsx)("td",{children:e.type}),Object(s.jsxs)("td",{children:[Object(s.jsx)(r.a,{to:"/edit/".concat(e._id),className:"btn btn-outline-dark btn-danger mr-2",children:"Edit"}),Object(s.jsx)(r.a,{to:"/pet/".concat(e._id),className:"btn btn-outline-dark btn-info",children:"Show"})]})]},t)}))})]})]})},h=c(6),O=c(8),u=function(e){var t=e.inputs,c=(e.errors,e.onChangeHandler),n=e.onSubmitHandler,l=e.submitValue;return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{noValidate:!0,onSubmit:n,className:"border border-dark p-3 needs-validation",children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col",children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Pet Name:"}),Object(s.jsx)("input",{name:"name",onChange:c,type:"text",value:t.name,className:"form-control",required:!0,minLength:"3"}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"invalid-feedback",children:"Name is required with minimum length of 3"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Pet Type:"}),Object(s.jsx)("input",{name:"type",onChange:c,type:"text",value:t.type,className:"form-control",required:!0,minLength:"3"}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"invalid-feedback",children:"Type is required with minimum length of 3"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Pet Description:"}),Object(s.jsx)("input",{name:"description",onChange:c,type:"text",value:t.description,className:"form-control",required:!0,minLength:"3"}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"invalid-feedback",children:"Description is required with minimum length of 3"})]})]}),Object(s.jsxs)("div",{className:"col",children:[Object(s.jsx)("p",{children:"Skills (Optional)"}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Skill One:"}),Object(s.jsx)("input",{name:"skillOne",onChange:c,type:"text",value:t.skillOne,className:"form-control"}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Skill Two:"}),Object(s.jsx)("input",{name:"skillTwo",onChange:c,type:"text",value:t.skillTwo,className:"form-control"}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Skill Three:"}),Object(s.jsx)("input",{name:"skillThree",onChange:c,type:"text",value:t.skillThree,className:"form-control"}),Object(s.jsx)("br",{})]})]})]}),Object(s.jsx)("input",{type:"submit",className:"btn btn-outline-dark btn-success",value:l})]})})},m=function(e){var t={name:"",type:"",description:"",skillOne:"",skillTwo:"",skillThree:""},c=Object(n.useState)(t),l=Object(j.a)(c,2),a=l[0],i=l[1],o=Object(n.useState)(t),b=Object(j.a)(o,2),m=b[0],x=b[1];return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-9",children:Object(s.jsx)("h1",{children:"Pet Shelter"})}),Object(s.jsx)("div",{className:"col",children:Object(s.jsx)(r.a,{to:"/",children:"back to home"})})]}),Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"col",children:[" ",Object(s.jsx)("h3",{children:"Know a pet needing a home?"})]})}),Object(s.jsx)(u,{onSubmitHandler:function(e){e.preventDefault(),console.log(a),e.target.className+=" was-validated",e.target.checkValidity()&&d.a.post("http://localhost:8000/api/create/pet",a).then((function(e){e.data.results?Object(r.c)("/"):x(e.data)})).catch((function(e){return console.log(e)}))},onChangeHandler:function(e){e.preventDefault(),i(Object(O.a)(Object(O.a)({},a),{},Object(h.a)({},e.target.name,e.target.value)))},inputs:a,errors:m,submitValue:"Add a Pet"})]})},x=function(e){var t=Object(n.useState)({name:"",type:"",description:"",skillOne:"",skillTwo:"",skillThree:""}),c=Object(j.a)(t,2),l=c[0],a=c[1];Object(n.useEffect)((function(){d.a.get("http://localhost:8000/api/pet/".concat(e.id)).then((function(e){return a(e.data.results)})).catch((function(e){return console.log(e)}))}),[e]);return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-9",children:Object(s.jsx)("h1",{children:"Pet Shelter"})}),Object(s.jsx)("div",{className:"col",children:Object(s.jsx)(r.a,{to:"/",children:"back to home"})})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col",children:[" ",Object(s.jsxs)("h3",{children:["Details about: ",l.name]})]}),Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"btn btn-outline-danger btn-danger text-white",onClick:function(){d.a.delete("http://localhost:8000/api/destroy/pet/".concat(e.id)).then((function(e){return Object(r.c)("/")})).catch((function(e){return console.log(e)}))},children:["Adopt ",l.name]})})]}),Object(s.jsxs)("div",{className:"pl-5 py-3 col-8 border border-dark mt-5",children:[Object(s.jsxs)("p",{children:["Pet Type: ",l.type]}),Object(s.jsxs)("p",{children:["Description: ",l.description]}),Object(s.jsx)("h3",{children:"Skills"}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:l.skillOne}),Object(s.jsx)("li",{children:l.skillTwo}),Object(s.jsx)("li",{children:l.skillThree})]})]})]})},p=function(e){var t={name:"",type:"",description:"",skillOne:"",skillTwo:"",skillThree:""},c=Object(n.useState)(t),l=Object(j.a)(c,2),a=l[0],i=l[1],o=Object(n.useState)(t),b=Object(j.a)(o,2),m=b[0],x=b[1];Object(n.useEffect)((function(){d.a.get("http://localhost:8000/api/pet/".concat(e.id)).then((function(e){return i(e.data.results)})).catch((function(e){return console.log(e)}))}),[e]);return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-9",children:Object(s.jsx)("h1",{children:"Pet Shelter"})}),Object(s.jsx)("div",{className:"col",children:Object(s.jsx)(r.a,{to:"/",children:"back to home"})})]}),Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"col",children:[" ",Object(s.jsxs)("h3",{children:["Edit ",a.name]})]})}),Object(s.jsx)(u,{onSubmitHandler:function(e){x(t),e.preventDefault(),console.log(a),e.target.className+=" was-validated",e.target.checkValidity()&&d.a.put("http://localhost:8000/api/update/pet/".concat(a._id),a).then((function(e){e.data.results?Object(r.c)("/pet/".concat(a._id)):x(e.data)})).catch((function(e){return console.log(e)}))},onChangeHandler:function(e){i(Object(O.a)(Object(O.a)({},a),{},Object(h.a)({},e.target.name,e.target.value)))},inputs:a,errors:m,submitValue:"Edit Pet"})]})};var v=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)(r.b,{children:[Object(s.jsx)(b,{path:"/"}),Object(s.jsx)(m,{path:"/create"}),Object(s.jsx)(x,{path:"/pet/:id"}),Object(s.jsx)(p,{path:"/edit/:id"})]})})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,l=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),l(e),a(e)}))};i.a.render(Object(s.jsx)(l.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root")),f()}},[[52,1,2]]]);
//# sourceMappingURL=main.e5ab0e53.chunk.js.map