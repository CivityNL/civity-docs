"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83228],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),g=s(r),m=n,u=g["".concat(p,".").concat(m)]||g[m]||c[m]||o;return r?a.createElement(u,l(l({ref:t},d),{},{components:r})):a.createElement(u,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},58627:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),l=["components"],i={id:"datastore_Datastore",title:"DataStore",sidebar_label:"DataStore"},p=void 0,s={unversionedId:"datastore_Datastore",id:"version-4.4.0/datastore_Datastore",title:"DataStore",description:"DataStore",source:"@site/i18n/nl/docusaurus-plugin-content-docs-dataplatform/version-4.4.0/dataplatform_DATASTORE.md",sourceDirName:".",slug:"/datastore_Datastore",permalink:"/dataplatform/4.4.0/datastore_Datastore",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/i18n/nl/docusaurus-plugin-content-docs-dataplatform/version-4.4.0/dataplatform_DATASTORE.md",tags:[],version:"4.4.0",lastUpdatedAt:1666621913,formattedLastUpdatedAt:"24-10-2022",frontMatter:{id:"datastore_Datastore",title:"DataStore",sidebar_label:"DataStore"},sidebar:"dataplatform",previous:{title:"CKAN API",permalink:"/dataplatform/4.4.0/developers_CKANApi"},next:{title:"DataStore API",permalink:"/dataplatform/4.4.0/datastore_Api"}},d={},c=[{value:"DataStore",id:"datastore",level:2},{value:"DataStore en OGR",id:"datastore-en-ogr",level:2},{value:"Specifieke configuratie Civity",id:"specifieke-configuratie-civity",level:3}],g={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"datastore"},"DataStore"),(0,o.kt)("p",null,"De ",(0,o.kt)("a",{href:"http://docs.ckan.org/en/latest/maintaining/datastore.html",target:"_blank"},"DataStore")," maakt het mogelijk om specifieke data in DataPlatform te tonen als preview en/of kaart en om data op te vragen via de DataStore API."),(0,o.kt)("h2",{id:"datastore-en-ogr"},"DataStore en OGR"),(0,o.kt)("p",null,"Voor het uploaden van data naar de DataStore maken we gebruik van OGR (",(0,o.kt)("a",{parentName:"p",href:"https://gdal.org/programs/ogr2ogr.html"},"https://gdal.org/programs/ogr2ogr.html"),")"),(0,o.kt)("p",null,"Formaten die via OGR worden doorgezet naar de DataStore zijn:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CSV"),(0,o.kt)("li",{parentName:"ul"},"DGN"),(0,o.kt)("li",{parentName:"ul"},"GeoJSON"),(0,o.kt)("li",{parentName:"ul"},"GPKG"),(0,o.kt)("li",{parentName:"ul"},"Shapefile/ZIP"),(0,o.kt)("li",{parentName:"ul"},"XLS, XLSX")),(0,o.kt)("p",null,"Voor deze bestandsformaten volgen we in de meeste gevallen de defaults zoals vemeld in de volgende documentatie:"),(0,o.kt)("p",null,"Uitleg van defaults met betrekking tot het doorzetten van data naar de Postgres database:\n",(0,o.kt)("a",{parentName:"p",href:"https://gdal.org/drivers/vector/pg.html?highlight=postgres"},"https://gdal.org/drivers/vector/pg.html?highlight=postgres")),(0,o.kt)("p",null,"Uitleg van defaults met betrekking tot bepaalde bestandsformaten zoals CSV/XLSX:\n",(0,o.kt)("a",{parentName:"p",href:"https://gdal.org/drivers/vector/csv.html"},"https://gdal.org/drivers/vector/csv.html")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"specifieke-configuratie-civity"},"Specifieke configuratie Civity"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"X_POSSIBLE_NAMES=lon*\nY_POSSIBLE_NAMES=lat*\n")),(0,o.kt)("p",null,"Uitleg: Kolomnamen waar lon of lat in voorkomt worden herkent als kolommen met een Longitude / Latitude (zie ",(0,o.kt)("a",{parentName:"p",href:"https://gdal.org/drivers/vector/csv.html"},"https://gdal.org/drivers/vector/csv.html"),")."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GEOM_POSSIBLE_NAMES=geom*,shape*,SHAPE*\n")),(0,o.kt)("p",null,"Uitleg: Kolommen die beginnen met geom, shape of SHAPE worden herkend als geometrie kolommen (zie ",(0,o.kt)("a",{parentName:"p",href:"https://gdal.org/drivers/vector/csv.html"},"https://gdal.org/drivers/vector/csv.html"),")."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"PRECISION =NO\n")),(0,o.kt)("p",null,"Uitleg: Zie onder layer creation options -> PRECISION in ",(0,o.kt)("a",{parentName:"p",href:"https://gdal.org/drivers/vector/pg.html?highlight=postgres"},"https://gdal.org/drivers/vector/pg.html?highlight=postgres")),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GEOMETRY_NAME='wkb_geometry'\n")),(0,o.kt)("p",null,"Uitleg: Zie onder layer creation options -> GEOMETRY_NAME in ",(0,o.kt)("a",{parentName:"p",href:"https://gdal.org/drivers/vector/pg.html?highlight=postgres"},"https://gdal.org/drivers/vector/pg.html?highlight=postgres")))}m.isMDXComponent=!0}}]);