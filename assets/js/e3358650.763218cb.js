"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6003],{3905:(e,t,a)=>{a.d(t,{Zo:()=>v,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},v=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,v=s(e,["components","mdxType","originalType","parentName"]),c=d(a),u=n,m=c["".concat(l,".").concat(u)]||c[u]||p[u]||i;return a?r.createElement(m,o(o({ref:t},v),{},{components:a})):r.createElement(m,o({ref:t},v))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},19617:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],s={id:"harvesting_Harvesting",title:"Uitleg",hide_title:!0,sidebar_label:"Uitleg"},l=void 0,d={unversionedId:"harvesting_Harvesting",id:"version-4.1.0/harvesting_Harvesting",title:"Uitleg",description:"Wat is een Data Harvester?",source:"@site/i18n/nl/docusaurus-plugin-content-docs-dataplatform/version-4.1.0/dataplatform_HARVESTING_Harvesting.md",sourceDirName:".",slug:"/harvesting_Harvesting",permalink:"/dataplatform/harvesting_Harvesting",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/i18n/nl/docusaurus-plugin-content-docs-dataplatform/version-4.1.0/dataplatform_HARVESTING_Harvesting.md",tags:[],version:"4.1.0",lastUpdatedAt:1655992632,formattedLastUpdatedAt:"23-6-2022",frontMatter:{id:"harvesting_Harvesting",title:"Uitleg",hide_title:!0,sidebar_label:"Uitleg"},sidebar:"dataplatform",previous:{title:"Datasets downloaden",permalink:"/dataplatform/datasets_DownloadingDatasets"},next:{title:"Starten met harvesten",permalink:"/dataplatform/harvesting_GettingStarted"}},v={},p=[{value:"Wat is een Data Harvester?",id:"wat-is-een-data-harvester",level:2},{value:"Soorten harvesters",id:"soorten-harvesters",level:2},{value:"CKAN harvester",id:"ckan-harvester",level:3},{value:"JSON DCAT-harvester",id:"json-dcat-harvester",level:3},{value:"Generieke DCAT RDF Harvester",id:"generieke-dcat-rdf-harvester",level:3},{value:"Civity CSW Server",id:"civity-csw-server",level:3}],c={toc:p};function u(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"wat-is-een-data-harvester"},"Wat is een Data Harvester?"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Harvesters importeren datasets van externe bronnen in een CKAN-instantie. Dit wordt gedaan door de metadata van deze externe bron te mappen naar CKAN-metadatavelden. ")),(0,i.kt)("p",null,"CKAN gebruikt de (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ckan/ckanext-harvest"},"ckanext-harvest"),") extensie, die een interface biedt voor het bouwen van aangepaste harvester. Deze interface heeft drie fasen:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"De ",(0,i.kt)("strong",{parentName:"li"},"gather"),"-fase verzamelt alle resource-ID's die in de volgende fase moeten worden opgehaald."),(0,i.kt)("li",{parentName:"ol"},"De ",(0,i.kt)("strong",{parentName:"li"},"fetch"),"-fase haalt de inhoud van de objecten op afstand op en slaat ze op in de database."),(0,i.kt)("li",{parentName:"ol"},"De fase ",(0,i.kt)("strong",{parentName:"li"},"import")," voert alle noodzakelijke acties uit bij de opgehaalde bron.")),(0,i.kt)("p",null,"Specifieke documentatie over de ",(0,i.kt)("em",{parentName:"p"},"CKAN Remote Harvesting extensie")," is ",(0,i.kt)("a",{href:"https://github.com/ckan/ckanext-harvest",target:"_blank"},"hier")," te vinden"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"soorten-harvesters"},"Soorten harvesters"),(0,i.kt)("p",null,"Dataplatform biedt de volgende opties om data te harvesten:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"CKAN harvester"),(0,i.kt)("li",{parentName:"ol"},"JSON DCAT harvester"),(0,i.kt)("li",{parentName:"ol"},"Generieke DCAT RDF harvester"),(0,i.kt)("li",{parentName:"ol"},"Civity CSW-server harvester")),(0,i.kt)("h3",{id:"ckan-harvester"},"CKAN harvester"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"De CKAN Harvester is een voorbeeld van een custom harvester. Met deze harvester kun je data van een externe CKAN-instantie importeren in jouw eigen CKAN-instantie.")),(0,i.kt)("h3",{id:"json-dcat-harvester"},"JSON DCAT-harvester"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"De JSON DCAT Harvester is een plug-in die deel uitmaakt van de DCAT-extensie ",(0,i.kt)("a",{href:"https://github.com/ckan/ckanext-dcat",target:"_blank"},"ckanext-dcat"),". Met deze harvester kun je JSON-objecten importeren op basis van DCAT-metadatavelden en deze DCAT-metadatavelden mappen op CKAN-velden."),(0,i.kt)("a",{href:"https://github.com/ckan/ckanext-dcat#json-dcat-harvester",target:"_blank"},"Ga naar CKAN-documentatie JSON DCAT Harvester"))),(0,i.kt)("h3",{id:"generieke-dcat-rdf-harvester"},"Generieke DCAT RDF Harvester"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Deze harvester is een andere custom harvester die deel uitmaakt van de DCAT-extensie.")),(0,i.kt)("h3",{id:"civity-csw-server"},"Civity CSW Server"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dit is een custom harvester van Civity om CSW's te harvesten.")))}u.isMDXComponent=!0}}]);