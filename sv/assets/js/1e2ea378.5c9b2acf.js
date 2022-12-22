"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57336],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),d=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=n,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return a?i.createElement(m,r(r({ref:t},p),{},{components:a})):i.createElement(m,r({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},13757:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=a(87462),n=a(63366),o=(a(67294),a(3905)),r=["components"],s={id:"datasets_AddingDatasets",title:"Adding Datasets",sidebar_label:"Adding Datasets"},l=void 0,d={unversionedId:"datasets_AddingDatasets",id:"version-4.4.0/datasets_AddingDatasets",title:"Adding Datasets",description:"Adding a dataset represents the first step in adding a new data entry. The second step is adding a resource",source:"@site/dataplatform_versioned_docs/version-4.4.0/dataplatform_DATASETS_AddingDatasets.md",sourceDirName:".",slug:"/datasets_AddingDatasets",permalink:"/sv/dataplatform/4.4.0/datasets_AddingDatasets",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/dataplatform_versioned_docs/version-4.4.0/dataplatform_DATASETS_AddingDatasets.md",tags:[],version:"4.4.0",lastUpdatedAt:1666621913,formattedLastUpdatedAt:"2022-10-24",frontMatter:{id:"datasets_AddingDatasets",title:"Adding Datasets",sidebar_label:"Adding Datasets"},sidebar:"dataplatform",previous:{title:"Deleting Users",permalink:"/sv/dataplatform/4.4.0/user_DeletingUsers"},next:{title:"Adding Resources",permalink:"/sv/dataplatform/4.4.0/datasets_AddingDatasources"}},p={},c=[{value:"DataPlatform metadata schema",id:"dataplatform-metadata-schema",level:2},{value:"Building blocks",id:"building-blocks",level:3},{value:"CKAN",id:"ckan",level:4},{value:"DCAT",id:"dcat",level:4},{value:"NGR",id:"ngr",level:4},{value:"Overview of metadata fields",id:"overview-of-metadata-fields",level:2},{value:"Title and URL",id:"title-and-url",level:3},{value:"Description",id:"description",level:3},{value:"Organization",id:"organization",level:3},{value:"Visibility",id:"visibility",level:3},{value:"License",id:"license",level:3},{value:"Tags",id:"tags",level:3},{value:"Theme",id:"theme",level:3},{value:"Publisher",id:"publisher",level:3},{value:"Type of publisher",id:"type-of-publisher",level:3},{value:"Language",id:"language",level:3},{value:"Landing Page",id:"landing-page",level:3},{value:"Contact point type",id:"contact-point-type",level:3},{value:"Contact point name",id:"contact-point-name",level:3},{value:"Contact point email",id:"contact-point-email",level:3},{value:"Contact point phone",id:"contact-point-phone",level:3},{value:"Contact point address",id:"contact-point-address",level:3},{value:"Spatial",id:"spatial",level:3},{value:"Temporal start",id:"temporal-start",level:3},{value:"Temporal end",id:"temporal-end",level:3},{value:"Access rights",id:"access-rights",level:3},{value:"Issued",id:"issued",level:3},{value:"Version",id:"version",level:3},{value:"Version Notes",id:"version-notes",level:3},{value:"Frequency",id:"frequency",level:3},{value:"Related resource",id:"related-resource",level:3},{value:"Source",id:"source",level:3},{value:"Conforms to",id:"conforms-to",level:3},{value:"Has version",id:"has-version",level:3},{value:"Is version of",id:"is-version-of",level:3},{value:"Alternative ID",id:"alternative-id",level:3},{value:"Provenance",id:"provenance",level:3},{value:"Link to Geoserver",id:"link-to-geoserver",level:3},{value:"Save",id:"save",level:2}],u={toc:c};function h(e){var t=e.components,s=(0,n.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Adding a dataset represents the first step in adding a new data entry. The second step is ",(0,o.kt)("a",{parentName:"p",href:"datasets_AddingDatasources"},"adding a resource")),(0,o.kt)("p",null,"Go to the 'DATASETS' tab. When you are authorized to create datasets, you will see a button 'Add dataset' right above the search bar. By clicking on the button you start adding a dataset."),(0,o.kt)("h2",{id:"dataplatform-metadata-schema"},"DataPlatform metadata schema"),(0,o.kt)("p",null,"DataPlatform supports multiple metadata schemas. What fields are present in the metadata schema is controlled using JSON configuration files. The metadata schema consists of a number of building blocks. These building blocks can be combined to create a complete schema. Since DataPlatform has to be able to be part of a federative system of metadata catalogues, the DataPlatform metadata should adhere to some form of standard, preferably a country specific DCAT application profile."),(0,o.kt)("p",null,"Setting up the metadata schema for DataPlatform is done by Civity."),(0,o.kt)("h3",{id:"building-blocks"},"Building blocks"),(0,o.kt)("h4",{id:"ckan"},"CKAN"),(0,o.kt)("p",null,"The first (and only mandatory building block) contains the fields required by CKAN. These include for example a title, description, keywords and a license."),(0,o.kt)("h4",{id:"dcat"},"DCAT"),(0,o.kt)("p",null,"The second important building block contains the DCAT fields. Currently, this building block is by far the biggest building block, defining more fields than any other building block. Different DCAT application profiles which can be implemented in DataPlatform have been created for different countries. Currently, ",(0,o.kt)("a",{href:"https://docs.dataportal.se/dcat/en/",target:"_blank",rel:"noreferrer noopener"},"DCAT-AP-SE (Sweden)")," and ",(0,o.kt)("a",{href:"https://dcat-ap-donl.readthedocs.io/en/latest/",target:"_blank",rel:"noreferrer noopener"},"DCAT-AP-DONL (the Netherlands)")," are available."),(0,o.kt)("h4",{id:"ngr"},"NGR"),(0,o.kt)("p",null,"For Dutch customers, a building block to collect the information required by the Nationaal Georegister (NGR) is present."),(0,o.kt)("h2",{id:"overview-of-metadata-fields"},"Overview of metadata fields"),(0,o.kt)("p",null,"Within the DataPlatform metadata schema, there are a lot of metadata fields that can be filled in. Fields with an asterisk are required to be filled in. Below you will find an overview of all metadata fields for our DataPlatform metadata schema."),(0,o.kt)("img",{class:"imageStyle",alt:"image: Adding Datasets",src:a(29e3).Z}),(0,o.kt)("h3",{id:"title-and-url"},"Title and URL"),(0,o.kt)("p",null,"The title you choose will be rendered as part of the dataset\u2019s URL. The URL is generated in the following template: ",(0,o.kt)("inlineCode",{parentName:"p"},"{dataplatform_instance_url}/dataset/{dataset_id}"),". When the title is generated into a URL, capital letters will be converted to small letters and spaces will be replaced by hyphens ( - )."),(0,o.kt)("p",null,"A title is a unique identifier \u2013 it must be short and specific. For example, \u201c",(0,o.kt)("strong",{parentName:"p"},"Sport Events 2016 Utrecht"),"\u201d is much more specific than \u201c",(0,o.kt)("strong",{parentName:"p"},"Sporting Events"),".\u201d For best results, specify the location of the dataset inside the title, as this will allow users to better find your dataset on ",(0,o.kt)("a",{href:"https://www.dataplatform.nl",target:"_blank",rel:"noreferrer noopener"},"Dataplatform"),"."),(0,o.kt)("p",null,"A good naming guideline to follow when creating a title:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"root_category - subject - location:year - version:number\n")),(0,o.kt)("p",null,"An example using our naming guideline:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"Sport - Sport Events - Utrecht 2019 - Version 1\n")),(0,o.kt)("img",{class:"imageStyle shadowing",alt:"SCREENCAST: adding a title",src:a(25048).Z}),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"This field represents an overview of your dataset. Your description should answer the following questions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What is the data about?"),(0,o.kt)("li",{parentName:"ul"},"Where does the data come from?"),(0,o.kt)("li",{parentName:"ul"},"What is the quality of the data?"),(0,o.kt)("li",{parentName:"ul"},"Over what timeframe or period was the data recorded?")),(0,o.kt)("p",null,"You may use ",(0,o.kt)("a",{href:"https://www.markdownguide.org/basic-syntax",target:"_blank",rel:"noreferrer noopener"},"markdown formatting")," in the description field. This allows you to utilize headers, lists, ",(0,o.kt)("strong",{parentName:"p"},"bold"),", and ",(0,o.kt)("em",{parentName:"p"},"italics.")),(0,o.kt)("p",null,"For example, the following raw markdown:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"* **Description:** Sporting Events Utrecht\n* **Source:** Permits Department\n* **Target:** Providing insights into events from the municipality\n* **Limitations:** This dataset is not to be used for legal purposes\n* **Possibilities:** This dataset may be used for insight into locations on a map\n* *Coordinate System:* *WGS84*\n")),(0,o.kt)("p",null,"Will be rendered as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Description:")," Sporting Events Utrecht"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Source:")," Permits Department"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Target:")," Providing insights into events from the municipality"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Limitations:")," This dataset is not to be used for legal purposes"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Possibilities:")," This dataset may be used for insight into locations on a map"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Coordinate System:")," ",(0,o.kt)("em",{parentName:"li"},"WGS84"))),(0,o.kt)("h3",{id:"organization"},"Organization"),(0,o.kt)("p",null,"If you are part of an organization, you may only add and manage datasets and resources that are connected to that organization. this field is filled in automatically."),(0,o.kt)("h3",{id:"visibility"},"Visibility"),(0,o.kt)("p",null,"In DataPlatform, there are two types of visibility options: 'Private' and 'Public'. Datasets set as 'Private' can only be viewed within DataPlatform by users with appropriate organizational rights. In addition, the dataset is not visible on the Open Data Portal."),(0,o.kt)("p",null,"The visibility status of your dataset is indicated by a label in the top-right corner."),(0,o.kt)("img",{class:"imageStyle",alt:"image: Dataset - Private Flag",src:a(22581).Z}),(0,o.kt)("h3",{id:"license"},"License"),(0,o.kt)("p",null,"Licenses dictate how your dataset may be used. You can find information about open data licenses at ",(0,o.kt)("a",{href:"http://opendefinition.org/licenses/",target:"_blank",rel:"noreferrer noopener"},"Open Definition")),(0,o.kt)("p",null,"Licenses are selected by clicking on the dropdown box; you must select an option."),(0,o.kt)("p",null,"The default license for open data is \u201cCreative Commons CC Zero.\u201d This means that the dataset may be used without limitations. The \u201cCreative Commons Attribution\u201d license allows users to freely use your data, but they must reference the source of the data."),(0,o.kt)("h3",{id:"tags"},"Tags"),(0,o.kt)("p",null,"It is advisable to enter tags that do not appear in the description or title of your dataset. DataPlatform already indexes keywords in the Title and Description fields."),(0,o.kt)("p",null,"Tags influence search terms. Utilizing tags will make your datasets easier to find. Entering the first few letters of your intended tag will make DataPlatform search for the closest existing match \u2013 if it matches, click on the tag in the dropdown list."),(0,o.kt)("p",null,"If your intended tag does not match any existing entries, complete the entire word, then hit the ",(0,o.kt)("em",{parentName:"p"},"return")," key. Once your new tag has been entered, it is now possible to use this as an existing tag.\nIf you select the wrong tag, you may remove it by click on the cross \u201cX\u201d in front of the word."),(0,o.kt)("img",{class:"imageStyle shadowing",alt:"SCREENCAST: adding tags",src:a(12064).Z}),(0,o.kt)("h3",{id:"theme"},"Theme"),(0,o.kt)("p",null,"Themes are based on the corresponding DCAT value lists."),(0,o.kt)("h3",{id:"publisher"},"Publisher"),(0,o.kt)("p",null,"Entity responsible for maintenance and publication of the dataset."),(0,o.kt)("h3",{id:"type-of-publisher"},"Type of publisher"),(0,o.kt)("p",null,"Based on DCAT value list."),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"Language of the data. Dropdown menu with values Swedish and English."),(0,o.kt)("h3",{id:"landing-page"},"Landing Page"),(0,o.kt)("p",null,"Webpage that provides additional information about the dataset, its metadata or from the supplying organization."),(0,o.kt)("h3",{id:"contact-point-type"},"Contact point type"),(0,o.kt)("p",null,"This property tells whether the contact point corresponds to an Individual or an Organisation."),(0,o.kt)("h3",{id:"contact-point-name"},"Contact point name"),(0,o.kt)("p",null,"Name of the contact point."),(0,o.kt)("h3",{id:"contact-point-email"},"Contact point email"),(0,o.kt)("p",null,"Email of the contact point."),(0,o.kt)("h3",{id:"contact-point-phone"},"Contact point phone"),(0,o.kt)("p",null,"Phone number of the contact point."),(0,o.kt)("h3",{id:"contact-point-address"},"Contact point address"),(0,o.kt)("p",null,"Address of the contact point."),(0,o.kt)("h3",{id:"spatial"},"Spatial"),(0,o.kt)("p",null,"The schemes of the spatial value."),(0,o.kt)("h3",{id:"temporal-start"},"Temporal start"),(0,o.kt)("p",null,"A point in time, together with temporal_end it describes a period in time."),(0,o.kt)("h3",{id:"temporal-end"},"Temporal end"),(0,o.kt)("p",null,"A point in time, together with temporal_start it describes a period in time."),(0,o.kt)("h3",{id:"access-rights"},"Access rights"),(0,o.kt)("p",null,"The level of openness of the dataset. Values are Public, Non Public, and Restricted"),(0,o.kt)("h3",{id:"issued"},"Issued"),(0,o.kt)("p",null,"Date on which the dataset was published"),(0,o.kt)("h3",{id:"version"},"Version"),(0,o.kt)("p",null,"Version number. Should be a numeric value"),(0,o.kt)("h3",{id:"version-notes"},"Version Notes"),(0,o.kt)("p",null,"Description of changes compared to previous version."),(0,o.kt)("h3",{id:"frequency"},"Frequency"),(0,o.kt)("p",null,"Frequency of change datasource. Based on DCAT value list."),(0,o.kt)("h3",{id:"related-resource"},"Related resource"),(0,o.kt)("p",null,"Reference to a any kind of related resource"),(0,o.kt)("h3",{id:"source"},"Source"),(0,o.kt)("p",null,"Reference to another dataset."),(0,o.kt)("h3",{id:"conforms-to"},"Conforms to"),(0,o.kt)("p",null,"URL to established schema to which distribution conforms."),(0,o.kt)("h3",{id:"has-version"},"Has version"),(0,o.kt)("p",null,"Refers to a related Dataset URL that is a version, edition, or adaptation of the described Dataset."),(0,o.kt)("h3",{id:"is-version-of"},"Is version of"),(0,o.kt)("p",null,"Refers to a related Dataset URL of which the described Dataset is a version, edition, or adaptation."),(0,o.kt)("h3",{id:"alternative-id"},"Alternative ID"),(0,o.kt)("p",null,"The alternative ID can be found in the URL of the dataset; every data set and data source has a unique ID."),(0,o.kt)("h3",{id:"provenance"},"Provenance"),(0,o.kt)("p",null,"This field contains a statement about the lineage of a Dataset."),(0,o.kt)("h3",{id:"link-to-geoserver"},"Link to Geoserver"),(0,o.kt)("p",null,"If the dataset contains geographic data, it can be published to GeoServer."),(0,o.kt)("h2",{id:"save"},"Save"),(0,o.kt)("p",null,"At the bottom of the metadata schema are two options for saving the created metadata. The options are 'Save without data' or 'Next: Add data'."),(0,o.kt)("p",null,"With the first option, 'Save without data', you save the dataset with only the metadata. No resource with actual data will be included."),(0,o.kt)("p",null,"With the second option, 'Next: Add data', there is the possibility to add resources. This can be done via an external URL or by adding a file."))}h.isMDXComponent=!0},12064:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/dataplatform_user_addingDatasets_AddTags-20215fbc9d4fb1d9a75dde7768521097.gif"},25048:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/dataplatform_user_addingDatasets_AddTitle-09cd8cbbf665aa8599f1d3a6c8f96e1e.gif"},29e3:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/dataplatform_user_addingDatasets_Overview-7aac1274bd90c0d0798b193a4d16d019.png"},22581:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/dataplatform_user_addingDatasets_priveIndicator-ec05365d661a91d4dbaae1d61bbc8528.png"}}]);