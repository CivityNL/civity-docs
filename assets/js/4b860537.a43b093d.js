"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81499],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,u=m["".concat(l,".").concat(d)]||m[d]||h[d]||o;return a?r.createElement(u,i(i({ref:t},c),{},{components:a})):r.createElement(u,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},31980:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>h});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],s={title:"Release Notes v8.0.0"},l=void 0,p={unversionedId:"v8.0.0",id:"v8.0.0",title:"Release Notes v8.0.0",description:"A fixed size header.* No matter how wide or narrow the screen is, the header remains the same size. This prevents the header from overlapping important content such as the location search bar or parts of text.",source:"@site/../slimmelden/v8.0.0.md",sourceDirName:".",slug:"/v8.0.0",permalink:"/slimmelden/next/v8.0.0",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/../slimmelden/v8.0.0.md",tags:[],version:"current",lastUpdatedAt:1694174179,formattedLastUpdatedAt:"8-9-2023",frontMatter:{title:"Release Notes v8.0.0"},sidebar:"defaultSidebar",previous:{title:"Updaten dataset",permalink:"/slimmelden/next/slimmelden_updaten_data"},next:{title:"Release Notes v8.0.1",permalink:"/slimmelden/next/v8.0.1"}},c={},h=[],m={toc:h};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"A fixed size header.")," No matter how wide or narrow the screen is, the header remains the same size. This prevents the header from overlapping important content such as the location search bar or parts of text.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Removes clickable links in header step 1,2,3.")," Previously it was possible to move from step 2 (report page) to step 1 (map). Step 3 to 2 was not possible since page 3 is the thank you page after you've send a report and it would not make sence to return to the create report page after. Clicking on the logo also returns the user to either the home page or the map page if the user checked to skip the home page. Therefor it makes sense to get rid of using the step 1,2,3 pages. Additionally the existance of the step 1,2,3 links gave us unwanted accessibility problems that we prefered to avoid.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Contrast button in header.")," Add a contrast button in the header. This switches the main colors to a high contrast black and white for color blind users.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Larger municipality logo.")," Do I need to say more?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Skip links.")," Every page has its own set of skip links. Which can be used for accessibility and to squickly browse the page. The skip links let the user skip to the most important parts of the page by 'tabbing' through the skip link options.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Auto accessibility rules for home/help/thank-you pages.")," Changed the slimmelden-config files. Creating information an ordered fashion now automatically creates related accessibility features. Such as paragraphs with assossiated titles and automated skip-links.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Higher contrast on selected buttons and other inputs.")," Buttons and other inputs such as checkboxes or textfield now have a higher contrast when they are selected. This distinction makes it more clear for people with a contrast disability when a field is selected.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Accessibility naming and auto focus.")," Most of the components on slim melden now has a title and a role refered to them, as well as an aria-label which makes it easier for a person with disabilities to navigate through the app. For people using keyboard only, selecting button or input fields that open new menu's or change parts of the page else where will now automatically get a focus or be mentioned using aria-live. For example, searching a street name will now automatically open the menu to make a report on that location and switch it's focus to the menu.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Map objects are more accurately selected.")," When selecting an object on the map, the object with it's center closest to the cursors click will be selected. This helps with selecting object when they overlay each other.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"iOS and android whitelisting support.")," Previous android and iOS apps had their API call origin set on localhost (the mobile phone). New security rules no longer allow this. Stepping away from cordova towards capacitor allows us to bypass that origin issue.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Opening a link on iOS and android.")," Previously when clicking a link on the iOS and android app the selected site would open from inside the app itself. This was especially troublesome on iOS since there isn't a 'previous' button on most iOS devices. Now links automatically open inside your prefered browser while keeping the app open on the background ready for you to browse further.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Datasets have their own open/progress icons.")," When making a report on an already existing object (dataset), for example a lamp post, the object will keep its icon while indicating that a report has been made on the icon.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Up to date met angular en ionic.")," The environment is up to date with the latest version of angular and ionic. Because of this we can release our app for the latest versions of android and ios where we would be other wise restricted."))))}d.isMDXComponent=!0}}]);