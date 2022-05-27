"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2893],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>d});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),c=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=c(e.components);return n.createElement(o.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(t),d=i,f=u["".concat(o,".").concat(d)]||u[d]||m[d]||r;return t?n.createElement(f,l(l({ref:a},s),{},{components:t})):n.createElement(f,l({ref:a},s))}));function d(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=u;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var c=2;c<r;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},89346:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var n=t(87462),i=t(63366),r=(t(67294),t(3905)),l=["components"],p={id:"3scale_api_management_admin_application_plans",title:"Application Plans",sidebar_label:"Application Plans"},o=void 0,c={unversionedId:"3scale/3scale_api_management_admin_application_plans",id:"version-1.0.0/3scale/3scale_api_management_admin_application_plans",title:"Application Plans",description:"Every product consists of one or more application plans. An application is always associated with an application plan. ....",source:"@site/versioned_docs/version-1.0.0/3scale/3scale_api_management_admin_application_plans.md",sourceDirName:"3scale",slug:"/3scale/3scale_api_management_admin_application_plans",permalink:"/docs/1.0.0/3scale/3scale_api_management_admin_application_plans",draft:!1,tags:[],version:"1.0.0",frontMatter:{id:"3scale_api_management_admin_application_plans",title:"Application Plans",sidebar_label:"Application Plans"}},s={},m=[{value:"Create application plans",id:"create-application-plans",level:2},{value:"Add methods and metrics",id:"add-methods-and-metrics",level:2}],u={toc:m};function d(e){var a=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Every product consists of one or more application plans. An application is always associated with an application plan. ...."),(0,r.kt)("p",null,"In basic 3scale plans only a single application is allowed; but, in enterprise plans, multiple applications per account are allowed."),(0,r.kt)("p",null,"Example of adding a policy / applying restrictions to a product:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to ",(0,r.kt)("em",{parentName:"li"},"[Your","_","product","_","name]","/Applications/Application Plans"),"."),(0,r.kt)("li",{parentName:"ul"},"In the Application plans section, go to the Basic application."),(0,r.kt)("li",{parentName:"ul"},"Under ",(0,r.kt)("strong",{parentName:"li"},"Metrics, Methods, Limits ","&"," Pricing Rules")," , select limits in the hits row, and create a new usage limit of 3 per hour."),(0,r.kt)("li",{parentName:"ul"},"Find one of your sample applications, by navigating to ",(0,r.kt)("em",{parentName:"li"},"[Your","_","product","_","name]","/Applications/Listing"),". Ensure that application is set to the basic plan."),(0,r.kt)("li",{parentName:"ul"},"Use the credentials for this application and repeat the previous sample call at least three times.")),(0,r.kt)("p",null,"You have now successfully defined more restrictive access polices for all the applications on 3scale Basic plan."),(0,r.kt)("h2",{id:"create-application-plans"},"Create application plans"),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("em",{parentName:"p"},"[Your","_","product","_","name]","/Applications/Application Plans")," click ",(0,r.kt)("em",{parentName:"p"},"Create Application Plan"),"."),(0,r.kt)("p",null,"Once you have created a plan, you can provision rate limits and set up paid plans."),(0,r.kt)("h2",{id:"add-methods-and-metrics"},"Add methods and metrics"),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("em",{parentName:"p"},"[Your","_","product","_","name]","/Integretion/Methods ","&"," Metrics")," or ",(0,r.kt)("em",{parentName:"p"},"[Your","_","backend","_","name]","/Methods ","&"," Metrics")," click ",(0,r.kt)("em",{parentName:"p"},"New method link / New metric.")),(0,r.kt)("p",null,"These new methods and metrics will be available in all of your current and future plans. You can now edit limits and pricing rules for them on each plan by going to ",(0,r.kt)("em",{parentName:"p"},"[Your","_","product","_","name]","/Applications/Application Plans/","[plan","_","you","_","want","_","to","_","edit]",".")))}d.isMDXComponent=!0}}]);