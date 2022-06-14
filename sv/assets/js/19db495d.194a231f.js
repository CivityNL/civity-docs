"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8160],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(r),c=a,f=m["".concat(s,".").concat(c)]||m[c]||p[c]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42085:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"user_UserRoles",title:"User Roles",sidebar_label:"User Roles"},s=void 0,d={unversionedId:"user_UserRoles",id:"version-4.0.0/user_UserRoles",title:"User Roles",description:"You must be logged in to add, edit, or delete datasets.",source:"@site/dataplatform_versioned_docs/version-4.0.0/dataplatform_USERS_UserRoles.md",sourceDirName:".",slug:"/user_UserRoles",permalink:"/sv/dataplatform/4.0.0/user_UserRoles",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/dataplatform_versioned_docs/version-4.0.0/dataplatform_USERS_UserRoles.md",tags:[],version:"4.0.0",lastUpdatedBy:"mathieu1989",lastUpdatedAt:1655216981,formattedLastUpdatedAt:"2022-06-14",frontMatter:{id:"user_UserRoles",title:"User Roles",sidebar_label:"User Roles"},sidebar:"dataplatform",previous:{title:"Overview",permalink:"/sv/dataplatform/4.0.0/ckan_Overview"},next:{title:"Adding Users",permalink:"/sv/dataplatform/4.0.0/user_AddingUsers"}},u={},p=[{value:"Role Permissions",id:"role-permissions",level:2}],m={toc:p};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You must be logged in to add, edit, or delete datasets.")),(0,o.kt)("p",null,"Your login permissions are configured at the organization-level; you have the possibility to be a member in one or more organizations. This allows you to manage multiple datasets across different organizations. Each organization also contains different user permission levels; roles. "),(0,o.kt)("h2",{id:"role-permissions"},"Role Permissions"),(0,o.kt)("p",null,"Roles set the permission levels that an organization's users possess; different roles grant different privileges. Each organization is currently limited to three roles."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Role"),(0,o.kt)("th",{parentName:"tr",align:null},"Permissions"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Member"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("ul",null,(0,o.kt)("li",null,"View the organization\u2019s private datasets")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Editor"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("ul",null,(0,o.kt)("li",null,"View the organization\u2019s private datasets"),(0,o.kt)("li",null,"Add new datasets to the organization"),(0,o.kt)("li",null,"Edit or delete any of the organization\u2019s datasets")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Admin"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("ul",null,(0,o.kt)("li",null,"View the organization\u2019s private datasets"),(0,o.kt)("li",null,"Add new datasets to the organization"),(0,o.kt)("li",null,"Edit or delete any of the organization\u2019s datasets"),(0,o.kt)("li",null,"Add users to the organization, and choose whether to make the new user a member, editor, or admin"),(0,o.kt)("li",null,"Change the role of any user in the organization, including other admin users"),(0,o.kt)("li",null,"Remove members, editors, or other admins from the organization"),(0,o.kt)("li",null,"Edit the organization itself (for example: change the organization\u2019s title, description, or imageStyle) "),(0,o.kt)("li",null,"Delete the organization")))))))}c.isMDXComponent=!0}}]);