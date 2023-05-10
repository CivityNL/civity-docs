"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95081],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5855:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],l={id:"toevoegen_overig",title:"Add Listings",sidebar_label:"Add Listings"},s=void 0,p={unversionedId:"toevoegen_overig",id:"version-1.0.1/toevoegen_overig",title:"Add Listings",description:"Options to add listing",source:"@site/i18n/en/docusaurus-plugin-content-docs-datacatalogus/version-1.0.1/datacatalogus_vermeldingen copy 6.md",sourceDirName:".",slug:"/toevoegen_overig",permalink:"/en/datacatalogus/toevoegen_overig",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/i18n/en/docusaurus-plugin-content-docs-datacatalogus/version-1.0.1/datacatalogus_vermeldingen copy 6.md",tags:[],version:"1.0.1",lastUpdatedAt:1660315366,formattedLastUpdatedAt:"8/12/2022",frontMatter:{id:"toevoegen_overig",title:"Add Listings",sidebar_label:"Add Listings"},sidebar:"datacatalogus",previous:{title:"View Listings",permalink:"/en/datacatalogus/bekijken"},next:{title:"Harvesting Resources",permalink:"/en/datacatalogus/toevoegen_harvest"}},c={},d=[{value:"Options to add listing",id:"options-to-add-listing",level:2},{value:"Harvest",id:"harvest",level:3},{value:"API upload",id:"api-upload",level:3},{value:"Manual upload",id:"manual-upload",level:3},{value:"Real time data",id:"real-time-data",level:3},{value:"Link to original data",id:"link-to-original-data",level:2},{value:"Example 1: ArcGIS Online viewer",id:"example-1-arcgis-online-viewer",level:3},{value:"Example 2: GeoServer",id:"example-2-geoserver",level:3}],u={toc:d};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"options-to-add-listing"},"Options to add listing"),(0,i.kt)("p",null,"DataCatalog supports the following methods of adding listings and resources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Harvesting"),(0,i.kt)("li",{parentName:"ul"},"API upload"),(0,i.kt)("li",{parentName:"ul"},"Manual upload"),(0,i.kt)("li",{parentName:"ul"},"IoT data")),(0,i.kt)("h3",{id:"harvest"},"Harvest"),(0,i.kt)("p",null,"Configuring a harvester takes place in a number of steps. All of these steps are performed by an administrator."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The administrator logs in"),(0,i.kt)("li",{parentName:"ol"},"The administrator defines harvester"),(0,i.kt)("li",{parentName:"ol"},"The administrator allows harvester to run manually for verification"),(0,i.kt)("li",{parentName:"ol"},"If the harvester's test is successful, the administrator sets a schedule"),(0,i.kt)("li",{parentName:"ol"},"Depending on the settings, the datasets are periodically updated automatically.")),(0,i.kt)("h3",{id:"api-upload"},"API upload"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The administrator logs in."),(0,i.kt)("li",{parentName:"ol"},"Looks up documentation (official CKAN API documentation: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.ckan.org/en/latest/api/index.html"},"https://docs.ckan.org/en/latest/api/index.html"),")"),(0,i.kt)("li",{parentName:"ol"},"Looks up API key (possibly create automation user with more limited rights with your own API key)"),(0,i.kt)("li",{parentName:"ol"},"Script to upload periodically or large amount of metadata via API. Or, for example, with FME software.")),(0,i.kt)("h3",{id:"manual-upload"},"Manual upload"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The administrator logs in."),(0,i.kt)("li",{parentName:"ol"},"The administrator creates a new entry (called a Package in CKAN)."),(0,i.kt)("li",{parentName:"ol"},"The administrator adds the desired datasources (called a Resources in CKAN) via the upload button.")),(0,i.kt)("h3",{id:"real-time-data"},"Real time data"),(0,i.kt)("p",null,"DataCatalog also offers the possibility to publish real-time data. Please contact Civity first."),(0,i.kt)("h2",{id:"link-to-original-data"},"Link to original data"),(0,i.kt)("p",null,"Instead of uploading actual data as a resource, there's also the option to create a resource that provides a link to the original data."),(0,i.kt)("p",null,"The listing may include a link as an attachment that the user can click on. Information can also be included that the user needs to access the data in another application (e.g. a desktop application)"),(0,i.kt)("h3",{id:"example-1-arcgis-online-viewer"},"Example 1: ArcGIS Online viewer"),(0,i.kt)("p",null,"Link to the viewer. Via query string parameters, the viewer can be started with certain specific options. Documentation about this can be found here: ",(0,i.kt)("a",{parentName:"p",href:"https://doc.arcgis.com/en/arcgis-online/reference/use-url-parameters.htm"},"https://doc.arcgis.com/en/arcgis-online/reference/use-url-parameters.htm"),"."),(0,i.kt)("p",null,"An example of linking to a viewer: ",(0,i.kt)("a",{parentName:"p",href:"https://www.arcgis.com/home/webmap/viewer.html?basemapUrl=http%3A%2F%2Fservices.arcgisonline.com%2FArcGIS%2Frest%2Fservices%2FOcean_Basemap%2FMapServer&url=http%3A%2F%2Fservices5.arcgis.com%2F9cBkZtsx7PSOoaCF%2Farcgis%2Frest%2Fservices%2FMaryland_Shoals%2FFeatureServer%2F0"},"https://www.arcgis.com/home/webmap/viewer.html?basemapUrl=http%3A%2F%2Fservices.arcgisonline.com%2FArcGIS%2Frest%2Fservices%2FOcean_Basemap%2FMapServer&url=http%3A%2F%2Fservices5.arcgis.com%2F9cBkZtsx7PSOoaCF%2Farcgis%2Frest%2Fservices%2FMaryland_Shoals%2FFeatureServer%2F0"),"."),(0,i.kt)("p",null,"The final URL looks pretty complex. However, this link is automatically generated by the harvester and you do not have to compose it yourself."),(0,i.kt)("h3",{id:"example-2-geoserver"},"Example 2: GeoServer"),(0,i.kt)("p",null,'Convention: online resource URL, #, name of the layer. For example, "',(0,i.kt)("a",{parentName:"p",href:"https://portal.prvlimburg.nl/geodata/POL/wms"},"https://portal.prvlimburg.nl/geodata/POL/wms"),'? # POL2014_NAT_LANDSCHAP_ZL_V_inspire". This is the information needed to access this layer in other applications such as ArcGIS for Desktop, QGIS etcetera. Civity can integrate a viewer that uses the same convention. In addition, there is the possibility to generate a sample request. It should be noted that this will not always result in a meaningful image (for example, in the case of scale-dependent rendering).'))}m.isMDXComponent=!0}}]);