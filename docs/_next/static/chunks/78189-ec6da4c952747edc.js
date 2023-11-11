"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[78189],{972374:function(e,r,t){t.d(r,{Z:function(){return w}});var o,n,a,i,l=t(163804),s=t(80117),c=t(208882),d=t(382388),p=t(698147),u=t(26976),h=t(948956),x=t(343966),f=t(425937),m=t(769274),y=t(785893),g=(0,x.getDesignTokens)("light"),Z=g.palette,b=g.typography,j=(0,s.Z)(g,["palette","typography"]),v=(0,x.getDesignTokens)("dark").palette,k=(0,d.Z)((0,l.Z)((0,l.Z)({cssVarPrefix:"muidocs",colorSchemes:{light:{palette:Z},dark:{palette:v}}},j),{},{typography:(0,c.Z)(b,{h1:{':where([data-mui-color-scheme="dark"]) &':{color:"var(--muidocs-palette-common-white)"}},h2:{':where([data-mui-color-scheme="dark"]) &':{color:"var(--muidocs-palette-grey-100)"}},h5:{':where([data-mui-color-scheme="dark"]) &':{color:"var(--muidocs-palette-primary-300)"}}})},(0,x.getThemedComponents)()));function w(e){var r=e.children;return(0,y.jsxs)(p.CM,{theme:k,defaultMode:"system",disableTransitionOnChange:!0,children:[o||(o=(0,y.jsx)(h.F1,{})),n||(n=(0,y.jsx)(u.ZP,{})),a||(a=(0,y.jsx)(f.Z,{})),i||(i=(0,y.jsx)(m.Z,{})),r]})}},623926:function(e,r,t){t.d(r,{Z:function(){return I}});var o,n=t(777193),a=t(849088),i=t(5870),l=t(163804),s=t(66250),c=t(648611),d=t(726243),p=t.n(d),u=t(378149),h=t.n(u),x=t(667294),f=t(602688),m=t(992443),y=t(493886),g=t(908366),Z=t(333346),b=t(964882),j=t(626825),v=t(716403),k=t(507565),w=t(301609),S=t(91269),C=t.n(S),D=t(785893),M=(0,f.ZP)("form")({});function I(e){var r,t=e.sx,d=x.useState({email:"",status:"initial"}),u=(0,c.Z)(d,2),f=u[0],S=u[1],I=(r=(0,s.Z)((0,i.Z)().mark(function e(r){return(0,i.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),S(function(e){return(0,l.Z)((0,l.Z)({},e),{},{status:"loading"})}),e.prev=2,e.next=5,fetch("https://f0433e60.sibforms.com/serve/MUIEAE9LexIU5u5hYkoDJ-Mc379-irLHNIlGEgCm5njkAwg6OYFfNQTd25n4SO6vJom9WvQ89GJ0sYBzFYswLRewcOvD_dRtoFycXIObP8SMm-kNO1CdXKaWEZutrfqMKygHb1Je1QBGrMUnJg8J5qVeCwa7rSPBN0A1_6Ug3SiGjgIlbiCcMVA4KbhaYTiBvKkaejlCjgZcLHBT",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},mode:"no-cors",body:function(e){return p()(e).filter(function(r){return null!=e[r]}).map(function(r){return"".concat(encodeURIComponent(r),"=").concat(encodeURIComponent(e[r]))}).join("&")}({EMAIL:f.email,email_address_check:"",locale:"en"})});case 5:S(function(e){return(0,l.Z)((0,l.Z)({},e),{},{status:"sent"})}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),S(function(e){return(0,l.Z)((0,l.Z)({},e),{},{status:"failure"})});case 11:case"end":return e.stop()}},e,null,[[2,8]])})),function(e){return r.apply(this,arguments)});return"sent"===f.status?(0,D.jsxs)(y.Z,{severity:"success",sx:[function(e){return(0,l.Z)({maxWidth:{sm:400},bgcolor:"success.50"},e.applyDarkStyles({bgcolor:"primaryDark.700"}))}].concat((0,a.Z)(h()(t)?t:[t])),iconMapping:{success:(0,D.jsx)(C(),{fontSize:"small",sx:function(e){return(0,l.Z)({color:"success.700"},e.applyDarkStyles({color:"success.600"}))}})},children:[(0,D.jsx)(g.Z,{sx:{typography:"body2",fontWeight:700},children:"Thanks for subscribing!"}),"Go to your email and open the ",o||(o=(0,D.jsx)("strong",{children:"confirmation email"}))," to confirm your subscription."]}):(0,D.jsxs)(M,{onSubmit:I,sx:t,children:[(0,D.jsx)(j.Z,{htmlFor:"email-subscribe",sx:{typography:"caption",color:"text.secondary",fontWeight:500},children:"Enter your email:"}),(0,D.jsxs)(Z.Z,{sx:{display:"flex",flexDirection:{xs:"column",sm:"row"},mt:1,gap:1.5,width:{xs:"100%",sm:"auto"},maxWidth:320},children:[(0,D.jsx)(k.ZP,{id:"email-subscribe",name:"email",type:"email",placeholder:"example@email.com",value:f.email,onChange:function(e){return S({email:e.target.value,status:"initial"})},inputProps:{required:!0},sx:[function(e){var r;return r={minWidth:220,borderRadius:1,border:"1px solid",bgcolor:"#fff",boxShadow:"inset 0 1px 2px ".concat((e.vars||e).palette.grey[50],", 0 1px 0.5px ").concat((0,m.Fq)(e.palette.grey[100],.6)),borderColor:"grey.200",typography:"body2","&:hover":{borderColor:"grey.300",boxShadow:"inset 0 1px 2px ".concat((e.vars||e).palette.grey[50],", 0 1px 2px ").concat((e.vars||e).palette.grey[100])}},(0,n.Z)(r,"&.".concat(w.Z.focused),{boxShadow:"0 0 0 3px ".concat((e.vars||e).palette.primary[200]),borderColor:"primary.300"}),(0,n.Z)(r,"& .".concat(w.Z.input),{borderRadius:"calc(".concat(e.shape.borderRadius,"px - 1px)"),py:1,px:1.5}),r},function(e){return e.applyDarkStyles((0,n.Z)({bgcolor:"primaryDark.900",boxShadow:"inset 0 1px 1px ".concat((e.vars||e).palette.primaryDark[900],", 0 1px 0.5px ").concat((e.vars||e).palette.common.black),borderColor:"primaryDark.500","&:hover":{borderColor:"primaryDark.400",boxShadow:"inset 0 1px 1px ".concat((e.vars||e).palette.primaryDark[900],", 0 1px 2px ").concat((e.vars||e).palette.common.black)}},"&.".concat(w.Z.focused),{boxShadow:"0 0 0 3px ".concat((e.vars||e).palette.primary[800]),borderColor:"primary.600"}))}]}),(0,D.jsx)(b.Z,{variant:"outlined",disabled:"loading"===f.status,type:"submit",children:"Subscribe"})]}),"failure"===f.status&&(0,D.jsx)(v.Z,{sx:function(e){return(0,l.Z)({color:"warning.800"},e.applyDarkStyles({color:"warning.500"}))},children:"Oops! Something went wrong, please try again later."})]})}},477991:function(e,r,t){t.d(r,{Z:function(){return Y}});var o,n,a,i,l,s,c,d,p,u,h,x,f,m,y,g=t(163804),Z=t(333346),b=t(858280),j=t(166701),v=t(179477),k=t(270285),w=t(966366),S=t(618154),C=t.n(S),D=t(416589),M=t.n(D),I=t(375125),T=t.n(I),z=t(699032),R=t.n(z),F=t(341139),U=t.n(F),B=t(992443),_=t(777193),L=t(849088),E=t(378149),W=t.n(E),A=t(867300),P=t(785893);function V(e){return(0,P.jsxs)(A.Z,(0,g.Z)((0,g.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 117 36",fill:"none",sx:[function(e){return(0,_.Z)({flexShrink:0,color:"#0B0D0E"},e.getColorSchemeSelector("dark"),{color:"#fff"})}].concat((0,L.Z)(W()(e.sx)?e.sx:[e.sx]))},e),{},{children:[o||(o=(0,P.jsx)("path",{d:"M11.59 10.73.75 4.43a.5.5 0 0 0-.75.44V22.4c0 .18.1.34.25.43l4.05 2.38a.5.5 0 0 0 .75-.43V13.34a.2.2 0 0 1 .3-.17l6.25 3.58a2 2 0 0 0 2-.01l6.1-3.57a.2.2 0 0 1 .3.17v5.6a1 1 0 0 1-.48.85l-6.28 3.86a.5.5 0 0 0-.24.43v5.64c0 .18.09.34.23.43l8.23 5.2a2 2 0 0 0 2.1.02l10.46-6.2a2 2 0 0 0 .98-1.73V16.63a.5.5 0 0 0-.76-.43l-3.31 2a2 2 0 0 0-.97 1.7v5.43a.5.5 0 0 1-.25.43l-6.19 3.65a2 2 0 0 1-2.04-.01l-3.33-2a.5.5 0 0 1-.02-.84l6.02-3.97a2 2 0 0 0 .9-1.67V4.87a.5.5 0 0 0-.75-.43l-10.7 6.29a2 2 0 0 1-2.01 0Z",fill:"#007FFF"})),n||(n=(0,P.jsx)("path",{d:"M35 5.36v3.42a2 2 0 0 1-.94 1.7l-3.3 2.05a.5.5 0 0 1-.76-.43V8.52a2 2 0 0 1 1-1.73l3.25-1.86a.5.5 0 0 1 .75.43Z",fill:"#007FFF"})),a||(a=(0,P.jsx)("path",{d:"M50.38 26.5V8.3h4.5l7.56 10.5-3.32-.02L66.7 8.3h4.44v18.2H66.2v-5.02c0-1.49.03-2.86.1-4.1.07-1.27.21-2.55.42-3.83l.52 1.61-5.64 7.28h-1.72l-5.62-7.35.58-1.54c.2 1.25.34 2.5.41 3.75.07 1.24.1 2.64.1 4.18v5.02h-4.96Zm34.88.16c-1.77 0-3.34-.35-4.7-1.04a7.87 7.87 0 0 1-3.18-2.89 7.92 7.92 0 0 1-1.11-4.19V8.3h5.2v10.09c0 .76.16 1.43.49 2 .33.57.78 1.01 1.35 1.33a4 4 0 0 0 1.95.46c.76 0 1.44-.15 2.03-.46.6-.32 1.07-.76 1.4-1.33.35-.57.52-1.24.52-2V8.3h5.05v10.24a7.78 7.78 0 0 1-4.3 7.08c-1.33.69-2.9 1.04-4.7 1.04Zm14.41-.16v-4.32h4.19v-9.56h-4.19V8.3h13.5v4.32H109v9.56h4.16v4.32h-13.5Z",fill:"currentColor"}))]}))}var O=t(623926),H=t(966992),q=t(329021),G=t(245510),K=t(133695);function J(e){return(0,P.jsx)(K.Z,(0,g.Z)((0,g.Z)({},e),{},{children:i||(i=(0,P.jsx)("path",{d:"M19.04 20.04v-5.87h1.99V22H3v-7.83h2v5.87h14.05-.01ZM6.98 18.09h10.05v-1.96H6.99v1.96Zm.25-4.45 9.8 2 .42-1.89-9.8-2.02-.41 1.9-.01.01ZM8.5 9l9.07 4.15.84-1.78L9.34 7.2 8.5 9V9Zm2.53-4.38 7.69 6.28 1.27-1.49-7.69-6.28-1.26 1.49ZM16.01 0l-1.64 1.2 6 7.87L22 7.88 16 0Z"}))}))}function Y(e){var r=e.stackOverflowUrl;return(0,P.jsxs)(b.Z,{component:"footer",children:[(0,P.jsxs)(Z.Z,{sx:{py:{xs:4,sm:8},display:"grid",gridAutoColumns:"1fr",alignItems:"flex-start",justifyContent:"space-between",gap:4,gridTemplateColumns:{xs:"1fr",sm:"1fr",md:"1fr 1.75fr",lg:"1fr 1fr"},gridTemplateRows:"auto","& a:not(.MuiIconButton-root)":{pt:.5,pb:.5,color:"text.secondary",typography:"body2","&:hover":{color:"primary.main",textDecoration:"underline"}}},children:[(0,P.jsxs)("div",{children:[l||(l=(0,P.jsx)(v.Z,{variant:"body2",fontWeight:"bold",children:"Keep up to date"})),(0,P.jsx)(v.Z,{variant:"body2",color:"text.secondary",sx:{mb:1},children:"Join our newsletter for regular updates. No spam ever."}),(0,P.jsx)(O.Z,{sx:{mb:4}})]}),(0,P.jsxs)(Z.Z,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr 1fr",md:"1fr 1fr 1fr 1fr"},gridAutoColumns:"1fr",gap:2},children:[(0,P.jsxs)(Z.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,P.jsx)(v.Z,{fontWeight:"bold",variant:"body2",sx:{mb:.5},children:"Products"}),(0,P.jsx)(G.default,{href:H.Z.productMaterial,children:"Material UI"}),(0,P.jsx)(G.default,{href:H.Z.productBase,children:"Base UI"}),(0,P.jsx)(G.default,{href:H.Z.productAdvanced,children:"MUI X"}),(0,P.jsx)(G.default,{href:H.Z.productToolpad,children:"MUI Toolpad"}),(0,P.jsx)(G.default,{href:H.Z.productTemplates,children:"Templates"}),(0,P.jsx)(G.default,{href:H.Z.productDesignKits,children:"Design kits"})]}),(0,P.jsxs)(Z.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,P.jsx)(v.Z,{fontWeight:"bold",variant:"body2",sx:{mb:.5},children:"Resources"}),(0,P.jsx)(G.default,{href:H.Z.materialIcons,children:"Material Icons"}),(0,P.jsx)(G.default,{href:H.Z.freeTemplates,children:"Free templates"}),(0,P.jsx)(G.default,{href:H.Z.components,children:"Components"}),(0,P.jsx)(G.default,{href:H.Z.customization,children:"Customization"}),(0,P.jsx)(G.default,{href:H.Z.theming,children:"Theming"})]}),(0,P.jsxs)(Z.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,P.jsx)(v.Z,{fontWeight:"bold",variant:"body2",sx:{mb:.5},children:"Explore"}),(0,P.jsx)(G.default,{href:H.Z.documentation,children:"Documentation"}),(0,P.jsx)(G.default,{href:H.Z.store,children:"Store"}),(0,P.jsx)(G.default,{href:H.Z.blog,children:"Blog"}),(0,P.jsx)(G.default,{href:H.Z.showcase,children:"Showcase"}),(0,P.jsx)(G.default,{href:H.Z.xRoadmap,children:"Roadmap"})]}),(0,P.jsxs)(Z.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,P.jsx)(v.Z,{fontWeight:"bold",variant:"body2",sx:{mb:.5},children:"Company"}),(0,P.jsx)(G.default,{href:H.Z.about,children:"About"}),(0,P.jsx)(G.default,{href:H.Z.vision,children:"Vision"}),(0,P.jsxs)(Z.Z,{sx:{display:"flex",alignItems:"end"},children:[(0,P.jsx)(G.default,{href:H.Z.careers,children:"Careers "}),(0,P.jsx)(Z.Z,{sx:function(e){return(0,g.Z)({px:.5,py:.1,ml:1,mb:"1px",position:"relative",top:e.spacing(-.5),fontSize:e.typography.pxToRem(10),fontWeight:"Bold",textTransform:"uppercase",letterSpacing:".04rem",borderRadius:8,border:1,borderColor:"success.300",bgcolor:(0,B.Fq)(e.palette.success[100],.4),color:"success.700"},e.applyDarkStyles({borderColor:(0,B.Fq)(e.palette.success[800],.5),bgcolor:(0,B.Fq)(e.palette.success[800],.2),color:"success.200"}))},children:"Hiring"})]}),(0,P.jsx)(G.default,{href:H.Z.support,children:"Support"}),(0,P.jsx)(G.default,{href:H.Z.privacyPolicy,children:"Privacy policy"}),s||(s=(0,P.jsx)(G.default,{target:"_blank",rel:"noopener noreferrer",href:"mailto:contact@mui.com",children:"Contact us"}))]})]})]}),c||(c=(0,P.jsx)(j.Z,{})),(0,P.jsxs)(Z.Z,{sx:{my:4,display:"flex",flexDirection:{xs:"column",sm:"row"},alignItems:{sm:"center"},justifyContent:{sm:"space-between"},gap:{xs:2,sm:1}},children:[(0,P.jsxs)(Z.Z,{sx:{display:"flex",flexDirection:{xs:"column",sm:"row"},alignItems:{xs:"start",sm:"center"},gap:1.5},children:[d||(d=(0,P.jsx)(G.default,{href:"/","aria-label":"Go to homepage",children:(0,P.jsx)(V,{height:28,width:91})})),(0,P.jsxs)(v.Z,{color:"text.tertiary",variant:"caption",fontWeight:400,children:["Copyright \xa9 ",new Date().getFullYear()," Material UI SAS, trading as MUI."]})]}),(0,P.jsxs)(w.Z,{spacing:1,direction:"row",flexWrap:"wrap",useFlexGap:!0,children:[p||(p=(0,P.jsx)(k.Z,{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/mui","aria-label":"github",title:"GitHub",size:"small",children:(0,P.jsx)(M(),{fontSize:"small"})})),(0,P.jsx)(k.Z,{target:"_blank",rel:"noopener noreferrer",href:H.Z.rssFeed,"aria-label":"RSS Feed",title:"RSS Feed",size:"small",children:u||(u=(0,P.jsx)(U(),{fontSize:"small"}))}),h||(h=(0,P.jsx)(k.Z,{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/MUI_hq","aria-label":"twitter",title:"Twitter",size:"small",children:(0,P.jsx)(C(),{fontSize:"small"})})),x||(x=(0,P.jsx)(k.Z,{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/company/mui/","aria-label":"linkedin",title:"LinkedIn",size:"small",children:(0,P.jsx)(T(),{fontSize:"small"})})),f||(f=(0,P.jsx)(k.Z,{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/@MUI_hq","aria-label":"YouTube",title:"YouTube",size:"small",children:(0,P.jsx)(R(),{fontSize:"small"})})),m||(m=(0,P.jsx)(k.Z,{target:"_blank",rel:"noopener noreferrer",href:"https://mui.com/r/discord/","aria-label":"Discord",title:"Discord",size:"small",children:(0,P.jsx)(q.Z,{fontSize:"small"})})),r?(0,P.jsx)(k.Z,{target:"_blank",rel:"noopener noreferrer",href:r,"aria-label":"Stack Overflow",title:"Stack Overflow",size:"small",children:y||(y=(0,P.jsx)(J,{fontSize:"small"}))}):null]})]})]})}},821111:function(e,r,t){t.d(r,{Z:function(){return ek}});var o,n,a,i,l,s,c,d,p,u,h,x,f,m,y,g,Z,b,j,v=t(602688),k=t(992443),w=t(350228),S=t(333346),C=t(966366),D=t(858280),M=t(695093),I=t(270285),T=t(416589),z=t.n(T),R=t(552598),F=t(648611),U=t(80117),B=t(163804),_=t(667294),L=t(514950),E=t(717708),W=t(869590),A=t(870500),P=t(456667),V=t(203978),O=t(179477),H=t(638421),q=t(966992),G=t(245510),K=t(743831),J=t(785893),Y=["icon","name","description","chip","href"],N=(0,v.ZP)("nav")(function(e){var r=e.theme;return[{"& ul":{padding:0,margin:0,listStyle:"none",display:"flex"},"& li":(0,B.Z)((0,B.Z)({color:(r.vars||r).palette.text.primary},r.typography.body2),{},{fontWeight:r.typography.fontWeightBold,"& > a, & > button":{display:"inline-block",color:"inherit",font:"inherit",textDecoration:"none",padding:r.spacing("8px",1),borderRadius:(r.vars||r).shape.borderRadius,"&:hover":{color:(r.vars||r).palette.grey[700],backgroundColor:(r.vars||r).palette.grey[50],"@media (hover: none)":{backgroundColor:"initial"}},"&:focus-visible":{color:(r.vars||r).palette.grey[700],outline:0,backgroundColor:(r.vars||r).palette.grey[100]}},"& > div":{cursor:"default"}})},r.applyDarkStyles({"& li":{"& > a, & > button":{"&:hover":{backgroundColor:(r.vars||r).palette.primaryDark[700],color:(r.vars||r).palette.primaryDark[200]},"&:focus-visible":{backgroundColor:(r.vars||r).palette.primaryDark[600],color:(r.vars||r).palette.primaryDark[100]}}}})]}),X=["product-core","product-advanced","product-templates","product-design","product-toolpad"],Q=_.forwardRef(function(e,r){var t=e.icon,o=e.name,n=e.description,a=e.chip,i=e.href,l=(0,U.Z)(e,Y);return(0,J.jsxs)(S.Z,(0,B.Z)((0,B.Z)({component:G.default,href:i,ref:r,sx:[function(e){return{display:"flex",alignItems:"center",py:2,pr:3,"&:hover, &:focus":{backgroundColor:(e.vars||e).palette.grey[50],outline:0,"@media (hover: none)":{backgroundColor:"initial",outline:"initial"}}}},function(e){return e.applyDarkStyles({"&:hover, &:focus":{backgroundColor:(0,k.Fq)(e.palette.primaryDark[700],.4)}})}]},l),{},{children:[(0,J.jsx)(S.Z,{sx:[function(e){return{px:2,"& circle":{fill:(e.vars||e).palette.grey[100]}}},function(e){return e.applyDarkStyles({"& circle":{fill:(e.vars||e).palette.primaryDark[700]}})}],children:t}),(0,J.jsxs)(S.Z,{sx:{flexGrow:1},children:[(0,J.jsx)(O.Z,{color:"text.primary",variant:"body2",fontWeight:"bold",children:o}),(0,J.jsx)(O.Z,{color:"text.secondary",variant:"body2",children:n})]}),a]}))});function $(){var e=_.useState(null),r=(0,F.Z)(e,2),t=r[0],d=r[1],p=_.useState(null),u=(0,F.Z)(p,2),h=u[0],x=u[1],f=_.useRef(null),m=_.useRef(null),y=_.useRef(null);_.useEffect(function(){if("number"==typeof h){var e;null===(e=document.getElementById(X[h]))||void 0===e||e.focus()}},[h]);var g=_.useMemo(function(){return(0,P.Z)(d,40)},[d]),Z=function(e){return function(){g.clear(),d(e)}},b=function(e){return function(){g.clear(),d(t?null:e)}};return _.useEffect(function(){return function(){g.clear()}},[g]),(0,J.jsx)(N,{children:(0,J.jsxs)("ul",{ref:f,onKeyDown:function(e){var r;if("products"===t)r=m.current;else{if("docs"!==t)return;r=y.current}"ArrowDown"===e.key&&"products"===t&&(e.preventDefault(),x(function(e){return null===e||e===X.length-1?0:e+1})),"ArrowUp"===e.key&&"products"===t&&(e.preventDefault(),x(function(e){return null===e?0:0===e?X.length-1:e-1})),("Escape"===e.key||"Tab"===e.key)&&(r.focus(),d(null),x(null))},children:[(0,J.jsxs)("li",{onMouseEnter:Z("products"),onFocus:Z("products"),onMouseLeave:function(){return g(null)},onBlur:Z(null),children:[(0,J.jsx)(E.Z,{ref:m,"aria-haspopup":!0,"aria-expanded":"products"===t?"true":"false",onClick:b("products"),"aria-controls":"products"===t?"products-popper":void 0,children:"Products"}),(0,J.jsx)(W.Z,{id:"products-popper",open:"products"===t,anchorEl:m.current,transition:!0,placement:"bottom-start",style:{zIndex:1200,pointerEvents:"products"===t?void 0:"none"},children:function(e){var r=e.TransitionProps;return(0,J.jsx)(V.Z,(0,B.Z)((0,B.Z)({},r),{},{timeout:350,children:(0,J.jsx)(A.Z,{variant:"outlined",sx:[function(e){return(0,B.Z)((0,B.Z)({minWidth:498,overflow:"hidden",borderColor:"grey.200",bgcolor:"background.paper",boxShadow:"0px 4px 20px rgba(170, 180, 190, 0.3)"},e.applyDarkStyles({borderColor:"primaryDark.700",bgcolor:"primaryDark.900",boxShadow:"0px 4px 20px ".concat((0,k.Fq)(e.palette.background.paper,.72))})),{},{"& ul":{margin:0,padding:0,listStyle:"none"},"& li:not(:last-of-type)":{borderBottom:"1px solid",borderColor:"grey.100"},"& a":{textDecoration:"none"}})},function(e){return e.applyDarkStyles({"& li:not(:last-of-type)":{borderColor:"primaryDark.700"}})}],children:(0,J.jsxs)("ul",{children:[(0,J.jsx)("li",{children:(0,J.jsx)(Q,{id:X[0],href:q.Z.productCore,icon:o||(o=(0,J.jsx)(H.Z,{name:"product-core"})),name:"MUI Core",description:"Ready-to-use foundational React components, free forever."})}),(0,J.jsx)("li",{children:(0,J.jsx)(Q,{id:X[1],href:q.Z.productAdvanced,icon:n||(n=(0,J.jsx)(H.Z,{name:"product-advanced"})),name:"MUI X",description:"Advanced and powerful components for complex use cases."})}),(0,J.jsx)("li",{children:(0,J.jsx)(Q,{id:X[2],href:q.Z.productTemplates,icon:a||(a=(0,J.jsx)(H.Z,{name:"product-templates"})),name:"Templates",description:"Fully built, out-of-the-box, templates for your application."})}),(0,J.jsx)("li",{children:(0,J.jsx)(Q,{id:X[3],href:q.Z.productDesignKits,icon:i||(i=(0,J.jsx)(H.Z,{name:"product-designkits"})),name:"Design kits",description:"Our components available in your favorite design tool."})}),(0,J.jsx)("li",{children:(0,J.jsx)(Q,{id:X[4],href:q.Z.productToolpad,icon:l||(l=(0,J.jsx)(H.Z,{name:"product-toolpad"})),name:"MUI Toolpad",chip:s||(s=(0,J.jsx)(L.Z,{label:"Beta",size:"small",color:"primary",variant:"outlined"})),description:"Low-code admin builder."})})]})})}))}})]}),(0,J.jsxs)("li",{onMouseEnter:Z("docs"),onFocus:Z("docs"),onMouseLeave:function(){return g(null)},onBlur:Z(null),children:[(0,J.jsx)(E.Z,{ref:y,"aria-haspopup":!0,"aria-expanded":"docs"===t?"true":"false",onClick:b("docs"),"aria-controls":"docs"===t?"docs-popper":void 0,children:"Docs"}),(0,J.jsx)(W.Z,{id:"docs-popper",open:"docs"===t,anchorEl:y.current,transition:!0,placement:"bottom-start",style:{zIndex:1200,pointerEvents:"docs"===t?void 0:"none"},children:function(e){var r=e.TransitionProps;return(0,J.jsx)(V.Z,(0,B.Z)((0,B.Z)({},r),{},{timeout:350,children:(0,J.jsx)(A.Z,{variant:"outlined",sx:function(e){return(0,B.Z)((0,B.Z)({minWidth:498,overflow:"hidden",borderColor:"grey.200",bgcolor:"background.paper",boxShadow:"0px 4px 20px rgba(170, 180, 190, 0.3)"},e.applyDarkStyles({borderColor:"primaryDark.700",bgcolor:"primaryDark.900",boxShadow:"0px 4px 20px ".concat((0,k.Fq)(e.palette.background.paper,.72))})),{},{"& ul":{margin:0,padding:0,listStyle:"none"}})},children:c||(c=(0,J.jsx)("ul",{children:(0,J.jsx)(K.Z,{})}))})}))}})]}),(0,J.jsx)("li",{children:(0,J.jsx)(G.default,{href:q.Z.pricing,children:"Pricing"})}),(0,J.jsx)("li",{children:(0,J.jsx)(G.default,{href:q.Z.about,children:"About us"})}),(0,J.jsx)("li",{children:(0,J.jsx)(G.default,{href:q.Z.blog,children:"Blog"})})]})})}var ee=t(273953),er=t(145002),et=t(210978),eo=t.n(et),en=t(892053),ea=(0,v.ZP)("a")(function(e){var r=e.theme;return[(0,B.Z)((0,B.Z)({},r.typography.body2),{},{fontWeight:r.typography.fontWeightBold,textDecoration:"none",border:"none",width:"100%",backgroundColor:"transparent",color:(r.vars||r).palette.text.secondary,cursor:"pointer",display:"flex",alignItems:"center",padding:r.spacing(1),borderRadius:r.spacing(1),transition:r.transitions.create("background"),"&:hover, &:focus-visible":{backgroundColor:(r.vars||r).palette.grey[100],"@media (hover: none)":{backgroundColor:"transparent"}}}),r.applyDarkStyles({color:"#fff","&:hover, &:focus-visible":{backgroundColor:(r.vars||r).palette.primaryDark[700],"@media (hover: none)":{backgroundColor:"transparent"}}})]}),ei=(0,v.ZP)("ul")({listStyleType:"none",padding:0,margin:0}),el=[{name:"MUI Core",description:"Ready-to-use foundational React components, free forever.",href:q.Z.productCore},{name:"MUI X",description:"Advanced and powerful components for complex use-cases.",href:q.Z.productAdvanced},{name:"Templates",description:"Fully built, out-of-the-box, templates for your application.",href:q.Z.productTemplates},{name:"Design kits",description:"Our components available in your favorite design tool.",href:q.Z.productDesignKits},{name:"MUI Toolpad",description:"Low-code admin builder.",href:q.Z.productToolpad,chip:"Beta"}],es=[{name:"Material UI",description:"React components that implement Google's Material Design.",href:q.Z.materialDocs},{name:"Joy UI",description:"React components for building your design system.",href:q.Z.joyDocs},{name:"Base UI",description:"Unstyled React components and low-level hooks.",href:q.Z.baseDocs},{name:"MUI System",description:"CSS utilities for rapidly laying out custom designs.",href:q.Z.systemDocs},{name:"MUI X",description:"Advanced and powerful components for complex use cases.",href:q.Z.advancedComponents},{name:"MUI Toolpad",description:"Low-code admin builder.",href:q.Z.toolpadDocs,chip:"Beta"}];function ec(){var e=_.useState(!1),r=(0,F.Z)(e,2),t=r[0],o=r[1],n=_.useState(!0),a=(0,F.Z)(n,2),i=a[0],l=a[1],s=_.useState(!1),c=(0,F.Z)(s,2),p=c[0],u=c[1],h=_.useRef(null);return(0,J.jsxs)(_.Fragment,{children:[(0,J.jsx)(I.Z,{color:"primary","aria-label":"Menu",ref:h,disableRipple:!0,onClick:function(){return o(function(e){return!e})},sx:(0,B.Z)({position:"relative","& rect":{transformOrigin:"center",transition:"0.2s"}},t&&{"& rect:first-of-type":{transform:"translate(1.5px, 1.6px) rotateZ(-45deg)"},"& rect:last-of-type":{transform:"translate(1.5px, -1.2px) rotateZ(45deg)"}}),children:d||(d=(0,J.jsx)(en.Z,{}))}),(0,J.jsx)(er.d,{onClickAway:function(e){h.current.contains(e.target)||o(!1)},children:(0,J.jsx)(ee.Z,{in:t,sx:function(e){return(0,B.Z)({position:"fixed",top:56,left:0,right:0,boxShadow:"0px 4px 20px rgba(170, 180, 190, 0.3)"},e.applyDarkStyles({boxShadow:"0px 4px 20px rgba(0, 0, 0, 0.5)"}))},children:(0,J.jsx)(S.Z,{sx:{p:2,bgcolor:"background.paper",maxHeight:"calc(100vh - 56px)",overflow:"auto"},children:(0,J.jsxs)(ei,{sx:function(e){return{"& ul":(0,B.Z)((0,B.Z)({borderLeft:"1px solid",borderColor:"grey.100"},e.applyDarkStyles({borderColor:"primaryDark.700"})),{},{pl:1,pb:1,ml:1})}},children:[(0,J.jsxs)("li",{children:[(0,J.jsxs)(ea,{as:"button",onClick:function(){return l(function(e){return!e})},sx:{justifyContent:"space-between"},children:["Products",(0,J.jsx)(eo(),{color:"primary",sx:{transition:"0.3s",transform:i?"rotate(-180deg)":"rotate(0)"}})]}),(0,J.jsx)(ee.Z,{in:i,children:(0,J.jsx)(ei,{children:el.map(function(e){return(0,J.jsx)("li",{children:(0,J.jsxs)(ea,{href:e.href,as:G.default,noLinkStyle:!0,sx:{flexDirection:"column",alignItems:"initial"},children:[(0,J.jsxs)(S.Z,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.name,e.chip?(0,J.jsx)(L.Z,{size:"small",label:e.chip,color:"primary",variant:"outlined"}):null]}),(0,J.jsx)(O.Z,{variant:"body2",color:"text.secondary",children:e.description})]})},e.name)})})})]}),(0,J.jsxs)("li",{children:[(0,J.jsxs)(ea,{as:"button",onClick:function(){return u(function(e){return!e})},sx:{justifyContent:"space-between"},children:["Docs",(0,J.jsx)(eo(),{color:"primary",sx:{transition:"0.3s",transform:p?"rotate(-180deg)":"rotate(0)"}})]}),(0,J.jsx)(ee.Z,{in:p,children:(0,J.jsx)(ei,{children:es.map(function(e){return(0,J.jsx)("li",{children:(0,J.jsxs)(ea,{href:e.href,as:G.default,noLinkStyle:!0,sx:{flexDirection:"column",alignItems:"initial"},children:[(0,J.jsxs)(S.Z,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.name,e.chip?(0,J.jsx)(L.Z,{size:"small",label:e.chip,color:"primary",variant:"outlined"}):null]}),(0,J.jsx)(O.Z,{variant:"body2",color:"text.secondary",children:e.description})]})},e.name)})})})]}),(0,J.jsx)("li",{children:(0,J.jsx)(ea,{href:q.Z.pricing,as:G.default,noLinkStyle:!0,children:"Pricing"})}),(0,J.jsx)("li",{children:(0,J.jsx)(ea,{href:q.Z.about,as:G.default,noLinkStyle:!0,children:"About us"})}),(0,J.jsx)("li",{children:(0,J.jsx)(ea,{href:q.Z.blog,as:G.default,noLinkStyle:!0,children:"Blog"})})]})})})})]})}var ed=t(698147),ep=t(178198),eu=t(404515),eh=t.n(eu),ex=t(158157),ef=t.n(ex),em=t(200388),ey=t(340302);function eg(e){var r=_.useState(!1),t=(0,F.Z)(r,2),o=t[0],n=t[1],a=(0,ed.tv)(),i=a.mode,l=a.systemMode,s=a.setMode;_.useEffect(function(){n(!0)},[]);var c="system"===i?l:i;return(0,J.jsx)(M.Z,{title:"dark"===c?"Turn on the light":"Turn off the light",children:(0,J.jsx)(I.Z,{color:"primary",disableTouchRipple:!0,disabled:!c,onClick:function(){e.onChange("light"===c),s("dark"===c?"light":"dark")},children:c&&o?({light:p||(p=(0,J.jsx)(eh(),{fontSize:"small"})),dark:u||(u=(0,J.jsx)(ef(),{fontSize:"small"}))})[c]:null})})}function eZ(){var e=(0,ep.Z)(),r=(0,ey.useChangeTheme)(),t=_.useState(null),o=(0,F.Z)(t,2),n=o[0],a=o[1],i=(0,em.Z)("(prefers-color-scheme: dark)");_.useEffect(function(){var e="system";try{e=localStorage.getItem("mui-mode")||e}catch(e){}a(e)},[]);var l=function(e){var t=e?"dark":"light";a(t);try{localStorage.setItem("mui-mode",t)}catch(e){}r({paletteMode:t})};if(null===n)return h||(h=(0,J.jsx)(I.Z,{color:"primary",disableTouchRipple:!0}));if(e.vars)return(0,J.jsx)(eg,{onChange:l});var s="system"===n?i:"dark"===n;return(0,J.jsx)(M.Z,{title:s?"Turn on the light":"Turn off the light",children:(0,J.jsx)(I.Z,{color:"primary",disableTouchRipple:!0,onClick:function(){l(!s)},children:s?x||(x=(0,J.jsx)(ef(),{fontSize:"small"})):f||(f=(0,J.jsx)(eh(),{fontSize:"small"}))})})}var eb=t(948956),ej=t(692124),ev=(0,v.ZP)("header")(function(e){var r=e.theme;return[{position:"sticky",top:0,transition:r.transitions.create("top"),zIndex:r.zIndex.appBar,backdropFilter:"blur(8px)",boxShadow:"inset 0px -1px 1px ".concat((r.vars||r).palette.grey[100]),backgroundColor:"rgba(255,255,255,0.8)"},r.applyDarkStyles({boxShadow:"inset 0px -1px 1px ".concat((r.vars||r).palette.primaryDark[700]),backgroundColor:(0,k.Fq)(r.palette.primaryDark[900],.7)})]});function ek(e){var r=e.gitHubRepository,t=(0,ej.useTranslate)();return(0,J.jsxs)(ev,{children:[(0,J.jsx)(w.Z,{styles:{":root":{"--MuiDocs-header-height":"".concat(60,"px")}}}),(0,J.jsxs)(D.Z,{sx:{display:"flex",alignItems:"center",minHeight:60},children:[(0,J.jsx)(S.Z,{component:G.default,href:"/","aria-label":"Go to homepage",sx:{lineHeight:0,mr:2},children:m||(m=(0,J.jsx)(R.Z,{width:30}))}),(0,J.jsx)(S.Z,{sx:{display:{xs:"none",md:"initial"}},children:y||(y=(0,J.jsx)($,{}))}),(0,J.jsx)(S.Z,{sx:{ml:"auto"}}),(0,J.jsxs)(C.Z,{direction:"row",spacing:1,children:[g||(g=(0,J.jsx)(eb.ji,{})),(0,J.jsx)(M.Z,{title:t("appFrame.github"),enterDelay:300,children:(0,J.jsx)(I.Z,{component:"a",color:"primary",href:void 0===r?"https://github.com/mui":r,target:"_blank",rel:"noopener","data-ga-event-category":"header","data-ga-event-action":"github",children:Z||(Z=(0,J.jsx)(z(),{fontSize:"small"}))})}),b||(b=(0,J.jsx)(eZ,{}))]}),(0,J.jsx)(S.Z,{sx:{display:{md:"none"},ml:1},children:j||(j=(0,J.jsx)(ec,{}))})]})]})}},91269:function(e,r,t){var o=t(526771),n=t(564836);o(r,"__esModule",{value:!0}),r.default=void 0;var a=n(t(391641)),i=t(785893),l=(0,a.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"}),"CheckCircleRounded");r.default=l},210978:function(e,r,t){var o=t(526771),n=t(564836);o(r,"__esModule",{value:!0}),r.default=void 0;var a=n(t(391641)),i=t(785893),l=(0,a.default)((0,i.jsx)("path",{d:"M8.12 9.29 12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7a.9959.9959 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"}),"KeyboardArrowDownRounded");r.default=l},158157:function(e,r,t){var o=t(526771),n=t(564836);o(r,"__esModule",{value:!0}),r.default=void 0;var a=n(t(391641)),i=t(785893),l=(0,a.default)((0,i.jsx)("path",{d:"M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"}),"LightModeOutlined");r.default=l}}]);