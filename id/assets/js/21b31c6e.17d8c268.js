"use strict";(self.webpackChunkstadata_flutter_sdk=self.webpackChunkstadata_flutter_sdk||[]).push([[541],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=d(a),m=r,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(g,l(l({ref:e},s),{},{components:a})):n.createElement(g,l({ref:e},s))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7707:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={},l="Kategori Berita",o={unversionedId:"api-docs/list/news-categories",id:"api-docs/list/news-categories",title:"Kategori Berita",description:"Metode ini digunakan untuk mengambil daftar kategori berita berdasarkan domain (wilayah) yang dipilih.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/api-docs/list/news-categories.md",sourceDirName:"api-docs/list",slug:"/api-docs/list/news-categories",permalink:"/stadata-flutter-sdk-docs/id/docs/api-docs/list/news-categories",draft:!1,editUrl:"https://github.com/ryanaidilp/stadata-flutter-sdk-docs/tree/main/docs/api-docs/list/news-categories.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Infografis",permalink:"/stadata-flutter-sdk-docs/id/docs/api-docs/list/infographics"},next:{title:"Berita",permalink:"/stadata-flutter-sdk-docs/id/docs/api-docs/list/news"}},p={},d=[{value:"Parameter",id:"parameter",level:2},{value:"Properti (NewsCategory)",id:"properti-newscategory",level:2}],s={toc:d},u="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kategori-berita"},"Kategori Berita"),(0,r.kt)("p",null,"Metode ini digunakan untuk mengambil daftar kategori berita berdasarkan domain (wilayah) yang dipilih."),(0,r.kt)("h2",{id:"parameter"},"Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Tipe"),(0,r.kt)("th",{parentName:"tr",align:null},"Deskripsi"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"domain")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Kode domain (wilayah) untuk mengambil kategori berita.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lang")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DataLanguage")),(0,r.kt)("td",{parentName:"tr",align:null},"Bahasa untuk data kategori berita (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"DataLanguage.id"),").")))),(0,r.kt)("p",null,"Contoh penggunaan dan contoh output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"// Mengambil data kategori berita dari API BPS\nfinal result = await StadataFlutter.instance.list.newsCategories(domain: '7200');\nfinal daftarKategoriBerita = result.data;\nfinal paginasi = result.pagination;\n\n// Menampilkan informasi paginasi\nprint('Halaman Saat Ini: ${paginasi.page}');\nprint('Total Halaman: ${paginasi.pages}');\nprint('Jumlah Data pada Halaman Ini: ${paginasi.count}');\nprint('Per Halaman: ${paginasi.perPage}');\nprint('Total: ${paginasi.total}');\nprint('------------------------');\n\n// Menampilkan data kategori berita yang diperoleh\nfor (final kategoriBerita in daftarKategoriBerita) {\n    print('ID Kategori Berita: ${kategoriBerita.id}');\n    print('Nama Kategori Berita: ${kategoriBerita.name}');\n}\n\n")),(0,r.kt)("h2",{id:"properti-newscategory"},"Properti (NewsCategory)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properti"),(0,r.kt)("th",{parentName:"tr",align:null},"Tipe"),(0,r.kt)("th",{parentName:"tr",align:null},"Deskripsi"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Pengidentifikasi unik untuk kategori berita.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Nama kategori berita.")))))}c.isMDXComponent=!0}}]);