(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(33997)}])},49743:function(e,t,a){"use strict";a.d(t,{Z:function(){return x}});var r=a(828),s=a(85893),n=a(38125),i=a(53858),l=(a(28332),a(59267)),c=a.n(l),d=a(37039);function x(e){var t=e.slug,a=e.date,l=e.readTime,x=e.className,o=((0,d.$G)().t,(0,r.Z)((0,d.cQ)(),1)[0]),u=t?c()[t]:null;return(0,s.jsx)("div",{className:x,children:(0,s.jsxs)("div",{className:"flex flex-row items-center text-sm text-gray-500 dark:text-gray-400",children:[a&&(0,s.jsx)(i.Z,{dateString:a}),u&&(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("span",{className:"mx-2 text-gray-400",children:"\xb7"}),(0,s.jsxs)("div",{className:"flex flex-row space-x-1",children:[(0,s.jsx)("span",{className:"",children:"by"}),(0,s.jsx)(n.Z,{href:{pathname:"/about",query:o},children:(0,s.jsx)("a",{children:u.fullname})})]})]}),l&&(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("span",{className:"mx-2 text-gray-400",children:"\xb7"}),(0,s.jsxs)("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:[l," min read"]})]})]})})}},53858:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var r=a(85893),s=a(78420),n=a(75313);function i(e){var t=e.dateString,a=e.className;if("undefined"===typeof t)return(0,r.jsx)(r.Fragment,{});var i=(0,s.Z)(t);return(0,r.jsx)("time",{className:a,dateTime:t,children:(0,n.Z)(i,"MMM d, yyyy")})}},34244:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var r=a(85893),s=a(828),n=a(38125),i=a(53858),l=a(23096),c=(a(49743),a(28332),a(59267)),d=a.n(c),x=a(37039);function o(e){var t=e.slug,a=e.category,c=e.title,o=e.description,u=e.date,m=e.author,h=(e.cover,e.tags),f=(e.readTime,e.type),g="/".concat(t),p="flex flex-col items-start mb-5",j="flex flex-col w-full px-0";1===f?(p="flex flex-col items-start mb-5","flex w-full pb-2","h-72 lg:h-52",j="flex flex-col w-full px-0"):2===f&&(p="flex flex-row items-start mb-5","flex w-full lg:w-1/2 pb-2","h-40",j="flex flex-col flex-grow w-full px-0");(0,x.$G)().t;var y=(0,s.Z)((0,x.cQ)(),1)[0];d()[m];return(0,r.jsx)("div",{className:p,children:(0,r.jsxs)("div",{className:j,children:[(0,r.jsx)("h2",{className:"pb-2 pt-1",children:(0,r.jsx)(n.Z,{href:{pathname:g,query:y},children:(0,r.jsx)("a",{className:"font-bold text-gray-600 dark:text-gray-300",children:c})})}),(0,r.jsxs)("div",{className:"flex flex-row items-center pb-2",children:[(0,r.jsx)(i.Z,{className:"text-xs text-gray-500 dark:text-gray-400",dateString:u}),(0,r.jsx)("span",{className:"mx-2 text-gray-400",children:"\xb7"}),(0,r.jsx)(l.Z,{className:"text-xs",category:a,tags:h})]}),(0,r.jsx)("div",{className:"pb-2",children:(0,r.jsx)(n.Z,{href:{pathname:g,query:y},children:(0,r.jsx)("a",{children:o})})})]})})}function u(e){var t=[],a=[],s=e.postsData;return(0,r.jsxs)("div",{children:[(0,r.jsx)("section",{className:"flex flex-col",children:t.length>0&&t.map((function(e){var t=e.slug,a=e.category,s=e.title,n=e.description,i=e.date,l=e.author,c=e.cover,d=e.tags,x=e.readTime;return(0,r.jsx)("div",{children:(0,r.jsx)(o,{slug:t,category:a,title:s,description:n,date:i,author:l,cover:c,tags:d,readTime:x,type:0},t)},t)}))}),(0,r.jsx)("section",{className:"flex flex-col lg:flex-row lg:gap-x-8",children:a.length>0&&a.map((function(e){var t=e.slug,a=e.category,s=e.title,n=e.description,i=e.date,l=e.author,c=e.cover,d=e.tags,x=e.readTime;return(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)(o,{slug:t,category:a,title:s,description:n,date:i,author:l,cover:c,tags:d,readTime:x,type:1},t)},t)}))}),(0,r.jsx)("section",{className:"flex flex-col",children:s.length>0&&s.map((function(e){var t=e.slug,a=e.category,s=e.title,n=e.description,i=e.date,l=e.author,c=e.cover,d=e.tags,x=e.readTime;return(0,r.jsx)("div",{children:(0,r.jsx)(o,{slug:t,category:a,title:s,description:n,date:i,author:l,cover:c,tags:d,readTime:x,type:2},t)},t)}))})]})}},23096:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var r=a(828),s=a(85893),n=a(38125),i=a(37039);function l(e){var t=e.category,a=e.tags,l=e.className,c=(0,i.$G)().t,d=(0,r.Z)((0,i.cQ)(),1)[0];return(0,s.jsx)("span",{className:l,children:(0,s.jsxs)("span",{className:"flex flex-row space-x-2",children:[t&&(0,s.jsx)(n.Z,{href:{pathname:"/categories/".concat(t),query:d},children:(0,s.jsx)("a",{className:"inline-block text-gray-500 dark:text-gray-400",children:c(t)})},t),null===a||void 0===a?void 0:a.split(",").map((function(e){return e=e.trim(),(0,s.jsx)(n.Z,{href:{pathname:"/tags/".concat(e),query:d},children:(0,s.jsx)("a",{className:"inline-block text-gray-500 dark:text-gray-400",children:"#".concat(e)})},e)}))]})})}},33997:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return u},default:function(){return m}});var r=a(828),s=a(85893),n=a(2962),i=a(67424),l=a(59267),c=a.n(l),d=a(38125),x=(a(28332),a(37039));function o(e){e.darkMode;var t=(0,x.$G)().t,a=(0,r.Z)((0,x.cQ)(),1)[0];return(0,s.jsx)("div",{className:"sk-hero relative isolate",children:(0,s.jsx)("div",{className:"mx-auto max-w-2xl py-32 sm:py-32 lg:py-32",children:(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("h1",{className:"text-4xl font-bold tracking-tight sm:text-5xl",children:"Empowering Communication, Enhancing Education"}),(0,s.jsx)("p",{className:"mt-10 text-lg leading-8 text-gray-200",children:"We specialize in crafting innovative learning applications through NLP-powered solutions. With a commitment to excellence and a focus on user-centric design, we're here to transform the way you learn and communicate."}),(0,s.jsx)("div",{className:"mt-10 flex items-center justify-center gap-x-6",children:(0,s.jsx)(d.Z,{href:{pathname:"/about",query:a},children:(0,s.jsxs)("a",{className:"text-sm font-semibold leading-6 text-gray-500 dark:text-gray-200 hover:text-gray-800",children:[t("learn_more")," ",(0,s.jsx)("span",{"aria-hidden":"true",children:"\u2192"})]})})})]})})})}a(34244);var u=!0;function m(e){e.postsData;var t=e.darkMode,a=(0,x.$G)().t,l=(0,r.Z)((0,x.cQ)(),1)[0],d="".concat(c().site.url);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.PB,{title:a("site_title"),description:a("site_description"),canonical:d,openGraph:{type:"profile",site_name:a("site_name"),locale:l&&"fa"===l.lang?"fa_IR":"en_US",url:d,title:a("site_title"),description:a("site_description"),images:[c().site.og.image1]}}),(0,s.jsx)(i.Z,{darkMode:t,className:"with-bg",children:(0,s.jsx)(o,{darkMode:t})})]})}}},function(e){e.O(0,[840,771,424,774,888,179],(function(){return t=75557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);