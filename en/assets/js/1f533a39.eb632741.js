"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97414],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(a),p=r,f=u["".concat(s,".").concat(p)]||u[p]||d[p]||o;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},15039:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"3scale_api_management_master_admin_portal",title:"Master Admin Portal",sidebar_label:"Master Admin Portal"},s=void 0,c={unversionedId:"3scale/3scale_api_management_master_admin_portal",id:"version-1.0.0/3scale/3scale_api_management_master_admin_portal",title:"Master Admin Portal",description:"A master administrator monitors and manages the 3scale accounts through the Master Admin Portal and API endpoints. The Master Admin Portal contains information about all accounts in a deployment and allows for administration of accounts and users through a unique account page.",source:"@site/versioned_docs/version-1.0.0/3scale/3scale_api_management_master_admin_portal.md",sourceDirName:"3scale",slug:"/3scale/3scale_api_management_master_admin_portal",permalink:"/en/docs/1.0.0/3scale/3scale_api_management_master_admin_portal",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/versioned_docs/version-1.0.0/3scale/3scale_api_management_master_admin_portal.md",tags:[],version:"1.0.0",lastUpdatedAt:1653657462,formattedLastUpdatedAt:"5/27/2022",frontMatter:{id:"3scale_api_management_master_admin_portal",title:"Master Admin Portal",sidebar_label:"Master Admin Portal"}},m={},d=[{value:"Account Configuration",id:"account-configuration",level:2}],u={toc:d};function p(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A master administrator monitors and manages the 3scale accounts through the Master Admin Portal and API endpoints. The ",(0,o.kt)("strong",{parentName:"p"},"Master Admin Portal")," contains information about all accounts in a deployment and allows for administration of accounts and users through a unique account page."),(0,o.kt)("p",null,"Dashboard provides an overview of accounts, applications and their statistics.\u03b1\u03bd\u03c4"),(0,o.kt)("p",null,"Its default url is master .${wildcardDomain}."),(0,o.kt)("p",null,"In ",(0,o.kt)("em",{parentName:"p"},"Audience/Accounts/Listing")," you get a full list of the existing tenants and their status."),(0,o.kt)("h2",{id:"account-configuration"},"Account Configuration"),(0,o.kt)("p",null,"To create a new ",(0,o.kt)("strong",{parentName:"p"},"Admin Portal")," , you need to create new account inside Master Admin Portal."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("em",{parentName:"li"},"Audience/Accounts")," and click on ",(0,o.kt)("em",{parentName:"li"},"Create"),"."),(0,o.kt)("li",{parentName:"ol"},"You provide a username, email and password as well as the organization/group name.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"The name you provide will be visible as the subdomain of your new admin portal."))),(0,o.kt)("p",null,"After creating a new account, it needs to be activated through ",(0,o.kt)("em",{parentName:"p"},"Audience/Accounts/Listing")," for it to be accessible."),(0,o.kt)("p",null,"An ",(0,o.kt)("strong",{parentName:"p"},"Admin Portal")," serves as a tenant of the Master Admin Portal. When deploying a new 3scale instance, a default tenant is created with a fixed url, 3scale-admin.${wildcardDomain}"),(0,o.kt)("p",null,"Together with the creation of an Admin Portal, a ",(0,o.kt)("strong",{parentName:"p"},"Developer Portal")," is also created. The default one also comes with a fixed url, 3scale.${wildcardDomain}."))}p.isMDXComponent=!0}}]);