"use strict";(self.webpackChunkstadata_flutter_sdk=self.webpackChunkstadata_flutter_sdk||[]).push([[310],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=d(a),s=i,k=m["".concat(p,".").concat(s)]||m[s]||c[s]||r;return a?n.createElement(k,l(l({ref:e},u),{},{components:a})):n.createElement(k,l({ref:e},u))}));function k(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,l=new Array(r);l[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:i,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},2712:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const r={},l="Publication",o={unversionedId:"api-docs/view/publication",id:"api-docs/view/publication",title:"Publication",description:"This method is used to retrieve detailed information about a specific publication.",source:"@site/docs/api-docs/view/publication.md",sourceDirName:"api-docs/view",slug:"/api-docs/view/publication",permalink:"/stadata-flutter-sdk-docs/docs/api-docs/view/publication",draft:!1,editUrl:"https://github.com/ryanaidilp/stadata-flutter-sdk-docs/tree/main/docs/api-docs/view/publication.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Press Release",permalink:"/stadata-flutter-sdk-docs/docs/api-docs/view/press-release"},next:{title:"Static Table",permalink:"/stadata-flutter-sdk-docs/docs/api-docs/view/static-table"}},p={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Properties (Publication)",id:"properties-publication",level:2}],u={toc:d},m="wrapper";function c(t){let{components:e,...a}=t;return(0,i.kt)(m,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"publication"},"Publication"),(0,i.kt)("p",null,"This method is used to retrieve detailed information about a specific publication."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"The unique identifier of the publication.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"domain")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"The domain (region) code for retrieving publication detail.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"lang")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DataLanguage")),(0,i.kt)("td",{parentName:"tr",align:null},"The language for publication data (default: ",(0,i.kt)("inlineCode",{parentName:"td"},"DataLanguage.id"),").")))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Example usage and sample output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"// Fetch publication detail from BPS API\nfinal publication = await StadataFlutter.instance.view.publication(\n  id: 'example_publication_id', // Replace with the desired publication ID\n  domain: 'example_domain', // Replace with the desired Domain Code\n  lang: DataLanguage.id,\n);\n\nprint('Publication ID: ${publication.id}');\nprint('Title: ${publication.title}');\nprint('ISSN: ${publication.issn}');\nprint('Scheduled Date: ${publication.scheduledDate}');\nprint('Release Date: ${publication.releaseDate}');\nprint('Update Date: ${publication.updateDate}');\nprint('Cover Image URL: ${publication.cover}');\nprint('PDF File URL: ${publication.pdf}');\nprint('Size: ${publication.size}');\nprint('Abstract: ${publication.abstract ?? 'Not available'}');\nprint('Catalogue Number: ${publication.catalogueNumber ?? 'Not available'}');\nprint('Publication Number: ${publication.publicationNumber ?? 'Not available'}');\n")),(0,i.kt)("h2",{id:"properties-publication"},"Properties (Publication)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"Unique identifier for the publication.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"title")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"The title of the publication.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"issn")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"The International Standard Serial Number (ISSN).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"scheduledDate")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DateTime?")),(0,i.kt)("td",{parentName:"tr",align:null},"The scheduled date for the publication (optional).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"releaseDate")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DateTime?")),(0,i.kt)("td",{parentName:"tr",align:null},"The release date of the publication (optional).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"updateDate")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DateTime?")),(0,i.kt)("td",{parentName:"tr",align:null},"The date when the publication was last updated (optional).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cover")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"The cover image URL of the publication.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pdf")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"The PDF file URL of the publication.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"size")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"The size of the publication (e.g., file size).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"abstract")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String?")),(0,i.kt)("td",{parentName:"tr",align:null},"An optional abstract or summary of the publication in HTML Format (optional).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"catalogueNumber")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String?")),(0,i.kt)("td",{parentName:"tr",align:null},"An optional catalogue number associated with the publication (optional).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"publicationNumber")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String?")),(0,i.kt)("td",{parentName:"tr",align:null},"An optional publication number or code (optional).")))))}c.isMDXComponent=!0}}]);