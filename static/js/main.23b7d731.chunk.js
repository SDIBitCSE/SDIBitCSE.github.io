(this.webpackJsonpsurvey=this.webpackJsonpsurvey||[]).push([[0],{189:function(e,t,a){},191:function(e,t,a){"use strict";a.r(t);var n,c=a(63),r=a.n(c),s=a(0),o=a(154),i=a(14),l=(a(181),a(209)),h=a(148),j=a(92),b=a(215),p=a(213),m=a(216),d=a(211),u=a(214),g=a(212),x=a(159),O=a(96),v=a(134),f=a(10),y=Object(x.a)(n||(n=Object(h.a)(["\n    mutation createSurvey(\n        $name: String!\n        $phone: String!\n        $college: String!\n        $codechef_id: String!\n        $whatsapp: String\n        $branch: String!\n        $semester: String!\n        $email: String!\n    ){\n        createSurvey(\n            surveyInput:{\n                name: $name\n                phone: $phone\n                college: $college\n                codechef_id: $codechef_id\n                whatsapp: $whatsapp\n                branch: $branch\n                semester: $semester\n                email: $email\n            }\n        ){\n            id\n            college\n            branch\n        }\n    }\n"]))),C=function(e){var t=Object(s.useState)({}),a=Object(j.a)(t,2),n=a[0],c=a[1],r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Object(s.useState)(t),n=Object(j.a)(a,2),c=n[0],r=n[1];return{onChange:function(e){r(Object(v.a)(Object(v.a)({},c),{},Object(O.a)({},e.target.name,e.target.value)))},onSubmit:function(t){t.preventDefault(),e()},value:c}}((function(){C()}),{name:"",phone:"",college:"",codechef_id:"",whatsapp:"",branch:"",semester:"",email:""}),o=r.onChange,i=r.onSubmit,l=r.value,h=Object(g.a)(y,{update:function(t,a){var n=a.data.createSurvey;"bangalore institute of technology"!==n.college.toLowerCase()||"computer science and enginerring"!==n.branch.toLowerCase()&&"cse"!==n.branch.toLowerCase()&&"computer science"!==n.branch.toLowerCase()?e.history.push("/submitted"):e.history.push("/join")},onError:function(e){void 0!==e.graphQLErrors[0]?c(e.graphQLErrors[0].extensions.exception.errors):c({error:"Bad Network"})},variables:l}),x=Object(j.a)(h,2),C=x[0],I=x[1].loading;return Object(f.jsxs)(b.a,{inverted:!0,color:"teal",children:[Object(f.jsxs)(p.a,{secondary:!0,size:"massive",fluid:!0,widths:3,children:[Object(f.jsx)(p.a.Item,{children:Object(f.jsx)("img",{style:{background:"white"},alt:"img_3",src:"https://firebasestorage.googleapis.com/v0/b/fir-a11e8.appspot.com/o/fb-image-icon.png?alt=media"})}),Object(f.jsxs)(p.a.Item,{children:[Object(f.jsx)("img",{alt:"img",src:"https://firebasestorage.googleapis.com/v0/b/fir-a11e8.appspot.com/o/Untitled%20design.png?alt=media"}),Object(f.jsx)("div",{children:"SDI CLUB"})]}),Object(f.jsx)(p.a.Item,{children:Object(f.jsx)("img",{style:{background:"teal"},alt:"img_2",src:"https://firebasestorage.googleapis.com/v0/b/fir-a11e8.appspot.com/o/bitlogo.png?alt=media"})})]}),Object(f.jsxs)(p.a,{secondary:!0,size:"massive",fluid:!0,widths:4,children:[Object(f.jsx)(p.a.Item,{}),Object(f.jsx)(p.a.Item,{children:"Competitive Coding Competition"}),Object(f.jsx)(p.a.Item,{})]}),Object(f.jsx)(m.a,{children:Object(f.jsx)(m.a.Row,{centered:!0,children:Object(f.jsxs)(m.a.Column,{width:10,children:[Object(f.jsxs)(d.a,{size:"massive",onSubmit:i,noValidate:!0,className:I?"loading":"",children:[Object(f.jsx)(d.a.Input,{label:"Name",placeholder:"Name",name:"name",type:"text",value:l.name,onChange:o}),Object(f.jsx)(d.a.Input,{label:"Email",placeholder:"Email",name:"email",type:"text",value:l.email,onChange:o}),Object(f.jsx)(d.a.Input,{label:"Phone",placeholder:"Phone",name:"phone",type:"text",value:l.phone,onChange:o,maxLength:"10",minLength:"10"}),Object(f.jsx)(d.a.Input,{label:"College",placeholder:"College",name:"college",type:"text",value:l.college,onChange:o}),Object(f.jsx)(d.a.Input,{label:"Codechef Id",placeholder:"Codechef Id",name:"codechef_id",type:"text",value:l.codechef_id,onChange:o}),Object(f.jsx)(d.a.Input,{label:"Whatsapp (If different than phone)",placeholder:"Whatsapp",name:"whatsapp",type:"text",value:l.whatsapp,onChange:o,maxLength:"10",minLength:"10"}),Object(f.jsx)(d.a.Input,{label:"Branch",placeholder:"Branch",name:"branch",type:"text",value:l.branch,onChange:o}),Object(f.jsx)(d.a.Input,{label:"Semester",placeholder:"Semester",name:"semester",type:"text",value:l.semester,onChange:o,maxLength:"1",minLength:"1"}),Object(f.jsx)(u.a,{type:"submit",color:"blue",children:"Submit"})]}),Object.keys(n).length>0&&Object(f.jsx)("div",{className:"ui error message",children:Object(f.jsx)("ul",{className:"list",children:Object.values(n).map((function(e){return Object(f.jsx)("li",{children:e},e)}))})})]})})})]})},I=function(){return Object(f.jsx)(b.a,{color:"teal",children:Object(f.jsxs)("h2",{children:["To JOIN SDI: ",Object(f.jsx)("br",{}),Object(f.jsx)("b",{children:Object(f.jsx)("a",{href:"https://chat.whatsapp.com/JA8WBVjjHi45dDFw1sDNh6",target:"_blank",rel:"noopener noreferrer",children:"Click Here"})})]})})};var w=function(){return Object(f.jsx)(b.a,{size:"massive",children:Object(f.jsxs)("h2",{children:["Please Pay Rs 20 to UPI",Object(f.jsx)("br",{}),"9001959788 (Sachin Kumar)"]})})};a(189);var S=function(){return Object(f.jsx)(o.a,{children:Object(f.jsxs)(l.a,{children:[Object(f.jsx)(i.a,{exact:!0,path:"/",component:C}),Object(f.jsx)(i.a,{exact:!0,path:"/join",component:I}),Object(f.jsx)(i.a,{exact:!0,path:"/submitted",component:w})]})})},$=a(156),L=a(161),k=a(162),_=a(210),N=Object(k.a)({uri:"https://sdi-react-app.herokuapp.com"}),B=new $.a({link:N,cache:new L.a}),E=Object(f.jsx)(_.a,{client:B,children:Object(f.jsx)(S,{})});r.a.render(E,document.getElementById("root"))}},[[191,1,2]]]);
//# sourceMappingURL=main.23b7d731.chunk.js.map