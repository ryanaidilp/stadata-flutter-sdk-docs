"use strict";(self.webpackChunkstadata_flutter_sdk=self.webpackChunkstadata_flutter_sdk||[]).push([[6538],{8327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=n(5893),d=n(1151);const i={},r="News",c={id:"api-docs/view/news",title:"News",description:"This method is used to retrieve detailed information about a specific news.",source:"@site/versioned_docs/version-0.6.3/api-docs/view/news.md",sourceDirName:"api-docs/view",slug:"/api-docs/view/news",permalink:"/stadata-flutter-sdk-docs/docs/0.6.3/api-docs/view/news",draft:!1,unlisted:!1,editUrl:"https://github.com/ryanaidilp/stadata-flutter-sdk-docs/tree/main/versioned_docs/version-0.6.3/api-docs/view/news.md",tags:[],version:"0.6.3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/stadata-flutter-sdk-docs/docs/0.6.3/api-docs/view/intro"},next:{title:"Press Release",permalink:"/stadata-flutter-sdk-docs/docs/0.6.3/api-docs/view/press-release"}},a={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Properties (News)",id:"properties-news",level:2}];function o(e){const t={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"news",children:"News"}),"\n",(0,s.jsx)(t.p,{children:"This method is used to retrieve detailed information about a specific news."}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"id"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"int"})}),(0,s.jsx)(t.td,{children:"The unique identifier of the news."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"domain"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"The domain (region) code for retrieving news detail."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"lang"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"DataLanguage"})}),(0,s.jsxs)(t.td,{children:["The language for news data (default: ",(0,s.jsx)(t.code,{children:"DataLanguage.id"}),")."]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"Example usage and sample output:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Preview",src:n(8950).Z+"",width:"296",height:"640"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"// Fetch news detail from BPS API\nfinal news = await StadataFlutter.instance.view.news(id: 12:, domain: '7200');\n\n// Print the retrieved news category data\nprint('News ID: ${news.id}');\nprint('Category: ${news.category}');\nprint('Title: ${news.title}');\nprint('Content: ${news.content}');\nprint('Release Date: ${news.releaseDate}');\nprint('Picture: ${news.picture}');\nprint('------------------------');\n"})}),"\n",(0,s.jsx)(t.h2,{id:"properties-news",children:"Properties (News)"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"id"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"int"})}),(0,s.jsx)(t.td,{children:"The unique identifier for the news."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"categoryId"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"The category identifier for the news (optional)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"category"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String?"})}),(0,s.jsx)(t.td,{children:"The name of the news category (optional)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"title"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"The title of the news."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"content"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"The content of the news."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"releaseDate"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"DateTime"})}),(0,s.jsx)(t.td,{children:"The date when the news was released."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"picture"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"The picture associated with the news."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8950:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/news-77b830f5b4ad365ccf15a5b10e9c742e.gif"},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var s=n(7294);const d={},i=s.createContext(d);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);