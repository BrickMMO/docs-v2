(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26221],{121804:function(e,t,o){var n=o(135393)(function(e,t,o){return e+(o?"-":"")+t.toLowerCase()});e.exports=n},704683:function(e,t,o){"use strict";var n=o(80117),r=o(777193),a=o(163804),i=o(667294),l=o(490512),s=o(829624),c=o(315412),d=o(891109),u=o(746618),p=o(717708),h=o(178198),m=o(424633),f=o(602688),v=o(267886),b=o(785893),x=["className","slots","slotProps","direction","orientation","disabled"],Z=function(e){var t=e.classes,o=e.orientation,n=e.disabled;return(0,s.Z)({root:["root",o,n&&"disabled"]},v.C,t)},g=(0,f.ZP)(p.Z,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,o.orientation&&t[o.orientation]]}})(function(e){var t=e.ownerState;return(0,a.Z)((0,r.Z)({width:40,flexShrink:0,opacity:.8},"&.".concat(v.Z.disabled),{opacity:0}),"vertical"===t.orientation&&{width:"100%",height:40,"& svg":{transform:"rotate(".concat(t.isRtl?-90:90,"deg)")}})}),w=i.forwardRef(function(e,t){var o,r,i=(0,m.Z)({props:e,name:"MuiTabScrollButton"}),s=i.className,p=i.slots,f=void 0===p?{}:p,v=i.slotProps,w=void 0===v?{}:v,S=i.direction,y=(i.orientation,i.disabled,(0,n.Z)(i,x)),C="rtl"===(0,h.Z)().direction,j=(0,a.Z)({isRtl:C},i),k=Z(j),T=null!==(o=f.StartScrollButtonIcon)&&void 0!==o?o:d.Z,B=null!==(r=f.EndScrollButtonIcon)&&void 0!==r?r:u.Z,P=(0,c.y)({elementType:T,externalSlotProps:w.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:j}),M=(0,c.y)({elementType:B,externalSlotProps:w.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:j});return(0,b.jsx)(g,(0,a.Z)((0,a.Z)({component:"div",className:(0,l.default)(k.root,s),ref:t,role:null,ownerState:j,tabIndex:null},y),{},{children:"left"===S?(0,b.jsx)(T,(0,a.Z)({},P)):(0,b.jsx)(B,(0,a.Z)({},M))}))});t.Z=w},267886:function(e,t,o){"use strict";o.d(t,{C:function(){return a}});var n=o(173729),r=o(899933);function a(e){return(0,r.Z)("MuiTabScrollButton",e)}var i=(0,n.Z)("MuiTabScrollButton",["root","vertical","horizontal","disabled"]);t.Z=i},170963:function(e,t,o){"use strict";var n=o(80117),r=o(777193),a=o(163804),i=o(667294),l=o(490512),s=o(829624),c=o(717708),d=o(961825),u=o(424633),p=o(602688),h=o(91089),m=o(785893),f=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],v=function(e){var t=e.classes,o=e.textColor,n=e.fullWidth,r=e.wrapped,a=e.icon,i=e.label,l=e.selected,c=e.disabled,u={root:["root",a&&i&&"labelIcon","textColor".concat((0,d.Z)(o)),n&&"fullWidth",r&&"wrapped",l&&"selected",c&&"disabled"],iconWrapper:["iconWrapper"]};return(0,s.Z)(u,h.V,t)},b=(0,p.ZP)(c.Z,{name:"MuiTab",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,o.label&&o.icon&&t.labelIcon,t["textColor".concat((0,d.Z)(o.textColor))],o.fullWidth&&t.fullWidth,o.wrapped&&t.wrapped]}})(function(e){var t,o,n,i=e.theme,l=e.ownerState;return(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},i.typography.button),{},{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},l.label&&{flexDirection:"top"===l.iconPosition||"bottom"===l.iconPosition?"column":"row"}),{},{lineHeight:1.25},l.icon&&l.label&&(0,r.Z)({minHeight:72,paddingTop:9,paddingBottom:9},"& > .".concat(h.Z.iconWrapper),(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},"top"===l.iconPosition&&{marginBottom:6}),"bottom"===l.iconPosition&&{marginTop:6}),"start"===l.iconPosition&&{marginRight:i.spacing(1)}),"end"===l.iconPosition&&{marginLeft:i.spacing(1)}))),"inherit"===l.textColor&&(t={color:"inherit",opacity:.6},(0,r.Z)(t,"&.".concat(h.Z.selected),{opacity:1}),(0,r.Z)(t,"&.".concat(h.Z.disabled),{opacity:(i.vars||i).palette.action.disabledOpacity}),t)),"primary"===l.textColor&&(o={color:(i.vars||i).palette.text.secondary},(0,r.Z)(o,"&.".concat(h.Z.selected),{color:(i.vars||i).palette.primary.main}),(0,r.Z)(o,"&.".concat(h.Z.disabled),{color:(i.vars||i).palette.text.disabled}),o)),"secondary"===l.textColor&&(n={color:(i.vars||i).palette.text.secondary},(0,r.Z)(n,"&.".concat(h.Z.selected),{color:(i.vars||i).palette.secondary.main}),(0,r.Z)(n,"&.".concat(h.Z.disabled),{color:(i.vars||i).palette.text.disabled}),n)),l.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"}),l.wrapped&&{fontSize:i.typography.pxToRem(12)})}),x=i.forwardRef(function(e,t){var o=(0,u.Z)({props:e,name:"MuiTab"}),r=o.className,s=o.disabled,c=void 0!==s&&s,d=o.disableFocusRipple,p=void 0!==d&&d,h=o.fullWidth,x=o.icon,Z=o.iconPosition,g=void 0===Z?"top":Z,w=o.indicator,S=o.label,y=o.onChange,C=o.onClick,j=o.onFocus,k=o.selected,T=o.selectionFollowsFocus,B=o.textColor,P=o.value,M=o.wrapped,N=(0,n.Z)(o,f),E=(0,a.Z)((0,a.Z)({},o),{},{disabled:c,disableFocusRipple:p,selected:k,icon:!!x,iconPosition:g,label:!!S,fullWidth:h,textColor:void 0===B?"inherit":B,wrapped:void 0!==M&&M}),H=v(E),I=x&&S&&i.isValidElement(x)?i.cloneElement(x,{className:(0,l.default)(H.iconWrapper,x.props.className)}):x;return(0,m.jsxs)(b,(0,a.Z)((0,a.Z)({focusRipple:!p,className:(0,l.default)(H.root,r),ref:t,role:"tab","aria-selected":k,disabled:c,onClick:function(e){!k&&y&&y(e,P),C&&C(e)},onFocus:function(e){T&&!k&&y&&y(e,P),j&&j(e)},ownerState:E,tabIndex:k?0:-1},N),{},{children:["top"===g||"start"===g?(0,m.jsxs)(i.Fragment,{children:[I,S]}):(0,m.jsxs)(i.Fragment,{children:[S,I]}),w]}))});t.Z=x},91089:function(e,t,o){"use strict";o.d(t,{V:function(){return a}});var n=o(173729),r=o(899933);function a(e){return(0,r.Z)("MuiTab",e)}var i=(0,n.Z)("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]);t.Z=i},735030:function(e,t,o){"use strict";o.d(t,{Z:function(){return F}});var n=o(648611),r=o(80117),a=o(163804),i=o(777193),l=o(18281),s=o.n(l),c=o(27921),d=o.n(c),u=o(667294);o(659864);var p=o(490512),h=o(829624),m=o(315412),f=o(602688),v=o(424633),b=o(178198),x=o(608698),Z=o(817752);function g(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var w=o(800963),S=o(947013),y=o(785893),C=["onChange"],j={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"},k=o(704683),T=o(610824),B=o(943008),P=o(915527),M=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],N=function(e,t){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild},E=function(e,t){return e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild},H=function(e,t,o){for(var n=!1,r=o(e,t);r;){if(r===e.firstChild){if(n)return;n=!0}var a=r.disabled||"true"===r.getAttribute("aria-disabled");if(!r.hasAttribute("tabindex")||a)r=o(e,r);else{r.focus();return}}},I=function(e){var t=e.vertical,o=e.fixed,n=e.hideScrollbar,r=e.scrollableX,a=e.scrollableY,i=e.centered,l=e.scrollButtonsHideMobile,s=e.classes;return(0,h.Z)({root:["root",t&&"vertical"],scroller:["scroller",o&&"fixed",n&&"hideScrollbar",r&&"scrollableX",a&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",i&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",l&&"scrollButtonsHideMobile"],scrollableX:[r&&"scrollableX"],hideScrollbar:[n&&"hideScrollbar"]},B.m,s)},D=(0,f.ZP)("div",{name:"MuiTabs",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[(0,i.Z)({},"& .".concat(B.Z.scrollButtons),t.scrollButtons),(0,i.Z)({},"& .".concat(B.Z.scrollButtons),o.scrollButtonsHideMobile&&t.scrollButtonsHideMobile),t.root,o.vertical&&t.vertical]}})(function(e){var t=e.ownerState,o=e.theme;return(0,a.Z)((0,a.Z)({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"}),t.scrollButtonsHideMobile&&(0,i.Z)({},"& .".concat(B.Z.scrollButtons),(0,i.Z)({},o.breakpoints.down("sm"),{display:"none"})))}),W=(0,f.ZP)("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:function(e,t){var o=e.ownerState;return[t.scroller,o.fixed&&t.fixed,o.hideScrollbar&&t.hideScrollbar,o.scrollableX&&t.scrollableX,o.scrollableY&&t.scrollableY]}})(function(e){var t=e.ownerState;return(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"}),t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),t.scrollableX&&{overflowX:"auto",overflowY:"hidden"}),t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})}),R=(0,f.ZP)("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:function(e,t){var o=e.ownerState;return[t.flexContainer,o.vertical&&t.flexContainerVertical,o.centered&&t.centered]}})(function(e){var t=e.ownerState;return(0,a.Z)((0,a.Z)({display:"flex"},t.vertical&&{flexDirection:"column"}),t.centered&&{justifyContent:"center"})}),L=(0,f.ZP)("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:function(e,t){return t.indicator}})(function(e){var t=e.ownerState,o=e.theme;return(0,a.Z)((0,a.Z)((0,a.Z)({position:"absolute",height:2,bottom:0,width:"100%",transition:o.transitions.create()},"primary"===t.indicatorColor&&{backgroundColor:(o.vars||o).palette.primary.main}),"secondary"===t.indicatorColor&&{backgroundColor:(o.vars||o).palette.secondary.main}),t.vertical&&{height:"100%",width:2,right:0})}),z=(0,f.ZP)(function(e){var t=e.onChange,o=(0,r.Z)(e,C),n=u.useRef(),i=u.useRef(null),l=function(){n.current=i.current.offsetHeight-i.current.clientHeight};return(0,w.Z)(function(){var e=(0,x.Z)(function(){var e=n.current;l(),e!==n.current&&t(n.current)}),o=(0,S.Z)(i.current);return o.addEventListener("resize",e),function(){e.clear(),o.removeEventListener("resize",e)}},[t]),u.useEffect(function(){l(),t(n.current)},[t]),(0,y.jsx)("div",(0,a.Z)({style:j,ref:i},o))})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),A={},F=u.forwardRef(function(e,t){var o,l,c=(0,v.Z)({props:e,name:"MuiTabs"}),h=(0,b.Z)(),f="rtl"===h.direction,w=c["aria-label"],C=c["aria-labelledby"],j=c.action,B=c.centered,F=c.children,O=c.className,V=c.component,_=void 0===V?"div":V,X=c.allowScrollButtonsMobile,Y=void 0!==X&&X,q=c.indicatorColor,U=c.onChange,K=c.orientation,G=void 0===K?"horizontal":K,J=c.ScrollButtonComponent,Q=void 0===J?k.Z:J,$=c.scrollButtons,ee=void 0===$?"auto":$,et=c.selectionFollowsFocus,eo=c.slots,en=void 0===eo?{}:eo,er=c.slotProps,ea=void 0===er?{}:er,ei=c.TabIndicatorProps,el=void 0===ei?{}:ei,es=c.TabScrollButtonProps,ec=void 0===es?{}:es,ed=c.textColor,eu=void 0===ed?"primary":ed,ep=c.value,eh=c.variant,em=void 0===eh?"standard":eh,ef=c.visibleScrollbar,ev=void 0!==ef&&ef,eb=(0,r.Z)(c,M),ex="scrollable"===em,eZ="vertical"===G,eg=eZ?"scrollTop":"scrollLeft",ew=eZ?"top":"left",eS=eZ?"bottom":"right",ey=eZ?"clientHeight":"clientWidth",eC=eZ?"height":"width",ej=(0,a.Z)((0,a.Z)({},c),{},{component:_,allowScrollButtonsMobile:Y,indicatorColor:void 0===q?"primary":q,orientation:G,vertical:eZ,scrollButtons:ee,textColor:eu,variant:em,visibleScrollbar:ev,fixed:!ex,hideScrollbar:ex&&!ev,scrollableX:ex&&!eZ,scrollableY:ex&&eZ,centered:void 0!==B&&B&&!ex,scrollButtonsHideMobile:!Y}),ek=I(ej),eT=(0,m.y)({elementType:en.StartScrollButtonIcon,externalSlotProps:ea.startScrollButtonIcon,ownerState:ej}),eB=(0,m.y)({elementType:en.EndScrollButtonIcon,externalSlotProps:ea.endScrollButtonIcon,ownerState:ej}),eP=u.useState(!1),eM=(0,n.Z)(eP,2),eN=eM[0],eE=eM[1],eH=u.useState(A),eI=(0,n.Z)(eH,2),eD=eI[0],eW=eI[1],eR=u.useState(!1),eL=(0,n.Z)(eR,2),ez=eL[0],eA=eL[1],eF=u.useState(!1),eO=(0,n.Z)(eF,2),eV=eO[0],e_=eO[1],eX=u.useState(!1),eY=(0,n.Z)(eX,2),eq=eY[0],eU=eY[1],eK=u.useState({overflow:"hidden",scrollbarWidth:0}),eG=(0,n.Z)(eK,2),eJ=eG[0],eQ=eG[1],e$=new(s()),e0=u.useRef(null),e1=u.useRef(null),e2=function(){var e,t,o=e0.current;if(o){var n=o.getBoundingClientRect();e={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollLeftNormalized:(0,Z.T)(o,h.direction),scrollWidth:o.scrollWidth,top:n.top,bottom:n.bottom,left:n.left,right:n.right}}if(o&&!1!==ep){var r=e1.current.children;if(r.length>0){var a=r[e$.get(ep)];t=a?a.getBoundingClientRect():null}}return{tabsMeta:e,tabMeta:t}},e9=(0,T.Z)(function(){var e,t,o=e2(),n=o.tabsMeta,r=o.tabMeta,a=0;if(eZ)t="top",r&&n&&(a=r.top-n.top+n.scrollTop);else if(t=f?"right":"left",r&&n){var l=f?n.scrollLeftNormalized+n.clientWidth-n.scrollWidth:n.scrollLeft;a=(f?-1:1)*(r[t]-n[t]+l)}var s=(e={},(0,i.Z)(e,t,a),(0,i.Z)(e,eC,r?r[eC]:0),e);if(isNaN(eD[t])||isNaN(eD[eC]))eW(s);else{var c=Math.abs(eD[t]-s[t]),d=Math.abs(eD[eC]-s[eC]);(c>=1||d>=1)&&eW(s)}}),e3=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.animation;void 0===o||o?function(e,t,o){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},a=n.ease,i=void 0===a?g:a,l=n.duration,s=void 0===l?300:l,c=null,d=t[e],u=!1;return d===o?r(Error("Element already at target position")):requestAnimationFrame(function n(a){if(u){r(Error("Animation cancelled"));return}null===c&&(c=a);var l=Math.min(1,(a-c)/s);if(t[e]=i(l)*(o-d)+d,l>=1){requestAnimationFrame(function(){r(null)});return}requestAnimationFrame(n)}),function(){u=!0}}(eg,e0.current,e,{duration:h.transitions.duration.standard}):e0.current[eg]=e},e6=function(e){var t=e0.current[eg];eZ?t+=e:(t+=e*(f?-1:1),t*=f&&"reverse"===(0,Z.E)()?-1:1),e3(t)},e8=function(){for(var e=e0.current[ey],t=0,o=d()(e1.current.children),n=0;n<o.length;n+=1){var r=o[n];if(t+r[ey]>e){0===n&&(t=e);break}t+=r[ey]}return t},e4=u.useCallback(function(e){eQ({overflow:null,scrollbarWidth:e})},[]),e5=(0,T.Z)(function(e){var t=e2(),o=t.tabsMeta,n=t.tabMeta;n&&o&&(n[ew]<o[ew]?e3(o[eg]+(n[ew]-o[ew]),{animation:e}):n[eS]>o[eS]&&e3(o[eg]+(n[eS]-o[eS]),{animation:e}))}),e7=(0,T.Z)(function(){ex&&!1!==ee&&eU(!eq)});u.useEffect(function(){var e,t,o=(0,x.Z)(function(){e0.current&&e9()}),n=(0,S.Z)(e0.current);return n.addEventListener("resize",o),"undefined"!=typeof ResizeObserver&&(e=new ResizeObserver(o),d()(e1.current.children).forEach(function(t){e.observe(t)})),"undefined"!=typeof MutationObserver&&(t=new MutationObserver(function(t){t.forEach(function(t){t.removedNodes.forEach(function(t){var o;null===(o=e)||void 0===o||o.unobserve(t)}),t.addedNodes.forEach(function(t){var o;null===(o=e)||void 0===o||o.observe(t)})}),o(),e7()})).observe(e1.current,{childList:!0}),function(){var r,a;o.clear(),n.removeEventListener("resize",o),null===(r=t)||void 0===r||r.disconnect(),null===(a=e)||void 0===a||a.disconnect()}},[e9,e7]),u.useEffect(function(){var e=d()(e1.current.children),t=e.length;if("undefined"!=typeof IntersectionObserver&&t>0&&ex&&!1!==ee){var o=e[0],n=e[t-1],r={root:e0.current,threshold:.99},a=new IntersectionObserver(function(e){eA(!e[0].isIntersecting)},r);a.observe(o);var i=new IntersectionObserver(function(e){e_(!e[0].isIntersecting)},r);return i.observe(n),function(){a.disconnect(),i.disconnect()}}},[ex,ee,eq,null==F?void 0:F.length]),u.useEffect(function(){eE(!0)},[]),u.useEffect(function(){e9()}),u.useEffect(function(){e5(A!==eD)},[e5,eD]),u.useImperativeHandle(j,function(){return{updateIndicator:e9,updateScrollButtons:e7}},[e9,e7]);var te=(0,y.jsx)(L,(0,a.Z)((0,a.Z)({},el),{},{className:(0,p.default)(ek.indicator,el.className),ownerState:ej,style:(0,a.Z)((0,a.Z)({},eD),el.style)})),tt=0,to=u.Children.map(F,function(e){if(!u.isValidElement(e))return null;var t=void 0===e.props.value?tt:e.props.value;e$.set(t,tt);var o=t===ep;return tt+=1,u.cloneElement(e,(0,a.Z)({fullWidth:"fullWidth"===em,indicator:o&&!eN&&te,selected:o,selectionFollowsFocus:et,onChange:U,textColor:eu,value:t},1!==tt||!1!==ep||e.props.tabIndex?{}:{tabIndex:0}))}),tn=((o={}).scrollbarSizeListener=ex?(0,y.jsx)(z,{onChange:e4,className:(0,p.default)(ek.scrollableX,ek.hideScrollbar)}):null,l=ex&&("auto"===ee&&(ez||eV)||!0===ee),o.scrollButtonStart=l?(0,y.jsx)(Q,(0,a.Z)((0,a.Z)({slots:{StartScrollButtonIcon:en.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:eT},orientation:G,direction:f?"right":"left",onClick:function(){e6(-1*e8())},disabled:!ez},ec),{},{className:(0,p.default)(ek.scrollButtons,ec.className)})):null,o.scrollButtonEnd=l?(0,y.jsx)(Q,(0,a.Z)((0,a.Z)({slots:{EndScrollButtonIcon:en.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:eB},orientation:G,direction:f?"left":"right",onClick:function(){e6(e8())},disabled:!eV},ec),{},{className:(0,p.default)(ek.scrollButtons,ec.className)})):null,o);return(0,y.jsxs)(D,(0,a.Z)((0,a.Z)({className:(0,p.default)(ek.root,O),ownerState:ej,ref:t,as:_},eb),{},{children:[tn.scrollButtonStart,tn.scrollbarSizeListener,(0,y.jsxs)(W,{className:ek.scroller,ownerState:ej,style:(0,i.Z)({overflow:eJ.overflow},eZ?"margin".concat(f?"Left":"Right"):"marginBottom",ev?void 0:-eJ.scrollbarWidth),ref:e0,children:[(0,y.jsx)(R,{"aria-label":w,"aria-labelledby":C,"aria-orientation":"vertical"===G?"vertical":null,className:ek.flexContainer,ownerState:ej,onKeyDown:function(e){var t=e1.current,o=(0,P.Z)(t).activeElement;if("tab"===o.getAttribute("role")){var n="horizontal"===G?"ArrowLeft":"ArrowUp",r="horizontal"===G?"ArrowRight":"ArrowDown";switch("horizontal"===G&&f&&(n="ArrowRight",r="ArrowLeft"),e.key){case n:e.preventDefault(),H(t,o,E);break;case r:e.preventDefault(),H(t,o,N);break;case"Home":e.preventDefault(),H(t,null,N);break;case"End":e.preventDefault(),H(t,null,E)}}},ref:e1,role:"tablist",children:to}),eN&&te]}),tn.scrollButtonEnd]}))})},943008:function(e,t,o){"use strict";o.d(t,{m:function(){return a}});var n=o(173729),r=o(899933);function a(e){return(0,r.Z)("MuiTabs",e)}var i=(0,n.Z)("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]);t.Z=i},891109:function(e,t,o){"use strict";o(667294);var n=o(941615),r=o(785893);t.Z=(0,n.Z)((0,r.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},746618:function(e,t,o){"use strict";o(667294);var n=o(941615),r=o(785893);t.Z=(0,n.Z)((0,r.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},817752:function(e,t,o){"use strict";var n;function r(){if(n)return n;var e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),n="reverse",e.scrollLeft>0?n="default":(e.scrollLeft=1,0===e.scrollLeft&&(n="negative")),document.body.removeChild(e),n}function a(e,t){var o=e.scrollLeft;if("rtl"!==t)return o;switch(r()){case"negative":return e.scrollWidth-e.clientWidth+o;case"reverse":return e.scrollWidth-e.clientWidth-o;default:return o}}o.d(t,{E:function(){return r},T:function(){return a}})},510185:function(e,t,o){"use strict";o.d(t,{H:function(){return f},Z:function(){return b}});var n=o(777193),r=o(163804);o(667294);var a=o(811163),i=o(602688),l=o(333346),s=o(735030),c=o(943008),d=o(170963),u=o(91089),p=o(692124),h=o(245510),m=o(785893),f=50,v=(0,i.ZP)(d.Z)(function(e){var t=e.theme;return(0,r.Z)({padding:t.spacing(1),marginBottom:t.spacing(1),marginRight:t.spacing(1),fontWeight:600,minHeight:32,minWidth:0,borderRadius:"12px","&:hover":{background:(t.vars||t).palette.grey[50]}},t.applyDarkStyles({"&:hover":{background:(t.vars||t).palette.primaryDark[700]},"&.Mui-selected":{color:(t.vars||t).palette.primary[300]}}))});function b(e){var t,o,r=e.activeTab,i=e.children,d=e.markdown.headers,f=(0,a.useRouter)(),b=(0,p.useTranslate)(),x=f.pathname.endsWith("[docsTab]")?f.pathname.replace("[docsTab]",""):f.pathname,Z="".concat(x.endsWith("/")?x:"".concat(x,"/"));return(0,m.jsxs)(l.Z,{className:"component-tabs",sx:{display:"inline"},children:[(0,m.jsxs)(s.Z,{value:r,sx:(t={position:"sticky",top:65,mt:1,pt:1,mx:{xs:-2,sm:0},px:{xs:2,sm:0},backgroundColor:function(e){return"dark"===e.palette.mode?e.palette.primaryDark[900]:"rgba(255,255,255)"},borderBottom:1,borderColor:"divider",zIndex:1e3},(0,n.Z)(t,"& .".concat(c.Z.indicator),{transition:"none"}),(0,n.Z)(t,"& .".concat(u.Z.root),(0,n.Z)({overflow:"visible"},"& .".concat(c.Z.indicator),{top:"39px",borderRadius:0})),t),children:[(0,m.jsx)(v,{component:h.default,shallow:!0,scroll:!0,href:x,label:b("api-docs.demos"),value:""}),(null===(o=d.components)||void 0===o?void 0:o.length)>0&&(0,m.jsx)(v,{className:"skip-algolia-crawler",component:h.default,shallow:!0,scroll:!0,href:"".concat(Z,"components-api"),label:b("api-docs.componentsApi"),value:"components-api"}),d.hooks&&d.hooks.length>0&&(0,m.jsx)(v,{className:"skip-algolia-crawler",component:h.default,shallow:!0,scroll:!0,href:"".concat(Z,"hooks-api"),label:b("api-docs.hooksApi"),value:"hooks-api"})]}),i]})}},426221:function(e,t,o){"use strict";o.d(t,{Z:function(){return q}});var n,r,a,i,l,s,c,d,u,p=o(163804),h=o(849088),m=o(648611),f=o(726243),v=o.n(f),b=o(667294),x=o(45697),Z=o.n(x),g=o(811163),w=o(121804),S=o.n(w),y=o(721923),C=o(875795),j=o(692124),k=o(468504),T=o(516577),B=o(65697),P=o(755556),M=o(656603),N=o(912981),E=o(785893);function H(e){var t,o=e.hash,r=e.text,a=e.level,i=void 0===a?"h2":a,l=(0,j.useTranslate)();return(0,E.jsxs)(i,{id:o,children:[(t={demos:l("api-docs.demos"),import:l("api-docs.import"),props:l("api-docs.props"),"theme-default-props":l("api-docs.themeDefaultProps"),inheritance:l("api-docs.inheritance"),slots:l("api-docs.slots"),classes:l("api-docs.classes"),css:l("api-docs.css")})[o]||t[r]||r||o,(0,E.jsx)("a",{"aria-labelledby":o,className:"anchor-link",href:"#".concat(o),tabIndex:-1,children:n||(n=(0,E.jsx)("svg",{children:(0,E.jsx)("use",{xlinkHref:"#anchor-link-icon"})}))})]})}function I(e){var t=e.descriptions,o=e.pageContents,n=(0,j.useTranslate)(),s=(0,j.useUserLanguage)(),c=(0,g.useRouter)();return b.useEffect(function(){var e=c.asPath.indexOf("#")>=0?c.asPath.split("#")[1]:null;c.isReady&&e&&e.indexOf("-unstyled")>=0&&c.replace({hash:"".concat(e.replace("-unstyled",""))},null,{shallow:!0})},[c]),v()(o).map(function(e){var c=o[e],d=c.cssComponent,u=c.filename,p=c.forwardsRefTo,h=c.inheritance,m=c.name,f=c.props,v=c.spread,x=c.styles,Z=c.slots,g=c.classes,w=c.imports,y=t[e][s],C=y.classDescriptions,j=y.propDescriptions,I=y.slotDescriptions,D=u.includes("mui-joy"),W=u.includes("mui-base"),R="";D?R="/joy-ui/customization/overriding-component-structure/":W&&(R="/base-ui/guides/overriding-component-structure/");var L=n("api-docs.refRootElement");null==p&&(L=n("api-docs.refNotHeld"));var z="";v&&(z=n("api-docs.spreadHint").replace(/{{spreadHintElement}}/,h?'<a href="'.concat(h.pathname,'">').concat(h.component,"</a>"):n("api-docs.nativeElement")));var A="";h&&"Transition"===h.component&&(A=n("api-docs.inheritanceSuffixTransition"));var F=S()(m),O=w.join("\n// ".concat(n("or"),"\n"));return(0,E.jsxs)(b.Fragment,{children:[(0,E.jsxs)(T.default,{children:[(0,E.jsx)(H,{hash:F,text:"".concat(m," API")}),(0,E.jsx)(H,{text:"import",hash:"".concat(F,"-import"),level:"h3"}),(0,E.jsx)(k.default,{code:O,language:"jsx"}),(0,E.jsx)("span",{dangerouslySetInnerHTML:{__html:n("api-docs.importDifference")}}),(0,E.jsx)(B.Z,{properties:f,propertiesDescriptions:j,targetName:F,spreadHint:z,level:"h3",titleHash:"".concat(F,"-props")}),r||(r=(0,E.jsx)("br",{})),d&&(0,E.jsxs)(b.Fragment,{children:[(0,E.jsx)("span",{dangerouslySetInnerHTML:{__html:n("api-docs.cssComponent").replace(/{{name}}/,c.name)}}),a||(a=(0,E.jsx)("br",{})),i||(i=(0,E.jsx)("br",{}))]}),(0,E.jsx)("div",{className:"MuiCallout-root MuiCallout-info",dangerouslySetInnerHTML:{__html:L},style:{alignItems:"baseline",gap:"4px",marginTop:0}}),h&&(0,E.jsxs)(b.Fragment,{children:[(0,E.jsx)(H,{text:"inheritance",hash:"".concat(F,"-inheritance"),level:"h3"}),(0,E.jsx)("span",{dangerouslySetInnerHTML:{__html:n("api-docs.inheritanceDescription").replace(/{{component}}/,h.component).replace(/{{pathname}}/,h.pathname).replace(/{{suffix}}/,A).replace(/{{name}}/,c.name)}})]}),c.themeDefaultProps&&(0,E.jsxs)(b.Fragment,{children:[(0,E.jsx)(H,{text:"theme-default-props",hash:"".concat(m,"-theme-default-props"),level:"h4"}),(0,E.jsx)("span",{dangerouslySetInnerHTML:{__html:n("api-docs.themeDefaultPropsDescription").replace(/{{muiName}}/,c.muiName).replace(/{{defaultPropsLink}}/,D?"/joy-ui/customization/themed-components/#theme-default-props":"/material-ui/customization/theme-components/#theme-default-props")}})]}),(0,E.jsx)(P.Z,{componentStyles:x,classDescriptions:C,componentName:m,styleOverridesLink:D?"/joy-ui/customization/themed-components/#theme-style-overrides":"/material-ui/customization/theme-components/#theme-style-overrides",titleHash:"".concat(m,"-css"),level:"h3"}),(0,E.jsx)(N.Z,{componentSlots:Z,slotDescriptions:I,componentName:m,titleHash:"".concat(F,"-slots"),level:"h3",spreadHint:R&&n("api-docs.slotDescription").replace(/{{slotGuideLink}}/,R)}),(0,E.jsx)(M.Z,{componentClasses:g,componentName:c.name,classDescriptions:C,spreadHint:n("api-docs.classesDescription"),titleHash:"".concat(F,"-classes"),level:"h3"})]}),(0,E.jsx)("svg",{style:{display:"none"},xmlns:"http://www.w3.org/2000/svg",children:l||(l=(0,E.jsx)("symbol",{id:"anchor-link-icon",viewBox:"0 0 16 16",children:(0,E.jsx)("path",{d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})}))})]},"component-api-".concat(e))})}function D(e){var t,o=e.hash,n=e.text,r=e.level,a=void 0===r?"h2":r,i=(0,j.useTranslate)();return(0,E.jsxs)(a,{id:o,children:[(t={demos:i("api-docs.demos"),import:i("api-docs.import"),"hook-name":i("api-docs.hookName"),parameters:i("api-docs.parameters"),"return-value":i("api-docs.returnValue")})[o]||t[n]||n||o,(0,E.jsx)("a",{"aria-labelledby":o,className:"anchor-link",href:"#".concat(o),tabIndex:-1,children:s||(s=(0,E.jsx)("svg",{children:(0,E.jsx)("use",{xlinkHref:"#anchor-link-icon"})}))})]})}function W(e){var t=e.descriptions,o=e.pagesContents,n=(0,j.useUserLanguage)(),r=(0,j.useTranslate)();return v()(o).map(function(e){var a=o[e],i=a.name,l=a.parameters,s=a.returnValue,u=a.imports,p=t[e][n],h=p.parametersDescriptions,m=p.returnValueDescriptions,f=S()(i),x=u.join("\n// ".concat(r("or"),"\n"));return(0,E.jsxs)(b.Fragment,{children:[(0,E.jsxs)(T.default,{children:[(0,E.jsx)(D,{hash:f,text:"".concat(i," API")}),(0,E.jsx)(D,{text:"import",hash:"".concat(f,"-import"),level:"h3"}),(0,E.jsx)(k.default,{code:x,language:"jsx"}),(0,E.jsx)("span",{dangerouslySetInnerHTML:{__html:r("api-docs.importDifference")}}),v()(l).length>0?(0,E.jsx)(B.Z,{properties:l,targetName:f,hooksParameters:!0,propertiesDescriptions:h,level:"h3",title:"api-docs.parameters",titleHash:"".concat(f,"-parameters")}):(0,E.jsx)("span",{children:r("api-docs.hooksNoParameters")}),(0,E.jsx)(B.Z,{showOptionalAbbr:!0,properties:s,targetName:f,hooksReturnValue:!0,propertiesDescriptions:m,level:"h3",title:"api-docs.returnValue",titleHash:"".concat(f,"-return-value")}),c||(c=(0,E.jsx)("br",{}))]}),(0,E.jsx)("svg",{style:{display:"none"},xmlns:"http://www.w3.org/2000/svg",children:d||(d=(0,E.jsx)("symbol",{id:"anchor-link-icon",viewBox:"0 0 16 16",children:(0,E.jsx)("path",{d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})}))})]},"hook-api-".concat(e))})}var R=o(543285),L=o(608144),z=o(772184),A=o(400438),F=o(261589),O=o(703391),V=o(948956),_=o(510185),X=o(662208);function Y(e){var t=e.mode,o=(0,C.tv)().setMode;return b.useEffect(function(){o(t)},[t,o]),null}function q(e){var t,o=(0,y.Z)(),n=(0,g.useRouter)(),r=b.useState(null!==(t=n.query.docsTab)&&void 0!==t?t:""),a=(0,m.Z)(r,2),i=a[0],l=a[1],s=(0,z.ln)(n.asPath).canonicalAs,c=e.disableAd,d=void 0!==c&&c,f=e.disableToc,x=e.demos,Z=void 0===x?{}:x,w=e.docs,k=e.demoComponents,T=e.srcComponents,M=e.componentsApiDescriptions,N=e.componentsApiPageContents,H=e.hooksApiDescriptions,D=e.hooksApiPageContents,q=(0,j.useUserLanguage)(),U=(0,j.useTranslate)();b.useEffect(function(){var e;l(null!==(e=n.query.docsTab)&&void 0!==e?e:"")},[n.query.docsTab]);var K=w[q]||w.en,G=K.toc.filter(function(e){return"API"!==e.text});function J(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=[];return v()(o).forEach(function(o){n.push({text:o,hash:"".concat(e,"-").concat(t,"-").concat(o),children:[]})}),{text:function(e,t){var o={demos:e("api-docs.demos"),import:e("api-docs.import"),"hook-name":e("api-docs.hookName"),parameters:e("api-docs.parameters"),"return-value":e("api-docs.returnValue")};if(!o.hasOwnProperty(t))throw TypeError("Unable to translate header '".concat(t,"'. Did you mean one of '").concat(v()(o).join("', '"),"'"));return o[t]||t}(U,t),hash:"".concat(e,"-").concat(t),children:n}}var Q=[];function $(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{inheritance:!1,themeDefaultProps:!1};return{text:(0,R.q)(U,t),hash:"".concat(e,"-").concat(t),children:[].concat((0,h.Z)(o.inheritance?[{text:U("api-docs.inheritance"),hash:"inheritance",children:[]}]:[]),(0,h.Z)(o.themeDefaultProps?[{text:U("api-docs.themeDefaultProps"),hash:"theme-default-props",children:[]}]:[]))}}D&&v()(D).forEach(function(e){var t=D[e],o=t.name,n=t.parameters,r=t.returnValue,a=S()(o),i=[J(a,"import"),J(a,"parameters",void 0===n?{}:n),J(a,"return-value",void 0===r?{}:r)].filter(Boolean);Q.push({text:o,hash:a,children:i})});var ee=[];N&&v()(N).forEach(function(e){var t,o,n=M[e][q].componentDescriptionToc,r=N[e],a=r.name,i=r.styles,l=r.inheritance,s=r.slots,c=r.themeDefaultProps,d=r.classes,u=r.props,p=S()(a),m=[$(p,"import")].concat((0,h.Z)(void 0===n?[]:n),[i.name&&$(p,"component-name"),(0,B.m)({t:U,componentName:p,componentProps:u,inheritance:l,themeDefaultProps:c,hash:"".concat(p,"-props")})],(0,h.Z)((0,P.s)({t:U,componentName:p,componentStyles:i,hash:"".concat(p,"-css")})),[(null==s?void 0:s.length)>0&&$(p,"slots"),((null==d?void 0:null===(t=d.classes)||void 0===t?void 0:t.length)||v()((null==d?void 0:null===(o=d.classes)||void 0===o?void 0:o.globalClasses)||{}).length)&&$(p,"classes")]).filter(Boolean);ee.push({text:a,hash:p,children:m})});for(var et=s.startsWith("/joy-ui/"),eo=et?C.lL:b.Fragment,en=et?F.default:b.Fragment,er=(0,p.Z)({},et&&{mode:o.palette.mode}),ea=[],ei=0,el=!1;ei<K.rendered.length&&!el;){var es=K.rendered[ei];es.component&&es.component.indexOf("Tabs")>=0&&(el=!0),ea.push((0,E.jsx)(L.Z,{activeTab:i,demoComponents:k,demos:Z,disableAd:d,localizedDoc:K,renderedMarkdownOrDemo:es,srcComponents:T,theme:o,WrapperComponent:en,wrapperProps:er},"common-elements-".concat(ei))),ei+=1}var ec=G;"hooks-api"===i&&(ec=Q),"components-api"===i&&(ec=ee);var ed=K.rendered.some(function(e){return"object"==typeof e&&!!e.component&&"modules/components/ComponentPageTabs.js"===e.component});return(0,E.jsx)(A.Z,{description:K.description,disableAd:d,disableToc:void 0!==f&&f,location:K.location,title:K.title,toc:ec,disableLayout:!0,hasTabs:ed,children:(0,E.jsxs)("div",{style:{"--MuiDocs-header-height":ed?"".concat(V.Hx+_.H,"px"):"".concat(V.Hx,"px")},children:[d?null:(0,E.jsx)(F.default,{children:(0,E.jsx)(X.Z,{classSelector:ed?".component-tabs":void 0,children:u||(u=(0,E.jsx)(O.ZP,{}))})}),(0,E.jsxs)(eo,{children:[et&&(0,E.jsx)(Y,{mode:o.palette.mode}),ea,""===i&&K.rendered.slice(ei,K.rendered.length-(K.headers.components.length>0?1:0)).map(function(e,t){return(0,E.jsx)(L.Z,{activeTab:i,demoComponents:k,demos:Z,disableAd:d,localizedDoc:K,renderedMarkdownOrDemo:e,srcComponents:T,theme:o,WrapperComponent:en,wrapperProps:er},"demos-section-".concat(t))}),"components-api"===i&&(0,E.jsx)(I,{descriptions:M,pageContents:N}),"hooks-api"===i&&(0,E.jsx)(W,{descriptions:H,pagesContents:D})]})]})})}Y.propTypes={mode:Z().oneOf(["light","dark"])}}}]);