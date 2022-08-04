"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2157],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5579:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"ckan_Overview",title:"What is CKAN?",sidebar_label:"What is CKAN?"},s=void 0,d={unversionedId:"ckan_Overview",id:"version-4.1.0/ckan_Overview",title:"What is CKAN?",description:"Here you will find an overview of what CKAN is, in addition to what you can accomplish with CKAN.",source:"@site/dataplatform_versioned_docs/version-4.1.0/dataplatform_CKAN_Overview.md",sourceDirName:".",slug:"/ckan_Overview",permalink:"/sv/dataplatform/ckan_Overview",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/dataplatform_versioned_docs/version-4.1.0/dataplatform_CKAN_Overview.md",tags:[],version:"4.1.0",lastUpdatedAt:1659610540,formattedLastUpdatedAt:"2022-08-04",frontMatter:{id:"ckan_Overview",title:"What is CKAN?",sidebar_label:"What is CKAN?"}},c={},u=[{value:"Language selection",id:"language-selection",level:3},{value:"Datasets",id:"datasets",level:2},{value:"Dataset Metadata",id:"dataset-metadata",level:2},{value:"Datasources",id:"datasources",level:2},{value:"Metadata",id:"metadata",level:2}],p={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here you will find an overview of what CKAN is, in addition to what you can accomplish with CKAN."),(0,o.kt)("h3",{id:"language-selection"},"Language selection"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The language selector is found in the footer.")),(0,o.kt)("p",null,"CKAN supports many European languages. Presently, CKAN DataPlatform is available in Dutch (Nederlands), English, and Swedish."),(0,o.kt)("h2",{id:"datasets"},"Datasets"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Datasets are managed at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://ckan-{organisation-name}-dataplattform-se.dataplattform.se")," and presented at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://{organisation-name}.dataplattform.se"))),(0,o.kt)("p",null,"CKAN uses 'datasets' to organize data (which are called ",(0,o.kt)("em",{parentName:"p"},"packages")," in CKAN). A dataset is a packet of data, for example 'the crime figures in the city' or 'the humidity readings of a weather station'. When the user searches for data, the results are visible in the individual datasets."),(0,o.kt)("p",null,"Datasets comprise of two main aspects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A collection of one or more datasources (which are called ",(0,o.kt)("em",{parentName:"li"},"resources")," in CKAN)"),(0,o.kt)("li",{parentName:"ul"},"Metadata")),(0,o.kt)("h2",{id:"dataset-metadata"},"Dataset Metadata"),(0,o.kt)("p",null,"The metadata contains information about the collection of datasources in the dataset. The metadata should give information about:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Who owns the dataset"),(0,o.kt)("li",{parentName:"ul"},"Descriptive information about the content"),(0,o.kt)("li",{parentName:"ul"},"Access rights")),(0,o.kt)("h2",{id:"datasources"},"Datasources"),(0,o.kt)("p",null,"A dataset is comprised of a collection of resources; these are the actual files or links that provide data. Your dataset may be comprised of a single source, or many sources, any file format, and must contain explicit metadata."),(0,o.kt)("h2",{id:"metadata"},"Metadata"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Metadata is simply data about data")),(0,o.kt)("p",null,"Every dataset contains metadata. For open data we follow the guidelines set in the DCAT-Standard."),(0,o.kt)("p",null,"Metadata is information that provides data about other data. Typically this means a description and context about existing data."),(0,o.kt)("p",null,"For a comprehensive example, see ",(0,o.kt)("a",{parentName:"p",href:"metadata_Metadata#metadata-example"},"Metadata")))}m.isMDXComponent=!0}}]);