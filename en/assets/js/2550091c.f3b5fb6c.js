"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70636],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return n?i.createElement(h,r(r({ref:t},d),{},{components:n})):i.createElement(h,r({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],s={id:"toewijzen",title:"Assigning Listings to Themes",sidebar_label:"Assigning Listings to Themes"},l=void 0,c={unversionedId:"toewijzen",id:"version-1.0.1/toewijzen",title:"Assigning Listings to Themes",description:"Assigning Listings to Themes",source:"@site/i18n/en/docusaurus-plugin-content-docs-datacatalogus/version-1.0.1/datacatalogus_thema copy.md",sourceDirName:".",slug:"/toewijzen",permalink:"/en/datacatalogus/toewijzen",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/i18n/en/docusaurus-plugin-content-docs-datacatalogus/version-1.0.1/datacatalogus_thema copy.md",tags:[],version:"1.0.1",lastUpdatedAt:1660564519,formattedLastUpdatedAt:"8/15/2022",frontMatter:{id:"toewijzen",title:"Assigning Listings to Themes",sidebar_label:"Assigning Listings to Themes"},sidebar:"datacatalogus",previous:{title:"Themes as Groups",permalink:"/en/datacatalogus/ckan_groepen"},next:{title:"How to Login?",permalink:"/en/datacatalogus/login"}},d={},p=[{value:"Assigning Listings to Themes",id:"assigning-listings-to-themes",level:2}],m={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"assigning-listings-to-themes"},"Assigning Listings to Themes"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Only authorized users will be able to select themes")),(0,o.kt)("p",null,"Assigning a theme can be done via two paths:"),(0,o.kt)("p",null,"Path 1 (editors/admins):"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select a listing. Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Manage")," to go to the metadata edit screen."),(0,o.kt)("li",{parentName:"ol"},"Adjust the metadata field ",(0,o.kt)("inlineCode",{parentName:"li"},"Theme")," to the correct theme."),(0,o.kt)("li",{parentName:"ol"},"Click on the THEMES tab on top of the page. The listing will now be listed under the selected theme.")),(0,o.kt)("p",null,"Path 2 (sysadmin only):"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select a listing. Click on the tab ",(0,o.kt)("inlineCode",{parentName:"li"},"Themes")," which is shown above the title of the listing."),(0,o.kt)("li",{parentName:"ol"},"Select the desired theme and click on the blue ",(0,o.kt)("inlineCode",{parentName:"li"},"Add to theme")," button."),(0,o.kt)("li",{parentName:"ol"},"Click on the THEMES tab on top of the page. The listing will now be listed under the selected theme.")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"With Path 2 you can specify multiple themes as a sysadmin. Under the THEMES tab you will see that the listing will then show up under multiple themes. However, via Path 1 you can only specify one theme. Consequently, when editing and saving other metadata, this will overwrite the multiple themes to the one that is specified in the metadata. In general, we advise sysadmins to not be involved in editing themes / listings."))))}u.isMDXComponent=!0}}]);