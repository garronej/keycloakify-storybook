"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[335],{5335:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var r=a(885),s=a(390),l=a(7213),n=a(502),o=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]])}return a};function c(e){var t=e.kcContext,a=e.i18n,c=e.doFetchDefaultThemeResources,i=void 0===c||c,m=e.Template,d=o(e,["kcContext","i18n","doFetchDefaultThemeResources","Template"]),u=t.social,p=t.realm,k=t.url,b=t.usernameEditDisabled,f=t.login,v=t.auth,E=t.registrationDisabled,C=a.msg,g=a.msgStr,h=(0,s.useState)(!1),y=(0,r.Z)(h,2),w=y[0],F=y[1],N=(0,n.O)((function(e){var t;e.preventDefault(),F(!0);var a=e.target;null===(t=a.querySelector("input[name='email']"))||void 0===t||t.setAttribute("name","username"),a.submit()}));return s.createElement(m,Object.assign({},Object.assign({kcContext:t,i18n:a,doFetchDefaultThemeResources:i},d),{displayInfo:u.displayInfo,displayWide:p.password&&void 0!==u.providers,headerNode:C("doLogIn"),formNode:s.createElement("div",{id:"kc-form",className:(0,l.W)(p.password&&void 0!==u.providers&&d.kcContentWrapperClass)},s.createElement("div",{id:"kc-form-wrapper",className:(0,l.W)(p.password&&u.providers&&[d.kcFormSocialAccountContentClass,d.kcFormSocialAccountClass])},p.password&&s.createElement("form",{id:"kc-form-login",onSubmit:N,action:k.loginAction,method:"post"},s.createElement("div",{className:(0,l.W)(d.kcFormGroupClass)},function(){var e,t=p.loginWithEmailAllowed?p.registrationEmailAsUsername?"email":"usernameOrEmail":"username",a="usernameOrEmail"===t?"username":t;return s.createElement(s.Fragment,null,s.createElement("label",{htmlFor:a,className:(0,l.W)(d.kcLabelClass)},C(t)),s.createElement("input",Object.assign({tabIndex:1,id:a,className:(0,l.W)(d.kcInputClass),name:a,defaultValue:null!==(e=f.username)&&void 0!==e?e:"",type:"text"},b?{disabled:!0}:{autoFocus:!0,autoComplete:"off"})))}()),s.createElement("div",{className:(0,l.W)(d.kcFormGroupClass)},s.createElement("label",{htmlFor:"password",className:(0,l.W)(d.kcLabelClass)},C("password")),s.createElement("input",{tabIndex:2,id:"password",className:(0,l.W)(d.kcInputClass),name:"password",type:"password",autoComplete:"off"})),s.createElement("div",{className:(0,l.W)(d.kcFormGroupClass,d.kcFormSettingClass)},s.createElement("div",{id:"kc-form-options"},p.rememberMe&&!b&&s.createElement("div",{className:"checkbox"},s.createElement("label",null,s.createElement("input",Object.assign({tabIndex:3,id:"rememberMe",name:"rememberMe",type:"checkbox"},f.rememberMe?{checked:!0}:{})),C("rememberMe")))),s.createElement("div",{className:(0,l.W)(d.kcFormOptionsWrapperClass)},p.resetPasswordAllowed&&s.createElement("span",null,s.createElement("a",{tabIndex:5,href:k.loginResetCredentialsUrl},C("doForgotPassword"))))),s.createElement("div",{id:"kc-form-buttons",className:(0,l.W)(d.kcFormGroupClass)},s.createElement("input",Object.assign({type:"hidden",id:"id-hidden-input",name:"credentialId"},void 0!==(null===v||void 0===v?void 0:v.selectedCredential)?{value:v.selectedCredential}:{})),s.createElement("input",{tabIndex:4,className:(0,l.W)(d.kcButtonClass,d.kcButtonPrimaryClass,d.kcButtonBlockClass,d.kcButtonLargeClass),name:"login",id:"kc-login",type:"submit",value:g("doLogIn"),disabled:w})))),p.password&&void 0!==u.providers&&s.createElement("div",{id:"kc-social-providers",className:(0,l.W)(d.kcFormSocialAccountContentClass,d.kcFormSocialAccountClass)},s.createElement("ul",{className:(0,l.W)(d.kcFormSocialAccountListClass,u.providers.length>4&&d.kcFormSocialAccountDoubleListClass)},u.providers.map((function(e){return s.createElement("li",{key:e.providerId,className:(0,l.W)(d.kcFormSocialAccountListLinkClass)},s.createElement("a",{href:e.loginUrl,id:"zocial-".concat(e.alias),className:(0,l.W)("zocial",e.providerId)},s.createElement("span",null,e.displayName)))}))))),infoNode:p.password&&p.registrationAllowed&&!E&&s.createElement("div",{id:"kc-registration"},s.createElement("span",null,C("noAccount"),s.createElement("a",{tabIndex:6,href:k.registrationUrl},C("doRegister"))))}))}}}]);
//# sourceMappingURL=335.ddf9528b.chunk.js.map