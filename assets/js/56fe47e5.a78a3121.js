"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5743],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,f=u["".concat(l,".").concat(g)]||u[g]||p[g]||i;return n?s.createElement(f,r(r({ref:t},d),{},{components:n})):s.createElement(f,r({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var c=2;c<i;c++)r[c]=n[c];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var s=n(87462),a=n(63366),i=(n(67294),n(3905)),r=["components"],o={id:"3scale_publish_ngsi_api",title:"Publish NGSI APIs",sidebar_label:"Publish NGSI APIs"},l=void 0,c={unversionedId:"3scale/3scale_publish_ngsi_api",id:"version-1.0.0/3scale/3scale_publish_ngsi_api",title:"Publish NGSI APIs",description:"Publish an NGSI API in 3Scale",source:"@site/versioned_docs/version-1.0.0/3scale/3scale_publish_ngsi_api.md",sourceDirName:"3scale",slug:"/3scale/3scale_publish_ngsi_api",permalink:"/docs/1.0.0/3scale/3scale_publish_ngsi_api",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/versioned_docs/version-1.0.0/3scale/3scale_publish_ngsi_api.md",tags:[],version:"1.0.0",lastUpdatedBy:"isabeladowsley",lastUpdatedAt:1653657462,formattedLastUpdatedAt:"27-5-2022",frontMatter:{id:"3scale_publish_ngsi_api",title:"Publish NGSI APIs",sidebar_label:"Publish NGSI APIs"}},d={},p=[{value:"Publish an NGSI API in 3Scale",id:"publish-an-ngsi-api-in-3scale",level:2},{value:"Customizing the NGSI backend",id:"customizing-the-ngsi-backend",level:2},{value:"Statistics",id:"statistics",level:2}],u={toc:p};function g(e){var t=e.components,o=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,s.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"publish-an-ngsi-api-in-3scale"},"Publish an NGSI API in 3Scale"),(0,i.kt)("p",null,"We create a new Product called ","'","NGSI","'"),(0,i.kt)("img",{class:"img-fluid",src:n(76919).Z}),(0,i.kt)("p",null,"Under Product/Integration/Backends we define the new API endpoint:"),(0,i.kt)("img",{class:"img-fluid",src:n(85012).Z}),(0,i.kt)("h2",{id:"customizing-the-ngsi-backend"},"Customizing the NGSI backend"),(0,i.kt)("p",null,"We want to manage context data information: entities and subscriptions."),(0,i.kt)("p",null,"We only want to allow GET HTTP methods for entities, so we need to define our actions under API Mapping Rules."),(0,i.kt)("p",null,"Another step to get a better usage overview is creating two methods to measure the entity calls and the subscription calls separately."),(0,i.kt)("img",{class:"img-fluid",src:n(78476).Z}),(0,i.kt)("p",null,"We need to define all endpoints (and group them by method) we want to allow access, under Mapping Rules, to set the HTTP methods that can be used."),(0,i.kt)("img",{class:"img-fluid",src:n(91875).Z}),(0,i.kt)("p",null,"For example, not defining a POST method for entities will return a \\","<","No Mapping Rule matched\\",">"," response if we try a POST request on that endpoint."),(0,i.kt)("p",null,"After applying all these additions and changes, we still have to navigate to Product/Integration/Configuration and promote the APIcast Configuration for these changes to be saved and published."),(0,i.kt)("p",null,"*","During testing we got some errors during GET requests that lead us to change the default authorization way of 3scale. The default option for ",(0,i.kt)("em",{parentName:"p"},"CREDENTIALS LOCATION")," in Product/Integration/Settings was set to As query parameters (GET) or body parameters (POST/PUT/DELETE) . It was interfering with the NGSI get credentials. For that reason, we need to set the 3scale auth user key to be acquired from the HTTP Headers, selecting the option As HTTP Headers."),(0,i.kt)("img",{class:"img-fluid",src:n(24515).Z}),(0,i.kt)("h2",{id:"statistics"},"Statistics"),(0,i.kt)("p",null,"The methods we defined for our API calls are also visible in the statistics section. Navigate to Product/Analytics/Traffic to get an overview of the NGSI API use."),(0,i.kt)("img",{class:"img-fluid",src:n(48145).Z}))}g.isMDXComponent=!0},76919:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/ngsi_01-699a1cebd8960c458fa129c4409ffadb.png"},85012:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/ngsi_02-04716336b6c888f9a0fb271fb826be29.png"},78476:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/ngsi_03-f2e93ef28971812dd5c9a855b72a5bd1.png"},91875:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/ngsi_04-988883d22b501913b338cdf90f1ff841.png"},24515:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/ngsi_05-1e649d0796fc642e357a0a3fd680e962.png"},48145:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/ngsi_06-a762f57c985586e0d362161dbeee88de.png"}}]);