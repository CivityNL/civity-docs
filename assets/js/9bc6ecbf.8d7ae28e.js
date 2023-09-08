"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2396],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(a),g=o,v=c["".concat(i,".").concat(g)]||c[g]||u[g]||r;return a?n.createElement(v,d(d({ref:t},p),{},{components:a})):n.createElement(v,d({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,d=new Array(r);d[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,d[1]=l;for(var s=2;s<r;s++)d[s]=a[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},21293:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),d=["components"],l={id:"datasets_AddingDatasources",title:"Databronnen toevoegen",sidebar_label:"Databronnen toevoegen"},i=void 0,s={unversionedId:"datasets_AddingDatasources",id:"version-4.7.2/datasets_AddingDatasources",title:"Databronnen toevoegen",description:"Alle databronnen/bijlages zijn onderdeel van een dataset.",source:"@site/i18n/nl/docusaurus-plugin-content-docs-dataplatform/version-4.7.2/dataplatform_DATASETS_AddingDatasources.md",sourceDirName:".",slug:"/datasets_AddingDatasources",permalink:"/dataplatform/datasets_AddingDatasources",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/i18n/nl/docusaurus-plugin-content-docs-dataplatform/version-4.7.2/dataplatform_DATASETS_AddingDatasources.md",tags:[],version:"4.7.2",lastUpdatedAt:1694174179,formattedLastUpdatedAt:"8-9-2023",frontMatter:{id:"datasets_AddingDatasources",title:"Databronnen toevoegen",sidebar_label:"Databronnen toevoegen"},sidebar:"dataplatform",previous:{title:"Datasets toevoegen",permalink:"/dataplatform/datasets_AddingDatasets"},next:{title:"Databron preview bekijken",permalink:"/dataplatform/datasets_PreviewDatasources"}},p={},u=[{value:"Handmatig uploaden",id:"handmatig-uploaden",level:2},{value:"Databronnen toevoegen",id:"databronnen-toevoegen",level:3},{value:"Real-time / IoT data",id:"real-time--iot-data",level:2}],c={toc:u};function g(e){var t=e.components,l=(0,o.Z)(e,d);return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Alle databronnen/bijlages zijn onderdeel van een dataset.")),(0,r.kt)("p",null,"Databronnen kunnen alleen aan datasets worden toegevoegd nadat de (verplichte) metadata van een dataset is ingevuld."),(0,r.kt)("h2",{id:"handmatig-uploaden"},"Handmatig uploaden"),(0,r.kt)("h3",{id:"databronnen-toevoegen"},"Databronnen toevoegen"),(0,r.kt)("p",null,"Nadat de metadata op datasetniveau is beschreven, kan data worden toegevoegd. Klik op de knop 'Volgende: Data toevoegen'."),(0,r.kt)("p",null,'Op deze pagina kunnen \xe9\xe9n of meerdere bestanden ("resources") aan de dataset worden toegevoegd. Er zijn twee manieren om een bestand toe te voegen:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Door een bestand te uploaden"),(0,r.kt)("li",{parentName:"ul"},"Door te linken naar een bestand via een URL (locatie)")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"01",src:a(53410).Z,width:"271",height:"49"})),(0,r.kt)("p",null,"Als er een CSV, DGN, GeoJSON, GPKG, Shapefile/ZIP, XLS of XLSX wordt toegevoegd (zowel uploaden als linken), wordt het bestand opgeslagen in de DataStore van het DataPlatform en toegankelijk via de DataStore API. Andere bestandsformaten worden opgeslagen als een bestand en zijn beschikbaar om te downloaden."),(0,r.kt)("p",null,"Ook bij een databron moet verplichte metadata worden ingevuld:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Titel: geef een onderscheidende naam aan het bestand."),(0,r.kt)("li",{parentName:"ol"},"Omschrijving : leg de inhoud van het bestand uit."),(0,r.kt)("li",{parentName:"ol"},"Formaat \u2013 Het formaat waarin de bron wordt geleverd, bijvoorbeeld CSV, XLS, JSON, PDF enz. Dit veld kan leeg blijven. CKAN bepaalt het formaat zelf op basis van de extensie.")),(0,r.kt)("p",null,"Als je meerdere databronnen (uploaden of links) aan de dataset wilt toevoegen, kies je \"opslaan en nog een toevoegen\". Als je slechts \xe9\xe9n bestand aan de dataset toevoegt, kies je 'voltooien'"),(0,r.kt)("p",null,"CKAN slaat het bestand op en publiceert de dataset. Het resultaat wordt onmiddellijk weergegeven. Als de dataset openbaar toegankelijk is, kan het resultaat ook worden weergegeven op het Open Data Portaal. Datasets die priv\xe9 zijn, zijn niet zichtbaar op het Open Data Portaal.."),(0,r.kt)("h2",{id:"real-time--iot-data"},"Real-time / IoT data"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Real-time data kunnen als bron worden toegevoegd, maar de installatie en configuratie moeten door Civity worden afgehandeld.")),(0,r.kt)("p",null,"Er moet een verbinding worden geconfigureerd tussen de API en DataPlatform. Fiware-componenten worden gebruikt om velden van de API te configureren, die vervolgens worden vertaald in nuttige open data."))}g.isMDXComponent=!0},53410:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/01-c11db87bdbd253ad759573f304d2b17e.JPG"}}]);