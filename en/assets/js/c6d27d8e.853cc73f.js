"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2043],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},74725:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=["components"],l={id:"datasets_xls2csv",title:"Generate CSV from XLS resource",sidebar_label:"Generate CSV from XLS resource"},i=void 0,c={unversionedId:"datasets_xls2csv",id:"version-4.0.0/datasets_xls2csv",title:"Generate CSV from XLS resource",description:"When a user wants to upload an xls resource inside a dataset, she now has the ability to convert it into a csv format.",source:"@site/dataplatform_versioned_docs/version-4.0.0/dataplatform_DATASETS_xls2csv.md",sourceDirName:".",slug:"/datasets_xls2csv",permalink:"/en/dataplatform/4.0.0/datasets_xls2csv",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/dataplatform_versioned_docs/version-4.0.0/dataplatform_DATASETS_xls2csv.md",tags:[],version:"4.0.0",lastUpdatedAt:1655216981,formattedLastUpdatedAt:"6/14/2022",frontMatter:{id:"datasets_xls2csv",title:"Generate CSV from XLS resource",sidebar_label:"Generate CSV from XLS resource"}},u={},d=[],p={toc:d};function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"When a user wants to upload an xls resource inside a dataset, she now has the ability to convert it into a csv format.\nWith the newly added CSV option the user can choose to generate a CSV resource with the same metadata and content\nof the original XLS resource. These two resources will be bound together and will be\nsimultaneously manipulated. They will be simultaneously updated and deleted. The new csv resource holds the same name\nas the original with the prefix: ",(0,s.kt)("strong",{parentName:"p"},"*CSV.")," xls resource name*"),(0,s.kt)("img",{class:"imageStyle",alt:"SCREENCAST: ConvertSingle",src:r(1078).Z}),(0,s.kt)("p",null,"The user has also the ability to generate a new csv resource in an existing xls resource, through selecting the add CSV option and updating the xls resource. She can even delete a previously generated csv resource by setting the CSV option to 'No action' and updating the resource."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Overall, this ckan extension offers the above options when uploading an xls resource:"),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"ADD CSV ON XLS CREATE"),(0,s.kt)("li",{parentName:"ul"},"UPDATE CSV ON XLS UPDATE"),(0,s.kt)("li",{parentName:"ul"},"ADD CSV ON XLS UPDATE"),(0,s.kt)("li",{parentName:"ul"},"DELETE CSV ON XLS UPDATE "),(0,s.kt)("li",{parentName:"ul"},"DELETE CSV ON XLS DELETE"))),(0,s.kt)("p",null,"If the xls resource contains more than one spreadsheets, then there are generated as many csv resources as the number\nof the xls spreadsheets. The new csv resources names follow the same name structure as described and also the spreadsheet\nname as suffix: *CSV.xls resource name.",(0,s.kt)("strong",{parentName:"p"},"spreadsheet name*")),(0,s.kt)("img",{class:"imageStyle",alt:"SCREENCAST: ConvertMulti",src:r(62899).Z}),(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)("br",null),"In this ",(0,s.kt)("a",{href:"https://youtu.be/z6xj3kO8BJc"},"video")," you can watch a thorough demonstration of this new feature.")}m.isMDXComponent=!0},62899:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dataplatform_DATASETS_xls2csv_ConvertMulti-dfab3eec7a2fc33eb86f6033ffe12ebb.png"},1078:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dataplatform_DATASETS_xls2csv_ConvertSingle-d8b5e696c8c8331fdc66d435ab7a198a.png"}}]);