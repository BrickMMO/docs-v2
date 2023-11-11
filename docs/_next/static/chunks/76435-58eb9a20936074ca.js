"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76435],{317796:function(a,t,e){e.d(t,{Z:function(){return x}});var r=e(80117),n=e(648611),o=e(163804),i=e(667294),s=e(490512),c=e(829624),l=e(602688),u=e(424633),d=e(941615),g=e(785893),p=(0,d.Z)((0,g.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),m=e(478787),h=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],v=function(a){var t=a.classes,e=a.variant,r=a.colorDefault;return(0,c.Z)({root:["root",e,r&&"colorDefault"],img:["img"],fallback:["fallback"]},m.$,t)},b=(0,l.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(a,t){var e=a.ownerState;return[t.root,t[e.variant],e.colorDefault&&t.colorDefault]}})(function(a){var t=a.theme,e=a.ownerState;return(0,o.Z)((0,o.Z)((0,o.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius}),"square"===e.variant&&{borderRadius:0}),e.colorDefault&&(0,o.Z)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]}))}),f=(0,l.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(a,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),y=(0,l.ZP)(p,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(a,t){return t.fallback}})({width:"75%",height:"75%"}),x=i.forwardRef(function(a,t){var e,c,l,d,p,m,x,k,Z,j=(0,u.Z)({props:a,name:"MuiAvatar"}),w=j.alt,D=j.children,S=j.className,F=j.component,R=void 0===F?"div":F,M=j.imgProps,P=j.sizes,z=j.src,A=j.srcSet,N=j.variant,T=(0,r.Z)(j,h),B=null,C=(c=(e=(0,o.Z)((0,o.Z)({},M),{},{src:z,srcSet:A})).crossOrigin,l=e.referrerPolicy,d=e.src,p=e.srcSet,m=i.useState(!1),k=(x=(0,n.Z)(m,2))[0],Z=x[1],i.useEffect(function(){if(d||p){Z(!1);var a=!0,t=new Image;return t.onload=function(){a&&Z("loaded")},t.onerror=function(){a&&Z("error")},t.crossOrigin=c,t.referrerPolicy=l,t.src=d,p&&(t.srcset=p),function(){a=!1}}},[c,l,d,p]),k),I=z||A,W=I&&"error"!==C,q=(0,o.Z)((0,o.Z)({},j),{},{colorDefault:!W,component:R,variant:void 0===N?"circular":N}),L=v(q);return B=W?(0,g.jsx)(f,(0,o.Z)({alt:w,srcSet:A,src:z,sizes:P,ownerState:q,className:L.img},M)):null!=D?D:I&&w?w[0]:(0,g.jsx)(y,{ownerState:q,className:L.fallback}),(0,g.jsx)(b,(0,o.Z)((0,o.Z)({as:R,ownerState:q,className:(0,s.default)(L.root,S),ref:t},T),{},{children:B}))})},478787:function(a,t,e){e.d(t,{$:function(){return o}});var r=e(173729),n=e(899933);function o(a){return(0,n.Z)("MuiAvatar",a)}var i=(0,r.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);t.Z=i},32915:function(a,t,e){e.d(t,{Z:function(){return h}});var r,n,o=e(163804),i=e(505152),s=e.n(i),c=e(442708),l=e(333346),u=e(992443),d=e(637074),g=e(785893);function p(){return(0,g.jsx)(l.Z,{sx:{height:{xs:587,sm:303,md:289}}})}var m=s()(function(){return Promise.all([e.e(58546),e.e(79533)]).then(e.bind(e,679533))},{loading:p,loadableGenerated:{webpack:function(){return[679533]}}});function h(){var a=(0,c.YD)({triggerOnce:!0,threshold:0,rootMargin:"500px"}),t=a.ref,e=a.inView;return(0,g.jsx)(l.Z,{ref:t,sx:function(a){return(0,o.Z)({background:"linear-gradient(180deg, #FFF 50%, \n          ".concat((a.vars||a).palette.primary[50]," 100%)\n        ")},a.applyDarkStyles({background:"linear-gradient(180deg, ".concat((a.vars||a).palette.primaryDark[800]," 50%,\n          ").concat((0,u.Fq)(a.palette.primary[900],.2)," 100%)\n          ")}))},children:(0,g.jsx)(d.Z,{bg:"transparent",cozy:!0,children:e?r||(r=(0,g.jsx)(m,{})):n||(n=(0,g.jsx)(p,{}))})})}},637074:function(a,t,e){var r=e(163804),n=e(849088),o=e(80117),i=e(378149),s=e.n(i),c=e(667294),l=e(858280),u=e(333346),d=e(992443),g=e(785893),p=["bg","children","sx","cozy"],m={white:{light:"common.white",dark:"primaryDark.800"},comfort:{light:"grey.50",dark:"primaryDark.900"},dim:{light:"primaryDark.700",dark:"primaryDark.700"},transparent:{light:"transparent",dark:"transparent"}},h=c.forwardRef(function(a,t){var e=a.bg,i=void 0===e?"white":e,c=a.children,h=a.sx,v=a.cozy,b=void 0!==v&&v,f=(0,o.Z)(a,p);return(0,g.jsx)(u.Z,(0,r.Z)((0,r.Z)({ref:t},f),{},{sx:[function(a){return(0,r.Z)((0,r.Z)({},"gradient"===i?(0,r.Z)({background:"linear-gradient(180deg, #FFF 0%, ".concat((a.vars||a).palette.primary[50]," 100%)")},a.applyDarkStyles({background:"linear-gradient(180deg, ".concat((a.vars||a).palette.primaryDark[800]," 0%, ").concat((0,d.Fq)(a.palette.primary[900],.2)," 100%)")})):(0,r.Z)({bgcolor:m[i].light},a.applyDarkStyles({bgcolor:m[i].dark}))),{},{py:b?{xs:6,sm:10,md:12}:{xs:4,sm:12,md:14},overflow:"hidden"})}].concat((0,n.Z)(s()(h)?h:[h])),children:(0,g.jsx)(l.Z,{children:c})}))});t.Z=h},276435:function(a,t,e){e.d(t,{Z:function(){return C},o:function(){return A}});var r,n,o,i,s,c=e(163804),l=e(777193),u=e(508450),d=e.n(u),g=e(667294),p=e(602688),m=e(992443),h=e(811163),v=e(327827),b=e.n(v),f=e(166701),y=e(179477),x=e(317796),k=e(894313),Z=e(972374),j=e(821111),w=e(502196),D=e(477991),S=e(32915),F=e(516577),R=e(772184),M=e(966992),P=e(245510),z=e(785893),A={oliviertassinari:{name:"Olivier Tassinari",avatar:"https://avatars.githubusercontent.com/u/3165635",github:"oliviertassinari"},mbrookes:{name:"Matt Brookes",avatar:"https://avatars.githubusercontent.com/u/357702",github:"mbrookes"},eps1lon:{name:"Sebastian Silbermann",avatar:"https://avatars.githubusercontent.com/u/12292047",github:"eps1lon"},mnajdova:{name:"Marija Najdova",avatar:"https://avatars.githubusercontent.com/u/4512430",github:"mnajdova"},michaldudak:{name:"Michał Dudak",avatar:"https://avatars.githubusercontent.com/u/4696105",github:"michaldudak"},siriwatknp:{name:"Siriwat Kunaporn",avatar:"https://avatars.githubusercontent.com/u/18292247",github:"siriwatknp"},"danilo-leal":{name:"Danilo Leal",avatar:"https://avatars.githubusercontent.com/u/67129314",github:"danilo-leal"},m4theushw:{name:"Matheus Wichman",avatar:"https://avatars.githubusercontent.com/u/42154031",github:"m4theushw"},flaviendelangle:{name:"Flavien Delangle",avatar:"https://avatars.githubusercontent.com/u/3309670",github:"flaviendelangle"},DanailH:{name:"Danail Hadjiatanasov",avatar:"https://avatars.githubusercontent.com/u/5858539",github:"DanailH"},alexfauquette:{name:"Alexandre Fauquette",avatar:"https://avatars.githubusercontent.com/u/45398769",github:"alexfauquette"},samuelsycamore:{name:"Sam Sycamore",avatar:"https://avatars.githubusercontent.com/u/71297412",github:"samuelsycamore"},josefreitas:{name:"Jos\xe9 Freitas",avatar:"https://avatars.githubusercontent.com/u/550141",github:"joserodolfofreitas"},cherniavskii:{name:"Andrew Cherniavskyi",avatar:"https://avatars.githubusercontent.com/u/13808724",github:"cherniavskii"},mikailaread:{name:"Mikaila Read",avatar:"https://avatars.githubusercontent.com/u/76401606",github:"mikailaread"},prakhargupta:{name:"Prakhar Gupta",avatar:"https://avatars.githubusercontent.com/u/92228082",github:"prakhargupta1"},richbustos:{name:"Rich Bustos",avatar:"https://avatars.githubusercontent.com/u/92274722",github:"richbustos"}},N={back:"TopLayoutBlog-back",time:"TopLayoutBlog-time",container:"TopLayoutBlog-container"},T=(0,p.ZP)("div")(function(a){var t=a.theme;return{display:"flex",flexWrap:"wrap",marginBottom:t.spacing(2),"& .author":{display:"flex",alignItems:"center",paddingBottom:t.spacing(2),paddingRight:t.spacing(3),"& .MuiAvatar-root":{marginRight:t.spacing(1)}}}}),B=(0,p.ZP)("div")(function(a){var t,e,r=a.theme;return e={flexGrow:1,background:"linear-gradient(180deg, ".concat((r.vars||r).palette.grey[50]," 0%, #FFFFFF 100%)"),backgroundSize:"100% 500px",backgroundRepeat:"no-repeat"},(0,l.Z)(e,"& .".concat(N.back),{display:"flex",alignItems:"center",marginBottom:r.spacing(2),marginLeft:r.spacing(-1)}),(0,l.Z)(e,"& .".concat(N.container),(t={paddingTop:80,marginBottom:r.spacing(12),maxWidth:"calc(".concat(692,"px + ").concat(r.spacing(4),")")},(0,l.Z)(t,r.breakpoints.up("md"),{maxWidth:"calc(".concat(692,"px + ").concat(r.spacing(6),")")}),(0,l.Z)(t,r.breakpoints.up("lg"),{maxWidth:"calc(".concat(692,"px + ").concat(r.spacing(16),")")}),(0,l.Z)(t,"& h1",{marginBottom:r.spacing(3)}),(0,l.Z)(t,"& .markdown-body",{lineHeight:1.7}),(0,l.Z)(t,"& img, & video",{borderRadius:4,display:"block",margin:"auto"}),(0,l.Z)(t,"& strong",{color:(r.vars||r).palette.grey[900]}),(0,l.Z)(t,"& summary",{padding:8,fontSize:r.typography.pxToRem(14),fontWeight:r.typography.fontWeightMedium,color:(r.vars||r).palette.grey[900]}),(0,l.Z)(t,"& details",{paddingLeft:16,paddingRight:16,background:(0,m.Fq)(r.palette.grey[50],.5),border:"1px solid",borderRadius:10,borderColor:(r.vars||r).palette.grey[200],transitionProperty:"all",transitionTiming:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"200ms","&:hover, &:focus-visible":{background:(r.vars||r).palette.grey[50],borderColor:(r.vars||r).palette.grey[300]}}),(0,l.Z)(t,"& th",{textAlign:"left",borderBottom:"3px solid rgba(62, 80, 96, 0.2) !important"}),(0,l.Z)(t,"& .blog-description",{fontSize:r.typography.pxToRem(13),marginTop:8,textAlign:"center",color:(r.vars||r).palette.grey[700],"& a":{color:"inherit",textDecoration:"underline"}}),(0,l.Z)(t,"& .MuiCode-root + .blog-description",{marginTop:-12}),t)),(0,l.Z)(e,"& .".concat(N.time),(0,c.Z)((0,c.Z)({color:(r.vars||r).palette.text.secondary},r.typography.caption),{},{fontWeight:500})),e},function(a){var t=a.theme;return t.applyDarkStyles((0,l.Z)({background:"linear-gradient(180deg, ".concat((0,m.Fq)(t.palette.primary[900],.2)," 0%, ").concat((t.vars||t).palette.primaryDark[800]," 100%)"),backgroundSize:"100% 500px",backgroundRepeat:"no-repeat"},"& .".concat(N.container),{"& strong":{color:(t.vars||t).palette.grey[100]},"& summary":{color:(t.vars||t).palette.grey[300]},"& details":{background:(0,m.Fq)(t.palette.primary[900],.3),borderColor:(t.vars||t).palette.primaryDark[700],"&:hover, &:focus-visible":{background:(0,m.Fq)(t.palette.primary[900],.4),borderColor:(t.vars||t).palette.primaryDark[500]}},"& .blog-description":{color:(t.vars||t).palette.grey[500]}}))});function C(a){var t=a.className,e=a.docs.en,l=e.description,u=e.rendered,p=e.title,m=e.headers,v=p||m.title,C=(0,h.useRouter)(),I=C.pathname.replace(/(.*)\/(.*)/,"$2"),W=(0,R.ln)(C.asPath).canonicalAsServer,q="true"===m.card?"https://mui.com/static/blog/".concat(I,"/card.png"):"https://mui.com/static/logo.png";return(0,z.jsxs)(Z.Z,{children:[r||(r=(0,z.jsx)(j.Z,{})),(0,z.jsxs)(k.Z,{title:"".concat(v," - MUI"),description:l,largeCard:"true"===m.card,disableAlternateLocale:!0,card:q,type:"article",children:[(0,z.jsx)("meta",{name:"author",content:m.authors.map(function(a){return A[a].name}).join(", ")}),(0,z.jsx)("meta",{property:"article:published_time",content:m.date}),(0,z.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:d()({"@context":"https://schema.org","@type":"Article",publisher:{"@type":"Organization",name:"MUI blog",url:"https://mui.com/blog/",logo:{"@type":"ImageObject",url:"https://mui.com/static/icons/512x512.png"}},author:{"@type":"Person",name:A[m.authors[0]].name,image:{"@type":"ImageObject",url:"".concat(A[m.authors[0]].avatar,"?s=",250),width:250,height:250},sameAs:["https://github.com/".concat(A[m.authors[0]].github)]},headline:v,url:"https://mui.com".concat(W),datePublished:m.date,dateModified:m.date,image:{"@type":"ImageObject",url:q,width:1280,height:640},keywords:m.tags.join(", "),description:l,mainEntityOfPage:{"@type":"WebPage","@id":"https://mui.com/blog/"}})}})]}),(0,z.jsxs)(B,{className:t,children:[(0,z.jsxs)(w.Z,{component:"main",className:N.container,children:[(0,z.jsxs)(P.default,(0,c.Z)((0,c.Z)({href:M.Z.blog},M.Z.blog.startsWith("http")&&{rel:"nofollow"}),{},{color:"primary",variant:"body2",className:N.back,children:[(0,z.jsx)(b(),{fontSize:"small",sx:{mr:.5}}),"Back to blog"]})),m.title?(0,z.jsxs)(g.Fragment,{children:[(0,z.jsx)("time",{dateTime:m.date,className:N.time,children:new Intl.DateTimeFormat("en",{weekday:"long",year:"numeric",month:"short",day:"numeric"}).format(new Date(m.date))}),(0,z.jsx)(F.default,{children:(0,z.jsx)("h1",{children:m.title})}),(0,z.jsx)(T,{children:m.authors.map(function(a){return(0,z.jsxs)("div",{className:"author",children:[(0,z.jsx)(x.Z,{sx:{width:36,height:36},alt:"",src:"".concat(A[a].avatar,"?s=",36),srcSet:"".concat(A[a].avatar,"?s=").concat(72," 2x")}),(0,z.jsxs)("div",{children:[(0,z.jsx)(y.Z,{variant:"body2",fontWeight:"500",children:A[a].name}),(0,z.jsxs)(P.default,{href:"https://github.com/".concat(A[a].github),target:"_blank",rel:"noreferrer noopener",color:"primary",variant:"body2",sx:{fontWeight:500},children:["@",A[a].github]})]})]},a)})})]}):null,u.map(function(a,t){return(0,z.jsx)(F.default,{renderedMarkdown:a},t)})]}),n||(n=(0,z.jsx)(f.Z,{})),o||(o=(0,z.jsx)(S.Z,{})),i||(i=(0,z.jsx)(f.Z,{})),s||(s=(0,z.jsx)(D.Z,{}))]})]})}},327827:function(a,t,e){var r=e(526771),n=e(564836);r(t,"__esModule",{value:!0}),t.default=void 0;var o=n(e(391641)),i=e(785893),s=(0,o.default)((0,i.jsx)("path",{d:"M14.71 6.71a.9959.9959 0 0 0-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z"}),"ChevronLeftRounded");t.default=s}}]);