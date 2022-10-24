"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[88990],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>g});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),p=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=p(r),g=n,m=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return r?a.createElement(m,l(l({ref:e},d),{},{components:r})):a.createElement(m,l({ref:e},d))}));function g(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},95169:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),l=["components"],i={id:"datastore_Datastore",title:"DataStore",sidebar_label:"DataStore"},s=void 0,p={unversionedId:"datastore_Datastore",id:"datastore_Datastore",title:"DataStore",description:"DataStore",source:"@site/../dataplatform/dataplatform_DATASTORE.md",sourceDirName:".",slug:"/datastore_Datastore",permalink:"/en/dataplatform/next/datastore_Datastore",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/../dataplatform/dataplatform_DATASTORE.md",tags:[],version:"current",lastUpdatedAt:1666622e3,formattedLastUpdatedAt:"10/24/2022",frontMatter:{id:"datastore_Datastore",title:"DataStore",sidebar_label:"DataStore"},sidebar:"defaultSidebar",previous:{title:"Generate CSV from XLS resource",permalink:"/en/dataplatform/next/datasets_xls2csv"},next:{title:"DataStore API",permalink:"/en/dataplatform/next/datastore_Api"}},d={},c=[{value:"DataStore",id:"datastore",level:2},{value:"DataStore and OGR",id:"datastore-and-ogr",level:2},{value:"Civity specific configuration",id:"civity-specific-configuration",level:3}],u={toc:c};function g(t){var e=t.components,r=(0,n.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"datastore"},"DataStore"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{href:"http://docs.ckan.org/en/latest/maintaining/datastore.html",target:"_blank"},"DataStore")," makes it possible to display specific data in DataPlatform as a preview and/or map and to request data via the DataStore API."),(0,o.kt)("h2",{id:"datastore-and-ogr"},"DataStore and OGR"),(0,o.kt)("p",null,"For uploading data to the DataStore we use OGR (",(0,o.kt)("a",{parentName:"p",href:"https://gdal.org/programs/ogr2ogr.html"},"https://gdal.org/programs/ogr2ogr.html"),")."),(0,o.kt)("p",null,"Formats that are transferred to the DataStore via OGR are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CSV"),(0,o.kt)("li",{parentName:"ul"},"DGN"),(0,o.kt)("li",{parentName:"ul"},"GeoJSON"),(0,o.kt)("li",{parentName:"ul"},"GPKG"),(0,o.kt)("li",{parentName:"ul"},"Shape file/ZIP"),(0,o.kt)("li",{parentName:"ul"},"XLS, XLSX")),(0,o.kt)("p",null,"For these file formats, in most cases we follow the defaults as stated in the following documentation:"),(0,o.kt)("p",null,"Explanation of defaults regarding forwarding data to the Postgres database:\n",(0,o.kt)("a",{parentName:"p",href:"https://gdal.org/drivers/vector/pg.html?highlight=postgres"},"https://gdal.org/drivers/vector/pg.html?highlight=postgres")),(0,o.kt)("p",null,"Explanation of defaults regarding certain file formats such as CSV/XLSX:\n",(0,o.kt)("a",{parentName:"p",href:"https://gdal.org/drivers/vector/csv.html"},"https://gdal.org/drivers/vector/csv.html")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"civity-specific-configuration"},"Civity specific configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"X_POSSIBLE_NAMES=lon*\nY_POSSIBLE_NAMES=lat*\n")),(0,o.kt)("p",null,"Explanation: Column names containing lon or lat are recognized as columns with a Longitude / Latitude (see ",(0,o.kt)("a",{parentName:"p",href:"https://gdal.org/drivers/vector/csv.html"},"https://gdal.org/drivers/vector/csv.html"),")."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GEOM_POSSIBLE_NAMES=geom*,shape*,SHAPE*\n")),(0,o.kt)("p",null,"Explanation: Columns starting with geom, shape or SHAPE are recognized as geometry columns (see ",(0,o.kt)("a",{parentName:"p",href:"https://gdal.org/drivers/vector/csv.html"},"https://gdal.org/drivers/vector/csv.html"),")."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"PRECISION =NO\n")),(0,o.kt)("p",null,"Explanation: See under layer creation options -> PRECISION in ",(0,o.kt)("a",{parentName:"p",href:"https://gdal.org/drivers/vector/pg.html?highlight=postgres"},"https://gdal.org/drivers/vector/pg.html?highlight=postgres")),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GEOMETRY_NAME='wkb_geometry'\n")),(0,o.kt)("p",null,"Explanation: See under layer creation options -> GEOMETRY_NAME in ",(0,o.kt)("a",{parentName:"p",href:"https://gdal.org/drivers/vector/pg.html?highlight=postgres"},"https://gdal.org/drivers/vector/pg.html?highlight=postgres")))}g.isMDXComponent=!0}}]);