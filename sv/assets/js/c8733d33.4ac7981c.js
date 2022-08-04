"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8037],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=s(a),u=r,f=m["".concat(d,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(f,o(o({ref:e},p),{},{components:a})):n.createElement(f,o({ref:e},p))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},41134:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={id:"metadata_Metadata",title:"Metadata",sidebar_label:"Metadata"},d=void 0,s={unversionedId:"metadata_Metadata",id:"version-4.1.0/metadata_Metadata",title:"Metadata",description:"Metadata is simply data about data",source:"@site/dataplatform_versioned_docs/version-4.1.0/dataplatform_METADATA_Metadata.md",sourceDirName:".",slug:"/metadata_Metadata",permalink:"/sv/dataplatform/metadata_Metadata",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/dataplatform_versioned_docs/version-4.1.0/dataplatform_METADATA_Metadata.md",tags:[],version:"4.1.0",lastUpdatedAt:1655216981,formattedLastUpdatedAt:"2022-06-14",frontMatter:{id:"metadata_Metadata",title:"Metadata",sidebar_label:"Metadata"},sidebar:"dataplatform",previous:{title:"Adding Datasets",permalink:"/sv/dataplatform/datasets_AddingDatasets"},next:{title:"DCAT",permalink:"/sv/dataplatform/metadata_DCAT"}},p={},c=[{value:"Metadata Example",id:"metadata-example",level:2}],m={toc:c};function u(t){var e=t.components,a=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Metadata is simply data about data")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Metadata follows the guidelines set by the ",(0,i.kt)("a",{href:"dataplatform/metadata_DCAT",target:"_blank"},"DCAT-Standard"),".")),(0,i.kt)("p",null,"Every dataset contains metadata; metadata is information that informs the user about the collection of datasources in a dataset. Typically this means a description and context about existing data."),(0,i.kt)("p",null,"Your metadata should describe the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Who owns the dataset!"),(0,i.kt)("li",{parentName:"ul"},"Descriptive information about the content"),(0,i.kt)("li",{parentName:"ul"},"Access rights")),(0,i.kt)("h2",{id:"metadata-example"},"Metadata Example"),(0,i.kt)("p",null,'Let\'s assume we have the following object called "things":'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// this is a visual representation of data\nthings = "[14, 16.5, 21, 18, 21]"\n')),(0,i.kt)("p",null,'We see that "things" is a collection of numbers, but without context it is meaningless beyond being a collection of numbers; "things" exists as a collection of numbers. Let\'s change that with metadata, where we can add value by assigning context and definition!'),(0,i.kt)("p",null,"Let's assign two more values: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'"Florida, USA"\n"Degrees Centigrade"\n')),(0,i.kt)("p",null,'Now we have metadata, which describes what "things" is about. By adding ',(0,i.kt)("inlineCode",{parentName:"p"},"degrees centigrade")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Florida, USA"),', "things" now has context (location) and a definition (temperature).'),(0,i.kt)("p",null,"Therefore, ",(0,i.kt)("inlineCode",{parentName:"p"},"degrees centigrade")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Florida, USA"),' is the metadata for the object "things." '),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// this is a visual representation of data\nthings = "[14, 16.5, 21, 18, 21]", "Degrees Centigrade", "Florida, USA"\n')),(0,i.kt)("p",null,'By adding metadata to "things", it has allowed us to easily understand the information inside and display it in an easy to read manner:'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Degrees Centigrade"),(0,i.kt)("th",{parentName:"tr",align:"center"},"-"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"14"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Florida, USA")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"16.5"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Florida, USA")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"21"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Florida, USA")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"18"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Florida, USA")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"21"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Florida, USA")))))}u.isMDXComponent=!0}}]);