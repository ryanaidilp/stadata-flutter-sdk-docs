"use strict";(self.webpackChunkstadata_flutter_sdk=self.webpackChunkstadata_flutter_sdk||[]).push([[329],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>N});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},o=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),u=s(a),k=r,N=u["".concat(d,".").concat(k)]||u[k]||m[k]||i;return a?n.createElement(N,l(l({ref:e},o),{},{components:a})):n.createElement(N,l({ref:e},o))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[u]="string"==typeof t?t:r,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},4451:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={},l="Siaran Pers",p={unversionedId:"api-docs/list/press-releases",id:"api-docs/list/press-releases",title:"Siaran Pers",description:"Metode ini digunakan untuk mendapatkan daftar siaran pers berdasarkan domain (wilayah) yang dipilih.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/api-docs/list/press-releases.md",sourceDirName:"api-docs/list",slug:"/api-docs/list/press-releases",permalink:"/stadata-flutter-sdk-docs/id/docs/api-docs/list/press-releases",draft:!1,editUrl:"https://github.com/ryanaidilp/stadata-flutter-sdk-docs/tree/main/docs/api-docs/list/press-releases.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Berita",permalink:"/stadata-flutter-sdk-docs/id/docs/api-docs/list/news"},next:{title:"Publikasi",permalink:"/stadata-flutter-sdk-docs/id/docs/api-docs/list/publications"}},d={},s=[{value:"Parameter",id:"parameter",level:2},{value:"Contoh",id:"contoh",level:2},{value:"Properti (PressRelease)",id:"properti-pressrelease",level:2}],o={toc:s},u="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"siaran-pers"},"Siaran Pers"),(0,r.kt)("p",null,"Metode ini digunakan untuk mendapatkan daftar siaran pers berdasarkan domain (wilayah) yang dipilih."),(0,r.kt)("h2",{id:"parameter"},"Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Tipe"),(0,r.kt)("th",{parentName:"tr",align:null},"Deskripsi"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"domain")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Kode domain (wilayah) untuk mengambil siaran pers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lang")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DataLanguage")),(0,r.kt)("td",{parentName:"tr",align:null},"Bahasa untuk data siaran pers (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"DataLanguage.id"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"page")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Nomor halaman (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subcat")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"ID kategori subjek untuk memfilter siaran pers (opsional).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"keyword")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String?")),(0,r.kt)("td",{parentName:"tr",align:null},"Kata kunci untuk mencari siaran pers (opsional).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"month")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int?")),(0,r.kt)("td",{parentName:"tr",align:null},"Bulan untuk memfilter siaran pers (opsional - ",(0,r.kt)("inlineCode",{parentName:"td"},"1..12"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"year")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int?")),(0,r.kt)("td",{parentName:"tr",align:null},"Tahun untuk memfilter siaran pers (opsional).")))),(0,r.kt)("h2",{id:"contoh"},"Contoh"),(0,r.kt)("p",null,"Contoh penggunaan dan hasil keluaran:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final result = await StadataFlutter.instance.list.pressReleases(domain: '7200');\nfinal pressReleaseList = result.data;\nfinal pagination = result.pagination;\n\n// Cetak informasi paginasi\nprint('Halaman Saat Ini: ${pagination.page}');\nprint('Total Halaman: ${pagination.pages}');\nprint('Jumlah Data di Halaman Ini: ${pagination.count}');\nprint('Per Halaman: ${pagination.perPage}');\nprint('Total: ${pagination.total}');\nprint('------------------------');\n\n// Cetak data siaran pers yang didapat\nfor (final pressRelease in pressReleaseList) {\n    print('ID Siaran Pers: ${pressRelease.id}');\n    print('ID Subjek: ${pressRelease.subject?.id}');\n    print('Nama Subjek: ${pressRelease.subject?.name}');\n    print('Judul: ${pressRelease.title}');\n    print('Abstrak: ${pressRelease.abstract}');\n    print('Tanggal Rilis: ${pressRelease.releaseDate}');\n    print('Sampul: ${pressRelease.cover}');\n    print('Ukuran File: ${pressRelease.size}');\n    print('URL PDF: ${pressRelease.pdf}');\n    print('URL Slide: ${pressRelease.slide}');\n    print('Diperbarui Pada: ${pressRelease.updatedAt}');\n}\n")),(0,r.kt)("h2",{id:"properti-pressrelease"},"Properti (PressRelease)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properti"),(0,r.kt)("th",{parentName:"tr",align:null},"Tipe"),(0,r.kt)("th",{parentName:"tr",align:null},"Deskripsi"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Pengenal unik dari siaran pers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Judul siaran pers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subject")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Subject?")),(0,r.kt)("td",{parentName:"tr",align:null},"Subjek siaran pers yang bersifat opsional.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"size")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Ukuran file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pdf")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Tautan atau referensi ke file PDF terkait untuk siaran pers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cover")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Gambar miniatur dari siaran pers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"abstract")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String?")),(0,r.kt)("td",{parentName:"tr",align:null},"Abstrak dari siaran pers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"updatedAt")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DateTime")),(0,r.kt)("td",{parentName:"tr",align:null},"Tanggal dan waktu ketika tabel terakhir diperbarui.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"releaseDate")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DateTime?")),(0,r.kt)("td",{parentName:"tr",align:null},"Tanggal dan waktu ketika tabel dibuat (opsional).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"slide")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Tautan atau referensi ke file Slide terkait untuk siaran pers.")))))}m.isMDXComponent=!0}}]);