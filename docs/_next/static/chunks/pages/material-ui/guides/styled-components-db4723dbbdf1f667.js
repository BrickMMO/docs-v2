(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82872],{59126:function(n,e,s){"use strict";s.r(e),s.d(e,{default:function(){return r}});var a={};s.r(a),s.d(a,{demoComponents:function(){return c},demos:function(){return l},docs:function(){return i},srcComponents:function(){return p}});var o=s(163804);s(667294);var t=s(165492),i={en:{description:"Learn how to use styled-components instead of Emotion with Material UI.",location:"/brickmmo-docs-v2/data/material/guides/styled-components/styled-components.md",rendered:['<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="error-icon" viewBox="0 0 20 20">\n      <path fill-rule="evenodd" d="M2 7.4v5.2a2 2 0 0 0 .586 1.414l3.4 3.4A2 2 0 0 0 7.4 18h5.2a2 2 0 0 0 1.414-.586l3.4-3.4A2 2 0 0 0 18 12.6V7.4a2 2 0 0 0-.586-1.414l-3.4-3.4A2 2 0 0 0 12.6 2H7.4a2 2 0 0 0-1.414.586l-3.4 3.4A2 2 0 0 0 2 7.4Zm11.03-.43a.75.75 0 0 1 0 1.06L11.06 10l1.97 1.97a.75.75 0 1 1-1.06 1.06L10 11.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L8.94 10 6.97 8.03a.75.75 0 0 1 1.06-1.06L10 8.94l1.97-1.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="warning-icon" viewBox="0 0 20 20">\n      <path d="M2.33 17a.735.735 0 0 1-.665-.375.631.631 0 0 1-.094-.375.898.898 0 0 1 .115-.396L9.353 3.062a.621.621 0 0 1 .281-.27.85.85 0 0 1 .729 0 .622.622 0 0 1 .281.27l7.667 12.792c.07.125.108.257.114.396a.63.63 0 0 1-.093.375.842.842 0 0 1-.271.27.728.728 0 0 1-.394.105H2.33Zm7.664-2.5c.211 0 .39-.072.536-.214a.714.714 0 0 0 .218-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.531-.22.736.736 0 0 0-.536.215.714.714 0 0 0-.219.531c0 .212.072.39.215.536.143.146.32.219.531.219Zm0-2.5c.211 0 .39-.072.536-.216a.72.72 0 0 0 .218-.534v-2.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.531-.216.734.734 0 0 0-.536.216.72.72 0 0 0-.219.534v2.5c0 .212.072.39.215.534a.72.72 0 0 0 .531.216Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="success-icon" viewBox="0 0 20 20">\n      <path d="m8.938 10.875-1.25-1.23a.718.718 0 0 0-.521-.228.718.718 0 0 0-.521.229.73.73 0 0 0 0 1.062l1.77 1.771c.153.153.327.23.521.23a.718.718 0 0 0 .521-.23l3.896-3.896a.73.73 0 0 0 0-1.062.718.718 0 0 0-.52-.23.718.718 0 0 0-.521.23l-3.376 3.354ZM10 18a7.796 7.796 0 0 1-3.104-.625 8.065 8.065 0 0 1-2.552-1.719 8.064 8.064 0 0 1-1.719-2.552A7.797 7.797 0 0 1 2 10c0-1.111.208-2.15.625-3.115a8.064 8.064 0 0 1 4.27-4.26A7.797 7.797 0 0 1 10 2c1.111 0 2.15.208 3.115.625a8.096 8.096 0 0 1 4.26 4.26C17.792 7.851 18 8.89 18 10a7.797 7.797 0 0 1-.625 3.104 8.066 8.066 0 0 1-4.26 4.271A7.774 7.774 0 0 1 10 18Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="info-icon" viewBox="0 0 20 20">\n      <path d="M9.996 14c.21 0 .39-.072.535-.216a.72.72 0 0 0 .219-.534v-3.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.532-.216.734.734 0 0 0-.535.216.72.72 0 0 0-.219.534v3.5c0 .213.071.39.214.534a.72.72 0 0 0 .532.216Zm0-6.5c.21 0 .39-.071.535-.214a.714.714 0 0 0 .219-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.532-.219.736.736 0 0 0-.535.214.714.714 0 0 0-.219.532c0 .21.071.39.214.535.143.146.32.219.532.219Zm.01 10.5a7.81 7.81 0 0 1-3.11-.625 8.065 8.065 0 0 1-2.552-1.719 8.066 8.066 0 0 1-1.719-2.551A7.818 7.818 0 0 1 2 9.99c0-1.104.208-2.14.625-3.105a8.066 8.066 0 0 1 4.27-4.26A7.818 7.818 0 0 1 10.009 2a7.75 7.75 0 0 1 3.106.625 8.083 8.083 0 0 1 4.26 4.265A7.77 7.77 0 0 1 18 9.994a7.81 7.81 0 0 1-.625 3.11 8.066 8.066 0 0 1-1.719 2.552 8.083 8.083 0 0 1-2.546 1.719 7.77 7.77 0 0 1-3.104.625Z"/>\n      </symbol>\n      </svg>','\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n        <symbol id="anchor-link-icon" viewBox="0 0 12 6">\n          <path d="M8.9176 0.083252H7.1676C6.84677 0.083252 6.58427 0.345752 6.58427 0.666585C6.58427 0.987419 6.84677 1.24992 7.1676 1.24992H8.9176C9.8801 1.24992 10.6676 2.03742 10.6676 2.99992C10.6676 3.96242 9.8801 4.74992 8.9176 4.74992H7.1676C6.84677 4.74992 6.58427 5.01242 6.58427 5.33325C6.58427 5.65409 6.84677 5.91659 7.1676 5.91659H8.9176C10.5276 5.91659 11.8343 4.60992 11.8343 2.99992C11.8343 1.38992 10.5276 0.083252 8.9176 0.083252ZM3.6676 2.99992C3.6676 3.32075 3.9301 3.58325 4.25094 3.58325H7.75094C8.07177 3.58325 8.33427 3.32075 8.33427 2.99992C8.33427 2.67909 8.07177 2.41659 7.75094 2.41659H4.25094C3.9301 2.41659 3.6676 2.67909 3.6676 2.99992ZM4.83427 4.74992H3.08427C2.12177 4.74992 1.33427 3.96242 1.33427 2.99992C1.33427 2.03742 2.12177 1.24992 3.08427 1.24992H4.83427C5.1551 1.24992 5.4176 0.987419 5.4176 0.666585C5.4176 0.345752 5.1551 0.083252 4.83427 0.083252H3.08427C1.47427 0.083252 0.167603 1.38992 0.167603 2.99992C0.167603 4.60992 1.47427 5.91659 3.08427 5.91659H4.83427C5.1551 5.91659 5.4176 5.65409 5.4176 5.33325C5.4176 5.01242 5.1551 4.74992 4.83427 4.74992Z" />\n        </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n      <path d="M5.025 14H6.95c.183 0 .35-.029.5-.087a1.24 1.24 0 0 0 .425-.288L13.65 7.9a.622.622 0 0 0 .2-.45.622.622 0 0 0-.2-.45l-2.3-2.3a.622.622 0 0 0-.45-.2.622.622 0 0 0-.45.2l-5.725 5.775a1.24 1.24 0 0 0-.287.425 1.37 1.37 0 0 0-.088.5v1.925c0 .184.067.342.2.475a.65.65 0 0 0 .475.2Zm5.325 0h5.725c.367 0 .68-.129.938-.387.258-.258.387-.57.387-.938 0-.366-.13-.679-.387-.937a1.277 1.277 0 0 0-.938-.388H13L10.35 14Zm-5.5 4.4-2.4 2.4c-.417.417-.896.509-1.437.275C.47 20.842.2 20.434.2 19.85V3.55c0-.733.258-1.358.775-1.875A2.554 2.554 0 0 1 2.85.9h16.3c.733 0 1.358.259 1.875.775.517.517.775 1.142.775 1.875v12.2c0 .734-.258 1.359-.775 1.875a2.554 2.554 0 0 1-1.875.775H4.85Z"/>\n      </symbol>\n      </svg>','<h1>Using styled-components</h1><p class="description">Learn how to use styled-components instead of Emotion with Material UI.</p>\n\n<aside class="MuiCallout-root MuiCallout-error">\n            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">\n<use class="MuiCode-copied-icon" xlink:href="#error-icon" />\n</svg>\n            <div class="MuiCallout-content">\n            <p>As of late 2021, <a href="https://github.com/styled-components/styled-components">styled-components</a> is <strong>not compatible</strong> with server-rendered Material UI projects.\nThis is because <code>babel-plugin-styled-components</code> isn&#39;t able to work with the <code>styled()</code> utility inside <code>@mui</code> packages.\nSee <a href="https://github.com/mui/material-ui/issues/29742">this GitHub issue</a> for more details.</p>\n<p>We <strong>strongly recommend</strong> using Emotion for SSR projects.</p>\n\n</div></aside><p>By default, Material UI uses <a href="https://github.com/emotion-js/emotion">Emotion</a> to generate CSS styles.\nAll components rely on the <code>styled()</code> API to inject CSS into the page.\nThis API is supported by multiple popular styling libraries, which makes it possible to switch between them in Material UI.</p>\n<p>MUI provides two different packages to wrap your chosen styling solution for compatibility with Material UI:</p>\n<ul>\n<li><code>@mui/styled-engine</code>: a thin wrapper around Emotion&#39;s <a href="https://emotion.sh/docs/styled"><code>styled()</code></a> API that includes required utilities like the <code>&lt;GlobalStyles /&gt;</code> component, the <code>css</code> and <code>keyframe</code> helpers, and more. This is the default, and you do not need to install it.</li>\n<li><code>@mui/styled-engine-sc</code>: a similar wrapper, but specifically tailored for styled-components. You must install and implement this package to use styled-components with Material UI.</li>\n</ul>\n<p>These two packages implement the same interface, making them interchangeable.</p>\n<h2 id="bundler-configuration">Bundler configuration<a aria-labelledby="bundler-configuration" class="anchor-link" href="#bundler-configuration" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="bundler-configuration"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>By default, <code>@mui/material</code> has <code>@mui/styled-engine</code> as a dependency.\nTo use styled-components, you need to configure your bundler to replace it with <code>@mui/styled-engine-sc</code>.</p>\n<h3 id="with-yarn">With yarn<a aria-labelledby="with-yarn" class="anchor-link" href="#with-yarn" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="with-yarn"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>If you&#39;re using yarn, you can configure it using a package resolution:</p>\n<p><strong>package.json</strong></p>\n<!-- #default-branch-switch -->\n\n<div class="MuiCode-root"><pre><code class="language-diff"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">{\n</span><span class="token prefix unchanged"> </span><span class="token line">  "dependencies": {\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">    "@mui/styled-engine": "latest"\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    "@mui/styled-engine": "npm:@mui/styled-engine-sc@latest"\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">  },\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  "resolutions": {\n</span><span class="token prefix inserted">+</span><span class="token line">    "@mui/styled-engine": "npm:@mui/styled-engine-sc@latest"\n</span><span class="token prefix inserted">+</span><span class="token line">  },\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">}</span></span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><use class="MuiCode-copy-icon" xlink:href="#copy-icon" /><use class="MuiCode-copied-icon" xlink:href="#copied-icon" /></svg><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h3 id="with-npm">With npm<a aria-labelledby="with-npm" class="anchor-link" href="#with-npm" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="with-npm"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>Because package resolutions aren&#39;t available with npm, you must update your bundler&#39;s config to add this alias.\nThe example below shows how to do this with Webpack:</p>\n<p><strong>webpack.config.js</strong></p>\n<div class="MuiCode-root"><pre><code class="language-diff"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">module.exports = {\n</span><span class="token prefix unchanged"> </span><span class="token line">  //...\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  resolve: {\n</span><span class="token prefix inserted">+</span><span class="token line">    alias: {\n</span><span class="token prefix inserted">+</span><span class="token line">      \'@mui/styled-engine\': \'@mui/styled-engine-sc\'\n</span><span class="token prefix inserted">+</span><span class="token line">    },\n</span><span class="token prefix inserted">+</span><span class="token line">  },\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">};</span></span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><use class="MuiCode-copy-icon" xlink:href="#copy-icon" /><use class="MuiCode-copied-icon" xlink:href="#copied-icon" /></svg><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<p>For TypeScript, you must also update the <code>tsconfig.json</code> as shown here:</p>\n<p><strong>tsconfig.json</strong></p>\n<div class="MuiCode-root"><pre><code class="language-diff"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">{\n</span><span class="token prefix unchanged"> </span><span class="token line">  "compilerOptions": {\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    "paths": {\n</span><span class="token prefix inserted">+</span><span class="token line">      "@mui/styled-engine": ["./node_modules/@mui/styled-engine-sc"]\n</span><span class="token prefix inserted">+</span><span class="token line">    }\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">  },\n</span><span class="token prefix unchanged"> </span><span class="token line">}</span></span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><use class="MuiCode-copy-icon" xlink:href="#copy-icon" /><use class="MuiCode-copied-icon" xlink:href="#copied-icon" /></svg><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h3 id="next-js">Next.js<a aria-labelledby="next-js" class="anchor-link" href="#next-js" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="next-js"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p><strong>next.config.js</strong></p>\n<div class="MuiCode-root"><pre><code class="language-diff"><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">const withTM = require(\'next-transpile-modules\')([\n</span><span class="token prefix inserted">+</span><span class="token line">  \'@mui/material\',\n</span><span class="token prefix inserted">+</span><span class="token line">  \'@mui/system\',\n</span><span class="token prefix inserted">+</span><span class="token line">  \'@mui/icons-material\', // If @mui/icons-material is being used\n</span><span class="token prefix inserted">+</span><span class="token line">]);\n</span></span>\n<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">module.exports = withTM({\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">webpack: (config) => {\n</span><span class="token prefix unchanged"> </span><span class="token line">  config.resolve.alias = {\n</span><span class="token prefix unchanged"> </span><span class="token line">    ...config.resolve.alias,\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    \'@mui/styled-engine\': \'@mui/styled-engine-sc\',\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   };\n</span><span class="token prefix unchanged"> </span><span class="token line">   return config;\n</span><span class="token prefix unchanged"> </span><span class="token line"> }\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">});</span></span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><use class="MuiCode-copy-icon" xlink:href="#copy-icon" /><use class="MuiCode-copied-icon" xlink:href="#copied-icon" /></svg><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<aside class="MuiCallout-root MuiCallout-info">\n            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">\n<use class="MuiCode-copied-icon" xlink:href="#info-icon" />\n</svg>\n            <div class="MuiCallout-content">\n            <p><strong>Versions compatibility</strong></p>\n<p>To ensure compatibility, it&#39;s essential to align the major version of <code>@mui/styled-engine-sc</code> with that of the <code>styled-components</code> package you&#39;re using. For instance, if you opt for <code>styled-components</code> version 5, it&#39;s necessary to use <code>@mui/styled-engine-sc</code> version 5. Similarly, if your preference is <code>styled-components</code> version 6, you&#39;ll need to upgrade <code>@mui/styled-engine-sc</code> to its version 6, which is currently in an alpha state.</p>\n\n</div></aside><h2 id="ready-to-use-examples">Ready-to-use examples<a aria-labelledby="ready-to-use-examples" class="anchor-link" href="#ready-to-use-examples" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="ready-to-use-examples"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>MUI provides boilerplate examples of Create React App with Material UI and styled-components in both JavaScript and TypeScript:</p>\n<!-- #default-branch-switch -->\n\n<ul>\n<li><a href="https://github.com/mui/material-ui/tree/master/examples/material-ui-cra-styled-components">Material UI + CRA + styled-components (JavaScript)</a></li>\n<li><a href="https://github.com/mui/material-ui/tree/master/examples/material-ui-cra-styled-components-ts">Material UI + CRA + styled-components (TypeScript)</a></li>\n</ul>\n<aside class="MuiCallout-root MuiCallout-warning">\n            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">\n<use class="MuiCode-copied-icon" xlink:href="#warning-icon" />\n</svg>\n            <div class="MuiCallout-content">\n            <p><code>@emotion/react</code>, <code>@emotion/styled</code>, and <code>styled-components</code> are optional peer dependencies of <code>@mui/material</code>, so you need to install them yourself.\nSee the <a href="/material-ui/getting-started/installation/">Installation guide</a> for more info.</p>\n\n</div></aside>'],toc:[{text:"Bundler configuration",level:2,hash:"bundler-configuration",children:[{text:"With yarn",level:3,hash:"with-yarn"},{text:"With npm",level:3,hash:"with-npm"},{text:"Next.js",level:3,hash:"next-js"}]},{text:"Ready-to-use examples",level:2,hash:"ready-to-use-examples",children:[]}],title:"Using styled-components",headers:{components:[]}}},l={};l.scope={process:{},import:{}};var c={},p={},d=s(785893);function r(){return(0,d.jsx)(t.Z,(0,o.Z)({},a))}},165492:function(n,e,s){"use strict";s.d(e,{Z:function(){return x}});var a,o=s(163804),t=s(667294),i=s(45697),l=s.n(i),c=s(811163),p=s(721923),d=s(875795),r=s(608144),u=s(772184),h=s(400438),m=s(692124),g=s(261589),y=s(703391),f=s(662208),k=s(785893);function v(n){var e=n.mode,s=(0,d.tv)().setMode;return t.useEffect(function(){s(e)},[e,s]),null}function x(n){var e=(0,p.Z)(),s=(0,c.useRouter)(),i=(0,u.ln)(s.asPath).canonicalAs,l=n.disableAd,x=void 0!==l&&l,b=n.disableToc,w=n.disableCssVarsProvider,C=n.demos,M=void 0===C?{}:C,j=n.docs,I=n.demoComponents,Z=n.srcComponents,A=j[(0,m.useUserLanguage)()]||j.en,H=i.startsWith("/joy-ui/")&&!(void 0!==w&&w),B=H?d.lL:t.Fragment,T=H?g.default:t.Fragment,S=(0,o.Z)({},H&&{mode:e.palette.mode});return(0,k.jsxs)(h.Z,{description:A.description,disableAd:x,disableToc:void 0!==b&&b,location:A.location,title:A.title,toc:A.toc,children:[x?null:a||(a=(0,k.jsx)(g.default,{children:(0,k.jsx)(f.Z,{children:(0,k.jsx)(y.ZP,{})})})),(0,k.jsxs)(B,{children:[H&&(0,k.jsx)(v,{mode:e.palette.mode}),A.rendered.map(function(n,s){return(0,k.jsx)(r.Z,{demoComponents:I,demos:M,disableAd:x,localizedDoc:A,renderedMarkdownOrDemo:n,srcComponents:Z,theme:e,WrapperComponent:T,wrapperProps:S},"demos-section-".concat(s))})]})]})}v.propTypes={mode:l().oneOf(["light","dark"])}},228896:function(n,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/guides/styled-components",function(){return s(59126)}])}},function(n){n.O(0,[52996,8365,82961,61532,41159,41512,82700,27830,7565,36195,17007,43374,48956,98826,16577,94665,21011,43765,95965,44749,67461,33335,49774,92888,40179],function(){return n(n.s=228896)}),_N_E=n.O()}]);