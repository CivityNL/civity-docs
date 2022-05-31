"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8479],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(a),f=o,p=c["".concat(s,".").concat(f)]||c[f]||m[f]||r;return a?n.createElement(p,i(i({ref:t},u),{},{components:a})):n.createElement(p,i({ref:t},u))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},60533:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],l={id:"datasets_ManageGeometryColumns",title:"Manage Geometry Columns",sidebar_label:"Manage Geometry Columns"},s=void 0,d={unversionedId:"datasets_ManageGeometryColumns",id:"datasets_ManageGeometryColumns",title:"Manage Geometry Columns",description:"When a file containing geometry is uploaded in CKAN there is a chance that the geometry columns included don\u2019t comply with the default field naming (such as lat, latitude, lon, longitude, x, y). This causes the geo-data to not be handled correctly and the visualization to be impossible.",source:"@site/../dataplatform/dataplatform_DATASETS_ManageGeometryColumns.md",sourceDirName:".",slug:"/datasets_ManageGeometryColumns",permalink:"/en/dataplatform/next/datasets_ManageGeometryColumns",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/../dataplatform/dataplatform_DATASETS_ManageGeometryColumns.md",tags:[],version:"current",lastUpdatedBy:"isabeladowsley",lastUpdatedAt:1653404262,formattedLastUpdatedAt:"5/24/2022",frontMatter:{id:"datasets_ManageGeometryColumns",title:"Manage Geometry Columns",sidebar_label:"Manage Geometry Columns"},sidebar:"defaultSidebar",previous:{title:"Editing Datasets",permalink:"/en/dataplatform/next/datasets_EditingDatasets"},next:{title:"Preview Datasources",permalink:"/en/dataplatform/next/datasets_PreviewDatasources"}},u={},m=[{value:"BACKEND | Visualizing non-default geometry column names",id:"backend--visualizing-non-default-geometry-column-names",level:2},{value:"Before",id:"before",level:4},{value:"Backend After",id:"backend-after",level:4},{value:"PORTAL | Visualizing non-default geometry column names",id:"portal--visualizing-non-default-geometry-column-names",level:2},{value:"Before",id:"before-1",level:4},{value:"After",id:"after",level:4}],c={toc:m};function f(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When a file containing geometry is uploaded in CKAN there is a chance that the geometry columns included don\u2019t comply with the default field naming (such as lat, latitude, lon, longitude, x, y). This causes the geo-data to not be handled correctly and the visualization to be impossible. "),(0,r.kt)("p",null,"For that reason, a new feature is introduced inside CKAN to give an administrator the option to include new keywords that represent any unique geometry field/column name. Including these new values along with the default ones, makes the visualization process a lot more automated.  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note:"))," Column names that have spaces in them, will not be recognised correctly. So for instance 'lon coordinate' is not a valid unique geometry field/column name, use 'lon-coordinate' or 'lon_coordinate' instead.")),(0,r.kt)("p",null,"There are new options introduced inside the ",(0,r.kt)("strong",{parentName:"p"},"CKAN config options")," tab \u2018Config\u2019. "),(0,r.kt)("img",{class:"imageStyle",alt:"SCREENCAST: CkanConfigOptions",src:a(99484).Z}),(0,r.kt)("p",null,"The admin user can insert new keywords, separated by comma, corresponding to non-default geometry column names that can be found inside a file, like north for latitude and east for longitude.\nBefore filling/ updating these new geometry configuration options, no map visualization is available automatically, but after an admin is declaring new geometry keywords, data is correctly visualized both in the backend and the portal of ",(0,r.kt)("strong",{parentName:"p"},"DATAPLATFORM"),"."),(0,r.kt)("h2",{id:"backend--visualizing-non-default-geometry-column-names"},"BACKEND | Visualizing non-default geometry column names"),(0,r.kt)("h4",{id:"before"},"Before"),(0,r.kt)("img",{class:"imageStyle",alt:"SCREENCAST: BackendBefore",src:a(99484).Z}),(0,r.kt)("h4",{id:"backend-after"},"Backend After"),(0,r.kt)("img",{class:"imageStyle",alt:"SCREENCAST: BackendAfter",src:a(85619).Z}),(0,r.kt)("h2",{id:"portal--visualizing-non-default-geometry-column-names"},"PORTAL | Visualizing non-default geometry column names"),(0,r.kt)("h4",{id:"before-1"},"Before"),(0,r.kt)("img",{class:"imageStyle",alt:"SCREENCAST: FrontendBefore",src:a(82985).Z}),(0,r.kt)("h4",{id:"after"},"After"),(0,r.kt)("img",{class:"imageStyle",alt:"SCREENCAST: FrontendAfter",src:a(81521).Z}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),"In this ",(0,r.kt)("a",{href:"https://youtu.be/GSPkD3FfWqM"},"video")," you can watch a thorough demonstration of this new feature.")}f.isMDXComponent=!0},85619:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dataplatform_DATASETS_ManageGeometryColumns_BackendAfter-8ee22f592b21de96748e655472ffdeaf.png"},99484:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dataplatform_DATASETS_ManageGeometryColumns_CkanConfigOptions-8cbd234b59a1092242ffe03d9623a8ed.png"},81521:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dataplatform_DATASETS_ManageGeometryColumns_FrontendAfter-6de5b64fffd144f0090c138c640d48c6.png"},82985:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dataplatform_DATASETS_ManageGeometryColumns_FrontendBefore-af44357cbdc55028ecf9b93da08d1028.png"}}]);