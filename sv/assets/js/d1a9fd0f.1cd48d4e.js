"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8116],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=a,g=u["".concat(d,".").concat(p)]||u[p]||c[p]||o;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"meerdere_toewijzen",title:"Meerdere thema's toewijzen",sidebar_label:"Meerdere thema's toewijzen"},d=void 0,l={unversionedId:"datacatalogus/meerdere_toewijzen",id:"version-1.0.0/datacatalogus/meerdere_toewijzen",title:"Meerdere thema's toewijzen",description:"Meerdere thema\u2019s toewijzen",source:"@site/versioned_docs/version-1.0.0/datacatalogus/datacatalogus_thema copy 2.md",sourceDirName:"datacatalogus",slug:"/datacatalogus/meerdere_toewijzen",permalink:"/civity-docs/sv/docs/1.0.0/datacatalogus/meerdere_toewijzen",draft:!1,tags:[],version:"1.0.0",frontMatter:{id:"meerdere_toewijzen",title:"Meerdere thema's toewijzen",sidebar_label:"Meerdere thema's toewijzen"}},m={},c=[{value:"Meerdere thema\u2019s toewijzen",id:"meerdere-themas-toewijzen",level:2},{value:"Systeembeheerders en aanpassingen aan Thema&#39;s",id:"systeembeheerders-en-aanpassingen-aan-themas",level:2}],u={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"meerdere-themas-toewijzen"},"Meerdere thema\u2019s toewijzen"),(0,o.kt)("p",null,"In de metadata kan slechts \xe9\xe9n thema worden toegewezen. Dit is een vereiste van de DCAT-standaard. Het kan voorkomen dat een vermelding binnen meerdere thema\u2019s past. Het is voor nu niet mogelijk om meerdere thema\xb4s te selecteren via de metadata. Om dit mogelijk te kunnen maken zou een aanpassing van het metadataschema nodig zijn. Dit kan tot gevolg hebben dat de DCAT-ondersteuning niet meer werkt."),(0,o.kt)("h2",{id:"systeembeheerders-en-aanpassingen-aan-themas"},"Systeembeheerders en aanpassingen aan Thema's"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Systeembeheerders wordt aangeraden om geen wijzigingen aan vermeldingen te doen. Door de extra functionaliteit die deze sysadmins bezitten kunnen fouten ontstaan.")),(0,o.kt)("p",null,"Standaard kan via CKAN een thema/groep worden aangewezen door de desbetreffende vermelding aan te klikken en vervolgens naar het tabblad Thema\u2019s te gaan. Hier kan het gewenste thema worden gekozen en worden toegevoegd door op Voeg toe aan Thema te klikken. Hoewel voor normale gebruikers de mogelijkheid is uitgezet om Thema's via het tabblad Thema's toe te voegen, hebben systeembeheerders (sysadmins) als enige nog wel de optie. "),(0,o.kt)("p",null,"Zoals aangegeven, is er bewust voor gekozen om deze optie voor normale gebruikers uit te zetten. Het is dus ook niet aanbevolen om als systeembeheerder extra thema's toe te voegen. Naast dat dit niet conform de DCAT-standaard is, zal dit tot het volgende probleem leiden:"),(0,o.kt)("p",null,"Bij de eerstvolgende wijziging in de metadata zal het metadataveld Thema worden aangeheouden om een vermelding aan een thema toe te wijzen. Dit is dus per definitie 1 thema en zal altijd leidend zijn. Het toevoegen van meerdere thema's wordt dus op deze wijze overschreven."))}p.isMDXComponent=!0}}]);