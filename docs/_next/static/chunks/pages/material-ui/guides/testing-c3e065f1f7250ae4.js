(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[52510],{291331:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var o={};t.r(o),t.d(o,{demoComponents:function(){return c},demos:function(){return r},docs:function(){return i},srcComponents:function(){return l}});var s=t(163804);t(667294);var a=t(165492),i={en:{description:"Write tests to prevent regressions and write better code.",location:"/brickmmo-docs-v2/data/material/guides/testing/testing.md",rendered:['<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="error-icon" viewBox="0 0 20 20">\n      <path fill-rule="evenodd" d="M2 7.4v5.2a2 2 0 0 0 .586 1.414l3.4 3.4A2 2 0 0 0 7.4 18h5.2a2 2 0 0 0 1.414-.586l3.4-3.4A2 2 0 0 0 18 12.6V7.4a2 2 0 0 0-.586-1.414l-3.4-3.4A2 2 0 0 0 12.6 2H7.4a2 2 0 0 0-1.414.586l-3.4 3.4A2 2 0 0 0 2 7.4Zm11.03-.43a.75.75 0 0 1 0 1.06L11.06 10l1.97 1.97a.75.75 0 1 1-1.06 1.06L10 11.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L8.94 10 6.97 8.03a.75.75 0 0 1 1.06-1.06L10 8.94l1.97-1.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="warning-icon" viewBox="0 0 20 20">\n      <path d="M2.33 17a.735.735 0 0 1-.665-.375.631.631 0 0 1-.094-.375.898.898 0 0 1 .115-.396L9.353 3.062a.621.621 0 0 1 .281-.27.85.85 0 0 1 .729 0 .622.622 0 0 1 .281.27l7.667 12.792c.07.125.108.257.114.396a.63.63 0 0 1-.093.375.842.842 0 0 1-.271.27.728.728 0 0 1-.394.105H2.33Zm7.664-2.5c.211 0 .39-.072.536-.214a.714.714 0 0 0 .218-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.531-.22.736.736 0 0 0-.536.215.714.714 0 0 0-.219.531c0 .212.072.39.215.536.143.146.32.219.531.219Zm0-2.5c.211 0 .39-.072.536-.216a.72.72 0 0 0 .218-.534v-2.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.531-.216.734.734 0 0 0-.536.216.72.72 0 0 0-.219.534v2.5c0 .212.072.39.215.534a.72.72 0 0 0 .531.216Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="success-icon" viewBox="0 0 20 20">\n      <path d="m8.938 10.875-1.25-1.23a.718.718 0 0 0-.521-.228.718.718 0 0 0-.521.229.73.73 0 0 0 0 1.062l1.77 1.771c.153.153.327.23.521.23a.718.718 0 0 0 .521-.23l3.896-3.896a.73.73 0 0 0 0-1.062.718.718 0 0 0-.52-.23.718.718 0 0 0-.521.23l-3.376 3.354ZM10 18a7.796 7.796 0 0 1-3.104-.625 8.065 8.065 0 0 1-2.552-1.719 8.064 8.064 0 0 1-1.719-2.552A7.797 7.797 0 0 1 2 10c0-1.111.208-2.15.625-3.115a8.064 8.064 0 0 1 4.27-4.26A7.797 7.797 0 0 1 10 2c1.111 0 2.15.208 3.115.625a8.096 8.096 0 0 1 4.26 4.26C17.792 7.851 18 8.89 18 10a7.797 7.797 0 0 1-.625 3.104 8.066 8.066 0 0 1-4.26 4.271A7.774 7.774 0 0 1 10 18Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="info-icon" viewBox="0 0 20 20">\n      <path d="M9.996 14c.21 0 .39-.072.535-.216a.72.72 0 0 0 .219-.534v-3.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.532-.216.734.734 0 0 0-.535.216.72.72 0 0 0-.219.534v3.5c0 .213.071.39.214.534a.72.72 0 0 0 .532.216Zm0-6.5c.21 0 .39-.071.535-.214a.714.714 0 0 0 .219-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.532-.219.736.736 0 0 0-.535.214.714.714 0 0 0-.219.532c0 .21.071.39.214.535.143.146.32.219.532.219Zm.01 10.5a7.81 7.81 0 0 1-3.11-.625 8.065 8.065 0 0 1-2.552-1.719 8.066 8.066 0 0 1-1.719-2.551A7.818 7.818 0 0 1 2 9.99c0-1.104.208-2.14.625-3.105a8.066 8.066 0 0 1 4.27-4.26A7.818 7.818 0 0 1 10.009 2a7.75 7.75 0 0 1 3.106.625 8.083 8.083 0 0 1 4.26 4.265A7.77 7.77 0 0 1 18 9.994a7.81 7.81 0 0 1-.625 3.11 8.066 8.066 0 0 1-1.719 2.552 8.083 8.083 0 0 1-2.546 1.719 7.77 7.77 0 0 1-3.104.625Z"/>\n      </symbol>\n      </svg>','\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n        <symbol id="anchor-link-icon" viewBox="0 0 12 6">\n          <path d="M8.9176 0.083252H7.1676C6.84677 0.083252 6.58427 0.345752 6.58427 0.666585C6.58427 0.987419 6.84677 1.24992 7.1676 1.24992H8.9176C9.8801 1.24992 10.6676 2.03742 10.6676 2.99992C10.6676 3.96242 9.8801 4.74992 8.9176 4.74992H7.1676C6.84677 4.74992 6.58427 5.01242 6.58427 5.33325C6.58427 5.65409 6.84677 5.91659 7.1676 5.91659H8.9176C10.5276 5.91659 11.8343 4.60992 11.8343 2.99992C11.8343 1.38992 10.5276 0.083252 8.9176 0.083252ZM3.6676 2.99992C3.6676 3.32075 3.9301 3.58325 4.25094 3.58325H7.75094C8.07177 3.58325 8.33427 3.32075 8.33427 2.99992C8.33427 2.67909 8.07177 2.41659 7.75094 2.41659H4.25094C3.9301 2.41659 3.6676 2.67909 3.6676 2.99992ZM4.83427 4.74992H3.08427C2.12177 4.74992 1.33427 3.96242 1.33427 2.99992C1.33427 2.03742 2.12177 1.24992 3.08427 1.24992H4.83427C5.1551 1.24992 5.4176 0.987419 5.4176 0.666585C5.4176 0.345752 5.1551 0.083252 4.83427 0.083252H3.08427C1.47427 0.083252 0.167603 1.38992 0.167603 2.99992C0.167603 4.60992 1.47427 5.91659 3.08427 5.91659H4.83427C5.1551 5.91659 5.4176 5.65409 5.4176 5.33325C5.4176 5.01242 5.1551 4.74992 4.83427 4.74992Z" />\n        </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n      <path d="M5.025 14H6.95c.183 0 .35-.029.5-.087a1.24 1.24 0 0 0 .425-.288L13.65 7.9a.622.622 0 0 0 .2-.45.622.622 0 0 0-.2-.45l-2.3-2.3a.622.622 0 0 0-.45-.2.622.622 0 0 0-.45.2l-5.725 5.775a1.24 1.24 0 0 0-.287.425 1.37 1.37 0 0 0-.088.5v1.925c0 .184.067.342.2.475a.65.65 0 0 0 .475.2Zm5.325 0h5.725c.367 0 .68-.129.938-.387.258-.258.387-.57.387-.938 0-.366-.13-.679-.387-.937a1.277 1.277 0 0 0-.938-.388H13L10.35 14Zm-5.5 4.4-2.4 2.4c-.417.417-.896.509-1.437.275C.47 20.842.2 20.434.2 19.85V3.55c0-.733.258-1.358.775-1.875A2.554 2.554 0 0 1 2.85.9h16.3c.733 0 1.358.259 1.875.775.517.517.775 1.142.775 1.875v12.2c0 .734-.258 1.359-.775 1.875a2.554 2.554 0 0 1-1.875.775H4.85Z"/>\n      </symbol>\n      </svg>','<h1>Testing</h1><p class="description">Write tests to prevent regressions and write better code.</p>\n\n<h2 id="userspace">Userspace<a aria-labelledby="userspace" class="anchor-link" href="#userspace" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="userspace"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>It&#39;s generally recommended to test your application without tying the tests too closely to Material UI.\nThis is how Material UI components are tested internally.\nA library that has a first-class API for this approach is <a href="https://testing-library.com/docs/react-testing-library/intro/"><code>@testing-library/react</code></a>.</p>\n<p>For example, when rendering a <code>TextField</code> your test should not need to query for the specific Material UI instance of the <code>TextField</code> but rather for the <code>input</code>, or <code>[role=&quot;textbox&quot;]</code>.</p>\n<p>By not relying on the React component tree you make your test more robust against internal changes in Material UI or, if you need snapshot testing, adding additional wrapper components such as context providers.\nWe don&#39;t recommend snapshot testing though.\n<a href="https://kentcdodds.com/blog/effective-snapshot-testing">&quot;Effective snapshot testing&quot; by Kent C. Dodds</a> goes into more details why snapshot testing might be misleading for React component tests.</p>\n<h2 id="internal">Internal<a aria-labelledby="internal" class="anchor-link" href="#internal" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="internal"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>MUI has <strong>a wide range</strong> of tests for Material UI so we can\niterate with confidence on the components, for instance, the visual regression tests provided by <a href="https://app.argos-ci.com/mui/material-ui/builds">Argos-CI</a> have proven to be really helpful.\nTo learn more about the internal tests, you can have a look at the <a href="https://github.com/mui/material-ui/blob/HEAD/test/README.md">README</a>.</p>\n'],toc:[{text:"Userspace",level:2,hash:"userspace",children:[]},{text:"Internal",level:2,hash:"internal",children:[]}],title:"Testing",headers:{components:[]}}},r={};r.scope={process:{},import:{}};var c={},l={},d=t(785893);function h(){return(0,d.jsx)(a.Z,(0,s.Z)({},o))}},165492:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var o,s=t(163804),a=t(667294),i=t(45697),r=t.n(i),c=t(811163),l=t(721923),d=t(875795),h=t(608144),m=t(772184),p=t(400438),u=t(692124),g=t(261589),v=t(703391),w=t(662208),y=t(785893);function b(e){var n=e.mode,t=(0,d.tv)().setMode;return a.useEffect(function(){t(n)},[n,t]),null}function f(e){var n=(0,l.Z)(),t=(0,c.useRouter)(),i=(0,m.ln)(t.asPath).canonicalAs,r=e.disableAd,f=void 0!==r&&r,x=e.disableToc,C=e.disableCssVarsProvider,k=e.demos,Z=void 0===k?{}:k,A=e.docs,H=e.demoComponents,M=e.srcComponents,E=A[(0,u.useUserLanguage)()]||A.en,_=i.startsWith("/joy-ui/")&&!(void 0!==C&&C),I=_?d.lL:a.Fragment,T=_?g.default:a.Fragment,L=(0,s.Z)({},_&&{mode:n.palette.mode});return(0,y.jsxs)(p.Z,{description:E.description,disableAd:f,disableToc:void 0!==x&&x,location:E.location,title:E.title,toc:E.toc,children:[f?null:o||(o=(0,y.jsx)(g.default,{children:(0,y.jsx)(w.Z,{children:(0,y.jsx)(v.ZP,{})})})),(0,y.jsxs)(I,{children:[_&&(0,y.jsx)(b,{mode:n.palette.mode}),E.rendered.map(function(e,t){return(0,y.jsx)(h.Z,{demoComponents:H,demos:Z,disableAd:f,localizedDoc:E,renderedMarkdownOrDemo:e,srcComponents:M,theme:n,WrapperComponent:T,wrapperProps:L},"demos-section-".concat(t))})]})]})}b.propTypes={mode:r().oneOf(["light","dark"])}},422380:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/guides/testing",function(){return t(291331)}])}},function(e){e.O(0,[52996,8365,82961,61532,41159,41512,82700,27830,7565,36195,17007,43374,48956,98826,16577,94665,21011,43765,95965,44749,67461,33335,49774,92888,40179],function(){return e(e.s=422380)}),_N_E=e.O()}]);