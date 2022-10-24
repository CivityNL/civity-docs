"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11268],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>c});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=d(a),c=o,m=u["".concat(s,".").concat(c)]||u[c]||h[c]||i;return a?n.createElement(m,r(r({ref:e},p),{},{components:a})):n.createElement(m,r({ref:e},p))}));function c(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,r[1]=l;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},56750:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=["components"],l={id:"dataoverheid_LinkToDataOverheid",title:"Link to National Data Portals",sidebar_label:"Link To National Portals"},s=void 0,d={unversionedId:"dataoverheid_LinkToDataOverheid",id:"dataoverheid_LinkToDataOverheid",title:"Link to National Data Portals",description:"Data.overheid.nl",source:"@site/../dataplatform/dataplatform_DATAREGISTERS_LinkToDataOverheid.md",sourceDirName:".",slug:"/dataoverheid_LinkToDataOverheid",permalink:"/en/dataplatform/next/dataoverheid_LinkToDataOverheid",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/../dataplatform/dataplatform_DATAREGISTERS_LinkToDataOverheid.md",tags:[],version:"current",lastUpdatedAt:1666622e3,formattedLastUpdatedAt:"10/24/2022",frontMatter:{id:"dataoverheid_LinkToDataOverheid",title:"Link to National Data Portals",sidebar_label:"Link To National Portals"},sidebar:"defaultSidebar",previous:{title:"What is CKAN?",permalink:"/en/dataplatform/next/ckan_Overview"},next:{title:"Link to Other Services",permalink:"/en/dataplatform/next/dataregisters_LinkToNGR"}},p={},h=[{value:"Data.overheid.nl",id:"dataoverheidnl",level:2},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"Known Limitations",id:"known-limitations",level:3},{value:"Dataportal.se",id:"dataportalse",level:2},{value:"Pushing data/listings to dataportal.se",id:"pushing-datalistings-to-dataportalse",level:3},{value:"Registration of the organization",id:"registration-of-the-organization",level:4},{value:"Pushing on dataportal.se",id:"pushing-on-dataportalse",level:4},{value:"General information:",id:"general-information",level:4}],u={toc:h};function c(t){var e=t.components,a=(0,o.Z)(t,r);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"dataoverheidnl"},"Data.overheid.nl"),(0,i.kt)("p",null,"Via DataPlatform it is possible to publish datasets on the Data Register of the Dutch Government, ",(0,i.kt)("a",{href:"https://data.overheid.nl/",target:"_blank"}," data.overheid.nl (DONL)"),"."),(0,i.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"Yes")," is selected in the metadata field ",(0,i.kt)("inlineCode",{parentName:"p"},"Publish DONL (not via NGR)"),", the dataset is automatically forwarded to data.overheid.nl (DONL)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Only datasets with visibility set to ",(0,i.kt)("strong",{parentName:"p"},"Public")," are synchronized with DONL.")),(0,i.kt)("p",null,"This synchronization takes place in real time. When changes are made to the dataset, the sync will run again. In this way, the data is also immediately updated on DONL."),(0,i.kt)("p",null,"When metadata fields are not filled in or a value is entered that does not correspond to what DONL expects, a default value will be given. This means that the metadata on DONL may be different from what can be seen on DataPlatform."),(0,i.kt)("h3",{id:"known-limitations"},"Known Limitations"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- Resources can't have the same name under the same dataset.\n- Names are the unique identifier, can't be duplicated in the whole Data Overheid side.\n- Currently not all the metadata fields are being synchronized.\n")),(0,i.kt)("h2",{id:"dataportalse"},"Dataportal.se"),(0,i.kt)("h3",{id:"pushing-datalistings-to-dataportalse"},"Pushing data/listings to dataportal.se"),(0,i.kt)("h4",{id:"registration-of-the-organization"},"Registration of the organization"),(0,i.kt)("p",null,"To publish data on dataportal.se the listings need to be pushed to the portal. For that some manual work needs to be done."),(0,i.kt)("p",null,"First thing that needs to be checked is if your organization is registered on the portal. A registration is required for your organization's data to be visible on\u202fdataportal.se. Most organizations in the public sector are already added. You can check if your organization is registered at: status public sector organization."),(0,i.kt)("p",null,"If you cannot find your organization, contact\u202fDIGG\u202f(The Agency for Digital Management) at\u202f",(0,i.kt)("a",{parentName:"p",href:"mailto:info@digg.se"},"info@digg.se"),'\u202ffor support.\u202fWhen you have found the organization you are looking for, click on it to bring up a detailed view.\u202fThere you can see the organization\'s "harvesting source", i.e. which address Sandbox scans regularly according to a list expressed in the standard DCAT-AP.\u202fIf you already have a list expressed in DCAT-AP, you can simply post it at the address provided for your organization, it usually looks like this: http://',(0,i.kt)("strong",{parentName:"p"},"organisation"),".se/datasets/dcat"),(0,i.kt)("h4",{id:"pushing-on-dataportalse"},"Pushing on dataportal.se"),(0,i.kt)("p",null,"Generating and validating a catalog RDF schema in Swedish Portal"),(0,i.kt)("h4",{id:"general-information"},"General information:"),(0,i.kt)("p",null,"CKAN endpoints to download an RDF schema:"),(0,i.kt)("p",null,"Lidingo:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ckan-storsthlm.dataplattform.se/catalog.rdf?organization=lidingo"},"https://ckan-storsthlm.dataplattform.se/catalog.rdf?organization=lidingo")),(0,i.kt)("p",null,"or Malmo:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ckan-malmo.dataplatform.se/catalog.rdf?organization=malmo"},"https://ckan-malmo.dataplatform.se/catalog.rdf?organization=malmo")),(0,i.kt)("p",null,"with the structure to be easily generated by the user like:"),(0,i.kt)("p",null,"https://",(0,i.kt)("strong",{parentName:"p"},"client_ckan_page"),"/catalog.rdf?organization={organization name of interest}"))}c.isMDXComponent=!0}}]);