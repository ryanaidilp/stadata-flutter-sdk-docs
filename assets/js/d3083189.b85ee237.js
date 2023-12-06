"use strict";(self.webpackChunkstadata_flutter_sdk=self.webpackChunkstadata_flutter_sdk||[]).push([[1293],{6749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=n(5893),i=n(1151);const r={},a="News Categories",d={id:"api-docs/list/news-categories",title:"News Categories",description:"This method is used to retrieve a list of news categories based on the selected domain (region).",source:"@site/docs/api-docs/list/news-categories.md",sourceDirName:"api-docs/list",slug:"/api-docs/list/news-categories",permalink:"/stadata-flutter-sdk-docs/docs/api-docs/list/news-categories",draft:!1,unlisted:!1,editUrl:"https://github.com/ryanaidilp/stadata-flutter-sdk-docs/tree/main/docs/api-docs/list/news-categories.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Infographics",permalink:"/stadata-flutter-sdk-docs/docs/api-docs/list/infographics"},next:{title:"News",permalink:"/stadata-flutter-sdk-docs/docs/api-docs/list/news"}},o={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Properties (NewsCategory)",id:"properties-newscategory",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"news-categories",children:"News Categories"}),"\n",(0,s.jsx)(t.p,{children:"This method is used to retrieve a list of news categories based on the selected domain (region)."}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"domain"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"The domain (region) code for retrieving news categories."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"lang"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"DataLanguage"})}),(0,s.jsxs)(t.td,{children:["The language for news categories data (default: ",(0,s.jsx)(t.code,{children:"DataLanguage.id"}),")."]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"Example usage and sample output:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Preview",src:n(9612).Z+"",width:"296",height:"640"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"// Fetch news categories data from BPS API\nfinal result = await StadataFlutter.instance.list.newsCategories(domain: '7200');\nfinal newsCategoryList = result.data;\nfinal pagination = result.pagination;\n\n\n// Print pagination info\nprint('Current Page: ${pagination.page}');\nprint('Total Pages: ${pagination.pages}');\nprint('Data Count in This Page: ${pagination.count}');\nprint('Per Page: ${pagination.perPage}');\nprint('Total: ${pagination.total}');\nprint('------------------------');\n\n// Print the retrieved news category data\nfor (final newsCategory in newsCategoryList) {\n    print('News Category ID: ${newsCategory.id}');\n    print('News Category Name: ${newsCategory.name}');\n}\n\n"})}),"\n",(0,s.jsx)(t.h2,{id:"properties-newscategory",children:"Properties (NewsCategory)"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"id"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"The unique identifier for the news category."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"name"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"The name for the news category."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},9612:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/news_categories-a701b19c7bee55bd17b03ebedefa9157.gif"},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>a});var s=n(7294);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);