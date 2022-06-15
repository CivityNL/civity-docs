"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9305],{3905:(e,t,s)=>{s.d(t,{Zo:()=>d,kt:()=>g});var a=s(67294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,a,n=function(e,t){if(null==e)return{};var s,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)s=i[a],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)s=i[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),s=t;return e&&(s="function"==typeof e?e(t):r(r({},t),e)),s},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var s=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=l(s),g=n,h=u["".concat(c,".").concat(g)]||u[g]||p[g]||i;return s?a.createElement(h,r(r({ref:t},d),{},{components:s})):a.createElement(h,r({ref:t},d))}));function g(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=s.length,r=new Array(i);r[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var l=2;l<i;l++)r[l]=s[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,s)}u.displayName="MDXCreateElement"},77304:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=s(87462),n=s(63366),i=(s(67294),s(3905)),r=["components"],o={id:"3scale_publish_ogc_web_services",title:"Publish OGC web services",sidebar_label:"Publish OGC web services"},c=void 0,l={unversionedId:"3scale/3scale_publish_ogc_web_services",id:"version-1.0.0/3scale/3scale_publish_ogc_web_services",title:"Publish OGC web services",description:"Register an OGC service endpoint",source:"@site/versioned_docs/version-1.0.0/3scale/3scale_publish_ogc_web_services.md",sourceDirName:"3scale",slug:"/3scale/3scale_publish_ogc_web_services",permalink:"/en/docs/1.0.0/3scale/3scale_publish_ogc_web_services",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/versioned_docs/version-1.0.0/3scale/3scale_publish_ogc_web_services.md",tags:[],version:"1.0.0",lastUpdatedBy:"isabeladowsley",lastUpdatedAt:1653657462,formattedLastUpdatedAt:"5/27/2022",frontMatter:{id:"3scale_publish_ogc_web_services",title:"Publish OGC web services",sidebar_label:"Publish OGC web services"}},d={},p=[{value:"Register an OGC service endpoint",id:"register-an-ogc-service-endpoint",level:2},{value:"Publish the OGC services",id:"publish-the-ogc-services",level:2},{value:"Restricting access to our Backend Methods",id:"restricting-access-to-our-backend-methods",level:2},{value:"Statistics",id:"statistics",level:2}],u={toc:p};function g(e){var t=e.components,o=(0,n.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"register-an-ogc-service-endpoint"},"Register an OGC service endpoint"),(0,i.kt)("p",null,"We create a new Product called ","'","OGC","'"),(0,i.kt)("img",{class:"img-fluid",src:s(67440).Z}),(0,i.kt)("p",null,"Under Product/Integration/Backends we define the new API endpoint and its public path."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"For the OGC services we have two options on defining the access points. We can either define straight from inside the Geoserver URL, by defining the appropriate workspace to give access, or through the geoserver redirection from inside the appropriate CKAN instance. For example, we could have these two options:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"http://{geoserverURL}:8080/geoserver/workspace",(0,i.kt)("em",{parentName:"li"},"datastore"),"{ckanInstance}/ows ",(0,i.kt)("em",{parentName:"li"},"or")),(0,i.kt)("li",{parentName:"ol"},"https://{ckanInstance}.dataplatform.nl/ows")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"We select the second option as it is better manageable under the 3scale API management:")),(0,i.kt)("img",{class:"img-fluid",src:s(35857).Z}),(0,i.kt)("p",null,"We set the Public Path to /ogc."),(0,i.kt)("p",null,"Through OGC services, we want to make available three available requests: WMS/ WFS/ WCS. In order to manage these requests separately for better management and overview of their use, we define three new methods, navigating to Backend/Methods ","&"," Metrics:"),(0,i.kt)("img",{class:"img-fluid",src:s(58222).Z}),(0,i.kt)("p",null,"This will help us to register our API specific endpoints with these methods under Mapping Rules:"),(0,i.kt)("img",{class:"img-fluid",src:s(1021).Z}),(0,i.kt)("p",null,"These endpoints are coming straight forward from the ckan instance as mentioned above (option 2). For that reason we need to define the CKAN API key under 3scale configuration."),(0,i.kt)("p",null,"3scale has a build-in function to modify the Headers to include custom ones. In our case, we want to include the key Authorization with its value (CKAN API key)."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"*","In the case we were choosing option 1 accessing OGC services directly from the geoserver machine, we would need to include in the Headers the geoserver credentials (username/password).")),(0,i.kt)("p",null,"To succeed this, we navigate to Product/Integration/Policies and we click on Add policy and choose Header Modification. We choose the operation to be for a request, set the key name and the value."),(0,i.kt)("img",{class:"img-fluid",src:s(49882).Z}),(0,i.kt)("h2",{id:"publish-the-ogc-services"},"Publish the OGC services"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"After applying all these additions and changes, we still have to navigate to Product/Integration/ /Configuration and promote the APIcast Configuration for these changes to be saved and published.")),(0,i.kt)("p",null,"After publishing for the first time and trying to access one of the OGC endpoints, we get the error ",'"',"Authentication parameters missing",'"',"."),(0,i.kt)("img",{class:"img-fluid",src:s(28969).Z}),(0,i.kt)("p",null,"This has to do with the fact that the API endpoint arguments mix up with the 3scale credentials location. The default 3scale configuration defines the auth user key as a query parameter and in order to fix the encountered error, we need to convert this to an HTTP Header."),(0,i.kt)("p",null,"Navigating to Product/Integration/Settings we are able to set the 3scale auth user key to be acquired from the HTTP Headers, option as HTTP Headers. This fixes the encountered error."),(0,i.kt)("img",{class:"img-fluid",src:s(54028).Z}),(0,i.kt)("h2",{id:"restricting-access-to-our-backend-methods"},"Restricting access to our Backend Methods"),(0,i.kt)("p",null,"Navigating to Product/Applications/Application Plans and choosing a plan, we can set pricing and limits to our already specified methods, and even restrict their use by disabling them."),(0,i.kt)("img",{class:"img-fluid",src:s(86250).Z}),(0,i.kt)("h2",{id:"statistics"},"Statistics"),(0,i.kt)("p",null,"The methods we defined for our API calls are also visible in the statistics section. Navigate to Product/Analytics/Traffic to get an overview of the OGC services use."),(0,i.kt)("img",{class:"img-fluid",src:s(18225).Z}))}g.isMDXComponent=!0},67440:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/ogc01-2fe413fba901b0760aa0550da2790c87.png"},35857:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/ogc02-03926973de063050aeb4ddf061866a62.png"},58222:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/ogc03-4a692e07d929f1a1a141f25e4d3faab8.png"},1021:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/ogc04-cb6b5d6462dabf0e8410ba3c20fd9a57.png"},49882:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/ogc05-475cd3cc7eeaf3e64a98ec8785e011b2.png"},28969:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/ogc06-9fd3ba8a72c91773129da505f18620c1.png"},54028:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/ogc07-d4625908cec7d07c23823c237634c26c.png"},86250:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/ogc08-72470ae89a3bfaa0dc8b366e7776362a.png"},18225:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/ogc09-6a82b9ff05439f084e6520a1dd1deb80.png"}}]);