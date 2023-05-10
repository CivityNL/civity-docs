"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=p(n),v=r,m=u["".concat(l,".").concat(v)]||u[v]||c[v]||i;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>v,frontMatter:()=>d,metadata:()=>p,toc:()=>c});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],d={id:"dataoverheid_LinkToDataOverheid",title:"Koppeling data.overheid.nl",sidebar_label:"Koppeling data.overheid.nl"},l=void 0,p={unversionedId:"dataoverheid_LinkToDataOverheid",id:"version-4.6.5/dataoverheid_LinkToDataOverheid",title:"Koppeling data.overheid.nl",description:"Via Dataplatform is het mogelijk om datasets te publiceren op het Dataregister van de Nederlandse Overheid,  data.overheid.nl (DONL).",source:"@site/i18n/nl/docusaurus-plugin-content-docs-dataplatform/version-4.6.5/dataplatform_DATAREGISTERS_LinkToDataOverheid.md",sourceDirName:".",slug:"/dataoverheid_LinkToDataOverheid",permalink:"/dataplatform/dataoverheid_LinkToDataOverheid",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/i18n/nl/docusaurus-plugin-content-docs-dataplatform/version-4.6.5/dataplatform_DATAREGISTERS_LinkToDataOverheid.md",tags:[],version:"4.6.5",lastUpdatedAt:1683712864,formattedLastUpdatedAt:"10-5-2023",frontMatter:{id:"dataoverheid_LinkToDataOverheid",title:"Koppeling data.overheid.nl",sidebar_label:"Koppeling data.overheid.nl"},sidebar:"dataplatform",previous:{title:"Geoserver Integratie",permalink:"/dataplatform/geoserver_GeoserverIntegration"},next:{title:"Koppeling GeoNetwork",permalink:"/dataplatform/dataregisters_LinkToNGR"}},s={},c=[{value:"Hoe werkt het?",id:"hoe-werkt-het",level:2},{value:"Bekende beperkingen",id:"bekende-beperkingen",level:2}],u={toc:c};function v(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Via Dataplatform is het mogelijk om datasets te publiceren op het Dataregister van de Nederlandse Overheid, ",(0,i.kt)("a",{href:"https://data.overheid.nl/",target:"_blank"}," data.overheid.nl (DONL)"),"."),(0,i.kt)("h2",{id:"hoe-werkt-het"},"Hoe werkt het?"),(0,i.kt)("p",null,"Wanneer ",(0,i.kt)("inlineCode",{parentName:"p"},"Ja")," wordt geselecteerd bij het metadataveld ",(0,i.kt)("inlineCode",{parentName:"p"},"Publiceren DONL (niet via NGR)"),", wordt de dataset automatisch doorgezet naar data.overheid.nl (DONL). "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Alleen datasets waarbij zichtbaarheid op ",(0,i.kt)("strong",{parentName:"p"},"Publiek")," staat worden gesynchroniseerd met DONL.")),(0,i.kt)("p",null,"Deze synchronisatie vindt real-time plaats. Wanneer er wijzgingen aan de dataset worden gedaan, zal de sync opnieuw lopen. Zo wordt de data dus ook direct bijgewerkt op DONL."),(0,i.kt)("p",null,"Wanneer metadatavelden niet zijn ingevuld of er een waarde is ingevuld die niet overeenkomt met wat DONL verwacht, zal er een default waarde worden meegegeven. Dit betekent dat de metadata op DONL anders kan zijn dan wat er op Dataplatform te zien is."),(0,i.kt)("h2",{id:"bekende-beperkingen"},"Bekende beperkingen"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- Databronnen kunnen niet dezelfde naam hebben onder dezelfde dataset.\n- De naam dient als de unieke identifier en kan dus niet gedupliceerd worden in data.overheid.nl.\n- Niet alle metadatavelden worden gesynchroniseerd. Sommige niet-verplichte velden hebben geen mapping met DONL.\n")))}v.isMDXComponent=!0}}]);