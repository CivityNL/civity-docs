"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1032],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(f,s(s({ref:t},u),{},{components:r})):a.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},11621:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=["components"],l={id:"datasets_xls2csv",title:"Generate CSV from XLS resource",sidebar_label:"Generate CSV from XLS resource"},i=void 0,c={unversionedId:"dataplatform/datasets_xls2csv",id:"version-1.0.0/dataplatform/datasets_xls2csv",title:"Generate CSV from XLS resource",description:"When a user wants to upload an xls resource inside a dataset, she now has the ability to convert it into a csv format.",source:"@site/versioned_docs/version-1.0.0/dataplatform/dataplatform_DATASETS_xls2csv.md",sourceDirName:"dataplatform",slug:"/dataplatform/datasets_xls2csv",permalink:"/docs/1.0.0/dataplatform/datasets_xls2csv",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/versioned_docs/version-1.0.0/dataplatform/dataplatform_DATASETS_xls2csv.md",tags:[],version:"1.0.0",lastUpdatedBy:"isabeladowsley",lastUpdatedAt:1653657462,formattedLastUpdatedAt:"27-5-2022",frontMatter:{id:"datasets_xls2csv",title:"Generate CSV from XLS resource",sidebar_label:"Generate CSV from XLS resource"}},u={},d=[],p={toc:d};function m(e){var t=e.components,l=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When a user wants to upload an xls resource inside a dataset, she now has the ability to convert it into a csv format.\nWith the newly added CSV option the user can choose to generate a CSV resource with the same metadata and content\nof the original XLS resource. These two resources will be bound together and will be\nsimultaneously manipulated. They will be simultaneously updated and deleted. The new csv resource holds the same name\nas the original with the prefix: ",(0,o.kt)("strong",{parentName:"p"},"*CSV.")," xls resource name*"),(0,o.kt)("img",{class:"imageStyle",alt:"SCREENCAST: ConvertSingle",src:r(11010).Z}),(0,o.kt)("p",null,"The user has also the ability to generate a new csv resource in an existing xls resource, through selecting the add CSV option and updating the xls resource. She can even delete a previously generated csv resource by setting the CSV option to 'No action' and updating the resource."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Overall, this ckan extension offers the above options when uploading an xls resource:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"ADD CSV ON XLS CREATE"),(0,o.kt)("li",{parentName:"ul"},"UPDATE CSV ON XLS UPDATE"),(0,o.kt)("li",{parentName:"ul"},"ADD CSV ON XLS UPDATE"),(0,o.kt)("li",{parentName:"ul"},"DELETE CSV ON XLS UPDATE "),(0,o.kt)("li",{parentName:"ul"},"DELETE CSV ON XLS DELETE"))),(0,o.kt)("p",null,"If the xls resource contains more than one spreadsheets, then there are generated as many csv resources as the number\nof the xls spreadsheets. The new csv resources names follow the same name structure as described and also the spreadsheet\nname as suffix: *CSV.xls resource name.",(0,o.kt)("strong",{parentName:"p"},"spreadsheet name*")),(0,o.kt)("img",{class:"imageStyle",alt:"SCREENCAST: ConvertMulti",src:r(64631).Z}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null),"In this ",(0,o.kt)("a",{href:"https://youtu.be/z6xj3kO8BJc"},"video")," you can watch a thorough demonstration of this new feature.")}m.isMDXComponent=!0},64631:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/dataplatform_DATASETS_xls2csv_ConvertMulti-dfab3eec7a2fc33eb86f6033ffe12ebb.png"},11010:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/dataplatform_DATASETS_xls2csv_ConvertSingle-d8b5e696c8c8331fdc66d435ab7a198a.png"}}]);