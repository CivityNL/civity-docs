"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21674],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),k=s(a),c=o,m=k["".concat(i,".").concat(c)]||k[c]||p[c]||r;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=k;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:o,l[1]=d;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},91361:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>d,metadata:()=>s,toc:()=>p});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),l=["components"],d={id:"ckan_api",title:"CKAN API",sidebar_label:"CKAN API"},i=void 0,s={unversionedId:"datacatalogus/ckan_api",id:"version-1.0.0/datacatalogus/ckan_api",title:"CKAN API",description:"CKAN API",source:"@site/versioned_docs/version-1.0.0/datacatalogus/datacatalogus_ckan_api.md",sourceDirName:"datacatalogus",slug:"/datacatalogus/ckan_api",permalink:"/docs/1.0.0/datacatalogus/ckan_api",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/versioned_docs/version-1.0.0/datacatalogus/datacatalogus_ckan_api.md",tags:[],version:"1.0.0",lastUpdatedAt:1653657462,formattedLastUpdatedAt:"27-5-2022",frontMatter:{id:"ckan_api",title:"CKAN API",sidebar_label:"CKAN API"}},u={},p=[{value:"CKAN API",id:"ckan-api",level:2},{value:"DataStore",id:"datastore",level:2},{value:"CKAN DataStore",id:"ckan-datastore",level:3},{value:"Uploaden naar de DataStore",id:"uploaden-naar-de-datastore",level:3},{value:"DataStore fouten",id:"datastore-fouten",level:3},{value:"Veelvoorkomende fouten",id:"veelvoorkomende-fouten",level:4}],k={toc:p};function c(e){var t=e.components,d=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},k,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ckan-api"},"CKAN API"),(0,r.kt)("p",null,"Datacatalogus maakt gebruik van de uitgebreide CKAN API. Informatie over de mogelijkheden van deze API is te vinden op ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ckan.org/en/latest/api/index.html"},"https://docs.ckan.org/en/latest/api/index.html"),". "),(0,r.kt)("p",null,"Daarnaast is er een link naar de API (",(0,r.kt)("a",{parentName:"p",href:"https://acc-ckan-utrecht.dataplatform.nl/api/3"},"https://acc-ckan-utrecht.dataplatform.nl/api/3"),") en bovenstaande documentatie te vinden onderaan de pagina VERMELDINGEN."),(0,r.kt)("p",null,"Wanneer databronnen (bijv. een csv-bestand in een Vermelding) zijn toegevoegd aan de Datastore","[1]",", en je een databron aanklikt zul je tevens een groene knop met Data API zien. Hier kun je voor deze specifieke databron meer informatie over de API eindpunten vinden en documentatie over de Datastore API","[2]"," die beschikbaar is voor databronnen die zijn toegevoegd aan de Datastore."),(0,r.kt)("h2",{id:"datastore"},"DataStore"),(0,r.kt)("p",null,"Via de Datastore kan specifieke data als een preview worden getoond en kan data worden opgevraagd via API calls. Data die niet in de Datastore terecht komt, is nog steeds toegankelijk maar kan alleen via een download worden bekeken. Er is in dat geval geen preview mogelijkheid binnen de Datacatalogus."),(0,r.kt)("h3",{id:"ckan-datastore"},"CKAN DataStore"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Als je data is opgeslagen als een ",(0,r.kt)("strong",{parentName:"p"},"CSV")," of ",(0,r.kt)("strong",{parentName:"p"},"(geo)JSON")," bestandstype, zal CKAN de bestanden automatisch uploaden naar de Datastore.")),(0,r.kt)("p",null,"Wanneer een vermelding is opgeslagen in de CKAN Datastore, kan de data via een preview bekeken worden. Hier wordt de data getoond in een tabel of op een kaart en kun je de data filteren."),(0,r.kt)("h3",{id:"uploaden-naar-de-datastore"},"Uploaden naar de DataStore"),(0,r.kt)("p",null,"Om data naar de Datastore te uploaden, moet je op de databron klikken en vervolgens het ",(0,r.kt)("strong",{parentName:"p"},"Datastore")," tabblad aanklikken."),(0,r.kt)("img",{class:"imageStyle",src:a(68760).Z,target:"_blank",alt:"imageStyle: DataStore'"}),(0,r.kt)("p",null,'Om te kijken of de bron inderdaad naar de Datastore kan worden geupload, kun je op de "Upload naar DataStore" knop klikken.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Kolomnamen"))),(0,r.kt)("p",{parentName:"blockquote"},"DataStore bepaalt automatisch de kolomnamen. Dit is altijd de eerste horizontale rij in een kolom. Het datatype (numeriek, tekst, tijd etc.) wordt bepaald door de eerste 250 records binnen een kolom. ")),(0,r.kt)("p",null,'Data wordt geupload per 250 records. Een upload van 250 records wordt een chunk genoemd. Dat betekent dat het een tijd kan duren voor grote bestanden met veel records zichtbaar zijn als preview. Het is belangrijk om niet nogmaals op de "Upload naar Datastore" knop te klikken tijdens het uploadproces. In plaats daarvan kun je de pagina verversen (F5) of op het tabblad klikken. '),(0,r.kt)("p",null,"Als de upload volledig gebeurd is, zul je ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Compleet"))," zien staan naast het ",(0,r.kt)("strong",{parentName:"p"},"Status")," veld."),(0,r.kt)("img",{class:"imageStyle",target:"_blank",alt:"imageStyle: DataStore'",src:a(32851).Z}),(0,r.kt)("h3",{id:"datastore-fouten"},"DataStore fouten"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"De DataStore zal een foutmelding geven als de preview of API niet kan worden gebruikt. Hier kunnen veel verschillende oorzaken voor zijn.")),(0,r.kt)("p",null,"Als de groene ",(0,r.kt)("strong",{parentName:"p"},"API")," knop ontbreekt, of als het aantal records binnen de preview niet overeenkomt met de orignele data, dan is de kans groot dat er een fout is opgetreden tijdens het uploaden naar de Datastore. Fouten kun je terugvinden door naar het DataStore tabblad te gaan."),(0,r.kt)("h4",{id:"veelvoorkomende-fouten"},"Veelvoorkomende fouten"),(0,r.kt)("table",{class:"versions"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Foutmelding"),(0,r.kt)("th",null,"Uitleg"),(0,r.kt)("th",null,"Hoe op te lossen?")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("strong",null,"Fout")),(0,r.kt)("td",null,(0,r.kt)("ul",null,(0,r.kt)("li",null,"Datastore upload is niet succesvol."),(0,r.kt)("li",null,"Geen verdere uitleg geeft aan dat in het begin de upload al fout is gegaan"))),(0,r.kt)("td",null,(0,r.kt)("ul",null,(0,r.kt)("li",null,"Bestandstypes die niet kunnen worden geupload geven deze standaardfout. Controleer het bestandstype dat je probeert te uploaden."),(0,r.kt)("li",null,"Is het een correct bestandstype (CSV of (geo)JSON) en krijg je toch deze foutmelding. Neem dan contact op met support@civity.nl")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("strong",null,"Error __context__: 'The data was invalid (for example: a numeric value is out of range or was inserted into a text field).")),(0,r.kt)("td",null,(0,r.kt)("ul",null,(0,r.kt)("li",null,"De eerste 250 records bestonden uit numerieke waarden."),(0,r.kt)("li",null,"Een record bestond uit twee verschillende datatypen (bijv. ",(0,r.kt)("i",null,"2412",(0,r.kt)("strong",null,"K")),"). Dit zorgt ervoor dat de DataStore stopt met uploaden."))),(0,r.kt)("td",null,(0,r.kt)("ul",null,(0,r.kt)("li",null,"Voeg een titel toe aan elke kolom en geef aan wat voor data er in voor komt (Datum, tijd, valuta etc.)"),(0,r.kt)("li",null,"Zorg ervoor dat alle velden binnen een kolom hetzelfde datatype bevatten."),(0,r.kt)("li",null,"Pas een numerieke kolom via de Data Dictionary aan naar een tekst kolom")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("strong",null,"Error: Cannot connect to datapusher"),(0,r.kt)("p",null,"Normaal gesproken wordt data automatisch naar de DataStore geupload."),(0,r.kt)("p",null,"Omdat er geen connectie mogelijk was, is deze automatische upload niet gebeurd. Dit veroorzaakt deze melding.")),(0,r.kt)("td",null,(0,r.kt)("ul",null,(0,r.kt)("li",null,"Handmatig opnieuw proberen de uploaden is in de meeste gevallen genoeg om dit probleem op te lossen. Mocht dit niet het probleem oplossen, neem dan contact op met support@civity.nl"),(0,r.kt)("li",null,"Een View ontbreekt in veel van deze gevallen ook. Ook dit zal handmatig moeten gebeuren.")))))),(0,r.kt)("p",null,"[1]"," Zie documentatie voor meer informatie over de Datastore: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ckan.org/en/latest/maintaining/datastore.html"},"https://docs.ckan.org/en/latest/maintaining/datastore.html"),"."),(0,r.kt)("p",null,"[2]"," Zie CKAN documentatie over de Datastore API: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ckan.org/en/latest/maintaining/datastore.html#the-datastore-api"},"https://docs.ckan.org/en/latest/maintaining/datastore.html#the-datastore-api")))}c.isMDXComponent=!0},68760:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dataplatform_DATASETS_AddingDatasoruces_datastore-5978e7c31ae79c97c9a76e5b5d3f46fc.png"},32851:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dataplatform_DATASETS_AddingDatasoruces_datastoreComplete-a6d04cd5228dffca56972878ef0c444b.png"}}]);