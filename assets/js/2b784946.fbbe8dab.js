"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2731],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(a),m=o,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},39514:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),l=["components"],i={id:"datasets_AddingDatasources",title:"Adding Datasources",sidebar_label:"Adding Datasources"},s=void 0,d={unversionedId:"dataplatform/datasets_AddingDatasources",id:"version-1.0.0/dataplatform/datasets_AddingDatasources",title:"Adding Datasources",description:"All sources are stored within a dataset.",source:"@site/versioned_docs/version-1.0.0/dataplatform/dataplatform_DATASETS_AddingDatasources.md",sourceDirName:"dataplatform",slug:"/dataplatform/datasets_AddingDatasources",permalink:"/docs/1.0.0/dataplatform/datasets_AddingDatasources",draft:!1,tags:[],version:"1.0.0",frontMatter:{id:"datasets_AddingDatasources",title:"Adding Datasources",sidebar_label:"Adding Datasources"}},u={},c=[{value:"Manual Upload",id:"manual-upload",level:2},{value:"Additional Details",id:"additional-details",level:3},{value:"Link To Source",id:"link-to-source",level:2},{value:"Source as a Link",id:"source-as-a-link",level:3},{value:"Additional Details",id:"additional-details-1",level:4},{value:"Real-time Data",id:"real-time-data",level:2},{value:"Additional Details",id:"additional-details-2",level:4},{value:"Geo-Enabled",id:"geo-enabled",level:2},{value:"DataStore",id:"datastore",level:2},{value:"CKAN DataStore",id:"ckan-datastore",level:3},{value:"Managing DataStore",id:"managing-datastore",level:3},{value:"DataStore Error Handling",id:"datastore-error-handling",level:3},{value:"Common Errors",id:"common-errors",level:4}],p={toc:c};function m(e){var t=e.components,i=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"All sources are stored within a dataset.")),(0,r.kt)("p",null,"Sources may be added to datasets, only after the dataset has been added and configured."),(0,r.kt)("h2",{id:"manual-upload"},"Manual Upload"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"CSV")," and ",(0,r.kt)("strong",{parentName:"p"},"(geo)JSON")," filetypes are accessible by Dataplatform\u2019s API. Other datatypes are saved and provided as a download link.")),(0,r.kt)("p",null,"A source can be an kind of file that is machine-readable; this includes, but is not limited to: ",(0,r.kt)("strong",{parentName:"p"},"CSV"),", ",(0,r.kt)("strong",{parentName:"p"},"JSON"),", ",(0,r.kt)("strong",{parentName:"p"},"PDF"),", and ",(0,r.kt)("strong",{parentName:"p"},"JPG")," file types. Additionally, sources may also be a link. "),(0,r.kt)("p",null,"For more information regarding datasources, see ",(0,r.kt)("a",{href:"#link-to-source"},"Link To Source")),(0,r.kt)("h3",{id:"additional-details"},"Additional Details"),(0,r.kt)("p",null,"This field allows you to add any kind of additional information."),(0,r.kt)("p",null,"Typical additional information includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name: ",(0,r.kt)("em",{parentName:"li"},"This will be the filename, ensure it is descriptive")),(0,r.kt)("li",{parentName:"ul"},"Description: ",(0,r.kt)("em",{parentName:"li"},"Provide an explanation of the contents of the file")),(0,r.kt)("li",{parentName:"ul"},"Format: ",(0,r.kt)("em",{parentName:"li"},"The format in which the source is provided (CSV, XLS, JSON, PDF, etc)."))),(0,r.kt)("p",null,'If you have additional sources to add, choose "Save & Add Another." If you only have one, choose "End."'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"CKAN will now save the file and create a dataset. The resulting entry is viewable within 30 minutes. If the visibility is set to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Public")),", the dataset will become viewable on ",(0,r.kt)("a",{href:"https://www.dataplatform.nl",target:"_blank",rel:"noreferrer noopener"},"dataplatform"),". ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Private"))," datasets are not visible on Dataplatform.")),(0,r.kt)("h2",{id:"link-to-source"},"Link To Source"),(0,r.kt)("p",null,"All sources are stored in datasets. Only when a dataset is setup, may a source be added."),(0,r.kt)("h3",{id:"source-as-a-link"},"Source as a Link"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Linked data is not available as a callable API")),(0,r.kt)("p",null,"When data is stored in a different location, you may added as a linked source. Any kind of link may be utilized: ",(0,r.kt)("em",{parentName:"p"},"URL"),", ",(0,r.kt)("em",{parentName:"p"},"URI"),", or an ",(0,r.kt)("em",{parentName:"p"},"API"),"."),(0,r.kt)("h4",{id:"additional-details-1"},"Additional Details"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{href:"#additional-details"},"Additional Details")),(0,r.kt)("h2",{id:"real-time-data"},"Real-time Data"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Real-time data may be added as a source, however setup and configuration must be handled by Civity. ")),(0,r.kt)("p",null,"A connection must be configured between the API and Dataplatform. Fiware components are used to configure fields provided by the API, which are then translated into useful open data."),(0,r.kt)("h4",{id:"additional-details-2"},"Additional Details"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{href:"#additional-details"},"Additional Details")),(0,r.kt)("h2",{id:"geo-enabled"},"Geo-Enabled"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In order to use the Geo-Enabled feature, your datasource must contain a set of coordinates.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"CSV")," filetypes must be presented according to the ",(0,r.kt)("a",{href:"https://en.wikipedia.org/wiki/World_Geodetic_System",target:"_blank"},"World Geodetic System (WGS84)")," coordinate system")),(0,r.kt)("p",null,"Geo-Enabled datasources allow you to view your data as a set of coordinates on a map."),(0,r.kt)("h2",{id:"datastore"},"DataStore"),(0,r.kt)("p",null,"The datastore allows specific data to be previewable, and accessable via API calls, where possible. Data that is not placed in the datastore will still be accessable, but only by download."),(0,r.kt)("h3",{id:"ckan-datastore"},"CKAN DataStore"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If your data is stored as either a ",(0,r.kt)("strong",{parentName:"p"},"CSV")," or ",(0,r.kt)("strong",{parentName:"p"},"(geo)JSON")," filetypes, CKAN will automatically make them available in the Datastore")),(0,r.kt)("p",null,"CKAN Datastore is available for previewing and handling datasources; you can view this information in either a table or map view."),(0,r.kt)("h3",{id:"managing-datastore"},"Managing DataStore"),(0,r.kt)("p",null,"To view or manage information held in Datastore, navigate to your desired datasource and select the ",(0,r.kt)("strong",{parentName:"p"},"Datastore")," tab."),(0,r.kt)("img",{class:"imageStyle",target:"_blank",alt:"imageStyle: DataStore",src:a(92985).Z}),(0,r.kt)("p",null,"To check whether a source may be added, click the \u201cUpload to DataStore\u201d button."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Headers"))),(0,r.kt)("p",{parentName:"blockquote"},"DataStore automatically determines whether headers may be constructed; a header(s) is the first horizontal entry in a column. The data type (numeric, text, timestamp, etc) is determined by the first 250 entries.")),(0,r.kt)("p",null,'Tabular data is uploaded in chunks of 250 entires at a time. This means that large files, with many entries, can take some time before they are rendered as a preview. If you are waiting for the data to render as a preview, do not click "Upload to DataStore" again. Instead refresh the page, or tab.'),(0,r.kt)("p",null,"When your upload completes, you will see ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Complete"))," next to the *",(0,r.kt)("em",{parentName:"p"},"Stats")," field."),(0,r.kt)("img",{class:"imageStyle",target:"_blank",alt:"imageStyle: DataStore",src:a(94007).Z}),(0,r.kt)("h3",{id:"datastore-error-handling"},"DataStore Error Handling"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"DataStore will throw an error when either the preview or API creation is not correctly handled; the data itself may still be correct.")),(0,r.kt)("p",null,"If the green ",(0,r.kt)("strong",{parentName:"p"},"API")," button is missing, or the number of entries does not match the original datasource, there was likely an error duing DataStore processing. To check the error condition, navigate to the DataStore tab from datasource."),(0,r.kt)("h4",{id:"common-errors"},"Common Errors"),(0,r.kt)("table",{class:"versions"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Message"),(0,r.kt)("th",null,"Explanation"),(0,r.kt)("th",null,"Troubleshooting")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("strong",null,"Error __context__: 'The data was invalid (for example: a numeric value is out of range or was inserted into a text field).")),(0,r.kt)("td",null,(0,r.kt)("ul",null,(0,r.kt)("li",null,"Only numbers have appeared in the first 250 entries."),(0,r.kt)("li",null,"A field contains two different kinds of data (ex. ",(0,r.kt)("i",null,"2412",(0,r.kt)("strong",null,"K")),"). This will cause DataStore to stop indexing at the offending row."))),(0,r.kt)("td",null,(0,r.kt)("ul",null,(0,r.kt)("li",null,"Add a title to each column, declaring what kind of data the column contains (ex. Date, Time, Currency, etc)"),(0,r.kt)("li",null,"Find the incorrect field, and adjust it so it contains only a single type of data"),(0,r.kt)("li",null,"Correct your numeric header in Data Dictionary to regular text")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("strong",null,"Error: Cannot connect to datapusher"),(0,r.kt)("p",null,"Normally the datapusher automatically pushes data into the datastore on creating a datasource."),(0,r.kt)("p",null,"This error results in a datasource not being uploaded correctly to the datastore, as the datapusher was not able to connect")),(0,r.kt)("td",null,(0,r.kt)("ul",null,(0,r.kt)("li",null,"As this error mostly occurs on creating a datasource, the best option is to again try to upload to the datastore. This will almost always solve the issue. If not, contact your site administrator."),(0,r.kt)("li",null,"As a result of not being able to connect to the datapusher, a view is often also not created. This can be done manually.")))))))}m.isMDXComponent=!0},92985:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dataplatform_DATASETS_AddingDatasoruces_datastore-5978e7c31ae79c97c9a76e5b5d3f46fc.png"},94007:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dataplatform_DATASETS_AddingDatasoruces_datastoreComplete-a6d04cd5228dffca56972878ef0c444b.png"}}]);