"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2634],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),d=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return r.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),f=d(a),m=n,u=f["".concat(l,".").concat(m)]||f[m]||c[m]||o;return a?r.createElement(u,i(i({ref:e},p),{},{components:a})):r.createElement(u,i({ref:e},p))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},33261:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],s={id:"datasets_SortingDatasets",title:"Sorting Datasets",sidebar_label:"Sorting Datasets"},l=void 0,d={unversionedId:"datasets_SortingDatasets",id:"version-4.1.0/datasets_SortingDatasets",title:"Sorting Datasets",description:"Sorting allows you to reorder datasets in different ways.",source:"@site/i18n/nl/docusaurus-plugin-content-docs-dataplatform/version-4.1.0/dataplatform_DATASETS_SortingDataset.md",sourceDirName:".",slug:"/datasets_SortingDatasets",permalink:"/dataplatform/datasets_SortingDatasets",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/dataplatform_versioned_docs/version-4.1.0/dataplatform_DATASETS_SortingDataset.md",tags:[],version:"4.1.0",lastUpdatedBy:"mathieu1989",lastUpdatedAt:1655216981,formattedLastUpdatedAt:"14-6-2022",frontMatter:{id:"datasets_SortingDatasets",title:"Sorting Datasets",sidebar_label:"Sorting Datasets"}},p={},c=[],f={toc:c};function m(t){var e=t.components,a=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sorting allows you to reorder datasets in different ways. "),(0,o.kt)("p",null,"You may sort in the following ways:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Relevance"),(0,o.kt)("td",{parentName:"tr",align:"left"},"first: score / second: last modified")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Name Ascending"),(0,o.kt)("td",{parentName:"tr",align:"left"},"number followed by A-Z, based on title")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Name Descending"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Z-A followed by number, based on title")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Rating Ascending"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Datasets rated by best sorted on top")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Rating Descending"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Non-rated datasets sorted to top")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Last modified"),(0,o.kt)("td",{parentName:"tr",align:"left"},"most recent modifications to metadata")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Popular"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Highest rating and views on top")))))}m.isMDXComponent=!0}}]);