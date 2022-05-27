"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4015],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(a),f=s,h=p["".concat(o,".").concat(f)]||p[f]||u[f]||i;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function f(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:s,r[1]=c;for(var l=2;l<i;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},59211:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var n=a(87462),s=a(63366),i=(a(67294),a(3905)),r=["components"],c={id:"3scale_publish_ckan_api",title:"Publish CKAN APIs",sidebar_label:"Publish CKAN APIs"},o=void 0,l={unversionedId:"3scale/3scale_publish_ckan_api",id:"version-1.0.0/3scale/3scale_publish_ckan_api",title:"Publish CKAN APIs",description:"Register a CKAN API",source:"@site/versioned_docs/version-1.0.0/3scale/3scale_publish_ckan_api.md",sourceDirName:"3scale",slug:"/3scale/3scale_publish_ckan_api",permalink:"/sv/docs/1.0.0/3scale/3scale_publish_ckan_api",draft:!1,tags:[],version:"1.0.0",frontMatter:{id:"3scale_publish_ckan_api",title:"Publish CKAN APIs",sidebar_label:"Publish CKAN APIs"}},d={},u=[{value:"Register a CKAN API",id:"register-a-ckan-api",level:2},{value:"Publish the CKAN API",id:"publish-the-ckan-api",level:2},{value:"Restricting access to our Backend Methods",id:"restricting-access-to-our-backend-methods",level:2},{value:"Statistics",id:"statistics",level:2}],p={toc:u};function f(e){var t=e.components,c=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"register-a-ckan-api"},"Register a CKAN API"),(0,i.kt)("p",null,"We create a new Product, called ","'","CKAN API","'",":"),(0,i.kt)("img",{class:"img-fluid",src:a(90686).Z}),(0,i.kt)("p",null,"Under Product/Integration/Backends we define the new API endpoint and its public path:"),(0,i.kt)("img",{class:"img-fluid",src:a(48654).Z}),(0,i.kt)("p",null,"We want to define and measure two different CKAN APIs, the metadata API and the datastore API."),(0,i.kt)("p",null,"In order to manage them properly, we define them as two new methods, navigating to Backend/Methods ","&"," Metrics:"),(0,i.kt)("img",{class:"img-fluid",src:a(98171).Z}),(0,i.kt)("p",null,"This will help us to register our API specific endpoints with these methods under Mapping Rules."),(0,i.kt)("img",{class:"img-fluid",src:a(16224).Z}),(0,i.kt)("p",null,"We identify that inside the endpoints we not only have GET but also POST requests (that require an API key to be provided)."),(0,i.kt)("p",null,"3scale has a build-in function to modify the Headers to include custom ones. In our case, we want to include the key Authorization with its value (CKAN API key)."),(0,i.kt)("p",null,"To succeed this we navigate to Product/Integration/Policies and we click on Add policy and choose Header Modification. We choose the operation to be for a request, set the key name and the value."),(0,i.kt)("img",{class:"img-fluid",src:a(57542).Z}),(0,i.kt)("h2",{id:"publish-the-ckan-api"},"Publish the CKAN API"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"After applying all these additions and changes, we still have to navigate to Product/Integration/ /Configuration and promote the APIcast Configuration for these changes to be saved and published.")),(0,i.kt)("p",null,"*","During testing we got some errors during GET requests that lead us to change the default authorization way of 3scale. The default ",(0,i.kt)("em",{parentName:"p"},"CREDENTIALS LOCATION")," in Product/Integration/Settings was set to as query parameters (GET) or body parameters (POST/PUT/DELETE) and was interfering with the CKAN get credentials. For that reason, set the 3scale auth user key to be acquired from the HTTP Headers, option as HTTP Headers."),(0,i.kt)("img",{class:"img-fluid",src:a(36542).Z}),(0,i.kt)("h2",{id:"restricting-access-to-our-backend-methods"},"Restricting access to our Backend Methods"),(0,i.kt)("p",null,"Navigating to Product/Applications/Application Plans and choosing a plan, we can set pricing and limits to our already specified methods, and even restrict their use by disabling them."),(0,i.kt)("img",{class:"img-fluid",src:a(12918).Z}),(0,i.kt)("h2",{id:"statistics"},"Statistics"),(0,i.kt)("p",null,"The methods we defined for our API calls are also visible in the statistics section. Navigate to Product/Analytics/Traffic to get an overview of the CKAN API use."),(0,i.kt)("img",{class:"img-fluid",src:a(83028).Z}))}f.isMDXComponent=!0},90686:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ckan01-1ae3132e5ec0ff5beb7823fc16b2608b.png"},48654:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ckan02-6ac282c3ce824df7b0da2296447a7a78.png"},98171:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ckan03-e55256b45a7f016c4f2abfbfc25c2f1c.png"},16224:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ckan04-ce2f1f68853641923865f8bef3707ba5.png"},57542:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ckan05-328d6bf62fb841c5db03c2b6c618a418.png"},36542:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ckan06-258b5f919b90e8b4f80e10580cd4f730.png"},12918:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ckan07-a78cd8f315fb6600cb95c015b7577eed.png"},83028:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ckan08-8e85df84e09d8f07919d12d3fea3bc62.png"}}]);