"use strict";(self.webpackChunkstadata_flutter_sdk=self.webpackChunkstadata_flutter_sdk||[]).push([[9402],{5139:(n,i,a)=>{a.r(i),a.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>l});var e=a(5893),t=a(1151);const d={},r="Domain",s={id:"api-docs/list/domains",title:"Domain",description:"Metode ini digunakan untuk mendapatkan daftar domain (wilayah) yang tersedia dalam data BPS.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/api-docs/list/domains.md",sourceDirName:"api-docs/list",slug:"/api-docs/list/domains",permalink:"/stadata-flutter-sdk-docs/id/docs/api-docs/list/domains",draft:!1,unlisted:!1,editUrl:"https://github.com/ryanaidilp/stadata-flutter-sdk-docs/tree/main/docs/api-docs/list/domains.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pengantar",permalink:"/stadata-flutter-sdk-docs/id/docs/api-docs/list/intro"},next:{title:"Infografis",permalink:"/stadata-flutter-sdk-docs/id/docs/api-docs/list/infographics"}},o={},l=[{value:"Parameter",id:"parameter",level:2},{value:"Contoh",id:"contoh",level:2},{value:"Properti (DomainEntity)",id:"properti-domainentity",level:2}];function c(n){const i={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.h1,{id:"domain",children:"Domain"}),"\n",(0,e.jsx)(i.p,{children:"Metode ini digunakan untuk mendapatkan daftar domain (wilayah) yang tersedia dalam data BPS."}),"\n",(0,e.jsx)(i.h2,{id:"parameter",children:"Parameter"}),"\n",(0,e.jsxs)(i.table,{children:[(0,e.jsx)(i.thead,{children:(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.th,{children:"Parameter"}),(0,e.jsx)(i.th,{children:"Tipe"}),(0,e.jsx)(i.th,{children:"Deskripsi"})]})}),(0,e.jsxs)(i.tbody,{children:[(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:(0,e.jsx)(i.code,{children:"type"})}),(0,e.jsx)(i.td,{children:(0,e.jsx)(i.code,{children:"DomainType"})}),(0,e.jsxs)(i.td,{children:["Tipe domain yang akan diambil (default: ",(0,e.jsx)(i.code,{children:"DomainType.all"}),")."]})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:(0,e.jsx)(i.code,{children:"provinceCode"})}),(0,e.jsx)(i.td,{children:(0,e.jsx)(i.code,{children:"String?"})}),(0,e.jsxs)(i.td,{children:["Kode provinsi untuk memfilter domain (diperlukan jika ",(0,e.jsx)(i.code,{children:"type"})," = ",(0,e.jsx)(i.code,{children:"DomainType.regencyByProvince"}),")."]})]})]})]}),"\n",(0,e.jsx)(i.h2,{id:"contoh",children:"Contoh"}),"\n",(0,e.jsx)(i.p,{children:"Contoh penggunaan dan hasil keluaran:"}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.img,{alt:"Preview",src:a(4695).Z+"",width:"296",height:"640"})}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-dart",children:"// Mengambil data domain dari API BPS\nfinal domainResult = await StadataFlutter.instance.list.domains(\n  type: DomainType.all,\n  provinceCode: null, // Ganti dengan kode provinsi yang diinginkan jika diperlukan\n);\n\nfinal daftarDomain = domainResult.data;\nfinal paginasi = domainResult.pagination;\n\n// Menampilkan informasi paginasi\nprint('Halaman Saat Ini: ${paginasi.page}');\nprint('Total Halaman: ${paginasi.pages}');\nprint('Jumlah Data di Halaman Ini: ${paginasi.count}');\nprint('Per Halaman: ${paginasi.perPage}');\nprint('Total: ${paginasi.total}');\nprint('------------------------');\n\n// Menampilkan data domain yang didapat\nfor (final domain in daftarDomain) {\n  print('ID Domain: ${domain.id}'); /// Contoh: 7200\n  print('Nama: ${domain.name}'); /// Sulawesi Tengah\n  print('URL: ${domain.url}'); /// https://sultengprov.bps.go.id\n  print('------------------------');\n}\n"})}),"\n",(0,e.jsx)(i.h2,{id:"properti-domainentity",children:"Properti (DomainEntity)"}),"\n",(0,e.jsxs)(i.table,{children:[(0,e.jsx)(i.thead,{children:(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.th,{children:"Properti"}),(0,e.jsx)(i.th,{children:"Tipe"}),(0,e.jsx)(i.th,{children:"Deskripsi"})]})}),(0,e.jsxs)(i.tbody,{children:[(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:(0,e.jsx)(i.code,{children:"name"})}),(0,e.jsx)(i.td,{children:(0,e.jsx)(i.code,{children:"String"})}),(0,e.jsx)(i.td,{children:"Nama domain (wilayah)."})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:(0,e.jsx)(i.code,{children:"id"})}),(0,e.jsx)(i.td,{children:(0,e.jsx)(i.code,{children:"String"})}),(0,e.jsx)(i.td,{children:"Pengidentifikasi unik untuk domain."})]}),(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:(0,e.jsx)(i.code,{children:"url"})}),(0,e.jsx)(i.td,{children:(0,e.jsx)(i.code,{children:"String"})}),(0,e.jsx)(i.td,{children:"URL terkait dengan domain."})]})]})]})]})}function h(n={}){const{wrapper:i}={...(0,t.a)(),...n.components};return i?(0,e.jsx)(i,{...n,children:(0,e.jsx)(c,{...n})}):c(n)}},4695:(n,i,a)=>{a.d(i,{Z:()=>e});const e=a.p+"assets/images/domains-5c76954836b658285191a28a474762b4.gif"},1151:(n,i,a)=>{a.d(i,{Z:()=>s,a:()=>r});var e=a(7294);const t={},d=e.createContext(t);function r(n){const i=e.useContext(d);return e.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function s(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),e.createElement(d.Provider,{value:i},n.children)}}}]);