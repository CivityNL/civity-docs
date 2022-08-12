"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2633],{3905:(e,n,r)=>{r.d(n,{Zo:()=>v,kt:()=>c});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=t.createContext({}),s=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},v=function(e){var n=s(e.components);return t.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,v=l(e,["components","mdxType","originalType","parentName"]),p=s(r),c=a,g=p["".concat(d,".").concat(c)]||p[c]||u[c]||o;return r?t.createElement(g,i(i({ref:n},v),{},{components:r})):t.createElement(g,i({ref:n},v))}));function c(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},68581:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>v,contentTitle:()=>d,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"toevoegen_harvest",title:"Vermeldingen toevoegen - Harvesten",sidebar_label:"Harvesten van databronnen"},d=void 0,s={unversionedId:"toevoegen_harvest",id:"version-1.0.1/toevoegen_harvest",title:"Vermeldingen toevoegen - Harvesten",description:"Naast het toevoegen van vermeldingen en databronnen via de normale CKAN user interface, is het ook mogelijk om vermeldingen en data te harvesten van andere bronsystemen.",source:"@site/datacatalogus_versioned_docs/version-1.0.1/datacatalogus_vermeldingen copy 5.md",sourceDirName:".",slug:"/toevoegen_harvest",permalink:"/datacatalogus/toevoegen_harvest",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/datacatalogus_versioned_docs/version-1.0.1/datacatalogus_vermeldingen copy 5.md",tags:[],version:"1.0.1",lastUpdatedAt:1660315366,formattedLastUpdatedAt:"12-8-2022",frontMatter:{id:"toevoegen_harvest",title:"Vermeldingen toevoegen - Harvesten",sidebar_label:"Harvesten van databronnen"},sidebar:"datacatalogus",previous:{title:"Andere opties",permalink:"/datacatalogus/toevoegen_overig"},next:{title:"Gelinkte vermeldingen",permalink:"/datacatalogus/linken"}},v={},u=[{value:"Voorbeelden van bronnen die geharvest kunnen worden",id:"voorbeelden-van-bronnen-die-geharvest-kunnen-worden",level:2},{value:"ArcGIS Online",id:"arcgis-online",level:3},{value:"GeoServer",id:"geoserver",level:3},{value:"Configureren van een harvester",id:"configureren-van-een-harvester",level:2}],p={toc:u};function c(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Naast het toevoegen van vermeldingen en databronnen via de normale CKAN user interface, is het ook mogelijk om vermeldingen en data te harvesten van andere bronsystemen.")),(0,o.kt)("p",null,"In principe kunnen alle web services/API\u2019s die een lijst kunnen produceren met alle resources die ze aanbieden geharvest worden door Datacatalogus."),(0,o.kt)("p",null,"Het harvesten gebeurt in drie stappen: \u201cgather\u201d (verzamelen), \u201cfetch\u201d (ophalen) en \u201cimport\u201d (importeren). Hieronder worden de verschillende stappen uitgelegd."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In de \u201cgather\u201d fase wordt bepaald welke resources nieuw zijn, welke bijgewerkt moeten worden en welke verwijderd zijn in de bron. De harvester haalt bij de API een lijst met bronnen op en stelt daaruit de drie lijsten op. In het geval van een CSW bijvoorbeeld wordt hiervoor het GetRecords request gebruikt."),(0,o.kt)("li",{parentName:"ul"},"In de \u201cfetch\u201d fase wordt de daadwerkelijke informatie opgehaald. Het gaat hierbij om de detail informatie van de resource. In het voorbeeld van een CSW wordt hiervoor het GetRecordByID request gebruikt;"),(0,o.kt)("li",{parentName:"ul"},"In de \u201cimport\u201d fase wordt de in de \u201cgather\u201d en \u201cfetch\u201d fases opgehaalde informatie daadwerkelijk in de metadata repository bijgewerkt. Nieuwe records worden toegevoegd, bestaande records worden bijgewerkt en uit de bron verwijderde records worden opgeruimd. Daarvoor hoeft de originele bron niet meer benaderd te worden.")),(0,o.kt)("p",null,"Het configureren van hoe de harvest processen van de verschillende bronnen ingeregeld wordt is afhankelijk van een aantal zaken:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Van de metadata velden die opgenomen worden in het metadata schema. Wij adviseren om elk geval de CKAN en de DCAT metadatavelden op te nemen. Indien een koppeling naar NGR gewenst is, dan dienen ook deze velden opgenomen te worden. Daarnaast zouden nog klantspecifieke velden opgenomen kunnen worden;"),(0,o.kt)("li",{parentName:"ul"},"Hoe de links naar de bronnen opgenomen moeten worden, is afhankelijk van welke software bij de klant gebruikt worden. In het geval van een ArcGIS Online Map/Feature/ImageServer is het bijvoorbeeld een link op te nemen om de resource te openen in een online viewer, maar kunnen ook links worden opgenomen om de resource te openen in ArcGIS Desktop. Ons advies is om in elk geval de links naar de online viewer op te nemen;"),(0,o.kt)("li",{parentName:"ul"},"Bepaalde bronnen kunnen op meerdere manieren geharvest worden. Welke opties daarin zijn hangt af van hoe de te harvesten bronnen geconfigureerd zijn.\nDit vergt afstemming bij de start van een mogelijke gezamenlijk project.")),(0,o.kt)("h2",{id:"voorbeelden-van-bronnen-die-geharvest-kunnen-worden"},"Voorbeelden van bronnen die geharvest kunnen worden"),(0,o.kt)("h3",{id:"arcgis-online"},"ArcGIS Online"),(0,o.kt)("p",null,"ArcGIS Online services kunnen geharvest worden aan de hand van de API\u2019s die de inhoud van de Map/Feature/ImageServer beschrijven. Een voorbeeld van zo\u2019n document kan gevonden worden op ",(0,o.kt)("a",{parentName:"p",href:"https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer"},"https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer"),". Dit is de voor mensen leesbare variant van de inhoud van een MapServer. Feature- en ImageServers bieden een vergelijkbaar document aan. De harvester zou de JSON variant gebruiken waarvan de link in de linker bovenhoek van de leesbare variant staat. Als de WMS/WFS/WCS connectoren geactiveerd zijn kunnen ook de GetCapabilities documenten van deze services gebruikt worden om te harvesten."),(0,o.kt)("h3",{id:"geoserver"},"GeoServer"),(0,o.kt)("p",null,"GeoServer kan op verschillende manieren geharvest worden:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Wat altijd kan in het geval van GeoServer is de WMS/WCS/WFS OGC services harvesten aan de hand van hun GetCapabilities document"),(0,o.kt)("li",{parentName:"ul"},"Indien de CSW extensie ge\xefnstalleerd is, kan GeoServer ook geharvest worden aan de hand de CSW GetRecords en GetRecordByID requests"),(0,o.kt)("li",{parentName:"ul"},"Als de GeoServer REST API benaderbaar is en een username/password beschikbaar is kan ook de GeoServer REST API gebruikt worden om te harvesten. Deze laatste optie geniet wellicht niet de voorkeur vanuit beveligingsoogpunt.")),(0,o.kt)("h2",{id:"configureren-van-een-harvester"},"Configureren van een harvester"),(0,o.kt)("p",null,"Een Datacatalogus beheerder of editor kan een harvester configureren in de Datacatalogus user interface. Deze informatie kan worden ingevoerd via de CKAN API. De volgende informatie moet worden opgegeven:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"URL"),(0,o.kt)("li",{parentName:"ul"},"Naam"),(0,o.kt)("li",{parentName:"ul"},"Beschrijving"),(0,o.kt)("li",{parentName:"ul"},"Type harvester"),(0,o.kt)("li",{parentName:"ul"},"Frequentie waarmee de harvester de informatie in Datacatalogus moet verversen. Opties zijn:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Handmatig"),(0,o.kt)("li",{parentName:"ul"},"Dagelijks"),(0,o.kt)("li",{parentName:"ul"},"Wekelijks"),(0,o.kt)("li",{parentName:"ul"},"Elke twee weken"),(0,o.kt)("li",{parentName:"ul"},"Maandelijks"),(0,o.kt)("li",{parentName:"ul"},"Voortdurend"))),(0,o.kt)("li",{parentName:"ul"},"JSON met harvester specifieke configuratie opties"),(0,o.kt)("li",{parentName:"ul"},"Organisatie")))}c.isMDXComponent=!0}}]);