"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3042],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>h});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),p=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return r.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=p(a),h=n,k=u["".concat(d,".").concat(h)]||u[h]||s[h]||l;return a?r.createElement(k,i(i({ref:e},m),{},{components:a})):r.createElement(k,i({ref:e},m))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},16168:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],o={id:"dataoverheid_LinkToDataOverheid",title:"Link To Data Overheid",sidebar_label:"Link To Data Overheid"},d=void 0,p={unversionedId:"dataplatform/dataoverheid_LinkToDataOverheid",id:"version-1.0.0/dataplatform/dataoverheid_LinkToDataOverheid",title:"Link To Data Overheid",description:"The link to Data Overheid is the service that allows datasets in Dataplatform to be synched with Data Overheid.",source:"@site/versioned_docs/version-1.0.0/dataplatform/dataplatform_DATAOVERHEID_LinkToDataOverheid.md",sourceDirName:"dataplatform",slug:"/dataplatform/dataoverheid_LinkToDataOverheid",permalink:"/civity-docs/sv/docs/1.0.0/dataplatform/dataoverheid_LinkToDataOverheid",draft:!1,tags:[],version:"1.0.0",frontMatter:{id:"dataoverheid_LinkToDataOverheid",title:"Link To Data Overheid",sidebar_label:"Link To Data Overheid"}},m={},s=[{value:"How it works",id:"how-it-works",level:2},{value:"Data Overheid",id:"data-overheid",level:2},{value:"Known Limitations",id:"known-limitations",level:2}],u={toc:s};function h(t){var e=t.components,o=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The link to ",(0,l.kt)("em",{parentName:"p"},"Data Overheid")," is the service that allows datasets in ",(0,l.kt)("a",{href:"https://www.dataplatform.nl/",target:"_blank"},(0,l.kt)("strong",{parentName:"p"},"Dataplatform"))," to be synched with ",(0,l.kt)("a",{href:"https://data.overheid.nl/",target:"_blank"},(0,l.kt)("strong",{parentName:"p"},"Data Overheid")),".\n",(0,l.kt)("img",{alt:"Dataplatform_To_Data_Overheid",src:a(83612).Z,width:"743",height:"260"})),(0,l.kt)("h2",{id:"how-it-works"},"How it works"),(0,l.kt)("p",null,"This service ",(0,l.kt)("strong",{parentName:"p"},"runs every night"),", and syncronyzes all, ",(0,l.kt)("strong",{parentName:"p"},"publicly available"),", datasets in ",(0,l.kt)("em",{parentName:"p"},"Dataplatform"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Only ",(0,l.kt)("strong",{parentName:"p"},"public datasets")," in ",(0,l.kt)("em",{parentName:"p"},"Dataplatform")," are synched to ",(0,l.kt)("em",{parentName:"p"},"Data Overheid"))),(0,l.kt)("p",null,"Metadata fields ",(0,l.kt)("strong",{parentName:"p"},"restrictions")," vary in  ",(0,l.kt)("em",{parentName:"p"},"Data Overheid")," and ",(0,l.kt)("em",{parentName:"p"},"Dataplatform"),".\nIn order to comply with both schemas we defined a set of ",(0,l.kt)("strong",{parentName:"p"},"default values")," that are used\nto replace invalid/absent values."),(0,l.kt)("p",null,"Here is the list of ",(0,l.kt)("strong",{parentName:"p"},"Default Values")," and corresponding metadata fields in ",(0,l.kt)("em",{parentName:"p"},"Dataplatform"),"/",(0,l.kt)("em",{parentName:"p"},"Data Overheid"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Dataplatform Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Overheid Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"owner_org (",(0,l.kt)("em",{parentName:"td"},"organization"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"authority"),(0,l.kt)("td",{parentName:"tr",align:null},"'",(0,l.kt)("a",{parentName:"td",href:"http://standaarden.overheid.nl/op/terms/overig'"},"http://standaarden.overheid.nl/op/terms/overig'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maintainer_email"),(0,l.kt)("td",{parentName:"tr",align:null},"contact_point_email"),(0,l.kt)("td",{parentName:"tr",align:null},"'",(0,l.kt)("a",{parentName:"td",href:"mailto:support@civity.nl"},"support@civity.nl"),"'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maintainer"),(0,l.kt)("td",{parentName:"tr",align:null},"contact_point_name"),(0,l.kt)("td",{parentName:"tr",align:null},"'Dataplatform'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"(any) date field"),(0,l.kt)("td",{parentName:"tr",align:null},"(any) date field"),(0,l.kt)("td",{parentName:"tr",align:null},"Current Time in following format '%Y-%m-%dT%H:%M:%S'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"'No Description'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"format"),(0,l.kt)("td",{parentName:"tr",align:null},"format"),(0,l.kt)("td",{parentName:"tr",align:null},"'",(0,l.kt)("a",{parentName:"td",href:"http://publications.europa.eu/resource/authority/file-type/TXT'"},"http://publications.europa.eu/resource/authority/file-type/TXT'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"language"),(0,l.kt)("td",{parentName:"tr",align:null},"language"),(0,l.kt)("td",{parentName:"tr",align:null},"'",(0,l.kt)("a",{parentName:"td",href:"http://publications.europa.eu/resource/authority/language/NLD'"},"http://publications.europa.eu/resource/authority/language/NLD'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"license_id"),(0,l.kt)("td",{parentName:"tr",align:null},"license_id"),(0,l.kt)("td",{parentName:"tr",align:null},"'",(0,l.kt)("a",{parentName:"td",href:"http://creativecommons.org/publicdomain/zero/1.0/deed.nl'"},"http://creativecommons.org/publicdomain/zero/1.0/deed.nl'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metadata_language"),(0,l.kt)("td",{parentName:"tr",align:null},"metadata_language"),(0,l.kt)("td",{parentName:"tr",align:null},"'",(0,l.kt)("a",{parentName:"td",href:"http://publications.europa.eu/resource/authority/language/NLD'"},"http://publications.europa.eu/resource/authority/language/NLD'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"'Naamloze bron'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"notes"),(0,l.kt)("td",{parentName:"tr",align:null},"notes"),(0,l.kt)("td",{parentName:"tr",align:null},"'Geen beschrijving'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"publisher"),(0,l.kt)("td",{parentName:"tr",align:null},"publisher"),(0,l.kt)("td",{parentName:"tr",align:null},"'",(0,l.kt)("a",{parentName:"td",href:"http://standaarden.overheid.nl/op/terms/overig'"},"http://standaarden.overheid.nl/op/terms/overig'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"theme"),(0,l.kt)("td",{parentName:"tr",align:null},"theme"),(0,l.kt)("td",{parentName:"tr",align:null},"'",(0,l.kt)("a",{parentName:"td",href:"http://standaarden.overheid.nl/owms/terms/Bestuur'"},"http://standaarden.overheid.nl/owms/terms/Bestuur'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"'Naamloze dataset'")))),(0,l.kt)("h2",{id:"data-overheid"},"Data Overheid"),(0,l.kt)("p",null,"More information about ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Data Overheid"))," here: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{href:"https://data.overheid.nl/",target:"_blank"},"***Data Overheid* Portal**")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{href:"https://data.overheid.nl/data/",target:"_blank"},"***Data Overheid* CKAN**")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{href:"https://ckanext-dcatdonl.readthedocs.io/en/latest/index.html",target:"_blank"},"**Documentation DataOverheid Extension**"),"- ",(0,l.kt)("a",{href:"https://ckanext-dcatdonl.readthedocs.io/en/latest/schema-dataset.html",target:"_blank"},"**Dataset Metadata Schema**"),"- ",(0,l.kt)("a",{href:"https://ckanext-dcatdonl.readthedocs.io/en/latest/schema-resource.html",target:"_blank"},"**Resource Metadata Schema**")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{href:"https://github.com/dataoverheid/ckanext-dataoverheid",target:"_blank"},"**GitHub repository for DataOverheid Extension**"))),(0,l.kt)("h2",{id:"known-limitations"},"Known Limitations"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- Resources can't have the same name under the same dataset.\n- Names are the unique identifier, can't be duplicated in the whole Data Overheid side.\n- Currently not all the metadata fields are being synchronized.\n")))}h.isMDXComponent=!0},83612:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/Dataplatform_to_Overheid-fa55a89d221d7ccb0e8502ace5b116bf.svg"}}]);