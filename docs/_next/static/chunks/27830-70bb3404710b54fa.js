"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27830],{642527:function(e,t,n){n.d(t,{Z:function(){return Z}});var r=n(163804),o=n(80117),i=n(667294);n(659864);var a=n(915527),l=n(357160),s=n(918514).Z,u=n(609687),c=n(800963),p=n(785893),d=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function f(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function v(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function h(e,t){if(void 0===t)return!0;var n=e.innerText;return void 0===n&&(n=e.textContent),0!==(n=n.trim().toLowerCase()).length&&(t.repeating?n[0]===t.keys[0]:0===n.indexOf(t.keys.join("")))}function m(e,t,n,r,o,i){for(var a=!1,l=o(e,t,!!t&&n);l;){if(l===e.firstChild){if(a)return!1;a=!0}var s=!r&&(l.disabled||"true"===l.getAttribute("aria-disabled"));if(l.hasAttribute("tabindex")&&h(l,i)&&!s)return l.focus(),!0;l=o(e,l,n)}return!1}var Z=i.forwardRef(function(e,t){var n=e.actions,Z=e.autoFocus,g=void 0!==Z&&Z,P=e.autoFocusItem,b=void 0!==P&&P,y=e.children,w=e.className,x=e.disabledItemsFocusable,M=void 0!==x&&x,E=e.disableListWrap,S=void 0!==E&&E,C=e.onKeyDown,k=e.variant,T=void 0===k?"selectedMenu":k,F=(0,o.Z)(e,d),D=i.useRef(null),R=i.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});(0,c.Z)(function(){g&&D.current.focus()},[g]),i.useImperativeHandle(n,function(){return{adjustStyleForScrollbar:function(e,t){var n=!D.current.style.width;if(e.clientHeight<D.current.clientHeight&&n){var r="".concat(s((0,a.Z)(e)),"px");D.current.style["rtl"===t.direction?"paddingLeft":"paddingRight"]=r,D.current.style.width="calc(100% + ".concat(r,")")}return D.current}}},[]);var L=(0,u.Z)(D,t),z=-1;i.Children.forEach(y,function(e,t){if(!i.isValidElement(e)){z===t&&(z+=1)>=y.length&&(z=-1);return}e.props.disabled||("selectedMenu"===T&&e.props.selected?z=t:-1!==z||(z=t)),z===t&&(e.props.disabled||e.props.muiSkipListHighlight||e.type.muiSkipListHighlight)&&(z+=1)>=y.length&&(z=-1)});var N=i.Children.map(y,function(e,t){if(t===z){var n={};return b&&(n.autoFocus=!0),void 0===e.props.tabIndex&&"selectedMenu"===T&&(n.tabIndex=0),i.cloneElement(e,n)}return e});return(0,p.jsx)(l.Z,(0,r.Z)((0,r.Z)({role:"menu",ref:L,className:w,onKeyDown:function(e){var t=D.current,n=e.key,r=(0,a.Z)(t).activeElement;if("ArrowDown"===n)e.preventDefault(),m(t,r,S,M,f);else if("ArrowUp"===n)e.preventDefault(),m(t,r,S,M,v);else if("Home"===n)e.preventDefault(),m(t,null,S,M,f);else if("End"===n)e.preventDefault(),m(t,null,S,M,v);else if(1===n.length){var o=R.current,i=n.toLowerCase(),l=performance.now();o.keys.length>0&&(l-o.lastTime>500?(o.keys=[],o.repeating=!0,o.previousKeyMatched=!0):o.repeating&&i!==o.keys[0]&&(o.repeating=!1)),o.lastTime=l,o.keys.push(i);var s=r&&!o.repeating&&h(r,o);o.previousKeyMatched&&(s||m(t,r,!1,M,f,o))?e.preventDefault():o.previousKeyMatched=!1}C&&C(e)},tabIndex:g?0:-1},F),{},{children:N}))})},727830:function(e,t,n){var r=n(163804),o=n(80117),i=n(667294);n(659864);var a=n(490512),l=n(829624),s=n(315412),u=n(642527),c=n(585523),p=n(602688),d=n(178198),f=n(424633),v=n(326562),h=n(785893),m=["onEntering"],Z=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],g={vertical:"top",horizontal:"right"},P={vertical:"top",horizontal:"left"},b=function(e){var t=e.classes;return(0,l.Z)({root:["root"],paper:["paper"],list:["list"]},v.Q,t)},y=(0,p.ZP)(c.ZP,{shouldForwardProp:function(e){return(0,p.FO)(e)||"classes"===e},name:"MuiMenu",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),w=(0,p.ZP)(c.XS,{name:"MuiMenu",slot:"Paper",overridesResolver:function(e,t){return t.paper}})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),x=(0,p.ZP)(u.Z,{name:"MuiMenu",slot:"List",overridesResolver:function(e,t){return t.list}})({outline:0}),M=i.forwardRef(function(e,t){var n,l,u=(0,f.Z)({props:e,name:"MuiMenu"}),c=u.autoFocus,p=void 0===c||c,v=u.children,M=u.className,E=u.disableAutoFocusItem,S=void 0!==E&&E,C=u.MenuListProps,k=void 0===C?{}:C,T=u.onClose,F=u.open,D=u.PaperProps,R=void 0===D?{}:D,L=u.PopoverClasses,z=u.transitionDuration,N=void 0===z?"auto":z,O=u.TransitionProps,I=(O=void 0===O?{}:O).onEntering,H=(0,o.Z)(O,m),j=u.variant,K=void 0===j?"selectedMenu":j,A=u.slots,W=void 0===A?{}:A,X=u.slotProps,_=void 0===X?{}:X,B=(0,o.Z)(u,Z),Q=(0,d.Z)(),V="rtl"===Q.direction,J=(0,r.Z)((0,r.Z)({},u),{},{autoFocus:p,disableAutoFocusItem:S,MenuListProps:k,onEntering:I,PaperProps:R,transitionDuration:N,TransitionProps:H,variant:K}),U=b(J),Y=i.useRef(null),q=-1;i.Children.map(v,function(e,t){i.isValidElement(e)&&(e.props.disabled||("selectedMenu"===K&&e.props.selected?q=t:-1!==q||(q=t)))});var G=null!==(n=W.paper)&&void 0!==n?n:w,$=null!==(l=_.paper)&&void 0!==l?l:R,ee=(0,s.y)({elementType:W.root,externalSlotProps:_.root,ownerState:J,className:[U.root,M]}),et=(0,s.y)({elementType:G,externalSlotProps:$,ownerState:J,className:U.paper});return(0,h.jsx)(y,(0,r.Z)((0,r.Z)({onClose:T,anchorOrigin:{vertical:"bottom",horizontal:V?"right":"left"},transformOrigin:V?g:P,slots:{paper:G,root:W.root},slotProps:{root:ee,paper:et},open:F,ref:t,transitionDuration:N,TransitionProps:(0,r.Z)({onEntering:function(e,t){Y.current&&Y.current.adjustStyleForScrollbar(e,Q),I&&I(e,t)}},H),ownerState:J},B),{},{classes:L,children:(0,h.jsx)(x,(0,r.Z)((0,r.Z)({onKeyDown:function(e){"Tab"===e.key&&(e.preventDefault(),T&&T(e,"tabKeyDown"))},actions:Y,autoFocus:p&&(-1===q||S),autoFocusItem:p&&!S&&F,variant:K},k),{},{className:(0,a.default)(U.list,k.className),children:v}))}))});t.Z=M},326562:function(e,t,n){n.d(t,{Q:function(){return i}});var r=n(173729),o=n(899933);function i(e){return(0,o.Z)("MuiMenu",e)}var a=(0,r.Z)("MuiMenu",["root","paper","list"]);t.Z=a},585523:function(e,t,n){n.d(t,{Pg:function(){return F},XS:function(){return D},oJ:function(){return E},pB:function(){return S}});var r=n(648611),o=n(163804),i=n(80117),a=n(667294),l=n(490512),s=n(829624),u=n(315412),c=n(296811),p=n(602688),d=n(424633),f=n(608698),v=n(915527),h=n(947013),m=n(609687),Z=n(872967),g=n(679037),P=n(870500),b=n(691917),y=n(785893),w=["onEntering"],x=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],M=["slotProps"];function E(e,t){var n=0;return"number"==typeof t?n=t:"center"===t?n=e.height/2:"bottom"===t&&(n=e.height),n}function S(e,t){var n=0;return"number"==typeof t?n=t:"center"===t?n=e.width/2:"right"===t&&(n=e.width),n}function C(e){return[e.horizontal,e.vertical].map(function(e){return"number"==typeof e?"".concat(e,"px"):e}).join(" ")}function k(e){return"function"==typeof e?e():e}var T=function(e){var t=e.classes;return(0,s.Z)({root:["root"],paper:["paper"]},b.s,t)},F=(0,p.ZP)(g.Z,{name:"MuiPopover",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),D=(0,p.ZP)(P.Z,{name:"MuiPopover",slot:"Paper",overridesResolver:function(e,t){return t.paper}})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),R=a.forwardRef(function(e,t){var n,s,p,g=(0,d.Z)({props:e,name:"MuiPopover"}),P=g.action,b=g.anchorEl,R=g.anchorOrigin,L=void 0===R?{vertical:"top",horizontal:"left"}:R,z=g.anchorPosition,N=g.anchorReference,O=void 0===N?"anchorEl":N,I=g.children,H=g.className,j=g.container,K=g.elevation,A=void 0===K?8:K,W=g.marginThreshold,X=void 0===W?16:W,_=g.open,B=g.PaperProps,Q=g.slots,V=g.slotProps,J=g.transformOrigin,U=void 0===J?{vertical:"top",horizontal:"left"}:J,Y=g.TransitionComponent,q=void 0===Y?Z.Z:Y,G=g.transitionDuration,$=void 0===G?"auto":G,ee=g.TransitionProps,et=(ee=void 0===ee?{}:ee).onEntering,en=(0,i.Z)(ee,w),er=g.disableScrollLock,eo=void 0!==er&&er,ei=(0,i.Z)(g,x),ea=null!==(n=null==V?void 0:V.paper)&&void 0!==n?n:void 0===B?{}:B,el=a.useRef(),es=(0,m.Z)(el,ea.ref),eu=(0,o.Z)((0,o.Z)({},g),{},{anchorOrigin:L,anchorReference:O,elevation:A,marginThreshold:X,externalPaperSlotProps:ea,transformOrigin:U,TransitionComponent:q,transitionDuration:$,TransitionProps:en}),ec=T(eu),ep=a.useCallback(function(){if("anchorPosition"===O)return z;var e=k(b),t=(e&&1===e.nodeType?e:(0,v.Z)(el.current).body).getBoundingClientRect();return{top:t.top+E(t,L.vertical),left:t.left+S(t,L.horizontal)}},[b,L.horizontal,L.vertical,z,O]),ed=a.useCallback(function(e){return{vertical:E(e,U.vertical),horizontal:S(e,U.horizontal)}},[U.horizontal,U.vertical]),ef=a.useCallback(function(e){var t={width:e.offsetWidth,height:e.offsetHeight},n=ed(t);if("none"===O)return{top:null,left:null,transformOrigin:C(n)};var r=ep(),o=r.top-n.vertical,i=r.left-n.horizontal,a=o+t.height,l=i+t.width,s=(0,h.Z)(k(b)),u=s.innerHeight-X,c=s.innerWidth-X;if(null!==X&&o<X){var p=o-X;o-=p,n.vertical+=p}else if(null!==X&&a>u){var d=a-u;o-=d,n.vertical+=d}if(null!==X&&i<X){var f=i-X;i-=f,n.horizontal+=f}else if(l>c){var v=l-c;i-=v,n.horizontal+=v}return{top:"".concat(Math.round(o),"px"),left:"".concat(Math.round(i),"px"),transformOrigin:C(n)}},[b,O,ep,ed,X]),ev=a.useState(_),eh=(0,r.Z)(ev,2),em=eh[0],eZ=eh[1],eg=a.useCallback(function(){var e=el.current;if(e){var t=ef(e);null!==t.top&&(e.style.top=t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin,eZ(!0)}},[ef]);a.useEffect(function(){return eo&&window.addEventListener("scroll",eg),function(){return window.removeEventListener("scroll",eg)}},[b,eo,eg]),a.useEffect(function(){_&&eg()}),a.useImperativeHandle(P,function(){return _?{updatePosition:function(){eg()}}:null},[_,eg]),a.useEffect(function(){if(_){var e=(0,f.Z)(function(){eg()}),t=(0,h.Z)(b);return t.addEventListener("resize",e),function(){e.clear(),t.removeEventListener("resize",e)}}},[b,_,eg]);var eP=$;"auto"!==$||q.muiSupportAuto||(eP=void 0);var eb=j||(b?(0,v.Z)(k(b)).body:void 0),ey=null!==(s=null==Q?void 0:Q.root)&&void 0!==s?s:F,ew=null!==(p=null==Q?void 0:Q.paper)&&void 0!==p?p:D,ex=(0,u.y)({elementType:ew,externalSlotProps:(0,o.Z)((0,o.Z)({},ea),{},{style:em?ea.style:(0,o.Z)((0,o.Z)({},ea.style),{},{opacity:0})}),additionalProps:{elevation:A,ref:es},ownerState:eu,className:(0,l.default)(ec.paper,null==ea?void 0:ea.className)}),eM=(0,u.y)({elementType:ey,externalSlotProps:(null==V?void 0:V.root)||{},externalForwardedProps:ei,additionalProps:{ref:t,slotProps:{backdrop:{invisible:!0}},container:eb,open:_},ownerState:eu,className:(0,l.default)(ec.root,H)}),eE=eM.slotProps,eS=(0,i.Z)(eM,M);return(0,y.jsx)(ey,(0,o.Z)((0,o.Z)((0,o.Z)({},eS),!(0,c.X)(ey)&&{slotProps:eE,disableScrollLock:eo}),{},{children:(0,y.jsx)(q,(0,o.Z)((0,o.Z)({appear:!0,in:_,onEntering:function(e,t){et&&et(e,t),eg()},onExited:function(){eZ(!1)},timeout:eP},en),{},{children:(0,y.jsx)(ew,(0,o.Z)((0,o.Z)({},ex),{},{children:I}))}))}))});t.ZP=R},691917:function(e,t,n){n.d(t,{s:function(){return i}});var r=n(173729),o=n(899933);function i(e){return(0,o.Z)("MuiPopover",e)}var a=(0,r.Z)("MuiPopover",["root","paper"]);t.Z=a}}]);