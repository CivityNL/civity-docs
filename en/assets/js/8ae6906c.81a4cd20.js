"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5009],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},93244:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={id:"dataplatform_Introduction",title:"DataPlatform Introduction",sidebar_label:"Introduction"},l=void 0,d={unversionedId:"dataplatform_Introduction",id:"version-4.1.0/dataplatform_Introduction",title:"DataPlatform Introduction",description:"DataPlatform is the basic facility for managing data. DataPlatform is mainly about publishing open data in a structured way, with the right metadata, aimed at the external users.",source:"@site/dataplatform_versioned_docs/version-4.1.0/dataplatform_introduction.md",sourceDirName:".",slug:"/dataplatform_Introduction",permalink:"/en/dataplatform/dataplatform_Introduction",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/dataplatform_versioned_docs/version-4.1.0/dataplatform_introduction.md",tags:[],version:"4.1.0",lastUpdatedAt:1660552613,formattedLastUpdatedAt:"8/15/2022",frontMatter:{id:"dataplatform_Introduction",title:"DataPlatform Introduction",sidebar_label:"Introduction"},sidebar:"dataplatform",next:{title:"Release notes",permalink:"/en/dataplatform/dataplatform_Introduction_Release"}},c={},u=[{value:"CKAN",id:"ckan",level:2},{value:"DataPlatform base configuration",id:"dataplatform-base-configuration",level:2},{value:"Welcome page",id:"welcome-page",level:3},{value:"Datasets",id:"datasets",level:3},{value:"Public and private datasets",id:"public-and-private-datasets",level:4},{value:"Organizations",id:"organizations",level:4},{value:"Themes",id:"themes",level:4},{value:"Language selection",id:"language-selection",level:4}],p={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"DataPlatform is the basic facility for managing data. DataPlatform is mainly about publishing open data in a structured way, with the right metadata, aimed at the external users."),(0,o.kt)("h2",{id:"ckan"},"CKAN"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"CKAN is the tool to manage the data. It allows you to change, add, and delete data. However, in order to manipulate data, you must possess valid login credentials (contact your system administrator for this).")),(0,o.kt)("p",null,"DataPlatform uses the open source software CKAN. This is the most widely used software for open data environments worldwide."),(0,o.kt)("p",null,'CKAN stands for "Comprehensive Knowledge Archive Network," which is a ',(0,o.kt)("a",{href:"https://en.wikipedia.org/wiki/Web_application",target:"_blank"},"web-based"),", ",(0,o.kt)("a",{href:"https://en.wikipedia.org/wiki/Open-source_software",target:"_blank"},"open-source"),"\u202fmanagement system for the storage and distribution of\u202f",(0,o.kt)("a",{href:"https://en.wikipedia.org/wiki/Open_data",target:"_blank"},"open data"),"."),(0,o.kt)("p",null,"Civity's DataPlatform uses a CKAN instance as our web-based tool for dataset, resource, and metadata maintenance."),(0,o.kt)("p",null,"The CKAN environment of DataPlatform has been expanded with additional extensions such as the DataStore (API), Data Dictionary (Data dictionary) and GeoServer."),(0,o.kt)("h2",{id:"dataplatform-base-configuration"},"DataPlatform base configuration"),(0,o.kt)("p",null,"The DataPlatform environment basically consists of a Welcome page, Datasets, Organizations and Themes."),(0,o.kt)("h3",{id:"welcome-page"},"Welcome page"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Welcome page can only be customized by system administrators. Civity is the system administrator for DataPlatform.")),(0,o.kt)("p",null,"DataPlatform has a welcome page with a short introductory text and, among other things, a search bar to search directly for data."),(0,o.kt)("h3",{id:"datasets"},"Datasets"),(0,o.kt)("p",null,"DataPlatform uses 'datasets' to organize data (which are called ",(0,o.kt)("em",{parentName:"p"},"packages")," in CKAN). A dataset is a packet of data, for example 'the crime figures in the city' or 'the humidity readings of a weather station'. When the user searches for data, the results are visible in the individual datasets."),(0,o.kt)("p",null,"Datasets comprise of two main aspects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A collection of one or more datasources (which are called ",(0,o.kt)("em",{parentName:"li"},"resources")," in CKAN)"),(0,o.kt)("li",{parentName:"ul"},"Metadata")),(0,o.kt)("h4",{id:"public-and-private-datasets"},"Public and private datasets"),(0,o.kt)("p",null,"Datasets can be marked as public or private. Public datasets are visible to everyone. Private datasets can only be seen by logged-in users who are members of the dataset\u2019s organization. Private datasets are not shown in dataset searches unless the logged in user (or when the user is identified via an API key) has permission to access them."),(0,o.kt)("h4",{id:"organizations"},"Organizations"),(0,o.kt)("p",null,"DataPlatform defines organizations to organize datasets. Metadata records can belong to a single organization, and each organization controls access to its datasets via user roles."),(0,o.kt)("h4",{id:"themes"},"Themes"),(0,o.kt)("p",null,"Themes are based on required items from the DCAT-standard. Clicking on a theme acts a filter to show the relevant datasets. The number shown at each theme, refers to the number of datasets."),(0,o.kt)("h4",{id:"language-selection"},"Language selection"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The language selector is found in the footer.")),(0,o.kt)("p",null,"CKAN supports many European languages. Presently, CKAN DataPlatform is available in Dutch, English, and Swedish."))}m.isMDXComponent=!0}}]);