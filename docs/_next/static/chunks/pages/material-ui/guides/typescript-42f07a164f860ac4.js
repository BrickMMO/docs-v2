(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81617],{604999:function(n,e,o){"use strict";o.r(e),o.d(e,{default:function(){return d}});var t={};o.r(t),o.d(t,{demoComponents:function(){return p},demos:function(){return c},docs:function(){return i},srcComponents:function(){return l}});var s=o(163804);o(667294);var a=o(165492),i={en:{description:"You can add static typing to JavaScript to improve developer productivity and code quality thanks to TypeScript.",location:"/brickmmo-docs-v2/data/material/guides/typescript/typescript.md",rendered:['<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="error-icon" viewBox="0 0 20 20">\n      <path fill-rule="evenodd" d="M2 7.4v5.2a2 2 0 0 0 .586 1.414l3.4 3.4A2 2 0 0 0 7.4 18h5.2a2 2 0 0 0 1.414-.586l3.4-3.4A2 2 0 0 0 18 12.6V7.4a2 2 0 0 0-.586-1.414l-3.4-3.4A2 2 0 0 0 12.6 2H7.4a2 2 0 0 0-1.414.586l-3.4 3.4A2 2 0 0 0 2 7.4Zm11.03-.43a.75.75 0 0 1 0 1.06L11.06 10l1.97 1.97a.75.75 0 1 1-1.06 1.06L10 11.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L8.94 10 6.97 8.03a.75.75 0 0 1 1.06-1.06L10 8.94l1.97-1.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="warning-icon" viewBox="0 0 20 20">\n      <path d="M2.33 17a.735.735 0 0 1-.665-.375.631.631 0 0 1-.094-.375.898.898 0 0 1 .115-.396L9.353 3.062a.621.621 0 0 1 .281-.27.85.85 0 0 1 .729 0 .622.622 0 0 1 .281.27l7.667 12.792c.07.125.108.257.114.396a.63.63 0 0 1-.093.375.842.842 0 0 1-.271.27.728.728 0 0 1-.394.105H2.33Zm7.664-2.5c.211 0 .39-.072.536-.214a.714.714 0 0 0 .218-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.531-.22.736.736 0 0 0-.536.215.714.714 0 0 0-.219.531c0 .212.072.39.215.536.143.146.32.219.531.219Zm0-2.5c.211 0 .39-.072.536-.216a.72.72 0 0 0 .218-.534v-2.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.531-.216.734.734 0 0 0-.536.216.72.72 0 0 0-.219.534v2.5c0 .212.072.39.215.534a.72.72 0 0 0 .531.216Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="success-icon" viewBox="0 0 20 20">\n      <path d="m8.938 10.875-1.25-1.23a.718.718 0 0 0-.521-.228.718.718 0 0 0-.521.229.73.73 0 0 0 0 1.062l1.77 1.771c.153.153.327.23.521.23a.718.718 0 0 0 .521-.23l3.896-3.896a.73.73 0 0 0 0-1.062.718.718 0 0 0-.52-.23.718.718 0 0 0-.521.23l-3.376 3.354ZM10 18a7.796 7.796 0 0 1-3.104-.625 8.065 8.065 0 0 1-2.552-1.719 8.064 8.064 0 0 1-1.719-2.552A7.797 7.797 0 0 1 2 10c0-1.111.208-2.15.625-3.115a8.064 8.064 0 0 1 4.27-4.26A7.797 7.797 0 0 1 10 2c1.111 0 2.15.208 3.115.625a8.096 8.096 0 0 1 4.26 4.26C17.792 7.851 18 8.89 18 10a7.797 7.797 0 0 1-.625 3.104 8.066 8.066 0 0 1-4.26 4.271A7.774 7.774 0 0 1 10 18Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="info-icon" viewBox="0 0 20 20">\n      <path d="M9.996 14c.21 0 .39-.072.535-.216a.72.72 0 0 0 .219-.534v-3.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.532-.216.734.734 0 0 0-.535.216.72.72 0 0 0-.219.534v3.5c0 .213.071.39.214.534a.72.72 0 0 0 .532.216Zm0-6.5c.21 0 .39-.071.535-.214a.714.714 0 0 0 .219-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.532-.219.736.736 0 0 0-.535.214.714.714 0 0 0-.219.532c0 .21.071.39.214.535.143.146.32.219.532.219Zm.01 10.5a7.81 7.81 0 0 1-3.11-.625 8.065 8.065 0 0 1-2.552-1.719 8.066 8.066 0 0 1-1.719-2.551A7.818 7.818 0 0 1 2 9.99c0-1.104.208-2.14.625-3.105a8.066 8.066 0 0 1 4.27-4.26A7.818 7.818 0 0 1 10.009 2a7.75 7.75 0 0 1 3.106.625 8.083 8.083 0 0 1 4.26 4.265A7.77 7.77 0 0 1 18 9.994a7.81 7.81 0 0 1-.625 3.11 8.066 8.066 0 0 1-1.719 2.552 8.083 8.083 0 0 1-2.546 1.719 7.77 7.77 0 0 1-3.104.625Z"/>\n      </symbol>\n      </svg>','\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n        <symbol id="anchor-link-icon" viewBox="0 0 12 6">\n          <path d="M8.9176 0.083252H7.1676C6.84677 0.083252 6.58427 0.345752 6.58427 0.666585C6.58427 0.987419 6.84677 1.24992 7.1676 1.24992H8.9176C9.8801 1.24992 10.6676 2.03742 10.6676 2.99992C10.6676 3.96242 9.8801 4.74992 8.9176 4.74992H7.1676C6.84677 4.74992 6.58427 5.01242 6.58427 5.33325C6.58427 5.65409 6.84677 5.91659 7.1676 5.91659H8.9176C10.5276 5.91659 11.8343 4.60992 11.8343 2.99992C11.8343 1.38992 10.5276 0.083252 8.9176 0.083252ZM3.6676 2.99992C3.6676 3.32075 3.9301 3.58325 4.25094 3.58325H7.75094C8.07177 3.58325 8.33427 3.32075 8.33427 2.99992C8.33427 2.67909 8.07177 2.41659 7.75094 2.41659H4.25094C3.9301 2.41659 3.6676 2.67909 3.6676 2.99992ZM4.83427 4.74992H3.08427C2.12177 4.74992 1.33427 3.96242 1.33427 2.99992C1.33427 2.03742 2.12177 1.24992 3.08427 1.24992H4.83427C5.1551 1.24992 5.4176 0.987419 5.4176 0.666585C5.4176 0.345752 5.1551 0.083252 4.83427 0.083252H3.08427C1.47427 0.083252 0.167603 1.38992 0.167603 2.99992C0.167603 4.60992 1.47427 5.91659 3.08427 5.91659H4.83427C5.1551 5.91659 5.4176 5.65409 5.4176 5.33325C5.4176 5.01242 5.1551 4.74992 4.83427 4.74992Z" />\n        </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n      <path d="M5.025 14H6.95c.183 0 .35-.029.5-.087a1.24 1.24 0 0 0 .425-.288L13.65 7.9a.622.622 0 0 0 .2-.45.622.622 0 0 0-.2-.45l-2.3-2.3a.622.622 0 0 0-.45-.2.622.622 0 0 0-.45.2l-5.725 5.775a1.24 1.24 0 0 0-.287.425 1.37 1.37 0 0 0-.088.5v1.925c0 .184.067.342.2.475a.65.65 0 0 0 .475.2Zm5.325 0h5.725c.367 0 .68-.129.938-.387.258-.258.387-.57.387-.938 0-.366-.13-.679-.387-.937a1.277 1.277 0 0 0-.938-.388H13L10.35 14Zm-5.5 4.4-2.4 2.4c-.417.417-.896.509-1.437.275C.47 20.842.2 20.434.2 19.85V3.55c0-.733.258-1.358.775-1.875A2.554 2.554 0 0 1 2.85.9h16.3c.733 0 1.358.259 1.875.775.517.517.775 1.142.775 1.875v12.2c0 .734-.258 1.359-.775 1.875a2.554 2.554 0 0 1-1.875.775H4.85Z"/>\n      </symbol>\n      </svg>','<h1>TypeScript</h1><p class="description">You can add static typing to JavaScript to improve developer productivity and code quality thanks to TypeScript.</p>\n\n<h2 id="minimum-configuration">Minimum configuration<a aria-labelledby="minimum-configuration" class="anchor-link" href="#minimum-configuration" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="minimum-configuration"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><!-- #default-branch-switch -->\n\n<p>Material UI requires a minimum version of TypeScript 3.5. Have a look at the <a href="https://github.com/mui/material-ui/tree/master/examples/material-ui-cra-ts">Create React App with TypeScript</a> example.</p>\n<p>For types to work, it&#39;s recommended that you have at least the following options enabled in your <code>tsconfig.json</code>:</p>\n<div class="MuiCode-root"><pre><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"lib"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"es6"</span><span class="token punctuation">,</span> <span class="token string">"dom"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">"noImplicitAny"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">"noImplicitThis"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">"strictNullChecks"</span><span class="token operator">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><use class="MuiCode-copy-icon" xlink:href="#copy-icon" /><use class="MuiCode-copied-icon" xlink:href="#copied-icon" /></svg><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<p>The strict mode options are the same that are required for every types package\npublished in the <code>@types/</code> namespace.\nUsing a less strict <code>tsconfig.json</code> or omitting some of the libraries might cause errors.\nTo get the best type experience with the types we recommend setting <code>&quot;strict&quot;: true</code>.</p>\n<h2 id="handling-value-and-event-handlers">Handling <code>value</code> and event handlers<a aria-labelledby="handling-value-and-event-handlers" class="anchor-link" href="#handling-value-and-event-handlers" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="handling-value-and-event-handlers"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>Many components concerned with user input offer a <code>value</code> prop or event handlers\nwhich include the current <code>value</code>. In most situations that <code>value</code> is only handled\nwithin React which allows it be of any type, such as objects or arrays.</p>\n<p>However, that type cannot be verified at compile time in situations where it depends\non the component&#39;s children e.g. for <code>Select</code> or <code>RadioGroup</code>. This means that\nthe soundest option is to type it as <code>unknown</code> and let the developer decide\nhow they want to narrow that type down. We do not offer the possibility to use a generic\ntype in those cases for <a href="https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682">the same reasons <code>event.target</code> is not generic in React</a>.</p>\n<p>The demos include typed variants that use type casting. It is an acceptable tradeoff\nbecause the types are all located in a single file and are very basic. You have to decide for yourself\nif the same tradeoff is acceptable for you. The library types are strict\nby default and loose via opt-in.</p>\n<h2 id="customization-of-theme">Customization of <code>Theme</code><a aria-labelledby="customization-of-theme" class="anchor-link" href="#customization-of-theme" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="customization-of-theme"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>Moved to <a href="/material-ui/customization/theming/#custom-variables">/customization/theming/#custom-variables</a>.</p>\n<h2 id="complications-with-the-component-prop">Complications with the <code>component</code> prop<a aria-labelledby="complications-with-the-component-prop" class="anchor-link" href="#complications-with-the-component-prop" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="complications-with-the-component-prop"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>Because of some TypeScript limitations, using the <code>component</code> prop can be problematic if you are creating your custom component based on the Material UI&#39;s components.\nFor the composition of the components, you will likely need to use one of these two options:</p>\n<ol>\n<li>Wrap the Material UI component in order to enhance it</li>\n<li>Use the <code>styled()</code> utility in order to customize the styles of the component</li>\n</ol>\n<p>If you are using the first option, take a look at the <a href="/material-ui/guides/composition/#with-typescript">composition guide</a> for more details.</p>\n<p>If you are using the <code>styled()</code> utility (regardless of whether it comes from <code>@mui/material</code> or <code>@emotion/styled</code>), you will need to cast the resulting component as shown below:</p>\n<div class="MuiCode-root"><pre><code class="language-tsx"><span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'@mui/material/Button\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> styled <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@mui/material/styles\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> CustomButton <span class="token operator">=</span> <span class="token function">styled</span><span class="token punctuation">(</span>Button<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token comment">// your custom styles go here</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">typeof</span> Button<span class="token punctuation">;</span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><use class="MuiCode-copy-icon" xlink:href="#copy-icon" /><use class="MuiCode-copied-icon" xlink:href="#copied-icon" /></svg><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n'],toc:[{text:"Minimum configuration",level:2,hash:"minimum-configuration",children:[]},{text:"Handling value and event handlers",level:2,hash:"handling-value-and-event-handlers",children:[]},{text:"Customization of Theme",level:2,hash:"customization-of-theme",children:[]},{text:"Complications with the component prop",level:2,hash:"complications-with-the-component-prop",children:[]}],title:"TypeScript",headers:{components:[]}}},c={};c.scope={process:{},import:{}};var p={},l={},r=o(785893);function d(){return(0,r.jsx)(a.Z,(0,s.Z)({},t))}},165492:function(n,e,o){"use strict";o.d(e,{Z:function(){return w}});var t,s=o(163804),a=o(667294),i=o(45697),c=o.n(i),p=o(811163),l=o(721923),r=o(875795),d=o(608144),u=o(772184),m=o(400438),h=o(692124),y=o(261589),v=o(703391),g=o(662208),f=o(785893);function k(n){var e=n.mode,o=(0,r.tv)().setMode;return a.useEffect(function(){o(e)},[e,o]),null}function w(n){var e=(0,l.Z)(),o=(0,p.useRouter)(),i=(0,u.ln)(o.asPath).canonicalAs,c=n.disableAd,w=void 0!==c&&c,b=n.disableToc,C=n.disableCssVarsProvider,x=n.demos,M=void 0===x?{}:x,Z=n.docs,H=n.demoComponents,T=n.srcComponents,z=Z[(0,h.useUserLanguage)()]||Z.en,A=i.startsWith("/joy-ui/")&&!(void 0!==C&&C),B=A?r.lL:a.Fragment,j=A?y.default:a.Fragment,_=(0,s.Z)({},A&&{mode:e.palette.mode});return(0,f.jsxs)(m.Z,{description:z.description,disableAd:w,disableToc:void 0!==b&&b,location:z.location,title:z.title,toc:z.toc,children:[w?null:t||(t=(0,f.jsx)(y.default,{children:(0,f.jsx)(g.Z,{children:(0,f.jsx)(v.ZP,{})})})),(0,f.jsxs)(B,{children:[A&&(0,f.jsx)(k,{mode:e.palette.mode}),z.rendered.map(function(n,o){return(0,f.jsx)(d.Z,{demoComponents:H,demos:M,disableAd:w,localizedDoc:z,renderedMarkdownOrDemo:n,srcComponents:T,theme:e,WrapperComponent:j,wrapperProps:_},"demos-section-".concat(o))})]})]})}k.propTypes={mode:c().oneOf(["light","dark"])}},515154:function(n,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/guides/typescript",function(){return o(604999)}])}},function(n){n.O(0,[52996,8365,82961,61532,41159,41512,82700,27830,7565,36195,17007,43374,48956,98826,16577,94665,21011,43765,95965,44749,67461,33335,49774,92888,40179],function(){return n(n.s=515154)}),_N_E=n.O()}]);