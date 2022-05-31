"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8439],{3905:(A,t,e)=>{e.d(t,{Zo:()=>d,kt:()=>s});var a=e(67294);function i(A,t,e){return t in A?Object.defineProperty(A,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):A[t]=e,A}function n(A,t){var e=Object.keys(A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(A,t).enumerable}))),e.push.apply(e,a)}return e}function r(A){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?n(Object(e),!0).forEach((function(t){i(A,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(t){Object.defineProperty(A,t,Object.getOwnPropertyDescriptor(e,t))}))}return A}function c(A,t){if(null==A)return{};var e,a,i=function(A,t){if(null==A)return{};var e,a,i={},n=Object.keys(A);for(a=0;a<n.length;a++)e=n[a],t.indexOf(e)>=0||(i[e]=A[e]);return i}(A,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);for(a=0;a<n.length;a++)e=n[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(A,e)&&(i[e]=A[e])}return i}var o=a.createContext({}),l=function(A){var t=a.useContext(o),e=t;return A&&(e="function"==typeof A?A(t):r(r({},t),A)),e},d=function(A){var t=l(A.components);return a.createElement(o.Provider,{value:t},A.children)},u={inlineCode:"code",wrapper:function(A){var t=A.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(A,t){var e=A.components,i=A.mdxType,n=A.originalType,o=A.parentName,d=c(A,["components","mdxType","originalType","parentName"]),v=l(e),s=i,f=v["".concat(o,".").concat(s)]||v[s]||u[s]||n;return e?a.createElement(f,r(r({ref:t},d),{},{components:e})):a.createElement(f,r({ref:t},d))}));function s(A,t){var e=arguments,i=t&&t.mdxType;if("string"==typeof A||i){var n=e.length,r=new Array(n);r[0]=v;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=A,c.mdxType="string"==typeof A?A:i,r[1]=c;for(var l=2;l<n;l++)r[l]=e[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,e)}v.displayName="MDXCreateElement"},49339:(A,t,e)=>{e.r(t),e.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var a=e(87462),i=e(63366),n=(e(67294),e(3905)),r=["components"],c={id:"datasets_DataDictionary",title:"Data Dictionary",sidebar_label:"Data Dictionary"},o=void 0,l={unversionedId:"dataplatform/datasets_DataDictionary",id:"version-1.0.0/dataplatform/datasets_DataDictionary",title:"Data Dictionary",description:"The Data Dictionary is a module that, for specific file types, automatically detects column names and data types used within these specific columns.",source:"@site/versioned_docs/version-1.0.0/dataplatform/dataplatform_DATASETS_DataDictionary.md",sourceDirName:"dataplatform",slug:"/dataplatform/datasets_DataDictionary",permalink:"/en/docs/1.0.0/dataplatform/datasets_DataDictionary",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/versioned_docs/version-1.0.0/dataplatform/dataplatform_DATASETS_DataDictionary.md",tags:[],version:"1.0.0",lastUpdatedBy:"isabeladowsley",lastUpdatedAt:1653657462,formattedLastUpdatedAt:"5/27/2022",frontMatter:{id:"datasets_DataDictionary",title:"Data Dictionary",sidebar_label:"Data Dictionary"}},d={},u=[{value:"What can I do with the Data Dictionary?",id:"what-can-i-do-with-the-data-dictionary",level:2},{value:"Data Dictionary table in CKAN:",id:"data-dictionary-table-in-ckan",level:4},{value:"Does every datasource have a Data Dictionary?",id:"does-every-datasource-have-a-data-dictionary",level:2},{value:"Where can I find the Data Dictionary?",id:"where-can-i-find-the-data-dictionary",level:2},{value:"CKAN:",id:"ckan",level:4},{value:"Portal",id:"portal",level:4},{value:"How to edit the Data Dictionary of a datasource",id:"how-to-edit-the-data-dictionary-of-a-datasource",level:2},{value:"1.  Within a dataset, click on the <em>Explore</em> button of the datasource you want to edit and then click on <em>Edit</em>",id:"1--within-a-dataset-click-on-the-explore-button-of-the-datasource-you-want-to-edit-and-then-click-on-edit",level:4},{value:"2. Go to the tab <em>Data dictionary</em>",id:"2-go-to-the-tab-data-dictionary",level:4},{value:"3. Edit Type/Label/Description",id:"3-edit-typelabeldescription",level:4},{value:"4. Lastly, click the save button shown below",id:"4-lastly-click-the-save-button-shown-below",level:4},{value:"Changes as shown in the Portal:",id:"changes-as-shown-in-the-portal",level:4}],v={toc:u};function s(A){var t=A.components,c=(0,i.Z)(A,r);return(0,n.kt)("wrapper",(0,a.Z)({},v,c,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The Data Dictionary is a module that, for specific file types, automatically detects column names and data types used within these specific columns.")),(0,n.kt)("h2",{id:"what-can-i-do-with-the-data-dictionary"},"What can I do with the Data Dictionary?"),(0,n.kt)("p",null,"The Data Dictionary can be used to describe the content of a dataset more explicitely using labels and descriptions."),(0,n.kt)("p",null,"The Data Dictionary form allows entering the following values for each column:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type Override: the type to be used the next time DataPusher is run to load data into this column"),(0,n.kt)("li",{parentName:"ul"},"Label: a human-friendly label for this column"),(0,n.kt)("li",{parentName:"ul"},"Description: a full description for this column in markdown format")),(0,n.kt)("h4",{id:"data-dictionary-table-in-ckan"},"Data Dictionary table in CKAN:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Title",src:e(91175).Z,width:"696",height:"256"})),(0,n.kt)("h2",{id:"does-every-datasource-have-a-data-dictionary"},"Does every datasource have a Data Dictionary?"),(0,n.kt)("p",null,"No, only certain file types support Data Dictionary functionality. Currently supported file formats for datasources in Dataplatform are: ",(0,n.kt)("strong",{parentName:"p"},"CSV"),", ",(0,n.kt)("strong",{parentName:"p"},"XLS"),", and ",(0,n.kt)("strong",{parentName:"p"},"XLSX"),". "),(0,n.kt)("p",null,"If the datasource is uploaded to the ",(0,n.kt)("a",{parentName:"p",href:"datasets_AddingDatasources#datastore"},"DataStore")," correctly, the Data Dictionary table will be added."),(0,n.kt)("h2",{id:"where-can-i-find-the-data-dictionary"},"Where can I find the Data Dictionary?"),(0,n.kt)("p",null,"The Data Dictionary can be viewed in ",(0,n.kt)("strong",{parentName:"p"},"CKAN")," as well as on the ",(0,n.kt)("strong",{parentName:"p"},"Portal"),"."),(0,n.kt)("h4",{id:"ckan"},"CKAN:"),(0,n.kt)("p",null,"Click on a dataset -> click on a datasource"),(0,n.kt)("h4",{id:"portal"},"Portal"),(0,n.kt)("p",null,"Click on a dataset -> Click on the tab ",(0,n.kt)("em",{parentName:"p"},"Table")," -> Click on ",(0,n.kt)("em",{parentName:"p"},"Data dictionary")),(0,n.kt)("h2",{id:"how-to-edit-the-data-dictionary-of-a-datasource"},"How to edit the Data Dictionary of a datasource"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The Data Dictionary can be edited within your CKAN instance")),(0,n.kt)("h4",{id:"1--within-a-dataset-click-on-the-explore-button-of-the-datasource-you-want-to-edit-and-then-click-on-edit"},"1.  Within a dataset, click on the ",(0,n.kt)("em",{parentName:"h4"},"Explore")," button of the datasource you want to edit and then click on ",(0,n.kt)("em",{parentName:"h4"},"Edit")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Data_dict",src:e(10455).Z,width:"818",height:"517"})),(0,n.kt)("h4",{id:"2-go-to-the-tab-data-dictionary"},"2. Go to the tab ",(0,n.kt)("em",{parentName:"h4"},"Data dictionary")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Data_dict_go_to",src:e(43760).Z,width:"956",height:"440"})),(0,n.kt)("h4",{id:"3-edit-typelabeldescription"},"3. Edit Type/Label/Description"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Data_dict_edit",src:e(64201).Z,width:"690",height:"470"})),(0,n.kt)("h4",{id:"4-lastly-click-the-save-button-shown-below"},"4. Lastly, click the save button shown below"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Data_dict_save",src:e(57594).Z,width:"94",height:"51"})),(0,n.kt)("h4",{id:"changes-as-shown-in-the-portal"},"Changes as shown in the Portal:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Data_dict_portal",src:e(69218).Z,width:"1120",height:"342"})))}s.isMDXComponent=!0},91175:(A,t,e)=>{e.d(t,{Z:()=>a});const a="data:image/png;base64,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"},10455:(A,t,e)=>{e.d(t,{Z:()=>a});const a=e.p+"assets/images/Data_dict_edit-e189e93b4de65ab76eb917782c9b56e7.PNG"},64201:(A,t,e)=>{e.d(t,{Z:()=>a});const a=e.p+"assets/images/Data_dict_edit_field-c9d5215a842ce28a2c66c0fd413372f8.PNG"},69218:(A,t,e)=>{e.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABGAAAAFWCAYAAAAmFeu+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACYYSURBVHhe7d3dq2TZeR/g/Ct9EUzIVXKVq5hAbkaQi8TEISTTJgmYkBmckEjgQZiQmIkuJDljxTd2hyTYYyJjPDHChJEs3UgIuSOPwJGwRNseQ3vGo8x062taM6NuQUW/Ur/N22t21fnoWudUnXp+8FC119p77X3Oqb1O7bd3nf4rP/zhD1dn8eDBg9X9+/dXP/jBD9bee+89AAAAgKNVNZLUS1I3WaqnnLkAUzIgAAAAAD+2VD8p5y7AAAAAAHA6CjAAAAAAkynAAAAAAEymAAMAAAAwmQIMAAAAwGQKMAAAAACTKcAAAAAATKYAAwAAADDZzgowD965t/rBm6+f2v3v3F0cBwAAAOCq2UkB5r2vv7L6f//sb63e+Ad/9fR+6idW3/3kJ1Y/fPBgcUwAAACAq2InBZhv/+d/t1xkOcGb//LvrO6/9cbimAAAAABXxU4KMN/62M/9uKjyD//a6u4v/ovVt3/5gxt96+P/5tHdMm/+7E+uP460NCYAAADAVXGuAsx7t/5oXUx550ufXi9XAeab//Rvrt77xlfet3734O3vrO4899MKMAAAAMDROFcB5vtf/N/rAsp3P/nL62V3wAAAAABsttsCzBkpwAAAAADHYKcFmG/+k7+xeufmZ9dFlU3eu/0nq7c+9PcVYAAAAICjsdsCzKS/AbN0h81p9rVr+Xpz7Pd/dMx5rK//NHKsb/7s377wYwYAAAAu30F8BCnjR2/Lvk9bhFna/jzOWoCp9VN0UoABAACA43WwBZht7aPTrneSXlBZ6h+ddX0AAADgarqQjyBlvV54KU9agOkFjv7Rpj5233eNUcdf6usY9THztd39xX++Xl66A6a+B5HnfR9Z990/+uJjd8DkMWPW2NWe7XLs/Wvp+9l07Ovt/vUH1jLenX9//X3bZUzFIAAAALh4F/JHeL/7Pz7yWNGgPGkBpooV63386FhqnSqc9OOrvqybIsVY8Fg6jmxfRYv1dg8LI2MBpq/X993bs78qwNRY2XdtX8cwfm+zXAWabcde29WYeax9Zzlff415ovs/WN379CdXb/6rv7s+5iVv/fxPr977k/+7vD0AAADwmIP+CFIvQPT2daHiR+39+Ja2j1786O29kNLXTVsvwCytN64/FmDG467jTfvY17frY0fGr3UXx3xYrOnPxzE2evBg9b3/dWP1zX/01xd+bj86nlt/tLwdAAAA8D47KcC8/an/tnrjp37ifRfqJ7n7H/7Z6sH3337f+KNNBZRe4KhjitwxkiJBHV/fvgomte6bP/fUY4WLsi5aPCyKVFueZ9tegFlar/Tj64WU3p71+hjRj6dvt+3Yx+0iX3P2lW3z8ana36ktFGEUXwAAAODsdlKAyUdW3v3K51ff+a//cfXtX/7gyf7Lz6/ufeaTqwff+/b7xl6yVICpYkTa63kdz7jctx8LFUuFixjHiDxP22XdAbPt2Me+6l8f23//T4vHdyqtCKP4AgAAAOezmwLMZEsFmOy7/jZKFUF6kaUf31iAGbcbCxcl21dfrRvb/gZMlmt/vb0XUjJexs2xjPtJWz+evt22Yx+3i9pPvhe1r3N58GD19sv/U/EFAAAAzulcBZh3vvTp9UeO3vq3f2/5DpctznMRn2JGigjdWGxIgaH6qgASva8XT7KcYkY+PlUFjhqr6/vO8z5GFWDG9dJXRZcffxzqJ1fv/J/PPraf6qvjqPaxkJL22q6KLrVNP/alAkzkuJbaAQAAgItzrgLM/e9+a3Xnw//4UcHhLJ7oTgzOLEWiKkQBAAAAl+NcBZi1+z9Y3b/zxvrOirN48M695fHYubpjRtELAAAALtf5CzDstfqIk7tfAAAA4PIpwAAAAABMpgADAAAAMJkCDAAAAMBkCjAAAAAAkynAAAAAAEymAAMAAAAwmQIMAAAAwGQKMAAAAACTKcAAAAAATHauAsyDBw/WlvrOQ0RERERERETkMrJUpziPk2olZy7A7LLwUkRERERERERELiNLdYonsaluogAjIiIiIiIiIkebpTrFk9hZAWYGEREREREREZHLyFKdYgYFGBERERERERE52izVKWZQgBERERERERGRo81SnWIGBRgREREREREROdos1SlmUIARERERERERkaPNUp1iBgUYERERERERETnaLNUpZlCAEREREREREZGjzVKdYgYFGBERERERERE52izVKWZQgBERERERERGRo81SnWIGBRgREREREREROdos1SlmUIARERERERERkaPNUp1iBgUYERERERERETnaLNUpZlCAEREREREREZGjzVKdYgYFGBERERERERE52izVKWZQgBERERERERGRo81SnWIGBRgREREREREROdos1SlmUIARERERERERkaPNUp1iBgUYERERERERuVK5devW6itf+crq7bffftiyOa+++urqwYMHD5cuJ5d5DNlv9n+ZOe0x5OeZn2t+vrvMUp1iBgUYERERERGRPUsuMn//93//4dLZk23Psv39+/dXv/M7v7P60Ic+tN73Us465mXmlVdeWX3uc59bfetb33rYspw//uM/Xq938+bNhy0Xn8s+huw3+89xXFZOewz5eWa9/Hx3maU6xQwKMCIiIiJy9KmLz7rwzEXmpotQeX/+7M/+bPWBD3xgde3atbVPfOITD3vkPMnrL4WQ8xY7/vzP//zM27/55pur3/zN31x9//vff9jyeM4z5mXmNAWYKnzEX/7lXz5svdjswzFkv3UMl1WEOe0xKMDsgIiIiIjIZaYXYMZijJycP/zDP1x9+MMfXr377rsPWy43X/7yl9fFgk3Sv6/J6y7FjhQ6zlPsSAElr9/Pf/7zG7fPPup7kefZ5saNG+vlbJtzoOc0Y+5bTirAKL48nkMpwijA7ICIiIiIyGWmF13q4vSXfumX1ncFRJ6nLRepuRiN3C3wB3/wB4/WzUVzXcRmjCQXq1mOpQvXrPd7v/d7632P6/Rta7w8Zt3sp9qSpePJcSd150LJcm/PujmG2vfS13tSfvd3f3fv7np5/fXXV7/wC7/w2Nee5bQfQvLzWHrNnJRsk59tXh9L29frtF7HeZ62bXfAnDTmPmZbAUbxZTmHUIRRgNkBEREREZHLzKY7YKqwUcWMugCtC9e6GM1jXdRmnWyfC/26oB3HqWTdKpbUmOOFbt827bWfntq2tqljyNeS8So1bt9Xfb3VvvT1bkvuesndL/Xxo3wUKR9J2oe88847j4pJeczyoSTf95O+92Py86xtNv3sxvY8T1t+5vV67TnNmPuYTQUYxZft2fcijALMDoiIiIiIXGY2FWByUVoX8CWFi7feeutRASPpF6Zpy/a5kM1jttl00Tpe0OZ5tfV9RtojY+YYe8bCyXgxnWOqcTJ2lnshp/a56esdL8q3JR9H+pmf+ZnFOw8uK5/5zGcePjuc5OcRY8afZU+W+89uaZ1Nr7lNBZjTjLmPWSrA7HtxYV+yDwWiTceg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"},57594:(A,t,e)=>{e.d(t,{Z:()=>a});const a="data:image/png;base64,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"},43760:(A,t,e)=>{e.d(t,{Z:()=>a});const a=e.p+"assets/images/Data_dictionary_edit-e0663318ad7583e274eb2b7755271133.png"}}]);