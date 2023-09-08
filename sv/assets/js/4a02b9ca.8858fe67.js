"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10378],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"V4.5.9 release notes"},p=void 0,s={unversionedId:"Release_Notes_4.5.9",id:"version-4.7.2/Release_Notes_4.5.9",title:"V4.5.9 release notes",description:"Add accessibility based on Gezond Stedelijk Leven hub",source:"@site/dataplatform_versioned_docs/version-4.7.2/Release_Notes_4.5.9.md",sourceDirName:".",slug:"/Release_Notes_4.5.9",permalink:"/sv/dataplatform/Release_Notes_4.5.9",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/dataplatform_versioned_docs/version-4.7.2/Release_Notes_4.5.9.md",tags:[],version:"4.7.2",lastUpdatedAt:1694174179,formattedLastUpdatedAt:"2023-09-08",frontMatter:{title:"V4.5.9 release notes"}},c={},d=[],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Add accessibility based on Gezond Stedelijk Leven hub"),(0,o.kt)("p",null,"Code specific improvements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Angular: expansion panels header added"),(0,o.kt)("p",{parentName:"li"},"Provides a summary of the panel content.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Angular: added header, footer and main component"),(0,o.kt)("p",{parentName:"li"},"Improve description of components.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added title to the index.html"),(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," needs to have a title in the header. In our case 'DataPlatform portal' to let users know on what website they are."))),(0,o.kt)("p",null,"Visual improvements UI:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added icon to map pop up close button"),(0,o.kt)("p",{parentName:"li"},"After opening the map in full-screen mode, a close button now appears on the top-right.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Removed text background for more contrast"),(0,o.kt)("p",{parentName:"li"},"Contrast between texts and background was too low. The contrast ratio for text should be ",(0,o.kt)("inlineCode",{parentName:"p"},"4.5:1")," for normal text and ",(0,o.kt)("inlineCode",{parentName:"p"},"3:1")," for large text. The contrast is the visual difference between the color of the text and the colors of the background. You can find more details about contrast ",(0,o.kt)("a",{parentName:"p",href:"https://web.accessibility.duke.edu/contrast-ratio/"},"here"),"."))),(0,o.kt)("p",null,"Other:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added developer documentation"),(0,o.kt)("p",{parentName:"li"},"Guidelines on accessibility are now part of developer documentation."))))}m.isMDXComponent=!0}}]);