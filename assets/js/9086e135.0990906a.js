"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6752],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),g=s(n),p=r,m=g["".concat(d,".").concat(p)]||g[p]||u[p]||o;return n?a.createElement(m,l(l({ref:t},k),{},{components:n})):a.createElement(m,l({ref:t},k))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},63696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={id:"datasets_AddingDatasources",title:"Databronnen toevoegen",sidebar_label:"Databronnen toevoegen"},d=void 0,s={unversionedId:"datasets_AddingDatasources",id:"version-4.1.0/datasets_AddingDatasources",title:"Databronnen toevoegen",description:"Alle bronnen worden opgeslagen in een dataset.",source:"@site/i18n/nl/docusaurus-plugin-content-docs-dataplatform/version-4.1.0/dataplatform_DATASETS_AddingDatasources.md",sourceDirName:".",slug:"/datasets_AddingDatasources",permalink:"/dataplatform/datasets_AddingDatasources",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/dataplatform_versioned_docs/version-4.1.0/dataplatform_DATASETS_AddingDatasources.md",tags:[],version:"4.1.0",lastUpdatedAt:1655216981,formattedLastUpdatedAt:"14-6-2022",frontMatter:{id:"datasets_AddingDatasources",title:"Databronnen toevoegen",sidebar_label:"Databronnen toevoegen"},sidebar:"dataplatform",previous:{title:"Datasets toevoegen",permalink:"/dataplatform/datasets_AddingDatasets"},next:{title:"Databron preview bekijken",permalink:"/dataplatform/datasets_PreviewDatasources"}},k={},u=[{value:"Handmatig uploaden",id:"handmatig-uploaden",level:2},{value:"Aanvullende details",id:"aanvullende-details",level:3},{value:"Link naar bron",id:"link-naar-bron",level:2},{value:"Bron als link",id:"bron-als-link",level:3},{value:"Real-time data",id:"real-time-data",level:2},{value:"DataStore",id:"datastore",level:2},{value:"CKAN DataStore",id:"ckan-datastore",level:3},{value:"DataStore beheren",id:"datastore-beheren",level:3},{value:"DataStore Foutafhandeling",id:"datastore-foutafhandeling",level:3},{value:"Veelvoorkomende fouten",id:"veelvoorkomende-fouten",level:4}],g={toc:u};function p(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Alle bronnen worden opgeslagen in een dataset.")),(0,o.kt)("p",null,"Bronnen kunnen alleen aan datasets worden toegevoegd nadat de dataset is toegevoegd en geconfigureerd. "),(0,o.kt)("h2",{id:"handmatig-uploaden"},"Handmatig uploaden"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"CSV"),"- en ",(0,o.kt)("strong",{parentName:"p"},"(geo)JSON"),"-bestandstypen zijn toegankelijk via de DataStore API. Andere gegevenstypen worden opgeslagen en verstrekt als downloadlink.")),(0,o.kt)("p",null,"Een bron kan een soort bestand zijn dat machinaal leesbaar is; dit omvat, maar is niet beperkt tot: ",(0,o.kt)("strong",{parentName:"p"},"CSV"),"-, ",(0,o.kt)("strong",{parentName:"p"},"JSON"),"-, ",(0,o.kt)("strong",{parentName:"p"},"PDF"),"- en  ",(0,o.kt)("strong",{parentName:"p"},"JPG"),"-bestandstypen. Daarnaast kunnen bronnen ook een link zijn. "),(0,o.kt)("p",null,"Zie ",(0,o.kt)("a",{href:"#link-to-source"},"Link naar bron")," voor meer informatie over databronnen "),(0,o.kt)("h3",{id:"aanvullende-details"},"Aanvullende details"),(0,o.kt)("p",null,"Met dit veld kunt u elke vorm van aanvullende informatie toevoegen."),(0,o.kt)("p",null,"Typische aanvullende informatie omvat: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Naam: ",(0,o.kt)("em",{parentName:"li"},"Dit zal de bestandsnaam zijn, zorg ervoor dat deze beschrijvend is")),(0,o.kt)("li",{parentName:"ul"},"Beschrijving: ",(0,o.kt)("em",{parentName:"li"},"Geef uitleg over de inhoud van het bestand")),(0,o.kt)("li",{parentName:"ul"},"Formaat: ",(0,o.kt)("em",{parentName:"li"},"Het formaat waarin de bron wordt geleverd (CSV, XLS, JSON, PDF, enz.)."))),(0,o.kt)("p",null,"Als u extra bronnen wilt toevoegen, kiest u 'Opslaan en nog een toevoegen'. Als je er maar \xe9\xe9n hebt, kies je 'Einde'. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"CKAN slaat nu het bestand op en maakt een dataset. Het resulterende item is binnen 30 minuten zichtbaar. Als de zichtbaarheid is ingesteld op ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Openbaar")),", wordt de dataset zichtbaar op ",(0,o.kt)("a",{href:"https://www.dataplatform.nl",target:"_blank",rel:"noreferrer noopener"},"DataPlatform"),". ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Private"))," datasets zijn niet zichtbaar op DataPlatform. ")),(0,o.kt)("h2",{id:"link-naar-bron"},"Link naar bron"),(0,o.kt)("p",null,"Alle bronnen worden opgeslagen in datasets. Alleen wanneer een gegevensset is ingesteld, mag een bron worden toegevoegd."),(0,o.kt)("h3",{id:"bron-als-link"},"Bron als link"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Linked data is niet beschikbaar als aanroepbare API")),(0,o.kt)("p",null,"Wanneer gegevens op een andere locatie worden opgeslagen, kunt u deze toevoegen als gekoppelde bron. Elke soort link kan worden gebruikt: ",(0,o.kt)("em",{parentName:"p"},"URL"),", ",(0,o.kt)("em",{parentName:"p"},"URI"),", of een ",(0,o.kt)("em",{parentName:"p"},"API"),"."),(0,o.kt)("h2",{id:"real-time-data"},"Real-time data"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Real-time data kunnen als bron worden toegevoegd, maar de installatie en configuratie moeten door Civity worden afgehandeld.  ")),(0,o.kt)("p",null,"Er moet een verbinding worden geconfigureerd tussen de API en Dataplatform. Fiware-componenten worden gebruikt om velden van de API te configureren, die vervolgens worden vertaald in nuttige open data."),(0,o.kt)("h2",{id:"datastore"},"DataStore"),(0,o.kt)("p",null,"De datastore maakt het mogelijk om specifieke gegevens te bekijken en toegankelijk via API-aanroepen, waar mogelijk. Gegevens die niet in de datastore zijn geplaatst, zijn nog steeds toegankelijk, maar alleen door download."),(0,o.kt)("h3",{id:"ckan-datastore"},"CKAN DataStore"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Als uw gegevens worden opgeslagen als ",(0,o.kt)("strong",{parentName:"p"},"CSV"),"- of ",(0,o.kt)("strong",{parentName:"p"},"(geo)JSON-bestandstype"),", stelt CKAN ze automatisch beschikbaar in de Datastore ")),(0,o.kt)("p",null,"CKAN Datastore is beschikbaar voor het bekijken en verwerken van gegevensbronnen; U kunt deze informatie weergeven in een tabel- of kaartweergave. "),(0,o.kt)("h3",{id:"datastore-beheren"},"DataStore beheren"),(0,o.kt)("p",null,"Als u informatie in Datastore wilt bekijken of beheren, navigeert u naar de gewenste gegevensbron en selecteert u het tabblad ",(0,o.kt)("strong",{parentName:"p"},"Datastore"),". "),(0,o.kt)("img",{class:"imageStyle",target:"_blank",alt:"imageStyle: DataStore",src:n(8333).Z}),(0,o.kt)("p",null,'Om te controleren of een bron kan worden toegevoegd, klikt u op de knop "Uploaden naar DataStore".'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Headers"))),(0,o.kt)("p",{parentName:"blockquote"},"DataStore bepaalt automatisch of headers mogen worden geconstrueerd; een koptekst(en) is de eerste horizontale vermelding in een kolom. Het gegevenstype (numeriek, tekst, tijdstempel, enz.) wordt bepaald door de eerste 250 vermeldingen.")),(0,o.kt)("p",null,'Tabelgegevens worden ge\xfcpload in brokken van 250 gehelen tegelijk. Dit betekent dat grote bestanden, met veel vermeldingen, enige tijd kunnen duren voordat ze als voorbeeld worden weergegeven. Als u wacht tot de gegevens als voorbeeld worden weergegeven, klikt u niet opnieuw op "Uploaden naar DataStore". Vernieuw in plaats daarvan de pagina of het tabblad. '),(0,o.kt)("p",null,"Wanneer uw upload is voltooid, ziet u ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Voltooid"))," naast het veld ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Statistieken")),". "),(0,o.kt)("img",{class:"imageStyle",target:"_blank",alt:"imageStyle: DataStore",src:n(76355).Z}),(0,o.kt)("h3",{id:"datastore-foutafhandeling"},"DataStore Foutafhandeling"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"DataStore zal een fout veroorzaken wanneer de preview of API-creatie niet correct wordt afgehandeld; de gegevens zelf kunnen nog steeds correct zijn.")),(0,o.kt)("p",null,"Als de groene ",(0,o.kt)("strong",{parentName:"p"},"API-knop")," ontbreekt of als het aantal vermeldingen niet overeenkomt met de oorspronkelijke gegevensbron, is er waarschijnlijk een fout opgetreden bij het dupliceren van de gegevensverwerking. Als u de foutconditie wilt controleren, navigeert u vanuit de gegevensbron naar het tabblad DataStore. "),(0,o.kt)("h4",{id:"veelvoorkomende-fouten"},"Veelvoorkomende fouten"),(0,o.kt)("table",{class:"versions"},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Bericht"),(0,o.kt)("th",null,"Uitleg"),(0,o.kt)("th",null,"Probleemoplossing")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("strong",null,"Fout __context__: 'De gegevens waren ongeldig (bijvoorbeeld: een numerieke waarde is buiten bereik of is ingevoegd in een tekstveld).")),(0,o.kt)("td",null,(0,o.kt)("ul",null,(0,o.kt)("li",null,"Alleen nummers zijn verschenen in de eerste 250 rijen. "),(0,o.kt)("li",null," Een veld bevat twee verschillende soorten gegevens (bijv. ",(0,o.kt)("i",null,"2412",(0,o.kt)("strong",null,"K")),"). Dit zorgt ervoor dat DataStore stopt met indexeren bij de desbetreffende rij."))),(0,o.kt)("td",null,(0,o.kt)("ul",null,(0,o.kt)("li",null,"Voeg een titel toe aan elke kolom en geef aan wat voor soort gegevens de kolom bevat (bijv. Datum, tijd, valuta, enz.)"),(0,o.kt)("li",null,"Zoek het verkeerde veld en pas het aan zodat het slechts \xe9\xe9n type gegevens bevat"),(0,o.kt)("li",null,"Uw numerieke koptekst in Data Dictionary corrigeren naar gewone tekst")))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("strong",null,"Fout: Kan geen verbinding maken met datapusher"),(0,o.kt)("p",null,"Normaal gesproken pusht de datapusher automatisch gegevens naar de datastore bij het maken van een gegevensbron."),(0,o.kt)("p",null,"Deze fout heeft tot gevolg dat een gegevensbron niet correct wordt ge\xfcpload naar de datastore, omdat de datapusher geen verbinding kon maken")),(0,o.kt)("td",null,(0,o.kt)("ul",null,(0,o.kt)("li",null,"Omdat deze fout meestal optreedt bij het maken van een gegevensbron, is de beste optie om opnieuw te proberen te uploaden naar de datastore. Dit zal het probleem bijna altijd oplossen. Als dit niet het geval is, neemt u contact op met Civity."),(0,o.kt)("li",null,"Doordat er geen verbinding kan worden gemaakt met de datapusher, wordt er vaak ook geen weergave gemaakt. Dit kan handmatig worden gedaan.")))))))}p.isMDXComponent=!0},8333:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dataplatform_DATASETS_AddingDatasoruces_datastore-5978e7c31ae79c97c9a76e5b5d3f46fc.png"},76355:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dataplatform_DATASETS_AddingDatasoruces_datastoreComplete-a6d04cd5228dffca56972878ef0c444b.png"}}]);