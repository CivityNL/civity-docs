"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97856],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),g=i,u=m["".concat(s,".").concat(g)]||m[g]||d[g]||r;return n?a.createElement(u,l(l({ref:t},c),{},{components:n})):a.createElement(u,l({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={id:"3scale_api_management_admin_billing_settings",title:"Billing Settings",sidebar_label:"Billing Settings"},s=void 0,p={unversionedId:"3scale/3scale_api_management_admin_billing_settings",id:"version-1.0.0/3scale/3scale_api_management_admin_billing_settings",title:"Billing Settings",description:"Billing settings are divided into Charging &amp; Gateway and Credit Card Policies , both can be found in Audience/Billing.",source:"@site/versioned_docs/version-1.0.0/3scale/3scale_api_management_admin_billing_settings.md",sourceDirName:"3scale",slug:"/3scale/3scale_api_management_admin_billing_settings",permalink:"/docs/1.0.0/3scale/3scale_api_management_admin_billing_settings",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/versioned_docs/version-1.0.0/3scale/3scale_api_management_admin_billing_settings.md",tags:[],version:"1.0.0",lastUpdatedAt:1653657462,formattedLastUpdatedAt:"27-5-2022",frontMatter:{id:"3scale_api_management_admin_billing_settings",title:"Billing Settings",sidebar_label:"Billing Settings"}},c={},d=[{value:"Credit Card Gateways",id:"credit-card-gateways",level:2}],m={toc:d};function g(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Billing settings are divided into ",(0,r.kt)("strong",{parentName:"p"},"Charging ","&"," Gateway")," and ",(0,r.kt)("strong",{parentName:"p"},"Credit Card Policies")," , both can be found in ",(0,r.kt)("em",{parentName:"p"},"Audience/Billing"),"."),(0,r.kt)("p",null,"When setting up your billing configuration, you can choose between ",(0,r.kt)("strong",{parentName:"p"},"Prepaid")," and ",(0,r.kt)("strong",{parentName:"p"},"Postpaid"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prepaid mode: In prepaid mode, all fixed fees and setup fees are billed immediately at the beginning of the month or at the beginning of any pro-rated billing period. Variable costs are always calculated at the end of the month."),(0,r.kt)("li",{parentName:"ul"},"Postpaid mode: In postpaid mode, all fixed fees as well as variable fees are billed at the end of the month.")),(0,r.kt)("p",null,"To do so, navigate to ",(0,r.kt)("em",{parentName:"p"},"Audience/Billing/Charging ","&"," Gateway.")),(0,r.kt)("h2",{id:"credit-card-gateways"},"Credit Card Gateways"),(0,r.kt)("p",null,"3scale integrates with the following payment gateways for credit card transactions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adyen (in newer version): ",(0,r.kt)("a",{parentName:"li",href:"https://www.adyen.com/signup"},"https://www.adyen.com/signup#form")),(0,r.kt)("li",{parentName:"ul"},"Braintree: ",(0,r.kt)("a",{parentName:"li",href:"https://www.braintreepayments.com/nl"},"https://www.braintreepayments.com/nl")),(0,r.kt)("li",{parentName:"ul"},"Stripe: ",(0,r.kt)("a",{parentName:"li",href:"https://stripe.com/en-nl"},"https://stripe.com/en-nl"))))}g.isMDXComponent=!0}}]);