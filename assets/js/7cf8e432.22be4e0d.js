"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9489],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(o),f=r,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||n;return o?a.createElement(m,i(i({ref:t},d),{},{components:o})):a.createElement(m,i({ref:t},d))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<n;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},96664:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=o(87462),r=o(63366),n=(o(67294),o(3905)),i=["components"],l={id:"datacollection_stap1",title:"Connect to our Dataplatform",sidebar_label:"Connect to our Dataplatform"},s=void 0,c={unversionedId:"data-collection/datacollection_stap1",id:"version-1.0.0/data-collection/datacollection_stap1",title:"Connect to our Dataplatform",description:"In our Farmer Shops example, the names of the input fields of our form correspond to the column names in the dataset. After the user submits the form, a new record is added to a CSV file that is stored in the CKAN Datastore on our Dataplatform. In order to insert these new records we make use of the CKAN Datastore API.",source:"@site/versioned_docs/version-1.0.0/data-collection/weidewinkels_stap1.md",sourceDirName:"data-collection",slug:"/data-collection/datacollection_stap1",permalink:"/docs/1.0.0/data-collection/datacollection_stap1",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/versioned_docs/version-1.0.0/data-collection/weidewinkels_stap1.md",tags:[],version:"1.0.0",lastUpdatedBy:"isabeladowsley",lastUpdatedAt:1653657462,formattedLastUpdatedAt:"27-5-2022",frontMatter:{id:"datacollection_stap1",title:"Connect to our Dataplatform",sidebar_label:"Connect to our Dataplatform"}},d={},p=[{value:"Harvester title field",id:"harvester-title-field",level:2},{value:"How do I set this up for my own project?",id:"how-do-i-set-this-up-for-my-own-project",level:2}],u={toc:p};function f(e){var t=e.components,l=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In our Farmer Shops example, the names of the input fields of our form correspond to the column names in the dataset. After the user submits the form, a new record is added to a CSV file that is stored in the CKAN Datastore on our Dataplatform. In order to insert these new records we make use of the ",(0,n.kt)("a",{href:"https://docs.ckan.org/en/latest/maintaining/datastore.html#the-datastore-api",target:"_blank"},"CKAN Datastore API"),"."),(0,n.kt)("h2",{id:"harvester-title-field"},(0,n.kt)("img",{alt:"Harvester title field",src:o(47423).Z,width:"1361",height:"1072"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"In our example, the entry-field 'Bedrijfsnaam', corresponds to column name 'company'.")),(0,n.kt)("h2",{id:"how-do-i-set-this-up-for-my-own-project"},"How do I set this up for my own project?"),(0,n.kt)("p",null,"The only thing you need to do, is create your own data-entry form. We can assist in connecting this form to a new dataset in our Dataplatform. We will make sure to set up a custom dataset in our Dataplatform to which records can be added. "),(0,n.kt)("p",null,"The dataset will consist of a datasource, an (empty) CSV file, with the desired columnnames. An API will be created for this datasource once it is uploaded to the CKAN Datastore through our platform. In order to use the CKAN Datastore API, an API key is needed. We will give you access to this as well."),(0,n.kt)("p",null,"All of the collected data will automatically be saved on our Dataplatform. The data will be available for the public to view and download on our open data portal at ",(0,n.kt)("a",{parentName:"p",href:"https://www.dataplatform.nl."},"https://www.dataplatform.nl.")," If your data consists of Geo data, there is also the possibility to upload the dataset to Geoserver, which is integrated in our Dataplatform."),(0,n.kt)("p",null,"In the next section we will explain how you can use the CKAN Datastore API to insert new records to your dataset."))}f.isMDXComponent=!0},47423:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/DataToolkit_columns-ddbb7a56622379692e34d0c541fd3e12.png"}}]);