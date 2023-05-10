"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46882],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},15254:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={title:"V4.5.11 release notes"},l="Config versioning",c={unversionedId:"Release_Notes_4.5.11",id:"version-4.6.5/Release_Notes_4.5.11",title:"V4.5.11 release notes",description:"- add versioning to the settings model",source:"@site/dataplatform_versioned_docs/version-4.6.5/Release_Notes_4.5.11.md",sourceDirName:".",slug:"/Release_Notes_4.5.11",permalink:"/sv/dataplatform/Release_Notes_4.5.11",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/dataplatform_versioned_docs/version-4.6.5/Release_Notes_4.5.11.md",tags:[],version:"4.6.5",lastUpdatedAt:1683712864,formattedLastUpdatedAt:"2023-05-10",frontMatter:{title:"V4.5.11 release notes"}},p={},d=[],u={toc:d};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"config-versioning"},"Config versioning"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"add versioning to the settings model"),(0,i.kt)("li",{parentName:"ul"},"add a title to the header version display so we can see the config version"),(0,i.kt)("li",{parentName:"ul"},"increase the version font size so that it is accessibility complient"),(0,i.kt)("li",{parentName:"ul"},"remove ",(0,i.kt)("inlineCode",{parentName:"li"},"<header> </header>")," since it blocks the header from sticking to the top when scrolling down. Apperently this isn't a accessibility issue either.")))}f.isMDXComponent=!0}}]);