(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97540],{458190:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a.Z}});var a=t(333346)},751353:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a.Z},getPaperUtilityClass:function(){return o.J},paperClasses:function(){return o.Z}});var a=t(870500),o=t(976851)},592622:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a.Z},stackClasses:function(){return o}});var a=t(966366),o=(0,t(173729).Z)("MuiStack",["root"])},245406:function(e,n,t){"use strict";t.r(n),t.d(n,{alignProperty:function(){return d},convertLength:function(){return c},fontGrid:function(){return u},getUnit:function(){return l},isUnitless:function(){return i},responsiveProperty:function(){return p},toUnitless:function(){return s}});var a=t(777193),o=t(262207),r=t.n(o);function i(e){return String(r()(e)).length===String(e).length}function l(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function s(e){return r()(e)}function c(e){return function(n,t){var a=l(n);if(a===t)return n;var o=s(n);"px"!==a&&("em"===a?o=s(n)*s(e):"rem"===a&&(o=s(n)*s(e)));var i=o;if("px"!==t){if("em"===t)i=o/s(e);else{if("rem"!==t)return n;i=o/s(e)}}return r()(i.toFixed(5))+t}}function d(e){var n=e.size,t=e.grid,a=n-n%t,o=a+t;return n-a<o-n?a:o}function u(e){var n=e.lineHeight;return e.pixels/(n*e.htmlFontSize)}function p(e){var n=e.cssProperty,t=e.min,o=e.max,r=e.unit,i=void 0===r?"rem":r,l=e.breakpoints,s=void 0===l?[600,900,1200]:l,c=e.transform,d=void 0===c?null:c,u=(0,a.Z)({},n,"".concat(t).concat(i)),p=(o-t)/s[s.length-1];return s.forEach(function(e){var o=t+p*e;null!==d&&(o=d(o)),u["@media (min-width:".concat(e,"px)")]=(0,a.Z)({},n,"".concat(Math.round(1e4*o)/1e4).concat(i))}),u}},415142:function(e,n,t){"use strict";t.r(n),t.d(n,{Experimental_CssVarsProvider:function(){return D.CM},StyledEngineProvider:function(){return z.Z},THEME_ID:function(){return o.Z},ThemeProvider:function(){return S.Z},adaptV4Theme:function(){return h},alpha:function(){return f.Fq},createMuiTheme:function(){return g.A},createStyles:function(){return k},createTheme:function(){return g.Z},css:function(){return v.css},darken:function(){return f._j},decomposeColor:function(){return f.tB},duration:function(){return C.x9},easing:function(){return C.Ui},emphasize:function(){return f._4},experimentalStyled:function(){return M.ZP},experimental_extendTheme:function(){return L.Z},experimental_sx:function(){return F},getContrastRatio:function(){return f.mi},getInitColorSchemeScript:function(){return D.JO},getLuminance:function(){return f.H3},getOverlayAlpha:function(){return B.Z},hexToRgb:function(){return f.oo},hslToRgb:function(){return f.ve},keyframes:function(){return v.keyframes},lighten:function(){return f.$n},makeStyles:function(){return T},private_createTypography:function(){return _.Z},private_excludeVariablesFromRoot:function(){return R.Z},recomposeColor:function(){return f.wy},responsiveFontSizes:function(){return w.Z},rgbToHex:function(){return f.vq},shouldSkipGeneratingVar:function(){return E.Z},styled:function(){return M.ZP},unstable_createMuiStrictModeTheme:function(){return y},unstable_getUnit:function(){return P.getUnit},unstable_toUnitless:function(){return P.toUnitless},useColorScheme:function(){return D.tv},useTheme:function(){return Z.Z},useThemeProps:function(){return j.Z},withStyles:function(){return H},withTheme:function(){return A}});var a=t(242268),o=t(543690),r=t(777193),i=t(163804),l=t(80117),s=t(726243),c=t.n(s),d=t(366537),u=t(820928),p=["defaultProps","mixins","overrides","palette","props","styleOverrides"],m=["type","mode"];function h(e){var n=e.defaultProps,t=void 0===n?{}:n,a=e.mixins,o=void 0===a?{}:a,s=e.overrides,h=void 0===s?{}:s,f=e.palette,v=void 0===f?{}:f,g=e.props,x=void 0===g?{}:g,y=e.styleOverrides,b=void 0===y?{}:y,k=(0,l.Z)(e,p),P=(0,i.Z)((0,i.Z)({},k),{},{components:{}});c()(t).forEach(function(e){var n=P.components[e]||{};n.defaultProps=t[e],P.components[e]=n}),c()(x).forEach(function(e){var n=P.components[e]||{};n.defaultProps=x[e],P.components[e]=n}),c()(b).forEach(function(e){var n=P.components[e]||{};n.styleOverrides=b[e],P.components[e]=n}),c()(h).forEach(function(e){var n=P.components[e]||{};n.styleOverrides=h[e],P.components[e]=n}),P.spacing=(0,d.Z)(e.spacing);var w=(0,u.Z)(e.breakpoints||{}),C=P.spacing;P.mixins=(0,i.Z)({gutters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.Z)((0,i.Z)({paddingLeft:C(2),paddingRight:C(2)},e),{},(0,r.Z)({},w.up("sm"),(0,i.Z)({paddingLeft:C(3),paddingRight:C(3)},e[w.up("sm")])))}},o);var Z=v.type,j=v.mode,M=(0,l.Z)(v,m),S=j||Z||"light";return P.palette=(0,i.Z)({text:{hint:"dark"===S?"rgba(255, 255, 255, 0.5)":"rgba(0, 0, 0, 0.38)"},mode:S,type:S},M),P}var f=t(992443),v=t(370917),g=t(867851),x=t(208882);function y(e){for(var n=arguments.length,t=Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];return g.Z.apply(void 0,[(0,x.Z)({unstable_strictMode:!0},e)].concat(t))}var b=!1;function k(e){return b||(console.warn("MUI: createStyles from @mui/material/styles is deprecated.\nPlease use @mui/styles/createStyles"),b=!0),e}var P=t(245406),w=t(997640),C=t(904159),Z=t(178198),j=t(424633),M=t(602688),S=t(675812),z=t(980615);function T(){throw Error((0,a.Z)(14))}function H(){throw Error((0,a.Z)(15))}function A(){throw Error((0,a.Z)(16))}var D=t(698147),L=t(382388),B=t(335197),E=t(990687),_=t(10110),R=t(674199);function F(){throw Error((0,a.Z)(20))}},997640:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var a=t(163804),o=t(242268),r=t(262207),i=t.n(r),l=t(245406);function s(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.breakpoints,r=n.disableAlign,s=void 0!==r&&r,c=n.factor,d=void 0===c?2:c,u=n.variants,p=(0,a.Z)({},e);p.typography=(0,a.Z)({},p.typography);var m=p.typography,h=(0,l.convertLength)(m.htmlFontSize),f=(void 0===t?["sm","md","lg"]:t).map(function(e){return p.breakpoints.values[e]});return(void 0===u?["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]:u).forEach(function(e){var n=m[e],t=i()(h(n.fontSize,"rem"));if(!(t<=1)){var r=1+(t-1)/d,c=n.lineHeight;if(!(0,l.isUnitless)(c)&&!s)throw Error((0,o.Z)(6));(0,l.isUnitless)(c)||(c=i()(h(c,"rem"))/i()(t));var u=null;s||(u=function(e){return(0,l.alignProperty)({size:e,grid:(0,l.fontGrid)({pixels:4,lineHeight:c,htmlFontSize:m.htmlFontSize})})}),m[e]=(0,a.Z)((0,a.Z)({},n),(0,l.responsiveProperty)({cssProperty:"fontSize",min:r,max:t,unit:"rem",breakpoints:f,transform:u}))}}),p}},980615:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}}),t(667294);var a,o=t(679626),r=t(826077),i=t(785893);function l(e){var n=e.injectFirst,t=e.children;return n&&a?(0,i.jsx)(o.C,{value:a,children:t}):t}"object"==typeof document&&(a=(0,r.default)({key:"css",prepend:!0}))},964600:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return E}});var a,o,r,i,l,s={};t.r(s),t.d(s,{demoComponents:function(){return L},demos:function(){return D},docs:function(){return A},srcComponents:function(){return B}});var c=t(163804),d=t(667294),u=t.t(d,2),p=t(165492),m=t(346169),h=t(751353),f=t(458190),v=t(415142),g=t(592622),x=t(789251),y=t(870500),b=t(333346),k=t(602688),P=t(867851),w=t(675812),C=t(785893),Z=(0,k.ZP)(y.Z)(function(e){var n=e.theme;return(0,c.Z)((0,c.Z)({},n.typography.body2),{},{textAlign:"center",color:n.palette.text.secondary,height:60,lineHeight:"60px"})}),j=(0,P.Z)({palette:{mode:"dark"}}),M=(0,P.Z)({palette:{mode:"light"}}),S=t(966366),z=(0,k.ZP)(y.Z)(function(e){var n=e.theme;return(0,c.Z)((0,c.Z)({width:120,height:120,padding:n.spacing(2)},n.typography.body2),{},{textAlign:"center"})}),T=(0,k.ZP)(y.Z)(function(e){var n=e.theme;return(0,c.Z)((0,c.Z)({width:120,height:120,padding:n.spacing(2)},n.typography.body2),{},{textAlign:"center"})}),H=t(747892),A={en:{description:"The Paper component is a container for displaying content on an elevated surface.",location:"/brickmmo-docs-v2/data/material/components/paper/paper.md",rendered:['<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="error-icon" viewBox="0 0 20 20">\n      <path fill-rule="evenodd" d="M2 7.4v5.2a2 2 0 0 0 .586 1.414l3.4 3.4A2 2 0 0 0 7.4 18h5.2a2 2 0 0 0 1.414-.586l3.4-3.4A2 2 0 0 0 18 12.6V7.4a2 2 0 0 0-.586-1.414l-3.4-3.4A2 2 0 0 0 12.6 2H7.4a2 2 0 0 0-1.414.586l-3.4 3.4A2 2 0 0 0 2 7.4Zm11.03-.43a.75.75 0 0 1 0 1.06L11.06 10l1.97 1.97a.75.75 0 1 1-1.06 1.06L10 11.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L8.94 10 6.97 8.03a.75.75 0 0 1 1.06-1.06L10 8.94l1.97-1.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="warning-icon" viewBox="0 0 20 20">\n      <path d="M2.33 17a.735.735 0 0 1-.665-.375.631.631 0 0 1-.094-.375.898.898 0 0 1 .115-.396L9.353 3.062a.621.621 0 0 1 .281-.27.85.85 0 0 1 .729 0 .622.622 0 0 1 .281.27l7.667 12.792c.07.125.108.257.114.396a.63.63 0 0 1-.093.375.842.842 0 0 1-.271.27.728.728 0 0 1-.394.105H2.33Zm7.664-2.5c.211 0 .39-.072.536-.214a.714.714 0 0 0 .218-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.531-.22.736.736 0 0 0-.536.215.714.714 0 0 0-.219.531c0 .212.072.39.215.536.143.146.32.219.531.219Zm0-2.5c.211 0 .39-.072.536-.216a.72.72 0 0 0 .218-.534v-2.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.531-.216.734.734 0 0 0-.536.216.72.72 0 0 0-.219.534v2.5c0 .212.072.39.215.534a.72.72 0 0 0 .531.216Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="success-icon" viewBox="0 0 20 20">\n      <path d="m8.938 10.875-1.25-1.23a.718.718 0 0 0-.521-.228.718.718 0 0 0-.521.229.73.73 0 0 0 0 1.062l1.77 1.771c.153.153.327.23.521.23a.718.718 0 0 0 .521-.23l3.896-3.896a.73.73 0 0 0 0-1.062.718.718 0 0 0-.52-.23.718.718 0 0 0-.521.23l-3.376 3.354ZM10 18a7.796 7.796 0 0 1-3.104-.625 8.065 8.065 0 0 1-2.552-1.719 8.064 8.064 0 0 1-1.719-2.552A7.797 7.797 0 0 1 2 10c0-1.111.208-2.15.625-3.115a8.064 8.064 0 0 1 4.27-4.26A7.797 7.797 0 0 1 10 2c1.111 0 2.15.208 3.115.625a8.096 8.096 0 0 1 4.26 4.26C17.792 7.851 18 8.89 18 10a7.797 7.797 0 0 1-.625 3.104 8.066 8.066 0 0 1-4.26 4.271A7.774 7.774 0 0 1 10 18Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="info-icon" viewBox="0 0 20 20">\n      <path d="M9.996 14c.21 0 .39-.072.535-.216a.72.72 0 0 0 .219-.534v-3.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.532-.216.734.734 0 0 0-.535.216.72.72 0 0 0-.219.534v3.5c0 .213.071.39.214.534a.72.72 0 0 0 .532.216Zm0-6.5c.21 0 .39-.071.535-.214a.714.714 0 0 0 .219-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.532-.219.736.736 0 0 0-.535.214.714.714 0 0 0-.219.532c0 .21.071.39.214.535.143.146.32.219.532.219Zm.01 10.5a7.81 7.81 0 0 1-3.11-.625 8.065 8.065 0 0 1-2.552-1.719 8.066 8.066 0 0 1-1.719-2.551A7.818 7.818 0 0 1 2 9.99c0-1.104.208-2.14.625-3.105a8.066 8.066 0 0 1 4.27-4.26A7.818 7.818 0 0 1 10.009 2a7.75 7.75 0 0 1 3.106.625 8.083 8.083 0 0 1 4.26 4.265A7.77 7.77 0 0 1 18 9.994a7.81 7.81 0 0 1-.625 3.11 8.066 8.066 0 0 1-1.719 2.552 8.083 8.083 0 0 1-2.546 1.719 7.77 7.77 0 0 1-3.104.625Z"/>\n      </symbol>\n      </svg>','\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n        <symbol id="anchor-link-icon" viewBox="0 0 12 6">\n          <path d="M8.9176 0.083252H7.1676C6.84677 0.083252 6.58427 0.345752 6.58427 0.666585C6.58427 0.987419 6.84677 1.24992 7.1676 1.24992H8.9176C9.8801 1.24992 10.6676 2.03742 10.6676 2.99992C10.6676 3.96242 9.8801 4.74992 8.9176 4.74992H7.1676C6.84677 4.74992 6.58427 5.01242 6.58427 5.33325C6.58427 5.65409 6.84677 5.91659 7.1676 5.91659H8.9176C10.5276 5.91659 11.8343 4.60992 11.8343 2.99992C11.8343 1.38992 10.5276 0.083252 8.9176 0.083252ZM3.6676 2.99992C3.6676 3.32075 3.9301 3.58325 4.25094 3.58325H7.75094C8.07177 3.58325 8.33427 3.32075 8.33427 2.99992C8.33427 2.67909 8.07177 2.41659 7.75094 2.41659H4.25094C3.9301 2.41659 3.6676 2.67909 3.6676 2.99992ZM4.83427 4.74992H3.08427C2.12177 4.74992 1.33427 3.96242 1.33427 2.99992C1.33427 2.03742 2.12177 1.24992 3.08427 1.24992H4.83427C5.1551 1.24992 5.4176 0.987419 5.4176 0.666585C5.4176 0.345752 5.1551 0.083252 4.83427 0.083252H3.08427C1.47427 0.083252 0.167603 1.38992 0.167603 2.99992C0.167603 4.60992 1.47427 5.91659 3.08427 5.91659H4.83427C5.1551 5.91659 5.4176 5.65409 5.4176 5.33325C5.4176 5.01242 5.1551 4.74992 4.83427 4.74992Z" />\n        </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n      <path d="M5.025 14H6.95c.183 0 .35-.029.5-.087a1.24 1.24 0 0 0 .425-.288L13.65 7.9a.622.622 0 0 0 .2-.45.622.622 0 0 0-.2-.45l-2.3-2.3a.622.622 0 0 0-.45-.2.622.622 0 0 0-.45.2l-5.725 5.775a1.24 1.24 0 0 0-.287.425 1.37 1.37 0 0 0-.088.5v1.925c0 .184.067.342.2.475a.65.65 0 0 0 .475.2Zm5.325 0h5.725c.367 0 .68-.129.938-.387.258-.258.387-.57.387-.938 0-.366-.13-.679-.387-.937a1.277 1.277 0 0 0-.938-.388H13L10.35 14Zm-5.5 4.4-2.4 2.4c-.417.417-.896.509-1.437.275C.47 20.842.2 20.434.2 19.85V3.55c0-.733.258-1.358.775-1.875A2.554 2.554 0 0 1 2.85.9h16.3c.733 0 1.358.259 1.875.775.517.517.775 1.142.775 1.875v12.2c0 .734-.258 1.359-.775 1.875a2.554 2.554 0 0 1-1.875.775H4.85Z"/>\n      </symbol>\n      </svg>','<h1>Paper</h1><p class="description">The Paper component is a container for displaying content on an elevated surface.</p>\n\n',{component:"modules/components/ComponentLinkHeader.js"},'<h2 id="introduction">Introduction<a aria-labelledby="introduction" class="anchor-link" href="#introduction" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="introduction"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>In Material Design, surface components and shadow styles are heavily influenced by their real-world physical counterparts.</p>\n<p>Material UI implements this concept with the Paper component, a container-like surface that features the <a href="#elevation"><code>elevation</code></a> prop for pulling box-shadow values from the theme.</p>\n<aside class="MuiCallout-root MuiCallout-success">\n            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">\n<use class="MuiCode-copied-icon" xlink:href="#success-icon" />\n</svg>\n            <div class="MuiCallout-content">\n            <p>The Paper component is ideally suited for designs that follow <a href="https://m2.material.io/design/environment/elevation.html#elevation-in-material-design" target="_blank" rel="noopener nofollow">Material Design&#39;s elevation system</a>, which is meant to replicate how light casts shadows in the physical world.</p>\n<p>If you just need a generic container, you may prefer to use the <a href="/material-ui/react-box/">Box</a> or <a href="/material-ui/react-container/">Container</a> components.</p>\n\n</div></aside>',{demo:"SimplePaper.js",bg:!0},'<h2 id="component">Component<a aria-labelledby="component" class="anchor-link" href="#component" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="component"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><div class="MuiCode-root"><pre><code class="language-jsx"><span class="token keyword">import</span> Paper <span class="token keyword">from</span> <span class="token string">\'@mui/material/Paper\'</span><span class="token punctuation">;</span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><use class="MuiCode-copy-icon" xlink:href="#copy-icon" /><use class="MuiCode-copied-icon" xlink:href="#copied-icon" /></svg><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="customization">Customization<a aria-labelledby="customization" class="anchor-link" href="#customization" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="customization"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><h3 id="elevation">Elevation<a aria-labelledby="elevation" class="anchor-link" href="#elevation" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="elevation"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>Use the <code>elevation</code> prop to establish hierarchy through the use of shadows.\nThe Paper component&#39;s default elevation level is <code>1</code>.\nThe prop accepts values from <code>0</code> to <code>24</code>.\nThe higher the number, the further away the Paper appears to be from its background.</p>\n<p>In dark mode, increasing the elevation also makes the background color lighter.\nThis is done by applying a semi-transparent gradient with the <code>background-image</code> CSS property.</p>\n<aside class="MuiCallout-root MuiCallout-warning">\n            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">\n<use class="MuiCode-copied-icon" xlink:href="#warning-icon" />\n</svg>\n            <div class="MuiCallout-content">\n            <p>The aforementioned dark mode behavior can lead to confusion when overriding the Paper component, because changing the <code>background-color</code> property won&#39;t affect the lighter shading.\nTo override it, you must either use a new background value, or customize the values for both <code>background-color</code> and <code>background-image</code>.</p>\n\n</div></aside>',{demo:"Elevation.js",bg:"outlined"},'<h3 id="variants">Variants<a aria-labelledby="variants" class="anchor-link" href="#variants" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="variants"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>Set the <code>variant</code> prop to <code>&quot;outlined&quot;</code> for a flat, outlined Paper with no shadows:</p>\n',{demo:"Variants.js",bg:!0},'<h3 id="corners">Corners<a aria-labelledby="corners" class="anchor-link" href="#corners" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="corners"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>The Paper component features rounded corners by default.\nAdd the <code>square</code> prop for square corners:</p>\n',{demo:"SquareCorners.js",bg:!0},'<h2 id="anatomy">Anatomy<a aria-labelledby="anatomy" class="anchor-link" href="#anatomy" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="anatomy"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>The Paper component is composed of a single root <code>&lt;div&gt;</code> that wraps around its contents:</p>\n<div class="MuiCode-root"><pre><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>MuiPaper-root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- Paper contents --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><use class="MuiCode-copy-icon" xlink:href="#copy-icon" /><use class="MuiCode-copied-icon" xlink:href="#copied-icon" /></svg><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n','<h2 id="api">API<a aria-labelledby="api" class="anchor-link" href="#api" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="api"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.</p>\n<ul>\n<li><a href="/material-ui/api/paper/"><code>&lt;Paper /&gt;</code></a></li>\n</ul>\n'],toc:[{text:"Introduction",level:2,hash:"introduction",children:[]},{text:"Component",level:2,hash:"component",children:[]},{text:"Customization",level:2,hash:"customization",children:[{text:"Elevation",level:3,hash:"elevation"},{text:"Variants",level:3,hash:"variants"},{text:"Corners",level:3,hash:"corners"}]},{text:"Anatomy",level:2,hash:"anatomy",children:[]},{text:"API",level:2,hash:"api",children:[]}],title:"React Paper component",headers:{productId:"material-ui",title:"React Paper component",components:["Paper"],githubLabel:"component: Paper",materialDesign:"https://m2.material.io/design/environment/elevation.html",hooks:[]}}},D={"Elevation.js":{module:"./Elevation.js",raw:"import * as React from 'react';\nimport Grid from '@mui/material/Grid';\nimport Paper from '@mui/material/Paper';\nimport Box from '@mui/material/Box';\nimport { createTheme, ThemeProvider, styled } from '@mui/material/styles';\n\nconst Item = styled(Paper)(({ theme }) => ({\n  ...theme.typography.body2,\n  textAlign: 'center',\n  color: theme.palette.text.secondary,\n  height: 60,\n  lineHeight: '60px',\n}));\n\nconst darkTheme = createTheme({ palette: { mode: 'dark' } });\nconst lightTheme = createTheme({ palette: { mode: 'light' } });\n\nexport default function Elevation() {\n  return (\n    <Grid container spacing={2}>\n      {[lightTheme, darkTheme].map((theme, index) => (\n        <Grid item xs={6} key={index}>\n          <ThemeProvider theme={theme}>\n            <Box\n              sx={{\n                p: 2,\n                borderRadius: 2,\n                bgcolor: 'background.default',\n                display: 'grid',\n                gridTemplateColumns: { md: '1fr 1fr' },\n                gap: 2,\n              }}\n            >\n              {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (\n                <Item key={elevation} elevation={elevation}>\n                  {`elevation=${elevation}`}\n                </Item>\n              ))}\n            </Box>\n          </ThemeProvider>\n        </Grid>\n      ))}\n    </Grid>\n  );\n}\n",moduleTS:"./Elevation.js",rawTS:"import * as React from 'react';\nimport Grid from '@mui/material/Grid';\nimport Paper from '@mui/material/Paper';\nimport Box from '@mui/material/Box';\nimport { createTheme, ThemeProvider, styled } from '@mui/material/styles';\n\nconst Item = styled(Paper)(({ theme }) => ({\n  ...theme.typography.body2,\n  textAlign: 'center',\n  color: theme.palette.text.secondary,\n  height: 60,\n  lineHeight: '60px',\n}));\n\nconst darkTheme = createTheme({ palette: { mode: 'dark' } });\nconst lightTheme = createTheme({ palette: { mode: 'light' } });\n\nexport default function Elevation() {\n  return (\n    <Grid container spacing={2}>\n      {[lightTheme, darkTheme].map((theme, index) => (\n        <Grid item xs={6} key={index}>\n          <ThemeProvider theme={theme}>\n            <Box\n              sx={{\n                p: 2,\n                borderRadius: 2,\n                bgcolor: 'background.default',\n                display: 'grid',\n                gridTemplateColumns: { md: '1fr 1fr' },\n                gap: 2,\n              }}\n            >\n              {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (\n                <Item key={elevation} elevation={elevation}>\n                  {`elevation=${elevation}`}\n                </Item>\n              ))}\n            </Box>\n          </ThemeProvider>\n        </Grid>\n      ))}\n    </Grid>\n  );\n}\n"},"SimplePaper.js":{module:"./SimplePaper.js",raw:"import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Paper from '@mui/material/Paper';\n\nexport default function SimplePaper() {\n  return (\n    <Box\n      sx={{\n        display: 'flex',\n        flexWrap: 'wrap',\n        '& > :not(style)': {\n          m: 1,\n          width: 128,\n          height: 128,\n        },\n      }}\n    >\n      <Paper elevation={0} />\n      <Paper />\n      <Paper elevation={3} />\n    </Box>\n  );\n}\n",jsxPreview:"<Paper elevation={0} />\n<Paper />\n<Paper elevation={3} />",moduleTS:"./SimplePaper.js",rawTS:"import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Paper from '@mui/material/Paper';\n\nexport default function SimplePaper() {\n  return (\n    <Box\n      sx={{\n        display: 'flex',\n        flexWrap: 'wrap',\n        '& > :not(style)': {\n          m: 1,\n          width: 128,\n          height: 128,\n        },\n      }}\n    >\n      <Paper elevation={0} />\n      <Paper />\n      <Paper elevation={3} />\n    </Box>\n  );\n}\n"},"Variants.js":{module:"./Variants.js",raw:"import * as React from 'react';\nimport Stack from '@mui/material/Stack';\nimport Paper from '@mui/material/Paper';\nimport { styled } from '@mui/material/styles';\n\nconst DemoPaper = styled(Paper)(({ theme }) => ({\n  width: 120,\n  height: 120,\n  padding: theme.spacing(2),\n  ...theme.typography.body2,\n  textAlign: 'center',\n}));\n\nexport default function Variants() {\n  return (\n    <Stack direction=\"row\" spacing={2}>\n      <DemoPaper variant=\"elevation\">default variant</DemoPaper>\n      <DemoPaper variant=\"outlined\">outlined variant</DemoPaper>\n    </Stack>\n  );\n}\n",jsxPreview:'<DemoPaper variant="elevation">default variant</DemoPaper>\n<DemoPaper variant="outlined">outlined variant</DemoPaper>',moduleTS:"./Variants.js",rawTS:"import * as React from 'react';\nimport Stack from '@mui/material/Stack';\nimport Paper from '@mui/material/Paper';\nimport { styled } from '@mui/material/styles';\n\nconst DemoPaper = styled(Paper)(({ theme }) => ({\n  width: 120,\n  height: 120,\n  padding: theme.spacing(2),\n  ...theme.typography.body2,\n  textAlign: 'center',\n}));\n\nexport default function Variants() {\n  return (\n    <Stack direction=\"row\" spacing={2}>\n      <DemoPaper variant=\"elevation\">default variant</DemoPaper>\n      <DemoPaper variant=\"outlined\">outlined variant</DemoPaper>\n    </Stack>\n  );\n}\n"},"SquareCorners.js":{module:"./SquareCorners.js",raw:"import * as React from 'react';\nimport Stack from '@mui/material/Stack';\nimport Paper from '@mui/material/Paper';\nimport { styled } from '@mui/material/styles';\n\nconst DemoPaper = styled(Paper)(({ theme }) => ({\n  width: 120,\n  height: 120,\n  padding: theme.spacing(2),\n  ...theme.typography.body2,\n  textAlign: 'center',\n}));\n\nexport default function SquareCorners() {\n  return (\n    <Stack direction=\"row\" spacing={2}>\n      <DemoPaper square={false}>rounded corners</DemoPaper>\n      <DemoPaper square>square corners</DemoPaper>\n    </Stack>\n  );\n}\n",jsxPreview:"<DemoPaper square={false}>rounded corners</DemoPaper>\n<DemoPaper square>square corners</DemoPaper>",moduleTS:"./SquareCorners.js",rawTS:"import * as React from 'react';\nimport Stack from '@mui/material/Stack';\nimport Paper from '@mui/material/Paper';\nimport { styled } from '@mui/material/styles';\n\nconst DemoPaper = styled(Paper)(({ theme }) => ({\n  width: 120,\n  height: 120,\n  padding: theme.spacing(2),\n  ...theme.typography.body2,\n  textAlign: 'center',\n}));\n\nexport default function SquareCorners() {\n  return (\n    <Stack direction=\"row\" spacing={2}>\n      <DemoPaper square={false}>rounded corners</DemoPaper>\n      <DemoPaper square>square corners</DemoPaper>\n    </Stack>\n  );\n}\n"}};D.scope={process:{},import:{react:u,"@mui/material/Grid":m,"@mui/material/Paper":h,"@mui/material/Box":f,"@mui/material/styles":v,"@mui/material/Stack":g}};var L={"./Elevation.js":function(){return(0,C.jsx)(x.ZP,{container:!0,spacing:2,children:[M,j].map(function(e,n){return(0,C.jsx)(x.ZP,{item:!0,xs:6,children:(0,C.jsx)(w.Z,{theme:e,children:(0,C.jsx)(b.Z,{sx:{p:2,borderRadius:2,bgcolor:"background.default",display:"grid",gridTemplateColumns:{md:"1fr 1fr"},gap:2},children:[0,1,2,3,4,6,8,12,16,24].map(function(e){return(0,C.jsx)(Z,{elevation:e,children:"elevation=".concat(e)},e)})})})},n)})})},"./SimplePaper.js":function(){return(0,C.jsxs)(b.Z,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:128,height:128}},children:[a||(a=(0,C.jsx)(y.Z,{elevation:0})),o||(o=(0,C.jsx)(y.Z,{})),r||(r=(0,C.jsx)(y.Z,{elevation:3}))]})},"./Variants.js":function(){return i||(i=(0,C.jsxs)(S.Z,{direction:"row",spacing:2,children:[(0,C.jsx)(z,{variant:"elevation",children:"default variant"}),(0,C.jsx)(z,{variant:"outlined",children:"outlined variant"})]}))},"./SquareCorners.js":function(){return l||(l=(0,C.jsxs)(S.Z,{direction:"row",spacing:2,children:[(0,C.jsx)(T,{square:!1,children:"rounded corners"}),(0,C.jsx)(T,{square:!0,children:"square corners"})]}))}},B={"modules/components/ComponentLinkHeader.js":H.Z};function E(){return(0,C.jsx)(p.Z,(0,c.Z)({},s))}},747892:function(e,n,t){"use strict";t.d(n,{Z:function(){return Z}});var a,o,r,i,l,s=t(667294),c=t(514950),d=t(695093),u=t(34915),p=t.n(u),m=t(602688),h=t(941615),f=t(785893),v=(0,h.Z)((0,f.jsxs)("g",{fillRule:"nonzero",fill:"none",children:[(0,f.jsx)("path",{fill:"#FDB300",d:"M5.24 2.7L12 2l6.76.7L24 9.48 12 23 0 9.49z"}),(0,f.jsx)("path",{fill:"#EA6C00",d:"M4.85 9l7.13 14L0 9zM19.1 9l-7.12 14L23.95 9z"}),(0,f.jsx)("path",{fill:"#FDAD00",d:"M4.85 9H19.1l-7.12 14z"}),(0,f.jsxs)("g",{children:[(0,f.jsx)("path",{fill:"#FDD231",d:"M11.98 2l-6.75.65-.38 6.34zM11.98 2l6.75.65.37 6.34z"}),(0,f.jsx)("path",{fill:"#FDAD00",d:"M23.95 9l-5.22-6.35.37 6.34zM0 9l5.23-6.35-.38 6.34z"}),(0,f.jsx)("path",{fill:"#FEEEB7",d:"M11.98 2L4.85 9H19.1z"})]})]}),"Sketch"),g=(0,h.Z)((0,f.jsxs)("g",{fillRule:"nonzero",fill:"none",children:[(0,f.jsx)("path",{d:"M8 24a4 4 0 004-4v-4H8a4 4 0 000 8z",fill:"#0ACF83"}),(0,f.jsx)("path",{d:"M4 12a4 4 0 014-4h4v8H8a4 4 0 01-4-4z",fill:"#A259FF"}),(0,f.jsx)("path",{d:"M4 4a4 4 0 014-4h4v8H8a4 4 0 01-4-4z",fill:"#F24E1E"}),(0,f.jsx)("path",{d:"M12 0h4a4 4 0 010 8h-4V0z",fill:"#FF7262"}),(0,f.jsx)("path",{d:"M20 12a4 4 0 11-8 0 4 4 0 018 0z",fill:"#1ABCFE"})]}),"Figma"),x=(0,h.Z)((0,f.jsxs)("g",{fillRule:"nonzero",fill:"none",children:[(0,f.jsx)("path",{d:"M5.54 2h12.92C20.42 2 22 3.6 22 5.58v12.55a3.56 3.56 0 01-3.54 3.58H5.54A3.56 3.56 0 012 18.13V5.58A3.56 3.56 0 015.54 2z",fill:"#470137"}),(0,f.jsx)("path",{d:"M12.52 7.28L10 11.45l2.68 4.41c.01.04.02.07.01.1 0 .04-.04.01-.09.02H10.7c-.13 0-.22 0-.28-.1l-.54-1.04c-.17-.35-.36-.7-.57-1.06l-.6-1.1h-.02c-.17.36-.36.73-.56 1.09l-.57 1.07-.57 1.06c-.04.09-.1.1-.2.1H4.94c-.03 0-.06.01-.06-.03 0-.03 0-.07.02-.1l2.6-4.28-2.53-4.31c-.03-.04-.04-.07-.02-.09.02-.02.05-.03.09-.03h1.9a.5.5 0 01.11.01c.04.02.06.05.09.08.16.36.34.72.53 1.09l.6 1.06c.2.36.39.71.57 1.07h.01c.18-.37.36-.73.55-1.08.18-.36.37-.71.57-1.06l.56-1.06c0-.04.02-.07.05-.09.03-.01.06-.02.1-.01h1.77c.04-.01.09.01.1.06 0 0-.01.04-.03.05zM16.39 16.16c-.62 0-1.24-.12-1.8-.38a2.92 2.92 0 01-1.27-1.15 3.65 3.65 0 01-.46-1.91 3.46 3.46 0 011.8-3.08 4.27 4.27 0 012.29-.48c.07 0 .16 0 .26.02V6.52c0-.06.02-.1.08-.1H19c.04 0 .08.03.08.07v8.01l.02.51.03.49c0 .06-.02.11-.08.13a6.37 6.37 0 01-2.65.53zm.82-1.69v-3.7a2.11 2.11 0 00-1.45.16c-.29.15-.53.36-.71.63-.19.27-.28.63-.28 1.06 0 .3.04.6.14.87a1.44 1.44 0 00.95.93c.23.08.46.11.7.11a4.49 4.49 0 00.65-.06z",fill:"#FF61F6"})]}),"AdobeXD"),y=(0,h.Z)((0,f.jsxs)("g",{fill:"currentColor",fillRule:"nonzero",children:[(0,f.jsx)("path",{d:"M5.84 3c-.52 0-1 .25-1.3.67l-1.4 2.05c-.06.09-.1.19-.14.28h8V3H5.84zM20.86 5.72l-1.4-2.05c-.3-.42-.81-.67-1.33-.67H13v3h8c-.05-.1-.08-.2-.14-.28z",fillOpacity:".79"}),(0,f.jsx)("path",{d:"M20.98 7H3.02L3 7.11V19.4c0 .89.71 1.61 1.58 1.61h14.84A1.6 1.6 0 0021 19.4V7.1L20.98 7zm-6.87 5.36H9.89a1.6 1.6 0 01-1.58-1.61c0-.89.7-1.6 1.58-1.6h4.22c.87 0 1.58.71 1.58 1.6 0 .89-.7 1.6-1.58 1.6z",fillOpacity:".87"})]}),"BundleSize"),b=(0,h.Z)((0,f.jsxs)("g",{fillRule:"nonzero",fill:"none",children:[(0,f.jsx)("path",{d:"M6.92 6.1l2.33 7.99 2.32-8h6.3v.8l-2.37 4.14c.83.27 1.46.76 1.89 1.47.43.71.64 1.55.64 2.51 0 1.2-.31 2.2-.94 3a2.93 2.93 0 01-2.42 1.22 2.9 2.9 0 01-1.96-.72 4.25 4.25 0 01-1.23-1.96l1.31-.55c.2.5.45.9.76 1.18.32.28.69.43 1.12.43.44 0 .82-.26 1.13-.76.31-.51.47-1.12.47-1.84 0-.79-.17-1.4-.5-1.83-.38-.5-.99-.76-1.81-.76h-.64v-.78l2.24-3.92h-2.7l-.16.26-3.3 11.25h-.15l-2.4-8.14-2.41 8.14h-.16L.43 6.1H2.1l2.33 7.99L6 8.71 5.24 6.1h1.68z",fill:"#005A9C"}),(0,f.jsx)("g",{fill:"currentColor",children:(0,f.jsx)("path",{d:"M23.52 6.25l.28 1.62-.98 1.8s-.38-.76-1.01-1.19c-.53-.35-.87-.43-1.41-.33-.7.14-1.48.93-1.82 1.9-.41 1.18-.42 1.74-.43 2.26a4.9 4.9 0 00.11 1.33s-.6-1.06-.59-2.61c0-1.1.19-2.11.72-3.1.47-.87 1.17-1.4 1.8-1.45.63-.07 1.14.23 1.53.55.42.33.83 1.07.83 1.07l.97-1.85zM23.64 15.4s-.43.75-.7 1.04c-.27.28-.76.79-1.36 1.04-.6.25-.91.3-1.5.25a3.03 3.03 0 01-1.34-.52 5.08 5.08 0 01-1.67-2.04s.24.75.39 1.07c.09.18.36.74.74 1.23a3.5 3.5 0 002.1 1.42c1.04.18 1.76-.27 1.94-.38a5.32 5.32 0 001.4-1.43c.1-.14.25-.43.25-.43l-.25-1.25z"})})]}),"W3C"),k=(0,h.Z)((0,f.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,f.jsx)("circle",{fill:"#737373",cx:"12",cy:"12",r:"12"}),(0,f.jsx)("path",{fill:"#BDBDBD",d:"M4 4h16v16H4z"}),(0,f.jsx)("path",{fill:"#FFF",d:"M12 20l8-16H4z"})]}),"MaterialDesign"),P=t(692124),w=(0,m.ZP)("ul")({margin:0,padding:0,listStyle:"none",display:"flex",flexWrap:"wrap",gap:8,"& .MuiChip-root .MuiChip-iconSmall":{marginLeft:4}}),C={"material-ui":"@mui/material","joy-ui":"@mui/joy","base-ui":"@mui/base",system:"@mui/system"};function Z(e){var n,t,u=e.markdown.headers,m=e.design,h=(0,P.useTranslate)(),Z=null!==(n=null!==(t=u.packageName)&&void 0!==t?t:C[u.productId])&&void 0!==n?n:"@mui/material";return(0,f.jsxs)(w,{children:[u.githubLabel?(0,f.jsx)("li",{children:(0,f.jsx)(c.Z,{clickable:!0,role:void 0,component:"a",size:"small",variant:"outlined",rel:"nofollow",href:"".concat("https://github.com/mui/material-ui","/labels/").concat(encodeURIComponent(u.githubLabel)),icon:a||(a=(0,f.jsx)(p(),{color:"primary"})),"data-ga-event-category":"ComponentLinkHeader","data-ga-event-action":"click","data-ga-event-label":h("githubLabel"),"data-ga-event-split":"0.1",label:h("githubLabel")})}):null,(0,f.jsx)("li",{children:(0,f.jsx)(d.Z,{title:h("bundleSizeTooltip"),children:(0,f.jsx)(c.Z,{clickable:!0,role:void 0,component:"a",size:"small",variant:"outlined",rel:"nofollow",href:"https://bundlephobia.com/package/".concat(Z,"@latest"),icon:o||(o=(0,f.jsx)(y,{color:"primary"})),"data-ga-event-category":"ComponentLinkHeader","data-ga-event-action":"click","data-ga-event-label":h("bundleSize"),"data-ga-event-split":"0.1",label:h("bundleSize")})})}),u.waiAria?(0,f.jsx)("li",{children:(0,f.jsx)(c.Z,{clickable:!0,role:void 0,component:"a",size:"small",variant:"outlined",rel:"nofollow",href:u.waiAria,icon:r||(r=(0,f.jsx)(b,{color:"primary"})),"data-ga-event-category":"ComponentLinkHeader","data-ga-event-action":"click","data-ga-event-label":"WAI-ARIA","data-ga-event-split":"0.1",label:"WAI-ARIA"})}):null,u.materialDesign?(0,f.jsx)("li",{children:(0,f.jsx)(c.Z,{clickable:!0,role:void 0,component:"a",size:"small",variant:"outlined",rel:"nofollow",href:u.materialDesign,icon:i||(i=(0,f.jsx)(k,{})),"data-ga-event-category":"ComponentLinkHeader","data-ga-event-action":"click","data-ga-event-label":"Material Design","data-ga-event-split":"0.1",label:"Material Design"})}):null,!1!==m?l||(l=(0,f.jsxs)(s.Fragment,{children:[(0,f.jsx)("li",{children:(0,f.jsx)(c.Z,{clickable:!0,role:void 0,component:"a",size:"small",variant:"outlined",rel:"nofollow",href:"https://mui.com/store/items/figma-react/?utm_source=docs&utm_medium=referral&utm_campaign=component-link-header",icon:(0,f.jsx)(g,{}),"data-ga-event-category":"ComponentLinkHeader","data-ga-event-action":"click","data-ga-event-label":"Figma","data-ga-event-split":"0.1",label:"Figma"})}),(0,f.jsx)("li",{children:(0,f.jsx)(c.Z,{clickable:!0,role:void 0,component:"a",size:"small",variant:"outlined",rel:"nofollow",href:"https://mui.com/store/items/adobe-xd-react/?utm_source=docs&utm_medium=referral&utm_campaign=component-link-header",icon:(0,f.jsx)(x,{}),"data-ga-event-category":"ComponentLinkHeader","data-ga-event-action":"click","data-ga-event-label":"Adobe XD","data-ga-event-split":"0.1",label:"Adobe"})}),(0,f.jsx)("li",{children:(0,f.jsx)(c.Z,{clickable:!0,role:void 0,component:"a",size:"small",variant:"outlined",rel:"nofollow",href:"https://mui.com/store/items/sketch-react/?utm_source=docs&utm_medium=referral&utm_campaign=component-link-header",icon:(0,f.jsx)(v,{}),"data-ga-event-category":"ComponentLinkHeader","data-ga-event-action":"click","data-ga-event-label":"Sketch","data-ga-event-split":"0.1",label:"Sketch"})})]})):null]})}},34915:function(e,n,t){"use strict";var a=t(526771),o=t(564836);a(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(391641)),i=t(785893),l=(0,r.default)((0,i.jsx)("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 9h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1zm6 5H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1zm4-6H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z"}),"ChatRounded");n.default=l},733418:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/react-paper",function(){return t(964600)}])}},function(e){e.O(0,[52996,8365,82961,61532,41159,41512,82700,27830,7565,36195,17007,43374,48956,98826,16577,94665,21011,43765,95965,44749,67461,33335,98147,10436,49774,92888,40179],function(){return e(e.s=733418)}),_N_E=e.O()}]);