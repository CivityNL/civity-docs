"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45321],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},75668:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={title:"V4.5.7 release notes"},s=void 0,c={unversionedId:"Release_Notes_4.5.7",id:"version-4.7.2/Release_Notes_4.5.7",title:"V4.5.7 release notes",description:"Homepage loads markdown from CKAN",source:"@site/dataplatform_versioned_docs/version-4.7.2/Release_Notes_4.5.7.md",sourceDirName:".",slug:"/Release_Notes_4.5.7",permalink:"/en/dataplatform/Release_Notes_4.5.7",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/dataplatform_versioned_docs/version-4.7.2/Release_Notes_4.5.7.md",tags:[],version:"4.7.2",lastUpdatedAt:1694174179,formattedLastUpdatedAt:"9/8/2023",frontMatter:{title:"V4.5.7 release notes"}},p={},u=[],f={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Homepage loads markdown from CKAN"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Home page content is loaded from CKAN"),(0,a.kt)("li",{parentName:"ul"},"When no home page content is found, it will go to the system page information"),(0,a.kt)("li",{parentName:"ul"},"Plumbing task of getting rid of http.client calls in the code and refer to the new ApiService to do all calls."),(0,a.kt)("li",{parentName:"ul"},"Add an exception for unique urls described in the settings to recognizing organizations in non dataplatform urls."),(0,a.kt)("li",{parentName:"ul"},"Removed organisations that are no longer customers from the config.")))}d.isMDXComponent=!0}}]);