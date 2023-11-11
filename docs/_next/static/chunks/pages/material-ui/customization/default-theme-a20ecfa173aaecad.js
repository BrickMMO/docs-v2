(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1754],{458190:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o.Z}});var o=n(333346)},164720:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o.Z},dividerClasses:function(){return r.Z},getDividerUtilityClass:function(){return r.V}});var o=n(166701),r=n(378107)},310977:function(e,t,n){"use strict";var o=n(80117),r=n(163804),a=n(777193),i=n(667294),c=n(490512),s=n(829624),l=n(429880),u=n(966366),d=n(179477),h=n(961825),m=n(602688),p=n(424633),f=n(271075),v=n(879337),g=n(785893),b=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],Z=function(e){var t=e.classes,n=e.disabled,o=e.labelPlacement,r=e.error,a=e.required,i={root:["root",n&&"disabled","labelPlacement".concat((0,h.Z)(o)),r&&"error",a&&"required"],label:["label",n&&"disabled"],asterisk:["asterisk",r&&"error"]};return(0,s.Z)(i,f.r,t)},w=(0,m.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,a.Z)({},"& .".concat(f.Z.label),t.label),t.root,t["labelPlacement".concat((0,h.Z)(n.labelPlacement))]]}})(function(e){var t=e.theme,n=e.ownerState;return(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,a.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(f.Z.disabled),{cursor:"default"}),"start"===n.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11}),"top"===n.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16}),"bottom"===n.labelPlacement&&{flexDirection:"column",marginLeft:16}),{},(0,a.Z)({},"& .".concat(f.Z.label),(0,a.Z)({},"&.".concat(f.Z.disabled),{color:(t.vars||t).palette.text.disabled})))}),x=(0,m.ZP)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:function(e,t){return t.asterisk}})(function(e){var t=e.theme;return(0,a.Z)({},"&.".concat(f.Z.error),{color:(t.vars||t).palette.error.main})}),y=i.forwardRef(function(e,t){var n,a,s=(0,p.Z)({props:e,name:"MuiFormControlLabel"});s.checked;var h=s.className,m=s.componentsProps,f=s.control,y=s.disabled,k=s.disableTypography,C=(s.inputRef,s.label),S=s.labelPlacement,M=(s.name,s.onChange,s.required),P=s.slotProps,j=(s.value,(0,o.Z)(s,b)),F=(0,l.Z)(),T=null!==(n=null!=y?y:f.props.disabled)&&void 0!==n?n:null==F?void 0:F.disabled,R=null!=M?M:f.props.required,z={disabled:T,required:R};["checked","name","onChange","value","inputRef"].forEach(function(e){void 0===f.props[e]&&void 0!==s[e]&&(z[e]=s[e])});var B=(0,v.Z)({props:s,muiFormControl:F,states:["error"]}),I=(0,r.Z)((0,r.Z)({},s),{},{disabled:T,labelPlacement:void 0===S?"end":S,required:R,error:B.error}),E=Z(I),L=null!==(a=(void 0===P?{}:P).typography)&&void 0!==a?a:(void 0===m?{}:m).typography,D=C;return null==D||D.type===d.Z||k||(D=(0,g.jsx)(d.Z,(0,r.Z)((0,r.Z)({component:"span"},L),{},{className:(0,c.default)(E.label,null==L?void 0:L.className),children:D}))),(0,g.jsxs)(w,(0,r.Z)((0,r.Z)({className:(0,c.default)(E.root,h),ownerState:I,ref:t},j),{},{children:[i.cloneElement(f,z),R?(0,g.jsxs)(u.Z,{direction:"row",alignItems:"center",children:[D,(0,g.jsxs)(x,{ownerState:I,"aria-hidden":!0,className:E.asterisk,children:[" ","*"]})]}):D]}))});t.Z=y},271075:function(e,t,n){"use strict";n.d(t,{r:function(){return a}});var o=n(173729),r=n(899933);function a(e){return(0,r.Z)("MuiFormControlLabel",e)}var i=(0,o.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]);t.Z=i},931573:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o.Z},formControlLabelClasses:function(){return r.Z},getFormControlLabelUtilityClasses:function(){return r.r}});var o=n(310977),r=n(271075)},912071:function(e,t,n){"use strict";var o=n(80117),r=n(777193),a=n(163804),i=n(667294),c=n(490512),s=n(829624),l=n(992443),u=n(961825),d=n(840327),h=n(424633),m=n(602688),p=n(415253),f=n(785893),v=["className","color","edge","size","sx"],g=function(e){var t=e.classes,n=e.edge,o=e.size,r=e.color,i=e.checked,c=e.disabled,l={root:["root",n&&"edge".concat((0,u.Z)(n)),"size".concat((0,u.Z)(o))],switchBase:["switchBase","color".concat((0,u.Z)(r)),i&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},d=(0,s.Z)(l,p.H,t);return(0,a.Z)((0,a.Z)({},t),d)},b=(0,m.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.edge&&t["edge".concat((0,u.Z)(n.edge))],t["size".concat((0,u.Z)(n.size))]]}})(function(e){var t,n=e.ownerState;return(0,a.Z)((0,a.Z)((0,a.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===n.edge&&{marginLeft:-8}),"end"===n.edge&&{marginRight:-8}),"small"===n.size&&(t={width:40,height:24,padding:7},(0,r.Z)(t,"& .".concat(p.Z.thumb),{width:16,height:16}),(0,r.Z)(t,"& .".concat(p.Z.switchBase),(0,r.Z)({padding:4},"&.".concat(p.Z.checked),{transform:"translateX(16px)"})),t))}),Z=(0,m.ZP)(d.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var n=e.ownerState;return[t.switchBase,(0,r.Z)({},"& .".concat(p.Z.input),t.input),"default"!==n.color&&t["color".concat((0,u.Z)(n.color))]]}})(function(e){var t,n=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:n.vars?n.vars.palette.Switch.defaultColor:"".concat("light"===n.palette.mode?n.palette.common.white:n.palette.grey[300]),transition:n.transitions.create(["left","transform"],{duration:n.transitions.duration.shortest})},(0,r.Z)(t,"&.".concat(p.Z.checked),{transform:"translateX(20px)"}),(0,r.Z)(t,"&.".concat(p.Z.disabled),{color:n.vars?n.vars.palette.Switch.defaultDisabledColor:"".concat("light"===n.palette.mode?n.palette.grey[100]:n.palette.grey[600])}),(0,r.Z)(t,"&.".concat(p.Z.checked," + .").concat(p.Z.track),{opacity:.5}),(0,r.Z)(t,"&.".concat(p.Z.disabled," + .").concat(p.Z.track),{opacity:n.vars?n.vars.opacity.switchTrackDisabled:"".concat("light"===n.palette.mode?.12:.2)}),(0,r.Z)(t,"& .".concat(p.Z.input),{left:"-100%",width:"300%"}),t},function(e){var t,n=e.theme,o=e.ownerState;return(0,a.Z)({"&:hover":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.action.activeChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(n.palette.action.active,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&(t={},(0,r.Z)(t,"&.".concat(p.Z.checked),(0,r.Z)({color:(n.vars||n).palette[o.color].main,"&:hover":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette[o.color].mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(n.palette[o.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(p.Z.disabled),{color:n.vars?n.vars.palette.Switch["".concat(o.color,"DisabledColor")]:"".concat("light"===n.palette.mode?(0,l.$n)(n.palette[o.color].main,.62):(0,l._j)(n.palette[o.color].main,.55))})),(0,r.Z)(t,"&.".concat(p.Z.checked," + .").concat(p.Z.track),{backgroundColor:(n.vars||n).palette[o.color].main}),t))}),w=(0,m.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})(function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:"".concat("light"===t.palette.mode?t.palette.common.black:t.palette.common.white),opacity:t.vars?t.vars.opacity.switchTrack:"".concat("light"===t.palette.mode?.38:.3)}}),x=(0,m.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})(function(e){var t=e.theme;return{boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}}),y=i.forwardRef(function(e,t){var n=(0,h.Z)({props:e,name:"MuiSwitch"}),r=n.className,i=n.color,s=n.edge,l=n.size,u=n.sx,d=(0,o.Z)(n,v),m=(0,a.Z)((0,a.Z)({},n),{},{color:void 0===i?"primary":i,edge:void 0!==s&&s,size:void 0===l?"medium":l}),p=g(m),y=(0,f.jsx)(x,{className:p.thumb,ownerState:m});return(0,f.jsxs)(b,{className:(0,c.default)(p.root,r),sx:u,ownerState:m,children:[(0,f.jsx)(Z,(0,a.Z)((0,a.Z)({type:"checkbox",icon:y,checkedIcon:y,ref:t,ownerState:m},d),{},{classes:(0,a.Z)((0,a.Z)({},p),{},{root:p.switchBase})})),(0,f.jsx)(w,{className:p.track,ownerState:m})]})});t.Z=y},703095:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o.Z},getSwitchUtilityClass:function(){return r.H},switchClasses:function(){return r.Z}});var o=n(912071),r=n(415253)},415253:function(e,t,n){"use strict";n.d(t,{H:function(){return a}});var o=n(173729),r=n(899933);function a(e){return(0,r.Z)("MuiSwitch",e)}var i=(0,o.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]);t.Z=i},840327:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var o=n(648611),r=n(80117),a=n(163804),i=n(667294),c=n(490512),s=n(829624),l=n(961825),u=n(602688),d=n(1211),h=n(429880),m=n(717708),p=n(173729),f=n(899933);function v(e){return(0,f.Z)("PrivateSwitchBase",e)}(0,p.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var g=n(785893),b=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Z=function(e){var t=e.classes,n=e.checked,o=e.disabled,r=e.edge,a={root:["root",n&&"checked",o&&"disabled",r&&"edge".concat((0,l.Z)(r))],input:["input"]};return(0,s.Z)(a,v,t)},w=(0,u.ZP)(m.Z)(function(e){var t=e.ownerState;return(0,a.Z)((0,a.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12}),"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})}),x=(0,u.ZP)("input",{shouldForwardProp:u.FO})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),y=i.forwardRef(function(e,t){var n=e.autoFocus,i=e.checked,s=e.checkedIcon,l=e.className,u=e.defaultChecked,m=e.disabled,p=e.disableFocusRipple,f=void 0!==p&&p,v=e.edge,y=e.icon,k=e.id,C=e.inputProps,S=e.inputRef,M=e.name,P=e.onBlur,j=e.onChange,F=e.onFocus,T=e.readOnly,R=e.required,z=e.tabIndex,B=e.type,I=e.value,E=(0,r.Z)(e,b),L=(0,d.Z)({controlled:i,default:!!u,name:"SwitchBase",state:"checked"}),D=(0,o.Z)(L,2),H=D[0],N=D[1],A=(0,h.Z)(),_=m;A&&void 0===_&&(_=A.disabled);var V="checkbox"===B||"radio"===B,O=(0,a.Z)((0,a.Z)({},e),{},{checked:H,disabled:_,disableFocusRipple:f,edge:void 0!==v&&v}),U=Z(O);return(0,g.jsxs)(w,(0,a.Z)((0,a.Z)({component:"span",className:(0,c.default)(U.root,l),centerRipple:!0,focusRipple:!f,disabled:_,tabIndex:null,role:void 0,onFocus:function(e){F&&F(e),A&&A.onFocus&&A.onFocus(e)},onBlur:function(e){P&&P(e),A&&A.onBlur&&A.onBlur(e)},ownerState:O,ref:t},E),{},{children:[(0,g.jsx)(x,(0,a.Z)((0,a.Z)({autoFocus:n,checked:i,defaultChecked:u,className:U.input,disabled:_,id:V?k:void 0,name:M,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;N(t),j&&j(e,t)}},readOnly:T,ref:S,required:void 0!==R&&R,ownerState:O,tabIndex:z,type:B},"checkbox"===B&&void 0===I?{}:{value:I}),C)),H?s:y]}))})},245406:function(e,t,n){"use strict";n.r(t),n.d(t,{alignProperty:function(){return u},convertLength:function(){return l},fontGrid:function(){return d},getUnit:function(){return c},isUnitless:function(){return i},responsiveProperty:function(){return h},toUnitless:function(){return s}});var o=n(777193),r=n(262207),a=n.n(r);function i(e){return String(a()(e)).length===String(e).length}function c(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function s(e){return a()(e)}function l(e){return function(t,n){var o=c(t);if(o===n)return t;var r=s(t);"px"!==o&&("em"===o?r=s(t)*s(e):"rem"===o&&(r=s(t)*s(e)));var i=r;if("px"!==n){if("em"===n)i=r/s(e);else{if("rem"!==n)return t;i=r/s(e)}}return a()(i.toFixed(5))+n}}function u(e){var t=e.size,n=e.grid,o=t-t%n,r=o+n;return t-o<r-t?o:r}function d(e){var t=e.lineHeight;return e.pixels/(t*e.htmlFontSize)}function h(e){var t=e.cssProperty,n=e.min,r=e.max,a=e.unit,i=void 0===a?"rem":a,c=e.breakpoints,s=void 0===c?[600,900,1200]:c,l=e.transform,u=void 0===l?null:l,d=(0,o.Z)({},t,"".concat(n).concat(i)),h=(r-n)/s[s.length-1];return s.forEach(function(e){var r=n+h*e;null!==u&&(r=u(r)),d["@media (min-width:".concat(e,"px)")]=(0,o.Z)({},t,"".concat(Math.round(1e4*r)/1e4).concat(i))}),d}},415142:function(e,t,n){"use strict";n.r(t),n.d(t,{Experimental_CssVarsProvider:function(){return B.CM},StyledEngineProvider:function(){return F.Z},THEME_ID:function(){return r.Z},ThemeProvider:function(){return j.Z},adaptV4Theme:function(){return p},alpha:function(){return f.Fq},createMuiTheme:function(){return g.A},createStyles:function(){return x},createTheme:function(){return g.Z},css:function(){return v.css},darken:function(){return f._j},decomposeColor:function(){return f.tB},duration:function(){return C.x9},easing:function(){return C.Ui},emphasize:function(){return f._4},experimentalStyled:function(){return P.ZP},experimental_extendTheme:function(){return I.Z},experimental_sx:function(){return N},getContrastRatio:function(){return f.mi},getInitColorSchemeScript:function(){return B.JO},getLuminance:function(){return f.H3},getOverlayAlpha:function(){return E.Z},hexToRgb:function(){return f.oo},hslToRgb:function(){return f.ve},keyframes:function(){return v.keyframes},lighten:function(){return f.$n},makeStyles:function(){return T},private_createTypography:function(){return D.Z},private_excludeVariablesFromRoot:function(){return H.Z},recomposeColor:function(){return f.wy},responsiveFontSizes:function(){return k.Z},rgbToHex:function(){return f.vq},shouldSkipGeneratingVar:function(){return L.Z},styled:function(){return P.ZP},unstable_createMuiStrictModeTheme:function(){return Z},unstable_getUnit:function(){return y.getUnit},unstable_toUnitless:function(){return y.toUnitless},useColorScheme:function(){return B.tv},useTheme:function(){return S.Z},useThemeProps:function(){return M.Z},withStyles:function(){return R},withTheme:function(){return z}});var o=n(242268),r=n(543690),a=n(777193),i=n(163804),c=n(80117),s=n(726243),l=n.n(s),u=n(366537),d=n(820928),h=["defaultProps","mixins","overrides","palette","props","styleOverrides"],m=["type","mode"];function p(e){var t=e.defaultProps,n=void 0===t?{}:t,o=e.mixins,r=void 0===o?{}:o,s=e.overrides,p=void 0===s?{}:s,f=e.palette,v=void 0===f?{}:f,g=e.props,b=void 0===g?{}:g,Z=e.styleOverrides,w=void 0===Z?{}:Z,x=(0,c.Z)(e,h),y=(0,i.Z)((0,i.Z)({},x),{},{components:{}});l()(n).forEach(function(e){var t=y.components[e]||{};t.defaultProps=n[e],y.components[e]=t}),l()(b).forEach(function(e){var t=y.components[e]||{};t.defaultProps=b[e],y.components[e]=t}),l()(w).forEach(function(e){var t=y.components[e]||{};t.styleOverrides=w[e],y.components[e]=t}),l()(p).forEach(function(e){var t=y.components[e]||{};t.styleOverrides=p[e],y.components[e]=t}),y.spacing=(0,u.Z)(e.spacing);var k=(0,d.Z)(e.breakpoints||{}),C=y.spacing;y.mixins=(0,i.Z)({gutters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.Z)((0,i.Z)({paddingLeft:C(2),paddingRight:C(2)},e),{},(0,a.Z)({},k.up("sm"),(0,i.Z)({paddingLeft:C(3),paddingRight:C(3)},e[k.up("sm")])))}},r);var S=v.type,M=v.mode,P=(0,c.Z)(v,m),j=M||S||"light";return y.palette=(0,i.Z)({text:{hint:"dark"===j?"rgba(255, 255, 255, 0.5)":"rgba(0, 0, 0, 0.38)"},mode:j,type:j},P),y}var f=n(992443),v=n(370917),g=n(867851),b=n(208882);function Z(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return g.Z.apply(void 0,[(0,b.Z)({unstable_strictMode:!0},e)].concat(n))}var w=!1;function x(e){return w||(console.warn("MUI: createStyles from @mui/material/styles is deprecated.\nPlease use @mui/styles/createStyles"),w=!0),e}var y=n(245406),k=n(997640),C=n(904159),S=n(178198),M=n(424633),P=n(602688),j=n(675812),F=n(980615);function T(){throw Error((0,o.Z)(14))}function R(){throw Error((0,o.Z)(15))}function z(){throw Error((0,o.Z)(16))}var B=n(698147),I=n(382388),E=n(335197),L=n(990687),D=n(10110),H=n(674199);function N(){throw Error((0,o.Z)(20))}},997640:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var o=n(163804),r=n(242268),a=n(262207),i=n.n(a),c=n(245406);function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.breakpoints,a=t.disableAlign,s=void 0!==a&&a,l=t.factor,u=void 0===l?2:l,d=t.variants,h=(0,o.Z)({},e);h.typography=(0,o.Z)({},h.typography);var m=h.typography,p=(0,c.convertLength)(m.htmlFontSize),f=(void 0===n?["sm","md","lg"]:n).map(function(e){return h.breakpoints.values[e]});return(void 0===d?["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]:d).forEach(function(e){var t=m[e],n=i()(p(t.fontSize,"rem"));if(!(n<=1)){var a=1+(n-1)/u,l=t.lineHeight;if(!(0,c.isUnitless)(l)&&!s)throw Error((0,r.Z)(6));(0,c.isUnitless)(l)||(l=i()(p(l,"rem"))/i()(n));var d=null;s||(d=function(e){return(0,c.alignProperty)({size:e,grid:(0,c.fontGrid)({pixels:4,lineHeight:l,htmlFontSize:m.htmlFontSize})})}),m[e]=(0,o.Z)((0,o.Z)({},t),(0,c.responsiveProperty)({cssProperty:"fontSize",min:a,max:n,unit:"rem",breakpoints:f,transform:d}))}}),h}},980615:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}}),n(667294);var o,r=n(679626),a=n(826077),i=n(785893);function c(e){var t=e.injectFirst,n=e.children;return t&&o?(0,i.jsx)(r.C,{value:o,children:n}):n}"object"==typeof document&&(o=(0,a.default)({key:"css",prepend:!0}))},408037:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var o,r={};n.r(r),n.d(r,{demoComponents:function(){return F},demos:function(){return j},docs:function(){return P},srcComponents:function(){return T}});var a=n(163804),i=n(667294),c=n.t(i,2),s=n(165492),l=n(458190),u=n(164720),d=n(415142),h=n(931573),m=n(703095),p=n(692124),f=n(452581),v=n(343966),g=n(648611),b=n(777193),Z=n(333346),w=n(166701),x=n(602688),y=n(867851),k=n(310977),C=n(912071),S=n(785893),M=(0,x.ZP)(C.Z)(function(e){var t=e.theme;return[(0,b.Z)({display:"flex",padding:0,width:32,height:20,borderRadius:99,"&:active":{"& .MuiSwitch-thumb":{width:16},"& .MuiSwitch-switchBase.Mui-checked":{transform:"translateX(9px)"}},"& .MuiSwitch-switchBase":{padding:2,"&.Mui-checked":{transform:"translateX(12px)",color:"#FFF","& + .MuiSwitch-track":{opacity:1,backgroundColor:v.blue[500]}}},"& .MuiSwitch-thumb":{width:16,height:16,borderRadius:99,transition:t.transitions.create(["width"],{duration:200})},"& .MuiSwitch-track":{borderRadius:8,opacity:1,backgroundColor:v.grey[400],boxSizing:"border-box"}},":where(".concat(t.vars?'[data-mui-color-scheme="dark"]':".mode-dark",") &"),{"& .MuiSwitch-switchBase":{"&.Mui-checked":{"& + .MuiSwitch-track":{backgroundColor:v.blue[500]}}},"& .MuiSwitch-track":{backgroundColor:v.grey[700]}})]}),P={en:{description:"Check out how the theme object looks like with the default values.",location:"/brickmmo-docs-v2/data/material/customization/default-theme/default-theme.md",rendered:['<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="error-icon" viewBox="0 0 20 20">\n      <path fill-rule="evenodd" d="M2 7.4v5.2a2 2 0 0 0 .586 1.414l3.4 3.4A2 2 0 0 0 7.4 18h5.2a2 2 0 0 0 1.414-.586l3.4-3.4A2 2 0 0 0 18 12.6V7.4a2 2 0 0 0-.586-1.414l-3.4-3.4A2 2 0 0 0 12.6 2H7.4a2 2 0 0 0-1.414.586l-3.4 3.4A2 2 0 0 0 2 7.4Zm11.03-.43a.75.75 0 0 1 0 1.06L11.06 10l1.97 1.97a.75.75 0 1 1-1.06 1.06L10 11.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L8.94 10 6.97 8.03a.75.75 0 0 1 1.06-1.06L10 8.94l1.97-1.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="warning-icon" viewBox="0 0 20 20">\n      <path d="M2.33 17a.735.735 0 0 1-.665-.375.631.631 0 0 1-.094-.375.898.898 0 0 1 .115-.396L9.353 3.062a.621.621 0 0 1 .281-.27.85.85 0 0 1 .729 0 .622.622 0 0 1 .281.27l7.667 12.792c.07.125.108.257.114.396a.63.63 0 0 1-.093.375.842.842 0 0 1-.271.27.728.728 0 0 1-.394.105H2.33Zm7.664-2.5c.211 0 .39-.072.536-.214a.714.714 0 0 0 .218-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.531-.22.736.736 0 0 0-.536.215.714.714 0 0 0-.219.531c0 .212.072.39.215.536.143.146.32.219.531.219Zm0-2.5c.211 0 .39-.072.536-.216a.72.72 0 0 0 .218-.534v-2.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.531-.216.734.734 0 0 0-.536.216.72.72 0 0 0-.219.534v2.5c0 .212.072.39.215.534a.72.72 0 0 0 .531.216Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="success-icon" viewBox="0 0 20 20">\n      <path d="m8.938 10.875-1.25-1.23a.718.718 0 0 0-.521-.228.718.718 0 0 0-.521.229.73.73 0 0 0 0 1.062l1.77 1.771c.153.153.327.23.521.23a.718.718 0 0 0 .521-.23l3.896-3.896a.73.73 0 0 0 0-1.062.718.718 0 0 0-.52-.23.718.718 0 0 0-.521.23l-3.376 3.354ZM10 18a7.796 7.796 0 0 1-3.104-.625 8.065 8.065 0 0 1-2.552-1.719 8.064 8.064 0 0 1-1.719-2.552A7.797 7.797 0 0 1 2 10c0-1.111.208-2.15.625-3.115a8.064 8.064 0 0 1 4.27-4.26A7.797 7.797 0 0 1 10 2c1.111 0 2.15.208 3.115.625a8.096 8.096 0 0 1 4.26 4.26C17.792 7.851 18 8.89 18 10a7.797 7.797 0 0 1-.625 3.104 8.066 8.066 0 0 1-4.26 4.271A7.774 7.774 0 0 1 10 18Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="info-icon" viewBox="0 0 20 20">\n      <path d="M9.996 14c.21 0 .39-.072.535-.216a.72.72 0 0 0 .219-.534v-3.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.532-.216.734.734 0 0 0-.535.216.72.72 0 0 0-.219.534v3.5c0 .213.071.39.214.534a.72.72 0 0 0 .532.216Zm0-6.5c.21 0 .39-.071.535-.214a.714.714 0 0 0 .219-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.532-.219.736.736 0 0 0-.535.214.714.714 0 0 0-.219.532c0 .21.071.39.214.535.143.146.32.219.532.219Zm.01 10.5a7.81 7.81 0 0 1-3.11-.625 8.065 8.065 0 0 1-2.552-1.719 8.066 8.066 0 0 1-1.719-2.551A7.818 7.818 0 0 1 2 9.99c0-1.104.208-2.14.625-3.105a8.066 8.066 0 0 1 4.27-4.26A7.818 7.818 0 0 1 10.009 2a7.75 7.75 0 0 1 3.106.625 8.083 8.083 0 0 1 4.26 4.265A7.77 7.77 0 0 1 18 9.994a7.81 7.81 0 0 1-.625 3.11 8.066 8.066 0 0 1-1.719 2.552 8.083 8.083 0 0 1-2.546 1.719 7.77 7.77 0 0 1-3.104.625Z"/>\n      </symbol>\n      </svg>','\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n        <symbol id="anchor-link-icon" viewBox="0 0 12 6">\n          <path d="M8.9176 0.083252H7.1676C6.84677 0.083252 6.58427 0.345752 6.58427 0.666585C6.58427 0.987419 6.84677 1.24992 7.1676 1.24992H8.9176C9.8801 1.24992 10.6676 2.03742 10.6676 2.99992C10.6676 3.96242 9.8801 4.74992 8.9176 4.74992H7.1676C6.84677 4.74992 6.58427 5.01242 6.58427 5.33325C6.58427 5.65409 6.84677 5.91659 7.1676 5.91659H8.9176C10.5276 5.91659 11.8343 4.60992 11.8343 2.99992C11.8343 1.38992 10.5276 0.083252 8.9176 0.083252ZM3.6676 2.99992C3.6676 3.32075 3.9301 3.58325 4.25094 3.58325H7.75094C8.07177 3.58325 8.33427 3.32075 8.33427 2.99992C8.33427 2.67909 8.07177 2.41659 7.75094 2.41659H4.25094C3.9301 2.41659 3.6676 2.67909 3.6676 2.99992ZM4.83427 4.74992H3.08427C2.12177 4.74992 1.33427 3.96242 1.33427 2.99992C1.33427 2.03742 2.12177 1.24992 3.08427 1.24992H4.83427C5.1551 1.24992 5.4176 0.987419 5.4176 0.666585C5.4176 0.345752 5.1551 0.083252 4.83427 0.083252H3.08427C1.47427 0.083252 0.167603 1.38992 0.167603 2.99992C0.167603 4.60992 1.47427 5.91659 3.08427 5.91659H4.83427C5.1551 5.91659 5.4176 5.65409 5.4176 5.33325C5.4176 5.01242 5.1551 4.74992 4.83427 4.74992Z" />\n        </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n      <path d="M5.025 14H6.95c.183 0 .35-.029.5-.087a1.24 1.24 0 0 0 .425-.288L13.65 7.9a.622.622 0 0 0 .2-.45.622.622 0 0 0-.2-.45l-2.3-2.3a.622.622 0 0 0-.45-.2.622.622 0 0 0-.45.2l-5.725 5.775a1.24 1.24 0 0 0-.287.425 1.37 1.37 0 0 0-.088.5v1.925c0 .184.067.342.2.475a.65.65 0 0 0 .475.2Zm5.325 0h5.725c.367 0 .68-.129.938-.387.258-.258.387-.57.387-.938 0-.366-.13-.679-.387-.937a1.277 1.277 0 0 0-.938-.388H13L10.35 14Zm-5.5 4.4-2.4 2.4c-.417.417-.896.509-1.437.275C.47 20.842.2 20.434.2 19.85V3.55c0-.733.258-1.358.775-1.875A2.554 2.554 0 0 1 2.85.9h16.3c.733 0 1.358.259 1.875.775.517.517.775 1.142.775 1.875v12.2c0 .734-.258 1.359-.775 1.875a2.554 2.554 0 0 1-1.875.775H4.85Z"/>\n      </symbol>\n      </svg>','<h1>Default theme viewer</h1><p class="description">Check out how the theme object looks like with the default values.</p>\n\n<p>If you want to learn more about how the theme is assembled, take a look at <a href="https://github.com/mui/material-ui/blob/v5.0.0/packages/mui-material/src/styles/createTheme.js"><code>material-ui/style/createTheme.js</code></a>,\nand the related imports which <code>createTheme</code> uses.</p>\n<aside class="MuiCallout-root MuiCallout-success">\n            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">\n<use class="MuiCode-copied-icon" xlink:href="#success-icon" />\n</svg>\n            <div class="MuiCallout-content">\n            <p>You can play with the documentation theme object in your browser console,\nas the <code>theme</code> variable is exposed on all the documentation pages.</p>\n\n</div></aside><aside class="MuiCallout-root MuiCallout-warning">\n            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">\n<use class="MuiCode-copied-icon" xlink:href="#warning-icon" />\n</svg>\n            <div class="MuiCallout-content">\n            <p>Please note that <strong>the documentation site is using a custom theme</strong> (MUI&#39;s branding).</p>\n\n</div></aside><hr/>\n\n',{demo:"DefaultTheme.js",hideToolbar:!0,bg:"inline"}],toc:[],title:"Default theme viewer",headers:{components:[]}}},j={"DefaultTheme.js":{module:"./DefaultTheme.js",raw:"import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Divider from '@mui/material/Divider';\nimport { createTheme, styled } from '@mui/material/styles';\nimport FormControlLabel from '@mui/material/FormControlLabel';\nimport Switch from '@mui/material/Switch';\nimport { useTranslate } from 'docs/src/modules/utils/i18n';\nimport ThemeViewer, {\n  useNodeIdsLazy,\n} from 'docs/src/modules/components/ThemeViewer';\nimport { blue, grey } from 'docs/src/modules/brandingTheme';\n\nconst StyledSwitch = styled(Switch)(({ theme }) => [\n  {\n    display: 'flex',\n    padding: 0,\n    width: 32,\n    height: 20,\n    borderRadius: 99,\n    '&:active': {\n      '& .MuiSwitch-thumb': {\n        width: 16,\n      },\n      '& .MuiSwitch-switchBase.Mui-checked': {\n        transform: 'translateX(9px)',\n      },\n    },\n    '& .MuiSwitch-switchBase': {\n      padding: 2,\n      '&.Mui-checked': {\n        transform: 'translateX(12px)',\n        color: '#FFF',\n        '& + .MuiSwitch-track': {\n          opacity: 1,\n          backgroundColor: blue[500],\n        },\n      },\n    },\n    '& .MuiSwitch-thumb': {\n      width: 16,\n      height: 16,\n      borderRadius: 99,\n      transition: theme.transitions.create(['width'], {\n        duration: 200,\n      }),\n    },\n    '& .MuiSwitch-track': {\n      borderRadius: 16 / 2,\n      opacity: 1,\n      backgroundColor: grey[400],\n      boxSizing: 'border-box',\n    },\n    [`:where(${theme.vars ? '[data-mui-color-scheme=\"dark\"]' : '.mode-dark'}) &`]: {\n      '& .MuiSwitch-switchBase': {\n        '&.Mui-checked': {\n          '& + .MuiSwitch-track': {\n            backgroundColor: blue[500],\n          },\n        },\n      },\n      '& .MuiSwitch-track': {\n        backgroundColor: grey[700],\n      },\n    },\n  },\n]);\n\nfunction DefaultTheme() {\n  const [checked, setChecked] = React.useState(false);\n  const [expandPaths, setExpandPaths] = React.useState(null);\n  const t = useTranslate();\n  const [darkTheme, setDarkTheme] = React.useState(false);\n\n  React.useEffect(() => {\n    let expandPath;\n    decodeURI(document.location.search.slice(1))\n      .split('&')\n      .forEach((param) => {\n        const [name, value] = param.split('=');\n        if (name === 'expand-path') {\n          expandPath = value;\n        }\n      });\n\n    if (!expandPath) {\n      return;\n    }\n\n    setExpandPaths(\n      expandPath\n        .replace('$.', '')\n        .split('.')\n        .reduce((acc, path) => {\n          const last = acc.length > 0 ? `${acc[acc.length - 1]}.` : '';\n          acc.push(last + path);\n          return acc;\n        }, []),\n    );\n  }, []);\n\n  const data = React.useMemo(() => {\n    return createTheme({\n      palette: { mode: darkTheme ? 'dark' : 'light' },\n    });\n  }, [darkTheme]);\n\n  const allNodeIds = useNodeIdsLazy(data);\n  React.useDebugValue(allNodeIds);\n  React.useEffect(() => {\n    if (checked) {\n      // in case during the event handler allNodeIds wasn't computed yet\n      setExpandPaths(allNodeIds);\n    }\n  }, [checked, allNodeIds]);\n\n  return (\n    <Box sx={{ width: '100%' }}>\n      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>\n        <FormControlLabel\n          label={t('expandAll')}\n          sx={{\n            m: 0,\n            flexDirection: 'row-reverse',\n            gap: 1,\n            '& .MuiFormControlLabel-label': {\n              fontFamily: 'IBM Plex Sans',\n              color: 'text.secondary',\n            },\n          }}\n          control={\n            <StyledSwitch\n              size=\"small\"\n              checked={checked}\n              onChange={(event) => {\n                setChecked(event.target.checked);\n                setExpandPaths(event.target.checked ? allNodeIds : []);\n              }}\n            />\n          }\n        />\n        <Divider orientation=\"vertical\" flexItem />\n        <FormControlLabel\n          label={t('useDarkTheme')}\n          sx={{\n            m: 0,\n            flexDirection: 'row-reverse',\n            gap: 1,\n            '& .MuiFormControlLabel-label': {\n              fontFamily: 'IBM Plex Sans',\n              color: 'text.secondary',\n            },\n          }}\n          control={\n            <StyledSwitch\n              size=\"small\"\n              checked={darkTheme}\n              onChange={(event) => {\n                setDarkTheme(event.target.checked);\n              }}\n            />\n          }\n        />\n      </Box>\n      <ThemeViewer data={data} expandPaths={expandPaths} />\n    </Box>\n  );\n}\n\nexport default DefaultTheme;\n"}};j.scope={process:{},import:{react:c,"@mui/material/Box":l,"@mui/material/Divider":u,"@mui/material/styles":d,"@mui/material/FormControlLabel":h,"@mui/material/Switch":m,"docs/src/modules/utils/i18n":p,"docs/src/modules/components/ThemeViewer":f,"docs/src/modules/brandingTheme":v}};var F={"./DefaultTheme.js":function(){var e=i.useState(!1),t=(0,g.Z)(e,2),n=t[0],r=t[1],a=i.useState(null),c=(0,g.Z)(a,2),s=c[0],l=c[1],u=(0,p.useTranslate)(),d=i.useState(!1),h=(0,g.Z)(d,2),m=h[0],v=h[1];i.useEffect(function(){var e;decodeURI(document.location.search.slice(1)).split("&").forEach(function(t){var n=t.split("="),o=(0,g.Z)(n,2),r=o[0],a=o[1];"expand-path"===r&&(e=a)}),e&&l(e.replace("$.","").split(".").reduce(function(e,t){var n=e.length>0?"".concat(e[e.length-1],"."):"";return e.push(n+t),e},[]))},[]);var b=i.useMemo(function(){return(0,y.Z)({palette:{mode:m?"dark":"light"}})},[m]),x=(0,f.useNodeIdsLazy)(b);return i.useDebugValue(x),i.useEffect(function(){n&&l(x)},[n,x]),(0,S.jsxs)(Z.Z,{sx:{width:"100%"},children:[(0,S.jsxs)(Z.Z,{sx:{display:"flex",gap:2,mb:3},children:[(0,S.jsx)(k.Z,{label:u("expandAll"),sx:{m:0,flexDirection:"row-reverse",gap:1,"& .MuiFormControlLabel-label":{fontFamily:"IBM Plex Sans",color:"text.secondary"}},control:(0,S.jsx)(M,{size:"small",checked:n,onChange:function(e){r(e.target.checked),l(e.target.checked?x:[])}})}),o||(o=(0,S.jsx)(w.Z,{orientation:"vertical",flexItem:!0})),(0,S.jsx)(k.Z,{label:u("useDarkTheme"),sx:{m:0,flexDirection:"row-reverse",gap:1,"& .MuiFormControlLabel-label":{fontFamily:"IBM Plex Sans",color:"text.secondary"}},control:(0,S.jsx)(M,{size:"small",checked:m,onChange:function(e){v(e.target.checked)}})})]}),(0,S.jsx)(f.default,{data:b,expandPaths:s})]})}},T={};function R(){return(0,S.jsx)(s.Z,(0,a.Z)((0,a.Z)({},r),{},{disableToc:!0}))}},165492:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var o,r=n(163804),a=n(667294),i=n(45697),c=n.n(i),s=n(811163),l=n(721923),u=n(875795),d=n(608144),h=n(772184),m=n(400438),p=n(692124),f=n(261589),v=n(703391),g=n(662208),b=n(785893);function Z(e){var t=e.mode,n=(0,u.tv)().setMode;return a.useEffect(function(){n(t)},[t,n]),null}function w(e){var t=(0,l.Z)(),n=(0,s.useRouter)(),i=(0,h.ln)(n.asPath).canonicalAs,c=e.disableAd,w=void 0!==c&&c,x=e.disableToc,y=e.disableCssVarsProvider,k=e.demos,C=void 0===k?{}:k,S=e.docs,M=e.demoComponents,P=e.srcComponents,j=S[(0,p.useUserLanguage)()]||S.en,F=i.startsWith("/joy-ui/")&&!(void 0!==y&&y),T=F?u.lL:a.Fragment,R=F?f.default:a.Fragment,z=(0,r.Z)({},F&&{mode:t.palette.mode});return(0,b.jsxs)(m.Z,{description:j.description,disableAd:w,disableToc:void 0!==x&&x,location:j.location,title:j.title,toc:j.toc,children:[w?null:o||(o=(0,b.jsx)(f.default,{children:(0,b.jsx)(g.Z,{children:(0,b.jsx)(v.ZP,{})})})),(0,b.jsxs)(T,{children:[F&&(0,b.jsx)(Z,{mode:t.palette.mode}),j.rendered.map(function(e,n){return(0,b.jsx)(d.Z,{demoComponents:M,demos:C,disableAd:w,localizedDoc:j,renderedMarkdownOrDemo:e,srcComponents:P,theme:t,WrapperComponent:R,wrapperProps:z},"demos-section-".concat(n))})]})]})}Z.propTypes={mode:c().oneOf(["light","dark"])}},452581:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L},useNodeIdsLazy:function(){return I}});var o,r,a,i=n(163804),c=n(80117),s=n(648611),l=n(849088),u=n(777193),d=n(378149),h=n.n(d),m=n(726243),p=n.n(m),f=n(667294),v=n(490512),g=n(811546),b=n(333346),Z=n(305749),w=n.n(Z),x=n(474749),y=n.n(x),k=n(811527),C=n(670671),S=n(921727),M=n(992443),P=n(343966),j=n(785893),F=["data","expandPaths"],T=(0,g.default)("span")(function(e){return{backgroundColor:"#fff",display:"inline-block",marginBottom:-1,marginRight:e.theme.spacing(.5),border:"1px solid",backgroundImage:'url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%202%202%22%3E%3Cpath%20d%3D%22M1%202V0h1v1H0v1z%22%20fill-opacity%3D%22.2%22%2F%3E%3C%2Fsvg%3E")'}});function R(e){var t=e.objectKey,n=e.objectValue,o=h()(n)?"array":null===n?"null":/^(#|rgb|rgba|hsl|hsla)/.test(n)?"color":typeof n,r=function(e,t){switch(t){case"array":return"Array(".concat(e.length,")");case"null":return"null";case"undefined":return"undefined";case"function":return"f ".concat(e.name,"()");case"object":return"Object";case"string":return'"'.concat(e,'"');case"symbol":return"Symbol(".concat(String(e),")");default:return String(e)}}(n,o),a=function(e){switch(e){case"color":return"string";case"object":case"array":return"comment";default:return e}}(o);return(0,j.jsxs)(f.Fragment,{children:["".concat(t,": "),"color"===o?(0,j.jsx)(T,{style:{borderColor:(0,M.$n)(r,.7)},children:(0,j.jsx)(b.Z,{component:"span",sx:{display:"block",width:11,height:11},style:{backgroundColor:r}})}):null,(0,j.jsx)("span",{className:(0,v.default)("token",a),children:r})]})}var z=(0,g.default)(C.k)((o={},(0,u.Z)(o,"&:focus > .".concat(S.r.content),{backgroundColor:(0,M.$n)(P.blue[900],.05),outline:"2px dashed ".concat((0,M.$n)(P.blue[900],.3))}),(0,u.Z)(o,"& .".concat(S.r.content),(0,u.Z)({padding:4,borderRadius:"12px","&:hover":{backgroundColor:(0,M.$n)(P.blueDark[900],.1)}},"& .".concat(S.r.label),{fontFamily:"Menlo, Consolas",fontSize:"0.825rem"})),o));function B(e){var t=e.nodeId,n=e.objectKey,o=e.objectValue,r=null;return(null!==o&&"object"==typeof o||"function"==typeof o)&&(r=0===p()(o).length?void 0:p()(o).map(function(e){return(0,j.jsx)(B,{nodeId:"".concat(t,".").concat(e),objectKey:e,objectValue:o[e]},e)})),(0,j.jsx)(z,{nodeId:t,label:(0,j.jsx)(R,{objectKey:n,objectValue:o}),children:r})}function I(e){var t=f.useState([]),n=(0,s.Z)(t,2),o=n[0],r=n[1];return f.useEffect(function(){r(function e(t,n){if(null!==t&&"object"==typeof t||"function"==typeof t){var o=[];return p()(t).forEach(function(r){o.push.apply(o,["".concat(n).concat(r)].concat((0,l.Z)(e(t[r],"".concat(n).concat(r,".")))))}),o}return[]}(e,""))},[e]),o}var E="$ROOT";function L(e){var t=e.data,n=e.expandPaths,o=void 0===n?[]:n,s=(0,c.Z)(e,F),l=f.useMemo(function(){return h()(o)?o.map(function(e){return"".concat(E,".").concat(e)}):[]},[o]),u=f.useMemo(function(){return l.join("")},[l]);return(0,j.jsx)(k.L,(0,i.Z)((0,i.Z)({defaultCollapseIcon:r||(r=(0,j.jsx)(w(),{})),defaultEndIcon:(0,j.jsx)("div",{style:{width:24}}),defaultExpanded:l,defaultExpandIcon:a||(a=(0,j.jsx)(y(),{}))},s),{},{sx:{color:"#FFF",p:1.5,bgcolor:"#0F1924",borderRadius:3,border:"1px solid",borderColor:P.blueDark[700]},children:p()(t).map(function(e){return(0,j.jsx)(B,{nodeId:"".concat(E,".").concat(e),objectKey:e,objectValue:t[e]},e)})}),u)}},305749:function(e,t,n){"use strict";var o=n(526771),r=n(564836);o(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(391641)),i=n(785893),c=(0,a.default)((0,i.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=c},398825:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/customization/default-theme",function(){return n(408037)}])}},function(e){e.O(0,[52996,8365,82961,61532,41159,10925,41512,82700,27830,7565,36195,17007,43374,48956,98826,16577,94665,21011,43765,95965,44749,67461,33335,98147,49774,92888,40179],function(){return e(e.s=398825)}),_N_E=e.O()}]);