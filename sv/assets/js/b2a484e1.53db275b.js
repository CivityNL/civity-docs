"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7136],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46303:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={id:"3scale_publish_step_by_step",title:"Step by step Guide",sidebar_label:"Step by step Guide"},s=void 0,p={unversionedId:"3scale/3scale_publish_step_by_step",id:"version-1.0.0/3scale/3scale_publish_step_by_step",title:"Step by step Guide",description:"How to register a new API endpoint:",source:"@site/versioned_docs/version-1.0.0/3scale/3scale_publish_step_by_step.md",sourceDirName:"3scale",slug:"/3scale/3scale_publish_step_by_step",permalink:"/sv/docs/1.0.0/3scale/3scale_publish_step_by_step",draft:!1,tags:[],version:"1.0.0",frontMatter:{id:"3scale_publish_step_by_step",title:"Step by step Guide",sidebar_label:"Step by step Guide"}},c={},d=[{value:"How to register a new API endpoint:",id:"how-to-register-a-new-api-endpoint",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-to-register-a-new-api-endpoint"},"How to register a new API endpoint:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We navigate the 3scale admin page. The homepage is displaying the Dashboard view."),(0,r.kt)("li",{parentName:"ol"},"Under TAB APIs we click on ",(0,r.kt)("ins",null,"NEW PRODUCT"),"."),(0,r.kt)("li",{parentName:"ol"},"We choose Define manually, insert Name and optionally description. The system name can be left empty as it will be automatically populated."),(0,r.kt)("li",{parentName:"ol"},"A new product is generated and we are redirected to its overview page. Next things to be done are setting the backends (API endpoints) and the application Plans."),(0,r.kt)("li",{parentName:"ol"},"We click on ",(0,r.kt)("ins",null,"Create Application Plan"),"."),(0,r.kt)("li",{parentName:"ol"},"We set a name and optionally the billing rules. System name can be left empty. We click on Create plan."),(0,r.kt)("li",{parentName:"ol"},"After we create the plan, we are re-directed to the Application Plans overview page. We need to publish the plan to make it available. We can also set a default plan on top of the page."),(0,r.kt)("li",{parentName:"ol"},"We are still inside the Product. On the left sidebar click on Integration and choose backends."),(0,r.kt)("li",{parentName:"ol"},"We click on ",(0,r.kt)("ins",null,"Add Backend"),"."),(0,r.kt)("li",{parentName:"ol"},"From the Backend dropdown we choose nothing and we click on the link underneath ",(0,r.kt)("ins",null,"Create a Backend that can be used by any Product"),"."),(0,r.kt)("li",{parentName:"ol"},"We set Name and our API endpoint. Description is optional, System Name will be automatically populated."),(0,r.kt)("li",{parentName:"ol"},"We have now created a new backend and we are redirected to its overview page. The backend is still not part of our product. Next step is to add it to our product."),(0,r.kt)("li",{parentName:"ol"},"From the dropdown on top, we choose our product by name. In the overview page of the product we see there is still no backend registered."),(0,r.kt)("li",{parentName:"ol"},"We click again on Integration/Backends."),(0,r.kt)("li",{parentName:"ol"},"We click on ",(0,r.kt)("ins",null,"Add Backend")," and this time select our newly created backend from the dropdown list. If we plan on adding only one API endpoint to our product we can proceed without setting a Path. If we are going to use multiple endpoints, we need to specifically set a path for each of them."),(0,r.kt)("li",{parentName:"ol"},"In the Backends overview we now see our registered endpoint. Next step is to publish it."),(0,r.kt)("li",{parentName:"ol"},"We navigate to Integration/Configuration we now are able to promote our product first on staging and then on production phase."),(0,r.kt)("li",{parentName:"ol"},"While publishing on stage phase, under Example curl for testing we see the message ",(0,r.kt)("em",{parentName:"li"},'"',"In order to send a valid test request, please create an application that subscribes to an application plan of this service.",'"')," This means that we need to register our current admin user to this new product in order to generate an API key and be able to test our new API endpoint."),(0,r.kt)("li",{parentName:"ol"},"From the top dropdown, we choose Audience, Accounts/Listings. We click on Group/Org ",(0,r.kt)("ins",null,"Developer"),"."),(0,r.kt)("li",{parentName:"ol"},"On the top side we see Account","'","s options. We click on Service Subscriptions."),(0,r.kt)("li",{parentName:"ol"},"Our newly generated product is under Available service subscriptions. We click Subscribe. From Plan dropdown we select the default and click on ",(0,r.kt)("ins",null,"Create Subscription"),"."),(0,r.kt)("li",{parentName:"ol"},"We are redirected back on the Account options. We now click on ",(0,r.kt)("ins",null,"Applications")," on the top bar."),(0,r.kt)("li",{parentName:"ol"},"We click on Create Application."),(0,r.kt)("li",{parentName:"ol"},"We choose a plan (probably the one we want to test), set a name and description and click on ",(0,r.kt)("ins",null,"Create Application"),"."),(0,r.kt)("li",{parentName:"ol"},"We are now redirected to our new application","'","s credentials. Under API Credentials we see our newly generated API key."),(0,r.kt)("li",{parentName:"ol"},"We navigate again to Integration/Configuration. We now see on our staging phase that the previous message is disappeared and the curl URL does also includes our API key."),(0,r.kt)("li",{parentName:"ol"},"We are ready to test our newly generated API endpoint.")))}m.isMDXComponent=!0}}]);