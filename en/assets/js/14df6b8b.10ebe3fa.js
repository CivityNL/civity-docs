"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[441],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>f});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(i),f=n,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||r;return i?a.createElement(m,o(o({ref:t},p),{},{components:i})):a.createElement(m,o({ref:t},p))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<r;l++)o[l]=i[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},49015:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=i(87462),n=i(63366),r=(i(67294),i(3905)),o=["components"],s={id:"apicurio_api_validation",title:"Validating APIs with Apicurio",sidebar_label:"Validating APIs with Apicurio"},c=void 0,l={unversionedId:"3scale/apicurio_api_validation",id:"version-1.0.0/3scale/apicurio_api_validation",title:"Validating APIs with Apicurio",description:"There are many ways in which an API can be not fully functional. These include:",source:"@site/versioned_docs/version-1.0.0/3scale/apicurio_api_validation.md",sourceDirName:"3scale",slug:"/3scale/apicurio_api_validation",permalink:"/en/docs/1.0.0/3scale/apicurio_api_validation",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/versioned_docs/version-1.0.0/3scale/apicurio_api_validation.md",tags:[],version:"1.0.0",lastUpdatedBy:"isabeladowsley",lastUpdatedAt:1653657462,formattedLastUpdatedAt:"5/27/2022",frontMatter:{id:"apicurio_api_validation",title:"Validating APIs with Apicurio",sidebar_label:"Validating APIs with Apicurio"}},p={},u=[{value:"Validating an OpenAPI with Apicurio",id:"validating-an-openapi-with-apicurio",level:2}],d={toc:u};function f(e){var t=e.components,s=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are many ways in which an API can be not fully functional. These include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Invalid response codes"),(0,r.kt)("li",{parentName:"ul"},"Invalid response headers"),(0,r.kt)("li",{parentName:"ul"},"API time-outs"),(0,r.kt)("li",{parentName:"ul"},"Slow API response with respect to response data bytes"),(0,r.kt)("li",{parentName:"ul"},"Incorrect required data in JSON responses"),(0,r.kt)("li",{parentName:"ul"},"Missing required text in response bodies"),(0,r.kt)("li",{parentName:"ul"},"Slow response for customers in specific locations")),(0,r.kt)("h2",{id:"validating-an-openapi-with-apicurio"},"Validating an OpenAPI with Apicurio"),(0,r.kt)("p",null,"You visit ",(0,r.kt)("a",{href:"https://studio.apicur.io/apis",target:"_blank"},"Apicurio")," and register/login."),(0,r.kt)("p",null,"After logging in successfully, you are redirected to the Dashboard tab."),(0,r.kt)("img",{class:"img-fluid",src:i(63512).Z}),(0,r.kt)("p",null,"In the Import API tab, we need to supply our OpenAPI definition, either from URL or a file:"),(0,r.kt)("img",{class:"img-fluid",src:i(29103).Z}),(0,r.kt)("img",{class:"img-fluid",src:i(23912).Z}),(0,r.kt)("p",null,"Along with the overview of the contents of our API ,on the top right part of the screen we can identify the issues that correspond to the ",(0,r.kt)("strong",{parentName:"p"},"validation problems")," of our API."),(0,r.kt)("img",{class:"img-fluid",src:i(1774).Z}),(0,r.kt)("p",null,"By clicking on Go to problem, you are directed to a sub-tab where you can investigate in more detail, with exclamation triangles pointing directly to the issues."),(0,r.kt)("img",{class:"img-fluid",src:i(81634).Z}),(0,r.kt)("p",null,"Overall, through Apicurio we get a first indication on issues of our API and how to solve them."))}f.isMDXComponent=!0},63512:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/apicurio01-1c76241ee163dc7c365446e713aa7c35.png"},29103:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/apicurio02-72712807ed98e5dab9c6a45a2b3e1d4a.png"},23912:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/apicurio03-27026dd6348d0ba8ca051c88cd772230.png"},1774:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/apicurio04-1abda0bc8f0c7582acadad547077e752.png"},81634:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/apicurio05-43693faff9b6b5c5a4870d989baa6c84.png"}}]);