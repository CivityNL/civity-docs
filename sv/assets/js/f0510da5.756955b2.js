"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5347],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,g=d(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,u=m["".concat(o,".").concat(p)]||m[p]||k[p]||l;return n?a.createElement(u,i(i({ref:t},g),{},{components:n})):a.createElement(u,i({ref:t},g))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>k});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],d={id:"metamorphoses_data_bgt",title:"Meetbaar - Voorbeeld dataset - Basisregistratie Grootschalige Topografie (BGT)",sidebar_label:"Meetbaar - BGT"},o=void 0,s={unversionedId:"metamorphoses/metamorphoses_data_bgt",id:"version-1.0.0/metamorphoses/metamorphoses_data_bgt",title:"Meetbaar - Voorbeeld dataset - Basisregistratie Grootschalige Topografie (BGT)",description:"Dit is een praktisch voorbeeld waarbij alle stappen van deze nieuwe manier van werken worden bezocht. Alle eerder genoemde onderwerpen zullen in meer of mindere mate aan bod komen met de nadruk op 'wateroverlast'",source:"@site/versioned_docs/version-1.0.0/metamorphoses/metamorphoses_data_bgt.md",sourceDirName:"metamorphoses",slug:"/metamorphoses/metamorphoses_data_bgt",permalink:"/sv/docs/1.0.0/metamorphoses/metamorphoses_data_bgt",draft:!1,tags:[],version:"1.0.0",frontMatter:{id:"metamorphoses_data_bgt",title:"Meetbaar - Voorbeeld dataset - Basisregistratie Grootschalige Topografie (BGT)",sidebar_label:"Meetbaar - BGT"}},g={},k=[{value:"De verschillende lagen",id:"de-verschillende-lagen",level:2},{value:"Transport",id:"transport",level:3},{value:"Terrein",id:"terrein",level:3},{value:"Water",id:"water",level:3},{value:"Bouwwerk",id:"bouwwerk",level:3},{value:"Kunstwerk",id:"kunstwerk",level:4},{value:"Vissershaven volgens de BGT",id:"vissershaven-volgens-de-bgt",level:2},{value:"Van vlakken naar informatie",id:"van-vlakken-naar-informatie",level:2}],m={toc:k};function p(e){var t=e.components,d=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,d,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Dit is een praktisch voorbeeld waarbij alle stappen van deze nieuwe manier van werken worden bezocht. Alle eerder genoemde onderwerpen zullen in meer of mindere mate aan bod komen met de nadruk op 'wateroverlast'")),(0,l.kt)("p",null,"Een voorbeeld voor geodata is de Basisregistratie Grootschalige Topografie (BGT), een digital kaart van Nederland waarop gebouwen, wegen, waterlopen, terreinen en spoorlijnen eenduidig zijn vastgelegd. De kaart is op 20 centimeter nauwkeurig en bevat veel details, waaronder historie. Dit betekent wel dat deze dataset veel informatie bevat en dus groot is (een extract voor het gebied van de gemeente Den Haag is al ruim 4 GB)."),(0,l.kt)("h2",{id:"de-verschillende-lagen"},"De verschillende lagen"),(0,l.kt)("p",null,"Gelukkig is de BGT in lagen verdeeld en hoeft dus niet de hele dataset ingeladen te worden voor een specifiek onderwerp. Hoewel afhankelijk van het doel wel meerdere lagen noodzakelijk zijn om tot het gewenste resultaat te komen. Hieronder is een schematische weergaven van de verschillende types objecten die zich in de BGT bevinden (",(0,l.kt)("a",{parentName:"p",href:"https://www.geonovum.nl/uploads/standards/downloads/BGTGegevenscatalogus111.pdf"},"bron"),"). "),(0,l.kt)("img",{class:"imageStyle shadowing",target:"_blank",alt:"imageStyle: BGT-objecten'",src:n(27959).Z}),(0,l.kt)("p",null,"Dit overzicht bevat alleen de objecten die als vlak weergegeven worden. Daarnaast bevat de BGT ook nog punten, zoals putten, masten en vegetatieobjecten. Om een iets beter idee te geven van de verschillende lagen, zijn de belangrijkste hieronder kort toegelicht aangevuld met de definities zoals die in de BGT gegevenscatalogus zijn beschreven (",(0,l.kt)("a",{parentName:"p",href:"https://www.geonovum.nl/uploads/standards/downloads/BGTGegevenscatalogus111.pdf"},"bron"),"). Met name de 'ondersteunende' lagen zijn soms moeilijk te interpreteren, vaak omdat die grensgebieden beslaan die niet altijd even duidelijk zijn te definieren."),(0,l.kt)("h3",{id:"transport"},"Transport"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Naam"),(0,l.kt)("th",{parentName:"tr",align:null},"Definitie"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Wegdeel"),(0,l.kt)("td",{parentName:"tr",align:null},"Kleinste functioneel onafhankelijk stukje van een NEN 3610 Weg met gelijkblijvende, homogene eigenschappen en relaties en primair bedoeld voor gebruik door weg-, spoor- en vliegverkeer te land.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OndersteunendWegdeel"),(0,l.kt)("td",{parentName:"tr",align:null},"Een deel van de weg dat niet primair bedoeld is voor gebruik door het verkeer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Spoor"),(0,l.kt)("td",{parentName:"tr",align:null},"De as van het spoor, dat wil zeggen het midden van twee stalen staven op een onderling vaste afstand, waarover trein, tram, of sneltram rijdt.")))),(0,l.kt)("h3",{id:"terrein"},"Terrein"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Naam"),(0,l.kt)("th",{parentName:"tr",align:null},"Definitie"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OnbegroeidTerreindeel"),(0,l.kt)("td",{parentName:"tr",align:null},"Kleinste functioneel onafhankelijk stukje van een terrein, dat er binnen het objecttype Terrein van NEN 3610 wordt onderscheiden, zonder aaneengesloten vegetatie.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BegroeidTerreindeel"),(0,l.kt)("td",{parentName:"tr",align:null},"Kleinste functioneel onafhankelijk stukje van een terrein dat er binnen het objecttype Terrein van NEN 3610 wordt onderscheiden, met aaneengesloten vegetatie.")))),(0,l.kt)("h3",{id:"water"},"Water"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Naam"),(0,l.kt)("th",{parentName:"tr",align:null},"Definitie"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Waterdeel"),(0,l.kt)("td",{parentName:"tr",align:null},"Water van NEN 3610 wordt onderscheiden en dat permanent met water bedekt is.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OndersteunendWaterdeel"),(0,l.kt)("td",{parentName:"tr",align:null},"Object dat in het kader van de waterhuishouding periodiek gedeeltelijk of geheel met water is bedekt.")))),(0,l.kt)("h3",{id:"bouwwerk"},"Bouwwerk"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Naam"),(0,l.kt)("th",{parentName:"tr",align:null},"Definitie"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pand"),(0,l.kt)("td",{parentName:"tr",align:null},"Een PAND is de kleinste bij de totstandkoming functioneel en bouwkundig-constructief zelfstandige eenheid die direct en duurzaam met de aarde is verbonden en betreedbaar en afsluitbaar is.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OverigBouwwerk"),(0,l.kt)("td",{parentName:"tr",align:null},"Met de aarde verbonden duurzaam bouwwerk, dat niet valt onder de definities van een pand of kunstwerk.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Scheiding"),(0,l.kt)("td",{parentName:"tr",align:null},"Kunstmatig, meestal lineair obstakel met een werende functie.")))),(0,l.kt)("h4",{id:"kunstwerk"},"Kunstwerk"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Naam"),(0,l.kt)("th",{parentName:"tr",align:null},"Definitie"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Overbruggingsdeel"),(0,l.kt)("td",{parentName:"tr",align:null},"Onderdeel van een beweegbare of vaste verbinding tussen twee punten, die door water, een weg of anderszins gescheiden zijn, dat essentieel is voor de constructie.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tunneldeel"),(0,l.kt)("td",{parentName:"tr",align:null},"Onderdeel van een kunstmatig aangelegde, kokervormige onderdoorgang dat essentieel is voor de constructie.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kunstwerkdeel"),(0,l.kt)("td",{parentName:"tr",align:null},"Onderdeel van een civiel-technisch werk voor de infrastructuur van wegen, water, spoorbanen, waterkeringen en/of leidingen.")))),(0,l.kt)("h2",{id:"vissershaven-volgens-de-bgt"},"Vissershaven volgens de BGT"),(0,l.kt)("p",null,"Om een idee te geven van de BGT zal in dit deel gekeken worden naar de Vissershaven (",(0,l.kt)("a",{parentName:"p",href:"https://www.google.com/maps/@52.0989073,4.2628015,15.5z"},"Google Maps"),") in de gemeente Den Haag vanuit het oogpunt van de BGT. "),(0,l.kt)("p",null,"Hieronder is een kaartje gemaakt met ",(0,l.kt)("a",{parentName:"p",href:"https://qgis.org/nl/site/"},"QGIS")," (een vrij en open source geografisch informatiesysteem) waarop alle lagen zoals die in het objectenoverzicht staan. Op de hoek linksboven na, is er verder geen wit te zien wat betekent dat de BGT de gehele ruimte heeft toegekend aan een object. De hoek linksboven is het gebied van de Noordzee dat buiten de landsgrens valt."),(0,l.kt)("img",{class:"imageStyle shadowing",target:"_blank",alt:"imageStyle: Vissershaven'",src:n(39312).Z}),(0,l.kt)("h2",{id:"van-vlakken-naar-informatie"},"Van vlakken naar informatie"),(0,l.kt)("p",null,"Het kaartje van de Vissershaven is leuk en aardig, maar er valt nog geen informatie uit te halen. Dit gebied bevat veel water, dus laten we daar wat mee doen. Door de laag ",(0,l.kt)("inlineCode",{parentName:"p"},"Pand")," en ",(0,l.kt)("inlineCode",{parentName:"p"},"Waterdeel")," te combineren kunnen we de afstand bepalen van elk gebouw naar het dichtsbijzijnde water. Voor we naar het resultaat gaan kijken is het goed om even te restricties te bespreken:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Om de berekeningen snel te laten verlopen is er een extract gemaakt van de BGT met de grenzen zoals die hierboven zijn weergegeven. Dit betekent dus dat waterobjecten die daar net buiten vallen niet zijn meegenomen in de bepaling. De waardes aan de randen zullen dus niet representatief zijn."),(0,l.kt)("li",{parentName:"ul"},"De definitie van een ",(0,l.kt)("inlineCode",{parentName:"li"},"Waterdeel")," is best breed, wat dus betekent dat dit soort objecten flink kunnen varieren. Zo zijn er 28 objecten in deze laag met oppervlaktes van 22 m2 tot 2.2 km2.")),(0,l.kt)("img",{class:"imageStyle shadowing",target:"_blank",alt:"imageStyle: Vissershaven'",src:n(235).Z}),(0,l.kt)("p",null,"Op deze manier is er een beeld verkregen van de afstand van pand naar water. De gemiddelde afstand blijkt 350 meter te zijn."),(0,l.kt)("p",null,"Hetzelfde kan ook gedaan worden met de laag ",(0,l.kt)("inlineCode",{parentName:"p"},"BegroeidTerreindeel"),", waardoor er een overzicht ontstaat van de afstand tussen grijs en groen. Dit overzicht is in het kaartje hieronder weergegeven. Dezelfde opmerkingen gelden wederom (4400 objecten, kleinste object is 60 cm2 en het grootsts object ruim 70000 m2):"),(0,l.kt)("img",{class:"imageStyle shadowing",target:"_blank",alt:"imageStyle: Vissershaven'",src:n(22337).Z}),(0,l.kt)("p",null,"Dit beeld is een stuk gevarieerder door het grotere aantal objecten, waardoor de gemiddelde afstand ook een stuk korter is: 25 m."),(0,l.kt)("p",null,"Aan de hand van deze twee berekeningen kan simpel een composiet gemaakt worden. Stel dat er een beleidsplan ligt dat elke burger in staat wilt stellen om makkelijk toegang te krijgen tot 'natuur', in dit geval groen of blauw, dan kan door de combinatie van de bovenstaande berekeningen een overzicht gemaakt worden van welke gebieden in de Vissershaven de meeste aandacht vragen."),(0,l.kt)("p",null,"In dit geval is besloten om panden te klassificeren gebaseerd op de afstand in vergelijking met de gemiddelde afstand:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Kleur"),(0,l.kt)("th",{parentName:"tr",align:null},"Klasse"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Lightblauw"),(0,l.kt)("td",{parentName:"tr",align:null},"Zowel de afstand naar water en groen is kleiner of gelijk aan de gemiddelde afstand")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Donkerblauw"),(0,l.kt)("td",{parentName:"tr",align:null},"Alleen afstand naar water is kleiner of gelijk aan de gemiddelde afstand")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Lightgroen"),(0,l.kt)("td",{parentName:"tr",align:null},"Alleen afstand naar groen is kleiner of gelijk aan de gemiddelde afstand")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Zwart"),(0,l.kt)("td",{parentName:"tr",align:null},"Geen van de standen is kleiner of gelijk aan de gemiddelde afstand")))),(0,l.kt)("p",null,"Het resultaat is hieronder te zien."),(0,l.kt)("img",{class:"imageStyle shadowing",target:"_blank",alt:"imageStyle: Vissershaven'",src:n(65122).Z}),(0,l.kt)("p",null,"Hoewel door de eerder genoemde beperkingen het lastig is om echt uitspraken te doen, blijkt wel dat de gebieden Oud Scheveningen en Statenkwartier aandacht kunnen gebruiken."))}p.isMDXComponent=!0},27959:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bgt-de08f26911a36338b27bc38dd332d106.PNG"},39312:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bgt_denhaag_with_legend-ba58ce821cb0ae9752b0b9a3fa7d9c7d.png"},22337:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bgt_vissershaven_afstand_plant_with_legend-2e9b413040eda68a5e9ee0d26920c901.png"},235:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bgt_vissershaven_afstand_with_legend-db656fdc5d7b75a00f7111e7c39315fa.png"},65122:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bgt_vissershaven_class-d2fe1c5cb65885264ce696a781027fc7.png"}}]);