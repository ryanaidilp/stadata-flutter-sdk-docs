"use strict";(self.webpackChunkstadata_flutter_sdk=self.webpackChunkstadata_flutter_sdk||[]).push([[5315],{4617:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=a(5893),n=a(1151);const r={},s="Kategori Berita",d={id:"api-docs/list/news-categories",title:"Kategori Berita",description:"Metode ini digunakan untuk mengambil daftar kategori berita berdasarkan domain (wilayah) yang dipilih.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-0.6.3/api-docs/list/news-categories.md",sourceDirName:"api-docs/list",slug:"/api-docs/list/news-categories",permalink:"/stadata-flutter-sdk-docs/id/docs/0.6.3/api-docs/list/news-categories",draft:!1,unlisted:!1,editUrl:"https://github.com/ryanaidilp/stadata-flutter-sdk-docs/tree/main/versioned_docs/version-0.6.3/api-docs/list/news-categories.md",tags:[],version:"0.6.3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Infografis",permalink:"/stadata-flutter-sdk-docs/id/docs/0.6.3/api-docs/list/infographics"},next:{title:"Berita",permalink:"/stadata-flutter-sdk-docs/id/docs/0.6.3/api-docs/list/news"}},o={},l=[{value:"Parameter",id:"parameter",level:2},{value:"Contoh",id:"contoh",level:2},{value:"Properti (NewsCategory)",id:"properti-newscategory",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"kategori-berita",children:"Kategori Berita"}),"\n",(0,i.jsx)(t.p,{children:"Metode ini digunakan untuk mengambil daftar kategori berita berdasarkan domain (wilayah) yang dipilih."}),"\n",(0,i.jsx)(t.h2,{id:"parameter",children:"Parameter"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Tipe"}),(0,i.jsx)(t.th,{children:"Deskripsi"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"domain"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"Kode domain (wilayah) untuk mengambil kategori berita."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"lang"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"DataLanguage"})}),(0,i.jsxs)(t.td,{children:["Bahasa untuk data kategori berita (default: ",(0,i.jsx)(t.code,{children:"DataLanguage.id"}),")."]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"contoh",children:"Contoh"}),"\n",(0,i.jsx)(t.p,{children:"Contoh penggunaan dan contoh output:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Preview",src:a(9612).Z+"",width:"296",height:"640"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:"// Mengambil data kategori berita dari API BPS\nfinal result = await StadataFlutter.instance.list.newsCategories(domain: '7200');\nfinal daftarKategoriBerita = result.data;\nfinal paginasi = result.pagination;\n\n// Menampilkan informasi paginasi\nprint('Halaman Saat Ini: ${paginasi.page}');\nprint('Total Halaman: ${paginasi.pages}');\nprint('Jumlah Data pada Halaman Ini: ${paginasi.count}');\nprint('Per Halaman: ${paginasi.perPage}');\nprint('Total: ${paginasi.total}');\nprint('------------------------');\n\n// Menampilkan data kategori berita yang diperoleh\nfor (final kategoriBerita in daftarKategoriBerita) {\n    print('ID Kategori Berita: ${kategoriBerita.id}');\n    print('Nama Kategori Berita: ${kategoriBerita.name}');\n}\n\n"})}),"\n",(0,i.jsx)(t.h2,{id:"properti-newscategory",children:"Properti (NewsCategory)"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Properti"}),(0,i.jsx)(t.th,{children:"Tipe"}),(0,i.jsx)(t.th,{children:"Deskripsi"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"id"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"Pengidentifikasi unik untuk kategori berita."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"name"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"Nama kategori berita."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},9612:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/news_categories-a701b19c7bee55bd17b03ebedefa9157.gif"},1151:(e,t,a)=>{a.d(t,{Z:()=>d,a:()=>s});var i=a(7294);const n={},r=i.createContext(n);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);