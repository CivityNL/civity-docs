"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46403],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>u});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),p=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,c=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=p(r),u=n,f=m["".concat(c,".").concat(u)]||m[u]||s[u]||l;return r?a.createElement(f,o(o({ref:e},d),{},{components:r})):a.createElement(f,o({ref:e},d))}));function u(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},33481:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),o=["components"],i={id:"portal_ArcGIS",title:"ArcGIS: how-to guide",sidebar_label:"ArcGIS: how-to guide"},c=void 0,p={unversionedId:"portal_ArcGIS",id:"portal_ArcGIS",title:"ArcGIS: how-to guide",description:"Add WMS in ArcMap",source:"@site/../dataplatform/dataplatform_PORTAL_ArcGIS.md",sourceDirName:".",slug:"/portal_ArcGIS",permalink:"/sv/dataplatform/next/portal_ArcGIS",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/../dataplatform/dataplatform_PORTAL_ArcGIS.md",tags:[],version:"current",lastUpdatedAt:1666622e3,formattedLastUpdatedAt:"2022-10-24",frontMatter:{id:"portal_ArcGIS",title:"ArcGIS: how-to guide",sidebar_label:"ArcGIS: how-to guide"},sidebar:"defaultSidebar",previous:{title:"Schemes",permalink:"/sv/dataplatform/next/metadata_Schema's"},next:{title:"Overview",permalink:"/sv/dataplatform/next/portal_Overview"}},d={},s=[{value:"Add WMS in ArcMap",id:"add-wms-in-arcmap",level:2},{value:"Add WMS to ArcGIS Online (and ArcGIS Portal/Enterprise)",id:"add-wms-to-arcgis-online-and-arcgis-portalenterprise",level:2}],m={toc:s};function u(t){var e=t.components,i=(0,n.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"add-wms-in-arcmap"},"Add WMS in ArcMap"),(0,l.kt)("p",null,"Open ",(0,l.kt)("em",{parentName:"p"},"Catalog"),": (or go through the application ",(0,l.kt)("em",{parentName:"p"},"ArcCatalog"),"):"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"imageStyle: Dataplatform Portal",src:r(85291).Z,width:"605",height:"340"})),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Click \u201dAdd WMS Server\u201d and enter the link to the server:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"imageStyle: Dataplatform Portal",src:r(46810).Z,width:"605",height:"340"})),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Optional: Click \u201cGet Layers\u201d to verify if the link is correct and if ArcMap can reach the server:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"imageStyle: Dataplatform Portal",src:r(90100).Z,width:"605",height:"340"})),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Once added to the server list you can add layers to the map:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"imageStyle: Dataplatform Portal",src:r(74978).Z,width:"605",height:"340"})),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"add-wms-to-arcgis-online-and-arcgis-portalenterprise"},"Add WMS to ArcGIS Online (and ArcGIS Portal/Enterprise)"),(0,l.kt)("p",null,"Go to your map, or create a new one:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"imageStyle: Dataplatform Portal",src:r(70774).Z,width:"605",height:"340"})),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Click \u201cAdd\u201d and chose \u201cAdd layer from web\u201d:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"imageStyle: Dataplatform Portal",src:r(47553).Z,width:"605",height:"340"})),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Choose \u201cA WMS OGC Web Service\u201d and enter the link and click \u201cAdd layer\u201d:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"imageStyle: Dataplatform Portal",src:r(27366).Z,width:"586",height:"329"})),(0,l.kt)("hr",null))}u.isMDXComponent=!0},85291:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/ArcGIS_1-34e9dfb5bb2f1b583406c48f01abb59a.png"},46810:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/ArcGIS_2-ed194cc4378f45583c07a8bdb8a5f732.png"},90100:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/ArcGIS_3-139165af45c1128b78fac9d63c1cc025.png"},74978:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/ArcGIS_4-eb8f3c84cbe6be9f2781c869b3222380.png"},70774:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/ArcGIS_5-c3192a9b17967d7c8bac13d021bfc9c8.png"},47553:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/ArcGIS_6-95b50332eb0c17b5884651277f07de10.png"},27366:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/ArcGIS_7-4e91345db6b7209112cecf4fe242eac9.png"}}]);