"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8030],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var s=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=s.createContext({}),l=function(e){var t=s.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return a?s.createElement(g,i(i({ref:t},p),{},{components:a})):s.createElement(g,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<r;l++)i[l]=a[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,a)}u.displayName="MDXCreateElement"},31742:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=a(87462),n=a(63366),r=(a(67294),a(3905)),i=["components"],o={id:"3scale_api_management_admin_usage_statistics",title:"Usage Statistics",sidebar_label:"Usage Statistics"},c="Usage Statistics in 3scale",l={unversionedId:"3scale/3scale_api_management_admin_usage_statistics",id:"version-1.0.0/3scale/3scale_api_management_admin_usage_statistics",title:"Usage Statistics",description:"Generic View",source:"@site/versioned_docs/version-1.0.0/3scale/3scale_api_management_admin_usage_statistics.md",sourceDirName:"3scale",slug:"/3scale/3scale_api_management_admin_usage_statistics",permalink:"/en/docs/1.0.0/3scale/3scale_api_management_admin_usage_statistics",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/versioned_docs/version-1.0.0/3scale/3scale_api_management_admin_usage_statistics.md",tags:[],version:"1.0.0",lastUpdatedAt:1653657462,formattedLastUpdatedAt:"5/27/2022",frontMatter:{id:"3scale_api_management_admin_usage_statistics",title:"Usage Statistics",sidebar_label:"Usage Statistics"}},p={},d=[],u={toc:d};function m(e){var t=e.components,o=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,s.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"usage-statistics-in-3scale"},"Usage Statistics in 3scale"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Generic View")),(0,r.kt)("p",null,"From our ",(0,r.kt)("em",{parentName:"p"},"Homepage/Dashboard")," view of the 3scale API Management admin portal we can get a first overview of our APIs usage:"),(0,r.kt)("img",{class:"img-fluid",src:a(32845).Z}),(0,r.kt)("p",null,"Under ",(0,r.kt)("em",{parentName:"p"},"AUDIENCE")," tab we can see latest signups (new registrations to our API services), together with a recap of whether a user","'","s application has reached a potential usage limit."),(0,r.kt)("p",null,"Under ",(0,r.kt)("em",{parentName:"p"},"APIs")," tab we can see some general info on the usage of our APIs. Top Applications to the right side of the tab display the users","'"," applications that made the most use of our APIs."),(0,r.kt)("p",null,"Clicking on the ANALYTICS subtab of the APIs Tab we enter to a more detailed view of the traffic / API consumption."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"API Traffic")),(0,r.kt)("p",null,"Navigating to Product/Analytics, we have access to several usage statistics:"),(0,r.kt)("img",{class:"img-fluid",src:a(74458).Z}),(0,r.kt)("p",null,"Under ",(0,r.kt)("em",{parentName:"p"},"Traffic")," tab we get an overview of the API consumption per day and time. We can set the view to daily, weekly, monthly or set manually the day range. In this example we not only get an overview of the hits but also two more values, metadata and datastore. These values are Methods that are set under the current API/backend, in order to group specific API endpoints and succeed a more in depth view of the API","'","s usage. In this example, ",(0,r.kt)("em",{parentName:"p"},"'","metadata endpoints","'")," correspond to the GET requests and ",(0,r.kt)("em",{parentName:"p"},"'","datastore endpoints","'")," to the POST requests done by the API consumers."),(0,r.kt)("p",null,"There is also the ability to export the usage statistics in a .csv format."),(0,r.kt)("img",{class:"img-fluid",src:a(38311).Z}),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"Daily Averages")," tab displays the API usage per day of the week. One odd in this display is that the dropdown menu displays twice the option Hits. This happens in case a product (example: CKAN API) consists of more than one backends. The naming (hits.11) is inconvenient and is a core 3scale structure. Under Hits.11 though we are able to display the usage per Method (entity is explained before)."),(0,r.kt)("p",null,"Same structure goes for the following tabs Hourly Averages and Top Applications."),(0,r.kt)("img",{class:"img-fluid",src:a(81892).Z}),(0,r.kt)("p",null,"Under ",(0,r.kt)("em",{parentName:"p"},"Response Codes")," tab we get a information on the response codes received to our API consumers while using our endpoints, with 2XX corresponding to successful requests, 5XX to unsuccessful ones and 4XX to not authorized actions."),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"Alerts")," tab displays recent alerts or violations."),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"Integration Errors")," tan can provide us with some feedback on errors occurred during our API integration, in particular in calls made to methods of 3scale","'","s Service Management API."))}m.isMDXComponent=!0},32845:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/stats01-e6a3138e2e62096e11b7cafd93032f1e.png"},74458:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/stats02-d28f6480f65f4bc282fa8353de89b085.png"},38311:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/stats03-be4b5b01e73c33c23c217875d5ee5d9f.png"},81892:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/stats04-f0c40fc68a859d089631801278db39d3.png"}}]);