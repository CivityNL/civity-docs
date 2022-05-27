"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8156],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"3scale_api_management_admin_products_backends",title:"Products and backends",sidebar_label:"Products and backends"},c=void 0,s={unversionedId:"3scale/3scale_api_management_admin_products_backends",id:"version-1.0.0/3scale/3scale_api_management_admin_products_backends",title:"Products and backends",description:"Products: Customer-facing APIs. Products facilitate the creation of strong and simplified offerings for API consumers.",source:"@site/versioned_docs/version-1.0.0/3scale/3scale_api_management_admin_products_backends.md",sourceDirName:"3scale",slug:"/3scale/3scale_api_management_admin_products_backends",permalink:"/docs/1.0.0/3scale/3scale_api_management_admin_products_backends",draft:!1,tags:[],version:"1.0.0",frontMatter:{id:"3scale_api_management_admin_products_backends",title:"Products and backends",sidebar_label:"Products and backends"}},d={},p=[{value:"Create a new product",id:"create-a-new-product",level:2},{value:"Create new backends",id:"create-new-backends",level:2},{value:"Define mapping rules",id:"define-mapping-rules",level:2},{value:"Testing backends with a product",id:"testing-backends-with-a-product",level:2}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Products:")," Customer-facing APIs. Products facilitate the creation of strong and simplified offerings for API consumers."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Backends:")," Internal APIs bundled in a product. Backends grant API Providers the freedom to map their internal API organization structure to 3scale."),(0,o.kt)("p",null,"A product can contain multiple backends, and a backend can be used in multiple products. In other words, to integrate and manage your API in 3scale you need to create both:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Backend containing at least the URL of your API. The backend can optionally have mapping rules, methods and metrics to facilitate reusability."),(0,o.kt)("li",{parentName:"ul"},"A Product where you define the application plans, and configure APIcast.")),(0,o.kt)("h2",{id:"create-a-new-product"},"Create a new product"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the Dashboard."),(0,o.kt)("li",{parentName:"ol"},"Under the APIs section, choose the Products tab."),(0,o.kt)("li",{parentName:"ol"},"Click New Product."),(0,o.kt)("li",{parentName:"ol"},"Provide the following details:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name (Product identifier)"),(0,o.kt)("li",{parentName:"ul"},"System name"),(0,o.kt)("li",{parentName:"ul"},"Description")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click Create Product.")),(0,o.kt)("h2",{id:"create-new-backends"},"Create new backends"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the Dashboard."),(0,o.kt)("li",{parentName:"ol"},"Under the APIs section, choose the Backends tab."),(0,o.kt)("li",{parentName:"ol"},"Click New Backend."),(0,o.kt)("li",{parentName:"ol"},"Provide the following details:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name (Backend identifier)"),(0,o.kt)("li",{parentName:"ul"},"System name"),(0,o.kt)("li",{parentName:"ul"},"Description"),(0,o.kt)("li",{parentName:"ul"},"Private endpoint (Base URL of the private API)")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click Create Backend.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can also add backends from ",(0,o.kt)("em",{parentName:"p"},"[Your","_","product","_","name]","/Integration/Backends")," and click on ",(0,o.kt)("em",{parentName:"p"},"Add Backend")," and then _s_pecify the routing path in the Path textbox.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When defining the path for a backend:")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can indicate / as path of one of the backends.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Paths must be unique inside the product. This means that you cannot add two backends with the same path inside the same product. Neither you can add the same backend twice to the same product.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can give the same backend the same path in different products."))),(0,o.kt)("h2",{id:"define-mapping-rules"},"Define mapping rules"),(0,o.kt)("p",null,"You can define mapping rules at the backend and product levels. The advantage of defining mapping rules at the backend level is that you will be creating reusable backends that can be added to any product."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the Dashboard, choose the Backends tab."),(0,o.kt)("li",{parentName:"ol"},"Click on the name of the backend you want to configure. For example, API Backend."),(0,o.kt)("li",{parentName:"ol"},"In the page containing information about the backend, navigate to Mapping Rules."),(0,o.kt)("li",{parentName:"ol"},"Click Add Mapping Rule."),(0,o.kt)("li",{parentName:"ol"},"Specify the following settings:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Verb: The HTTP request verb (GET, POST, DELETE, or PUT)."),(0,o.kt)("li",{parentName:"ul"},"Pattern: The pattern to match. For example, /hello."),(0,o.kt)("li",{parentName:"ul"},"Metric or method to increment: The metric or method name."),(0,o.kt)("li",{parentName:"ul"},"Increment by: The metric increment number. For example, 1."),(0,o.kt)("li",{parentName:"ul"},"Last?: If this mapping rule should be considered as the last one, to stop processing other mapping rules."),(0,o.kt)("li",{parentName:"ul"},"Position: Number that indicates the position of the execution of the mapping rule, to sort the mapping rules.")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Click Create Mapping Rule.")),(0,o.kt)("h2",{id:"testing-backends-with-a-product"},"Testing backends with a product"),(0,o.kt)("p",null,"Testing the backends with a product involves promoting the APIcast configuration, to staging and production environments, in order to make tests based on request calls."),(0,o.kt)("p",null,"Requests to a product are redirected to the corresponding backend according to the path. This path is configured when you add the backend to the product."),(0,o.kt)("p",null,"Navigate to ",(0,o.kt)("em",{parentName:"p"},"[Your","_","product","_","name]","/Integration/Configuration"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Under APIcast Configuration, you will see the mapping rules for each backend added to the product. Click ",(0,o.kt)("strong",{parentName:"li"},"Promote to Staging APIcast"),"."),(0,o.kt)("li",{parentName:"ol"},"Once promoted to staging, you can promote to Production. Under Staging APIcast, click ",(0,o.kt)("strong",{parentName:"li"},"Promote to Production APIcast"),"."),(0,o.kt)("li",{parentName:"ol"},"To test requests to your API in the command line, use the command provided in Example curl for testing.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"The curl command example is based on the first mapping rule in the product."))),(0,o.kt)("p",null,"When testing requests to your API, you can modify the mapping rules by adding methods and metrics."),(0,o.kt)("p",null,"Every time you modify the configuration and before making calls to your API, make sure you promote to the Staging and Production environments. When there are pending changes to be promoted to the Staging environment, you will see an exclamation mark in the Admin Portal, next to the Integration menu item."))}m.isMDXComponent=!0}}]);