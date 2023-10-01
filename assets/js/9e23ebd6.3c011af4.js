"use strict";(self.webpackChunkstadata_flutter_sdk=self.webpackChunkstadata_flutter_sdk||[]).push([[191],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=d(a),m=r,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(g,l(l({ref:e},s),{},{components:a})):n.createElement(g,l({ref:e},s))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3283:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={},l="Subjects",o={unversionedId:"api-docs/list/subjects",id:"api-docs/list/subjects",title:"Subjects",description:"This method is used to retrieve a list of subject based on the selected domain (region).",source:"@site/docs/api-docs/list/subjects.md",sourceDirName:"api-docs/list",slug:"/api-docs/list/subjects",permalink:"/stadata-flutter-sdk-docs/docs/api-docs/list/subjects",draft:!1,editUrl:"https://github.com/ryanaidilp/stadata-flutter-sdk-docs/tree/main/docs/api-docs/list/subjects.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Subject Categories",permalink:"/stadata-flutter-sdk-docs/docs/api-docs/list/subject-categories"},next:{title:"View",permalink:"/stadata-flutter-sdk-docs/docs/category/view"}},p={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Properties (Subject)",id:"properties-subject",level:2}],s={toc:d},u="wrapper";function c(t){let{components:e,...i}=t;return(0,r.kt)(u,(0,n.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"subjects"},"Subjects"),(0,r.kt)("p",null,"This method is used to retrieve a list of subject based on the selected domain (region)."),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"domain")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The domain (region) code for retrieving subject.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lang")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DataLanguage")),(0,r.kt)("td",{parentName:"tr",align:null},"The language for subject data (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"DataLanguage.id"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"page")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"The page number (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subjectCategoryId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int?")),(0,r.kt)("td",{parentName:"tr",align:null},"ID of the subject category for filtering subject (optional).")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Example usage and sample output:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Preview",src:a(1397).Z,width:"296",height:"640"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"// Fetch news categories data from BPS API\nfinal result = await StadataFlutter.instance.list.subjects(domain: '7200');\nfinal subjectList = result.data;\nfinal pagination = result.pagination;\n\n\n// Print pagination info\nprint('Current Page: ${pagination.page}');\nprint('Total Pages: ${pagination.pages}');\nprint('Data Count in This Page: ${pagination.count}');\nprint('Per Page: ${pagination.perPage}');\nprint('Total: ${pagination.total}');\nprint('------------------------');\n\n// Print the retrieved subject data\nfor (final subject in subjectList) {\n    print('Subject ID: ${subject.id}');\n    print('Subject Name: ${subject.name}');\n    print('Subject Category ID: ${subject.category?.id}');\n    print('Subject Category Name: ${subject.category?.name}');\n    print('Subject N Table: ${subject.nTable}');\n}\n")),(0,r.kt)("h2",{id:"properties-subject"},"Properties (Subject)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"The unique identifier for the subject.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The name for the subject.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"category")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SubjectCategory?")),(0,r.kt)("td",{parentName:"tr",align:null},"The category for the subject.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nTable")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int?")),(0,r.kt)("td",{parentName:"tr",align:null},"Sum of the table of the subject.")))))}c.isMDXComponent=!0},1397:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/subjects-4de9c2c93ccab6bb9f85c02b0c2e74da.gif"}}]);