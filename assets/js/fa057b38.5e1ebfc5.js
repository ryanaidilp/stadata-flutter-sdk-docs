"use strict";(self.webpackChunkstadata_flutter_sdk=self.webpackChunkstadata_flutter_sdk||[]).push([[161],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,c=d(t,["components","mdxType","originalType","parentName"]),m=o(a),u=r,k=m["".concat(p,".").concat(u)]||m[u]||s[u]||i;return a?n.createElement(k,l(l({ref:e},c),{},{components:a})):n.createElement(k,l({ref:e},c))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=u;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d[m]="string"==typeof t?t:r,l[1]=d;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1083:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const i={},l="Static Table",d={unversionedId:"api-docs/view/static-table",id:"api-docs/view/static-table",title:"Static Table",description:"This method is used to retrieve detailed information about a specific static table.",source:"@site/docs/api-docs/view/static-table.md",sourceDirName:"api-docs/view",slug:"/api-docs/view/static-table",permalink:"/stadata-flutter-sdk-docs/docs/api-docs/view/static-table",draft:!1,editUrl:"https://github.com/ryanaidilp/stadata-flutter-sdk-docs/tree/main/docs/api-docs/view/static-table.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Publication",permalink:"/stadata-flutter-sdk-docs/docs/api-docs/view/publication"},next:{title:"To-Do",permalink:"/stadata-flutter-sdk-docs/docs/todo"}},p={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Properties (StaticTable)",id:"properties-statictable",level:2}],c={toc:o},m="wrapper";function s(t){let{components:e,...i}=t;return(0,r.kt)(m,(0,n.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"static-table"},"Static Table"),(0,r.kt)("p",null,"This method is used to retrieve detailed information about a specific static table."),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"The unique identifier of the static table.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"domain")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The domain (region) code for retrieving static table detail.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lang")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DataLanguage")),(0,r.kt)("td",{parentName:"tr",align:null},"The language for static table data (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"DataLanguage.id"),").")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Example usage and sample output:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Preview",src:a(3033).Z,width:"296",height:"640"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"// Fetch static table detail from BPS API\nfinal staticTable = await StadataFlutter.instance.view.staticTable(\n  id: 'example_static_table_id', // Replace with the desired static table ID\n  domain: 'example_domain', // Replace with the desired Domain Code\n  lang: DataLanguage.id,\n);\n\n\nprint('Table ID: ${staticTable.id}');\nprint('Table Title: ${staticTable.title}');\nprint('Subject ID: ${staticTable.subjectId}');\nprint('Subject: ${staticTable.subject}');\nprint('Size: ${staticTable.size}');\nprint('Table: ${staticTable.table}');\nprint('Updated At: ${staticTable.updatedAt}');\nprint('Created At: ${staticTable.createdAt}');\nprint('Excel Link: ${staticTable.excel}');\n")),(0,r.kt)("h2",{id:"properties-statictable"},"Properties (StaticTable)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"The unique identifier of the table.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The title or name of the table.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subjectId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"The optional subject identifier associated with the table.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subject")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String?")),(0,r.kt)("td",{parentName:"tr",align:null},"The optional subject name or description.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"size")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The file size.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"table")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String?")),(0,r.kt)("td",{parentName:"tr",align:null},"The HTML representation of the table.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"updatedAt")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DateTime")),(0,r.kt)("td",{parentName:"tr",align:null},"The date and time when the table was last updated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"createdAt")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DateTime?")),(0,r.kt)("td",{parentName:"tr",align:null},"The optional date and time when the table was created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"excel")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"A link or reference to the associated Excel file for the table.")))))}s.isMDXComponent=!0},3033:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/static_tables-90a9349498e63e565eb4ee700f4ee25b.gif"}}]);