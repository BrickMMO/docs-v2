(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47505],{908366:function(e,t,a){"use strict";var n=a(163804),r=a(80117),i=a(667294),o=a(490512),s=a(829624),c=a(602688),l=a(424633),d=a(179477),p=a(231505),u=a(785893),m=["className"],f=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},p.E,t)},v=(0,c.ZP)(d.Z,{name:"MuiAlertTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})(function(e){return{fontWeight:e.theme.typography.fontWeightMedium,marginTop:-2}}),h=i.forwardRef(function(e,t){var a=(0,l.Z)({props:e,name:"MuiAlertTitle"}),i=a.className,s=(0,r.Z)(a,m),c=f(a);return(0,u.jsx)(v,(0,n.Z)({gutterBottom:!0,component:"div",ownerState:a,ref:t,className:(0,o.default)(c.root,i)},s))});t.Z=h},231505:function(e,t,a){"use strict";a.d(t,{E:function(){return i}});var n=a(173729),r=a(899933);function i(e){return(0,r.Z)("MuiAlertTitle",e)}var o=(0,n.Z)("MuiAlertTitle",["root"]);t.Z=o},650637:function(e,t,a){"use strict";var n=a(80117),r=a(777193),i=a(163804),o=a(667294),s=a(490512),c=a(829624),l=a(992443),d=a(602688),p=a(424633),u=a(717708),m=a(800963),f=a(609687),v=a(793527),h=a(647475),g=a(785893),Z=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],x=function(e){var t=e.alignItems,a=e.classes,n=e.dense,r=e.disabled,o=e.disableGutters,s=e.divider,l=e.selected,d=(0,c.Z)({root:["root",n&&"dense",!o&&"gutters",s&&"divider",r&&"disabled","flex-start"===t&&"alignItemsFlexStart",l&&"selected"]},h.t,a);return(0,i.Z)((0,i.Z)({},a),d)},y=(0,d.ZP)(u.Z,{shouldForwardProp:function(e){return(0,d.FO)(e)||"classes"===e},name:"MuiListItemButton",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})(function(e){var t,a=e.theme,n=e.ownerState;return(0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((t={display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:a.transitions.create("background-color",{duration:a.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,r.Z)(t,"&.".concat(h.Z.selected),(0,r.Z)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(h.Z.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),(0,r.Z)(t,"&.".concat(h.Z.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),(0,r.Z)(t,"&.".concat(h.Z.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,r.Z)(t,"&.".concat(h.Z.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),t),n.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"}),"flex-start"===n.alignItems&&{alignItems:"flex-start"}),!n.disableGutters&&{paddingLeft:16,paddingRight:16}),n.dense&&{paddingTop:4,paddingBottom:4})}),b=o.forwardRef(function(e,t){var a=(0,p.Z)({props:e,name:"MuiListItemButton"}),r=a.alignItems,c=void 0===r?"center":r,l=a.autoFocus,d=void 0!==l&&l,u=a.component,h=void 0===u?"div":u,b=a.children,k=a.dense,j=void 0!==k&&k,w=a.disableGutters,C=void 0!==w&&w,O=a.divider,F=a.focusVisibleClassName,I=a.selected,_=a.className,N=(0,n.Z)(a,Z),S=o.useContext(v.Z),M=o.useMemo(function(){return{dense:j||S.dense||!1,alignItems:c,disableGutters:C}},[c,S.dense,j,C]),R=o.useRef(null);(0,m.Z)(function(){d&&R.current&&R.current.focus()},[d]);var T=(0,i.Z)((0,i.Z)({},a),{},{alignItems:c,dense:M.dense,disableGutters:C,divider:void 0!==O&&O,selected:void 0!==I&&I}),D=x(T),P=(0,f.Z)(R,t);return(0,g.jsx)(v.Z.Provider,{value:M,children:(0,g.jsx)(y,(0,i.Z)((0,i.Z)({ref:P,href:N.href||N.to,component:(N.href||N.to)&&"div"===h?"button":h,focusVisibleClassName:(0,s.default)(D.focusVisible,F),ownerState:T,className:(0,s.default)(D.root,_)},N),{},{classes:D,children:b}))})});t.Z=b},505813:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return C}});var n,r,i,o,s=a(333346),c=a(357160),l=a(978972),d=a(650637),p=a(179477),u=a(166701),m=a(322890),f=a.n(m),v=a(894313),h=a(821111),g=a(477991),Z=a(972374),x=a(637074),y=a(772184),b=a(692124),k=a(245510),j=a(308501),w=a(785893);function C(){var e=(0,b.useTranslate)(),t=j.Z.find(function(e){return"Components"===e.title});function a(t){return(0,w.jsx)(l.ZP,{disablePadding:!0,children:(0,w.jsxs)(d.Z,{component:k.default,noLinkStyle:!0,href:t.pathname,sx:{px:1,py:.5,fontSize:"0.84375rem",fontWeight:500,"&:hover, &:focus":{"& svg":{opacity:1}}},children:[(0,y._q)(t,e)||"",(0,w.jsx)(f(),{sx:{ml:"auto",fontSize:"1.125rem",opacity:0,color:"primary.main"}})]})},t.pathname)}return(0,w.jsxs)(Z.Z,{children:[n||(n=(0,w.jsx)(v.Z,{title:"Components - MUI",description:"MUI provides a simple, customizable, and accessible library of React components. Follow your own design system, or start with Material Design. You will develop React applications faster."})),r||(r=(0,w.jsx)(h.Z,{})),(0,w.jsx)("main",{id:"main-content",children:(0,w.jsxs)(x.Z,{bg:"gradient",sx:{py:{xs:2,sm:4}},children:[(0,w.jsx)(p.Z,{component:"h1",variant:"h2",sx:{mb:4,pl:1},children:"All Components"}),(0,w.jsx)(s.Z,{sx:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))"},children:((null==t?void 0:t.children)||[]).map(function(t){return(0,w.jsxs)(s.Z,{sx:{pb:2},children:[(0,w.jsx)(p.Z,{component:"h2",variant:"body2",sx:{fontWeight:500,color:"grey.600",px:1},children:(0,y._q)(t,e)}),(0,w.jsx)(c.Z,{children:(t.children||[]).map(function(t){return t.children?(0,w.jsx)(l.ZP,{sx:{py:0,px:1},children:(0,w.jsxs)(s.Z,{sx:{width:"100%",pt:1},children:[(0,w.jsx)(p.Z,{component:"div",variant:"body2",sx:{fontWeight:500,color:"grey.600"},children:(0,y._q)(t,e)||""}),(0,w.jsx)(c.Z,{children:t.children.map(a)})]})},t.pathname):a(t)})})]},t.pathname)})})]})}),i||(i=(0,w.jsx)(u.Z,{})),o||(o=(0,w.jsx)(g.Z,{}))]})}},637074:function(e,t,a){"use strict";var n=a(163804),r=a(849088),i=a(80117),o=a(378149),s=a.n(o),c=a(667294),l=a(858280),d=a(333346),p=a(992443),u=a(785893),m=["bg","children","sx","cozy"],f={white:{light:"common.white",dark:"primaryDark.800"},comfort:{light:"grey.50",dark:"primaryDark.900"},dim:{light:"primaryDark.700",dark:"primaryDark.700"},transparent:{light:"transparent",dark:"transparent"}},v=c.forwardRef(function(e,t){var a=e.bg,o=void 0===a?"white":a,c=e.children,v=e.sx,h=e.cozy,g=void 0!==h&&h,Z=(0,i.Z)(e,m);return(0,u.jsx)(d.Z,(0,n.Z)((0,n.Z)({ref:t},Z),{},{sx:[function(e){return(0,n.Z)((0,n.Z)({},"gradient"===o?(0,n.Z)({background:"linear-gradient(180deg, #FFF 0%, ".concat((e.vars||e).palette.primary[50]," 100%)")},e.applyDarkStyles({background:"linear-gradient(180deg, ".concat((e.vars||e).palette.primaryDark[800]," 0%, ").concat((0,p.Fq)(e.palette.primary[900],.2)," 100%)")})):(0,n.Z)({bgcolor:f[o].light},e.applyDarkStyles({bgcolor:f[o].dark}))),{},{py:g?{xs:6,sm:10,md:12}:{xs:4,sm:12,md:14},overflow:"hidden"})}].concat((0,r.Z)(s()(v)?v:[v])),children:(0,u.jsx)(l.Z,{children:c})}))});t.Z=v},41164:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components",function(){return a(505813)}])}},function(e){e.O(0,[52996,41512,82700,27830,7565,36195,17007,43374,48956,98826,43765,98147,78189,49774,92888,40179],function(){return e(e.s=41164)}),_N_E=e.O()}]);