"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[47],{8047:function(e,a,t){t.r(a),t.d(a,{default:function(){return E}});var n=t(9439),r=t(241),i=t(3161),s=t(2791),c=t(9434),o=t(2542),l=t(6916),d=function(e){return e.contacts.items},u=function(e){return e.contacts.isLoading},m=(0,l.P1)([d,function(e){return e.contacts.filter}],(function(e,a){return e.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))})),f=t(184),v=function(){var e=(0,s.useState)(""),a=(0,n.Z)(e,2),t=a[0],l=a[1],u=(0,s.useState)(""),m=(0,n.Z)(u,2),v=m[0],b=m[1],h=(0,c.I0)(),p=(0,c.v9)(d),x=function(e){var a=e.target,t=a.name,n=a.value;switch(t){case"name":l(n);break;case"number":b(n)}};return(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=p.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}));if(a)alert("Contact already exist");else{var n={name:t,number:v};h((0,o.el)(n)),l(""),b("")}},children:[(0,f.jsxs)(i.Z,{className:"mb-3",children:[(0,f.jsx)(i.Z.Text,{id:"inputGroup-sizing-default",children:"Name"}),(0,f.jsx)(r.Z.Control,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",type:"text",name:"name",value:t,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:x})]}),(0,f.jsxs)(i.Z,{className:"mb-3",children:[(0,f.jsx)(i.Z.Text,{id:"inputGroup-sizing-default",children:"Number"}),(0,f.jsx)(r.Z.Control,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",type:"tel",name:"number",value:v,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:x})]}),(0,f.jsx)("button",{style:{minWidth:"100px",borderRadius:"8px",backgroundClip:"#6c757d"},children:"Add contact"})]})},b=t(5440),h=function(){var e=(0,c.I0)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("p",{children:"Finde contacts by name"}),(0,f.jsxs)(i.Z,{className:"mb-3",style:{maxWidth:"300px",marginLeft:"auto",marginRight:"auto"},children:[(0,f.jsx)(i.Z.Text,{id:"inputGroup-sizing-default",children:"Search"}),(0,f.jsx)(r.Z.Control,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",type:"text",name:"filter",onChange:function(a){return e((0,b.a8)(a.target.value))}})]})]})},p=t(1413),x=t(5987),j=t(1694),Z=t.n(j),g=t(5341),y=t(162),C=["as","bsPrefix","variant","size","active","disabled","className"],N=s.forwardRef((function(e,a){var t=e.as,r=e.bsPrefix,i=e.variant,s=void 0===i?"primary":i,c=e.size,o=e.active,l=void 0!==o&&o,d=e.disabled,u=void 0!==d&&d,m=e.className,v=(0,x.Z)(e,C),b=(0,y.vE)(r,"btn"),h=(0,g.FT)((0,p.Z)({tagName:t,disabled:u},v)),j=(0,n.Z)(h,2),N=j[0],k=j[1].tagName;return(0,f.jsx)(k,(0,p.Z)((0,p.Z)((0,p.Z)({},N),v),{},{ref:a,disabled:u,className:Z()(m,b,l&&"active",s&&"".concat(b,"-").concat(s),c&&"".concat(b,"-").concat(c),v.href&&u&&"disabled")}))}));N.displayName="Button";var k=N,w=(t(2391),t(8580)),z=t(7503),P=t(9007),I=t(4787),L=t(8633),G=["bsPrefix","active","disabled","eventKey","className","variant","action","as"],D=s.forwardRef((function(e,a){var t=e.bsPrefix,r=e.active,i=e.disabled,s=e.eventKey,c=e.className,o=e.variant,l=e.action,d=e.as,u=(0,x.Z)(e,G);t=(0,y.vE)(t,"list-group-item");var m=(0,I.v)((0,p.Z)({key:(0,L.h)(s,u.href),active:r},u)),v=(0,n.Z)(m,2),b=v[0],h=v[1],j=(0,P.Z)((function(e){if(i)return e.preventDefault(),void e.stopPropagation();b.onClick(e)}));i&&void 0===u.tabIndex&&(u.tabIndex=-1,u["aria-disabled"]=!0);var g=d||(l?u.href?"a":"button":"div");return(0,f.jsx)(g,(0,p.Z)((0,p.Z)((0,p.Z)({ref:a},u),b),{},{onClick:j,className:Z()(c,t,h.isActive&&"active",i&&"disabled",o&&"".concat(t,"-").concat(o),l&&"".concat(t,"-action"))}))}));D.displayName="ListGroupItem";var F=D,R=["className","bsPrefix","variant","horizontal","numbered","as"],S=s.forwardRef((function(e,a){var t,n=(0,w.Ch)(e,{activeKey:"onSelect"}),r=n.className,i=n.bsPrefix,s=n.variant,c=n.horizontal,o=n.numbered,l=n.as,d=void 0===l?"div":l,u=(0,x.Z)(n,R),m=(0,y.vE)(i,"list-group");return c&&(t=!0===c?"horizontal":"horizontal-".concat(c)),(0,f.jsx)(z.Z,(0,p.Z)((0,p.Z)({ref:a},u),{},{as:d,className:Z()(r,m,s&&"".concat(m,"-").concat(s),t&&"".concat(m,"-").concat(t),o&&"".concat(m,"-numbered"))}))}));S.displayName="ListGroup";var _=Object.assign(S,{Item:F}),A=function(){var e=(0,c.v9)(u),a=(0,c.I0)(),t=(0,c.v9)(m);return(0,s.useEffect)((function(){a((0,o.yF)())}),[a]),(0,f.jsxs)(_,{as:"ul",children:[e&&(0,f.jsx)(_.Item,{children:(0,f.jsx)("p",{children:"Loading..."})}),t.map((function(e,t){return(0,f.jsxs)(_.Item,{as:"li",children:[(0,f.jsxs)("p",{children:[e.name,": ",e.number]}),(0,f.jsx)(k,{variant:"secondary",type:"button",name:e.id,onClick:function(){return a((0,o._f)(e.id))},children:"Delete"})]},t+1)}))]})},E=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{children:"Phonebook"}),(0,f.jsx)(v,{}),(0,f.jsx)("h2",{children:"Contacts"}),(0,f.jsx)(h,{}),(0,f.jsx)(A,{})]})}}}]);
//# sourceMappingURL=47.991da1e8.chunk.js.map