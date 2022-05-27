"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1373],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(a),g=o,m=p["".concat(l,".").concat(g)]||p[g]||c[g]||n;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<n;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},56699:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=a(87462),o=a(63366),n=(a(67294),a(3905)),i=["components"],s={id:"user_LoginDashboard",title:"Login and Dashboard",sidebar_label:"Login and Dashboard"},l=void 0,d={unversionedId:"user_LoginDashboard",id:"user_LoginDashboard",title:"Login and Dashboard",description:"In order to add, edit or delete datasets, you need be logged in. Your login permissions are based configured at the organization-level; you have the possibility to be a member in one or more organizations. This allows you to manage multiple datasets across different organizations. Each organization also contains different user permission levels; roles.",source:"@site/../dataplatform/dataplatform_USERS_LoginDashboard.md",sourceDirName:".",slug:"/user_LoginDashboard",permalink:"/nl/dataplatform/next/user_LoginDashboard",draft:!1,tags:[],version:"current",lastUpdatedBy:"isabeladowsley",lastUpdatedAt:1653404262,formattedLastUpdatedAt:"24-5-2022",frontMatter:{id:"user_LoginDashboard",title:"Login and Dashboard",sidebar_label:"Login and Dashboard"},sidebar:"defaultSidebar",previous:{title:"Keycloak Integration",permalink:"/nl/dataplatform/next/user_KeycloakIntegration"},next:{title:"Personal Profile",permalink:"/nl/dataplatform/next/user_PersonalProfile"}},u={},c=[{value:"Login",id:"login",level:2},{value:"Dashboard",id:"dashboard",level:2}],p={toc:c};function g(e){var t=e.components,s=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In order to add, edit or delete datasets, you need be logged in. Your login permissions are based configured at the organization-level; you have the possibility to be a member in one or more organizations. This allows you to manage multiple datasets across different organizations. Each organization also contains different user permission levels; roles. "),(0,n.kt)("p",null,"For more information about user permissions, see ",(0,n.kt)("a",{parentName:"p",href:"user_UserRoles"},"User Roles"),"."),(0,n.kt)("h2",{id:"login"},"Login"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Your username is found in your email. It follows the format:  ",(0,n.kt)("inlineCode",{parentName:"p"},"[user]-[number]"))),(0,n.kt)("p",null,"Login credentials are controlled on an invite only basis; access can be granted to CKAN by your organization's administrator. Once access has been granted, you will be required to confirm your email; confirming your email will generate a password."),(0,n.kt)("p",null,"The login button is located at the top of the page on the right side. Here you will login with your username and password."),(0,n.kt)("h2",{id:"dashboard"},"Dashboard"),(0,n.kt)("p",null,"When you are logged in your name will appear at top of the page; you are directed to your dashboard. The dashboard allows you to view the latest datasets that you have previously worked on."),(0,n.kt)("img",{class:"imageStyle",target:"_blank",alt:"image: My Dashboard",src:a(14129).Z}),(0,n.kt)("p",null,"Clicking on \u201cMy Organization\u201d will allow you to see the datasets owned by your organization(s). If you possess the correct credentials, you can then add, edit, or delete datasets."),(0,n.kt)("img",{class:"imageStyle",target:"_blank",alt:"image: My Dashboard - My Organizations",src:a(98380).Z}))}g.isMDXComponent=!0},14129:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dataplatform_user_UserManagement_MyDashboard-eb950bd81225df8a20841b3f735eb7ba.png"},98380:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dataplatform_user_UserManagement_MyOrganization-cfc1815069dd230e5f7af868e6ee75de.png"}}]);