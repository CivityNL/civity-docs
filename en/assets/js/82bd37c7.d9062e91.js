"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8619],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(a),p=i,h=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92851:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),r=["components"],l={id:"verplichte_metadatavelden",title:"DataCatalog - Metadata Schema",sidebar_label:"DataCatalog - Metadata Schema"},s=void 0,c={unversionedId:"verplichte_metadatavelden",id:"version-1.0.1/verplichte_metadatavelden",title:"DataCatalog - Metadata Schema",description:"As opposed to DataPlatform, DataCatalog provides a client with the opportunity to configure a highly customized metadata schema",source:"@site/i18n/en/docusaurus-plugin-content-docs-datacatalogus/version-1.0.1/datacatalogus_metadata.md",sourceDirName:".",slug:"/verplichte_metadatavelden",permalink:"/en/datacatalogus/verplichte_metadatavelden",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/i18n/en/docusaurus-plugin-content-docs-datacatalogus/version-1.0.1/datacatalogus_metadata.md",tags:[],version:"1.0.1",lastUpdatedAt:1660564519,formattedLastUpdatedAt:"8/15/2022",frontMatter:{id:"verplichte_metadatavelden",title:"DataCatalog - Metadata Schema",sidebar_label:"DataCatalog - Metadata Schema"},sidebar:"datacatalogus",previous:{title:"Workflow",permalink:"/en/datacatalogus/workflow"},next:{title:"Link to DataPlatform",permalink:"/en/datacatalogus/link_dataplatform"}},d={},u=[{value:"Schema building blocks",id:"schema-building-blocks",level:2},{value:"CKAN",id:"ckan",level:3},{value:"DCAT",id:"dcat",level:3},{value:"NGR",id:"ngr",level:3},{value:"Customer specific",id:"customer-specific",level:3},{value:"User Interface layout",id:"user-interface-layout",level:2}],m={toc:u};function p(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"As opposed to DataPlatform, DataCatalog provides a client with the opportunity to configure a highly customized metadata schema")),(0,o.kt)("p",null,"DataCatalog supports multiple metadata schemas. What fields are present in the metadata schema is controlled using JSON configuration files. The metadata schema consists of a number of building blocks. These building blocks can be combined to create a complete schema. In DataCatalog, a client has more degrees of freedom in defining their metadata schema, since it's an internal catalog. If a listing is forwarded from DataCatalog to DataPlatform a mapping is applied to map the customer specific metadata schema to the DataPlatform harmonized one. Missing values will be replaced with default one. Please consult Civity for an overview of the mapping for your specific DataCatalog schema."),(0,o.kt)("p",null,"Setting up a metadata schema for DataCatalog is done by Civity."),(0,o.kt)("h2",{id:"schema-building-blocks"},"Schema building blocks"),(0,o.kt)("p",null,"Although a schema can, in consultation with Civity, be customized depending on a client's needs, the default set up of most DataCatalog clients consists of a number of fundamental building blocks."),(0,o.kt)("h3",{id:"ckan"},"CKAN"),(0,o.kt)("p",null,"The first (and only mandatory building block) contains the fields required by CKAN. These include for example a title, description, keywords and a license."),(0,o.kt)("h3",{id:"dcat"},"DCAT"),(0,o.kt)("p",null,"The second important building block contains the DCAT fields. Currently, this building block is by far the biggest building block, defining more fields than any other building block. Different DCAT application profiles which can be implemented in DataCatalog have been created for different countries. Currently, ",(0,o.kt)("a",{href:"https://docs.dataportal.se/dcat/en/",target:"_blank",rel:"noreferrer noopener"},"DCAT-AP-SE (Sweden)")," and ",(0,o.kt)("a",{href:"https://dcat-ap-donl.readthedocs.io/en/latest/",target:"_blank",rel:"noreferrer noopener"},"DCAT-AP-DONL (the Netherlands)")," are available."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Since a DCAT building block is not mandatory, clients can choose to not include (certain) mandatory DCAT fields in their schema. Be aware that this can lead to mapping issues when certain data gets pushed to DataPlatform, since DataPlatform consists for a large part out of DCAT metadata fields."))),(0,o.kt)("h3",{id:"ngr"},"NGR"),(0,o.kt)("p",null,"For Dutch customers, a building block to collect the information required by the Nationaal Georegister (NGR), a GeoNetwork instance, is present. The metadata fields in this building block consist of geo-data metadata and are based on ISO 19115."),(0,o.kt)("h3",{id:"customer-specific"},"Customer specific"),(0,o.kt)("p",null,"Last but not least, a customer specific building block is created. Using this building block a) fields can be added, b) optional fields can be disabled, c) default values for the organization which seldom (in which case there is an option to override the default value) or never (in which case the field may be hidden) change can be set, d) the code lists from DCAT can be restricted to codes actually in use by the organization and e) optional fields can be turned into mandatory fields."),(0,o.kt)("h2",{id:"user-interface-layout"},"User Interface layout"),(0,o.kt)("p",null,"In addition to customizing the schema itself, there is also the possibility to customize the user interface by grouping certain metadata together in the metadata edit screen. These groups can be collapsed or expanded when editing/adding a listing's metadata. In addition, with a checkbox, there is the possibility to only show mandatory fields."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Adjusting the grouping of fields can only be done by Civity"))))}p.isMDXComponent=!0}}]);