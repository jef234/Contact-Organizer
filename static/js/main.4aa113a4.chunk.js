(this.webpackJsonpcontact_organizer=this.webpackJsonpcontact_organizer||[]).push([[0],{40:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},43:function(e,a,t){e.exports=t(74)},48:function(e,a,t){},72:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(20),c=t.n(o),l=(t(48),t(13)),s=t(15),i=t(6),m=t(7),p=t(9),u=t(8),h=t(11),d=t.n(h),b=t(16),v=t(4),f=t.n(v),E=t(17),y=t.n(E),g=function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={showContactInfo:!1},e.onShowClick=function(a){e.setState({showContactInfo:!e.state.showContactInfo})},e.onDeleteClick=function(){var e=Object(b.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),e}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props.contact,a=e.id,t=e.name,n=e.email,o=e.phone,c=this.state.showContactInfo;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,t,"\xa0",r.a.createElement("i",{onClick:this.onShowClick,className:c?"fas fa-caret-square-up":"far fa-caret-square-down",style:{cursor:"pointer"}}),r.a.createElement("i",{onClick:this.onDeleteClick.bind(this,a),className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"}}),r.a.createElement(l.b,{to:"/Contacts/Edit/".concat(a)},r.a.createElement("i",{className:"fas fa-pencil-alt mr-3",style:{cursor:"pointer",float:"right",color:"black",fontSize:"1.17rem"}}))),c?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",n),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o)):null)}}]),t}(n.Component);g.protoType={contact:f.a.object.isRequired};var N=g,C=t(22),O=function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.getContacts()}},{key:"render",value:function(){var e=this.props.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-3"},r.a.createElement("span",{className:"text-danger"},"Contacts")," List"),e.map((function(e){return r.a.createElement(N,{key:e.id,contact:e})})))}}]),t}(n.Component);O.protoTypes={contacts:f.a.array.isRequired,getContacts:f.a.func.isRequired};var j=Object(C.b)((function(e){return{contacts:e.contact.contacts}}),(function(e){return{getContacts:function(){return e({type:"GET_CONTACTS"})}}}))(O),k=t(18),w=t(39),S=t.n(w);function x(e){var a=e.label,t=e.name,n=e.value,o=e.placeholder,c=e.type,l=e.onChange,s=e.error,i=e.onKeyUp;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{type:c,name:t,className:S()("form-control form-control-lg",{"is-invalid":s}),placeholder:o,value:n,onChange:l,onKeyUp:i}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))}x.defaultProps={type:"text"};var _=x,U=function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.validate_keys=function(){var a,t,n,r=e.state,o=0;return""===r.name&&(a="Name is required",o=1),""===r.email&&(t="Email is required",o=1),""===r.phone&&(n="Phone is required",o=1),e.setState({errors:{name:a,email:t,phone:n}}),o},e.onSubmit=function(){var a=Object(b.a)(d.a.mark((function a(t){var n,r,o,c,l;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),n=e.state,r=n.name,o=n.email,c=n.phone,1!==e.validate_keys()){a.next=4;break}return a.abrupt("return");case 4:return l={name:r,email:o,phone:c},a.next=7,y.a.post("https://jsonplaceholder.typicode.com/users",l);case 7:a.sent,e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.onChange=function(a){return e.setState(Object(k.a)({},a.target.name,a.target.value))},e.onKeyUp=function(a){return e.validate_keys()},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,n=e.phone,o=e.errors;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-3 mt-2"},r.a.createElement("span",{className:"text-danger"},"Add")," Contact"),r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(_,{label:"Name",name:"name",placeholder:"Enter Name..",value:a,onChange:this.onChange,error:o.name,onKeyUp:this.onKeyUp}),r.a.createElement(_,{label:"Email",name:"email",type:"email",placeholder:"Enter Email..",value:t,onChange:this.onChange,error:o.email,onKeyUp:this.onKeyUp}),r.a.createElement(_,{label:"Phone",name:"phone",placeholder:"Enter Phone..",value:n,onChange:this.onChange,error:o.phone,onKeyUp:this.onKeyUp}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"})))))}}]),t}(n.Component),K=function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.validate_keys=function(){var a,t,n,r=e.state,o=0;return""===r.name&&(a="Name is required",o=1),""===r.email&&(t="Email is required",o=1),""===r.phone&&(n="Phone is required",o=1),e.setState({errors:{name:a,email:t,phone:n}}),o},e.onSubmit=function(){var a=Object(b.a)(d.a.mark((function a(t){var n,r,o,c,l,s;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),1!==e.validate_keys()){a.next=3;break}return a.abrupt("return");case 3:return n=e.state,r=n.name,o=n.email,c=n.phone,l={name:r,email:o,phone:c},s=e.props.match.params.id,a.next=8,y.a.put("https://jsonplaceholder.typicode.com/users/".concat(s),l);case 8:a.sent,e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 11:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.onChange=function(a){return e.setState(Object(k.a)({},a.target.name,a.target.value))},e.onKeyUp=function(a){return e.validate_keys()},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(d.a.mark((function e(){var a,t,n,r,o,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,y.a.get("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t=e.sent,n=t.data,r=n.name,o=n.email,c=n.phone,this.setState({name:r,email:o,phone:c});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,n=e.phone,o=e.errors;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-3 mt-2"},r.a.createElement("span",{className:"text-danger"},"Edit")," Contact"),r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(_,{label:"Name",name:"name",placeholder:"Enter Name..",value:a,onChange:this.onChange,error:o.name,onKeyUp:this.onKeyUp}),r.a.createElement(_,{label:"Email",name:"email",type:"email",placeholder:"Enter Email..",value:t,onChange:this.onChange,error:o.email,onKeyUp:this.onKeyUp}),r.a.createElement(_,{label:"Phone",name:"phone",placeholder:"Enter Phone..",value:n,onChange:this.onChange,error:o.phone,onKeyUp:this.onKeyUp}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"})))))}}]),t}(n.Component),A=t(40),q=t.n(A),T=function(e){var a=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-2"},r.a.createElement("div",{className:"container"},r.a.createElement("img",{width:"50",className:"text-danger",src:q.a,alt:"React Logo"}),r.a.createElement(l.b,{to:"/",className:"navbar-brand"},a),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{id:"navbarSupportedContent",className:"collapse navbar-collapse justify-content-end"},r.a.createElement("ul",{className:"navbar-nav","data-toggle":"collapse","data-target":"#navbarSupportedContent"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/Contacts/Add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus-square"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/About",className:"nav-link"},r.a.createElement("i",{className:"fas fa-info-circle"})," About"))))))};T.defaultProps={branding:"My App"},T.prototype={branding:f.a.string.isRequired};var D=T,P=function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"display-4 mb-3"},r.a.createElement("span",{className:"text-danger"},"About")," Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Developer : Jeffrey Rajkumar"),r.a.createElement("p",{className:"text-secondary"},"Version : 2.0.0"))}}]),t}(n.Component),R=function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"display-4 mb-3"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist"))}}]),t}(n.Component),I=t(14),F=t(41),J=t(42),M={contacts:[{id:1,name:"John Doe",email:"john@gmail.com",phone:"555-555-5555"},{id:2,name:"Karen Williams",email:"karen@gmail.com",phone:"444-444-4444"},{id:3,name:"Henry Johnson",email:"henry@gmail.com",phone:"333-333-333"}]},z=Object(I.c)({contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_CONTACTS":return Object(J.a)({},e);default:return e}}}),L=[F.a],X=Object(I.e)(z,{},Object(I.d)(I.a.apply(void 0,L),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));t(72),t(73);var V=function(){return r.a.createElement(C.a,{store:X},r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(D,{branding:"Contact Organizer"}),r.a.createElement("div",{className:"container"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:j}),r.a.createElement(s.a,{exact:!0,path:"/Contacts/Add",component:U}),r.a.createElement(s.a,{exact:!0,path:"/Contacts/Edit/:id",component:K}),r.a.createElement(s.a,{exact:!0,path:"/About",component:P}),r.a.createElement(s.a,{exact:!0,component:R}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.4aa113a4.chunk.js.map