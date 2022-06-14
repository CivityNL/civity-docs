"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8562],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),d=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),f=d(a),g=n,c=f["".concat(o,".").concat(g)]||f[g]||m[g]||i;return a?r.createElement(c,l(l({ref:e},p),{},{components:a})):r.createElement(c,l({ref:e},p))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=f;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:n,l[1]=s;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},22811:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=["components"],s={id:"datasets_SortFilterDatasets",title:"Sorting and Filtering Datasets",sidebar_label:"Sorting and Filtering Datasets"},o=void 0,d={unversionedId:"datasets_SortFilterDatasets",id:"version-4.1.0/datasets_SortFilterDatasets",title:"Sorting and Filtering Datasets",description:"Sorting allows you to reorder datasets in different ways.",source:"@site/dataplatform_versioned_docs/version-4.1.0/dataplatform_DATASETS_SortFilteringDataset.md",sourceDirName:".",slug:"/datasets_SortFilterDatasets",permalink:"/en/dataplatform/datasets_SortFilterDatasets",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/dataplatform_versioned_docs/version-4.1.0/dataplatform_DATASETS_SortFilteringDataset.md",tags:[],version:"4.1.0",lastUpdatedBy:"mathieu1989",lastUpdatedAt:1655216981,formattedLastUpdatedAt:"6/14/2022",frontMatter:{id:"datasets_SortFilterDatasets",title:"Sorting and Filtering Datasets",sidebar_label:"Sorting and Filtering Datasets"},sidebar:"dataplatform",previous:{title:"Searching Datasets",permalink:"/en/dataplatform/datasets_SearchDatasets"},next:{title:"Downloading Datasets",permalink:"/en/dataplatform/datasets_DownloadingDatasets"}},p={},m=[{value:"Filtering Datasets",id:"filtering-datasets",level:2},{value:"Filtering Datasets by Multiple Items",id:"filtering-datasets-by-multiple-items",level:3},{value:"Remove Filters",id:"remove-filters",level:3},{value:"Fitlering Datasets on the Group / Theme Page",id:"fitlering-datasets-on-the-group--theme-page",level:3}],f={toc:m};function g(t){var e=t.components,s=(0,n.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},f,s,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sorting allows you to reorder datasets in different ways. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The list of datasets is dynamically altered by the criterea dictated by the filters")),(0,i.kt)("p",null,"You may sort in the following ways:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Relevance"),(0,i.kt)("td",{parentName:"tr",align:"left"},"first: score / second: last modified")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Name Ascending"),(0,i.kt)("td",{parentName:"tr",align:"left"},"number followed by A-Z, based on title")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Name Descending"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Z-A followed by number, based on title")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Rating Ascending"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Datasets rated by best sorted on top")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Rating Descending"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Non-rated datasets sorted to top")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Last modified"),(0,i.kt)("td",{parentName:"tr",align:"left"},"most recent modifications to metadata")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Popular"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Highest rating and views on top")))),(0,i.kt)("h2",{id:"filtering-datasets"},"Filtering Datasets"),(0,i.kt)("p",null,"Filtering datasets can be accomplished in various ways, using single or multiple filters. Filter options are shown ont he left-hand side of the of the dataset overview page in CKAN."),(0,i.kt)("p",null,"It is possible to filter results based on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Organizations"),(0,i.kt)("li",{parentName:"ul"},"Groups"),(0,i.kt)("li",{parentName:"ul"},"Tags"),(0,i.kt)("li",{parentName:"ul"},"File format")),(0,i.kt)("h3",{id:"filtering-datasets-by-multiple-items"},"Filtering Datasets by Multiple Items"),(0,i.kt)("p",null,"Filtering can be accomplished by the use of more than one filter."),(0,i.kt)("img",{class:"imageStyle",alt:"image: Filtering Datasets",src:a(3356).Z}),(0,i.kt)("h3",{id:"remove-filters"},"Remove Filters"),(0,i.kt)("p",null,"Filters may be removed from a search, one-by-one, by clicking on the cross behind the selected filter."),(0,i.kt)("p",null,"You may remove filters either on the left-hand side of the page, in the filtering area, or at the top of the page."),(0,i.kt)("img",{class:"imageStyle",alt:"image: Remove Filters",src:a(45810).Z}),(0,i.kt)("h3",{id:"fitlering-datasets-on-the-group--theme-page"},"Fitlering Datasets on the Group / Theme Page"),(0,i.kt)("p",null,"Selecting a group has the same behaviour as filtering in the dataset list screen."),(0,i.kt)("img",{class:"imageStyle",alt:"image: Filtering by groups",src:a(73514).Z}))}g.isMDXComponent=!0},73514:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/dataplatform_user_FilteringDataset_groupsthemespage-bbd82df9ec3517366a52f1c474d78257.png"},3356:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/dataplatform_user_FilteringDataset_multiple-f14060093b2bc461e8c2c0ba2560b72b.png"},45810:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/dataplatform_user_FilteringDataset_remove-3d4d2e818dadf0f26df26324dfb3412d.png"}}]);