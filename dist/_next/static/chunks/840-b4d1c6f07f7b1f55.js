(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[840],{79361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},71210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,i){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},28045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(79361).Z,o=n(94941).Z,r=n(53929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,l=e.unoptimized,s=void 0!==l&&l,g=e.priority,m=void 0!==g&&g,w=e.loading,j=e.lazyRoot,_=void 0===j?null:j,k=e.lazyBoundary,L=e.className,R=e.quality,T=e.width,P=e.height,C=e.style,A=e.objectFit,H=e.objectPosition,M=e.onLoadingComplete,I=e.placeholder,D=void 0===I?"empty":I,N=e.blurDataURL,U=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),q=u.useContext(h.ImageConfigContext),Y=u.useMemo((function(){var e=v||q||f.imageConfigDefault,t=r(e.deviceSizes).concat(r(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return a({},e,{allSizes:t,deviceSizes:n})}),[q]),B=U,W=n?"responsive":"intrinsic";"layout"in B&&(B.layout&&(W=B.layout),delete B.layout);var Z=z;if("loader"in B){if(B.loader){var F=B.loader;Z=function(e){e.config;var t=c(e,["config"]);return F(t)}}delete B.loader}var V="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(t)){var K=S(t)?t.default:t;if(!K.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(N=N||K.blurDataURL,V=K.src,(!W||"fill"!==W)&&(P=P||K.height,T=T||K.width,!K.height||!K.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)))}var G=!m&&("lazy"===w||"undefined"===typeof w);((t="string"===typeof t?t:V).startsWith("data:")||t.startsWith("blob:"))&&(s=!0,G=!1);y.has(t)&&(G=!1);Y.unoptimized&&(s=!0);var J,Q=o(u.useState(!1),2),X=Q[0],$=Q[1],ee=o(p.useIntersection({rootRef:_,rootMargin:k||"200px",disabled:!G}),3),te=ee[0],ne=ee[1],ie=ee[2],oe=!G||ne,re={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ae={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le=!1,se={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:A,objectPosition:H},ce=O(T),ue=O(P),de=O(R);0;var fe=Object.assign({},C,se),pe="blur"!==D||X?{}:{backgroundSize:A||"cover",backgroundPosition:H||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(N,'")')};if("fill"===W)re.display="block",re.position="absolute",re.top=0,re.left=0,re.bottom=0,re.right=0;else if("undefined"!==typeof ce&&"undefined"!==typeof ue){var he=ue/ce,ge=isNaN(he)?"100%":"".concat(100*he,"%");"responsive"===W?(re.display="block",re.position="relative",le=!0,ae.paddingTop=ge):"intrinsic"===W?(re.display="inline-block",re.position="relative",re.maxWidth="100%",le=!0,ae.maxWidth="100%",J="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ce,"%27%20height=%27").concat(ue,"%27/%3e")):"fixed"===W&&(re.display="inline-block",re.position="relative",re.width=ce,re.height=ue)}else 0;var me={src:b,srcSet:void 0,sizes:void 0};oe&&(me=x({config:Y,src:t,unoptimized:s,layout:W,width:ce,quality:de,sizes:n,loader:Z}));var ve=t;0;var ye;0;var be=(i(ye={},"imagesrcset",me.srcSet),i(ye,"imagesizes",me.sizes),i(ye,"crossOrigin",B.crossOrigin),ye),we=u.default.useLayoutEffect,Se=u.useRef(M),xe=u.useRef(t);u.useEffect((function(){Se.current=M}),[M]),we((function(){xe.current!==t&&(ie(),xe.current=t)}),[ie,t]);var Oe=a({isLazy:G,imgAttributes:me,heightInt:ue,widthInt:ce,qualityInt:de,layout:W,className:L,imgStyle:fe,blurStyle:pe,loading:w,config:Y,unoptimized:s,placeholder:D,loader:Z,srcString:ve,onLoadingCompleteRef:Se,setBlurComplete:$,setIntersection:te,isVisible:oe,noscriptSizes:n},B);return u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{style:re},le?u.default.createElement("span",{style:ae},J?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:J}):null):null,u.default.createElement(E,Object.assign({},Oe))),m?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+me.src+me.srcSet+me.sizes,rel:"preload",as:"image",href:me.srcSet?void 0:me.src},be))):null)};var a=n(6495).Z,l=n(92648).Z,s=n(91598).Z,c=n(17273).Z,u=s(n(67294)),d=l(n(5443)),f=n(99309),p=n(57190),h=n(59977),g=(n(63794),n(82392));function m(e){return"/"===e[0]?e.slice(1):e}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0},y=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,o=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(g.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,o=e.quality,r=new URL("".concat(t.path).concat(m(n))),a=r.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),o&&a.set("q",o.toString()),r.href}],["cloudinary",function(e){var t=e.config,n=e.src,i=["f_auto","c_limit","w_"+e.width,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(t.path).concat(i).concat(m(n))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(m(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function x(e){var t=e.config,n=e.src,i=e.unoptimized,o=e.layout,a=e.width,l=e.quality,s=e.sizes,c=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,i){var o=e.deviceSizes,a=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var l,s=/(^|\s)(1?\d?\d)vw/g,c=[];l=s.exec(i);l)c.push(parseInt(l[2]));if(c.length){var u,d=.01*(u=Math).min.apply(u,r(c));return{widths:a.filter((function(e){return e>=o[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:o,kind:"w"}:{widths:r(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,o,s),d=u.widths,f=u.kind,p=d.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:d.map((function(e,i){return"".concat(c({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:i+1).concat(f)})).join(", "),src:c({config:t,src:n,quality:l,width:d[p]})}}function O(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function z(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",i=w.get(n);if(i)return i(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function j(e,t,n,i,o,r){e&&e.src!==b&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(y.add(t),"blur"===i&&r(!0),null==o?void 0:o.current)){var n=e.naturalWidth,a=e.naturalHeight;o.current({naturalWidth:n,naturalHeight:a})}})))}var E=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),i=e.qualityInt,o=e.layout,r=e.className,l=e.imgStyle,s=e.blurStyle,d=e.isLazy,f=e.placeholder,p=e.loading,h=e.srcString,g=e.config,m=e.unoptimized,v=e.loader,y=e.onLoadingCompleteRef,b=e.setBlurComplete,w=e.setIntersection,S=e.onLoad,O=e.onError,z=(e.isVisible,e.noscriptSizes),E=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return p=d?"lazy":p,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},E,t,{decoding:"async","data-nimg":o,className:r,style:a({},l,s),ref:u.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&j(e,h,0,f,y,b)}),[w,h,o,f,y,b]),onLoad:function(e){j(e.currentTarget,h,0,f,y,b),S&&S(e)},onError:function(e){"blur"===f&&b(!0),O&&O(e)}})),(d||"blur"===f)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},E,x({config:g,src:h,unoptimized:m,layout:o,width:n,quality:i,sizes:z,loader:v}),{decoding:"async","data-nimg":o,style:l,className:r,loading:p}))))};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},48418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(94941).Z;n(45753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(92648).Z,r=n(17273).Z,a=o(n(67294)),l=n(76273),s=n(22725),c=n(63462),u=n(21018),d=n(57190),f=n(71210),p=n(98684),h={};function g(e,t,n,i){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,i)).catch((function(e){0}));var o=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;h[t+"%"+n+(o?"%"+o:"")]=!0}}var m=a.default.forwardRef((function(e,t){var n,o=e.href,m=e.as,v=e.children,y=e.prefetch,b=e.passHref,w=e.replace,S=e.shallow,x=e.scroll,O=e.locale,z=e.onClick,j=e.onMouseEnter,E=e.onTouchStart,_=e.legacyBehavior,k=void 0===_?!0!==Boolean(!1):_,L=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,!k||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var R=!1!==y,T=a.default.useContext(c.RouterContext),P=a.default.useContext(u.AppRouterContext);P&&(T=P);var C,A=a.default.useMemo((function(){var e=i(l.resolveHref(T,o,!0),2),t=e[0],n=e[1];return{href:t,as:m?l.resolveHref(T,m):n||t}}),[T,o,m]),H=A.href,M=A.as,I=a.default.useRef(H),D=a.default.useRef(M);k&&(C=a.default.Children.only(n));var N=k?C&&"object"===typeof C&&C.ref:t,U=i(d.useIntersection({rootMargin:"200px"}),3),q=U[0],Y=U[1],B=U[2],W=a.default.useCallback((function(e){D.current===M&&I.current===H||(B(),D.current=M,I.current=H),q(e),N&&("function"===typeof N?N(e):"object"===typeof N&&(N.current=e))}),[M,N,H,B,q]);a.default.useEffect((function(){var e=Y&&R&&l.isLocalURL(H),t="undefined"!==typeof O?O:T&&T.locale,n=h[H+"%"+M+(t?"%"+t:"")];e&&!n&&g(T,H,M,{locale:t})}),[M,H,Y,O,R,T]);var Z={ref:W,onClick:function(e){k||"function"!==typeof z||z(e),k&&C.props&&"function"===typeof C.props.onClick&&C.props.onClick(e),e.defaultPrevented||function(e,t,n,i,o,r,s,c,u,d){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var f=function(){"beforePopState"in t?t[o?"replace":"push"](n,i,{shallow:r,locale:c,scroll:s}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!d})};u?a.default.startTransition(f):f()}}(e,T,H,M,w,S,x,O,Boolean(P),R)},onMouseEnter:function(e){k||"function"!==typeof j||j(e),k&&C.props&&"function"===typeof C.props.onMouseEnter&&C.props.onMouseEnter(e),!R&&P||l.isLocalURL(H)&&g(T,H,M,{priority:!0})},onTouchStart:function(e){k||"function"!==typeof E||E(e),k&&C.props&&"function"===typeof C.props.onTouchStart&&C.props.onTouchStart(e),!R&&P||l.isLocalURL(H)&&g(T,H,M,{priority:!0})}};if(!k||b||"a"===C.type&&!("href"in C.props)){var F="undefined"!==typeof O?O:T&&T.locale,V=T&&T.isLocaleDomain&&f.getDomainLocale(M,F,T.locales,T.domainLocales);Z.href=V||p.addBasePath(s.addLocale(M,F,T&&T.defaultLocale))}return k?a.default.cloneElement(C,Z):a.default.createElement("a",Object.assign({},L,Z),n)}));t.default=m,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},57190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(94941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,u=i(o.useState(!1),2),d=u[0],f=u[1],p=i(o.useState(null),2),h=p[0],g=p[1];o.useEffect((function(){if(a){if(c||d)return;if(h&&h.tagName){var e=function(e,t,n){var i=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},i=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(i&&(t=l.get(i)))return t;var o=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:r,elements:o},s.push(n),l.set(n,t),t}(n),o=i.id,r=i.observer,a=i.elements;return a.set(e,t),r.observe(e),function(){if(a.delete(e),r.unobserve(e),0===a.size){r.disconnect(),l.delete(o);var t=s.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&s.splice(t,1)}}}(h,(function(e){return e&&f(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!d){var i=r.requestIdleCallback((function(){return f(!0)}));return function(){return r.cancelIdleCallback(i)}}}),[h,c,n,t,d]);var m=o.useCallback((function(){f(!1)}),[]);return[g,d,m]};var o=n(67294),r=n(9311),a="function"===typeof IntersectionObserver,l=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},21018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var i=(0,n(92648).Z)(n(67294)),o=i.default.createContext(null);t.AppRouterContext=o;var r=i.default.createContext(null);t.LayoutRouterContext=r;var a=i.default.createContext(null);t.GlobalLayoutRouterContext=a;var l=i.default.createContext(null);t.TemplateContext=l},25675:function(e,t,n){e.exports=n(28045)},41664:function(e,t,n){e.exports=n(48418)},75:function(e,t,n){var i=n(83454);(function(){var t,n,o,r,a,l;"undefined"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!==typeof i&&null!==i&&i.hrtime?(e.exports=function(){return(t()-a)/1e6},n=i.hrtime,r=(t=function(){var e;return 1e9*(e=n())[0]+e[1]})(),l=1e9*i.uptime(),a=r-l):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)},92703:function(e,t,n){"use strict";var i=n(50414);function o(){}function r(){}r.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,r,a){if(a!==i){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:o};return n.PropTypes=n,n}},45697:function(e,t,n){e.exports=n(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},54087:function(e,t,n){for(var i=n(75),o="undefined"===typeof window?n.g:window,r=["moz","webkit"],a="AnimationFrame",l=o["request"+a],s=o["cancel"+a]||o["cancelRequest"+a],c=0;!l&&c<r.length;c++)l=o[r[c]+"Request"+a],s=o[r[c]+"Cancel"+a]||o[r[c]+"CancelRequest"+a];if(!l||!s){var u=0,d=0,f=[];l=function(e){if(0===f.length){var t=i(),n=Math.max(0,16.666666666666668-(t-u));u=n+t,setTimeout((function(){var e=f.slice(0);f.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(u)}catch(n){setTimeout((function(){throw n}),0)}}),Math.round(n))}return f.push({handle:++d,callback:e,cancelled:!1}),d},s=function(e){for(var t=0;t<f.length;t++)f[t].handle===e&&(f[t].cancelled=!0)}}e.exports=function(e){return l.call(o,e)},e.exports.cancel=function(){s.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=l,e.cancelAnimationFrame=s}},51517:function(e,t,n){"use strict";var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(67294),a=f(r),l=f(n(45697)),s=f(n(96774)),c=f(n(54087)),u=f(n(23028)),d=f(n(74509));function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}var h=function(){},g=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setRef=function(e){return n.inner=e},n.setHeightOffset=function(){n.setState({height:n.inner?n.inner.offsetHeight:""}),n.resizeTicking=!1},n.getScrollY=function(){return void 0!==n.props.parent().pageYOffset?n.props.parent().pageYOffset:void 0!==n.props.parent().scrollTop?n.props.parent().scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},n.getViewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},n.getDocumentHeight=function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,t.scrollHeight,e.offsetHeight,t.offsetHeight,e.clientHeight,t.clientHeight)},n.getElementPhysicalHeight=function(e){return Math.max(e.offsetHeight,e.clientHeight)},n.getElementHeight=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},n.getScrollerPhysicalHeight=function(){var e=n.props.parent();return e===window||e===document.body?n.getViewportHeight():n.getElementPhysicalHeight(e)},n.getScrollerHeight=function(){var e=n.props.parent();return e===window||e===document.body?n.getDocumentHeight():n.getElementHeight(e)},n.isOutOfBound=function(e){var t=e<0,i=n.getScrollerPhysicalHeight(),o=n.getScrollerHeight();return t||e+i>o},n.handleScroll=function(){n.scrollTicking||(n.scrollTicking=!0,(0,c.default)(n.update))},n.handleResize=function(){n.resizeTicking||(n.resizeTicking=!0,(0,c.default)(n.setHeightOffset))},n.unpin=function(){n.props.onUnpin(),n.setState({translateY:"-100%",className:"headroom headroom--unpinned",animation:!0,state:"unpinned"})},n.unpinSnap=function(){n.props.onUnpin(),n.setState({translateY:"-100%",className:"headroom headroom--unpinned headroom-disable-animation",animation:!1,state:"unpinned"})},n.pin=function(){n.props.onPin(),n.setState({translateY:0,className:"headroom headroom--pinned",animation:!0,state:"pinned"})},n.unfix=function(){n.props.onUnfix(),n.setState({translateY:0,className:"headroom headroom--unfixed headroom-disable-animation",animation:!1},(function(){setTimeout((function(){n.setState({state:"unfixed"})}),0)}))},n.update=function(){if(n.currentScrollY=n.getScrollY(),!n.isOutOfBound(n.currentScrollY)){var e=(0,u.default)(n.lastKnownScrollY,n.currentScrollY,n.props,n.state).action;"pin"===e?n.pin():"unpin"===e?n.unpin():"unpin-snap"===e?n.unpinSnap():"unfix"===e&&n.unfix()}n.lastKnownScrollY=n.currentScrollY,n.scrollTicking=!1},n.currentScrollY=0,n.lastKnownScrollY=0,n.scrollTicking=!1,n.resizeTicking=!1,n.eventListenerOptions=!1,n.state={state:"unfixed",translateY:0,className:"headroom headroom--unfixed"},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){return e.disable&&"unfixed"!==t.state?{translateY:0,className:"headroom headroom--unfixed headroom-disable-animation",animation:!1,state:"unfixed"}:null}}]),o(t,[{key:"componentDidMount",value:function(){this.setHeightOffset(),this.eventListenerOptions=!!(0,d.default)()&&{passive:!0,capture:!1},this.props.disable||(this.props.parent().addEventListener("scroll",this.handleScroll,this.eventListenerOptions),this.props.calcHeightOnResize&&this.props.parent().addEventListener("resize",this.handleResize,this.eventListenerOptions))}},{key:"shouldComponentUpdate",value:function(e,t){return!(0,s.default)(this.props,e)||!(0,s.default)(this.state,t)}},{key:"componentDidUpdate",value:function(e,t){e.children!==this.props.children&&this.setHeightOffset(),!e.disable&&this.props.disable?(this.props.parent().removeEventListener("scroll",this.handleScroll,this.eventListenerOptions),this.props.parent().removeEventListener("resize",this.handleResize,this.eventListenerOptions),"unfixed"!==t.state&&"unfixed"===this.state.state&&this.props.onUnfix()):e.disable&&!this.props.disable&&(this.props.parent().addEventListener("scroll",this.handleScroll,this.eventListenerOptions),this.props.calcHeightOnResize&&this.props.parent().addEventListener("resize",this.handleResize,this.eventListenerOptions)),e.pin!==this.props.pin&&this.handleScroll()}},{key:"componentWillUnmount",value:function(){this.props.parent()&&(this.props.parent().removeEventListener("scroll",this.handleScroll,this.eventListenerOptions),this.props.parent().removeEventListener("resize",this.handleResize,this.eventListenerOptions)),window.removeEventListener("scroll",this.handleScroll,this.eventListenerOptions)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.tag,o=p(e,["className","tag"]);delete o.onUnpin,delete o.onPin,delete o.onUnfix,delete o.disableInlineStyles,delete o.disable,delete o.pin,delete o.parent,delete o.children,delete o.upTolerance,delete o.downTolerance,delete o.pinStart,delete o.calcHeightOnResize;var r=o.style,l=o.wrapperStyle,s=p(o,["style","wrapperStyle"]),c={position:this.props.disable||"unfixed"===this.state.state?"relative":"fixed",top:0,left:0,right:0,zIndex:1,WebkitTransform:"translate3D(0, "+this.state.translateY+", 0)",MsTransform:"translate3D(0, "+this.state.translateY+", 0)",transform:"translate3D(0, "+this.state.translateY+", 0)"},u=this.state.className;this.state.animation&&(c=i({},c,{WebkitTransition:"all .2s ease-in-out",MozTransition:"all .2s ease-in-out",OTransition:"all .2s ease-in-out",transition:"all .2s ease-in-out"}),u+=" headroom--scrolled"),c=this.props.disableInlineStyles?r:i({},c,r);var d=i({},l,{height:this.state.height?this.state.height:null}),f=t?t+" headroom-wrapper":"headroom-wrapper";return a.default.createElement(n,{style:d,className:f},a.default.createElement("div",i({ref:this.setRef},s,{style:c,className:u}),this.props.children))}}]),t}(r.Component);g.propTypes={className:l.default.string,parent:l.default.func,children:l.default.any.isRequired,disableInlineStyles:l.default.bool,disable:l.default.bool,pin:l.default.bool,upTolerance:l.default.number,downTolerance:l.default.number,onPin:l.default.func,onUnpin:l.default.func,onUnfix:l.default.func,wrapperStyle:l.default.object,pinStart:l.default.number,style:l.default.object,calcHeightOnResize:l.default.bool,tag:l.default.string},g.defaultProps={parent:function(){return window},disableInlineStyles:!1,disable:!1,pin:!1,upTolerance:5,downTolerance:0,onPin:h,onUnpin:h,onUnfix:h,wrapperStyle:{},pinStart:0,calcHeightOnResize:!0,tag:"div"}},23028:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=t>=e?"down":"up",r=Math.abs(t-e);return n.disable?{action:"none",scrollDirection:o,distanceScrolled:r}:n.pin?{action:"pinned"!==i.state?"pin":"none",scrollDirection:o,distanceScrolled:r}:t<=n.pinStart&&"unfixed"!==i.state?{action:"unfix",scrollDirection:o,distanceScrolled:r}:t<=i.height&&"down"===o&&"unfixed"===i.state?{action:"none",scrollDirection:o,distanceScrolled:r}:t>i.height+n.pinStart&&"down"===o&&"unfixed"===i.state?{action:"unpin-snap",scrollDirection:o,distanceScrolled:r}:"down"===o&&["pinned","unfixed"].indexOf(i.state)>=0&&t>i.height+n.pinStart&&r>n.downTolerance?{action:"unpin",scrollDirection:o,distanceScrolled:r}:"up"===o&&r>n.upTolerance&&["pinned","unfixed"].indexOf(i.state)<0||"up"===o&&t<=i.height&&["pinned","unfixed"].indexOf(i.state)<0?{action:"pin",scrollDirection:o,distanceScrolled:r}:{action:"none",scrollDirection:o,distanceScrolled:r}}},74509:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=!1;try{var t={get passive(){return e=!0,!1}};window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(n){e=!1}return e}},96774:function(e){e.exports=function(e,t,n,i){var o=n?n.call(i,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<r.length;s++){var c=r[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(o=n?n.call(i,u,d,c):void 0)||void 0===o&&u!==d)return!1}return!0}},47568:function(e,t,n){"use strict";function i(e,t,n,i,o,r,a){try{var l=e[r](a),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(i,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function l(e){i(a,o,r,l,s,"next",e)}function s(e){i(a,o,r,l,s,"throw",e)}l(void 0)}))}}n.d(t,{Z:function(){return o}})},99534:function(e,t,n){"use strict";function i(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return i}})}}]);