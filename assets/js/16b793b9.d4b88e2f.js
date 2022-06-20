"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5013],{3905:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},v={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,g=d(e,["components","mdxType","originalType","parentName"]),c=l(t),m=i,k=c["".concat(s,".").concat(m)]||c[m]||v[m]||r;return t?a.createElement(k,o(o({ref:n},g),{},{components:t})):a.createElement(k,o({ref:n},g))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=c;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},95281:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>s,default:()=>m,frontMatter:()=>d,metadata:()=>l,toc:()=>v});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=["components"],d={id:"kookboek_example_digitaltwin",title:"Voorbeeld toepassing - Digital Twin (3D)",sidebar_label:"Digital Twin (3D)"},s=void 0,l={unversionedId:"data-kookboek/kookboek_example_digitaltwin",id:"version-1.0.0/data-kookboek/kookboek_example_digitaltwin",title:"Voorbeeld toepassing - Digital Twin (3D)",description:"Een Digital Twin is een digitale representatie van een entiteit in de echt wereld",source:"@site/versioned_docs/version-1.0.0/data-kookboek/kookboek_example_digitaltwin.md",sourceDirName:"data-kookboek",slug:"/data-kookboek/kookboek_example_digitaltwin",permalink:"/docs/1.0.0/data-kookboek/kookboek_example_digitaltwin",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/versioned_docs/version-1.0.0/data-kookboek/kookboek_example_digitaltwin.md",tags:[],version:"1.0.0",lastUpdatedAt:1653657462,formattedLastUpdatedAt:"27-5-2022",frontMatter:{id:"kookboek_example_digitaltwin",title:"Voorbeeld toepassing - Digital Twin (3D)",sidebar_label:"Digital Twin (3D)"}},g={},v=[],c={toc:v};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Een Digital Twin is een digitale representatie van een entiteit in de echt wereld")),(0,r.kt)("p",null,"Met de toenemende mate waarin data beschikbaar is geworden, en dan vooral met het ook op de geografische data, is het al goed mogelijk om een zogenaamde Digital Twin van een stad of gebied te kunnen maken. Hierdoor kan men dus 'digitaal' door een stad wandelen (vaak in 3D) en verschillende databronnen combineren om een beeld te krijgen."),(0,r.kt)("p",null,"Hoewel veel van de data wel al beschikbaar is, is de realisatie van een Digital Twin vaak nog wel een uitdaging door het ontbreken van de juiste indexen, detailniveau, of omdat grote datasets gecombineerd moeten worden. Ook blijft de vraag hoe datasets het beste te visualizeren zijn, zonder het overzicht te verliezen."),(0,r.kt)("p",null,"=== work in progress ==="),(0,r.kt)("p",null,"Een City Information Model (CIM) is een intelligente virtuele vertegenwoordiging van een fysieke stedelijke omgeving die gedetailleerde informatie bevat over de entiteiten en de onderlinge relaties. Een CIM maakt gebruik van Geografische Informatie Systemen (GIS) ge\xefntegreerd met infrastructurele gegevens (Building Information Models) om met behulp van CAD-programma\u2019s (Computer Aided Design) stedelijke simulaties/visualisaties van verschillende aspecten mogelijk te maken (verkeer, energie, impact van natuurrampen, enz.).\nOmdat de meeste toepassingen voor 3D-stadsmodellen naast grafische kenmerken ook semantische informatie vereisen, zijn de GIS-, BIM- en CAD-gegevens in City Information Models vaak volgens thematische en logische criteria ge\xefntegreerd in een object-geori\xebnteerde structuur. Om zo\u2019n structuur of slechts een deel hiervan te kunnen realiseren is het team nagegaan welke data beschikbaar is. Uit de resultaten blijkt dat er een redelijke hoeveelheid aan Geografische data en gemeentelijke data over de stadsobjecten beschikbaar is, maar dat er niet voldoende gedetailleerde informatie over het uiterlijk van de entiteiten is vastgelegd om een gedegen visualisatie te kunnen cre\xebren.\nOm een CIM-applicatie van de wijk te ontwikkelen zijn er externe datasets van verschillende formaten gebruikt. Om de gegevens uit deze datasets in het model te verwerken zijn er een aantal conversiemethoden en outputformaten voor de datasets overwogen. Uit de overwegingen blijkt dat CityGML en overige 3D-visualisatieformaten een belangrijke bijdrage kunnen leveren aan de ontwikkeling van een object-geori\xebnteerd datamodel met een logische samenhang tussen semantische en grafische data. Echter zijn zij, evenals de conversiemethode FME, niet compatible met datasets die in het kader van dit project beschikbaar zijn.\nHoewel het gebruik van JSON als outputformaat en het gebruik parsers als conversiemethode meer dataverwerking van de applicatie vereist, zijn deze technieken flexibel genoeg om te kunnen functioneren in verschillende situaties en zijn zij compatible met diverse datasets en systemen.\nUit de bevindingen blijkt verder dat er niet voldoende kennis is om in dit project de koppeling van 3DCityDB aan de applicatie mogelijk te maken. Het is namelijk specifiek ontwikkeld om het CityGML-standaard te accommoderen en vereist enige kennis over de datastructuur. Het blijkt dat het in dit geval handiger was geweest om vanaf de beginfase de CIM-applicatie te ontwikkelen met 3DCityDB in gedachten. Desondanks biedt 3DCityDB, met de juiste kennis in huis, de mogelijkheid om een goed gestructureerd City Information Model te ontwikkelen dat gemakkelijk beheerd en uitgewisseld kan worden.\nTenslotte is het bij het inladen van real-time data m.b.t. de laadpunten in Kanaleneiland belangrijk om rekening te houden met de vereisten van het FIWARE-platform Orion Context broker. Hierbij is het van belang dat de data in de juiste structuur naar het platform wordt gestuurd en dat de CIM-applicatie in staat is om de updates vanuit Orion te ontvangen. Hiervoor is er uiteindelijk testdata, die conform de FIWARE-datamodellen van EVChargingStations en ParkingSpots is, naar Orion toegestuurd en werd er vanuit de applicatie naar updates geluisterd doormiddel van de websockets."),(0,r.kt)("p",null,"4.2 Aanbevelingen\nAan de hand van de bevindingen die per projectfase zijn beschreven zijn er een aantal aanbevelingen gedaan. Hieronder staat een overzicht van de aanbevelingen op zowel korte termijn (binnen een jaar), als op de lange termijn.\nKortetermijnaanbevelingen:\n\u2212 Implementeer een ontwerppatroon voor de applicatie, waarin de externe requests asynchroon verlopen. Bij het uitbreiden van de applicatie is het handig om gebruik te maken van een asynchroon en event-based programma om de user-experience op pijl te houden. Een goed voorbeeld hiervan is ReactiveX.\n\u2212 Ontwerp een postGIS-database voor de huidige gegevens in de applicatie, waarbij er sprake is van een \xe9\xe9n-op-veelrelatie tussen de locaties en objecten die daarbinnen vallen. Dit bespaart de bewerkingstijd van de applicatie. Een alternatief hiervoor is het migreren van de dataverwerking van client-side naar server-side.\n\u2212 Maak bij de implementatie van de werkelijke real-time databronnen eenduidige afspraken over de datastructuur waarin de gegevens naar Orion Context Broker worden gestuurd. Geef duidelijk aan welk onderdeel wordt beschouwd als object in het contextmodel en welk onderdeel als attribuut.\nLangetermijnaanbevelingen:\n\u2212 Investeer in de aankoop van een gedegen converter om beschikbare datasets te vertalen naar het CityGML-standaard. FME Desktop is hiervan een goed voorbeeld, maar houd er rekening mee dat niet alle datasets een visualisatie zullen opleveren.\n\u2212 Investeer tijd in het modelleren van een object-geori\xebnteerd City Information Model. Neem hierbij in acht voor welke toepassingen dit wordt ontworpen, wat de vereisten zijn van het CityGML-standaard en hoe de samenhang tussen de geografische en semantische data eruit gaat zien.\n\u2212 Zet op basis van het ontwerp een 3DcityDB-database op met Cesium als viewer. 3DCityDB beschikt over een plug-in om d.m.v. de open-source viewer meteen een visualisatie te genereren van de beschikbare data.\n\u2212 Neem bij het cre\xebren van nieuwe datasets over stadsobjecten ook het uiterlijk in acht. Defini\xeber onderling welke eigenschappen nodig zijn voor een gedetailleerde"))}m.isMDXComponent=!0}}]);