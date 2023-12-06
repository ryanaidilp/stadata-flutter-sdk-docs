"use strict";(self.webpackChunkstadata_flutter_sdk=self.webpackChunkstadata_flutter_sdk||[]).push([[4662],{8835:(t,i,e)=>{e.r(i),e.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>l});var n=e(5893),r=e(1151);const d={},a="Indikator Strategis",s={id:"api-docs/list/strategic-indicators",title:"Indikator Strategis",description:"Metode ini digunakan untuk mengambil daftar indikator strategis berdasarkan domain (wilayah) yang dipilih.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/api-docs/list/strategic-indicators.md",sourceDirName:"api-docs/list",slug:"/api-docs/list/strategic-indicators",permalink:"/stadata-flutter-sdk-docs/id/docs/api-docs/list/strategic-indicators",draft:!1,unlisted:!1,editUrl:"https://github.com/ryanaidilp/stadata-flutter-sdk-docs/tree/main/docs/api-docs/list/strategic-indicators.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tabel Statis",permalink:"/stadata-flutter-sdk-docs/id/docs/api-docs/list/static-tables"},next:{title:"Kategori Subjek",permalink:"/stadata-flutter-sdk-docs/id/docs/api-docs/list/subject-categories"}},c={},l=[{value:"Parameter",id:"parameter",level:2},{value:"Contoh",id:"contoh",level:2},{value:"Properti (StrategicIndicator)",id:"properti-strategicindicator",level:2}];function o(t){const i={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"indikator-strategis",children:"Indikator Strategis"}),"\n",(0,n.jsx)(i.p,{children:"Metode ini digunakan untuk mengambil daftar indikator strategis berdasarkan domain (wilayah) yang dipilih."}),"\n",(0,n.jsx)(i.h2,{id:"parameter",children:"Parameter"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Parameter"}),(0,n.jsx)(i.th,{children:"Tipe"}),(0,n.jsx)(i.th,{children:"Deskripsi"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"domain"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"String"})}),(0,n.jsx)(i.td,{children:"Kode domain (wilayah) untuk mengambil indikator strategis."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"lang"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"DataLanguage"})}),(0,n.jsxs)(i.td,{children:["Bahasa untuk data indikator strategis (default: ",(0,n.jsx)(i.code,{children:"DataLanguage.id"}),")."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"page"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"int"})}),(0,n.jsxs)(i.td,{children:["Nomor halaman (default: ",(0,n.jsx)(i.code,{children:"1"}),")."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"variableID"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"int?"})}),(0,n.jsx)(i.td,{children:"ID Variable dari indikator strategis (opsional)."})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"contoh",children:"Contoh"}),"\n",(0,n.jsx)(i.p,{children:"Contoh penggunaan dan keluaran contoh:"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Preview",src:e(3033).Z+"",width:"296",height:"640"})}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-dart",children:"// Fetch indicator strategic data from BPS\nfinal result = await StadataFlutter.instance.list.strategicIndicators(\n  domain: 'kode_domain_contoh', // Ganti dengan kode domain yang diinginkan\n  lang: DataLanguage.id,\n  page: 1,\n  variableID: 'contoh_kata_kunci', // Ganti dengan ID variabel yang diinginkan atau null\n);\n\nfinal strategicIndicators = result.data;\nfinal pagination = result.pagination;\n\n// Mencetak informasi halaman\nprint('Current page: ${pagination.page}');\nprint('Total Page: ${pagination.pages}');\nprint('Total Data in This Page: ${pagination.count}');\nprint('PerPage: ${pagination.perPage}');\nprint('Total: ${pagination.total}');\nprint('------------------------');\n\n// Mencetak data indikator strategis yang diambil\nfor (final strategicIndicator in strategicIndicators) {\n    print('Indicator ID: ${strategicIndicator.id}');\n    print('Title: ${strategicIndicator.title}');\n    print('Variable ID: ${strategicIndicator.variableID}');\n    print('Category ID: ${strategicIndicator.categoryID}');\n    print('Name: ${strategicIndicator.name}');\n    print('Value: ${strategicIndicator.value}');\n    print('Unit: ${strategicIndicator.unit}');\n    print('Data Source: ${strategicIndicator.dataSource}');\n    print('Period: ${strategicIndicator.period}');\n    print('CSA Subject ID: ${strategicIndicator.csaSubjectID}');\n    print('HASH ID: ${strategicIndicator.hashID}');\n}\n\n"})}),"\n",(0,n.jsx)(i.h2,{id:"properti-strategicindicator",children:"Properti (StrategicIndicator)"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Properti"}),(0,n.jsx)(i.th,{children:"Tipe"}),(0,n.jsx)(i.th,{children:"Deskripsi"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"id"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"int"})}),(0,n.jsx)(i.td,{children:"The unique identifier for the Strategic Indicator."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"title"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"String"})}),(0,n.jsx)(i.td,{children:"The title of the Strategic Indicator."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"name"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"String"})}),(0,n.jsx)(i.td,{children:"Nama atau keterangan indikator."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"variableID"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"int"})}),(0,n.jsx)(i.td,{children:"ID variabel dari indikator."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"csaSubjectID"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"int?"})}),(0,n.jsx)(i.td,{children:"ID Subjek CSA dari indikator."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"categoryID"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"int"})}),(0,n.jsx)(i.td,{children:"ID kategori dari indikator."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"hashID"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"String"})}),(0,n.jsx)(i.td,{children:"ID hash dari indikator."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"value"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"double"})}),(0,n.jsx)(i.td,{children:"Nilai dari indikator strategis."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"unit"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"String"})}),(0,n.jsx)(i.td,{children:"Satuan dari indikator."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"dataSource"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"String"})}),(0,n.jsx)(i.td,{children:"Sumber data dari indikator."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"period"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"String"})}),(0,n.jsx)(i.td,{children:"Periode data dari indikator."})]})]})]})]})}function h(t={}){const{wrapper:i}={...(0,r.a)(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(o,{...t})}):o(t)}},3033:(t,i,e)=>{e.d(i,{Z:()=>n});const n=e.p+"assets/images/static_tables-90a9349498e63e565eb4ee700f4ee25b.gif"},1151:(t,i,e)=>{e.d(i,{Z:()=>s,a:()=>a});var n=e(7294);const r={},d=n.createContext(r);function a(t){const i=n.useContext(d);return n.useMemo((function(){return"function"==typeof t?t(i):{...i,...t}}),[i,t])}function s(t){let i;return i=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:a(t.components),n.createElement(d.Provider,{value:i},t.children)}}}]);