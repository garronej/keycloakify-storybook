"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[4426],{"./src/keycloak-theme/pages/Login.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Login}});var _home_runner_work_keycloakify_storybook_keycloakify_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_keycloakify_storybook_keycloakify_storybook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),_home_runner_work_keycloakify_storybook_keycloakify_storybook_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),keycloakify_lib_tools_clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/keycloakify/lib/tools/clsx.js"),keycloakify_lib_tools_useConstCallback__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/keycloakify/lib/tools/useConstCallback.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["kcContext","i18n","doFetchDefaultThemeResources","Template"];function Login(props){var _login$username,label,autoCompleteHelper,kcContext=props.kcContext,i18n=props.i18n,_props$doFetchDefault=props.doFetchDefaultThemeResources,doFetchDefaultThemeResources=void 0===_props$doFetchDefault||_props$doFetchDefault,Template=props.Template,kcProps=(0,_home_runner_work_keycloakify_storybook_keycloakify_storybook_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(props,_excluded),social=kcContext.social,realm=kcContext.realm,url=kcContext.url,usernameEditDisabled=kcContext.usernameEditDisabled,login=kcContext.login,auth=kcContext.auth,registrationDisabled=kcContext.registrationDisabled,msg=i18n.msg,msgStr=i18n.msgStr,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),_useState2=(0,_home_runner_work_keycloakify_storybook_keycloakify_storybook_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_useState,2),isLoginButtonDisabled=_useState2[0],setIsLoginButtonDisabled=_useState2[1],onSubmit=(0,keycloakify_lib_tools_useConstCallback__WEBPACK_IMPORTED_MODULE_2__.O)((function(e){var _formElement$querySel;e.preventDefault(),setIsLoginButtonDisabled(!0);var formElement=e.target;null===(_formElement$querySel=formElement.querySelector("input[name='email']"))||void 0===_formElement$querySel||_formElement$querySel.setAttribute("name","username"),formElement.submit()}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Template,(0,_home_runner_work_keycloakify_storybook_keycloakify_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_keycloakify_storybook_keycloakify_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},(0,_home_runner_work_keycloakify_storybook_keycloakify_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({kcContext:kcContext,i18n:i18n,doFetchDefaultThemeResources:doFetchDefaultThemeResources},kcProps)),{},{displayInfo:social.displayInfo,displayWide:realm.password&&void 0!==social.providers,headerNode:msg("doLogIn"),formNode:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{id:"kc-form",className:(0,keycloakify_lib_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(realm.password&&void 0!==social.providers&&kcProps.kcContentWrapperClass),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{id:"kc-form-wrapper",className:(0,keycloakify_lib_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(realm.password&&social.providers&&[kcProps.kcFormSocialAccountContentClass,kcProps.kcFormSocialAccountClass]),children:realm.password&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("form",{id:"kc-form-login",onSubmit:onSubmit,action:url.loginAction,method:"post",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:(0,keycloakify_lib_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcFormGroupClass),children:(label=realm.loginWithEmailAllowed?realm.registrationEmailAsUsername?"email":"usernameOrEmail":"username",autoCompleteHelper="usernameOrEmail"===label?"username":label,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label",{htmlFor:autoCompleteHelper,className:(0,keycloakify_lib_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcLabelClass),children:msg(label)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",(0,_home_runner_work_keycloakify_storybook_keycloakify_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({tabIndex:1,id:autoCompleteHelper,className:(0,keycloakify_lib_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcInputClass),name:autoCompleteHelper,defaultValue:null!==(_login$username=login.username)&&void 0!==_login$username?_login$username:"",type:"text"},usernameEditDisabled?{disabled:!0}:{autoFocus:!0,autoComplete:"off"}))]}))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:(0,keycloakify_lib_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcFormGroupClass),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label",{htmlFor:"password",className:(0,keycloakify_lib_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcLabelClass),children:msg("password")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",{tabIndex:2,id:"password",className:(0,keycloakify_lib_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcInputClass),name:"password",type:"password",autoComplete:"off"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:(0,keycloakify_lib_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcFormGroupClass,kcProps.kcFormSettingClass),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{id:"kc-form-options",children:realm.rememberMe&&!usernameEditDisabled&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"checkbox",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("label",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",(0,_home_runner_work_keycloakify_storybook_keycloakify_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({tabIndex:3,id:"rememberMe",name:"rememberMe",type:"checkbox"},login.rememberMe?{checked:!0}:{})),msg("rememberMe")]})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:(0,keycloakify_lib_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcFormOptionsWrapperClass),children:realm.resetPasswordAllowed&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a",{tabIndex:5,href:url.loginResetCredentialsUrl,children:msg("doForgotPassword")})})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{id:"kc-form-buttons",className:(0,keycloakify_lib_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcFormGroupClass),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",(0,_home_runner_work_keycloakify_storybook_keycloakify_storybook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({type:"hidden",id:"id-hidden-input",name:"credentialId"},void 0!==(null==auth?void 0:auth.selectedCredential)?{value:auth.selectedCredential}:{})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",{tabIndex:4,className:(0,keycloakify_lib_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcButtonClass,kcProps.kcButtonPrimaryClass,kcProps.kcButtonBlockClass,kcProps.kcButtonLargeClass),name:"login",id:"kc-login",type:"submit",value:msgStr("doLogIn"),disabled:isLoginButtonDisabled})]})]})}),realm.password&&void 0!==social.providers&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{id:"kc-social-providers",className:(0,keycloakify_lib_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcFormSocialAccountContentClass,kcProps.kcFormSocialAccountClass),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul",{className:(0,keycloakify_lib_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcFormSocialAccountListClass,social.providers.length>4&&kcProps.kcFormSocialAccountDoubleListClass),children:social.providers.map((function(p){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li",{className:(0,keycloakify_lib_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)(kcProps.kcFormSocialAccountListLinkClass),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a",{href:p.loginUrl,id:"zocial-".concat(p.alias),className:(0,keycloakify_lib_tools_clsx__WEBPACK_IMPORTED_MODULE_1__.W)("zocial",p.providerId),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:p.displayName})})},p.providerId)}))})})]}),infoNode:realm.password&&realm.registrationAllowed&&!registrationDisabled&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{id:"kc-registration",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{children:[msg("noAccount"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a",{tabIndex:6,href:url.registrationUrl,children:msg("doRegister")})]})})}))}try{Login.displayName="Login",Login.__docgenInfo={description:"",displayName:"Login",props:{kcContext:{defaultValue:null,description:"",name:"kcContext",required:!0,type:{name:'Common & { pageId: "login.ftl"; url: { loginResetCredentialsUrl: string; registrationUrl: string; }; realm: { loginWithEmailAllowed: boolean; rememberMe: boolean; password: boolean; resetPasswordAllowed: boolean; registrationAllowed: boolean; }; ... 4 more ...; social: { ...; }; }'}},i18n:{defaultValue:null,description:"",name:"i18n",required:!0,type:{name:'I18n<MessageKeyBase | "alphanumericalCharsOnly">'}},doFetchDefaultThemeResources:{defaultValue:null,description:"",name:"doFetchDefaultThemeResources",required:!1,type:{name:"boolean"}},Template:{defaultValue:null,description:"",name:"Template",required:!0,type:{name:"(props: TemplateProps<any, any>) => Element | null"}},scripts:{defaultValue:null,description:"",name:"scripts",required:!0,type:{name:"string | readonly string[] | undefined"}},stylesCommon:{defaultValue:null,description:"",name:"stylesCommon",required:!0,type:{name:"string | readonly string[] | undefined"}},styles:{defaultValue:null,description:"",name:"styles",required:!0,type:{name:"string | readonly string[] | undefined"}},kcHtmlClass:{defaultValue:null,description:"",name:"kcHtmlClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcLoginClass:{defaultValue:null,description:"",name:"kcLoginClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcHeaderClass:{defaultValue:null,description:"",name:"kcHeaderClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcHeaderWrapperClass:{defaultValue:null,description:"",name:"kcHeaderWrapperClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcFormCardClass:{defaultValue:null,description:"",name:"kcFormCardClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcFormCardAccountClass:{defaultValue:null,description:"",name:"kcFormCardAccountClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcFormHeaderClass:{defaultValue:null,description:"",name:"kcFormHeaderClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcLocaleWrapperClass:{defaultValue:null,description:"",name:"kcLocaleWrapperClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcContentWrapperClass:{defaultValue:null,description:"",name:"kcContentWrapperClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcLabelWrapperClass:{defaultValue:null,description:"",name:"kcLabelWrapperClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcFormGroupClass:{defaultValue:null,description:"",name:"kcFormGroupClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcResetFlowIcon:{defaultValue:null,description:"",name:"kcResetFlowIcon",required:!0,type:{name:"string | readonly string[] | undefined"}},kcFeedbackSuccessIcon:{defaultValue:null,description:"",name:"kcFeedbackSuccessIcon",required:!0,type:{name:"string | readonly string[] | undefined"}},kcFeedbackWarningIcon:{defaultValue:null,description:"",name:"kcFeedbackWarningIcon",required:!0,type:{name:"string | readonly string[] | undefined"}},kcFeedbackErrorIcon:{defaultValue:null,description:"",name:"kcFeedbackErrorIcon",required:!0,type:{name:"string | readonly string[] | undefined"}},kcFeedbackInfoIcon:{defaultValue:null,description:"",name:"kcFeedbackInfoIcon",required:!0,type:{name:"string | readonly string[] | undefined"}},kcFormSocialAccountContentClass:{defaultValue:null,description:"",name:"kcFormSocialAccountContentClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcFormSocialAccountClass:{defaultValue:null,description:"",name:"kcFormSocialAccountClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcSignUpClass:{defaultValue:null,description:"",name:"kcSignUpClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcInfoAreaWrapperClass:{defaultValue:null,description:"",name:"kcInfoAreaWrapperClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcLogoLink:{defaultValue:null,description:"",name:"kcLogoLink",required:!0,type:{name:"string | readonly string[] | undefined"}},kcLogoClass:{defaultValue:null,description:"",name:"kcLogoClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcContainerClass:{defaultValue:null,description:"",name:"kcContainerClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcContentClass:{defaultValue:null,description:"",name:"kcContentClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcFeedbackAreaClass:{defaultValue:null,description:"",name:"kcFeedbackAreaClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcLocaleClass:{defaultValue:null,description:"",name:"kcLocaleClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcAlertIconClasserror:{defaultValue:null,description:"",name:"kcAlertIconClasserror",required:!0,type:{name:"string | readonly string[] | undefined"}},kcFormAreaClass:{defaultValue:null,description:"",name:"kcFormAreaClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcFormSocialAccountListClass:{defaultValue:null,description:"",name:"kcFormSocialAccountListClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcFormSocialAccountDoubleListClass:{defaultValue:null,description:"",name:"kcFormSocialAccountDoubleListClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcFormSocialAccountListLinkClass:{defaultValue:null,description:"",name:"kcFormSocialAccountListLinkClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcWebAuthnKeyIcon:{defaultValue:null,description:"",name:"kcWebAuthnKeyIcon",required:!0,type:{name:"string | readonly string[] | undefined"}},kcWebAuthnDefaultIcon:{defaultValue:null,description:"",name:"kcWebAuthnDefaultIcon",required:!0,type:{name:"string | readonly string[] | undefined"}},kcFormClass:{defaultValue:null,description:"",name:"kcFormClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcFormGroupErrorClass:{defaultValue:null,description:"",name:"kcFormGroupErrorClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcLabelClass:{defaultValue:null,description:"",name:"kcLabelClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcInputClass:{defaultValue:null,description:"",name:"kcInputClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcInputErrorMessageClass:{defaultValue:null,description:"",name:"kcInputErrorMessageClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcInputWrapperClass:{defaultValue:null,description:"",name:"kcInputWrapperClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcFormOptionsClass:{defaultValue:null,description:"",name:"kcFormOptionsClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcFormButtonsClass:{defaultValue:null,description:"",name:"kcFormButtonsClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcFormSettingClass:{defaultValue:null,description:"",name:"kcFormSettingClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcTextareaClass:{defaultValue:null,description:"",name:"kcTextareaClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcInfoAreaClass:{defaultValue:null,description:"",name:"kcInfoAreaClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcFormGroupHeader:{defaultValue:null,description:"",name:"kcFormGroupHeader",required:!0,type:{name:"string | readonly string[] | undefined"}},kcButtonClass:{defaultValue:null,description:"",name:"kcButtonClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcButtonPrimaryClass:{defaultValue:null,description:"",name:"kcButtonPrimaryClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcButtonDefaultClass:{defaultValue:null,description:"",name:"kcButtonDefaultClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcButtonLargeClass:{defaultValue:null,description:"",name:"kcButtonLargeClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcButtonBlockClass:{defaultValue:null,description:"",name:"kcButtonBlockClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcInputLargeClass:{defaultValue:null,description:"",name:"kcInputLargeClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcSrOnlyClass:{defaultValue:null,description:"",name:"kcSrOnlyClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcSelectAuthListClass:{defaultValue:null,description:"",name:"kcSelectAuthListClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcSelectAuthListItemClass:{defaultValue:null,description:"",name:"kcSelectAuthListItemClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcSelectAuthListItemFillClass:{defaultValue:null,description:"",name:"kcSelectAuthListItemFillClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcSelectAuthListItemInfoClass:{defaultValue:null,description:"",name:"kcSelectAuthListItemInfoClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcSelectAuthListItemLeftClass:{defaultValue:null,description:"",name:"kcSelectAuthListItemLeftClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcSelectAuthListItemBodyClass:{defaultValue:null,description:"",name:"kcSelectAuthListItemBodyClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcSelectAuthListItemDescriptionClass:{defaultValue:null,description:"",name:"kcSelectAuthListItemDescriptionClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcSelectAuthListItemHeadingClass:{defaultValue:null,description:"",name:"kcSelectAuthListItemHeadingClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcSelectAuthListItemHelpTextClass:{defaultValue:null,description:"",name:"kcSelectAuthListItemHelpTextClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcSelectAuthListItemIconPropertyClass:{defaultValue:null,description:"",name:"kcSelectAuthListItemIconPropertyClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcSelectAuthListItemIconClass:{defaultValue:null,description:"",name:"kcSelectAuthListItemIconClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcSelectAuthListItemTitle:{defaultValue:null,description:"",name:"kcSelectAuthListItemTitle",required:!0,type:{name:"string | readonly string[] | undefined"}},kcAuthenticatorDefaultClass:{defaultValue:null,description:"",name:"kcAuthenticatorDefaultClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcAuthenticatorPasswordClass:{defaultValue:null,description:"",name:"kcAuthenticatorPasswordClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcAuthenticatorOTPClass:{defaultValue:null,description:"",name:"kcAuthenticatorOTPClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcAuthenticatorWebAuthnClass:{defaultValue:null,description:"",name:"kcAuthenticatorWebAuthnClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcAuthenticatorWebAuthnPasswordlessClass:{defaultValue:null,description:"",name:"kcAuthenticatorWebAuthnPasswordlessClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcSelectOTPListClass:{defaultValue:null,description:"",name:"kcSelectOTPListClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcSelectOTPListItemClass:{defaultValue:null,description:"",name:"kcSelectOTPListItemClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcAuthenticatorOtpCircleClass:{defaultValue:null,description:"",name:"kcAuthenticatorOtpCircleClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcSelectOTPItemHeadingClass:{defaultValue:null,description:"",name:"kcSelectOTPItemHeadingClass",required:!0,type:{name:"string | readonly string[] | undefined"}},kcFormOptionsWrapperClass:{defaultValue:null,description:"",name:"kcFormOptionsWrapperClass",required:!0,type:{name:"string | readonly string[] | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/keycloak-theme/pages/Login.tsx#Login"]={docgenInfo:Login.__docgenInfo,name:"Login",path:"src/keycloak-theme/pages/Login.tsx#Login"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);