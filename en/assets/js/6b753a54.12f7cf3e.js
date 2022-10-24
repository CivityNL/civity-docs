"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51586],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return a?r.createElement(g,o(o({ref:t},d),{},{components:a})):r.createElement(g,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},64376:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],s={id:"geoserver_GeoserverIntegration",title:"Geoserver Integration",sidebar_label:"Geoserver Integration"},l=void 0,p={unversionedId:"geoserver_GeoserverIntegration",id:"version-4.0.0/geoserver_GeoserverIntegration",title:"Geoserver Integration",description:"This version of ckanext-geoserver plugin currently supports publishing of a single resource/file inside a dataset. The option of selecting a specific resource to publish is not yet implemented. At the moment, the script automatically recognizes the only resource available and provides all the information needed to be published. If there is more than one resource inside the dataset, and the user tries to publish them, even though the pop up window may load with the correct options, the publishing process will fail.",source:"@site/dataplatform_versioned_docs/version-4.0.0/dataplatform_GEOSERVER_GeoserverIntegration.md",sourceDirName:".",slug:"/geoserver_GeoserverIntegration",permalink:"/en/dataplatform/4.0.0/geoserver_GeoserverIntegration",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/dataplatform_versioned_docs/version-4.0.0/dataplatform_GEOSERVER_GeoserverIntegration.md",tags:[],version:"4.0.0",lastUpdatedAt:1655216981,formattedLastUpdatedAt:"6/14/2022",frontMatter:{id:"geoserver_GeoserverIntegration",title:"Geoserver Integration",sidebar_label:"Geoserver Integration"},sidebar:"dataplatform",previous:{title:"Link To Data Overheid",permalink:"/en/dataplatform/4.0.0/dataoverheid_LinkToDataOverheid"},next:{title:"Harvesting",permalink:"/en/dataplatform/4.0.0/harvesting_Harvesting"}},d={},c=[{value:"Publishing OGC Data",id:"publishing-ogc-data",level:2},{value:"WMS and WFS Files",id:"wms-and-wfs-files",level:3},{value:"Unpublish OGC Data",id:"unpublish-ogc-data",level:2}],u={toc:c};function m(e){var t=e.components,s=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This version of ckanext-geoserver plugin currently supports publishing of a single resource/file inside a dataset. ",(0,i.kt)("strong",{parentName:"p"},"The option of selecting a specific resource to publish is not yet implemented"),". At the moment, the script automatically recognizes the only resource available and provides all the information needed to be published. If there is more than one resource inside the dataset, and the user tries to publish them, even though the pop up window may load with the correct options, the publishing process will fail.")),(0,i.kt)("h2",{id:"publishing-ogc-data"},"Publishing OGC Data"),(0,i.kt)("p",null,"This version of this plugin recognizes successfully only ",(0,i.kt)("strong",{parentName:"p"},".csv and .shp (inside a zip) files"),". "),(0,i.kt)("p",null,"Shape-files should be added as ZIP-files. For a shapefile to be valid, the .zip file has to include at least these 4 mandatory filetypes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},".dbf"),(0,i.kt)("li",{parentName:"ul"},".prj \t\t"),(0,i.kt)("li",{parentName:"ul"},".shp \t"),(0,i.kt)("li",{parentName:"ul"},".shx")),(0,i.kt)("p",null,"If the filetype is supported, a green button appears inside the dataset page, named ",(0,i.kt)("em",{parentName:"p"},"Publish OGC"),". Pressing this button will generate the metadata of our resource/file, recognize the geometry field and the projection system."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Note")),": For the ",(0,i.kt)("em",{parentName:"p"},"Publish OGC")," button to be available, the meta data field Visibility must be set to ",(0,i.kt)("em",{parentName:"p"},"Public"))),(0,i.kt)("img",{class:"imageStyle shadowing",alt:"imageStyle: Geoserver PubliceerOGC button",src:a(18267).Z}),(0,i.kt)("p",null,"After pressing this button, a new page will popup including options about the geometry field that was recognized, the input projection system and the output projection system (SRID). These fields may be edited by the user. "),(0,i.kt)("p",null,"Geometry inside a CSV file can be recognized in 3 forms: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"LAT/LNG"),(0,i.kt)("li",{parentName:"ul"},"WKT"),(0,i.kt)("li",{parentName:"ul"},"JSON")),(0,i.kt)("p",null,"Additionally:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The projection system inside a CSV can be recognized between ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"RD New (EPSG: 28992)"))," or ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"WGS 84 (EPSG: 4326)")),".")),(0,i.kt)("img",{class:"imageStyle shadowing",alt:"imageStyle: OGC Checker pop-up",src:a(53218).Z}),(0,i.kt)("p",null,"The progress of publishing is shown in a toast notification, seen at the top of the page:"),(0,i.kt)("img",{class:"imageStyle",alt:"imageStyle: toast notification",src:a(530).Z}),(0,i.kt)("p",null,"...and is compelte when the following message is displayed:"),(0,i.kt)("img",{class:"imageStyle",alt:"imageStyle: toast notification",src:a(21514).Z}),(0,i.kt)("p",null,"Your data is now available as a Geoserver service."),(0,i.kt)("h3",{id:"wms-and-wfs-files"},"WMS and WFS Files"),(0,i.kt)("p",null,"Two new resources/files (",(0,i.kt)("strong",{parentName:"p"},"WMS")," and ",(0,i.kt)("strong",{parentName:"p"},"WFS"),") are now projected in the dataset. Navigating inside these new resources, the user has access to the newly generated Geoserver service from the URL."),(0,i.kt)("img",{class:"imageStyle",alt:"imageStyle: WMS Page",src:a(80802).Z}),(0,i.kt)("p",null,"WFS resource, apart from the service URL, there are multiple download options provided."),(0,i.kt)("img",{class:"imageStyle",alt:"imageStyle: WFS Page",src:a(44788).Z}),(0,i.kt)("h2",{id:"unpublish-ogc-data"},"Unpublish OGC Data"),(0,i.kt)("p",null,"To unpublish the data from Geoserver click the red button ",(0,i.kt)("em",{parentName:"p"},"Unpublish OGC")," (",(0,i.kt)("em",{parentName:"p"},"Verwijderen OGC"),") from the dataset page. The WMS and WFS files will be removed; you may also disable the schema_descriptor."),(0,i.kt)("img",{class:"imageStyle",alt:"imageStyle: Remove Geoserver Data",src:a(17534).Z}))}m.isMDXComponent=!0},53218:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dataplatform_GEOSERVER_OGCchecker-36f58b7d245f28010762be61874faa06.png"},17534:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dataplatform_GEOSERVER_Unpublish-6f58aedc32607885ce5748d8fa70797d.png"},44788:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dataplatform_GEOSERVER_WFS-af20514e575ca7d16f2bd061a5033f66.png"},80802:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dataplatform_GEOSERVER_WMS-053bd5fce6ed3a17a91a4e84e5e6ebba.png"},18267:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dataplatform_GEOSERVER_publiceerButton-1a670d11676852b3450d2824d0352e9e.png"},530:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dataplatform_GEOSERVER_toast-a7e5d1d335cf3d40101b195a59c0c330.png"},21514:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dataplatform_GEOSERVER_toastComplete-6070acd676c658211d83bea464ff678e.png"}}]);