"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1593],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>p});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),m=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(a),p=n,f=u["".concat(d,".").concat(p)]||u[p]||c[p]||l;return a?r.createElement(f,i(i({ref:t},s),{},{components:a})):r.createElement(f,i({ref:t},s))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},71146:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>m,toc:()=>c});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],o={id:"metadata_Schema's",title:"Schemes",sidebar_label:"Schemes"},d=void 0,m={unversionedId:"metadata_Schema's",id:"version-3.5.0/metadata_Schema's",title:"Schemes",description:"Metadata can be written in many different ways, and every country has their own metadata definition, following the DCAT Standard. Datacatalogue has unique metadata for every data product.",source:"@site/dataplatform_versioned_docs/version-3.5.0/dataplatform_METADATA_Schemes.md",sourceDirName:".",slug:"/metadata_Schema's",permalink:"/en/dataplatform/3.5.0/metadata_Schema's",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/dataplatform_versioned_docs/version-3.5.0/dataplatform_METADATA_Schemes.md",tags:[],version:"3.5.0",lastUpdatedBy:"mathieu1989",lastUpdatedAt:1655210923,formattedLastUpdatedAt:"6/14/2022",frontMatter:{id:"metadata_Schema's",title:"Schemes",sidebar_label:"Schemes"},sidebar:"dataplatform",previous:{title:"DCAT",permalink:"/en/dataplatform/3.5.0/metadata_DCAT"},next:{title:"Adding Datasets",permalink:"/en/dataplatform/3.5.0/datasets_AddingDatasets"}},s={},c=[{value:"Scheme Metadata",id:"scheme-metadata",level:2}],u={toc:c};function p(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Metadata can be written in many different ways, and every country has their own metadata definition, following the DCAT Standard. Datacatalogue has unique metadata for every data product. ")),(0,l.kt)("h2",{id:"scheme-metadata"},"Scheme Metadata"),(0,l.kt)("p",null,"A Scheme/Schema is where metadatafields are described; all schema follow the ",(0,l.kt)("a",{parentName:"p",href:"metadata_DCAT"},"DCAT standard"),"."),(0,l.kt)("p",null,"All datasets require the following metadata fields: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A unique ID "),(0,l.kt)("li",{parentName:"ul"},"Title "),(0,l.kt)("li",{parentName:"ul"},"Description "),(0,l.kt)("li",{parentName:"ul"},"Owner / maintainer / publisher "),(0,l.kt)("li",{parentName:"ul"},"Plus the following fields: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Language"),(0,l.kt)("li",{parentName:"ul"},"Theme "),(0,l.kt)("li",{parentName:"ul"},"License "),(0,l.kt)("li",{parentName:"ul"},"Format ")))),(0,l.kt)("p",null,"Furthermore, every metadata-field determines what will populate the form. For example: text, datestamp, a string, emailadress or a dropdown menu with a value list. "),(0,l.kt)("p",null,"A value list is variable. "),(0,l.kt)("p",null,"In the schema in CKAN the following fields are described: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Name of metadata-field (according to international standards) "),(0,l.kt)("li",{parentName:"ul"},"Label in English "),(0,l.kt)("li",{parentName:"ul"},"Label in another language (Dutch, Swedish) "),(0,l.kt)("li",{parentName:"ul"},"Format "),(0,l.kt)("li",{parentName:"ul"},"Mandatary: true or false "),(0,l.kt)("li",{parentName:"ul"},"Value-list (if needed)")))}p.isMDXComponent=!0}}]);