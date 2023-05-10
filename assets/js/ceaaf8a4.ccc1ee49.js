"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57118],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(g,l(l({ref:t},s),{},{components:r})):a.createElement(g,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5818:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),l=["components"],i={id:"portal_ArcGIS",title:"ArcGIS: how-to guide",sidebar_label:"ArcGIS: how-to guide"},c=void 0,p={unversionedId:"portal_ArcGIS",id:"version-4.5.9/portal_ArcGIS",title:"ArcGIS: how-to guide",description:"WMS toevoegen in ArcMap",source:"@site/i18n/nl/docusaurus-plugin-content-docs-dataplatform/version-4.5.9/dataplatform_PORTAL_ArcGIS.md",sourceDirName:".",slug:"/portal_ArcGIS",permalink:"/dataplatform/4.5.9/portal_ArcGIS",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/i18n/nl/docusaurus-plugin-content-docs-dataplatform/version-4.5.9/dataplatform_PORTAL_ArcGIS.md",tags:[],version:"4.5.9",lastUpdatedAt:1671712963,formattedLastUpdatedAt:"22-12-2022",frontMatter:{id:"portal_ArcGIS",title:"ArcGIS: how-to guide",sidebar_label:"ArcGIS: how-to guide"},sidebar:"dataplatform",previous:{title:"Overzicht",permalink:"/dataplatform/4.5.9/portal_Overview"},next:{title:"QGIS: how-to guide",permalink:"/dataplatform/4.5.9/portal_QGIS"}},s={},d=[{value:"WMS toevoegen in ArcMap",id:"wms-toevoegen-in-arcmap",level:2},{value:"Voeg WMS toe aan ArcGIS Online (en ArcGIS Portal/Enterprise)",id:"voeg-wms-toe-aan-arcgis-online-en-arcgis-portalenterprise",level:2}],u={toc:d};function m(e){var t=e.components,i=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"wms-toevoegen-in-arcmap"},"WMS toevoegen in ArcMap"),(0,o.kt)("p",null,"Open ",(0,o.kt)("em",{parentName:"p"},"Catalog"),": (of ga naar de applicatie ",(0,o.kt)("em",{parentName:"p"},"ArcCatalog"),"):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"imageStyle: Dataplatform Portal",src:r(26258).Z,width:"605",height:"340"})),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Klik op \u201dAdd WMS Server\u201d en voer de link naar de server in:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"imageStyle: Dataplatform Portal",src:r(50832).Z,width:"605",height:"340"})),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Optioneel: Klik op \u201cGet Layers\u201d om te controleren of de link werkt en of ArcMap de server kan bereiken:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"imageStyle: Dataplatform Portal",src:r(30549).Z,width:"605",height:"340"})),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Eenmaal toegevoegd aan de serverlijst, kun je lagen toevoegen aan de kaart:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"imageStyle: Dataplatform Portal",src:r(51806).Z,width:"605",height:"340"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"voeg-wms-toe-aan-arcgis-online-en-arcgis-portalenterprise"},"Voeg WMS toe aan ArcGIS Online (en ArcGIS Portal/Enterprise)"),(0,o.kt)("p",null,"Ga naar jouw kaart of cree\xebr een nieuwe kaart:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"imageStyle: Dataplatform Portal",src:r(7807).Z,width:"605",height:"340"})),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Klik \u201cAdd\u201d en kies \u201cAdd layer from web\u201d:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"imageStyle: Dataplatform Portal",src:r(63016).Z,width:"605",height:"340"})),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Kies \u201cA WMS OGC Web Service\u201d, voer de link in en klik \u201cAdd layer\u201d:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"imageStyle: Dataplatform Portal",src:r(65279).Z,width:"586",height:"329"})),(0,o.kt)("hr",null))}m.isMDXComponent=!0},26258:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/ArcGIS_1-34e9dfb5bb2f1b583406c48f01abb59a.png"},50832:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/ArcGIS_2-ed194cc4378f45583c07a8bdb8a5f732.png"},30549:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/ArcGIS_3-139165af45c1128b78fac9d63c1cc025.png"},51806:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/ArcGIS_4-eb8f3c84cbe6be9f2781c869b3222380.png"},7807:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/ArcGIS_5-c3192a9b17967d7c8bac13d021bfc9c8.png"},63016:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/ArcGIS_6-95b50332eb0c17b5884651277f07de10.png"},65279:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/ArcGIS_7-4e91345db6b7209112cecf4fe242eac9.png"}}]);