"use strict";(self.webpackChunkstadata_flutter_sdk=self.webpackChunkstadata_flutter_sdk||[]).push([[3969],{4780:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>o,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var r=n(5893),i=n(1151);const a={},t="Siaran Pers",d={id:"api-docs/list/press-releases",title:"Siaran Pers",description:"Metode ini digunakan untuk mendapatkan daftar siaran pers berdasarkan domain (wilayah) yang dipilih.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-0.6.3/api-docs/list/press-releases.md",sourceDirName:"api-docs/list",slug:"/api-docs/list/press-releases",permalink:"/stadata-flutter-sdk-docs/id/docs/0.6.3/api-docs/list/press-releases",draft:!1,unlisted:!1,editUrl:"https://github.com/ryanaidilp/stadata-flutter-sdk-docs/tree/main/versioned_docs/version-0.6.3/api-docs/list/press-releases.md",tags:[],version:"0.6.3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Berita",permalink:"/stadata-flutter-sdk-docs/id/docs/0.6.3/api-docs/list/news"},next:{title:"Publikasi",permalink:"/stadata-flutter-sdk-docs/id/docs/0.6.3/api-docs/list/publications"}},l={},c=[{value:"Parameter",id:"parameter",level:2},{value:"Contoh",id:"contoh",level:2},{value:"Properti (PressRelease)",id:"properti-pressrelease",level:2}];function h(e){const s={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"siaran-pers",children:"Siaran Pers"}),"\n",(0,r.jsx)(s.p,{children:"Metode ini digunakan untuk mendapatkan daftar siaran pers berdasarkan domain (wilayah) yang dipilih."}),"\n",(0,r.jsx)(s.h2,{id:"parameter",children:"Parameter"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Tipe"}),(0,r.jsx)(s.th,{children:"Deskripsi"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"domain"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"String"})}),(0,r.jsx)(s.td,{children:"Kode domain (wilayah) untuk mengambil siaran pers."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"lang"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"DataLanguage"})}),(0,r.jsxs)(s.td,{children:["Bahasa untuk data siaran pers (default: ",(0,r.jsx)(s.code,{children:"DataLanguage.id"}),")."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"page"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"int"})}),(0,r.jsxs)(s.td,{children:["Nomor halaman (default: ",(0,r.jsx)(s.code,{children:"1"}),")."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"subcat"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"int"})}),(0,r.jsx)(s.td,{children:"ID kategori subjek untuk memfilter siaran pers (opsional)."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"keyword"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"String?"})}),(0,r.jsx)(s.td,{children:"Kata kunci untuk mencari siaran pers (opsional)."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"month"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"int?"})}),(0,r.jsxs)(s.td,{children:["Bulan untuk memfilter siaran pers (opsional - ",(0,r.jsx)(s.code,{children:"1..12"}),")."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"year"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"int?"})}),(0,r.jsx)(s.td,{children:"Tahun untuk memfilter siaran pers (opsional)."})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"contoh",children:"Contoh"}),"\n",(0,r.jsx)(s.p,{children:"Contoh penggunaan dan hasil keluaran:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Preview",src:n(1082).Z+"",width:"296",height:"640"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-dart",children:"final result = await StadataFlutter.instance.list.pressReleases(domain: '7200');\nfinal pressReleaseList = result.data;\nfinal pagination = result.pagination;\n\n// Cetak informasi paginasi\nprint('Halaman Saat Ini: ${pagination.page}');\nprint('Total Halaman: ${pagination.pages}');\nprint('Jumlah Data di Halaman Ini: ${pagination.count}');\nprint('Per Halaman: ${pagination.perPage}');\nprint('Total: ${pagination.total}');\nprint('------------------------');\n\n// Cetak data siaran pers yang didapat\nfor (final pressRelease in pressReleaseList) {\n    print('ID Siaran Pers: ${pressRelease.id}');\n    print('ID Subjek: ${pressRelease.subject?.id}');\n    print('Nama Subjek: ${pressRelease.subject?.name}');\n    print('Judul: ${pressRelease.title}');\n    print('Abstrak: ${pressRelease.abstract}');\n    print('Tanggal Rilis: ${pressRelease.releaseDate}');\n    print('Sampul: ${pressRelease.cover}');\n    print('Ukuran File: ${pressRelease.size}');\n    print('URL PDF: ${pressRelease.pdf}');\n    print('URL Slide: ${pressRelease.slide}');\n    print('Diperbarui Pada: ${pressRelease.updatedAt}');\n}\n"})}),"\n",(0,r.jsx)(s.h2,{id:"properti-pressrelease",children:"Properti (PressRelease)"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Properti"}),(0,r.jsx)(s.th,{children:"Tipe"}),(0,r.jsx)(s.th,{children:"Deskripsi"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"id"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"int"})}),(0,r.jsx)(s.td,{children:"Pengenal unik dari siaran pers."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"title"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"String"})}),(0,r.jsx)(s.td,{children:"Judul siaran pers."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"subject"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Subject?"})}),(0,r.jsx)(s.td,{children:"Subjek siaran pers yang bersifat opsional."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"size"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"String"})}),(0,r.jsx)(s.td,{children:"Ukuran file."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"pdf"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"String"})}),(0,r.jsx)(s.td,{children:"Tautan atau referensi ke file PDF terkait untuk siaran pers."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"cover"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"String"})}),(0,r.jsx)(s.td,{children:"Gambar miniatur dari siaran pers."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"abstract"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"String?"})}),(0,r.jsx)(s.td,{children:"Abstrak dari siaran pers."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"updatedAt"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"DateTime"})}),(0,r.jsx)(s.td,{children:"Tanggal dan waktu ketika tabel terakhir diperbarui."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"releaseDate"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"DateTime?"})}),(0,r.jsx)(s.td,{children:"Tanggal dan waktu ketika tabel dibuat (opsional)."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"slide"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"String"})}),(0,r.jsx)(s.td,{children:"Tautan atau referensi ke file Slide terkait untuk siaran pers."})]})]})]})]})}function o(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1082:(e,s,n)=>{n.d(s,{Z:()=>r});const r=n.p+"assets/images/press_releases-d4648a8a83e6f684ab790c0a3ec35b03.gif"},1151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>t});var r=n(7294);const i={},a=r.createContext(i);function t(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);