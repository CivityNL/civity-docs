"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81911],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(r),p=n,g=u["".concat(l,".").concat(p)]||u[p]||m[p]||s;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<s;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},67708:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var a=r(87462),n=r(63366),s=(r(67294),r(3905)),i=["components"],o={id:"user_AddingUsers",title:"Adding Users",sidebar_label:"Adding Users"},l=void 0,d={unversionedId:"user_AddingUsers",id:"version-4.5.9/user_AddingUsers",title:"Adding Users",description:"Only organization administrators may create new users",source:"@site/dataplatform_versioned_docs/version-4.5.9/dataplatform_USERS_AddingUsers.md",sourceDirName:".",slug:"/user_AddingUsers",permalink:"/en/dataplatform/4.5.9/user_AddingUsers",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/dataplatform_versioned_docs/version-4.5.9/dataplatform_USERS_AddingUsers.md",tags:[],version:"4.5.9",lastUpdatedAt:1671712963,formattedLastUpdatedAt:"12/22/2022",frontMatter:{id:"user_AddingUsers",title:"Adding Users",sidebar_label:"Adding Users"},sidebar:"dataplatform",previous:{title:"User Roles",permalink:"/en/dataplatform/4.5.9/user_UserRoles"},next:{title:"Editing Users",permalink:"/en/dataplatform/4.5.9/user_EditingUsers"}},c={},m=[{value:"Create a New User",id:"create-a-new-user",level:2}],u={toc:m};function p(e){var t=e.components,o=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Only organization administrators may create new users"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Ensure you set the correct role for the user. For more information on roles, see ",(0,s.kt)("a",{parentName:"p",href:"user_UserRoles"},"User Roles"))),(0,s.kt)("h2",{id:"create-a-new-user"},"Create a New User"),(0,s.kt)("p",null,'From the organization\'s dataset page, select the "Manage" button, followed by the "Members" tab. Select the \u201cAdd Member\u201d button.'),(0,s.kt)("img",{class:"imageStyle",target:"_blank",alt:"image: Organization screen - Manage Button",src:r(81234).Z}),(0,s.kt)("img",{class:"imageStyle",target:"_blank",alt:"image: Organization screen - Manage Button",src:r(85451).Z}),(0,s.kt)("p",null,"Existing users are users who are already members in another organization. New users are users who are not members of any existing organization. To initiate setup of a new user, simply fill in their email address."),(0,s.kt)("img",{class:"imageStyle",target:"_blank",alt:"image: Organization screen - Manage Button",src:r(55868).Z}),(0,s.kt)("p",null,"When you click \u201cAdd Member,\u201d the new member will receive an automated email to the address entered. The username and user number will be generated from this email adress."),(0,s.kt)("p",null,'The new user\'s state will stay as "pending," until they confirm their email address.'),(0,s.kt)("img",{class:"imageStyle",target:"_blank",alt:"image: member status pending screen",src:r(83936).Z}))}p.isMDXComponent=!0},85451:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/dataplatform_user_UserManagement_ManageUser_AddMember-fe8024df88b2198ce5b8161b4f9af6c7.png"},55868:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/dataplatform_user_UserManagement_ManageUser_AddMemberRole-c228bee777819b2917b96c49d7e919c4.png"},81234:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/dataplatform_user_UserManagement_ManageUser_BrowserShell-8fb8fe193ea0a115aee3e1a4649d41a1.png"},83936:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/dataplatform_user_UserManagement_ManageUser_Pending_ALT-bd272bc037ffc798d97f742b885d1648.png"}}]);