(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[31736],{694497:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return r}});var a={};s.r(a),s.d(a,{demoComponents:function(){return p},demos:function(){return i},docs:function(){return l},srcComponents:function(){return c}});var o=s(163804);s(667294);var t=s(165492),l={en:{description:"Text fields let users enter and edit text.",location:"/brickmmo-docs-v2/data/joy/components/text-field/text-field.md",rendered:['<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="error-icon" viewBox="0 0 20 20">\n      <path fill-rule="evenodd" d="M2 7.4v5.2a2 2 0 0 0 .586 1.414l3.4 3.4A2 2 0 0 0 7.4 18h5.2a2 2 0 0 0 1.414-.586l3.4-3.4A2 2 0 0 0 18 12.6V7.4a2 2 0 0 0-.586-1.414l-3.4-3.4A2 2 0 0 0 12.6 2H7.4a2 2 0 0 0-1.414.586l-3.4 3.4A2 2 0 0 0 2 7.4Zm11.03-.43a.75.75 0 0 1 0 1.06L11.06 10l1.97 1.97a.75.75 0 1 1-1.06 1.06L10 11.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L8.94 10 6.97 8.03a.75.75 0 0 1 1.06-1.06L10 8.94l1.97-1.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="warning-icon" viewBox="0 0 20 20">\n      <path d="M2.33 17a.735.735 0 0 1-.665-.375.631.631 0 0 1-.094-.375.898.898 0 0 1 .115-.396L9.353 3.062a.621.621 0 0 1 .281-.27.85.85 0 0 1 .729 0 .622.622 0 0 1 .281.27l7.667 12.792c.07.125.108.257.114.396a.63.63 0 0 1-.093.375.842.842 0 0 1-.271.27.728.728 0 0 1-.394.105H2.33Zm7.664-2.5c.211 0 .39-.072.536-.214a.714.714 0 0 0 .218-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.531-.22.736.736 0 0 0-.536.215.714.714 0 0 0-.219.531c0 .212.072.39.215.536.143.146.32.219.531.219Zm0-2.5c.211 0 .39-.072.536-.216a.72.72 0 0 0 .218-.534v-2.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.531-.216.734.734 0 0 0-.536.216.72.72 0 0 0-.219.534v2.5c0 .212.072.39.215.534a.72.72 0 0 0 .531.216Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="success-icon" viewBox="0 0 20 20">\n      <path d="m8.938 10.875-1.25-1.23a.718.718 0 0 0-.521-.228.718.718 0 0 0-.521.229.73.73 0 0 0 0 1.062l1.77 1.771c.153.153.327.23.521.23a.718.718 0 0 0 .521-.23l3.896-3.896a.73.73 0 0 0 0-1.062.718.718 0 0 0-.52-.23.718.718 0 0 0-.521.23l-3.376 3.354ZM10 18a7.796 7.796 0 0 1-3.104-.625 8.065 8.065 0 0 1-2.552-1.719 8.064 8.064 0 0 1-1.719-2.552A7.797 7.797 0 0 1 2 10c0-1.111.208-2.15.625-3.115a8.064 8.064 0 0 1 4.27-4.26A7.797 7.797 0 0 1 10 2c1.111 0 2.15.208 3.115.625a8.096 8.096 0 0 1 4.26 4.26C17.792 7.851 18 8.89 18 10a7.797 7.797 0 0 1-.625 3.104 8.066 8.066 0 0 1-4.26 4.271A7.774 7.774 0 0 1 10 18Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="info-icon" viewBox="0 0 20 20">\n      <path d="M9.996 14c.21 0 .39-.072.535-.216a.72.72 0 0 0 .219-.534v-3.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.532-.216.734.734 0 0 0-.535.216.72.72 0 0 0-.219.534v3.5c0 .213.071.39.214.534a.72.72 0 0 0 .532.216Zm0-6.5c.21 0 .39-.071.535-.214a.714.714 0 0 0 .219-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.532-.219.736.736 0 0 0-.535.214.714.714 0 0 0-.219.532c0 .21.071.39.214.535.143.146.32.219.532.219Zm.01 10.5a7.81 7.81 0 0 1-3.11-.625 8.065 8.065 0 0 1-2.552-1.719 8.066 8.066 0 0 1-1.719-2.551A7.818 7.818 0 0 1 2 9.99c0-1.104.208-2.14.625-3.105a8.066 8.066 0 0 1 4.27-4.26A7.818 7.818 0 0 1 10.009 2a7.75 7.75 0 0 1 3.106.625 8.083 8.083 0 0 1 4.26 4.265A7.77 7.77 0 0 1 18 9.994a7.81 7.81 0 0 1-.625 3.11 8.066 8.066 0 0 1-1.719 2.552 8.083 8.083 0 0 1-2.546 1.719 7.77 7.77 0 0 1-3.104.625Z"/>\n      </symbol>\n      </svg>','\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n        <symbol id="anchor-link-icon" viewBox="0 0 12 6">\n          <path d="M8.9176 0.083252H7.1676C6.84677 0.083252 6.58427 0.345752 6.58427 0.666585C6.58427 0.987419 6.84677 1.24992 7.1676 1.24992H8.9176C9.8801 1.24992 10.6676 2.03742 10.6676 2.99992C10.6676 3.96242 9.8801 4.74992 8.9176 4.74992H7.1676C6.84677 4.74992 6.58427 5.01242 6.58427 5.33325C6.58427 5.65409 6.84677 5.91659 7.1676 5.91659H8.9176C10.5276 5.91659 11.8343 4.60992 11.8343 2.99992C11.8343 1.38992 10.5276 0.083252 8.9176 0.083252ZM3.6676 2.99992C3.6676 3.32075 3.9301 3.58325 4.25094 3.58325H7.75094C8.07177 3.58325 8.33427 3.32075 8.33427 2.99992C8.33427 2.67909 8.07177 2.41659 7.75094 2.41659H4.25094C3.9301 2.41659 3.6676 2.67909 3.6676 2.99992ZM4.83427 4.74992H3.08427C2.12177 4.74992 1.33427 3.96242 1.33427 2.99992C1.33427 2.03742 2.12177 1.24992 3.08427 1.24992H4.83427C5.1551 1.24992 5.4176 0.987419 5.4176 0.666585C5.4176 0.345752 5.1551 0.083252 4.83427 0.083252H3.08427C1.47427 0.083252 0.167603 1.38992 0.167603 2.99992C0.167603 4.60992 1.47427 5.91659 3.08427 5.91659H4.83427C5.1551 5.91659 5.4176 5.65409 5.4176 5.33325C5.4176 5.01242 5.1551 4.74992 4.83427 4.74992Z" />\n        </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n      <path d="M5.025 14H6.95c.183 0 .35-.029.5-.087a1.24 1.24 0 0 0 .425-.288L13.65 7.9a.622.622 0 0 0 .2-.45.622.622 0 0 0-.2-.45l-2.3-2.3a.622.622 0 0 0-.45-.2.622.622 0 0 0-.45.2l-5.725 5.775a1.24 1.24 0 0 0-.287.425 1.37 1.37 0 0 0-.088.5v1.925c0 .184.067.342.2.475a.65.65 0 0 0 .475.2Zm5.325 0h5.725c.367 0 .68-.129.938-.387.258-.258.387-.57.387-.938 0-.366-.13-.679-.387-.937a1.277 1.277 0 0 0-.938-.388H13L10.35 14Zm-5.5 4.4-2.4 2.4c-.417.417-.896.509-1.437.275C.47 20.842.2 20.434.2 19.85V3.55c0-.733.258-1.358.775-1.875A2.554 2.554 0 0 1 2.85.9h16.3c.733 0 1.358.259 1.875.775.517.517.775 1.142.775 1.875v12.2c0 .734-.258 1.359-.775 1.875a2.554 2.554 0 0 1-1.875.775H4.85Z"/>\n      </symbol>\n      </svg>','<h1>Text Field</h1><p class="description">Text fields let users enter and edit text.</p>\n\n<aside class="MuiCallout-root MuiCallout-warning">\n            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">\n<use class="MuiCode-copied-icon" xlink:href="#warning-icon" />\n</svg>\n            <div class="MuiCallout-content">\n            <p><strong>TextField</strong> component has been removed in <a href="https://github.com/mui/material-ui/releases/tag/v5.11.5"><code>@mui/joy@5.0.0-alpha.63</code></a>. We recommend using <a href="/joy-ui/react-input/"><code>Input</code></a>, <code>FormControl</code> and <code>FormLabel</code> instead.</p>\n<p>To learn more why it has been removed, visit the <a href="https://github.com/mui/material-ui/issues/34176">RFC</a>.</p>\n\n</div></aside><h2 id="migration">Migration<a aria-labelledby="migration" class="anchor-link" href="#migration" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="migration"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><h3 id="codemod">Codemod<a aria-labelledby="codemod" class="anchor-link" href="#codemod" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="codemod"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>Run this <a href="https://github.com/mui/material-ui/blob/master/packages/mui-codemod/README.md#joy-text-field-to-input">codemod</a> in your project&#39;s terminal:</p>\n<div class="MuiCode-root"><pre><code class="language-bash">npx @mui/codemod v5.0.0/joy-text-field-to-input <span class="token operator">&lt;</span>path<span class="token operator">></span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><use class="MuiCode-copy-icon" xlink:href="#copy-icon" /><use class="MuiCode-copied-icon" xlink:href="#copied-icon" /></svg><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<p>It will go through all files under <code>&lt;path&gt;</code> and replace <code>&lt;TextField /&gt;</code> with the <code>&lt;Input /&gt;</code> composition.</p>\n<h3 id="manual">Manual<a aria-labelledby="manual" class="anchor-link" href="#manual" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="manual"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>Replace the <code>TextField</code> with composition:</p>\n<div class="MuiCode-root"><pre><code class="language-diff"><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">import TextField from \'@mui/joy/TextField\';\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">import FormControl from \'@mui/joy/FormControl\';\n</span><span class="token prefix inserted">+</span><span class="token line">import FormLabel from \'@mui/joy/FormLabel\';\n</span><span class="token prefix inserted">+</span><span class="token line">import FormHelperText from \'@mui/joy/FormHelperText\';\n</span><span class="token prefix inserted">+</span><span class="token line">import Input from \'@mui/joy/Input\';\n</span></span>\n<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">&lt;TextField\n</span><span class="token prefix deleted">-</span><span class="token line">  id="Id"\n</span><span class="token prefix deleted">-</span><span class="token line">  label="Label"\n</span><span class="token prefix deleted">-</span><span class="token line">  placeholder="Placeholder"\n</span><span class="token prefix deleted">-</span><span class="token line">  helperText="Help!"\n</span><span class="token prefix deleted">-</span><span class="token line">  name="Name"\n</span><span class="token prefix deleted">-</span><span class="token line">  type="tel"\n</span><span class="token prefix deleted">-</span><span class="token line">  autoComplete="on"\n</span><span class="token prefix deleted">-</span><span class="token line">  autoFocus\n</span><span class="token prefix deleted">-</span><span class="token line">  error\n</span><span class="token prefix deleted">-</span><span class="token line">  required\n</span><span class="token prefix deleted">-</span><span class="token line">  fullWidth\n</span><span class="token prefix deleted">-</span><span class="token line">  defaultValue="DefaultValue"\n</span><span class="token prefix deleted">-</span><span class="token line">  size="sm"\n</span><span class="token prefix deleted">-</span><span class="token line">  color="primary"\n</span><span class="token prefix deleted">-</span><span class="token line">  variant="outlined"\n</span><span class="token prefix deleted">-</span><span class="token line">/>\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">&lt;FormControl\n</span><span class="token prefix inserted">+</span><span class="token line">  id="Id"\n</span><span class="token prefix inserted">+</span><span class="token line">  required\n</span><span class="token prefix inserted">+</span><span class="token line">  size="sm"\n</span><span class="token prefix inserted">+</span><span class="token line">  color="primary">\n</span><span class="token prefix inserted">+</span><span class="token line">  &lt;FormLabel>\n</span><span class="token prefix inserted">+</span><span class="token line">    Label\n</span><span class="token prefix inserted">+</span><span class="token line">  &lt;/FormLabel>\n</span><span class="token prefix inserted">+</span><span class="token line">  &lt;Input\n</span><span class="token prefix inserted">+</span><span class="token line">    placeholder="Placeholder"\n</span><span class="token prefix inserted">+</span><span class="token line">    name="Name"\n</span><span class="token prefix inserted">+</span><span class="token line">    type="tel"\n</span><span class="token prefix inserted">+</span><span class="token line">    autoComplete="on"\n</span><span class="token prefix inserted">+</span><span class="token line">    autoFocus\n</span><span class="token prefix inserted">+</span><span class="token line">    error\n</span><span class="token prefix inserted">+</span><span class="token line">    fullWidth\n</span><span class="token prefix inserted">+</span><span class="token line">    defaultValue="DefaultValue"\n</span><span class="token prefix inserted">+</span><span class="token line">    variant="outlined" />\n</span><span class="token prefix inserted">+</span><span class="token line">  &lt;FormHelperText>\n</span><span class="token prefix inserted">+</span><span class="token line">    Help!\n</span><span class="token prefix inserted">+</span><span class="token line">  &lt;/FormHelperText>\n</span><span class="token prefix inserted">+</span><span class="token line">&lt;/FormControl></span></span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><use class="MuiCode-copy-icon" xlink:href="#copy-icon" /><use class="MuiCode-copied-icon" xlink:href="#copied-icon" /></svg><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n'],toc:[{text:"Migration",level:2,hash:"migration",children:[{text:"Codemod",level:3,hash:"codemod"},{text:"Manual",level:3,hash:"manual"}]}],title:"React Text Field component",headers:{productId:"joy-ui",title:"React Text Field component",githubLabel:"component: text field",components:[],hooks:[]}}},i={};i.scope={process:{},import:{}};var p={},c={},d=s(785893);function r(){return(0,d.jsx)(t.Z,(0,o.Z)({},a))}},165492:function(e,n,s){"use strict";s.d(n,{Z:function(){return y}});var a,o=s(163804),t=s(667294),l=s(45697),i=s.n(l),p=s(811163),c=s(721923),d=s(875795),r=s(608144),m=s(772184),u=s(400438),k=s(692124),f=s(261589),h=s(703391),x=s(662208),v=s(785893);function g(e){var n=e.mode,s=(0,d.tv)().setMode;return t.useEffect(function(){s(n)},[n,s]),null}function y(e){var n=(0,c.Z)(),s=(0,p.useRouter)(),l=(0,m.ln)(s.asPath).canonicalAs,i=e.disableAd,y=void 0!==i&&i,b=e.disableToc,C=e.disableCssVarsProvider,w=e.demos,M=void 0===w?{}:w,F=e.docs,H=e.demoComponents,Z=e.srcComponents,j=F[(0,k.useUserLanguage)()]||F.en,T=l.startsWith("/joy-ui/")&&!(void 0!==C&&C),L=T?d.lL:t.Fragment,A=T?f.default:t.Fragment,I=(0,o.Z)({},T&&{mode:n.palette.mode});return(0,v.jsxs)(u.Z,{description:j.description,disableAd:y,disableToc:void 0!==b&&b,location:j.location,title:j.title,toc:j.toc,children:[y?null:a||(a=(0,v.jsx)(f.default,{children:(0,v.jsx)(x.Z,{children:(0,v.jsx)(h.ZP,{})})})),(0,v.jsxs)(L,{children:[T&&(0,v.jsx)(g,{mode:n.palette.mode}),j.rendered.map(function(e,s){return(0,v.jsx)(r.Z,{demoComponents:H,demos:M,disableAd:y,localizedDoc:j,renderedMarkdownOrDemo:e,srcComponents:Z,theme:n,WrapperComponent:A,wrapperProps:I},"demos-section-".concat(s))})]})]})}g.propTypes={mode:i().oneOf(["light","dark"])}},762597:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/joy-ui/react-text-field",function(){return s(694497)}])}},function(e){e.O(0,[52996,8365,82961,61532,41159,41512,82700,27830,7565,36195,17007,43374,48956,98826,16577,94665,21011,43765,95965,44749,67461,33335,49774,92888,40179],function(){return e(e.s=762597)}),_N_E=e.O()}]);