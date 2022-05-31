"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9827],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=d(a),f=r,m=u["".concat(s,".").concat(f)]||u[f]||c[f]||o;return a?n.createElement(m,i(i({ref:e},p),{},{components:a})):n.createElement(m,i({ref:e},p))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},70574:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"validation_WhatIsDataValidation",title:"What is Data Validation",sidebar_label:"What is Data Validation"},s=void 0,d={unversionedId:"validation_WhatIsDataValidation",id:"version-3.5.0/validation_WhatIsDataValidation",title:"What is Data Validation",description:"Data Validation",source:"@site/i18n/nl/docusaurus-plugin-content-docs-dataplatform/version-3.5.0/dataplatform_VALIDATION_WhatIsDataValidation.md",sourceDirName:".",slug:"/validation_WhatIsDataValidation",permalink:"/dataplatform/validation_WhatIsDataValidation",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/dataplatform_versioned_docs/version-3.5.0/dataplatform_VALIDATION_WhatIsDataValidation.md",tags:[],version:"3.5.0",lastUpdatedBy:"isabeladowsley",lastUpdatedAt:1654003103,formattedLastUpdatedAt:"31-5-2022",frontMatter:{id:"validation_WhatIsDataValidation",title:"What is Data Validation",sidebar_label:"What is Data Validation"}},p={},c=[{value:"Data Validation",id:"data-validation",level:2},{value:"How it Works",id:"how-it-works",level:2}],u={toc:c};function f(t){var e=t.components,a=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"data-validation"},"Data Validation"),(0,o.kt)("p",null,"Data validation is the process of providing feedback about the quality of your data by performing multiple checks on tabular data. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Data Validation allows you to perform checks on your data. This improves the overall quality and consistency of your data.")),(0,o.kt)("p",null,"Tabular data is one of the most common forms of data available on the web. An example of tabular data is the information stored in an Excel worksheet or a CSV file."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Currently supported file formats in ",(0,o.kt)("em",{parentName:"p"},"Dataplatform")," are: ",(0,o.kt)("strong",{parentName:"p"},"CSV"),", ",(0,o.kt)("strong",{parentName:"p"},"XLS"),", and ",(0,o.kt)("strong",{parentName:"p"},"XLSX"))),(0,o.kt)("p",null,"The data will be checked against a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Schema"))," where all the constraints for the data checks are defined."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Create custom data schemas to fit your data constraints.")),(0,o.kt)("h2",{id:"how-it-works"},"How it Works"),(0,o.kt)("p",null,"The Validation is powered by the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Goodtables"))," (",(0,o.kt)("a",{href:"https://goodtables.io/",target:"_blank"},"website"),") framework, it is equipped to\nperform different types of checks and it is integrated in CKAN with the extensions ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"ckanext-validation"))," (",(0,o.kt)("a",{href:"https://github.com/frictionlessdata/ckanext-validation",target:"_blank"},"@GitHub"),")."),(0,o.kt)("p",null,"The schema defined must follow the specifications of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Table Schema"))," (",(0,o.kt)("a",{href:"https://frictionlessdata.io/specs/table-schema/",target:"_blank"},"docs"),")."))}f.isMDXComponent=!0}}]);