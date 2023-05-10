"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36509],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=o,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return a?r.createElement(g,n(n({ref:t},c),{},{components:a})):r.createElement(g,n({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,n[1]=l;for(var d=2;d<i;d++)n[d]=a[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9116:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var r=a(87462),o=a(63366),i=(a(67294),a(3905)),n=["components"],l={id:"geoserver_GeoserverIntegration",title:"Geoserver Integration",sidebar_label:"Geoserver Integration"},s=void 0,d={unversionedId:"geoserver_GeoserverIntegration",id:"version-4.5.9/geoserver_GeoserverIntegration",title:"Geoserver Integration",description:"DataPlatform has the option to push data to GeoServer. GeoServer is used to publish OGC web services (Web Map Service or WMS, Web Map Tile Service or WMTS and Web Feature Services or WFS) of data in the CKAN Datastore database. SLD\u2019s to style the maps in GeoServer can be uploaded to DataPlatform as well. Main focus of OGC web services is on spatial data. Data which is uploaded to the CKAN DataStore can automatically be published using GeoServer. Each CKAN instance (for example CKAN FIWARE Lab) has a corresponding GeoServer workspace (workspaceckanfiwarelab) with a GeoServer datastore (datastoredatastoreckanfiwarelab) which opens up the CKAN datastore database (datastoreckanfiwarelab) using a database user with read only access to the data.",source:"@site/dataplatform_versioned_docs/version-4.5.9/dataplatform_GEOSERVER_GeoserverIntegration.md",sourceDirName:".",slug:"/geoserver_GeoserverIntegration",permalink:"/sv/dataplatform/4.5.9/geoserver_GeoserverIntegration",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/dataplatform_versioned_docs/version-4.5.9/dataplatform_GEOSERVER_GeoserverIntegration.md",tags:[],version:"4.5.9",lastUpdatedAt:1671712963,formattedLastUpdatedAt:"2022-12-22",frontMatter:{id:"geoserver_GeoserverIntegration",title:"Geoserver Integration",sidebar_label:"Geoserver Integration"},sidebar:"dataplatform",previous:{title:"Data Dictionary",permalink:"/sv/dataplatform/4.5.9/datasets_DataDictionary"},next:{title:"Link To National Portals",permalink:"/sv/dataplatform/4.5.9/dataoverheid_LinkToDataOverheid"}},c={},p=[],u={toc:p};function m(e){var t=e.components,l=(0,o.Z)(e,n);return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"DataPlatform has the option to push data to GeoServer. GeoServer is used to publish OGC web services (Web Map Service or WMS, Web Map Tile Service or WMTS and Web Feature Services or WFS) of data in the CKAN Datastore database. SLD\u2019s to style the maps in GeoServer can be uploaded to DataPlatform as well. Main focus of OGC web services is on spatial data. Data which is uploaded to the CKAN DataStore can automatically be published using GeoServer. Each CKAN instance (for example CKAN FIWARE Lab) has a corresponding GeoServer workspace (workspace_ckan_fiware_lab) with a GeoServer datastore (datastore_datastore_ckan_fiware_lab) which opens up the CKAN datastore database (datastore_ckan_fiware_lab) using a database user with read only access to the data."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Visibility should be set to Public")," - Metadata field 'Visibility' should be set to 'Yes'."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Link_to_geoserver_enabled field is True")," - Metadata field 'Link to Geoserver' should be set to 'Yes'."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Data must have geometry columns")," - Resources within a listing should have geometry columns."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Resource must be DataStore Active")," - Only resources that are in the DataStore can end up in GeoServer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Valid layer_srid field")," - A valid layer_srid should be provided in the resource metadata."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Valid layer_extent field")," - A valid layer_extent should be provided in the resource metadata.")),(0,i.kt)("p",null,"Below you will find an explanation of how to ensure that the above criteria are met and what additional functionality is available:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"imageStyle: Dataplatform Portal Map",src:a(92707).Z,width:"1280",height:"720"})),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"imageStyle: Dataplatform Portal Map",src:a(29722).Z,width:"1280",height:"720"})),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"imageStyle: Dataplatform Portal Map",src:a(53017).Z,width:"1280",height:"720"})),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"imageStyle: Dataplatform Portal Map",src:a(39362).Z,width:"1280",height:"720"})),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"imageStyle: Dataplatform Portal Map",src:a(10197).Z,width:"1280",height:"720"})),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"imageStyle: Dataplatform Portal Map",src:a(87119).Z,width:"1280",height:"720"})),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"imageStyle: Dataplatform Portal Map",src:a(26342).Z,width:"1280",height:"720"})),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"imageStyle: Dataplatform Portal Map",src:a(21084).Z,width:"1280",height:"720"})),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"imageStyle: Dataplatform Portal Map",src:a(77813).Z,width:"1280",height:"720"})),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"imageStyle: Dataplatform Portal Map",src:a(33497).Z,width:"1280",height:"720"})),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"imageStyle: Dataplatform Portal Map",src:a(8593).Z,width:"1280",height:"720"})),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"imageStyle: Dataplatform Portal Map",src:a(61096).Z,width:"1280",height:"720"})),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"imageStyle: Dataplatform Portal Map",src:a(34148).Z,width:"1280",height:"720"})),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"imageStyle: Dataplatform Portal Map",src:a(14219).Z,width:"1280",height:"720"})),(0,i.kt)("hr",null))}m.isMDXComponent=!0},92707:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Slide1-a278384c57764e91d5593d8397d2d982.png"},33497:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Slide10-4318d044374141435ceab76ea018df53.png"},8593:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Slide11-cb56b201268ba8cac7054510f9c8ede4.png"},61096:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Slide12-bb9796704c30fc8cb0d11d68ffe67ca8.png"},34148:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Slide13-26a3ec987bd5b5bdc6da6516f81262aa.png"},14219:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Slide14-46df07fc5d299ba8cd5776cfebd61c81.png"},29722:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Slide2-e08ec01703c90e8c244d8eb5ea6c8384.png"},53017:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Slide3-95914deba5eb8cb175eb959936c84a7a.png"},39362:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Slide4-ac03fc05df0f64a98e484ea362feea9f.png"},10197:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Slide5-dc499f4e7efb553287c55ff2df95d0c0.png"},87119:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Slide6-5241f6e2b749cf7874bb85f0f6d5ec98.png"},26342:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Slide7-d1d003dbee16b69a3a7d9079762de1e1.png"},21084:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Slide8-f79ea1501e98cc038378e82147af1bea.png"},77813:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Slide9-986fbab7c406c20995338a646563a2b3.png"}}]);