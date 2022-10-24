"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[67179],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>p});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(t),p=a,m=c["".concat(l,".").concat(p)]||c[p]||g[p]||i;return t?n.createElement(m,s(s({ref:r},u),{},{components:t})):n.createElement(m,s({ref:r},u))}));function p(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=c;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},10778:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>g});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),s=["components"],o={id:"user_AddingUsers",title:"Gebruikers toevoegen",sidebar_label:"Gebruikers toevoegen"},l=void 0,d={unversionedId:"user_AddingUsers",id:"version-4.0.0/user_AddingUsers",title:"Gebruikers toevoegen",description:"Alleen organisatiebeheerders mogen nieuwe gebruikers maken",source:"@site/i18n/nl/docusaurus-plugin-content-docs-dataplatform/version-4.0.0/dataplatform_USERS_AddingUsers.md",sourceDirName:".",slug:"/user_AddingUsers",permalink:"/dataplatform/4.0.0/user_AddingUsers",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/i18n/nl/docusaurus-plugin-content-docs-dataplatform/version-4.0.0/dataplatform_USERS_AddingUsers.md",tags:[],version:"4.0.0",lastUpdatedAt:1655216981,formattedLastUpdatedAt:"14-6-2022",frontMatter:{id:"user_AddingUsers",title:"Gebruikers toevoegen",sidebar_label:"Gebruikers toevoegen"},sidebar:"dataplatform",previous:{title:"Gebruikersrollen",permalink:"/dataplatform/4.0.0/user_UserRoles"},next:{title:"Gebruikers bewerken",permalink:"/dataplatform/4.0.0/user_EditingUsers"}},u={},g=[{value:"Een nieuwe gebruiker aanmaken",id:"een-nieuwe-gebruiker-aanmaken",level:2}],c={toc:g};function p(e){var r=e.components,o=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Alleen organisatiebeheerders mogen nieuwe gebruikers maken"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Zorg ervoor dat u de juiste rol voor de gebruiker instelt. Zie ",(0,i.kt)("a",{parentName:"p",href:"user_UserRoles"},"Gebruikersrollen")," voor meer informatie over rollen. ")),(0,i.kt)("h2",{id:"een-nieuwe-gebruiker-aanmaken"},"Een nieuwe gebruiker aanmaken"),(0,i.kt)("p",null,'Selecteer op de gegevenssetpagina van de organisatie de knop "Beheer", gevolgd door het tabblad "Leden". Selecteer de knop "Voeg Lid toe".'),(0,i.kt)("img",{class:"imageStyle",target:"_blank",alt:"image: Organization screen - Manage Button",src:t(78589).Z}),(0,i.kt)("img",{class:"imageStyle",target:"_blank",alt:"image: Organization screen - Manage Button",src:t(76305).Z}),(0,i.kt)("p",null,"Bestaande gebruikers zijn gebruikers die al lid zijn van een andere organisatie. Nieuwe gebruikers zijn gebruikers die geen lid zijn van een bestaande organisatie. Om de installatie van een nieuwe gebruiker te starten, vult u eenvoudig hun e-mailadres in."),(0,i.kt)("img",{class:"imageStyle",target:"_blank",alt:"image: Organization screen - Manage Button",src:t(70135).Z}),(0,i.kt)("p",null,"Wanneer u op 'Voeg lid toe:\u2019 klikt, ontvangt het nieuwe lid een geautomatiseerd e-mail naar het ingevoerde adres. De gebruikersnaam en het gebruikersnummer worden gegenereerd op basis van dit e-mailadres. "),(0,i.kt)("p",null,"De status van de nieuwe gebruiker blijft 'in behandeling' totdat hij zijn e-mailadres bevestigt. "),(0,i.kt)("img",{class:"imageStyle",target:"_blank",alt:"image: member status pending screen",src:t(99365).Z}))}p.isMDXComponent=!0},78589:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/beheer_leden-b73f14ad55bb8ba2e79513aa69d61ef7.jpg"},76305:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/dataplatform_user_UserManagement_ManageUser_AddMember-fe8024df88b2198ce5b8161b4f9af6c7.png"},70135:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/dataplatform_user_UserManagement_ManageUser_AddMemberRole-c228bee777819b2917b96c49d7e919c4.png"},99365:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/dataplatform_user_UserManagement_ManageUser_Pending_ALT-bd272bc037ffc798d97f742b885d1648.png"}}]);