"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6684],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),v=d(a),c=r,k=v["".concat(s,".").concat(c)]||v[c]||u[c]||i;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=v;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}v.displayName="MDXCreateElement"},59892:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={id:"ckan_Overview",title:"Overzicht",sidebar_label:"Overzicht"},s=void 0,d={unversionedId:"ckan_Overview",id:"version-4.0.0/ckan_Overview",title:"Overzicht",description:"Hier vindt u een overzicht van wat CKAN is, naast wat u met CKAN kunt bereiken.",source:"@site/i18n/nl/docusaurus-plugin-content-docs-dataplatform/version-4.0.0/dataplatform_CKAN_Overview.md",sourceDirName:".",slug:"/ckan_Overview",permalink:"/dataplatform/4.0.0/ckan_Overview",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/i18n/nl/docusaurus-plugin-content-docs-dataplatform/version-4.0.0/dataplatform_CKAN_Overview.md",tags:[],version:"4.0.0",lastUpdatedAt:1655216981,formattedLastUpdatedAt:"14-6-2022",frontMatter:{id:"ckan_Overview",title:"Overzicht",sidebar_label:"Overzicht"},sidebar:"dataplatform",previous:{title:"Dataplatform Introductie",permalink:"/dataplatform/4.0.0/dataplatform_Introduction"},next:{title:"Gebruikersrollen",permalink:"/dataplatform/4.0.0/user_UserRoles"}},p={},u=[{value:"CKAN",id:"ckan",level:2},{value:"Taalkeuze",id:"taalkeuze",level:2},{value:"Datasets",id:"datasets",level:2},{value:"Metadata van de gegevenssets",id:"metadata-van-de-gegevenssets",level:2},{value:"Gegevensbronnen",id:"gegevensbronnen",level:2},{value:"Metadata",id:"metadata",level:2}],v={toc:u};function c(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},v,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hier vindt u een overzicht van wat CKAN is, naast wat u met CKAN kunt bereiken."),(0,i.kt)("h2",{id:"ckan"},"CKAN"),(0,i.kt)("p",null,"Dataplatform maakt gebruik van de open source software CKAN. Dit is wereldwijd de meest gebruikte software voor open data-omgevingen. "),(0,i.kt)("p",null,'CKAN staat voor "Comprehensive Knowledge Archive Network", een ',(0,i.kt)("a",{href:"https://en.wikipedia.org/wiki/Web_application",target:"_blank"},"web-based"),", ",(0,i.kt)("a",{href:"https://en.wikipedia.org/wiki/Open-source_software",target:"_blank"},"open-source")," managementsysteem voor de opslag en distributie van ",(0,i.kt)("a",{href:"https://en.wikipedia.org/wiki/Open_data",target:"_blank"},"open data"),".. "),(0,i.kt)("p",null,"Het Dataplatform-project van Civity maakt gebruik van een CKAN-instantie als onze webgebaseerde tool voor het onderhoud van datasets, gegevensbronnen en metagegevens. U kunt onze CKAN-instantie vinden op ",(0,i.kt)("a",{href:"https://ckan-dataplatform-nl.dataplatform.nl/",target:"_blank"},"ckan-dataplatform-nl.dataplatform.nl"),". De CKAN omgeving binnen het Dataplatform is uitgebreid met extra uitbreidingen zoals DCAT, DataStore (API), Data Quality controle en GeoServer. "),(0,i.kt)("h2",{id:"taalkeuze"},"Taalkeuze"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"De taalkeuze bevindt zich in de voettekst.")),(0,i.kt)("p",null,"CKAN ondersteunt vele Europese talen. Momenteel is het Nederlandse CKAN Dataplatform beschikbaar in het Nederlands en Engels;  "),(0,i.kt)("p",null,"Het Zweedse Dataplatform is beschikbaar in het Zweeds (Svenska) en Engels."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Change_language",src:a(81931).Z,width:"600",height:"128"})),(0,i.kt)("h2",{id:"datasets"},"Datasets"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"datasets worden beheerd op ",(0,i.kt)("a",{href:"https://ckan.dataplatform.nl/",target:"_blank"},(0,i.kt)("a",{parentName:"p",href:"https://ckan.dataplatform.nl"},"https://ckan.dataplatform.nl"))," en gepresenteerd op ",(0,i.kt)("a",{href:"https://dataplatform.nl",target:"_blank"},(0,i.kt)("a",{parentName:"p",href:"https://dataplatform.nl"},"https://dataplatform.nl")))),(0,i.kt)("p",null,"Voor het gebruik van CKAN worden gegevens gepubliceerd in 'datasets'. Een dataset is een pakket met data, bijvoorbeeld 'de criminaliteitscijfers in de stad' of 'de vochtigheidsmetingen van een weerstation'. Wanneer de gebruiker naar gegevens zoekt, zijn de resultaten zichtbaar in de afzonderlijke gegevenssets."),(0,i.kt)("p",null,"Datasets bestaan uit twee hoofdaspecten: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Een verzameling gegevensbronnen "),(0,i.kt)("li",{parentName:"ul"},"Metadata ")),(0,i.kt)("h2",{id:"metadata-van-de-gegevenssets"},"Metadata van de gegevenssets"),(0,i.kt)("p",null,"De metadata bevat informatie over de verzamelen aan databronnen in de dataset. De metagegevens moeten informatie geven over:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Wie de eigenaar is van de dataset "),(0,i.kt)("li",{parentName:"ul"},"Beschrijvende informatie over de inhoud  "),(0,i.kt)("li",{parentName:"ul"},"Toegangsrechten ")),(0,i.kt)("h2",{id:"gegevensbronnen"},"Gegevensbronnen"),(0,i.kt)("p",null,"Een dataset bestaat uit een verzameling gegevensbronnen; dit zijn de feitelijke bestanden of koppelingen die gegevens leveren. Uw gegevensbron kan bestaan uit \xe9\xe9n bron of uit meerdere bronnen, elke bestandsformaat en moet expliciete metagegevens bevatten. "),(0,i.kt)("h2",{id:"metadata"},"Metadata"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Metadata is gewoon data over data")),(0,i.kt)("p",null,"Elke dataset bevat metadata. Voor open data volgen we de richtlijnen uit de DCAT-Standaard. "),(0,i.kt)("p",null,"Metadata is informatie die data over andere data oplevert. Meestal betekent dit een beschrijving en context over bestaande gegevens. "),(0,i.kt)("p",null,"Zie ",(0,i.kt)("a",{parentName:"p",href:"metadata_Metadata#metadata-example"},"Metadata")," voor een uitgebreid voorbeeld."))}c.isMDXComponent=!0},81931:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Nederlands-3bd7193787202f9d7e341b63de88143f.jpg"}}]);