"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7529],{3905:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>v});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,g=d(e,["components","mdxType","originalType","parentName"]),p=s(t),v=r,c=p["".concat(l,".").concat(v)]||p[v]||u[v]||o;return t?a.createElement(c,i(i({ref:n},g),{},{components:t})):a.createElement(c,i({ref:n},g))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},75782:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>l,default:()=>v,frontMatter:()=>d,metadata:()=>s,toc:()=>u});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],d={id:"toevoegen",title:"Wat zijn Vermeldingen?",sidebar_label:"Wat zijn vermeldingen?"},l=void 0,s={unversionedId:"toevoegen",id:"version-1.0.1/toevoegen",title:"Wat zijn Vermeldingen?",description:"Zoals eerder vermeld, is Datacatalogus gebouwd in CKAN. Hiermee kan data worden georganiseerd, gepubliceerd en gezocht of gevonden.",source:"@site/datacatalogus_versioned_docs/version-1.0.1/datacatalogus_vermeldingen.md",sourceDirName:".",slug:"/toevoegen",permalink:"/sv/datacatalogus/toevoegen",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/datacatalogus_versioned_docs/version-1.0.1/datacatalogus_vermeldingen.md",tags:[],version:"1.0.1",lastUpdatedAt:1653657462,formattedLastUpdatedAt:"2022-05-27",frontMatter:{id:"toevoegen",title:"Wat zijn Vermeldingen?",sidebar_label:"Wat zijn vermeldingen?"},sidebar:"datacatalogus",previous:{title:"Doel",permalink:"/sv/datacatalogus/doel"},next:{title:"Harvesten van databronnen",permalink:"/sv/datacatalogus/toevoegen_harvest"}},g={},u=[{value:"Vermeldingstypes",id:"vermeldingstypes",level:2}],p={toc:u};function v(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Zoals eerder vermeld, is Datacatalogus gebouwd in CKAN. Hiermee kan data worden georganiseerd, gepubliceerd en gezocht of gevonden."),(0,o.kt)("p",null,"Data binnen de Datacatalogus bestaat uit vermeldingen. Vermeldingen kunnen het originele dataproduct bevatten, maar een vermelding kan ook slechts een verwijzing zijn naar het originele dataproduct. Een belangrijk onderdeel van een vermelding is de metadata. Hiermee wordt het dataproduct beschreven en kan deze makkelijker vindbaar worden gemaakt."),(0,o.kt)("h2",{id:"vermeldingstypes"},"Vermeldingstypes"),(0,o.kt)("p",null,"Afhankelijk van de configuratie is er sprake van verschillende vermeldingstypes. Deze vermeldingstypes kunnen via de metadata worden aangegeven. De standaardconfiguratie is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Databron - Een CKAN dataset is een verzameling van data bronnen (zoals bestanden), samen met een beschrijving en andere informatie, op een vaste URL."),(0,o.kt)("li",{parentName:"ul"},"Dataset - Datasets is datgene dat gebruikers zien wanneer ze zoeken voor data."),(0,o.kt)("li",{parentName:"ul"},"Dashboard - Dashboards zijn een visuele weergave van bedrijfsdata, vaak in de vorm van grafieken, kaarten en diagrammen."),(0,o.kt)("li",{parentName:"ul"},"BI Rapportage - BI staat voor Business Intelligence. Een BI rapportage is een visuele rapportage die data uit verschillende bronnen combineert en integreert."),(0,o.kt)("li",{parentName:"ul"},"Bronbestand - Een bronbestand is het bestand dat de gegevens bevat waar door een gekoppeld bestand naar wordt verwezen."),(0,o.kt)("li",{parentName:"ul"},"Voorspelmodel - Een voorspelmodel gebruikt data cq. statistieken om mogelijke uitkomsten in de toekomst te voorspellen."),(0,o.kt)("li",{parentName:"ul"},"Onderzoeksrapport - Een onderzoeksrapport is een document waarin het onderzoeksvraag, de onderzoeksmethode, de onderzoeksgegevens en de onderzoeksconclusies eenduidig in zijn vastgelegd."),(0,o.kt)("li",{parentName:"ul"},"Geo Dataset - Geo Datasets zijn datasets met een ruimtelijke component (locatie).")),(0,o.kt)("p",null,"Een nieuwe vermelding toevoegen kan door in het hoofdmenu op VERMELDINGEN te klikken en vervolgens via de blauwe knop Vermelding toevoegen de gewenste vermelding te kiezen. "),(0,o.kt)("p",null,"Vervolgens kom je terecht bij de eerste stap Cre\xeber vermelding. Hier moet de metadata van de vermelding worden ingevuld."),(0,o.kt)("p",null,"Stap 2 is het toevoegen van databronnen. De databronnen hoeven niet het dataproduct zelf te zijn maar kunnen ook documenten zijn die de metadata ondersteunen. Een databron kan een bestand zijn, maar dit hoeft niet. Zo kan ook een verwijzing naar een externe link worden gebruikt. Wanneer je een vermelding aanklikt zijn de databronnen te vinden onder het kopje Bijlagen."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Bestandsgrootte is gelimiteerd tot maximaal 500 mb per upload.")))}v.isMDXComponent=!0}}]);