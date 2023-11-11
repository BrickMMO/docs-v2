"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1371],{185983:function(t,e,n){n.d(e,{RR:function(){return u},cv:function(){return c},oo:function(){return o}});var i=n(71347);function r(t,e,n){let r,{reference:o,floating:l}=t,u=(0,i.Qq)(e),f=(0,i.Wh)(e),c=(0,i.I4)(f),s=(0,i.k3)(e),a="y"===u,d=o.x+o.width/2-l.width/2,p=o.y+o.height/2-l.height/2,h=o[c]/2-l[c]/2;switch(s){case"top":r={x:d,y:o.y-l.height};break;case"bottom":r={x:d,y:o.y+o.height};break;case"right":r={x:o.x+o.width,y:p};break;case"left":r={x:o.x-l.width,y:p};break;default:r={x:o.x,y:o.y}}switch((0,i.hp)(e)){case"start":r[f]-=h*(n&&a?-1:1);break;case"end":r[f]+=h*(n&&a?-1:1)}return r}let o=async(t,e,n)=>{let{placement:i="bottom",strategy:o="absolute",middleware:l=[],platform:u}=n,f=l.filter(Boolean),c=await (null==u.isRTL?void 0:u.isRTL(e)),s=await u.getElementRects({reference:t,floating:e,strategy:o}),{x:a,y:d}=r(s,i,c),p=i,h={},m=0;for(let n=0;n<f.length;n++){let{name:l,fn:g}=f[n],{x:y,y:w,data:x,reset:v}=await g({x:a,y:d,initialPlacement:i,placement:p,strategy:o,middlewareData:h,rects:s,platform:u,elements:{reference:t,floating:e}});if(a=null!=y?y:a,d=null!=w?w:d,h={...h,[l]:{...h[l],...x}},v&&m<=50){m++,"object"==typeof v&&(v.placement&&(p=v.placement),v.rects&&(s=!0===v.rects?await u.getElementRects({reference:t,floating:e,strategy:o}):v.rects),{x:a,y:d}=r(s,p,c)),n=-1;continue}}return{x:a,y:d,placement:p,strategy:o,middlewareData:h}};async function l(t,e){var n;void 0===e&&(e={});let{x:r,y:o,platform:l,rects:u,elements:f,strategy:c}=t,{boundary:s="clippingAncestors",rootBoundary:a="viewport",elementContext:d="floating",altBoundary:p=!1,padding:h=0}=(0,i.ku)(e,t),m=(0,i.yd)(h),g=f[p?"floating"===d?"reference":"floating":d],y=(0,i.JB)(await l.getClippingRect({element:null==(n=await (null==l.isElement?void 0:l.isElement(g)))||n?g:g.contextElement||await (null==l.getDocumentElement?void 0:l.getDocumentElement(f.floating)),boundary:s,rootBoundary:a,strategy:c})),w="floating"===d?{...u.floating,x:r,y:o}:u.reference,x=await (null==l.getOffsetParent?void 0:l.getOffsetParent(f.floating)),v=await (null==l.isElement?void 0:l.isElement(x))&&await (null==l.getScale?void 0:l.getScale(x))||{x:1,y:1},b=(0,i.JB)(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({rect:w,offsetParent:x,strategy:c}):w);return{top:(y.top-b.top+m.top)/v.y,bottom:(b.bottom-y.bottom+m.bottom)/v.y,left:(y.left-b.left+m.left)/v.x,right:(b.right-y.right+m.right)/v.x}}let u=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n,r,o,u,f;let{placement:c,middlewareData:s,rects:a,initialPlacement:d,platform:p,elements:h}=e,{mainAxis:m=!0,crossAxis:g=!0,fallbackPlacements:y,fallbackStrategy:w="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:v=!0,...b}=(0,i.ku)(t,e);if(null!=(n=s.arrow)&&n.alignmentOffset)return{};let R=(0,i.k3)(c),E=(0,i.k3)(d)===d,L=await (null==p.isRTL?void 0:p.isRTL(h.floating)),T=y||(E||!v?[(0,i.pw)(d)]:(0,i.gy)(d));y||"none"===x||T.push(...(0,i.KX)(d,v,x,L));let k=[d,...T],F=await l(e,b),C=[],S=(null==(r=s.flip)?void 0:r.overflows)||[];if(m&&C.push(F[R]),g){let t=(0,i.i8)(c,a,L);C.push(F[t[0]],F[t[1]])}if(S=[...S,{placement:c,overflows:C}],!C.every(t=>t<=0)){let t=((null==(o=s.flip)?void 0:o.index)||0)+1,e=k[t];if(e)return{data:{index:t,overflows:S},reset:{placement:e}};let n=null==(u=S.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:u.placement;if(!n)switch(w){case"bestFit":{let t=null==(f=S.map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:f[0];t&&(n=t);break}case"initialPlacement":n=d}if(c!==n)return{reset:{placement:n}}}return{}}}};async function f(t,e){let{placement:n,platform:r,elements:o}=t,l=await (null==r.isRTL?void 0:r.isRTL(o.floating)),u=(0,i.k3)(n),f=(0,i.hp)(n),c="y"===(0,i.Qq)(n),s=["left","top"].includes(u)?-1:1,a=l&&c?-1:1,d=(0,i.ku)(e,t),{mainAxis:p,crossAxis:h,alignmentAxis:m}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return f&&"number"==typeof m&&(h="end"===f?-1*m:m),c?{x:h*a,y:p*s}:{x:p*s,y:h*a}}let c=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){let{x:n,y:i}=e,r=await f(e,t);return{x:n+r.x,y:i+r.y,data:r}}}}},163853:function(t,e,n){n.d(e,{Me:function(){return A},oo:function(){return O}});var i=n(71347),r=n(185983);function o(t){return f(t)?(t.nodeName||"").toLowerCase():"#document"}function l(t){var e;return(null==t?void 0:null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function u(t){var e;return null==(e=(f(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function f(t){return t instanceof Node||t instanceof l(t).Node}function c(t){return t instanceof Element||t instanceof l(t).Element}function s(t){return t instanceof HTMLElement||t instanceof l(t).HTMLElement}function a(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof l(t).ShadowRoot)}function d(t){let{overflow:e,overflowX:n,overflowY:i,display:r}=g(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(r)}function p(t){let e=h(),n=g(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(t=>(n.willChange||"").includes(t))||["paint","layout","strict","content"].some(t=>(n.contain||"").includes(t))}function h(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function m(t){return["html","body","#document"].includes(o(t))}function g(t){return l(t).getComputedStyle(t)}function y(t){return c(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function w(t){if("html"===o(t))return t;let e=t.assignedSlot||t.parentNode||a(t)&&t.host||u(t);return a(e)?e.host:e}function x(t,e,n){var i;void 0===e&&(e=[]),void 0===n&&(n=!0);let r=function t(e){let n=w(e);return m(n)?e.ownerDocument?e.ownerDocument.body:e.body:s(n)&&d(n)?n:t(n)}(t),o=r===(null==(i=t.ownerDocument)?void 0:i.body),u=l(r);return o?e.concat(u,u.visualViewport||[],d(r)?r:[],u.frameElement&&n?x(u.frameElement):[]):e.concat(r,x(r,[],n))}function v(t){let e=g(t),n=parseFloat(e.width)||0,r=parseFloat(e.height)||0,o=s(t),l=o?t.offsetWidth:n,u=o?t.offsetHeight:r,f=(0,i.NM)(n)!==l||(0,i.NM)(r)!==u;return f&&(n=l,r=u),{width:n,height:r,$:f}}function b(t){return c(t)?t:t.contextElement}function R(t){let e=b(t);if(!s(e))return(0,i.ze)(1);let n=e.getBoundingClientRect(),{width:r,height:o,$:l}=v(e),u=(l?(0,i.NM)(n.width):n.width)/r,f=(l?(0,i.NM)(n.height):n.height)/o;return u&&Number.isFinite(u)||(u=1),f&&Number.isFinite(f)||(f=1),{x:u,y:f}}let E=(0,i.ze)(0);function L(t){let e=l(t);return h()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:E}function T(t,e,n,r){var o;void 0===e&&(e=!1),void 0===n&&(n=!1);let u=t.getBoundingClientRect(),f=b(t),s=(0,i.ze)(1);e&&(r?c(r)&&(s=R(r)):s=R(t));let a=(void 0===(o=n)&&(o=!1),r&&(!o||r===l(f))&&o)?L(f):(0,i.ze)(0),d=(u.left+a.x)/s.x,p=(u.top+a.y)/s.y,h=u.width/s.x,m=u.height/s.y;if(f){let t=l(f),e=r&&c(r)?l(r):r,n=t.frameElement;for(;n&&r&&e!==t;){let t=R(n),e=n.getBoundingClientRect(),i=g(n),r=e.left+(n.clientLeft+parseFloat(i.paddingLeft))*t.x,o=e.top+(n.clientTop+parseFloat(i.paddingTop))*t.y;d*=t.x,p*=t.y,h*=t.x,m*=t.y,d+=r,p+=o,n=l(n).frameElement}}return(0,i.JB)({width:h,height:m,x:d,y:p})}function k(t){return T(u(t)).left+y(t).scrollLeft}function F(t,e,n){let r;if("viewport"===e)r=function(t,e){let n=l(t),i=u(t),r=n.visualViewport,o=i.clientWidth,f=i.clientHeight,c=0,s=0;if(r){o=r.width,f=r.height;let t=h();(!t||t&&"fixed"===e)&&(c=r.offsetLeft,s=r.offsetTop)}return{width:o,height:f,x:c,y:s}}(t,n);else if("document"===e)r=function(t){let e=u(t),n=y(t),r=t.ownerDocument.body,o=(0,i.Fp)(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),l=(0,i.Fp)(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight),f=-n.scrollLeft+k(t),c=-n.scrollTop;return"rtl"===g(r).direction&&(f+=(0,i.Fp)(e.clientWidth,r.clientWidth)-o),{width:o,height:l,x:f,y:c}}(u(t));else if(c(e))r=function(t,e){let n=T(t,!0,"fixed"===e),r=n.top+t.clientTop,o=n.left+t.clientLeft,l=s(t)?R(t):(0,i.ze)(1),u=t.clientWidth*l.x,f=t.clientHeight*l.y,c=o*l.x,a=r*l.y;return{width:u,height:f,x:c,y:a}}(e,n);else{let n=L(t);r={...e,x:e.x-n.x,y:e.y-n.y}}return(0,i.JB)(r)}function C(t,e){return s(t)&&"fixed"!==g(t).position?e?e(t):t.offsetParent:null}function S(t,e){let n=l(t);if(!s(t))return n;let i=C(t,e);for(;i&&["table","td","th"].includes(o(i))&&"static"===g(i).position;)i=C(i,e);return i&&("html"===o(i)||"body"===o(i)&&"static"===g(i).position&&!p(i))?n:i||function(t){let e=w(t);for(;s(e)&&!m(e);){if(p(e))return e;e=w(e)}return null}(t)||n}let M=async function(t){let{reference:e,floating:n,strategy:r}=t,l=this.getOffsetParent||S,f=this.getDimensions;return{reference:function(t,e,n){let r=s(e),l=u(e),f="fixed"===n,c=T(t,!0,f,e),a={scrollLeft:0,scrollTop:0},p=(0,i.ze)(0);if(r||!r&&!f){if(("body"!==o(e)||d(l))&&(a=y(e)),r){let t=T(e,!0,f,e);p.x=t.x+e.clientLeft,p.y=t.y+e.clientTop}else l&&(p.x=k(l))}return{x:c.left+a.scrollLeft-p.x,y:c.top+a.scrollTop-p.y,width:c.width,height:c.height}}(e,await l(n),r),floating:{x:0,y:0,...await f(n)}}},V={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:r}=t,l=s(n),f=u(n);if(n===f)return e;let c={scrollLeft:0,scrollTop:0},a=(0,i.ze)(1),p=(0,i.ze)(0);if((l||!l&&"fixed"!==r)&&(("body"!==o(n)||d(f))&&(c=y(n)),s(n))){let t=T(n);a=R(n),p.x=t.x+n.clientLeft,p.y=t.y+n.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-c.scrollLeft*a.x+p.x,y:e.y*a.y-c.scrollTop*a.y+p.y}},getDocumentElement:u,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:r,strategy:l}=t,u="clippingAncestors"===n?function(t,e){let n=e.get(t);if(n)return n;let i=x(t,[],!1).filter(t=>c(t)&&"body"!==o(t)),r=null,l="fixed"===g(t).position,u=l?w(t):t;for(;c(u)&&!m(u);){let e=g(u),n=p(u);n||"fixed"!==e.position||(r=null);let o=l?!n&&!r:!n&&"static"===e.position&&!!r&&["absolute","fixed"].includes(r.position)||d(u)&&!n&&function t(e,n){let i=w(e);return!(i===n||!c(i)||m(i))&&("fixed"===g(i).position||t(i,n))}(t,u);o?i=i.filter(t=>t!==u):r=e,u=w(u)}return e.set(t,i),i}(e,this._c):[].concat(n),f=[...u,r],s=f[0],a=f.reduce((t,n)=>{let r=F(e,n,l);return t.top=(0,i.Fp)(r.top,t.top),t.right=(0,i.VV)(r.right,t.right),t.bottom=(0,i.VV)(r.bottom,t.bottom),t.left=(0,i.Fp)(r.left,t.left),t},F(e,s,l));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:S,getElementRects:M,getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){return v(t)},getScale:R,isElement:c,isRTL:function(t){return"rtl"===g(t).direction}};function A(t,e,n,r){let o;void 0===r&&(r={});let{ancestorScroll:l=!0,ancestorResize:f=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:a=!1}=r,d=b(t),p=l||f?[...d?x(d):[],...x(e)]:[];p.forEach(t=>{l&&t.addEventListener("scroll",n,{passive:!0}),f&&t.addEventListener("resize",n)});let h=d&&s?function(t,e){let n,r=null,o=u(t);function l(){clearTimeout(n),r&&r.disconnect(),r=null}return!function u(f,c){void 0===f&&(f=!1),void 0===c&&(c=1),l();let{left:s,top:a,width:d,height:p}=t.getBoundingClientRect();if(f||e(),!d||!p)return;let h=(0,i.GW)(a),m=(0,i.GW)(o.clientWidth-(s+d)),g=(0,i.GW)(o.clientHeight-(a+p)),y=(0,i.GW)(s),w={rootMargin:-h+"px "+-m+"px "+-g+"px "+-y+"px",threshold:(0,i.Fp)(0,(0,i.VV)(1,c))||1},x=!0;function v(t){let e=t[0].intersectionRatio;if(e!==c){if(!x)return u();e?u(!1,e):n=setTimeout(()=>{u(!1,1e-7)},100)}x=!1}try{r=new IntersectionObserver(v,{...w,root:o.ownerDocument})}catch(t){r=new IntersectionObserver(v,w)}r.observe(t)}(!0),l}(d,n):null,m=-1,g=null;c&&(g=new ResizeObserver(t=>{let[i]=t;i&&i.target===d&&g&&(g.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{g&&g.observe(e)})),n()}),d&&!a&&g.observe(d),g.observe(e));let y=a?T(t):null;return a&&function e(){let i=T(t);y&&(i.x!==y.x||i.y!==y.y||i.width!==y.width||i.height!==y.height)&&n(),y=i,o=requestAnimationFrame(e)}(),n(),()=>{p.forEach(t=>{l&&t.removeEventListener("scroll",n),f&&t.removeEventListener("resize",n)}),h&&h(),g&&g.disconnect(),g=null,a&&cancelAnimationFrame(o)}}let O=(t,e,n)=>{let i=new Map,o={platform:V,...n},l={...o.platform,_c:i};return(0,r.oo)(t,e,{...o,platform:l})}},801371:function(t,e,n){n.d(e,{YF:function(){return a}});var i=n(163853),r=n(667294),o=n(462518),l="undefined"!=typeof document?r.useLayoutEffect:r.useEffect;function u(t,e){let n,i,r;if(t===e)return!0;if(typeof t!=typeof e)return!1;if("function"==typeof t&&t.toString()===e.toString())return!0;if(t&&e&&"object"==typeof t){if(Array.isArray(t)){if((n=t.length)!=e.length)return!1;for(i=n;0!=i--;)if(!u(t[i],e[i]))return!1;return!0}if((n=(r=Object.keys(t)).length)!==Object.keys(e).length)return!1;for(i=n;0!=i--;)if(!({}).hasOwnProperty.call(e,r[i]))return!1;for(i=n;0!=i--;){let n=r[i];if(("_owner"!==n||!t.$$typeof)&&!u(t[n],e[n]))return!1}return!0}return t!=t&&e!=e}function f(t){if("undefined"==typeof window)return 1;let e=t.ownerDocument.defaultView||window;return e.devicePixelRatio||1}function c(t,e){let n=f(t);return Math.round(e*n)/n}function s(t){let e=r.useRef(t);return l(()=>{e.current=t}),e}function a(t){void 0===t&&(t={});let{placement:e="bottom",strategy:n="absolute",middleware:a=[],platform:d,elements:{reference:p,floating:h}={},transform:m=!0,whileElementsMounted:g,open:y}=t,[w,x]=r.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[v,b]=r.useState(a);u(v,a)||b(a);let[R,E]=r.useState(null),[L,T]=r.useState(null),k=r.useCallback(t=>{t!=M.current&&(M.current=t,E(t))},[E]),F=r.useCallback(t=>{t!==V.current&&(V.current=t,T(t))},[T]),C=p||R,S=h||L,M=r.useRef(null),V=r.useRef(null),A=r.useRef(w),O=s(g),P=s(d),W=r.useCallback(()=>{if(!M.current||!V.current)return;let t={placement:e,strategy:n,middleware:v};P.current&&(t.platform=P.current),(0,i.oo)(M.current,V.current,t).then(t=>{let e={...t,isPositioned:!0};D.current&&!u(A.current,e)&&(A.current=e,o.flushSync(()=>{x(e)}))})},[v,e,n,P]);l(()=>{!1===y&&A.current.isPositioned&&(A.current.isPositioned=!1,x(t=>({...t,isPositioned:!1})))},[y]);let D=r.useRef(!1);l(()=>(D.current=!0,()=>{D.current=!1}),[]),l(()=>{if(C&&(M.current=C),S&&(V.current=S),C&&S){if(O.current)return O.current(C,S,W);W()}},[C,S,W,O]);let z=r.useMemo(()=>({reference:M,floating:V,setReference:k,setFloating:F}),[k,F]),N=r.useMemo(()=>({reference:C,floating:S}),[C,S]),B=r.useMemo(()=>{let t={position:n,left:0,top:0};if(!N.floating)return t;let e=c(N.floating,w.x),i=c(N.floating,w.y);return m?{...t,transform:"translate("+e+"px, "+i+"px)",...f(N.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:e,top:i}},[n,m,N.floating,w.x,w.y]);return r.useMemo(()=>({...w,update:W,refs:z,elements:N,floatingStyles:B}),[w,W,z,N,B])}},71347:function(t,e,n){n.d(e,{Fp:function(){return r},GW:function(){return l},I4:function(){return p},JB:function(){return R},KX:function(){return x},NM:function(){return o},Qq:function(){return h},VV:function(){return i},Wh:function(){return m},gy:function(){return y},hp:function(){return d},i8:function(){return g},k3:function(){return a},ku:function(){return s},pw:function(){return v},yd:function(){return b},ze:function(){return u}});let i=Math.min,r=Math.max,o=Math.round,l=Math.floor,u=t=>({x:t,y:t}),f={left:"right",right:"left",bottom:"top",top:"bottom"},c={start:"end",end:"start"};function s(t,e){return"function"==typeof t?t(e):t}function a(t){return t.split("-")[0]}function d(t){return t.split("-")[1]}function p(t){return"y"===t?"height":"width"}function h(t){return["top","bottom"].includes(a(t))?"y":"x"}function m(t){return"x"===h(t)?"y":"x"}function g(t,e,n){void 0===n&&(n=!1);let i=d(t),r=m(t),o=p(r),l="x"===r?i===(n?"end":"start")?"right":"left":"start"===i?"bottom":"top";return e.reference[o]>e.floating[o]&&(l=v(l)),[l,v(l)]}function y(t){let e=v(t);return[w(t),e,w(e)]}function w(t){return t.replace(/start|end/g,t=>c[t])}function x(t,e,n,i){let r=d(t),o=function(t,e,n){let i=["left","right"],r=["right","left"];switch(t){case"top":case"bottom":if(n)return e?r:i;return e?i:r;case"left":case"right":return e?["top","bottom"]:["bottom","top"];default:return[]}}(a(t),"start"===n,i);return r&&(o=o.map(t=>t+"-"+r),e&&(o=o.concat(o.map(w)))),o}function v(t){return t.replace(/left|right|bottom|top/g,t=>f[t])}function b(t){return"number"!=typeof t?{top:0,right:0,bottom:0,left:0,...t}:{top:t,right:t,bottom:t,left:t}}function R(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}}}]);