"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1156],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,v=m["".concat(d,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(v,l(l({ref:t},s),{},{components:a})):n.createElement(v,l({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},76124:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={id:"verplichte_metadatavelden",title:"Verplichte metadatavelden",sidebar_label:"Verplichte metadatavelden"},d=void 0,p={unversionedId:"verplichte_metadatavelden",id:"version-1.0.0/verplichte_metadatavelden",title:"Verplichte metadatavelden",description:"Binnenkort zal een nieuw metadataschema worden toegevoegd aan Datacatalogus. Dit schema zal gebaseerd zijn op DCAT-AP-DONL-1.1, DCAT-SE en ISO 19115.",source:"@site/datacatalogus_versioned_docs/version-1.0.0/datacatalogus_metadata.md",sourceDirName:".",slug:"/verplichte_metadatavelden",permalink:"/datacatalogus/1.0.0/verplichte_metadatavelden",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/datacatalogus_versioned_docs/version-1.0.0/datacatalogus_metadata.md",tags:[],version:"1.0.0",lastUpdatedBy:"isabeladowsley",lastUpdatedAt:1653657462,formattedLastUpdatedAt:"27-5-2022",frontMatter:{id:"verplichte_metadatavelden",title:"Verplichte metadatavelden",sidebar_label:"Verplichte metadatavelden"},sidebar:"datacatalogus",previous:{title:"Notificaties",permalink:"/datacatalogus/1.0.0/notificaties"},next:{title:"Thema's als CKAN Groepen",permalink:"/datacatalogus/1.0.0/ckan_groepen"}},s={},c=[{value:"Verplichte metadatavelden",id:"verplichte-metadatavelden",level:2},{value:"Titel",id:"titel",level:3},{value:"Beschrijving",id:"beschrijving",level:3},{value:"Dienst",id:"dienst",level:3},{value:"Trefwoorden/Tags",id:"trefwoordentags",level:3}],m={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Binnenkort zal een nieuw metadataschema worden toegevoegd aan Datacatalogus. Dit schema zal gebaseerd zijn op DCAT-AP-DONL-1.1, DCAT-SE en ISO 19115.")),(0,i.kt)("p",null,"De basis voor een goede vindbaarheid is een correcte beschrijving van de data. Hierbij speelt metadata een belangrijke rol. Datacatalogus heeft de DCAT-standaard voor metadata ge\xefmplementeerd. Deze standaard wordt gebruikt door bijvoorbeeld het landelijke register data.overheid.nl en de EU-portal."),(0,i.kt)("p",null,"Binnen Datacatalogus is er daarnaast de mogelijkheid tot het inrichten van flexibele metadataschema\u2019s voor verschillende vermeldingstypen. Naast de metadatavelden die voldoen aan de DCAT-NL standaard, bevat zo\u2019n vermelding binnen de Datacatalogus een aantal extra (optionele) metadatavelden. Deze flexibele schema\u2019s zijn bedoeld voor vermeldingen die meer of andere informatie bevatten dan de \u2018standaard\u2019 datasets/bronnen. Zo vraagt een geodataset of een WMO-dashboard vaak om meer of andere metadata. Deze metadataschema\u2019s zijn beschikbaar voor dit soort specifieke informatieproducten."),(0,i.kt)("p",null,"De metadata van een vermelding is te vinden onder het kopje Extra Informatie wanneer je een vermelding aanklikt. "),(0,i.kt)("h2",{id:"verplichte-metadatavelden"},"Verplichte metadatavelden"),(0,i.kt)("p",null,"Voor dataset/databron vermeldingen is een aantal verplichte velden. Deze verplichte velden worden in deze paragraaf beschreven."),(0,i.kt)("h3",{id:"titel"},"Titel"),(0,i.kt)("p",null,"Beschrijving van het dataproduct in steekwoorden"),(0,i.kt)("h3",{id:"beschrijving"},"Beschrijving"),(0,i.kt)("p",null,"Uitgebreide beschrijving van het dataproduct"),(0,i.kt)("p",null,"Titel en beschrijving zijn terug te vinden als je op de vermelding klikt."),(0,i.kt)("h3",{id:"dienst"},"Dienst"),(0,i.kt)("p",null,"Elke vermelding moet onder een Dienst vallen. Via een keuzemenu kan de Dienst worden bepaald. "),(0,i.kt)("h3",{id:"trefwoordentags"},"Trefwoorden/Tags"),(0,i.kt)("p",null,"Omschrijving van dataproduct in trefwoorden. Deze zijn vooral van toepassing bij het zoeken en/of filteren van vermeldingen."),(0,i.kt)("p",null,"Daarnaast zijn er verplichte metadatavelden die terug te vinden zijn onder Extra Informatie wanneer je een vermelding aanklikt. Ook worden sommige velden gebruikt om op te filteren."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Bron    -   Vrij om in te vullen. Bronnen waaruit gegevens van het dataproduct komen.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Doel    -   Vrij om in te vullen. Wat is het doel van het dataproduct?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Thema   -   Keuze uit 1 van de 19 thema\u2019s")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Bestandstype    -   Keuze uit vooraf door de gemeente bepaalde lijst.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Bijgewerkt  -   Datum waarop het dataproduct voor het laatst is bijgewerkt.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Aangemaakt  -   Datum van aanmaken vermelding/dataproduct")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Updatefrequentie    -   Keuze uit vooraf vastgestelde opties, te bepalen door de gemeente.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Eigenaar    -   Eigenaar van het dataproduct")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Contactpersoon  -   Naam van contactpersoon van de vermelding")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"E-mail contactpersoon   -   Gegevens om contact op te kunnen nemen.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Verstrekker -   Naam van verantwoordelijke voor publicatie van de vermelding/dataproduct")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Bronhoudende organisatie    -   Keuze uit een vaste lijst van bronhoudende organisaties, opgesteld door de gemeente")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Privacy gevoelig    -   Keuze uit Ja/Nee/Onbekend")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Verantwoordelijk voor beheer    -   Persoon of organisatie verantwoordelijk voor beheer van vermelding/dataproduct")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Status  -   Keuze uit Bijgewerkt/Niet langer ondersteund/ In onderzoek/Ingetrokken")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dataclassificatie  -    Keuze uit Openbaar/Intern/Vertrouwelijk/Strikt Vertrouwelijk")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Publiceren  -   Keuze uit Ja/Nee. Zolang een bron niet is gepubliceerd, is deze niet vindbaar/zichtbaar zonder juiste rol/rechten."))))}u.isMDXComponent=!0}}]);