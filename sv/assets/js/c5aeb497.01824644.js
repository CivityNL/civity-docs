"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40605],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=o,p=u["".concat(s,".").concat(f)]||u[f]||c[f]||r;return n?a.createElement(p,i(i({ref:t},m),{},{components:n})):a.createElement(p,i({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={id:"datasets_ManageGeometryColumns",title:"Manage Geometry Columns",sidebar_label:"Manage Geometry Columns"},s=void 0,d={unversionedId:"dataplatform/datasets_ManageGeometryColumns",id:"version-1.0.0/dataplatform/datasets_ManageGeometryColumns",title:"Manage Geometry Columns",description:"When a file containing geometry is uploaded in CKAN there is a chance that the geometry columns included don\u2019t comply with the default field naming (such as lat, latitude, lon, longitude, x, y). This causes the geo-data to not be handled correctly and the visualization to be impossible.",source:"@site/versioned_docs/version-1.0.0/dataplatform/dataplatform_DATASETS_ManageGeometryColumns.md",sourceDirName:"dataplatform",slug:"/dataplatform/datasets_ManageGeometryColumns",permalink:"/sv/docs/1.0.0/dataplatform/datasets_ManageGeometryColumns",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/versioned_docs/version-1.0.0/dataplatform/dataplatform_DATASETS_ManageGeometryColumns.md",tags:[],version:"1.0.0",lastUpdatedAt:1653657462,formattedLastUpdatedAt:"2022-05-27",frontMatter:{id:"datasets_ManageGeometryColumns",title:"Manage Geometry Columns",sidebar_label:"Manage Geometry Columns"}},m={},c=[{value:"BACKEND | Visualizing non-default geometry column names",id:"backend--visualizing-non-default-geometry-column-names",level:2},{value:"Before",id:"before",level:4},{value:"Backend After",id:"backend-after",level:4},{value:"PORTAL | Visualizing non-default geometry column names",id:"portal--visualizing-non-default-geometry-column-names",level:2},{value:"Before",id:"before-1",level:4},{value:"After",id:"after",level:4}],u={toc:c};function f(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When a file containing geometry is uploaded in CKAN there is a chance that the geometry columns included don\u2019t comply with the default field naming (such as lat, latitude, lon, longitude, x, y). This causes the geo-data to not be handled correctly and the visualization to be impossible. "),(0,r.kt)("p",null,"For that reason, a new feature is introduced inside CKAN to give an administrator the option to include new keywords that represent any unique geometry field/column name. Including these new values along with the default ones, makes the visualization process a lot more automated.  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note:"))," Column names that have spaces in them, will not be recognised correctly. So for instance 'lon coordinate' is not a valid unique geometry field/column name, use 'lon-coordinate' or 'lon_coordinate' instead.")),(0,r.kt)("p",null,"There are new options introduced inside the ",(0,r.kt)("strong",{parentName:"p"},"CKAN config options")," tab \u2018Config\u2019. "),(0,r.kt)("img",{class:"imageStyle",alt:"SCREENCAST: CkanConfigOptions",src:n(38652).Z}),(0,r.kt)("p",null,"The admin user can insert new keywords, separated by comma, corresponding to non-default geometry column names that can be found inside a file, like north for latitude and east for longitude.\nBefore filling/ updating these new geometry configuration options, no map visualization is available automatically, but after an admin is declaring new geometry keywords, data is correctly visualized both in the backend and the portal of ",(0,r.kt)("strong",{parentName:"p"},"DATAPLATFORM"),"."),(0,r.kt)("h2",{id:"backend--visualizing-non-default-geometry-column-names"},"BACKEND | Visualizing non-default geometry column names"),(0,r.kt)("h4",{id:"before"},"Before"),(0,r.kt)("img",{class:"imageStyle",alt:"SCREENCAST: BackendBefore",src:n(38652).Z}),(0,r.kt)("h4",{id:"backend-after"},"Backend After"),(0,r.kt)("img",{class:"imageStyle",alt:"SCREENCAST: BackendAfter",src:n(64777).Z}),(0,r.kt)("h2",{id:"portal--visualizing-non-default-geometry-column-names"},"PORTAL | Visualizing non-default geometry column names"),(0,r.kt)("h4",{id:"before-1"},"Before"),(0,r.kt)("img",{class:"imageStyle",alt:"SCREENCAST: FrontendBefore",src:n(38547).Z}),(0,r.kt)("h4",{id:"after"},"After"),(0,r.kt)("img",{class:"imageStyle",alt:"SCREENCAST: FrontendAfter",src:n(58981).Z}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),"In this ",(0,r.kt)("a",{href:"https://youtu.be/GSPkD3FfWqM"},"video")," you can watch a thorough demonstration of this new feature.")}f.isMDXComponent=!0},64777:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dataplatform_DATASETS_ManageGeometryColumns_BackendAfter-8ee22f592b21de96748e655472ffdeaf.png"},38652:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dataplatform_DATASETS_ManageGeometryColumns_CkanConfigOptions-8cbd234b59a1092242ffe03d9623a8ed.png"},58981:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dataplatform_DATASETS_ManageGeometryColumns_FrontendAfter-6de5b64fffd144f0090c138c640d48c6.png"},38547:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dataplatform_DATASETS_ManageGeometryColumns_FrontendBefore-af44357cbdc55028ecf9b93da08d1028.png"}}]);