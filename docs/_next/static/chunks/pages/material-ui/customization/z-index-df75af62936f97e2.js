(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47890],{565921:function(n,e,o){"use strict";o.r(e),o.d(e,{default:function(){return m}});var t={};o.r(t),o.d(t,{demoComponents:function(){return c},demos:function(){return l},docs:function(){return a},srcComponents:function(){return d}});var i=o(163804);o(667294);var s=o(165492),a={en:{description:"z-index is the CSS property that helps control layout by providing a third axis to arrange content.",location:"/brickmmo-docs-v2/data/material/customization/z-index/z-index.md",rendered:['<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="error-icon" viewBox="0 0 20 20">\n      <path fill-rule="evenodd" d="M2 7.4v5.2a2 2 0 0 0 .586 1.414l3.4 3.4A2 2 0 0 0 7.4 18h5.2a2 2 0 0 0 1.414-.586l3.4-3.4A2 2 0 0 0 18 12.6V7.4a2 2 0 0 0-.586-1.414l-3.4-3.4A2 2 0 0 0 12.6 2H7.4a2 2 0 0 0-1.414.586l-3.4 3.4A2 2 0 0 0 2 7.4Zm11.03-.43a.75.75 0 0 1 0 1.06L11.06 10l1.97 1.97a.75.75 0 1 1-1.06 1.06L10 11.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L8.94 10 6.97 8.03a.75.75 0 0 1 1.06-1.06L10 8.94l1.97-1.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="warning-icon" viewBox="0 0 20 20">\n      <path d="M2.33 17a.735.735 0 0 1-.665-.375.631.631 0 0 1-.094-.375.898.898 0 0 1 .115-.396L9.353 3.062a.621.621 0 0 1 .281-.27.85.85 0 0 1 .729 0 .622.622 0 0 1 .281.27l7.667 12.792c.07.125.108.257.114.396a.63.63 0 0 1-.093.375.842.842 0 0 1-.271.27.728.728 0 0 1-.394.105H2.33Zm7.664-2.5c.211 0 .39-.072.536-.214a.714.714 0 0 0 .218-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.531-.22.736.736 0 0 0-.536.215.714.714 0 0 0-.219.531c0 .212.072.39.215.536.143.146.32.219.531.219Zm0-2.5c.211 0 .39-.072.536-.216a.72.72 0 0 0 .218-.534v-2.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.531-.216.734.734 0 0 0-.536.216.72.72 0 0 0-.219.534v2.5c0 .212.072.39.215.534a.72.72 0 0 0 .531.216Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="success-icon" viewBox="0 0 20 20">\n      <path d="m8.938 10.875-1.25-1.23a.718.718 0 0 0-.521-.228.718.718 0 0 0-.521.229.73.73 0 0 0 0 1.062l1.77 1.771c.153.153.327.23.521.23a.718.718 0 0 0 .521-.23l3.896-3.896a.73.73 0 0 0 0-1.062.718.718 0 0 0-.52-.23.718.718 0 0 0-.521.23l-3.376 3.354ZM10 18a7.796 7.796 0 0 1-3.104-.625 8.065 8.065 0 0 1-2.552-1.719 8.064 8.064 0 0 1-1.719-2.552A7.797 7.797 0 0 1 2 10c0-1.111.208-2.15.625-3.115a8.064 8.064 0 0 1 4.27-4.26A7.797 7.797 0 0 1 10 2c1.111 0 2.15.208 3.115.625a8.096 8.096 0 0 1 4.26 4.26C17.792 7.851 18 8.89 18 10a7.797 7.797 0 0 1-.625 3.104 8.066 8.066 0 0 1-4.26 4.271A7.774 7.774 0 0 1 10 18Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="info-icon" viewBox="0 0 20 20">\n      <path d="M9.996 14c.21 0 .39-.072.535-.216a.72.72 0 0 0 .219-.534v-3.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.532-.216.734.734 0 0 0-.535.216.72.72 0 0 0-.219.534v3.5c0 .213.071.39.214.534a.72.72 0 0 0 .532.216Zm0-6.5c.21 0 .39-.071.535-.214a.714.714 0 0 0 .219-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.532-.219.736.736 0 0 0-.535.214.714.714 0 0 0-.219.532c0 .21.071.39.214.535.143.146.32.219.532.219Zm.01 10.5a7.81 7.81 0 0 1-3.11-.625 8.065 8.065 0 0 1-2.552-1.719 8.066 8.066 0 0 1-1.719-2.551A7.818 7.818 0 0 1 2 9.99c0-1.104.208-2.14.625-3.105a8.066 8.066 0 0 1 4.27-4.26A7.818 7.818 0 0 1 10.009 2a7.75 7.75 0 0 1 3.106.625 8.083 8.083 0 0 1 4.26 4.265A7.77 7.77 0 0 1 18 9.994a7.81 7.81 0 0 1-.625 3.11 8.066 8.066 0 0 1-1.719 2.552 8.083 8.083 0 0 1-2.546 1.719 7.77 7.77 0 0 1-3.104.625Z"/>\n      </symbol>\n      </svg>','\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n        <symbol id="anchor-link-icon" viewBox="0 0 12 6">\n          <path d="M8.9176 0.083252H7.1676C6.84677 0.083252 6.58427 0.345752 6.58427 0.666585C6.58427 0.987419 6.84677 1.24992 7.1676 1.24992H8.9176C9.8801 1.24992 10.6676 2.03742 10.6676 2.99992C10.6676 3.96242 9.8801 4.74992 8.9176 4.74992H7.1676C6.84677 4.74992 6.58427 5.01242 6.58427 5.33325C6.58427 5.65409 6.84677 5.91659 7.1676 5.91659H8.9176C10.5276 5.91659 11.8343 4.60992 11.8343 2.99992C11.8343 1.38992 10.5276 0.083252 8.9176 0.083252ZM3.6676 2.99992C3.6676 3.32075 3.9301 3.58325 4.25094 3.58325H7.75094C8.07177 3.58325 8.33427 3.32075 8.33427 2.99992C8.33427 2.67909 8.07177 2.41659 7.75094 2.41659H4.25094C3.9301 2.41659 3.6676 2.67909 3.6676 2.99992ZM4.83427 4.74992H3.08427C2.12177 4.74992 1.33427 3.96242 1.33427 2.99992C1.33427 2.03742 2.12177 1.24992 3.08427 1.24992H4.83427C5.1551 1.24992 5.4176 0.987419 5.4176 0.666585C5.4176 0.345752 5.1551 0.083252 4.83427 0.083252H3.08427C1.47427 0.083252 0.167603 1.38992 0.167603 2.99992C0.167603 4.60992 1.47427 5.91659 3.08427 5.91659H4.83427C5.1551 5.91659 5.4176 5.65409 5.4176 5.33325C5.4176 5.01242 5.1551 4.74992 4.83427 4.74992Z" />\n        </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n      <path d="M5.025 14H6.95c.183 0 .35-.029.5-.087a1.24 1.24 0 0 0 .425-.288L13.65 7.9a.622.622 0 0 0 .2-.45.622.622 0 0 0-.2-.45l-2.3-2.3a.622.622 0 0 0-.45-.2.622.622 0 0 0-.45.2l-5.725 5.775a1.24 1.24 0 0 0-.287.425 1.37 1.37 0 0 0-.088.5v1.925c0 .184.067.342.2.475a.65.65 0 0 0 .475.2Zm5.325 0h5.725c.367 0 .68-.129.938-.387.258-.258.387-.57.387-.938 0-.366-.13-.679-.387-.937a1.277 1.277 0 0 0-.938-.388H13L10.35 14Zm-5.5 4.4-2.4 2.4c-.417.417-.896.509-1.437.275C.47 20.842.2 20.434.2 19.85V3.55c0-.733.258-1.358.775-1.875A2.554 2.554 0 0 1 2.85.9h16.3c.733 0 1.358.259 1.875.775.517.517.775 1.142.775 1.875v12.2c0 .734-.258 1.359-.775 1.875a2.554 2.554 0 0 1-1.875.775H4.85Z"/>\n      </symbol>\n      </svg>','<h1>z-index</h1><p class="description">z-index is the CSS property that helps control layout by providing a third axis to arrange content.</p>\n\n<p>Several Material UI components utilize <code>z-index</code>, employing a default z-index scale\nthat has been designed to properly layer drawers, modals, snackbars, tooltips, and more.</p>\n<p>The <code>z-index</code> values start at an arbitrary number, high and specific enough to ideally avoid conflicts:</p>\n<ul>\n<li>mobile stepper: 1000</li>\n<li>fab: 1050</li>\n<li>speed dial: 1050</li>\n<li>app bar: 1100</li>\n<li>drawer: 1200</li>\n<li>modal: 1300</li>\n<li>snackbar: 1400</li>\n<li>tooltip: 1500</li>\n</ul>\n<p>These values can always be customized.\nYou will find them in the theme under the <a href="/material-ui/customization/default-theme/?expand-path=$.zIndex"><code>zIndex</code></a> key of the theme.\nCustomization of individual values is discouraged; should you change one, you likely need to change them all.</p>\n'],toc:[],title:"z-index",headers:{components:[]}}},l={};l.scope={process:{},import:{}};var c={},d={},r=o(785893);function m(){return(0,r.jsx)(s.Z,(0,i.Z)({},t))}},165492:function(n,e,o){"use strict";o.d(e,{Z:function(){return b}});var t,i=o(163804),s=o(667294),a=o(45697),l=o.n(a),c=o(811163),d=o(721923),r=o(875795),m=o(608144),p=o(772184),u=o(400438),h=o(692124),v=o(261589),w=o(703391),y=o(662208),g=o(785893);function x(n){var e=n.mode,o=(0,r.tv)().setMode;return s.useEffect(function(){o(e)},[e,o]),null}function b(n){var e=(0,d.Z)(),o=(0,c.useRouter)(),a=(0,p.ln)(o.asPath).canonicalAs,l=n.disableAd,b=void 0!==l&&l,f=n.disableToc,C=n.disableCssVarsProvider,z=n.demos,Z=void 0===z?{}:z,H=n.docs,A=n.demoComponents,M=n.srcComponents,k=H[(0,h.useUserLanguage)()]||H.en,_=a.startsWith("/joy-ui/")&&!(void 0!==C&&C),L=_?r.lL:s.Fragment,j=_?v.default:s.Fragment,B=(0,i.Z)({},_&&{mode:e.palette.mode});return(0,g.jsxs)(u.Z,{description:k.description,disableAd:b,disableToc:void 0!==f&&f,location:k.location,title:k.title,toc:k.toc,children:[b?null:t||(t=(0,g.jsx)(v.default,{children:(0,g.jsx)(y.Z,{children:(0,g.jsx)(w.ZP,{})})})),(0,g.jsxs)(L,{children:[_&&(0,g.jsx)(x,{mode:e.palette.mode}),k.rendered.map(function(n,o){return(0,g.jsx)(m.Z,{demoComponents:A,demos:Z,disableAd:b,localizedDoc:k,renderedMarkdownOrDemo:n,srcComponents:M,theme:e,WrapperComponent:j,wrapperProps:B},"demos-section-".concat(o))})]})]})}x.propTypes={mode:l().oneOf(["light","dark"])}},576649:function(n,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/customization/z-index",function(){return o(565921)}])}},function(n){n.O(0,[52996,8365,82961,61532,41159,41512,82700,27830,7565,36195,17007,43374,48956,98826,16577,94665,21011,43765,95965,44749,67461,33335,49774,92888,40179],function(){return n(n.s=576649)}),_N_E=n.O()}]);