"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[9523],{9523:function(e,s,r){r.r(s),r.d(s,{default:function(){return m}});var a=r(1413),o=r(885),i=r(4925),l=r(2791),n=r(8030),t=r(1842),c=r(184),d=["kcContext","i18n","doFetchDefaultThemeResources","Template"];function m(e){var s=e.kcContext,r=e.i18n,m=e.doFetchDefaultThemeResources,u=void 0===m||m,p=e.Template,h=(0,i.Z)(e,d),k=s.social,f=s.realm,x=s.url,v=s.usernameEditDisabled,b=s.login,C=s.auth,j=s.registrationDisabled,g=r.msg,y=r.msgStr,w=(0,l.useState)(!1),F=(0,o.Z)(w,2),N=F[0],W=F[1],I=(0,t.O)((function(e){var s;e.preventDefault(),W(!0);var r=e.target;null===(s=r.querySelector("input[name='email']"))||void 0===s||s.setAttribute("name","username"),r.submit()}));return(0,c.jsx)(p,(0,a.Z)((0,a.Z)({},(0,a.Z)({kcContext:s,i18n:r,doFetchDefaultThemeResources:u},h)),{},{displayInfo:k.displayInfo,displayWide:f.password&&void 0!==k.providers,headerNode:g("doLogIn"),formNode:(0,c.jsxs)("div",{id:"kc-form",className:(0,n.W)(f.password&&void 0!==k.providers&&h.kcContentWrapperClass),children:[(0,c.jsx)("div",{id:"kc-form-wrapper",className:(0,n.W)(f.password&&k.providers&&[h.kcFormSocialAccountContentClass,h.kcFormSocialAccountClass]),children:f.password&&(0,c.jsxs)("form",{id:"kc-form-login",onSubmit:I,action:x.loginAction,method:"post",children:[(0,c.jsx)("div",{className:(0,n.W)(h.kcFormGroupClass),children:function(){var e,s=f.loginWithEmailAllowed?f.registrationEmailAsUsername?"email":"usernameOrEmail":"username",r="usernameOrEmail"===s?"username":s;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("label",{htmlFor:r,className:(0,n.W)(h.kcLabelClass),children:g(s)}),(0,c.jsx)("input",(0,a.Z)({tabIndex:1,id:r,className:(0,n.W)(h.kcInputClass),name:r,defaultValue:null!==(e=b.username)&&void 0!==e?e:"",type:"text"},v?{disabled:!0}:{autoFocus:!0,autoComplete:"off"}))]})}()}),(0,c.jsxs)("div",{className:(0,n.W)(h.kcFormGroupClass),children:[(0,c.jsx)("label",{htmlFor:"password",className:(0,n.W)(h.kcLabelClass),children:g("password")}),(0,c.jsx)("input",{tabIndex:2,id:"password",className:(0,n.W)(h.kcInputClass),name:"password",type:"password",autoComplete:"off"})]}),(0,c.jsxs)("div",{className:(0,n.W)(h.kcFormGroupClass,h.kcFormSettingClass),children:[(0,c.jsx)("div",{id:"kc-form-options",children:f.rememberMe&&!v&&(0,c.jsx)("div",{className:"checkbox",children:(0,c.jsxs)("label",{children:[(0,c.jsx)("input",(0,a.Z)({tabIndex:3,id:"rememberMe",name:"rememberMe",type:"checkbox"},b.rememberMe?{checked:!0}:{})),g("rememberMe")]})})}),(0,c.jsx)("div",{className:(0,n.W)(h.kcFormOptionsWrapperClass),children:f.resetPasswordAllowed&&(0,c.jsx)("span",{children:(0,c.jsx)("a",{tabIndex:5,href:x.loginResetCredentialsUrl,children:g("doForgotPassword")})})})]}),(0,c.jsxs)("div",{id:"kc-form-buttons",className:(0,n.W)(h.kcFormGroupClass),children:[(0,c.jsx)("input",(0,a.Z)({type:"hidden",id:"id-hidden-input",name:"credentialId"},void 0!==(null===C||void 0===C?void 0:C.selectedCredential)?{value:C.selectedCredential}:{})),(0,c.jsx)("input",{tabIndex:4,className:(0,n.W)(h.kcButtonClass,h.kcButtonPrimaryClass,h.kcButtonBlockClass,h.kcButtonLargeClass),name:"login",id:"kc-login",type:"submit",value:y("doLogIn"),disabled:N})]})]})}),f.password&&void 0!==k.providers&&(0,c.jsx)("div",{id:"kc-social-providers",className:(0,n.W)(h.kcFormSocialAccountContentClass,h.kcFormSocialAccountClass),children:(0,c.jsx)("ul",{className:(0,n.W)(h.kcFormSocialAccountListClass,k.providers.length>4&&h.kcFormSocialAccountDoubleListClass),children:k.providers.map((function(e){return(0,c.jsx)("li",{className:(0,n.W)(h.kcFormSocialAccountListLinkClass),children:(0,c.jsx)("a",{href:e.loginUrl,id:"zocial-".concat(e.alias),className:(0,n.W)("zocial",e.providerId),children:(0,c.jsx)("span",{children:e.displayName})})},e.providerId)}))})})]}),infoNode:f.password&&f.registrationAllowed&&!j&&(0,c.jsx)("div",{id:"kc-registration",children:(0,c.jsxs)("span",{children:[g("noAccount"),(0,c.jsx)("a",{tabIndex:6,href:x.registrationUrl,children:g("doRegister")})]})})}))}},4925:function(e,s,r){function a(e,s){if(null==e)return{};var r,a,o=function(e,s){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],s.indexOf(r)>=0||(o[r]=e[r]);return o}(e,s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],s.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(s,{Z:function(){return a}})}}]);
//# sourceMappingURL=9523.4b404671.chunk.js.map