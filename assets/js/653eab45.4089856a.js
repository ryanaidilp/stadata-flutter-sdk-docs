"use strict";(self.webpackChunkstadata_flutter_sdk=self.webpackChunkstadata_flutter_sdk||[]).push([[797],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=p(n),k=r,g=m["".concat(d,".").concat(k)]||m[k]||u[k]||i;return n?a.createElement(g,l(l({ref:e},s),{},{components:n})):a.createElement(g,l({ref:e},s))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[m]="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3421:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},l="News",o={unversionedId:"api-docs/list/news",id:"api-docs/list/news",title:"News",description:"This method is used to retrieve a list of news based on the selected domain (region).",source:"@site/docs/api-docs/list/news.md",sourceDirName:"api-docs/list",slug:"/api-docs/list/news",permalink:"/stadata-flutter-sdk-docs/docs/api-docs/list/news",draft:!1,editUrl:"https://github.com/ryanaidilp/stadata-flutter-sdk-docs/tree/main/docs/api-docs/list/news.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"News Categories",permalink:"/stadata-flutter-sdk-docs/docs/api-docs/list/news-categories"},next:{title:"Press Releases",permalink:"/stadata-flutter-sdk-docs/docs/api-docs/list/press-releases"}},d={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Properties (News)",id:"properties-news",level:2}],s={toc:p},m="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"news"},"News"),(0,r.kt)("p",null,"This method is used to retrieve a list of news based on the selected domain (region)."),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"domain")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The domain (region) code for retrieving news.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lang")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DataLanguage")),(0,r.kt)("td",{parentName:"tr",align:null},"The language for news data (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"DataLanguage.id"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"page")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"The page number (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"keyword")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String?")),(0,r.kt)("td",{parentName:"tr",align:null},"A keyword for searching news (optional).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"newsCategoryId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String?")),(0,r.kt)("td",{parentName:"tr",align:null},"The category for filtering news (optional).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"month")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int?")),(0,r.kt)("td",{parentName:"tr",align:null},"The month for filtering news (optional - ",(0,r.kt)("inlineCode",{parentName:"td"},"1..12"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"year")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int?")),(0,r.kt)("td",{parentName:"tr",align:null},"The year for filtering news (optional).")))),(0,r.kt)("p",null,"Example usage and sample output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"// Fetch news from BPS API\nfinal result = await StadataFlutter.instance.list.news(domain: '7200');\nfinal newsList = result.data;\nfinal pagination = result.pagination;\n\n\n// Print pagination info\nprint('Current Page: ${pagination.page}');\nprint('Total Pages: ${pagination.pages}');\nprint('Data Count in This Page: ${pagination.count}');\nprint('Per Page: ${pagination.perPage}');\nprint('Total: ${pagination.total}');\nprint('------------------------');\n\n// Print the retrieved news data\nfor (final news in newsList) {\n    print('News ID: ${news.id}');\n    print('Category: ${news.category}');\n    print('Title: ${news.title}');\n    print('Content: ${news.content}');\n    print('Release Date: ${news.releaseDate}');\n    print('Picture: ${news.picture}');\n    print('------------------------');\n}\n\n")),(0,r.kt)("h2",{id:"properties-news"},"Properties (News)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"The unique identifier for the news.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"categoryId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The category identifier for the news (optional).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"category")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String?")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the news category (optional).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The title of the news.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"content")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The content of the news.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"releaseDate")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DateTime")),(0,r.kt)("td",{parentName:"tr",align:null},"The date when the news was released.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"picture")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The picture associated with the news.")))))}u.isMDXComponent=!0}}]);