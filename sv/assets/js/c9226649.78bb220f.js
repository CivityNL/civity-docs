"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8357],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),g=i,m=d["".concat(o,".").concat(g)]||d[g]||u[g]||r;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4032:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),l=["components"],s={id:"developers_Visualisation",title:"Using Visualisation Tools",sidebar_label:"Using Visualisation Tools"},o=void 0,p={unversionedId:"developers_Visualisation",id:"developers_Visualisation",title:"Using Visualisation Tools",description:"Creating Maps Using QGIS",source:"@site/../dataplatform/dataplatform_DEVELOPERS_Visualisation.md",sourceDirName:".",slug:"/developers_Visualisation",permalink:"/civity-docs/sv/dataplatform/next/developers_Visualisation",draft:!1,tags:[],version:"current",lastUpdatedBy:"isabeladowsley",lastUpdatedAt:1653404262,formattedLastUpdatedAt:"2022-05-24",frontMatter:{id:"developers_Visualisation",title:"Using Visualisation Tools",sidebar_label:"Using Visualisation Tools"},sidebar:"defaultSidebar",previous:{title:"CKAN API",permalink:"/civity-docs/sv/dataplatform/next/developers_CKANApi"},next:{title:"Geoserver Integration",permalink:"/civity-docs/sv/dataplatform/next/geoserver_GeoserverIntegration"}},c={},u=[{value:"Creating Maps Using QGIS",id:"creating-maps-using-qgis",level:2},{value:"1. Install plugin",id:"1-install-plugin",level:3},{value:"2. Configuring plugin",id:"2-configuring-plugin",level:3},{value:"3. Create visualisation",id:"3-create-visualisation",level:3}],d={toc:u};function g(e){var t=e.components,s=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"creating-maps-using-qgis"},"Creating Maps Using QGIS"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Open source software QGIS can be used to visualize (geographical) datasets ")),(0,r.kt)("p",null,"To be able to create visualisations in QGIS, you need to install the ",(0,r.kt)("strong",{parentName:"p"},"CKAN-Browser")," plugin in QGIS. This plugin will give you access to all datasets that are in the CKAN ",(0,r.kt)("a",{parentName:"p",href:"datasets_AddingDatasources#datastore"},"DataStore"),". Below we will provide the necessary steps to start using this plugin in QGIS."),(0,r.kt)("h3",{id:"1-install-plugin"},"1. Install plugin"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note")),": This tutorial is based on QGIS version 3.8.3. Newer versions might look different from the screenshots below.")),(0,r.kt)("p",null,"The first step is to install the actual plugin. Click on the ",(0,r.kt)("em",{parentName:"p"},"Plugins")," tab and then go to ",(0,r.kt)("em",{parentName:"p"},"Manage and Install Plugins...")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Install plugins",src:a(89615).Z,width:"541",height:"94"})),(0,r.kt)("p",null,"Now search for the CKAN-Browser plugin and click ",(0,r.kt)("em",{parentName:"p"},"Install plugin")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Install CKAN-Browser",src:a(92598).Z,width:"1316",height:"499"})),(0,r.kt)("h3",{id:"2-configuring-plugin"},"2. Configuring plugin"),(0,r.kt)("p",null,"After installing the plugin correctly, you will now see two icons in QGIS. Click the left icon as shown in the screenshot below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CKAN plugin",src:a(40126).Z,width:"108",height:"43"})),(0,r.kt)("p",null,"To be able to view the Dataplatform datasets, you need to add the desired CKAN server.\nThis can be configured by clicking on ",(0,r.kt)("em",{parentName:"p"},"Select CKAN server"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Select server",src:a(69077).Z,width:"795",height:"644"})),(0,r.kt)("p",null,"You are asked to provide the CKAN API endpoint. For the Dutch CKAN Dataplatform this is ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://ckan.dataplatform.nl/api/3/"},"https://ckan.dataplatform.nl/api/3/")),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CKAN server",src:a(73600).Z,width:"773",height:"194"})),(0,r.kt)("p",null,"You should now be able to search for all datasets that are available in the CKAN Datastore."),(0,r.kt)("h3",{id:"3-create-visualisation"},"3. Create visualisation"),(0,r.kt)("p",null,"After finding the desired dataset, select the specific datasource you want to visualize and click ",(0,r.kt)("em",{parentName:"p"},"Load Data"),". "),(0,r.kt)("p",null,"For CSV files you will be asked to select the correct geometry columns and geometry CRS.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add layer",src:a(45039).Z,width:"726",height:"672"})),(0,r.kt)("p",null,"The created data layer can be combined with a map layer such as the open source OpenStreetmap to display the data on a map."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Visualisation",src:a(26149).Z,width:"1519",height:"851"})))}g.isMDXComponent=!0},45039:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Add_layer-e0974f52169eec81d60646d18035ff48.PNG"},40126:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAAArCAIAAAASWfpOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAnjSURBVGhD7Zp5bBTXHcfnPvdee21jG2xM8FGOECgV0IZEpWlTqWrVqq3aQCtVSLQSKmqkqqrStFILLVKUtGrakD+aNk0EAUqII4WjIVwNCrZxAGNjg20Mvq/17uw5O3ff7jw7Y3sAs3ht/vDnj/HX78383vrr3+/33oBRRVGQaUTKq6GaP9y326B65EElSYLSQqzic1DNH85b16F65MHg1wUegvtk4tynwzwunTWYYQecRBD4/RwCF56PpbNmoZxngQUTZwE0lUpBaSG+bIUpHJ0tppiCHm5O7nrTo90MpRBDU9O1lxlHM9e76TQoiuK4j+XCwpjj4PuowwnHx7nv0oA7I8lXa28OBuXnv1OxrjIPjKiaEUkobp4g8HlIiyx7okL9nv3LNkGt8rEgBp62Bj4xiYlAn0XEMB/vCA+MOQ7UUl4fDGcB3jZt6SudwuX2kCipQJ+9Orqy3PvlJ4rqrg129ATByJEL/S8dbj94pjclyZnb55Qsf28utlll9jD7tglSlZ9DERxP5xicTOedqa0jaXDC73CG+0b52lrK78ewGa0OjL3aFfnoyvCJxqFTnw6+cfLW7SHRQCiKpiSc/7ApfvLTse5hcX11/n8bBzX9s1/DnJGliREBczHNGrObeX2roFT52YyP9umYcRBM4bjfwZsO0jN2EAB8uXQzzJJYaT7f2pMYHJOKXTIqDqiR3gAV5pGx270DJXlMMKZWBBBJTr+AKaoOEsR8fA6w+Unq6uqgAqmTTjEbDEMVwmjaR3YP89pWmI+Zuk7PWuoXOohhmRwMPqiDAAJHt6zJb++PG4aex0pLPEmOxniHL7+g0OsPcA6fi8Wl2BChCQrKDQnGQEg+1jDc2h2Bz+ceNJlMQjkOMM564tU0zdRWpHBlxh/c4zWiqZWY+IL0s7c91M2xpIHo2pR9JpODznDvCFdby+TlWR0URRGqcZLLV5mCa78GrpqB9o8m+oLisYt9ywM6iuFFRYvKCp0sTeq6ApJUM/CkpPWNJoKjg2DdkOxkaEo1sOHhkW99wb+2ptiMllNsMsLqmq2D4wCjNDMfdXY3DfqjPKk/jjsI++B0B+9dcWDy0LmeHX9u+Ot7nfs/ulORb2AEuXpFZU2ZB8dQUdbCo/3DAz0JScNQY3GBY2l5BYqRbjJGkyhN4oqqCUmbf1vJBVmW8zgTPrbo7B76tecm+iO0Z7wPcu+9N93Bu2zpkGhSvnorXLnYu7TEXVNC6Qi+ovoxN4fGRDWl6k6e8Pm9RQX5XicNNuSEqNKEUVy6WEdIMRlv7x7OZ6Lm6WcOsDFx06ZNUM0ISz5yf6T//pzZHzGCQAgiL9MHbR2cuN4NF0euqXB29QuRmKRrSmnxIheDxEVN05HKEpeTlORkTAgNpaIDy4pdmqEnJZ3AdK8vgOoqTxoFHtrtdMBYOcbmnKiqKpwEh1g1fS6bDpyGTPKR2gd8rHRTCDgPhvpG2aNHpzqYrnaYgzCcBXPc5Luby6tL2WgkSlJcgZ+NpzRV0ytLnWI8LMuy3+epWl6hScmG+vNlRR6wIYuSxtIEybC6rmlMUUrW40kJxs0lNplYX18PFdgZQULNiAkfWwxuD/X6j6JclRDsATnI5udPreKMAD7eu5wBbT0xinGQuM7zPOh3GEaC4jVUUVYUt9PpcjopkqwoX8JQeOu1S2CvScqIooHPTPldTF+MefFA35/+eQbGyiUPX84TAB9VQUBdZLNOv0zv/h63/8MH7YNW/nP21pun+vrDejimjERENTZwqq4tGNVCwTGHw4lhMBJFUTXVlU1X6imKBB0AjApJTVLRho7kzQGlrrknEyy32Jg4pZyhmhHARwPB8xG5gyisZgK+e/RBICa0Le9f6BwMq1c6I013hE9ahg8fO3/4TMftUWloZESSJr3vYwiqyHJYxPrb6+sunrvRl8RwXIkMLKE6v1jjhTflEpueaC1nsDvD0cnA6amQHl+eECEJ53GamnSiBg/Y5iAMZwFOIEhVMS8lQpqSoCk6kkTqhksd/rKe4QRBc00t1yPRqHnb2FjoncOHCGfxxy2jx68TTUMuHCdITF1bmtr17eU//f6TMG4uscnEjRs3QvVgEB6/XwgTlPMow96/D1q1Lc//cP2/f73xG2t5GuzzYGdx+miKuNAcwt1Lg8HQ6XP/Gxga7usfeGv//pb2niWrn73WOaaQBaSzqMRPD4WSfje7tGxJQSAAw+WS2Spn4KBPCJPAQZrJt54u0w7OuA9aAe8kNEm4OAaleJbBSQzFMUzVkd0HOsof/4qCcL/9w96f//I3CcT7zA9ePPpxv66DhQwSM8oL6e6ou7GP+6TpDlgdhsslNiY2NDRANdPdGc/kIGXr4MTVFLb6LhiX2oaPXU0pKM/RTMBDagZGknhC0ncf6OxFV/1k5++2/2KvFNiy//QdSdXBa4wQV55d6x2NYQkZSWjsgWOXwxFY9TnFpidu2LABTo7/qNOB02lADuYJIYJ0vDvNQfs+aAWGswAnMo8Hx0KxWIRiHTGZcrv45cWcpKTN0nXkYmvkjUMn9h853twVBeuAvToUV7Y9XZDn85w5fZpL3kgMXq5cRDl4DsbNJWgsFoOf2oJUvcYUdNsVU0xBjdZkvpp9kAQOMmwgiyqOx+NQjWNdWlHVF/adH4miJW65L0Isq35cV5XW3riafqFHNTmePgvQPLCbJrFvbsjzOB3/Ovj+lx7Dntm8ARhbWuhmaMqMllNsTATlvPrHO0zNdzTbtsWMiWYfpLJ2EHBvE8EVxAkKCfAm1zUYe+VErLLEXVrAh2JaMApeABFwWgTbzuJCZ0Uh2zUQO98ap6Mte3es9/t9ZpC5IcvdGUXNHLR3cOJqivvqewDu8bs5n9eVFyjQULa5Vzzb2JUIda8pRZ9a4dmyyrOxkhOGut6qvfDBxV5ZJ0TELepzkX1WbHqi9a9zgIajk3H7PKCKCf7INAfv3wetwHAW4MS0KVmMi6HbiBJfGYiTUv+llu5XP+jd+27PK+9cSgQ7NpcJVb6oHGxjU7c0OQmfmSvQ6Pip1Ypc84QpqNbLppiClvgqcJDlCrKr4gmmN5O7LS2mpPMNNxqv9/xq+7MkSVzpGHu5tl8jvQVGx0s7N4NdezQcv3S1LeBhVq+oAu+C4MPAJ3OPTTnPBIJ/13Rw4pNm4eADwTL0155ctWvrUzieXoU0EkSorrv+7cV82EB0MJLvdXz96c+vW7OSJMm5dBCQZSbmjnlcOmuy/H/n3AEXno+lsybLcl7AyoKJs8CCibPAQk+cBdCTJ0/CT21h3fadUM0fjf/4G1SPPGgikYDSgli5Gqr5g73ZBNUjDyoIApQW1BXroJo/iJZGqB557E1c4IFY2J1ngQUTHxoE+T9DQZVJ9wIL7QAAAABJRU5ErkJggg=="},73600:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CKAN_server-68340b5527097e0ad4c90eb95973935f.PNG"},92598:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Install_CKAN-72769c36a4968da6ef4d9abbfa19fa7e.PNG"},89615:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Install_plugins-7339675b2e3819a7e91c1c8e699bf4fb.PNG"},69077:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Select_server-e65f9b76815ebe6dbb5387eb54e22182.PNG"},26149:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Visualisation-69e67f6d36fbe71439478e9070dc0c35.PNG"}}]);