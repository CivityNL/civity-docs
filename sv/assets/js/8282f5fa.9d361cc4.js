"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2043],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),d=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=d(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=d(a),f=n,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||o;return a?r.createElement(m,l(l({ref:e},c),{},{components:a})):r.createElement(m,l({ref:e},c))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},14807:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),l=["components"],i={id:"dataplatform_Introduction",title:"Introduction",sidebar_label:"Introduction"},s=void 0,d={unversionedId:"dataplatform_Introduction",id:"dataplatform_Introduction",title:"Introduction",description:"Dataplatform is comprised of two solutions, the Portal and CKAN.",source:"@site/../dataplatform/dataplatform_introduction.md",sourceDirName:".",slug:"/dataplatform_Introduction",permalink:"/sv/dataplatform/next/dataplatform_Introduction",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/../dataplatform/dataplatform_introduction.md",tags:[],version:"current",lastUpdatedBy:"isabeladowsley",lastUpdatedAt:1653655658,formattedLastUpdatedAt:"2022-05-27",frontMatter:{id:"dataplatform_Introduction",title:"Introduction",sidebar_label:"Introduction"},sidebar:"defaultSidebar",previous:{title:"What is Data Validation",permalink:"/sv/dataplatform/next/validation_WhatIsDataValidation"}},c={},p=[{value:"CKAN",id:"ckan",level:4},{value:"CKAN-Civity",id:"ckan-civity",level:4},{value:"Dataplatform API",id:"dataplatform-api",level:4}],u={toc:p};function f(t){var e=t.components,a=(0,n.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Dataplatform is comprised of two solutions, the ",(0,o.kt)("strong",{parentName:"p"},"Portal")," and ",(0,o.kt)("strong",{parentName:"p"},"CKAN"),"."),(0,o.kt)("p",null,"The portal is the website for data-consumers, where they can find datasets (contained in CKAN), themes, showcases and stories. The portal is a user friendly interface for presenting, searching and providing data that is stored in CKAN. "),(0,o.kt)("p",null,"CKAN is the tool to manage the data. It allows you to change, add, and delete data. However, in order to manipulate data, you must possess valid login credentials (contact your system administrator for this). "),(0,o.kt)("h4",{id:"ckan"},"CKAN"),(0,o.kt)("table",{class:"versions"},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"2.8.2"),(0,o.kt)("td",null,(0,o.kt)("a",{href:"https://docs.ckan.org/en/2.8/",target:"_blank"},"Documentation")),(0,o.kt)("td",null,(0,o.kt)("a",{href:"https://docs.ckan.org/en/2.8/changelog.html",target:"_blank"},"Release Notes"))))),(0,o.kt)("h4",{id:"ckan-civity"},"CKAN-Civity"),(0,o.kt)("table",{class:"versions"},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"2.0.0"),(0,o.kt)("td",null,(0,o.kt)("a",{href:"#"},"Release Notes"))))),(0,o.kt)("h4",{id:"dataplatform-api"},"Dataplatform API"),(0,o.kt)("table",{class:"versions"},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"2.4.0"),(0,o.kt)("td",null,(0,o.kt)("a",{href:"https://dev.dataplatform.nl/swagger/DataplatformAPI_2_4.html#!/default/get_media_media_id",target:"_blank"},"API Calls Library")),(0,o.kt)("td",null,(0,o.kt)("a",{href:"https://gitlab.onetrail.net/Civity/DataplatformAPI/DataplatformAPI2/tree/master",target:"_blank"},"Release Notes")," (login required)")))))}f.isMDXComponent=!0}}]);