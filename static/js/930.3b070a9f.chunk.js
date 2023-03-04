"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[930],{930:function(A,e,r){r.r(e),r.d(e,{default:function(){return x}});var n=r(2791);var t=("kcContext" in window ? "https://starter.keycloakify.dev/" : r.p) + "static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg",a=r(8214),o=r(885),i=r(5861),u=r(3748),c=r(7874),s=r(391),l=r(9883),d=r(2218),f=r(456),m=r(184);function p(){return p=(0,i.Z)((0,a.Z)().mark((function A(e){var r,n,t,o,l,m,p,g,R,w,h,k;return(0,a.Z)().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return r=e.url,n=e.realm,t=e.clientId,o=e.transformUrlBeforeRedirect,l=e.evtUserActivity,m=e.getUiLocales,p=e.log,g=(0,u.Z)({url:r,realm:n,clientId:t}),R="overwrite location.href",A.next=5,g.init({onLoad:"check-sso",silentCheckSsoRedirectUri:"".concat(window.location.origin,"/silent-sso.html"),responseMode:"query",checkLoginIframe:!1,adapter:(0,d.Ou)({transformUrlBeforeRedirect:function(A){return[A].map(o).map((function(A){return(0,s.addParamToUrl)({url:A,name:"ui_locales",value:m()}).newUrl}))[0]},keycloakInstance:g,getRedirectMethod:function(){return R}})}).catch((function(A){return A}));case 5:if(!((w=A.sent)instanceof Error)){A.next=8;break}throw w;case 8:if(h=function(){var A=(0,i.Z)((0,a.Z)().mark((function A(e){return(0,a.Z)().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e.doesCurrentHrefRequiresAuth&&(R="location.replace"),A.next=4,g.login({redirectUri:window.location.href});case 4:return A.abrupt("return",new Promise((function(){})));case 5:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),w){A.next=11;break}return A.abrupt("return",(0,c.id)({isUserLoggedIn:!1,login:h}));case 11:return k=(0,c.id)({isUserLoggedIn:!0,accessToken:g.token,logout:function(){var A=(0,i.Z)((0,a.Z)().mark((function A(e){var r;return(0,a.Z)().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return r=e.redirectTo,A.next=3,g.logout({redirectUri:function(){switch(r){case"current page":return window.location.href;case"home":return window.location.origin}}()});case 3:return A.abrupt("return",new Promise((function(){})));case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),updateTokenInfo:function(){var A=(0,i.Z)((0,a.Z)().mark((function A(){return(0,a.Z)().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,g.updateToken(-1);case 2:k.accessToken=g.token;case 3:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}()}),function A(){var e=1e3*(0,f.Z)(k.accessToken).exp-Date.now();setTimeout((0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===p||void 0===p||p("OIDC access token will expire in ".concat(v," seconds, waiting for user activity before renewing")),e.next=3,l.waitFor();case 3:return null===p||void 0===p||p("User activity detected. Refreshing access token now"),e.next=6,g.updateToken(-1).then((function(){}),(function(A){return A}));case 6:if(!e.sent){e.next=11;break}return null===p||void 0===p||p("Can't refresh OIDC access token, getting a new one"),e.next=11,h({doesCurrentHrefRequiresAuth:!0});case 11:k.accessToken=g.token,A();case 13:case"end":return e.stop()}}),e)}))),e-1e3*v)}(),A.abrupt("return",k);case 14:case"end":return A.stop()}}),A)}))),p.apply(this,arguments)}var v=25,g=(0,n.createContext)(void 0);var R=r(7338),w=r(8252),h=function(A){var e=function(A){return p.apply(this,arguments)}(A);return{OidcClientProvider:function(A){var r=A.children,t=(0,n.useState)(void 0),a=(0,o.Z)(t,2),i=a[0],u=a[1];return(0,n.useEffect)((function(){e.then(u)}),[]),void 0===i?null:(0,m.jsx)(g.Provider,{value:i,children:r})}}}({url:"https://auth.code.gouv.fr/auth",realm:"keycloakify",clientId:"starter",log:console.log,getUiLocales:function(){return"en"},transformUrlBeforeRedirect:function(A){return[A].map((function(A){return(0,R.r5)({url:A,value:{foo:42}})})).map((function(A){return(0,R.Fo)({url:A,value:"value of bar transferred to login page"})}))[0]},evtUserActivity:w.Evt.merge([w.Evt.from(document,"mousemove"),w.Evt.from(document,"keydown")]).pipe((function(){return[(0,c.id)(void 0)]}))}),k=h.OidcClientProvider;function I(){var A=function(){var A=(0,n.useContext)(g);return(0,l.h)(void 0!==A),{oidcClient:A}}(),e=A.oidcClient;return(0,m.jsx)("div",{className:"App",children:(0,m.jsxs)("header",{className:"App-header",children:[e.isUserLoggedIn?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h1",{children:"You are authenticated"}),(0,m.jsx)("pre",{children:JSON.stringify((0,f.Z)(e.accessToken))}),(0,m.jsx)("button",{onClick:function(){return e.logout({redirectTo:"home"})},children:"Logout"})]}):(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("button",{onClick:function(){return e.login({doesCurrentHrefRequiresAuth:!1})},children:"Login"})}),(0,m.jsx)("img",{src:t,className:"App-logo",alt:"logo"}),(0,m.jsx)("img",{src:"data:image/png;base64,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",alt:"test_image"}),(0,m.jsx)("p",{style:{fontFamily:'"Work Sans"'},children:"Hello world"})]})})}var x=function(){return(0,m.jsx)(k,{children:(0,m.jsx)(I,{})})}},7338:function(A,e,r){r.d(e,{Fo:function(){return d},Kb:function(){return l},RN:function(){return u},r5:function(){return c}});var n=r(4942),t=r(6005),a=r(391),o=r(962),i=function(){var A,e="foo",r=function(){var A=f({queryParamName:e});if(void 0!==A)return JSON.parse(A)}();var t=(A={},(0,n.Z)(A,e,r),(0,n.Z)(A,"add".concat((0,o.k)(e),"ToQueryParams"),(function(A){var r=A.url,n=A.value;return(0,a.addParamToUrl)({url:r,name:e,value:JSON.stringify(n)}).newUrl})),A);return t}(),u=i.foo,c=i.addFooToQueryParams,s=function(){var A,e="bar",r=function(){var A=f({queryParamName:e});if(void 0!==A)return JSON.parse(A)}();var t=(A={},(0,n.Z)(A,e,r),(0,n.Z)(A,"add".concat((0,o.k)(e),"ToQueryParams"),(function(A){var r=A.url,n=A.value;return(0,a.addParamToUrl)({url:r,name:e,value:JSON.stringify(n)}).newUrl})),A);return t}(),l=s.bar,d=s.addBarToQueryParams;function f(A){if(void 0!==t.H){var e=A.queryParamName,r=(0,a.retrieveParamFromUrl)({url:window.location.href,name:e});if(r.wasPresent){var n=r.newUrl,o=r.value;return(0,a.updateSearchBarUrl)(n),localStorage.setItem(e,o),o}var i=localStorage.getItem(e);if(null===i)throw new Error("Missing ".concat(e," in URL when redirecting to login page"));return i}}}}]);
//# sourceMappingURL=930.3b070a9f.chunk.js.map