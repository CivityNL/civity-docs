"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5588],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>v});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(a),v=r,u=m["".concat(d,".").concat(v)]||m[v]||c[v]||o;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3816:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>v,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"toevoegen_overig",title:"Vermeldingen toevoegen",sidebar_label:"Andere opties"},d=void 0,s={unversionedId:"toevoegen_overig",id:"version-1.0.0/toevoegen_overig",title:"Vermeldingen toevoegen",description:"Opties om vermelding toe te voegen",source:"@site/datacatalogus_versioned_docs/version-1.0.0/datacatalogus_vermeldingen copy 6.md",sourceDirName:".",slug:"/toevoegen_overig",permalink:"/nl/datacatalogus/1.0.0/toevoegen_overig",draft:!1,tags:[],version:"1.0.0",lastUpdatedBy:"isabeladowsley",lastUpdatedAt:1653657462,formattedLastUpdatedAt:"27-5-2022",frontMatter:{id:"toevoegen_overig",title:"Vermeldingen toevoegen",sidebar_label:"Andere opties"},sidebar:"datacatalogus",previous:{title:"Harvesten van databronnen",permalink:"/nl/datacatalogus/1.0.0/toevoegen_harvest"},next:{title:"Gelinkte vermeldingen",permalink:"/nl/datacatalogus/1.0.0/linken"}},p={},c=[{value:"Opties om vermelding toe te voegen",id:"opties-om-vermelding-toe-te-voegen",level:2},{value:"Harvest",id:"harvest",level:3},{value:"API upload",id:"api-upload",level:3},{value:"Handmatige upload",id:"handmatige-upload",level:3},{value:"Real time data",id:"real-time-data",level:3},{value:"Links naar databron",id:"links-naar-databron",level:2},{value:"ArcGIS Online",id:"arcgis-online",level:3},{value:"GeoServer",id:"geoserver",level:3}],m={toc:c};function v(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"opties-om-vermelding-toe-te-voegen"},"Opties om vermelding toe te voegen"),(0,o.kt)("p",null,"Datacatalogus ondersteunt de volgende methoden om vermeldingen en databronnen toe te voegen: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Harvesten "),(0,o.kt)("li",{parentName:"ul"},"API upload "),(0,o.kt)("li",{parentName:"ul"},"Handmatige upload "),(0,o.kt)("li",{parentName:"ul"},"IoT data ")),(0,o.kt)("h3",{id:"harvest"},"Harvest"),(0,o.kt)("p",null,"Het configureren van een harvesten verloopt in een aantal stappen. Al deze stappen worden uitgevoerd door een beheerder.  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"De beheerder logt in  "),(0,o.kt)("li",{parentName:"ol"},"De beheerder definieert harvester "),(0,o.kt)("li",{parentName:"ol"},"De beheerder laat harvester handmatig lopen ter controle "),(0,o.kt)("li",{parentName:"ol"},"Als de test van de harvester succesvol is, stelt de beheerder stelt een schedule in "),(0,o.kt)("li",{parentName:"ol"},"Afhankelijk van de instellingen worden de datasets periodiek automatisch bijgewerkt.  ")),(0,o.kt)("h3",{id:"api-upload"},"API upload"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"De beheerder logt in. "),(0,o.kt)("li",{parentName:"ol"},"Zoekt documentatie op (offici\xeble CKAN API documentatie: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.ckan.org/en/latest/api/index.html"},"https://docs.ckan.org/en/latest/api/index.html"),") "),(0,o.kt)("li",{parentName:"ol"},"Zoekt API key op (eventueel automation user met beperktere rechten met eigen API key aanmaken) "),(0,o.kt)("li",{parentName:"ol"},"Script om periodiek of grote hoeveelheid metadata te uploaden via API. Of bijvoorbeeld met FME.")),(0,o.kt)("h3",{id:"handmatige-upload"},"Handmatige upload"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"De beheerder logt in. "),(0,o.kt)("li",{parentName:"ol"},"De beheerder maakt een nieuwe vermelding (in CKAN een Package genoemd) aan. "),(0,o.kt)("li",{parentName:"ol"},"De beheerder voegt de gewenste databronnen (in CKAN een Resources genoemd) toe via de upload knop. ")),(0,o.kt)("h3",{id:"real-time-data"},"Real time data"),(0,o.kt)("p",null,"Datacatalogus biedt ook de mogelijkheid om real time data te publiceren. Neem hiervoor eerst contact op met Civity. "),(0,o.kt)("h2",{id:"links-naar-databron"},"Links naar databron"),(0,o.kt)("p",null,"Daarnaast kan er binnen een vermelding worden gelinkt naar de originele data."),(0,o.kt)("p",null,"In de vermelding kan als bijlage een link worden opgenomen waar de gebruiker op kan klikken. Ook kan informatie worden opgenomen die de gebruiker nodig heeft om de data te openen in een andere applicatie (bijvoorbeeld een desktop applicatie) "),(0,o.kt)("h3",{id:"arcgis-online"},"ArcGIS Online"),(0,o.kt)("p",null,"Link naar de viewer. Via query string parameters kan de viewer gestart worden met bepaalde specifieke opties. Documentatie daarover is hier te vinden: ",(0,o.kt)("a",{parentName:"p",href:"https://doc.arcgis.com/en/arcgis-online/reference/use-url-parameters.htm"},"https://doc.arcgis.com/en/arcgis-online/reference/use-url-parameters.htm"),".  "),(0,o.kt)("p",null,"Een voorbeeld van link naar een viewer: ",(0,o.kt)("a",{parentName:"p",href:"https://www.arcgis.com/home/webmap/viewer.html?basemapUrl=http%3A%2F%2Fservices.arcgisonline.com%2FArcGIS%2Frest%2Fservices%2FOcean_Basemap%2FMapServer&url=http%3A%2F%2Fservices5.arcgis.com%2F9cBkZtsx7PSOoaCF%2Farcgis%2Frest%2Fservices%2FMaryland_Shoals%2FFeatureServer%2F0"},"https://www.arcgis.com/home/webmap/viewer.html?basemapUrl=http%3A%2F%2Fservices.arcgisonline.com%2FArcGIS%2Frest%2Fservices%2FOcean_Basemap%2FMapServer&url=http%3A%2F%2Fservices5.arcgis.com%2F9cBkZtsx7PSOoaCF%2Farcgis%2Frest%2Fservices%2FMaryland_Shoals%2FFeatureServer%2F0")," .  "),(0,o.kt)("p",null,"De uiteindelijke URL ziet er behoorlijk complex uit. Deze link wordt echter automatisch gegenereerd door de harvester en hoef je dus niet zelf samen te stellen.  "),(0,o.kt)("h3",{id:"geoserver"},"GeoServer"),(0,o.kt)("p",null,"Conventie: online resource URL, #, naam van de laag. Bijvoorbeeld \u201c",(0,o.kt)("a",{parentName:"p",href:"https://portal.prvlimburg.nl/geodata/POL/wms"},"https://portal.prvlimburg.nl/geodata/POL/wms"),"? # POL2014_NAT_LANDSCHAP_ZL_V_inspire\u201d. Dit is de informatie die nodig is om deze laag te benaderen in andere applicaties zoals ArcGIS for Desktop, QGIS etcetera. Civity kan een viewer integreren die dezelfde conventie gebruikt. Daarnaast is er de mogelijkheid om een voorbeeld request te genereren. Kanttekening daarbij is dat dit niet altijd een zinnige afbeelding op zal leveren (bijvoorbeeld in het geval van een schaalafhankelijke renderer)."))}v.isMDXComponent=!0}}]);