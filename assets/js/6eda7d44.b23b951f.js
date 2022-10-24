"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87809],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=p(a),u=r,g=s["".concat(l,".").concat(u)]||s[u]||m[u]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=s;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},44084:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>p,toc:()=>m});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],d={id:"metadata_Metadata",title:"Metadata",sidebar_label:"Metadata"},l=void 0,p={unversionedId:"metadata_Metadata",id:"version-4.1.0/metadata_Metadata",title:"Metadata",description:"Metadata is gewoon data over data",source:"@site/i18n/nl/docusaurus-plugin-content-docs-dataplatform/version-4.1.0/dataplatform_METADATA_Metadata.md",sourceDirName:".",slug:"/metadata_Metadata",permalink:"/dataplatform/4.1.0/metadata_Metadata",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/i18n/nl/docusaurus-plugin-content-docs-dataplatform/version-4.1.0/dataplatform_METADATA_Metadata.md",tags:[],version:"4.1.0",lastUpdatedAt:1655981906,formattedLastUpdatedAt:"23-6-2022",frontMatter:{id:"metadata_Metadata",title:"Metadata",sidebar_label:"Metadata"}},c={},m=[{value:"Voorbeeld van metadata",id:"voorbeeld-van-metadata",level:2}],s={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Metadata is gewoon data over data ")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Metadata volgt de richtlijnen van de DCAT-Standaard. ",(0,o.kt)("a",{href:"/dataplatform/metadata_DCAT",target:"_blank"},"DCAT-Standard"),".")),(0,o.kt)("p",null,"Elke dataset bevat metadata; metadata is informatie die de gebruiker informeert over de verzamelde databronnen in een dataset. Meestal betekent dit een beschrijving en context over bestaande data. "),(0,o.kt)("p",null,"Metadata moeten het volgende beschrijven: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Wie is de eigenaar van de dataset "),(0,o.kt)("li",{parentName:"ul"},"Beschrijvende informatie over de inhoud "),(0,o.kt)("li",{parentName:"ul"},"Toegangsrechten ")),(0,o.kt)("h2",{id:"voorbeeld-van-metadata"},"Voorbeeld van metadata"),(0,o.kt)("p",null,'Laten we aannemen dat we het volgende object "dingen" hebben genoemd: '),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// Dit is een visuele weergave van data \ndingen = "[14, 16.5, 21, 18, 21]"\n')),(0,o.kt)("p",null,'We zien dat "dingen" een verzameling getallen is, maar zonder context is het betekenisloos, buiten het zijn van een verzameling getallen; "dingen" bestaat als een verzameling getallen. Laten we dat veranderen met metadata, waar we waarde kunnen toevoegen door context en definitie toe te wijzen! '),(0,o.kt)("p",null,"Laten we nog twee waarden toewijzen: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'"Florida, Verenigde staten"\n"Degrees Centigrade"\n')),(0,o.kt)("p",null,'Nu hebben we metadata, die beschrijft waar "dingen" over gaan. Door graden Celsius en Florida, VS, toe te voegen, heeft "dingen" nu context (locatie) en een definitie (temperatuur). '),(0,o.kt)("p",null,"Daarom zijn ",(0,o.kt)("inlineCode",{parentName:"p"},"graden Celsius")," en ",(0,o.kt)("inlineCode",{parentName:"p"},"Florida, VS")," de metadata voor het object 'dingen'."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// dit is een visuele weergave van data\ndingen = "[14, 16.5, 21, 18, 21]", "graden Celsius", "Florida, VS`"\n')),(0,o.kt)("p",null,'Door metadata toe te voegen aan "dingen", heeft het ons in staat gesteld om de informatie binnenin gemakkelijk te begrijpen en op een makkelijk leesbare manier weer te geven: '),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Graden Celsius"),(0,o.kt)("th",{parentName:"tr",align:"center"},"-"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"14"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Florida, VS")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"16.5"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Florida, VS")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"21"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Florida, VS")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"18"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Florida, VS")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"21"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Florida, VS")))))}u.isMDXComponent=!0}}]);