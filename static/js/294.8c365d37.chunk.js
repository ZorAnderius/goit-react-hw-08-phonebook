"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[294],{4294:function(t,e,n){n.r(e),n.d(e,{default:function(){return et}});var r,a=n(2791),o={"phonebook-title":"Title_phonebook-title__4+WKQ","contact-title":"Title_contact-title__aPJ1H"},c=n(184),l=function(t){var e=t.title,n=t.title_style;return(0,c.jsx)("p",{className:o[n],children:e})},i={"first-container":"Section_first-container__LCLgb","second-container":"Section_second-container__eRA13"},s=function(t){var e=t.title,n=t.styles,r=t.children;return(0,c.jsxs)("div",{className:i[n.container],children:[(0,c.jsx)(l,{title:e,title_style:n.title}),r]})},u=n(9439),_=n(5984),d="ContsctForm_contact_form__GUuki",m="ContsctForm_contact_label__d7RWs",h="ContsctForm_contact_name_input__FFiaB",f="ContsctForm_contact_number_input__N3J5F",p="ContsctForm_contact_submit_btn__BHXMJ",v=function(t){var e=t.addContact,n=(0,a.useState)(""),r=(0,u.Z)(n,2),o=r[0],l=r[1],i=(0,a.useState)(""),s=(0,u.Z)(i,2),v=s[0],x=s[1],b=(0,_.x0)(),j=(0,_.x0)(),g=function(t){var e=t.target,n=e.name,r=e.value;"name"===n&&l(r),"number"===n&&x(r)},C=function(){l(""),x("")};return(0,c.jsxs)("form",{className:d,onSubmit:function(t){t.preventDefault(),console.log("name",o),console.log("number",v),e({id:(0,_.x0)(),name:o,number:v}),C()},children:[(0,c.jsx)("label",{className:m,htmlFor:b,children:"Name"}),(0,c.jsx)("input",{className:h,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",id:b,value:o,onChange:g,required:!0}),(0,c.jsx)("label",{className:m,htmlFor:j,children:"Number"}),(0,c.jsx)("input",{className:f,type:"tel",name:"number",id:j,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:v,onChange:g,required:!0}),(0,c.jsx)("button",{className:p,type:"submit",children:"Add contact"})]})},x=n(9434),b="Filter_filter_container__f0O5y",j="Filter_filter_label__5ITod",g="Filter_filter_input__eu2zm",C=n(6916),w=function(t){return t.filter},y=(0,C.P1)([function(t){return t.contacts},w],(function(t,e){var n;return null===(n=t.contacts)||void 0===n?void 0:n.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),N=n(4808),L=function(){var t=(0,x.I0)(),e=(0,x.v9)(w);return(0,c.jsxs)("div",{className:b,children:[(0,c.jsx)("label",{className:j,children:"Find contacts by the name"}),(0,c.jsx)("input",{className:g,type:"text",value:e,onChange:function(e){return t((0,N.yg)(e.currentTarget.value))}})]})},F="Notification_message__iUHOw",k=function(t){var e=t.message;return(0,c.jsx)("div",{className:F,children:e})},O="ContactList_contact_list__tnyRS",S="ContactList_contact_item__MaQF6",E="ContactList_contact_text_wrap__1iVFq",P="ContactList_contact_name__Jt8ih",I="ContactList_contact_number__IPN+-",z="ContactList_contact_delete_btn__N695g",A=n(7388),J=function(t){var e=t.contacts,n=(0,x.I0)();return(null===e||void 0===e?void 0:e.length)?(0,c.jsx)("ul",{className:O,children:e.map((function(t){var e=t.id,r=t.name,a=t.number;return(0,c.jsxs)("li",{className:S,children:[(0,c.jsxs)("div",{className:E,children:[(0,c.jsx)("p",{className:P,children:r}),(0,c.jsx)("p",{className:I,children:a})]}),(0,c.jsx)("button",{className:z,onClick:function(){return t=e,void n((0,A.xX)(t));var t},children:"Remove"})]},e)}))}):(0,c.jsx)(k,{message:"No matches found"})},U="ContactsDetails_main_container__p7J3h",Z="Loader_loader_wraper__g0mr1",M="Loader_container__X02md",R=n(643),q=function(){return(0,c.jsx)("div",{className:Z,children:(0,c.jsx)("div",{className:M,children:(0,c.jsx)(R.yk,{height:"200",width:"200",color:"rgb(98, 98, 133)",wrapperStyle:{},wrapperClass:"",visible:!0,outerCircleColor:"",innerCircleColor:"",barColor:"",ariaLabel:"circles-with-bar-loading"})})})},B=n(2187),T="ScrollUp_styles__OadpF",X="ScrollUp_up_arrow_wrap__uYyg3",H="ScrollUp_up_arrow__qvbQ5",Q=["title","titleId"];function D(){return D=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},D.apply(this,arguments)}function V(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function W(t,e){var n=t.title,o=t.titleId,c=V(t,Q);return a.createElement("svg",D({fill:"#000000",height:"800px",width:"800px",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 511.801 511.801",xmlSpace:"preserve",ref:e,"aria-labelledby":o},c),n?a.createElement("title",{id:o},n):null,r||(r=a.createElement("g",null,a.createElement("g",null,a.createElement("g",null,a.createElement("path",{d:"M263.535,248.453c-4.16-4.16-10.88-4.16-15.04,0L3.054,493.787c-4.053,4.267-3.947,10.987,0.213,15.04 c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213 c3.947-4.16,3.947-10.667,0-14.827L263.535,248.453z"}),a.createElement("path",{d:"M18.201,263.493l237.76-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213c3.947-4.16,3.947-10.667,0-14.827 L263.535,3.12c-4.16-4.16-10.88-4.16-15.04,0L3.054,248.453c-4.053,4.267-3.947,10.987,0.213,15.04 C7.534,267.547,14.041,267.547,18.201,263.493z"}))))))}var G=a.forwardRef(W),K=(n.p,function(){return(0,c.jsx)(B.Z,{className:T,showUnder:160,children:(0,c.jsx)("div",{className:X,children:(0,c.jsx)(G,{className:H,width:"36",height:"36"})})})}),Y=n(2056),$=n(7689),tt=function(){var t=(0,x.v9)(Y.a),e=(0,x.v9)(Y.v),n=(0,x.v9)(y),r=(0,x.I0)();(0,a.useEffect)((function(){r((0,A.VC)())}),[r]);return console.log("error",e),e?(0,c.jsx)($.Fg,{to:"error"}):(0,c.jsxs)("div",{className:U,children:[(0,c.jsx)(s,{title:"Phonebook",styles:{title:"phonebook-title",container:"first-container"},children:(0,c.jsx)(v,{addContact:function(t){console.log("object",n),n.find((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))?alert("Sorry, but the contact ".concat(t.name," is already in your phone book ")):r((0,A.je)(t))}})}),(0,c.jsxs)(s,{title:"Contacts",styles:{title:"contact-title",container:"second-container"},children:[(0,c.jsx)(L,{}),t?(0,c.jsx)(q,{}):null!==n&&void 0!==n&&n.length?(0,c.jsx)(J,{contacts:n}):(0,c.jsx)(k,{message:"Phonebook is empty"})]}),(0,c.jsx)(K,{})]})},et=function(){return(0,c.jsx)(tt,{})}},2056:function(t,e,n){n.d(e,{a:function(){return r},v:function(){return a}});var r=function(t){return t.root.isLoading},a=function(t){return t.root.error}}}]);
//# sourceMappingURL=294.8c365d37.chunk.js.map