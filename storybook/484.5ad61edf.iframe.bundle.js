"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[484],{"./node_modules/keycloakify/lib/pages/shared/UserProfileCommons.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{M:function(){return UserProfileFormFields}});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/keycloakify/lib/tools/clsx.js"),useConstCallback=(__webpack_require__("./node_modules/keycloakify/lib/tools/Array.prototype.every.js"),__webpack_require__("./node_modules/keycloakify/lib/tools/useConstCallback.js"));const emailRegexp=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;var id=__webpack_require__("./node_modules/tsafe/esm/id.mjs"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function UserProfileFormFields(_a){var{kcContext:kcContext,onIsFormSubmittableValueChange:onIsFormSubmittableValueChange,i18n:i18n,BeforeField:BeforeField,AfterField:AfterField}=_a,props=__rest(_a,["kcContext","onIsFormSubmittableValueChange","i18n","BeforeField","AfterField"]);const{advancedMsg:advancedMsg}=i18n,{formValidationState:{fieldStateByAttributeName:fieldStateByAttributeName,isFormSubmittable:isFormSubmittable},formValidationDispatch:formValidationDispatch,attributesWithPassword:attributesWithPassword}=function useFormValidation(params){const{kcContext:kcContext,passwordValidators:passwordValidators={length:{"ignore.empty.value":!0,min:"4"}},i18n:i18n}=params,attributesWithPassword=(0,react.useMemo)((()=>kcContext.passwordRequired?(()=>{const name=kcContext.realm.registrationEmailAsUsername?"email":"username";return kcContext.profile.attributes.reduce(((prev,curr)=>[...prev,...curr.name!==name?[curr]:[curr,(0,id.id)({name:"password",displayName:(0,id.id)("${password}"),required:!0,readOnly:!1,validators:passwordValidators,annotations:{},groupAnnotations:{},autocomplete:"new-password"}),(0,id.id)({name:"password-confirm",displayName:(0,id.id)("${passwordConfirm}"),required:!0,readOnly:!1,validators:{_compareToOther:{name:"password","ignore.empty.value":!0,shouldBe:"equal","error-message":(0,id.id)("${invalidPasswordConfirmMessage}")}},annotations:{},groupAnnotations:{},autocomplete:"new-password"})]]),[])})():kcContext.profile.attributes),[kcContext,passwordValidators]),{getErrors:getErrors}=function useGetErrors(params){const{kcContext:kcContext,i18n:i18n}=params,{messagesPerField:messagesPerField,profile:{attributes:attributes}}=kcContext,{msg:msg,msgStr:msgStr,advancedMsg:advancedMsg,advancedMsgStr:advancedMsgStr}=i18n,getErrors=(0,useConstCallback.O)((params=>{var _a;const{name:name,fieldValueByAttributeName:fieldValueByAttributeName}=params,{value:value}=fieldValueByAttributeName[name],{value:defaultValue,validators:validators}=attributes.find((attribute=>attribute.name===name));block:{if(defaultValue!==value)break block;let doesErrorExist;try{doesErrorExist=messagesPerField.existsError(name)}catch(_b){break block}if(!doesErrorExist)break block;const errorMessageStr=messagesPerField.get(name);return[{validatorName:void 0,errorMessageStr:errorMessageStr,errorMessage:react.createElement("span",{key:0},errorMessageStr)}]}const errors=[];scope:{const validatorName="length",validator=validators[validatorName];if(void 0===validator)break scope;const{"ignore.empty.value":ignoreEmptyValue=!1,max:max,min:min}=validator;if(!ignoreEmptyValue||""!==value){if(void 0!==max&&value.length>parseInt(max)){const msgArgs=["error-invalid-length-too-long",max];errors.push({errorMessage:react.createElement(react.Fragment,{key:errors.length},msg(...msgArgs)),errorMessageStr:msgStr(...msgArgs),validatorName:validatorName})}if(void 0!==min&&value.length<parseInt(min)){const msgArgs=["error-invalid-length-too-short",min];errors.push({errorMessage:react.createElement(react.Fragment,{key:errors.length},msg(...msgArgs)),errorMessageStr:msgStr(...msgArgs),validatorName:validatorName})}}}scope:{const validatorName="_compareToOther",validator=validators[validatorName];if(void 0===validator)break scope;const{"ignore.empty.value":ignoreEmptyValue=!1,name:otherName,shouldBe:shouldBe,"error-message":errorMessageKey}=validator;if(ignoreEmptyValue&&""===value)break scope;const{value:otherValue}=fieldValueByAttributeName[otherName];if((()=>{switch(shouldBe){case"different":return otherValue!==value;case"equal":return otherValue===value}})())break scope;const msgArg=[null!=errorMessageKey?errorMessageKey:(0,id.id)((()=>{switch(shouldBe){case"equal":return"shouldBeEqual";case"different":return"shouldBeDifferent"}})()),otherName,name,shouldBe];errors.push({validatorName:validatorName,errorMessage:react.createElement(react.Fragment,{key:errors.length},advancedMsg(...msgArg)),errorMessageStr:advancedMsgStr(...msgArg)})}scope:{const validatorName="pattern",validator=validators[validatorName];if(void 0===validator)break scope;const{"ignore.empty.value":ignoreEmptyValue=!1,pattern:pattern,"error-message":errorMessageKey}=validator;if(ignoreEmptyValue&&""===value)break scope;if(new RegExp(pattern).test(value))break scope;const msgArgs=[null!=errorMessageKey?errorMessageKey:(0,id.id)("shouldMatchPattern"),pattern];errors.push({validatorName:validatorName,errorMessage:react.createElement(react.Fragment,{key:errors.length},advancedMsg(...msgArgs)),errorMessageStr:advancedMsgStr(...msgArgs)})}scope:{if("pattern"===(null===(_a=[...errors].reverse()[0])||void 0===_a?void 0:_a.validatorName))break scope;const validatorName="email",validator=validators[validatorName];if(void 0===validator)break scope;const{"ignore.empty.value":ignoreEmptyValue=!1}=validator;if(ignoreEmptyValue&&""===value)break scope;if(emailRegexp.test(value))break scope;const msgArgs=[(0,id.id)("invalidEmailMessage")];errors.push({validatorName:validatorName,errorMessage:react.createElement(react.Fragment,{key:errors.length},msg(...msgArgs)),errorMessageStr:msgStr(...msgArgs)})}scope:{const validatorName="integer",validator=validators[validatorName];if(void 0===validator)break scope;const{"ignore.empty.value":ignoreEmptyValue=!1,max:max,min:min}=validator;if(ignoreEmptyValue&&""===value)break scope;const intValue=parseInt(value);if(isNaN(intValue)){const msgArgs=["mustBeAnInteger"];errors.push({validatorName:validatorName,errorMessage:react.createElement(react.Fragment,{key:errors.length},msg(...msgArgs)),errorMessageStr:msgStr(...msgArgs)})}else if(void 0!==max&&intValue>parseInt(max)){const msgArgs=["error-number-out-of-range-too-big",max];errors.push({validatorName:validatorName,errorMessage:react.createElement(react.Fragment,{key:errors.length},msg(...msgArgs)),errorMessageStr:msgStr(...msgArgs)})}else if(void 0!==min&&intValue<parseInt(min)){const msgArgs=["error-number-out-of-range-too-small",min];errors.push({validatorName:validatorName,errorMessage:react.createElement(react.Fragment,{key:errors.length},msg(...msgArgs)),errorMessageStr:msgStr(...msgArgs)})}else;}scope:{const validatorName="options",validator=validators[validatorName];if(void 0===validator)break scope;if(""===value)break scope;if(validator.options.indexOf(value)>=0)break scope;const msgArgs=[(0,id.id)("notAValidOption")];errors.push({validatorName:validatorName,errorMessage:react.createElement(react.Fragment,{key:errors.length},advancedMsg(...msgArgs)),errorMessageStr:advancedMsgStr(...msgArgs)})}return errors}));return{getErrors:getErrors}}({kcContext:{messagesPerField:kcContext.messagesPerField,profile:{attributes:attributesWithPassword}},i18n:i18n}),initialInternalState=(0,react.useMemo)((()=>Object.fromEntries(attributesWithPassword.map((attribute=>({attribute:attribute,errors:getErrors({name:attribute.name,fieldValueByAttributeName:Object.fromEntries(attributesWithPassword.map((({name:name,value:value})=>[name,{value:null!=value?value:""}])))})}))).map((({attribute:attribute,errors:errors})=>{var _a;return[attribute.name,{value:null!==(_a=attribute.value)&&void 0!==_a?_a:"",errors:errors,doDisplayPotentialErrorMessages:0!==errors.length}]})))),[attributesWithPassword]),[formValidationInternalState,formValidationDispatch]=(0,react.useReducer)(((state,params)=>Object.assign(Object.assign({},state),{[params.name]:Object.assign(Object.assign({},state[params.name]),(()=>{switch(params.action){case"focus lost":return{doDisplayPotentialErrorMessages:!0};case"update value":return{value:params.newValue,errors:getErrors({name:params.name,fieldValueByAttributeName:Object.assign(Object.assign({},state),{[params.name]:{value:params.newValue}})})}}})())})),initialInternalState),formValidationState=(0,react.useMemo)((()=>({fieldStateByAttributeName:Object.fromEntries(Object.entries(formValidationInternalState).map((([name,{value:value,errors:errors,doDisplayPotentialErrorMessages:doDisplayPotentialErrorMessages}])=>[name,{value:value,displayableErrors:doDisplayPotentialErrorMessages?errors:[]}]))),isFormSubmittable:Object.entries(formValidationInternalState).every((([name,{value:value,errors:errors}])=>0===errors.length&&(""!==value||!attributesWithPassword.find((attribute=>attribute.name===name)).required)))})),[formValidationInternalState,attributesWithPassword]);return{formValidationState:formValidationState,formValidationDispatch:formValidationDispatch,attributesWithPassword:attributesWithPassword}}({kcContext:kcContext,i18n:i18n});(0,react.useEffect)((()=>{onIsFormSubmittableValueChange(isFormSubmittable)}),[isFormSubmittable]);let currentGroup="";return react.createElement(react.Fragment,null,attributesWithPassword.map(((attribute,i)=>{var _a;const{group:group="",groupDisplayHeader:groupDisplayHeader="",groupDisplayDescription:groupDisplayDescription=""}=attribute,{value:value,displayableErrors:displayableErrors}=fieldStateByAttributeName[attribute.name],formGroupClassName=(0,clsx.W)(props.kcFormGroupClass,0!==displayableErrors.length&&props.kcFormGroupErrorClass);return react.createElement(react.Fragment,{key:i},group!==currentGroup&&""!==(currentGroup=group)&&react.createElement("div",{className:formGroupClassName},react.createElement("div",{className:(0,clsx.W)(props.kcContentWrapperClass)},react.createElement("label",{id:`header-${group}`,className:(0,clsx.W)(props.kcFormGroupHeader)},advancedMsg(groupDisplayHeader)||currentGroup)),""!==groupDisplayDescription&&react.createElement("div",{className:(0,clsx.W)(props.kcLabelWrapperClass)},react.createElement("label",{id:`description-${group}`,className:`${(0,clsx.W)(props.kcLabelClass)}`},advancedMsg(groupDisplayDescription)))),BeforeField&&react.createElement(BeforeField,{attribute:attribute}),react.createElement("div",{className:formGroupClassName},react.createElement("div",{className:(0,clsx.W)(props.kcLabelWrapperClass)},react.createElement("label",{htmlFor:attribute.name,className:(0,clsx.W)(props.kcLabelClass)},advancedMsg(null!==(_a=attribute.displayName)&&void 0!==_a?_a:"")),attribute.required&&react.createElement(react.Fragment,null,"*")),react.createElement("div",{className:(0,clsx.W)(props.kcInputWrapperClass)},(()=>{const{options:options}=attribute.validators;return void 0!==options?react.createElement("select",{id:attribute.name,name:attribute.name,onChange:event=>formValidationDispatch({action:"update value",name:attribute.name,newValue:event.target.value}),onBlur:()=>formValidationDispatch({action:"focus lost",name:attribute.name}),value:value},options.options.map((option=>react.createElement("option",{key:option,value:option},option)))):react.createElement("input",{type:(()=>{switch(attribute.name){case"password-confirm":case"password":return"password";default:return"text"}})(),id:attribute.name,name:attribute.name,value:value,onChange:event=>formValidationDispatch({action:"update value",name:attribute.name,newValue:event.target.value}),onBlur:()=>formValidationDispatch({action:"focus lost",name:attribute.name}),className:(0,clsx.W)(props.kcInputClass),"aria-invalid":0!==displayableErrors.length,disabled:attribute.readOnly,autoComplete:attribute.autocomplete})})(),0!==displayableErrors.length&&(()=>{const divId=`input-error-${attribute.name}`;return react.createElement(react.Fragment,null,react.createElement("style",null,`#${divId} > span: { display: block; }`),react.createElement("span",{id:divId,className:(0,clsx.W)(props.kcInputErrorMessageClass),style:{position:1===displayableErrors.length?"absolute":void 0},"aria-live":"polite"},displayableErrors.map((({errorMessage:errorMessage})=>errorMessage))))})())),AfterField&&react.createElement(AfterField,{attribute:attribute}))})))}}}]);