"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49515],{3905:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>p});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),c=d(t),p=a,m=c["".concat(l,".").concat(p)]||c[p]||u[p]||o;return t?r.createElement(m,i(i({ref:n},g),{},{components:t})):r.createElement(m,i({ref:n},g))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},34538:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={id:"user_LoginDashboard",title:"Inloggen en Dashboard",sidebar_label:"Inloggen en Dashboard"},l=void 0,d={unversionedId:"user_LoginDashboard",id:"version-4.0.0/user_LoginDashboard",title:"Inloggen en Dashboard",description:"Om datasets toe te voegen, te bewerken of te verwijderen, moet u ingelogd zijn. Uw aanmeldingsmachtigingen zijn geconfigureerd op organisatieniveau; U heeft de mogelijkheid om lid te worden van \xe9\xe9n of meerdere organisaties. Hiermee kunt u meerdere gegevenssets in verschillende organisaties beheren. Elke organisatie bevat ook verschillende gebruikersmachtigingsniveaus; Rollen.",source:"@site/i18n/nl/docusaurus-plugin-content-docs-dataplatform/version-4.0.0/dataplatform_USERS_LoginDashboard.md",sourceDirName:".",slug:"/user_LoginDashboard",permalink:"/dataplatform/4.0.0/user_LoginDashboard",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/i18n/nl/docusaurus-plugin-content-docs-dataplatform/version-4.0.0/dataplatform_USERS_LoginDashboard.md",tags:[],version:"4.0.0",lastUpdatedAt:1655216981,formattedLastUpdatedAt:"14-6-2022",frontMatter:{id:"user_LoginDashboard",title:"Inloggen en Dashboard",sidebar_label:"Inloggen en Dashboard"},sidebar:"dataplatform",previous:{title:"Keycloak integratie",permalink:"/dataplatform/4.0.0/user_KeycloakIntegration"},next:{title:"Persoonlijk profiel",permalink:"/dataplatform/4.0.0/user_PersonalProfile"}},g={},u=[{value:"Inloggen",id:"inloggen",level:2},{value:"Dashboard",id:"dashboard",level:2}],c={toc:u};function p(e){var n=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Om datasets toe te voegen, te bewerken of te verwijderen, moet u ingelogd zijn. Uw aanmeldingsmachtigingen zijn geconfigureerd op organisatieniveau; U heeft de mogelijkheid om lid te worden van \xe9\xe9n of meerdere organisaties. Hiermee kunt u meerdere gegevenssets in verschillende organisaties beheren. Elke organisatie bevat ook verschillende gebruikersmachtigingsniveaus; Rollen. "),(0,o.kt)("p",null,"Zie ",(0,o.kt)("a",{parentName:"p",href:"user_UserRoles"},"Gebruikersrollen")," voor meer informatie over gebruikersmachtigingen."),(0,o.kt)("h2",{id:"inloggen"},"Inloggen"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Uw gebruikersnaam vindt u in uw e-mail. Het volgt het formaat: ",(0,o.kt)("inlineCode",{parentName:"p"},"[gebruiker]-[number]"))),(0,o.kt)("p",null,"Inloggegevens worden beheerd op basis van alleen uitnodiging; toegang tot CKAN kan worden verleend door de beheerder van uw organisatie. Zodra toegang is verleend, moet u uw e-mail bevestigen; als u uw e-mailadres bevestigt, wordt een wachtwoord gegenereerd. "),(0,o.kt)("p",null,"De inlogknop bevindt zich bovenaan de pagina aan de rechterkant. Hier logt u in met uw gebruikersnaam en wachtwoord. "),(0,o.kt)("h2",{id:"dashboard"},"Dashboard"),(0,o.kt)("p",null,"Wanneer u bent ingelogd verschijnt uw naam bovenaan de pagina; u wordt naar uw dashboard geleid. Met het dashboard kunt u de nieuwste gegevenssets bekijken waaraan u eerder hebt gewerkt."),(0,o.kt)("img",{class:"imageStyle",target:"_blank",alt:"image: My Dashboard",src:t(84039).Z}),(0,o.kt)("p",null,'Als u op "Mijn organisatie" klikt, kunt u de gegevenssets bekijken die eigendom zijn van uw organisatie(s). Als u over de juiste referenties beschikt, kunt u vervolgens gegevenssets toevoegen, bewerken of verwijderen.'),(0,o.kt)("img",{class:"imageStyle",target:"_blank",alt:"image: My Dashboard - My Organizations",src:t(1457).Z}))}p.isMDXComponent=!0},84039:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/dataplatform_user_UserManagement_MyDashboard-eb950bd81225df8a20841b3f735eb7ba.png"},1457:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/dataplatform_user_UserManagement_MyOrganization-cfc1815069dd230e5f7af868e6ee75de.png"}}]);