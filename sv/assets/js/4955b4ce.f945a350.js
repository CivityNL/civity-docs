"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[28148],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=o,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||n;return a?r.createElement(h,i(i({ref:t},d),{},{components:a})):r.createElement(h,i({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},67416:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=a(87462),o=a(63366),n=(a(67294),a(3905)),i=["components"],l={id:"datasets_PreviewDatasources",title:"Preview Datasources",sidebar_label:"Preview Datasources"},s=void 0,p={unversionedId:"dataplatform/datasets_PreviewDatasources",id:"version-1.0.0/dataplatform/datasets_PreviewDatasources",title:"Preview Datasources",description:"The CKAN resource page can contain one or more visualizations of the resource data or file contents (a table, a bar chart, a map, etc). These are commonly referred to as resource views.",source:"@site/versioned_docs/version-1.0.0/dataplatform/dataplatform_DATASETS_PreviewDatasources.md",sourceDirName:"dataplatform",slug:"/dataplatform/datasets_PreviewDatasources",permalink:"/sv/docs/1.0.0/dataplatform/datasets_PreviewDatasources",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/versioned_docs/version-1.0.0/dataplatform/dataplatform_DATASETS_PreviewDatasources.md",tags:[],version:"1.0.0",lastUpdatedAt:1653657462,formattedLastUpdatedAt:"2022-05-27",frontMatter:{id:"datasets_PreviewDatasources",title:"Preview Datasources",sidebar_label:"Preview Datasources"}},d={},c=[{value:"Preview in CKAN",id:"preview-in-ckan",level:2},{value:"FAQ",id:"faq",level:3},{value:"Q: Why is there no view even though a view should be displayed according to the documentation?",id:"q-why-is-there-no-view-even-though-a-view-should-be-displayed-according-to-the-documentation",level:4},{value:"Q: How can I add a view?",id:"q-how-can-i-add-a-view",level:4},{value:"Preview Portal",id:"preview-portal",level:2},{value:"Table view",id:"table-view",level:4},{value:"Map view",id:"map-view",level:4},{value:"CSV",id:"csv",level:4},{value:"GeoJSON",id:"geojson",level:4},{value:"FAQ",id:"faq-1",level:3},{value:"Q: I&#39;ve set the Geo-Enabled field to yes, why is the map still not displayed correctly on the portal?",id:"q-ive-set-the-geo-enabled-field-to-yes-why-is-the-map-still-not-displayed-correctly-on-the-portal",level:4}],m={toc:c};function u(e){var t=e.components,l=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The CKAN resource page can contain one or more visualizations of the resource data or file contents (a table, a bar chart, a map, etc). These are commonly referred to as resource views.")),(0,n.kt)("h2",{id:"preview-in-ckan"},"Preview in CKAN"),(0,n.kt)("p",null,"Different plugins are included in Dataplatform CKAN to preview different resource file types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Data Explorer "),(0,n.kt)("p",{parentName:"li"},"  The Data Explorer consists of a ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Grid")),", ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Graph")),", and ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Map view"))),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Grid view: will display a table for tabular data (CSV/XLS/XLSX)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Graph: different options to display a graph for CSV/Excel files")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Map view: will show a map for CSV, Excel, or GeoJSON files which contain geographical coordinates. "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Note:"))," This plugin requires data to be in the ",(0,n.kt)("a",{parentName:"p",href:"datasets_AddingDatasources#datastore"},"DataStore")))))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Data Explorer example",src:a(39813).Z,width:"981",height:"460"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Text view ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Is able to display plain text files, JSON, or XML files (can depend on configuration of the plugin)")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"JSON example",src:a(80298).Z,width:"959",height:"497"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Image view",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Is configured to show PNG, JPEG or GIF files")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"PNG example",src:a(67764).Z,width:"949",height:"713"})),(0,n.kt)("p",null,"More information on previewing datasources can be found in ",(0,n.kt)("a",{href:"https://docs.ckan.org/en/2.8/maintaining/data-viewer.html",target:"_blank"},"CKAN documentation")),(0,n.kt)("h3",{id:"faq"},"FAQ"),(0,n.kt)("h4",{id:"q-why-is-there-no-view-even-though-a-view-should-be-displayed-according-to-the-documentation"},"Q: Why is there no view even though a view should be displayed according to the documentation?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"A:")," For tabular data (i.e., csv/xls files) the table view is automatically added as these files get uploaded to the Data Store, which is a prerequisite for loading a data explorer view. This should always work if a csv/excel file is uploaded through the normal CKAN user interface. If, however, this is done via an API call, it could be that some parameters are missing (e.g., the file type was not specified), which could end up in the table view not being created. If this is the case, just follow the steps provided below to create a View."),(0,n.kt)("h4",{id:"q-how-can-i-add-a-view"},"Q: How can I add a view?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"A:")," You can add a View by going to: ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Manage")),"->",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Views")),"->",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"New View")),"-> ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Data Explorer")),". "),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"preview-portal"},"Preview Portal"),(0,n.kt)("p",null,"On the portal there is a ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Table view"))," and ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Map view")),":"),(0,n.kt)("h4",{id:"table-view"},"Table view"),(0,n.kt)("p",null,"On the portal a table preview is automatically added for CSV files. The table will show a maximum of 100 items a page."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Table example",src:a(16699).Z,width:"1159",height:"704"})),(0,n.kt)("h4",{id:"map-view"},"Map view"),(0,n.kt)("p",null,"Will be shown when ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Geo-Enabled"))," is set to yes and coordinates are included. "),(0,n.kt)("h4",{id:"csv"},"CSV"),(0,n.kt)("p",null,"For CSV datasources map will show the first 100 records/items. If you click ",(0,n.kt)("em",{parentName:"p"},"Show Table")," below the map view. You are able to go to the next 100 items or go back to the previous ones."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Map example",src:a(54237).Z,width:"1120",height:"776"})),(0,n.kt)("h4",{id:"geojson"},"GeoJSON"),(0,n.kt)("p",null,"GeoJSON datasources will show all records at once on the map. See the example below."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Map example",src:a(69337).Z,width:"1124",height:"781"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," The ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Geo-Enabled"))," meta data field can be set to ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Yes"))," for every type of resource. Therefore by default this option is set to ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"No"))," and should only be set to ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Yes"))," for datasources that can be displayed on a map")),(0,n.kt)("h3",{id:"faq-1"},"FAQ"),(0,n.kt)("h4",{id:"q-ive-set-the-geo-enabled-field-to-yes-why-is-the-map-still-not-displayed-correctly-on-the-portal"},"Q: I've set the Geo-Enabled field to yes, why is the map still not displayed correctly on the portal?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"A:")," Make sure to check the following things:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Are you using one of the filetypes that support the map functionality (i.e., CSV or GeoJSON)?"),(0,n.kt)("li",{parentName:"ul"},"Does the CSV file consist of geometry columns, and do the column names comply with the default field keywords? See documentation on ",(0,n.kt)("a",{parentName:"li",href:"datasets_ManageGeometryColumns"},"managing geometry columns")),(0,n.kt)("li",{parentName:"ul"},"Is your datasource missing any values?")))}u.isMDXComponent=!0},39813:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Data_explorer-09db8567feeecef62722741ca0c11065.PNG"},69337:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/GeoJSON-b9a96e7ae491398d2288025ad3d689eb.PNG"},80298:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/JSON_example-46dab3207c9fa55f9f45de99ce35c6d6.PNG"},54237:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Map_portal-4cf75851c7181be8a6a5ac6496e79f46.PNG"},67764:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/PNG_example-168ffb2c537e6e513ff754e0ae99dfd9.PNG"},16699:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Table_portal-00fec5114bcd6463248356efed0da709.PNG"}}]);