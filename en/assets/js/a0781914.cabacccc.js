"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95181],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1601:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"datasets_PreviewDatasources",title:"Preview Resources",sidebar_label:"Preview Resources"},s=void 0,p={unversionedId:"datasets_PreviewDatasources",id:"version-4.6.5/datasets_PreviewDatasources",title:"Preview Resources",description:"The CKAN resource page can contain one or more visualizations of the resource data or file contents (a table, a bar chart, a map, etc). These are commonly referred to as resource views.",source:"@site/dataplatform_versioned_docs/version-4.6.5/dataplatform_DATASETS_PreviewDatasources.md",sourceDirName:".",slug:"/datasets_PreviewDatasources",permalink:"/en/dataplatform/datasets_PreviewDatasources",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/dataplatform_versioned_docs/version-4.6.5/dataplatform_DATASETS_PreviewDatasources.md",tags:[],version:"4.6.5",lastUpdatedAt:1683712864,formattedLastUpdatedAt:"5/10/2023",frontMatter:{id:"datasets_PreviewDatasources",title:"Preview Resources",sidebar_label:"Preview Resources"},sidebar:"dataplatform",previous:{title:"Adding Resources",permalink:"/en/dataplatform/datasets_AddingDatasources"},next:{title:"Editing Datasets",permalink:"/en/dataplatform/datasets_EditingDatasets"}},c={},d=[{value:"Preview in CKAN",id:"preview-in-ckan",level:2},{value:"FAQ",id:"faq",level:3},{value:"Q: Why is there no view even though a view should be displayed according to the documentation?",id:"q-why-is-there-no-view-even-though-a-view-should-be-displayed-according-to-the-documentation",level:4},{value:"Q: How can I add a view?",id:"q-how-can-i-add-a-view",level:4},{value:"Preview Portal",id:"preview-portal",level:2},{value:"Table view",id:"table-view",level:4},{value:"Map view",id:"map-view",level:4},{value:"CSV",id:"csv",level:4},{value:"GeoJSON",id:"geojson",level:4}],u={toc:d};function m(e){var t=e.components,l=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The CKAN resource page can contain one or more visualizations of the resource data or file contents (a table, a bar chart, a map, etc). These are commonly referred to as resource views.")),(0,o.kt)("h2",{id:"preview-in-ckan"},"Preview in CKAN"),(0,o.kt)("p",null,"Different plugins are included in Dataplatform CKAN to preview different resource file types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Data Explorer"),(0,o.kt)("p",{parentName:"li"},"The Data Explorer consists of a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Grid")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Graph")),", and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Map view"))),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Grid view: will display a table for tabular data (CSV/XLS/XLSX)"),(0,o.kt)("li",{parentName:"ul"},"Graph: different options to display a graph for CSV/Excel files"),(0,o.kt)("li",{parentName:"ul"},"Map view: will show a map for CSV, Excel, or GeoJSON files which contain geographical coordinates.")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Note:"))," This plugin requires data to be in the DataStore"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Data Explorer example",src:a(38156).Z,width:"981",height:"460"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Text view",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Is able to display plain text files, JSON, or XML files (can depend on configuration of the plugin)")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"JSON example",src:a(75887).Z,width:"959",height:"497"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Image view",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Is configured to show PNG, JPEG or GIF files")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"PNG example",src:a(9902).Z,width:"949",height:"713"})),(0,o.kt)("p",null,"More information on previewing resources can be found in ",(0,o.kt)("a",{href:"https://docs.ckan.org/en/2.8/maintaining/data-viewer.html",target:"_blank"},"CKAN documentation")),(0,o.kt)("h3",{id:"faq"},"FAQ"),(0,o.kt)("h4",{id:"q-why-is-there-no-view-even-though-a-view-should-be-displayed-according-to-the-documentation"},"Q: Why is there no view even though a view should be displayed according to the documentation?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," For tabular data (i.e., csv/xls files) the table view is automatically added as these files get uploaded to the Data Store, which is a prerequisite for loading a data explorer view. This should always work if a csv/excel file is uploaded through the normal CKAN user interface. If, however, this is done via an API call, it could be that some parameters are missing (e.g., the file type was not specified), which could end up in the table view not being created. If this is the case, just follow the steps provided below to create a View."),(0,o.kt)("h4",{id:"q-how-can-i-add-a-view"},"Q: How can I add a view?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," You can add a View by going to: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Manage")),"->",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Views")),"->",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"New View")),"-> ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Data Explorer")),"."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"preview-portal"},"Preview Portal"),(0,o.kt)("p",null,"On the portal there is a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Table view"))," and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Map view")),":"),(0,o.kt)("h4",{id:"table-view"},"Table view"),(0,o.kt)("p",null,"On the portal a table preview is automatically added for CSV files. The table will show a maximum of 100 items a page."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Table example",src:a(95054).Z,width:"1159",height:"704"})),(0,o.kt)("h4",{id:"map-view"},"Map view"),(0,o.kt)("p",null,"Will be shown when ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Geo-Enabled"))," is set to yes and coordinates are included."),(0,o.kt)("h4",{id:"csv"},"CSV"),(0,o.kt)("p",null,"For CSV resources map will show the first 100 records/items. If you click ",(0,o.kt)("em",{parentName:"p"},"Show Table")," below the map view. You are able to go to the next 100 items or go back to the previous ones."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Map example",src:a(46177).Z,width:"1120",height:"776"})),(0,o.kt)("h4",{id:"geojson"},"GeoJSON"),(0,o.kt)("p",null,"GeoJSON resources will show all records at once on the map. See the example below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Map example",src:a(26544).Z,width:"1124",height:"781"})))}m.isMDXComponent=!0},38156:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Data_explorer-09db8567feeecef62722741ca0c11065.PNG"},26544:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/GeoJSON-b9a96e7ae491398d2288025ad3d689eb.PNG"},75887:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/JSON_example-46dab3207c9fa55f9f45de99ce35c6d6.PNG"},46177:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Map_portal-4cf75851c7181be8a6a5ac6496e79f46.PNG"},9902:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/PNG_example-168ffb2c537e6e513ff754e0ae99dfd9.PNG"},95054:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Table_portal-00fec5114bcd6463248356efed0da709.PNG"}}]);