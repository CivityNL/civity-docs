"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[166],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(r),d=n,u=h["".concat(l,".").concat(d)]||h[d]||v[d]||s;return r?a.createElement(u,i(i({ref:t},p),{},{components:r})):a.createElement(u,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},77368:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>v});var a=r(87462),n=r(63366),s=(r(67294),r(3905)),i=["components"],o={id:"harvesting_Harvesting",title:"Harvesting",sidebar_label:"Harvesting"},l=void 0,c={unversionedId:"harvesting_Harvesting",id:"version-3.5.0/harvesting_Harvesting",title:"Harvesting",description:"What is a Data Harvester?",source:"@site/i18n/nl/docusaurus-plugin-content-docs-dataplatform/version-3.5.0/dataplatform_HARVESTING_Harvesting.md",sourceDirName:".",slug:"/harvesting_Harvesting",permalink:"/dataplatform/3.5.0/harvesting_Harvesting",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/dataplatform_versioned_docs/version-3.5.0/dataplatform_HARVESTING_Harvesting.md",tags:[],version:"3.5.0",lastUpdatedAt:1654003103,formattedLastUpdatedAt:"31-5-2022",frontMatter:{id:"harvesting_Harvesting",title:"Harvesting",sidebar_label:"Harvesting"},sidebar:"dataplatform",previous:{title:"Geoserver Integration",permalink:"/dataplatform/3.5.0/geoserver_GeoserverIntegration"},next:{title:"Getting Started",permalink:"/dataplatform/3.5.0/harvesting_GettingStarted"}},p={},v=[{value:"What is a Data Harvester?",id:"what-is-a-data-harvester",level:2},{value:"Types of Harvesters",id:"types-of-harvesters",level:2},{value:"CKAN Harvester",id:"ckan-harvester",level:3},{value:"JSON DCAT Harvester",id:"json-dcat-harvester",level:3},{value:"Generic DCAT RDF Harvester",id:"generic-dcat-rdf-harvester",level:3}],h={toc:v};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"what-is-a-data-harvester"},"What is a Data Harvester?"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Harvesters import (harvest) datasets from remote sources into a CKAN instance. This is accomplished by mapping the data from this remote source into CKAN fields. ")),(0,s.kt)("p",null,"CKAN uses the (",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ckan/ckanext-harvest"},"ckanext-harvest"),") extension, which provides an interface for building custom harvesters. This interface has three stages:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("strong",{parentName:"li"},"gather")," stage compiles all the resource identifiers that need to be fetched in the next stage."),(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("strong",{parentName:"li"},"fetch")," stage gets the contents of the remote objects and stores them in the database."),(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("strong",{parentName:"li"},"import")," stage performs any necessary actions on the fetched resource.")),(0,s.kt)("p",null,"Specific documentation about the CKAN Harvester can be found at ",(0,s.kt)("a",{href:"https://github.com/ckan/ckanext-harvest",target:"_blank"},"CKAN Remote harvesting extension documentation")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"types-of-harvesters"},"Types of Harvesters"),(0,s.kt)("p",null,"Dataplatform provides the following options to harvest data:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"CKAN Harvester"),(0,s.kt)("li",{parentName:"ol"},"JSON DCAT Harvester"),(0,s.kt)("li",{parentName:"ol"},"Generic DCAT RDF Harvester")),(0,s.kt)("h3",{id:"ckan-harvester"},"CKAN Harvester"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The CKAN Harvester is an example of a custom harvester. This harvester lets you import data from a remote CKAN instance into your own CKAN instance.")),(0,s.kt)("h3",{id:"json-dcat-harvester"},"JSON DCAT Harvester"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The JSON DCAT Harvester is a plugin that is part of the DCAT-extension  ",(0,s.kt)("a",{href:"https://github.com/ckan/ckanext-dcat",target:"_blank"},"ckanext-dcat"),". This harvester lets you import JSON objects based on DCAT mapping fields and maps these DCAT metadata fields to the CKAN fields."),(0,s.kt)("a",{href:"https://github.com/ckan/ckanext-dcat#json-dcat-harvester",target:"_blank"},"Go to CKAN documentation JSON DCAT Harvester"))),(0,s.kt)("h3",{id:"generic-dcat-rdf-harvester"},"Generic DCAT RDF Harvester"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"This Harvester is another custom harvester which is part of the DCAT-extension.")),(0,s.kt)("hr",null))}d.isMDXComponent=!0}}]);