"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[7750],{5824:function(e,a,r){r.d(a,{v:function(){return o}});var t=r(9877),s=r(1389);var o=function(e){var a=e.defaultClasses;return{useGetClassName:function(e){var r=e.classes;return{getClassName:(0,s.O)((function(e){return(0,t.W)(e,a[e],null===r||void 0===r?void 0:r[e])}))}}}}({defaultClasses:{kcHtmlClass:"login-pf",kcLoginClass:"login-pf-page",kcContentWrapperClass:"row",kcHeaderClass:"login-pf-page-header",kcHeaderWrapperClass:void 0,kcFormCardClass:"card-pf",kcFormCardAccountClass:"login-pf-accounts",kcFormSocialAccountClass:"login-pf-social-section",kcFormSocialAccountContentClass:"col-xs-12 col-sm-6",kcFormHeaderClass:"login-pf-header",kcLocaleWrapperClass:void 0,kcFeedbackErrorIcon:"pficon pficon-error-circle-o",kcFeedbackWarningIcon:"pficon pficon-warning-triangle-o",kcFeedbackSuccessIcon:"pficon pficon-ok",kcFeedbackInfoIcon:"pficon pficon-info",kcResetFlowIcon:"pficon pficon-arrow fa-2x",kcFormGroupClass:"form-group",kcLabelWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcSignUpClass:"login-pf-signup",kcInfoAreaWrapperClass:void 0,kcLogoClass:"login-pf-brand",kcContainerClass:"container-fluid",kcContentClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3",kcFeedbackAreaClass:"col-md-12",kcLocaleClass:"col-xs-12 col-sm-1",kcAlertIconClasserror:"pficon pficon-error-circle-o",kcFormAreaClass:"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",kcFormSocialAccountListClass:"login-pf-social list-unstyled login-pf-social-all",kcFormSocialAccountDoubleListClass:"login-pf-social-double-col",kcFormSocialAccountListLinkClass:"login-pf-social-link",kcWebAuthnKeyIcon:"pficon pficon-key",kcWebAuthnDefaultIcon:"pficon pficon-key",kcFormClass:"form-horizontal",kcFormGroupErrorClass:"has-error",kcLabelClass:"control-label",kcInputClass:"form-control",kcInputErrorMessageClass:"pf-c-form__helper-text pf-m-error required kc-feedback-text",kcInputWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormOptionsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormSettingClass:"login-pf-settings",kcTextareaClass:"form-control",kcInfoAreaClass:"col-xs-12 col-sm-4 col-md-4 col-lg-5 details",kcFormGroupHeader:"pf-c-form__group",kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonDefaultClass:"btn-default",kcButtonLargeClass:"btn-lg",kcButtonBlockClass:"btn-block",kcInputLargeClass:"input-lg",kcSrOnlyClass:"sr-only",kcSelectAuthListClass:"list-group list-view-pf",kcSelectAuthListItemClass:"list-group-item list-view-pf-stacked",kcSelectAuthListItemFillClass:"pf-l-split__item pf-m-fill",kcSelectAuthListItemIconPropertyClass:"fa-2x select-auth-box-icon-properties",kcSelectAuthListItemIconClass:"pf-l-split__item select-auth-box-icon",kcSelectAuthListItemTitle:"select-auth-box-paragraph",kcSelectAuthListItemInfoClass:"list-view-pf-main-info",kcSelectAuthListItemLeftClass:"list-view-pf-left",kcSelectAuthListItemBodyClass:"list-view-pf-body",kcSelectAuthListItemDescriptionClass:"list-view-pf-description",kcSelectAuthListItemHeadingClass:"list-group-item-heading",kcSelectAuthListItemHelpTextClass:"list-group-item-text",kcAuthenticatorDefaultClass:"fa list-view-pf-icon-lg",kcAuthenticatorPasswordClass:"fa fa-unlock list-view-pf-icon-lg",kcAuthenticatorOTPClass:"fa fa-mobile list-view-pf-icon-lg",kcAuthenticatorWebAuthnClass:"fa fa-key list-view-pf-icon-lg",kcAuthenticatorWebAuthnPasswordlessClass:"fa fa-key list-view-pf-icon-lg",kcSelectOTPListClass:"card-pf card-pf-view card-pf-view-select card-pf-view-single-select",kcSelectOTPListItemClass:"card-pf-body card-pf-top-element",kcAuthenticatorOtpCircleClass:"fa fa-mobile card-pf-icon-circle",kcSelectOTPItemHeadingClass:"card-pf-title text-center",kcFormOptionsWrapperClass:void 0}}).useGetClassName},4888:function(e,a,r){r.d(a,{M:function(){return f}});var t=r(2559),s=r(390),o=r(9877),n=r(4942),i=r(885),l=r(2982),c=(r(9902),r(810)),u=r(1389),p=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;function d(e){var a=e.kcContext,r=e.passwordValidators,o=void 0===r?{length:{"ignore.empty.value":!0,min:"4"}}:r,d=e.i18n,f=(0,s.useMemo)((function(){return a.passwordRequired?function(){var e=a.realm.registrationEmailAsUsername?"email":"username";return a.profile.attributes.reduce((function(a,r){return[].concat((0,l.Z)(a),(0,l.Z)(r.name!==e?[r]:[r,(0,c.id)({name:"password",displayName:(0,c.id)("${password}"),required:!0,readOnly:!1,validators:o,annotations:{},groupAnnotations:{},autocomplete:"new-password"}),(0,c.id)({name:"password-confirm",displayName:(0,c.id)("${passwordConfirm}"),required:!0,readOnly:!1,validators:{_compareToOther:{name:"password","ignore.empty.value":!0,shouldBe:"equal","error-message":(0,c.id)("${invalidPasswordConfirmMessage}")}},annotations:{},groupAnnotations:{},autocomplete:"new-password"})]))}),[])}():a.profile.attributes}),[a,o]),m=function(e){var a=e.kcContext,r=e.i18n,o=a.messagesPerField,n=a.profile.attributes,i=r.msg,l=r.msgStr,d=r.advancedMsg,f=r.advancedMsgStr,m=(0,u.O)((function(e){var a,r=e.name,u=e.fieldValueByAttributeName,m=u[r].value,v=n.find((function(e){return e.name===r})),g=v.value,h=v.validators;e:if(g===m){var k;try{k=o.existsError(r)}catch(le){break e}if(k){var b=o.get(r);return[{validatorName:void 0,errorMessageStr:b,errorMessage:(0,t.jsx)("span",{children:b},0)}]}}var C=[],y="length",x=h[y];if(void 0!==x){var j=x["ignore.empty.value"],w=void 0!==j&&j,A=x.max,F=x.min;if(!w||""!==m){if(void 0!==A&&m.length>parseInt(A)){var S=["error-invalid-length-too-long",A];C.push({errorMessage:(0,t.jsx)(s.Fragment,{children:i.apply(void 0,S)},C.length),errorMessageStr:l.apply(void 0,S),validatorName:y})}if(void 0!==F&&m.length<parseInt(F)){var O=["error-invalid-length-too-short",F];C.push({errorMessage:(0,t.jsx)(s.Fragment,{children:i.apply(void 0,O)},C.length),errorMessageStr:l.apply(void 0,O),validatorName:y})}}}var I="_compareToOther",M=h[I];if(void 0!==M){var N=M["ignore.empty.value"],L=void 0!==N&&N,E=M.name,B=M.shouldBe,W=M["error-message"];if(!L||""!==m){var P=u[E].value;if(!function(){switch(B){case"different":return P!==m;case"equal":return P===m}}()){var D=[null!==W&&void 0!==W?W:(0,c.id)(function(){switch(B){case"equal":return"shouldBeEqual";case"different":return"shouldBeDifferent"}}()),E,r,B];C.push({validatorName:I,errorMessage:(0,t.jsx)(s.Fragment,{children:d.apply(void 0,D)},C.length),errorMessageStr:f.apply(void 0,D)})}}}var V="pattern",_=h[V];if(void 0!==_){var T=_["ignore.empty.value"],Z=void 0!==T&&T,q=_.pattern,H=_["error-message"];if((!Z||""!==m)&&!new RegExp(q).test(m)){var G=[null!==H&&void 0!==H?H:(0,c.id)("shouldMatchPattern"),q];C.push({validatorName:V,errorMessage:(0,t.jsx)(s.Fragment,{children:d.apply(void 0,G)},C.length),errorMessageStr:f.apply(void 0,G)})}}if("pattern"!==(null===(a=[].concat(C).reverse()[0])||void 0===a?void 0:a.validatorName)){var R="email",$=h[R];if(void 0!==$){var z=$["ignore.empty.value"];if((!(void 0!==z&&z)||""!==m)&&!p.test(m)){var U=[(0,c.id)("invalidEmailMessage")];C.push({validatorName:R,errorMessage:(0,t.jsx)(s.Fragment,{children:i.apply(void 0,U)},C.length),errorMessageStr:l.apply(void 0,U)})}}}var K="integer",J=h[K];if(void 0!==J){var Q=J["ignore.empty.value"],X=void 0!==Q&&Q,Y=J.max,ee=J.min;if(!X||""!==m){var ae=parseInt(m);if(isNaN(ae)){var re=["mustBeAnInteger"];C.push({validatorName:K,errorMessage:(0,t.jsx)(s.Fragment,{children:i.apply(void 0,re)},C.length),errorMessageStr:l.apply(void 0,re)})}else if(void 0!==Y&&ae>parseInt(Y)){var te=["error-number-out-of-range-too-big",Y];C.push({validatorName:K,errorMessage:(0,t.jsx)(s.Fragment,{children:i.apply(void 0,te)},C.length),errorMessageStr:l.apply(void 0,te)})}else if(void 0!==ee&&ae<parseInt(ee)){var se=["error-number-out-of-range-too-small",ee];C.push({validatorName:K,errorMessage:(0,t.jsx)(s.Fragment,{children:i.apply(void 0,se)},C.length),errorMessageStr:l.apply(void 0,se)})}else;}}var oe="options",ne=h[oe];if(void 0!==ne&&""!==m&&!(ne.options.indexOf(m)>=0)){var ie=[(0,c.id)("notAValidOption")];C.push({validatorName:oe,errorMessage:(0,t.jsx)(s.Fragment,{children:d.apply(void 0,ie)},C.length),errorMessageStr:f.apply(void 0,ie)})}return C}));return{getErrors:m}}({kcContext:{messagesPerField:a.messagesPerField,profile:{attributes:f}},i18n:d}),v=m.getErrors,g=(0,s.useMemo)((function(){return Object.fromEntries(f.map((function(e){return{attribute:e,errors:v({name:e.name,fieldValueByAttributeName:Object.fromEntries(f.map((function(e){var a=e.name,r=e.value;return[a,{value:null!==r&&void 0!==r?r:""}]})))})}})).map((function(e){var a,r=e.attribute,t=e.errors;return[r.name,{value:null!==(a=r.value)&&void 0!==a?a:"",errors:t,doDisplayPotentialErrorMessages:0!==t.length}]})))}),[f]),h=(0,s.useReducer)((function(e,a){return Object.assign(Object.assign({},e),(0,n.Z)({},a.name,Object.assign(Object.assign({},e[a.name]),function(){switch(a.action){case"focus lost":return{doDisplayPotentialErrorMessages:!0};case"update value":return{value:a.newValue,errors:v({name:a.name,fieldValueByAttributeName:Object.assign(Object.assign({},e),(0,n.Z)({},a.name,{value:a.newValue}))})}}}())))}),g),k=(0,i.Z)(h,2),b=k[0],C=k[1];return{formValidationState:(0,s.useMemo)((function(){return{fieldStateByAttributeName:Object.fromEntries(Object.entries(b).map((function(e){var a=(0,i.Z)(e,2),r=a[0],t=a[1],s=t.value,o=t.errors;return[r,{value:s,displayableErrors:t.doDisplayPotentialErrorMessages?o:[]}]}))),isFormSubmittable:Object.entries(b).every((function(e){var a=(0,i.Z)(e,2),r=a[0],t=a[1],s=t.value;return 0===t.errors.length&&(""!==s||!f.find((function(e){return e.name===r})).required)}))}}),[b,f]),formValidationDispatch:C,attributesWithPassword:f}}function f(e){var a=e.kcContext,r=e.onIsFormSubmittableValueChange,n=e.i18n,i=e.getClassName,l=e.BeforeField,c=e.AfterField,u=n.advancedMsg,p=d({kcContext:a,i18n:n}),f=p.formValidationState,m=f.fieldStateByAttributeName,v=f.isFormSubmittable,g=p.formValidationDispatch,h=p.attributesWithPassword;(0,s.useEffect)((function(){r(v)}),[v]);var k="";return(0,t.jsx)(t.Fragment,{children:h.map((function(e,a){var r,n=e.group,p=void 0===n?"":n,d=e.groupDisplayHeader,f=void 0===d?"":d,v=e.groupDisplayDescription,h=void 0===v?"":v,b=m[e.name],C=b.value,y=b.displayableErrors,x=(0,o.W)(i("kcFormGroupClass"),0!==y.length&&i("kcFormGroupErrorClass"));return(0,t.jsxs)(s.Fragment,{children:[p!==k&&""!==(k=p)&&(0,t.jsxs)("div",Object.assign({className:x},{children:[(0,t.jsx)("div",Object.assign({className:i("kcContentWrapperClass")},{children:(0,t.jsx)("label",Object.assign({id:"header-".concat(p),className:i("kcFormGroupHeader")},{children:u(f)||k}))})),""!==h&&(0,t.jsx)("div",Object.assign({className:i("kcLabelWrapperClass")},{children:(0,t.jsx)("label",Object.assign({id:"description-".concat(p),className:i("kcLabelClass")},{children:u(h)}))}))]})),l&&(0,t.jsx)(l,{attribute:e}),(0,t.jsxs)("div",Object.assign({className:x},{children:[(0,t.jsxs)("div",Object.assign({className:i("kcLabelWrapperClass")},{children:[(0,t.jsx)("label",Object.assign({htmlFor:e.name,className:i("kcLabelClass")},{children:u(null!==(r=e.displayName)&&void 0!==r?r:"")})),e.required&&(0,t.jsx)(t.Fragment,{children:"*"})]})),(0,t.jsxs)("div",Object.assign({className:i("kcInputWrapperClass")},{children:[function(){var a=e.validators.options;return void 0!==a?(0,t.jsx)("select",Object.assign({id:e.name,name:e.name,onChange:function(a){return g({action:"update value",name:e.name,newValue:a.target.value})},onBlur:function(){return g({action:"focus lost",name:e.name})},value:C},{children:a.options.map((function(e){return(0,t.jsx)("option",Object.assign({value:e},{children:e}),e)}))})):(0,t.jsx)("input",{type:function(){switch(e.name){case"password-confirm":case"password":return"password";default:return"text"}}(),id:e.name,name:e.name,value:C,onChange:function(a){return g({action:"update value",name:e.name,newValue:a.target.value})},onBlur:function(){return g({action:"focus lost",name:e.name})},className:i("kcInputClass"),"aria-invalid":0!==y.length,disabled:e.readOnly,autoComplete:e.autocomplete})}(),0!==y.length&&function(){var a="input-error-".concat(e.name);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:"#".concat(a," > span: { display: block; }")}),(0,t.jsx)("span",Object.assign({id:a,className:i("kcInputErrorMessageClass"),style:{position:1===y.length?"absolute":void 0},"aria-live":"polite"},{children:y.map((function(e){return e.errorMessage}))}))]})}()]}))]})),c&&(0,t.jsx)(c,{attribute:e})]},a)}))})}},9902:function(){Array.prototype.every||(Array.prototype.every=function(e,a){var r,t;if(null==this)throw new TypeError("this is null or not defined");var s=Object(this),o=s.length>>>0;if("function"!==typeof e&&"[object Function]"!==Object.prototype.toString.call(e))throw new TypeError;for(arguments.length>1&&(r=a),t=0;t<o;){var n;if(t in s)if(n=s[t],!(r?e.call(r,n,t,s):e(n,t,s)))return!1;t++}return!0})},9877:function(e,a,r){r.d(a,{W:function(){return n}});var t=r(2982),s=r(9118);function o(e,a){return a}var n=function e(){for(var a=arguments.length,r=0,n="";r<a;r++){var i=r<0||arguments.length<=r?void 0:arguments[r];if(null!=i){var l=void 0;switch(typeof i){case"boolean":break;case"object":if(Array.isArray(i))l=e.apply(void 0,(0,t.Z)(i));else for(var c in(0,s.h)(!o(0,!1)),l="",i)i[c]&&c&&(l&&(l+=" "),l+=c);break;default:l=i}l&&(n&&(n+=" "),n+=l)}}return n}},4942:function(e,a,r){function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}r.d(a,{Z:function(){return t}})}}]);
//# sourceMappingURL=7750.dfd86b0c.chunk.js.map