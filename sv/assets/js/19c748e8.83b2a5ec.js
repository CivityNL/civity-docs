"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4097],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),c=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(a),m=n,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(f,i(i({ref:e},p),{},{components:a})):r.createElement(f,i({ref:e},p))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},93408:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"Rotterdam",title:"What is Data Validation",sidebar_label:"What is Data Validation"},s=void 0,c={unversionedId:"Rotterdam",id:"version-1.0.1/Rotterdam",title:"What is Data Validation",description:"Data Validation",source:"@site/datacatalogus_versioned_docs/version-1.0.1/datatacatalog.md",sourceDirName:".",slug:"/Rotterdam",permalink:"/sv/datacatalogus/Rotterdam",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/datacatalogus_versioned_docs/version-1.0.1/datatacatalog.md",tags:[],version:"1.0.1",lastUpdatedAt:1653657462,formattedLastUpdatedAt:"2022-05-27",frontMatter:{id:"Rotterdam",title:"What is Data Validation",sidebar_label:"What is Data Validation"}},p={},d=[{value:"Data Validation",id:"data-validation",level:2},{value:"How it Works",id:"how-it-works",level:2}],u={toc:d};function m(t){var e=t.components,a=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"data-validation"},"Data Validation"),(0,o.kt)("p",null,"Data validation is the process of providing feedback about the quality of your data by performing multiple checks on tabular data. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Data Validation allows you to perform checks on your data. This improves the overall quality and consistency of your data.")),(0,o.kt)("p",null,"Tabular data is one of the most common forms of data available on the web. An example of tabular data is the information stored in an Excel worksheet or a CSV file."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Currently supported file formats in ",(0,o.kt)("em",{parentName:"p"},"Dataplatform")," are: ",(0,o.kt)("strong",{parentName:"p"},"CSV"),", ",(0,o.kt)("strong",{parentName:"p"},"XLS"),", and ",(0,o.kt)("strong",{parentName:"p"},"XLSX"))),(0,o.kt)("p",null,"The data will be checked against a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Schema"))," where all the constraints for the data checks are defined."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Create custom data schemas to fit your data constraints.")),(0,o.kt)("h2",{id:"how-it-works"},"How it Works"),(0,o.kt)("p",null,"The Validation is powered by the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Goodtables"))," (",(0,o.kt)("a",{href:"https://goodtables.io/",target:"_blank"},"website"),") framework, it is equipped to\nperform different types of checks and it is integrated in CKAN with the extensions ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"ckanext-validation"))," (",(0,o.kt)("a",{href:"https://github.com/frictionlessdata/ckanext-validation",target:"_blank"},"@GitHub"),")."),(0,o.kt)("p",null,"The schema defined must follow the specifications of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Table Schema"))," (",(0,o.kt)("a",{href:"https://frictionlessdata.io/specs/table-schema/",target:"_blank"},"docs"),")."))}m.isMDXComponent=!0}}]);