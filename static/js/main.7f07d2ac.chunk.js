(this.webpackJsonpsurvey=this.webpackJsonpsurvey||[]).push([[0],{160:function(e,t,n){},206:function(e,t,n){"use strict";n.r(t);var a,r=n(72),c=n.n(r),s=n(0),o=n(172),l=n(16),i=(n(197),n(223)),j=n(78),h=n(48),b=n(232),u=n(227),p=n(233),d=n(225),m=n(230),g=n(226),O=n(89),x=n(110),v=n(54),f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(s.useState)(t),a=Object(h.a)(n,2),r=a[0],c=a[1],o=function(e){c(Object(v.a)(Object(v.a)({},r),{},Object(x.a)({},e.target.name,e.target.value)))},l=function(t){t.preventDefault(),e()};return{onChange:o,onSubmit:l,value:r}},w=(n(160),n(5)),y=Object(O.a)(a||(a=Object(j.a)(["\n    mutation createSurvey(\n        $name: String!\n        $phone: String!\n        $college: String!\n        $usn: String!\n        $whatsapp: String\n        $branch: String!\n        $semester: String!\n        $email: String!\n    ){\n        createSurvey(\n            surveyInput:{\n                name: $name\n                phone: $phone\n                college: $college\n                usn: $usn\n                whatsapp: $whatsapp\n                branch: $branch\n                semester: $semester\n                email: $email\n            }\n        ){\n            id\n            college\n            branch\n        }\n    }\n"]))),S=function(e){var t=Object(s.useState)({}),n=Object(h.a)(t,2),a=n[0],r=n[1],c=f((function(){x()}),{name:"",phone:"",college:"",whatsapp:"",branch:"",usn:"",semester:"",email:""}),o=c.onChange,l=c.onSubmit,i=c.value,j=Object(g.a)(y,{update:function(t,n){var a=n.data.createSurvey;"bangalore institute of technology"!==a.college.toLowerCase()||"computer science and enginerring"!==a.branch.toLowerCase()&&"cse"!==a.branch.toLowerCase()&&a.branch.toLowerCase(),e.history.push("/submitted")},onError:function(e){void 0!==e.graphQLErrors[0]?(console.log(e.graphQLErrors[0]),r(e.graphQLErrors[0].extensions.exception.errors)):r({error:"Server Error Try Again"})},variables:i}),O=Object(h.a)(j,2),x=O[0],v=O[1].loading;return Object(w.jsxs)(b.a,{inverted:!0,color:"teal",children:[Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{id:"sdi_logo",children:[Object(w.jsx)("img",{alt:"img",src:"https://firebasestorage.googleapis.com/v0/b/fir-a11e8.appspot.com/o/Untitled%20design.png?alt=media"}),Object(w.jsx)("div",{children:"SDI CLUB"})]}),Object(w.jsx)("div",{id:"bit_logo",children:Object(w.jsx)("img",{alt:"",src:"https://firebasestorage.googleapis.com/v0/b/fir-a11e8.appspot.com/o/bitlogo.png?alt=media"})})]}),Object(w.jsxs)(u.a,{secondary:!0,size:"massive",fluid:!0,widths:4,children:[Object(w.jsx)(u.a.Item,{}),Object(w.jsx)(u.a.Item,{children:"Quiz of Mistakes"}),Object(w.jsx)(u.a.Item,{})]}),Object(w.jsx)(p.a,{children:Object(w.jsx)(p.a.Row,{centered:!0,children:Object(w.jsxs)(p.a.Column,{width:10,children:[Object(w.jsxs)(d.a,{size:"massive",onSubmit:l,noValidate:!0,className:v?"loading":"",children:[Object(w.jsx)(d.a.Input,{label:"Name",placeholder:"Name",name:"name",type:"text",value:i.name,onChange:o}),Object(w.jsx)(d.a.Input,{label:"Email",placeholder:"Email",name:"email",type:"text",value:i.email,onChange:o}),Object(w.jsx)(d.a.Input,{label:"Phone",placeholder:"Phone",name:"phone",type:"text",value:i.phone,onChange:o,maxLength:"10",minLength:"10"}),Object(w.jsx)(d.a.Input,{label:"College",placeholder:"College",name:"college",type:"text",value:i.college,onChange:o}),Object(w.jsx)(d.a.Input,{label:"Usn",placeholder:"Usn",name:"usn",type:"text",value:i.usn,onChange:o}),Object(w.jsx)(d.a.Input,{label:"Whatsapp (If different than phone)",placeholder:"Whatsapp",name:"whatsapp",type:"text",value:i.whatsapp,onChange:o,maxLength:"10",minLength:"10"}),Object(w.jsx)(d.a.Input,{label:"Branch",placeholder:"Branch",name:"branch",type:"text",value:i.branch,onChange:o}),Object(w.jsx)(d.a.Input,{label:"Semester",placeholder:"Semester",name:"semester",type:"text",value:i.semester,onChange:o,maxLength:"1",minLength:"1"}),Object(w.jsx)(m.a,{type:"submit",color:"blue",children:"Submit"})]}),Object.keys(a).length>0&&Object(w.jsx)("div",{className:"ui error message",children:Object(w.jsx)("ul",{className:"list",children:Object.values(a).map((function(e){return Object(w.jsx)("li",{children:e},e)}))})})]})})})]})};var C=function(){return Object(w.jsx)(b.a,{size:"massive",color:"teal",children:Object(w.jsxs)("h2",{children:["Registered Successfully. Please pay Rs. 30 through UPI at:: akhilsinghal6467@ybl",Object(w.jsx)("br",{}),"Thank You."]})})},I=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(C,{}),Object(w.jsx)(b.a,{color:"teal",children:Object(w.jsxs)("h2",{children:["To JOIN SDI Club: ",Object(w.jsx)("br",{}),Object(w.jsx)("b",{children:Object(w.jsx)("a",{href:"https://chat.whatsapp.com/JA8WBVjjHi45dDFw1sDNh6",target:"_blank",rel:"noopener noreferrer",children:"Click Here"})})]})})]})},$=n(171),L={user:null};if(localStorage.getItem("jwtToken")){var k=Object($.a)(localStorage.getItem("jwtToken"));1e3*k.exp<Date.now()?localStorage.removeItem("jwtToken"):L.user=k}var E,N=Object(s.createContext)({user:null,login:function(e){},logout:function(){}});var B,D=Object(O.a)(E||(E=Object(j.a)(["\n    mutation login(\n        $username: String!\n        $password: String!\n    ){\n        login(\n                username: $username\n                password: $password\n        ){\n            id email username createdAt token\n        }\n    }\n"]))),P=function(e){var t=Object(s.useContext)(N),n=Object(s.useState)({}),a=Object(h.a)(n,2),r=a[0],c=a[1],o=f((function(){p()}),{username:"",password:""}),l=o.onChange,i=o.onSubmit,j=o.value,b=Object(g.a)(D,{update:function(n,a){var r=a.data.login;t.login(r),e.history.push("/userdata")},onError:function(e){c(e.graphQLErrors[0].extensions.exception.errors)},variables:j}),u=Object(h.a)(b,2),p=u[0],O=u[1].loading;return Object(w.jsxs)("div",{className:"form-container",children:[Object(w.jsxs)(d.a,{onSubmit:i,noValidate:!0,className:O?"loading":"",children:[Object(w.jsx)("h1",{children:"Login"}),Object(w.jsx)(d.a.Input,{label:"Username",placeholder:"Username",name:"username",type:"text",value:j.username,onChange:l}),Object(w.jsx)(d.a.Input,{label:"Password",placeholder:"Password",name:"password",type:"password",value:j.password,onChange:l}),Object(w.jsx)(m.a,{type:"submit",primary:!0,children:"Login"})]}),Object.keys(r).length>0&&Object(w.jsx)("div",{className:"ui error message",children:Object(w.jsx)("ul",{className:"list",children:Object.values(r).map((function(e){return Object(w.jsx)("li",{children:e},e)}))})})]})},T=n(231),U=n(228),R=n(229);var _=Object(O.a)(B||(B=Object(j.a)(["\nquery getSurvey{\n        getSurvey{\n            id\n            name\n            phone\n            college\n            codechef_id\n            whatsapp\n            branch\n            semester\n            email\n        }\n    }\n"]))),z=function(){var e=Object(T.a)(_),t=e.loading,n=e.data;return Object(w.jsx)(p.a,{children:Object(w.jsx)(p.a.Row,{children:t?Object(w.jsx)("h1",{children:"Loading Data"}):Object(w.jsx)(U.a.Group,{children:n.getSurvey.length>0&&n.getSurvey.map((function(e){return Object(w.jsx)(p.a.Row,{width:14,style:{marginBottom:20,marginRight:20,marginTop:10},children:Object(w.jsx)(R.a,{children:Object(w.jsxs)(R.a.Content,{children:[Object(w.jsx)(R.a.Header,{children:e.name}),Object(w.jsxs)(R.a.Description,{children:["Phone: ",e.phone," ",Object(w.jsx)("br",{}),"College: ",e.college," ",Object(w.jsx)("br",{}),"Codechef_id: ",e.codechef_id," ",Object(w.jsx)("br",{}),"Whatsapp: ",e.whatsapp," ",Object(w.jsx)("br",{}),"Branch: ",e.branch," ",Object(w.jsx)("br",{}),"Semester: ",e.semester," ",Object(w.jsx)("br",{}),"Email: ",e.email," ",Object(w.jsx)("br",{})]})]})})},e.id)}))})})})};var Q=function(){return Object(w.jsx)(o.a,{children:Object(w.jsxs)(i.a,{children:[Object(w.jsx)(l.a,{exact:!0,path:"/admin",component:P}),Object(w.jsx)(l.a,{exact:!0,path:"/",component:S}),Object(w.jsx)(l.a,{exact:!0,path:"/join",component:I}),Object(w.jsx)(l.a,{exact:!0,path:"/submitted",component:C}),Object(w.jsx)(l.a,{exact:!0,path:"/userdata",component:z})]})})},A=n(175),J=n(179),W=n(180),H=n(224),V=n(174),F=Object(W.a)({uri:"https://sdi-survey.herokuapp.com"}),q=Object(V.a)((function(){var e=localStorage.getItem("jwttoken");return{headers:{Authorization:e?"Bearer ".concat(e):""}}})),G=new A.a({link:q.concat(F),cache:new J.a}),M=Object(w.jsx)(H.a,{client:G,children:Object(w.jsx)(Q,{})});c.a.render(M,document.getElementById("root"))}},[[206,1,2]]]);
//# sourceMappingURL=main.7f07d2ac.chunk.js.map