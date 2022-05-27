"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[199],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),k=d(t),m=r,u=k["".concat(l,".").concat(m)]||k[m]||p[m]||o;return t?a.createElement(u,i(i({ref:n},c),{},{components:t})):a.createElement(u,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=k;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},26220:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],s={id:"kookboek_DataOntsluiting",title:"Data ontsluiting",sidebar_label:"Data ontsluiting"},l=void 0,d={unversionedId:"data-kookboek/kookboek_DataOntsluiting",id:"version-1.0.0/data-kookboek/kookboek_DataOntsluiting",title:"Data ontsluiting",description:"De vorige hoofdstukken gingen over het bepalen van de relevantie en kwaliteit van verschillende individuele datasets. Een ander belangrijk onderdeel is het combineren en gebruiken van deze datasets in toepassingen. Hierbij speelt de manier van ontsluiten en beschikbaar maken van deze data een belangrijke rol. Dat kan op een groot aantal manieren.",source:"@site/versioned_docs/version-1.0.0/data-kookboek/kookboek_dataOntsluiting.md",sourceDirName:"data-kookboek",slug:"/data-kookboek/kookboek_DataOntsluiting",permalink:"/civity-docs/nl/docs/1.0.0/data-kookboek/kookboek_DataOntsluiting",draft:!1,tags:[],version:"1.0.0",frontMatter:{id:"kookboek_DataOntsluiting",title:"Data ontsluiting",sidebar_label:"Data ontsluiting"}},c={},p=[],k={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"De vorige hoofdstukken gingen over het bepalen van de relevantie en kwaliteit van verschillende individuele datasets. Een ander belangrijk onderdeel is het combineren en gebruiken van deze datasets in toepassingen. Hierbij speelt de manier van ontsluiten en beschikbaar maken van deze data een belangrijke rol. Dat kan op een groot aantal manieren."),(0,o.kt)("p",null,"De meest gebruikte manier is het aanbieden van een downloadbaar bestand, bijvoorbeeld een CSV- of GeoJSON-file. Het nadeel is dat de gebruiker steeds opnieuw het bestand moet downloaden als er een nieuwe versie beschikbaar komt. Veel toepassingen halen eenmalig de data op, slaan die zelf op en gebruiken die om een dashboard of kaart te maken. Het is in die situatie lastig te beoordelen of de meest actuele versie van de data worden gebruikt. En voor de aanbieder/eigenaar van de data is er geen zicht op de toepassingen die gebruik maken van een dataset."),(0,o.kt)("h1",{id:"api"},"API"),(0,o.kt)("p",null,"Een andere manier is het bieden van een API (Application Programming Interface) of webservices ",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". Dit is als het ware een online stopcontact om data op te vragen. Het grote voordeel is dat het gebruik van de data beter te monitoren is, dat de gebruiker altijd beschikt over de meest recente data en die niet zelf hoeft op te slaan. Voor beleidsmonitoring zijn API\u2019s of webservices daarom meer geschikt. In het Digitaal Stelsel Omgevingswet wordt sterk ingezet op de ontwikkeling van open API\xb4s (conform de OpenAPI-specificatie) en een ontwikkelaarsportaal waar alle beschikbare API\u2019s gevonden kunnen worden (inclusief documentatie)."),(0,o.kt)("p",null,"Een aantal voorbeelden van (standaard) services zijn:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Geo-services, zoals vastgesteld door het Open Geo Consortium (OGC) ",(0,o.kt)("sup",{parentName:"li",id:"fnref-2"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,o.kt)("li",{parentName:"ol"},"Voor real time data zijn er standaarden van FIWARE"),(0,o.kt)("li",{parentName:"ol"},"Voor het omgevingsbeleid is er een API-strategie in ontwikkeling")),(0,o.kt)("p",null,"Voor geo-informatie (en direct van belang in het kader van de Omgevingswet), is de INSPIRE-plicht. INSPIRE is een Europese richtlijn voor het beschikbaar stellen van geo-informatie. Dat gebeurt nu op verschillende niveaus, onder meer via het Nationaal Geo Register. Een deel van de gegevens en informatieproducten die in de context van de Omgevingswet beschikbaar moeten komen, vallen onder INSPIRE en zullen conform die standaarden beschikbaar moeten worden gesteld. Een reden te meer om goed na te denken over een catalogus om de (interne) informatie te registeren en beheren."),(0,o.kt)("p",null,'Het doel van data ontsluiting is dat de gegevens gebruikt worden voor nieuwe toepassingen. Zoals een klimaatatlas, 3D-model of app. Door de ontsluiting van data te scheiden van de toepassingen, wordt ook aangesloten bij de visie die VNG Realisatie heeft geformuleerd onder de naam "Common Ground" (',(0,o.kt)("a",{parentName:"p",href:"https://vng.nl/samen-organiseren/common-ground"},"https://vng.nl/samen-organiseren/common-ground"),"). "),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Difference between API and Webservice: ",(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@programmerasi/difference-between-api-and-web-service-73c873573c9d"},"https://medium.com/@programmerasi/difference-between-api-and-web-service-73c873573c9d"),(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2"},"OGC-standaarden - ",(0,o.kt)("a",{parentName:"li",href:"http://www.opengeospatial.org/docs/is"},"http://www.opengeospatial.org/docs/is"),(0,o.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);