"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54427],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},55613:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={id:"datasets_AddingDatasets",title:"Adding Datasets",sidebar_label:"Adding Datasets"},s=void 0,d={unversionedId:"dataplatform/datasets_AddingDatasets",id:"version-1.0.0/dataplatform/datasets_AddingDatasets",title:"Adding Datasets",description:"Adding a dataset represents the first step in adding a new data entry. The second step is adding a datasource",source:"@site/versioned_docs/version-1.0.0/dataplatform/dataplatform_DATASETS_AddingDatasets.md",sourceDirName:"dataplatform",slug:"/dataplatform/datasets_AddingDatasets",permalink:"/sv/docs/1.0.0/dataplatform/datasets_AddingDatasets",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/versioned_docs/version-1.0.0/dataplatform/dataplatform_DATASETS_AddingDatasets.md",tags:[],version:"1.0.0",lastUpdatedAt:1653657462,formattedLastUpdatedAt:"2022-05-27",frontMatter:{id:"datasets_AddingDatasets",title:"Adding Datasets",sidebar_label:"Adding Datasets"}},p={},c=[{value:"Title",id:"title",level:2},{value:"Description",id:"description",level:2},{value:"Visibility / Zichtbaarheid",id:"visibility--zichtbaarheid",level:3},{value:"Searchability / Zichtbaarheid Dataplatform",id:"searchability--zichtbaarheid-dataplatform",level:3},{value:"Language / Taal",id:"language--taal",level:3},{value:"Metadata Language / Metadata Taal",id:"metadata-language--metadata-taal",level:3},{value:"Tags",id:"tags",level:2},{value:"Licenses",id:"licenses",level:2},{value:"Organization",id:"organization",level:2},{value:"Version",id:"version",level:2},{value:"Contact Email",id:"contact-email",level:2},{value:"Category / Theme",id:"category--theme",level:2},{value:"Data Owner",id:"data-owner",level:2},{value:"Provider Email",id:"provider-email",level:2},{value:"Version Comments",id:"version-comments",level:2},{value:"Update Frequency",id:"update-frequency",level:2},{value:"Location",id:"location",level:2}],u={toc:c};function m(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Adding a dataset represents the first step in adding a new data entry. The second step is ",(0,i.kt)("a",{parentName:"p",href:"datasets_AddingDatasources"},"adding a datasource")),(0,i.kt)("img",{class:"imageStyle",alt:"image: Adding Datasets",src:a(16061).Z}),(0,i.kt)("h2",{id:"title"},"Title"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The title you choose will be rendered as part of the dataset\u2019s URL. The URL is generated in the following template: ",(0,i.kt)("a",{parentName:"p",href:"#blank"},"https://www.dataplatform.nl/data/YOUR_TITLE"),".  When the title is generated into a URL, capital letters will be converted to small letters and spaces will be replaced by hyphens ( - ).")),(0,i.kt)("p",null,"A title is a unique identifier \u2013 it must be short and specific. For example, \u201c",(0,i.kt)("strong",{parentName:"p"},"Sport Events 2016 Utrecht"),"\u201d is much more specific than \u201c",(0,i.kt)("strong",{parentName:"p"},"Sporting Events"),".\u201d For best results, specify the location of the dataset inside the title, as this will allow users to better find your dataset on ",(0,i.kt)("a",{href:"https://www.dataplatform.nl",target:"_blank",rel:"noreferrer noopener"},"Dataplatform"),"."),(0,i.kt)("p",null,"A good naming guideline to follow when creating a title:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"root_category - subject - location:year - version:number\n")),(0,i.kt)("p",null,"An example using our naming guideline:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"Sport - Sport Events - Utrecht 2019 - Version 1\n")),(0,i.kt)("img",{class:"imageStyle shadowing",alt:"SCREENCAST: adding a title",src:a(16118).Z}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"This field represents an overview of your dataset. Your description should answer the following questions: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What is the data about?"),(0,i.kt)("li",{parentName:"ul"},"Where does the data come from?"),(0,i.kt)("li",{parentName:"ul"},"What is the quality of the data?"),(0,i.kt)("li",{parentName:"ul"},"Over what timeframe or period was the data recorded?")),(0,i.kt)("p",null,"You may use ",(0,i.kt)("a",{href:"https://www.markdownguide.org/basic-syntax",target:"_blank",rel:"noreferrer noopener"},"markdown formatting")," in the description field. This allows you to utilize headers, lists, ",(0,i.kt)("strong",{parentName:"p"},"bold"),", and ",(0,i.kt)("em",{parentName:"p"},"italics.")),(0,i.kt)("p",null,"For example, the following raw markdown:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"* **Description:** Sporting Events Utrecht\n* **Source:** Permits Department\n* **Target:** Providing insights into events from the municipality\n* **Limitations:** This dataset is not to be used for legal purposes\n* **Possibilities:** This dataset may be used for insight into locations on a map\n* *Coordinate System:* *WGS84*\n")),(0,i.kt)("p",null,"Will be rendered as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description:")," Sporting Events Utrecht"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Source:")," Permits Department"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Target:")," Providing insights into events from the municipality"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Limitations:")," This dataset is not to be used for legal purposes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Possibilities:")," This dataset may be used for insight into locations on a map"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Coordinate System:")," ",(0,i.kt)("em",{parentName:"li"},"WGS84"))),(0,i.kt)("h3",{id:"visibility--zichtbaarheid"},"Visibility / Zichtbaarheid"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Visibility is set to private by default. Choose \u201cpublic\u201d to make the dataset available as open data on ",(0,i.kt)("a",{href:"https://www.dataplatform.nl",target:"_blank",rel:"noreferrer noopener"},"dataplatform.nl"))),(0,i.kt)("p",null,"CKAN Dataplatform has two types of visibility options: private and public. Datasets that are marked as ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"private"))," are only viewable in ",(0,i.kt)("a",{href:"https://ckan.dataplatform.nl/",target:"_blank",rel:"noreferrer noopener"},"CKAN")," for users with the correct organizational rights; the dataset is not viewable on ",(0,i.kt)("a",{href:"https://www.dataplatform.nl",target:"_blank",rel:"noreferrer noopener"},"dataplatform"),"."),(0,i.kt)("p",null,"The visibility status of your dataset is indicated by a label in the top-right corner."),(0,i.kt)("img",{class:"imageStyle",alt:"image: Dataset - Private Flag",src:a(76947).Z}),(0,i.kt)("h3",{id:"searchability--zichtbaarheid-dataplatform"},"Searchability / Zichtbaarheid Dataplatform"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Searchability is only available if the visibility is set to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"private")))),(0,i.kt)("p",null,"If a dataset is set to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Private")),", the metadata will be shown on CKAN without an available datasource. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When searchability is set to onzichtbaar, only users with the correct origanizational rights can see the datasource\nWhen searchability is set to zichtbaar, all users in CKAn can see the metadata, but cannot reach the datasource ")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Visibility"),(0,i.kt)("th",{parentName:"tr",align:null},"Searchability"),(0,i.kt)("th",{parentName:"tr",align:null},"appearance dataplatform.nl"),(0,i.kt)("th",{parentName:"tr",align:null},"appearance ckan.dataplatform.nl"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Public"),(0,i.kt)("td",{parentName:"tr",align:null},"Blocked"),(0,i.kt)("td",{parentName:"tr",align:null},"Available"),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata and datasources available")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Private"),(0,i.kt)("td",{parentName:"tr",align:null},"Zichtbaar"),(0,i.kt)("td",{parentName:"tr",align:null},"Not available"),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata available, datasource not available")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Private"),(0,i.kt)("td",{parentName:"tr",align:null},"Onzichtbaar"),(0,i.kt)("td",{parentName:"tr",align:null},"Not available"),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata and datasource not available")))),(0,i.kt)("h3",{id:"language--taal"},"Language / Taal"),(0,i.kt)("p",null,"The default language is set to\u202fNederlands, but additional options are available from the drop-down box.\u202f "),(0,i.kt)("h3",{id:"metadata-language--metadata-taal"},"Metadata Language / Metadata Taal"),(0,i.kt)("p",null,"The default language is set to\u202fNederlands, but additional options are available from the drop-down box.\u202f "),(0,i.kt)("h2",{id:"tags"},"Tags"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"It is advisable to enter tags that do not appear in the description or title of your dataset. Dataplatform already indexes keywords in the Title and Description fields.")),(0,i.kt)("p",null,"Tags influence search terms. Utilizing tags will make your datasets easier to find. Entering the first few letters of your intended tag will make Dataplatform search for the closest existing match \u2013 if it matches, click on the tag in the dropdown list."),(0,i.kt)("p",null,"If your intended tag does not match any existing entries, complete the entire word, then hit the ",(0,i.kt)("em",{parentName:"p"},"return")," key. Once your new tag has been entered, it is now possible to use this as an existing tag.\nIf you select the wrong tag, you may remove it by click on the cross \u201cX\u201d in front of the word."),(0,i.kt)("img",{class:"imageStyle shadowing",alt:"SCREENCAST: adding tags",src:a(19626).Z}),(0,i.kt)("h2",{id:"licenses"},"Licenses"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Licenses dictate how your dataset may be used. You can find information about open data licenses at ",(0,i.kt)("a",{href:"http://opendefinition.org/licenses/",target:"_blank",rel:"noreferrer noopener"},"Conformant Licenses"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Open Data Register (Data Overheid) only publishes datasets with the following licenses: "),(0,i.kt)("a",{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noreferrer noopener"},"CC-0")," /",(0,i.kt)("a",{href:"https://creativecommons.org/licenses/by/3.0/",target:"_blank",rel:"noreferrer noopener"},"CC-BY 3.0")," /",(0,i.kt)("a",{href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank",rel:"noreferrer noopener"},"CC-BY 4.0")," /",(0,i.kt)("a",{href:"https://opendatacommons.org/licenses/pddl/summary/",target:"_blank",rel:"noreferrer noopener"},"Public Domain"),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"If your require a different license, please contact Dataplatform\u2019s administrator."))),(0,i.kt)("p",null,"Licenses are selected by clicking on the dropdown box; you must select an option."),(0,i.kt)("p",null,"The default license for open data is \u201cCreative Commons CC Zero.\u201d This means that the dataset may be used without limitations. The \u201cCreative Commons Attribution\u201d license allows users to freely use your data, but they must reference the source of the data."),(0,i.kt)("h2",{id:"organization"},"Organization"),(0,i.kt)("p",null,"If you are part of an organization, you may only add and manage datasets and files connected to that organization; this field is completed in automatically."),(0,i.kt)("h2",{id:"version"},"Version"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Every dataset may be given a version number")),(0,i.kt)("p",null,"Incrementing the version number on each subsequent edit will allow users to see whether there have been previous data sets, which are no longer viewable."),(0,i.kt)("h2",{id:"contact-email"},"Contact Email"),(0,i.kt)("p",null,"The contact email allows users to send questions or comments to the dataset owner."),(0,i.kt)("h2",{id:"category--theme"},"Category / Theme"),(0,i.kt)("p",null,"Categories are pre-defined. You must select the closest match from the list."),(0,i.kt)("h2",{id:"data-owner"},"Data Owner"),(0,i.kt)("p",null,"The owner of the dataset, typically this is an organization (province, ministry, municipality, etc)."),(0,i.kt)("p",null,"If you wish to be listed on the Open Data Registry (Data Overheid), the name in Data Owner must match the one given to the government agency on the Open Data Registry. The list of organizations can be found here: ",(0,i.kt)("a",{href:"https://data.overheid.nl/data/organization",target:"_blank",rel:"noreferrer noopener"},"Organizations"),"."),(0,i.kt)("h2",{id:"provider-email"},"Provider Email"),(0,i.kt)("p",null,"This is the organization\u2019s email, which allows users to contact you should they have questions or comments. "),(0,i.kt)("p",null,"This is usually a general email address, as the source holder\u2019s email has been entered earlier"),(0,i.kt)("h2",{id:"version-comments"},"Version Comments"),(0,i.kt)("p",null,"You may make revision comments, concerning each version of the dataset. Typical comments would include: what was done, and an overview of what was added/removed."),(0,i.kt)("h2",{id:"update-frequency"},"Update Frequency"),(0,i.kt)("p",null,"This sets the update frequency of your dataset."),(0,i.kt)("h2",{id:"location"},"Location"),(0,i.kt)("p",null,"Each dataset is tied to a geographic location and geographic boundary."),(0,i.kt)("h1",{id:"your-dataset-is-now-complete-"},"Your dataset is now complete \ud83c\udf89\ud83d\udc4d"))}m.isMDXComponent=!0},19626:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dataplatform_user_addingDatasets_AddTags-20215fbc9d4fb1d9a75dde7768521097.gif"},16118:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dataplatform_user_addingDatasets_AddTitle-09cd8cbbf665aa8599f1d3a6c8f96e1e.gif"},16061:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dataplatform_user_addingDatasets_Overview-7aac1274bd90c0d0798b193a4d16d019.png"},76947:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dataplatform_user_addingDatasets_priveIndicator-ec05365d661a91d4dbaae1d61bbc8528.png"}}]);