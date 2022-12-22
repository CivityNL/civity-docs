"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5283],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>u});var a=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,o=function(t,e){if(null==t)return{};var r,a,o={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=a.createContext({}),p=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,n=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),g=p(r),u=o,m=g["".concat(s,".").concat(u)]||g[u]||c[u]||n;return r?a.createElement(m,l(l({ref:e},d),{},{components:r})):a.createElement(m,l({ref:e},d))}));function u(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=r.length,l=new Array(n);l[0]=g;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var p=2;p<n;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},48425:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=r(87462),o=r(63366),n=(r(67294),r(3905)),l=["components"],i={id:"datastore_Datastore",title:"DataStore",sidebar_label:"DataStore"},s=void 0,p={unversionedId:"datastore_Datastore",id:"version-4.4.0/datastore_Datastore",title:"DataStore",description:"DataStore",source:"@site/dataplatform_versioned_docs/version-4.4.0/dataplatform_DATASTORE.md",sourceDirName:".",slug:"/datastore_Datastore",permalink:"/sv/dataplatform/4.4.0/datastore_Datastore",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/dataplatform_versioned_docs/version-4.4.0/dataplatform_DATASTORE.md",tags:[],version:"4.4.0",lastUpdatedAt:1666621913,formattedLastUpdatedAt:"2022-10-24",frontMatter:{id:"datastore_Datastore",title:"DataStore",sidebar_label:"DataStore"},sidebar:"dataplatform",previous:{title:"CKAN API",permalink:"/sv/dataplatform/4.4.0/developers_CKANApi"},next:{title:"DataStore API",permalink:"/sv/dataplatform/4.4.0/datastore_Api"}},d={},c=[{value:"DataStore",id:"datastore",level:2},{value:"DataStore and OGR",id:"datastore-and-ogr",level:2},{value:"Civity specific configuration",id:"civity-specific-configuration",level:3}],g={toc:c};function u(t){var e=t.components,r=(0,o.Z)(t,l);return(0,n.kt)("wrapper",(0,a.Z)({},g,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"datastore"},"DataStore"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{href:"http://docs.ckan.org/en/latest/maintaining/datastore.html",target:"_blank"},"DataStore")," makes it possible to display specific data in DataPlatform as a preview and/or map and to request data via the DataStore API."),(0,n.kt)("h2",{id:"datastore-and-ogr"},"DataStore and OGR"),(0,n.kt)("p",null,"For uploading data to the DataStore we use OGR (",(0,n.kt)("a",{parentName:"p",href:"https://gdal.org/programs/ogr2ogr.html"},"https://gdal.org/programs/ogr2ogr.html"),")."),(0,n.kt)("p",null,"Formats that are transferred to the DataStore via OGR are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CSV"),(0,n.kt)("li",{parentName:"ul"},"DGN"),(0,n.kt)("li",{parentName:"ul"},"GeoJSON"),(0,n.kt)("li",{parentName:"ul"},"GPKG"),(0,n.kt)("li",{parentName:"ul"},"Shape file/ZIP"),(0,n.kt)("li",{parentName:"ul"},"XLS, XLSX")),(0,n.kt)("p",null,"For these file formats, in most cases we follow the defaults as stated in the following documentation:"),(0,n.kt)("p",null,"Explanation of defaults regarding forwarding data to the Postgres database:\n",(0,n.kt)("a",{parentName:"p",href:"https://gdal.org/drivers/vector/pg.html?highlight=postgres"},"https://gdal.org/drivers/vector/pg.html?highlight=postgres")),(0,n.kt)("p",null,"Explanation of defaults regarding certain file formats such as CSV/XLSX:\n",(0,n.kt)("a",{parentName:"p",href:"https://gdal.org/drivers/vector/csv.html"},"https://gdal.org/drivers/vector/csv.html")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"civity-specific-configuration"},"Civity specific configuration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"X_POSSIBLE_NAMES=lon*\nY_POSSIBLE_NAMES=lat*\n")),(0,n.kt)("p",null,"Explanation: Column names containing lon or lat are recognized as columns with a Longitude / Latitude (see ",(0,n.kt)("a",{parentName:"p",href:"https://gdal.org/drivers/vector/csv.html"},"https://gdal.org/drivers/vector/csv.html"),")."),(0,n.kt)("hr",null),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"GEOM_POSSIBLE_NAMES=geom*,shape*,SHAPE*\n")),(0,n.kt)("p",null,"Explanation: Columns starting with geom, shape or SHAPE are recognized as geometry columns (see ",(0,n.kt)("a",{parentName:"p",href:"https://gdal.org/drivers/vector/csv.html"},"https://gdal.org/drivers/vector/csv.html"),")."),(0,n.kt)("hr",null),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"PRECISION =NO\n")),(0,n.kt)("p",null,"Explanation: See under layer creation options -> PRECISION in ",(0,n.kt)("a",{parentName:"p",href:"https://gdal.org/drivers/vector/pg.html?highlight=postgres"},"https://gdal.org/drivers/vector/pg.html?highlight=postgres")),(0,n.kt)("hr",null),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"GEOMETRY_NAME='wkb_geometry'\n")),(0,n.kt)("p",null,"Explanation: See under layer creation options -> GEOMETRY_NAME in ",(0,n.kt)("a",{parentName:"p",href:"https://gdal.org/drivers/vector/pg.html?highlight=postgres"},"https://gdal.org/drivers/vector/pg.html?highlight=postgres")))}u.isMDXComponent=!0}}]);