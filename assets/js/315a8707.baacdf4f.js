"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6006],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},x=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),x=l(a),u=r,m=x["".concat(c,".").concat(u)]||x[u]||d[u]||o;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=x;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}x.displayName="MDXCreateElement"},47126:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),s=["components"],i={id:"datacollection_stap2",title:"Using the Datastore API",sidebar_label:"CKAN Datastore API use"},c=void 0,l={unversionedId:"data-collection/datacollection_stap2",id:"version-1.0.0/data-collection/datacollection_stap2",title:"Using the Datastore API",description:"All actions related to inserting, updating, or even deleting records, are done through the CKAN Datastore API.",source:"@site/versioned_docs/version-1.0.0/data-collection/weidewinkels_stap2.md",sourceDirName:"data-collection",slug:"/data-collection/datacollection_stap2",permalink:"/docs/1.0.0/data-collection/datacollection_stap2",draft:!1,editUrl:"https://github.com/CivityNL/civity-docs-edit/edit/drafts/website/versioned_docs/version-1.0.0/data-collection/weidewinkels_stap2.md",tags:[],version:"1.0.0",lastUpdatedAt:1653657462,formattedLastUpdatedAt:"27-5-2022",frontMatter:{id:"datacollection_stap2",title:"Using the Datastore API",sidebar_label:"CKAN Datastore API use"}},p={},d=[{value:"Inserting/updating new records:",id:"insertingupdating-new-records",level:2},{value:"1. Set primary key (once) - datastore_create",id:"1-set-primary-key-once---datastore_create",level:3},{value:"HTTP example:",id:"http-example",level:4},{value:"cURL example:",id:"curl-example",level:4},{value:"Javascript Fetch example:",id:"javascript-fetch-example",level:4},{value:"2. Insert/update new records - datastore_upsert",id:"2-insertupdate-new-records---datastore_upsert",level:3},{value:"HTML example:",id:"html-example",level:3},{value:"cURL example:",id:"curl-example-1",level:3},{value:"Javascript Fetch example:",id:"javascript-fetch-example-1",level:3},{value:"Angular example:",id:"angular-example",level:3},{value:"Deleting records - datastore_delete",id:"deleting-records---datastore_delete",level:2}],x={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All actions related to inserting, updating, or even deleting records, are done through the ",(0,o.kt)("a",{href:"https://docs.ckan.org/en/latest/maintaining/datastore.html#the-datastore-api",target:"_blank"},"CKAN Datastore API"),"."),(0,o.kt)("h2",{id:"insertingupdating-new-records"},"Inserting/updating new records:"),(0,o.kt)("p",null,"There are two steps required before you can insert/update new records using the CKAN Datastore API."),(0,o.kt)("h3",{id:"1-set-primary-key-once---datastore_create"},"1. Set primary key (once) - datastore_create"),(0,o.kt)("p",null,"In order to insert new records, a primary key needs to be set. This is something that needs to be done only once. "),(0,o.kt)("p",null,"This is done via a post request to api/action/datastore_create. This request should include the following in the body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "resource_id": "<your_resource_id>",\n    "force": true,\n    "primary_key": "column_name_to_be_set_as_primary_key"\n}\n')),(0,o.kt)("p",null,"Below we will provide a few code examples of these actions."),(0,o.kt)("h4",{id:"http-example"},"HTTP example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  POST /api/3/action/datastore_create HTTP/1.1\nHost: acc-ckannew.dataplatform.nl\nAuthorization: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\nContent-Type: application/json\nContent-Type: application/json\n\n{\n    "resource_id": "3a1d49bb-d3b6-49fe-977e-e13b2db6c1bc",\n    "force": true,\n    "primary_key": "zip"\n}\n')),(0,o.kt)("h4",{id:"curl-example"},"cURL example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl --location --request POST 'https://acc-ckannew.dataplatform.nl/api/3/action/datastore_create' \\\n--header 'Authorization: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \\\n--header 'Content-Type: application/json' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"resource_id\": \"3a1d49bb-d3b6-49fe-977e-e13b2db6c1bc\",\n    \"force\": true,\n    \"primary_key\": \"zip\"\n}'\n")),(0,o.kt)("h4",{id:"javascript-fetch-example"},"Javascript Fetch example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'var myHeaders = new Headers();\nmyHeaders.append("Authorization", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");\nmyHeaders.append("Content-Type", "application/json");\nmyHeaders.append("Content-Type", "application/json");\n\nvar raw = JSON.stringify({"resource_id":"3a1d49bb-d3b6-49fe-977e-e13b2db6c1bc","force":true,"primary_key":"zip"});\n\nvar requestOptions = {\n  method: \'POST\',\n  headers: myHeaders,\n  body: raw,\n  redirect: \'follow\'\n};\n\nfetch("https://acc-ckannew.dataplatform.nl/api/3/action/datastore_create", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n')),(0,o.kt)("p",null,"See CKAN documentation for more info: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ckan.org/en/latest/maintaining/datastore.html#ckanext.datastore.logic.action.datastore_create"},"https://docs.ckan.org/en/latest/maintaining/datastore.html#ckanext.datastore.logic.action.datastore_create")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"2-insertupdate-new-records---datastore_upsert"},"2. Insert/update new records - datastore_upsert"),(0,o.kt)("p",null,"After that, new data can be added to the CSV file. For this, the ",(0,o.kt)("a",{href:"https://docs.ckan.org/en/latest/maintaining/datastore.html#ckanext.datastore.logic.action.datastore_upsert",target:"_blank"},"datastore_upsert")," API action is used."),(0,o.kt)("p",null,"Below we will provide a few code examples of these actions:"),(0,o.kt)("h3",{id:"html-example"},"HTML example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'POST /api/3/action/datastore_upsert HTTP/1.1\nHost: acc-ckannew.dataplatform.nl\nAuthorization: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\nContent-Type: application/json\nContent-Type: application/json\n\n{\n    "resource_id": "3a1d49bb-d3b6-49fe-977e-e13b2db6c1bc",\n    "force": true,\n    "records": [{\n            "company": "Test company",\n            "email": "test@test.com ",\n            "zip": "xxxxx",\n            "city": "Test City "\n    }]\n}\n')),(0,o.kt)("h3",{id:"curl-example-1"},"cURL example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  curl --location --request POST \'https://acc-ckannew.dataplatform.nl/api/3/action/datastore_upsert\' \\\n  --header \'Authorization: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\' \\\n  --header \'Content-Type: application/json\' \\\n  --header \'Content-Type: application/json\' \\\n  --data-raw \'{\n      "resource_id": "3a1d49bb-d3b6-49fe-977e-e13b2db6c1bc",\n      "force": true,\n      "records": [{\n               "company": "Test company",\n               "email": "test@test.com ",\n               "zip": "xxxxx",\n               "city": "Test City "\n      }]\n  }\n')),(0,o.kt)("h3",{id:"javascript-fetch-example-1"},"Javascript Fetch example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'var myHeaders = new Headers();\nmyHeaders.append("Authorization", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");\nmyHeaders.append("Content-Type", "application/json");\nmyHeaders.append("Content-Type", "application/json");\n\nvar raw = JSON.stringify({"resource_id":"3a1d49bb-d3b6-49fe-977e-e13b2db6c1bc","force":true,"records":[{"company":"Test company","email":"test@test.com ","zip":"xxxxx","city":"Test City "}]});\n\nvar requestOptions = {\n  method: \'POST\',\n  headers: myHeaders,\n  body: raw,\n  redirect: \'follow\'\n};\n\nfetch("https://acc-ckannew.dataplatform.nl/api/3/action/datastore_upsert", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n')),(0,o.kt)("h3",{id:"angular-example"},"Angular example:"),(0,o.kt)("p",null,"In our own farmer shops example we used Angular to insert new records:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export class ConfigService {\n\n  constructor(private http: HttpClient) { }\n\n  getUrl = 'https://acc-ckannew.dataplatform.nl/api/action/datastore_search';\n  postURL = 'https://acc-ckannew.dataplatform.nl/api/action/datastore_upsert';\n  API_KEY = 'xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx';\n\n  httpHeaders = new HttpHeaders({\n    'Content-Type': 'application/json',\n    'Authorization': this.API_KEY\n  });\n\n  httpParams = {\n    resource_id: '3a1d49bb-d3b6-49fe-977e-e13b2db6c1bc'\n  }\n\n  get() {\n    let options = {headers: this.httpHeaders, params: this.httpParams}\n    return this.http.get(this.getUrl, options);\n  }\n  \n  post(body) {\n    let options = {headers: this.httpHeaders}\n    console.log(`POST to ${this.postURL} with as body ${body}`);\n    \n    return this.http.post(this.postURL, body, options);\n  }\n\n}\n")),(0,o.kt)("h2",{id:"deleting-records---datastore_delete"},"Deleting records - datastore_delete"),(0,o.kt)("p",null,"See the CKAN Datastore API reference: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ckan.org/en/latest/maintaining/datastore.html#ckanext.datastore.logic.action.datastore_delete"},"https://docs.ckan.org/en/latest/maintaining/datastore.html#ckanext.datastore.logic.action.datastore_delete")))}u.isMDXComponent=!0}}]);