(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42096],{908366:function(n,a,e){"use strict";var t=e(163804),s=e(80117),o=e(667294),i=e(490512),c=e(829624),r=e(602688),l=e(424633),p=e(179477),u=e(231505),g=e(785893),d=["className"],h=function(n){var a=n.classes;return(0,c.Z)({root:["root"]},u.E,a)},m=(0,r.ZP)(p.Z,{name:"MuiAlertTitle",slot:"Root",overridesResolver:function(n,a){return a.root}})(function(n){return{fontWeight:n.theme.typography.fontWeightMedium,marginTop:-2}}),k=o.forwardRef(function(n,a){var e=(0,l.Z)({props:n,name:"MuiAlertTitle"}),o=e.className,c=(0,s.Z)(e,d),r=h(e);return(0,g.jsx)(m,(0,t.Z)({gutterBottom:!0,component:"div",ownerState:e,ref:a,className:(0,i.default)(r.root,o)},c))});a.Z=k},231505:function(n,a,e){"use strict";e.d(a,{E:function(){return o}});var t=e(173729),s=e(899933);function o(n){return(0,s.Z)("MuiAlertTitle",n)}var i=(0,t.Z)("MuiAlertTitle",["root"]);a.Z=i},971786:function(n,a,e){"use strict";e.r(a),e.d(a,{default:function(){return c}}),e(667294);var t,s=e(276435),o={en:{description:"Aggregation functions and summary rows are now available in the MUI X Premium Data Grid.",location:"/brickmmo-docs-v2/pages/blog/aggregation-functions.md",rendered:['<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="error-icon" viewBox="0 0 20 20">\n      <path fill-rule="evenodd" d="M2 7.4v5.2a2 2 0 0 0 .586 1.414l3.4 3.4A2 2 0 0 0 7.4 18h5.2a2 2 0 0 0 1.414-.586l3.4-3.4A2 2 0 0 0 18 12.6V7.4a2 2 0 0 0-.586-1.414l-3.4-3.4A2 2 0 0 0 12.6 2H7.4a2 2 0 0 0-1.414.586l-3.4 3.4A2 2 0 0 0 2 7.4Zm11.03-.43a.75.75 0 0 1 0 1.06L11.06 10l1.97 1.97a.75.75 0 1 1-1.06 1.06L10 11.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L8.94 10 6.97 8.03a.75.75 0 0 1 1.06-1.06L10 8.94l1.97-1.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="warning-icon" viewBox="0 0 20 20">\n      <path d="M2.33 17a.735.735 0 0 1-.665-.375.631.631 0 0 1-.094-.375.898.898 0 0 1 .115-.396L9.353 3.062a.621.621 0 0 1 .281-.27.85.85 0 0 1 .729 0 .622.622 0 0 1 .281.27l7.667 12.792c.07.125.108.257.114.396a.63.63 0 0 1-.093.375.842.842 0 0 1-.271.27.728.728 0 0 1-.394.105H2.33Zm7.664-2.5c.211 0 .39-.072.536-.214a.714.714 0 0 0 .218-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.531-.22.736.736 0 0 0-.536.215.714.714 0 0 0-.219.531c0 .212.072.39.215.536.143.146.32.219.531.219Zm0-2.5c.211 0 .39-.072.536-.216a.72.72 0 0 0 .218-.534v-2.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.531-.216.734.734 0 0 0-.536.216.72.72 0 0 0-.219.534v2.5c0 .212.072.39.215.534a.72.72 0 0 0 .531.216Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="success-icon" viewBox="0 0 20 20">\n      <path d="m8.938 10.875-1.25-1.23a.718.718 0 0 0-.521-.228.718.718 0 0 0-.521.229.73.73 0 0 0 0 1.062l1.77 1.771c.153.153.327.23.521.23a.718.718 0 0 0 .521-.23l3.896-3.896a.73.73 0 0 0 0-1.062.718.718 0 0 0-.52-.23.718.718 0 0 0-.521.23l-3.376 3.354ZM10 18a7.796 7.796 0 0 1-3.104-.625 8.065 8.065 0 0 1-2.552-1.719 8.064 8.064 0 0 1-1.719-2.552A7.797 7.797 0 0 1 2 10c0-1.111.208-2.15.625-3.115a8.064 8.064 0 0 1 4.27-4.26A7.797 7.797 0 0 1 10 2c1.111 0 2.15.208 3.115.625a8.096 8.096 0 0 1 4.26 4.26C17.792 7.851 18 8.89 18 10a7.797 7.797 0 0 1-.625 3.104 8.066 8.066 0 0 1-4.26 4.271A7.774 7.774 0 0 1 10 18Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="info-icon" viewBox="0 0 20 20">\n      <path d="M9.996 14c.21 0 .39-.072.535-.216a.72.72 0 0 0 .219-.534v-3.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.532-.216.734.734 0 0 0-.535.216.72.72 0 0 0-.219.534v3.5c0 .213.071.39.214.534a.72.72 0 0 0 .532.216Zm0-6.5c.21 0 .39-.071.535-.214a.714.714 0 0 0 .219-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.532-.219.736.736 0 0 0-.535.214.714.714 0 0 0-.219.532c0 .21.071.39.214.535.143.146.32.219.532.219Zm.01 10.5a7.81 7.81 0 0 1-3.11-.625 8.065 8.065 0 0 1-2.552-1.719 8.066 8.066 0 0 1-1.719-2.551A7.818 7.818 0 0 1 2 9.99c0-1.104.208-2.14.625-3.105a8.066 8.066 0 0 1 4.27-4.26A7.818 7.818 0 0 1 10.009 2a7.75 7.75 0 0 1 3.106.625 8.083 8.083 0 0 1 4.26 4.265A7.77 7.77 0 0 1 18 9.994a7.81 7.81 0 0 1-.625 3.11 8.066 8.066 0 0 1-1.719 2.552 8.083 8.083 0 0 1-2.546 1.719 7.77 7.77 0 0 1-3.104.625Z"/>\n      </symbol>\n      </svg>','\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n        <symbol id="anchor-link-icon" viewBox="0 0 12 6">\n          <path d="M8.9176 0.083252H7.1676C6.84677 0.083252 6.58427 0.345752 6.58427 0.666585C6.58427 0.987419 6.84677 1.24992 7.1676 1.24992H8.9176C9.8801 1.24992 10.6676 2.03742 10.6676 2.99992C10.6676 3.96242 9.8801 4.74992 8.9176 4.74992H7.1676C6.84677 4.74992 6.58427 5.01242 6.58427 5.33325C6.58427 5.65409 6.84677 5.91659 7.1676 5.91659H8.9176C10.5276 5.91659 11.8343 4.60992 11.8343 2.99992C11.8343 1.38992 10.5276 0.083252 8.9176 0.083252ZM3.6676 2.99992C3.6676 3.32075 3.9301 3.58325 4.25094 3.58325H7.75094C8.07177 3.58325 8.33427 3.32075 8.33427 2.99992C8.33427 2.67909 8.07177 2.41659 7.75094 2.41659H4.25094C3.9301 2.41659 3.6676 2.67909 3.6676 2.99992ZM4.83427 4.74992H3.08427C2.12177 4.74992 1.33427 3.96242 1.33427 2.99992C1.33427 2.03742 2.12177 1.24992 3.08427 1.24992H4.83427C5.1551 1.24992 5.4176 0.987419 5.4176 0.666585C5.4176 0.345752 5.1551 0.083252 4.83427 0.083252H3.08427C1.47427 0.083252 0.167603 1.38992 0.167603 2.99992C0.167603 4.60992 1.47427 5.91659 3.08427 5.91659H4.83427C5.1551 5.91659 5.4176 5.65409 5.4176 5.33325C5.4176 5.01242 5.1551 4.74992 4.83427 4.74992Z" />\n        </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n      <path d="M5.025 14H6.95c.183 0 .35-.029.5-.087a1.24 1.24 0 0 0 .425-.288L13.65 7.9a.622.622 0 0 0 .2-.45.622.622 0 0 0-.2-.45l-2.3-2.3a.622.622 0 0 0-.45-.2.622.622 0 0 0-.45.2l-5.725 5.775a1.24 1.24 0 0 0-.287.425 1.37 1.37 0 0 0-.088.5v1.925c0 .184.067.342.2.475a.65.65 0 0 0 .475.2Zm5.325 0h5.725c.367 0 .68-.129.938-.387.258-.258.387-.57.387-.938 0-.366-.13-.679-.387-.937a1.277 1.277 0 0 0-.938-.388H13L10.35 14Zm-5.5 4.4-2.4 2.4c-.417.417-.896.509-1.437.275C.47 20.842.2 20.434.2 19.85V3.55c0-.733.258-1.358.775-1.875A2.554 2.554 0 0 1 2.85.9h16.3c.733 0 1.358.259 1.875.775.517.517.775 1.142.775 1.875v12.2c0 .734-.258 1.359-.775 1.875a2.554 2.554 0 0 1-1.875.775H4.85Z"/>\n      </symbol>\n      </svg>','<p>If you&#39;ve ever worked with a data-heavy grid, then you understand how important it is for the end user to be able to set different perspectives on the data to gather the information they&#39;re looking for.\nBasic functions like filtering and sorting barely scratch the surface of their needs.</p>\n<p>The Premium Data Grid is all about enabling and empowering advanced use cases for data analysis.\nAnd in that spirit, we&#39;re overjoyed to announce that starting from <a href="https://github.com/mui/mui-x/releases/tag/v5.15.0">v5.15.0</a>, you can now use <a href="/x/react-data-grid/aggregation/">aggregation functions</a>, and with a couple of clicks, extract information like <strong>sum</strong>, <strong>average</strong>, <strong>count</strong>, and others.</p>\n<h2 id="wait-what-is-an-aggregation-function">Wait, what is an aggregation function?<a aria-labelledby="wait-what-is-an-aggregation-function" class="anchor-link" href="#wait-what-is-an-aggregation-function" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="wait-what-is-an-aggregation-function"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>Aggregation functions are used to return a computed result based on the values of a given column.\nFor example, you might have a list of financial transactions, and you want to get the sum of all transactions and display it in a summary row, as shown in the video below:</p>\n<video style="margin-bottom: 24px;" autoplay muted loop playsinline controls>\n  <source src="/static/blog/aggregation-functions/summary-row.mp4" type="video/mp4" />\n</video>\n\n<h2 id="intuitive-end-user-experience">Intuitive end-user experience<a aria-labelledby="intuitive-end-user-experience" class="anchor-link" href="#intuitive-end-user-experience" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="intuitive-end-user-experience"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>The <strong>Sum</strong> function showing a <strong>Total</strong> in summary rows is one of the most common use cases. But users can employ multiple aggregation functions in different columns simultaneously, and even combine with row grouping to aggregate children&#39;s data on each group.</p>\n<p>To make all that work well together, we knew that the focus had to be on creating the best end-user experience possible. The goal was to enable the majority of use cases right out of the box, without any need for significant customization.</p>\n<p>How easy can it be to get the average transaction value per user?\nCheck out the video below to see it in action:</p>\n<video style="margin-bottom: 24px;" autoplay muted loop playsinline controls>\n  <source src="/static/blog/aggregation-functions/with-row-grouping.mp4" type="video/mp4" />\n</video>\n\n<h2 id="customize-everything">Customize everything<a aria-labelledby="customize-everything" class="anchor-link" href="#customize-everything" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="customize-everything"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>The out-of-the-box experience is very important to us, but equally important is the ability to customize and extend the feature to suit your own use case.</p>\n<p>You can change the styles of every element involved, set automatic aggregations, choose which columns can be aggregated by which functions, and even create your own custom functions.\nIn the example below, we created a function to get the first value in alphabetical order:</p>\n<div class="MuiCode-root"><pre><code class="language-ts"><span class="token keyword">const</span> firstAlphabeticalAggregation<span class="token operator">:</span> GridAggregationFunction<span class="token operator">&lt;</span>\n  string<span class="token punctuation">,</span>\n  string <span class="token operator">|</span> <span class="token keyword">null</span>\n<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">apply</span><span class="token operator">:</span> <span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>params<span class="token punctuation">.</span>values<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">const</span> sortedValue <span class="token operator">=</span> params<span class="token punctuation">.</span>values<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n      a<span class="token punctuation">.</span><span class="token function">localeCompare</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> sortedValue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// The `label` defines what\'s displayed in the column header when this</span>\n  <span class="token comment">// aggregation is active.</span>\n  label<span class="token operator">:</span> <span class="token string">\'First Alphabetical\'</span><span class="token punctuation">,</span>\n  <span class="token comment">// The `types` property defines which type of columns can use this</span>\n  <span class="token comment">// aggregation function. Here, we only want to propose this aggregation</span>\n  <span class="token comment">// function for `string` columns. If not defined, aggregation will be</span>\n  <span class="token comment">// available for all column types.</span>\n  columnTypes<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'string\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><use class="MuiCode-copy-icon" xlink:href="#copy-icon" /><use class="MuiCode-copied-icon" xlink:href="#copied-icon" /></svg><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<video style="margin-bottom: 24px;" autoplay muted loop playsinline controls>\n  <source src="/static/blog/aggregation-functions/with-custom-functions.mp4" type="video/mp4" />\n</video>\n\n<h2 id="okay-im-in-how-can-i-get-started">Okay, I&#39;m in! How can I get started?<a aria-labelledby="okay-im-in-how-can-i-get-started" class="anchor-link" href="#okay-im-in-how-can-i-get-started" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="okay-im-in-how-can-i-get-started"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>Aggregation functions are available in <code>@mui/x-data-grid-premium</code>, version <code>5.15.0</code> or later.</p>\n<p>This feature is currently considered experimental as we continue to validate its API and refine our goals for it.\nBut it is stable, and the API most likely will not change significantly.</p>\n<p>You can activate the feature with the <code>experimentalFeatures</code> prop:</p>\n<div class="MuiCode-root"><pre><code class="language-tsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DataGridPremium</span></span> <span class="token attr-name">experimentalFeatures</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> aggregation<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>otherProps<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</code></pre><button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><use class="MuiCode-copy-icon" xlink:href="#copy-icon" /><use class="MuiCode-copied-icon" xlink:href="#copied-icon" /></svg><span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<p>And that&#39;s it! That enables the <strong>Aggregation</strong> option on the column menu, which is available by default on columns of type number and string.</p>\n<h2 id="use-with-tree-data-and-more">Use with tree data and more<a aria-labelledby="use-with-tree-data-and-more" class="anchor-link" href="#use-with-tree-data-and-more" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="use-with-tree-data-and-more"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>We already mentioned that you could customize functions and use aggregation with row grouping. But there are a lot of other possibilities to explore!</p>\n<p>Please check out the feature&#39;s <a href="/x/react-data-grid/aggregation/">full documentation</a> to get a better overview of everything it has to offer.</p>\n<h2 id="row-pinning">Row pinning<a aria-labelledby="row-pinning" class="anchor-link" href="#row-pinning" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="row-pinning"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>The Aggregation footer row is powered by another new feature called <a href="/x/react-data-grid/row-pinning/">Row pinning</a>.\nIt enables you to pin rows to the top or bottom of your data grid.\nPinned rows are visible at all times while the user scrolls the grid vertically.</p>\n<video style="margin-bottom: 24px;" autoplay muted loop playsinline controls>\n  <source src="/static/blog/aggregation-functions/row-pinning.mp4" type="video/mp4" />\n</video>\n\n<p>Row pinning is available in the Pro and Premium Data Grids.</p>\n<p>Check out more details in the <a href="/x/react-data-grid/row-pinning/">Row pinning documentation</a>.</p>\n<h2 id="share-your-feedback">Share your feedback \uD83D\uDDE3<a aria-labelledby="share-your-feedback" class="anchor-link" href="#share-your-feedback" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="share-your-feedback"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p><strong>And if you&#39;re feeling generous, we&#39;re recruiting users to interview!</strong></p>\n<p>We hope you&#39;re excited about the new features as we are!</p>\n<p>As always, we&#39;re happy to hear from you.\nPlease feel free to open new issues to report bugs or suggest improvements.</p>\n<p>Moreover, we&#39;re planning MUI X v6, and we&#39;d love to hear more about your pain points and use cases.\nIf you want to help steer the direction of our components, please consider <a href="https://forms.gle/vsBv6CLPz9h57xg8A">contacting us</a> to schedule a 30-minute user interview session.</p>\n'],toc:[{text:"Wait, what is an aggregation function?",level:2,hash:"wait-what-is-an-aggregation-function",children:[]},{text:"Intuitive end-user experience",level:2,hash:"intuitive-end-user-experience",children:[]},{text:"Customize everything",level:2,hash:"customize-everything",children:[]},{text:"Okay, I&#39;m in! How can I get started?",level:2,hash:"okay-im-in-how-can-i-get-started",children:[]},{text:"Use with tree data and more",level:2,hash:"use-with-tree-data-and-more",children:[]},{text:"Row pinning",level:2,hash:"row-pinning",children:[]},{text:"Share your feedback \uD83D\uDDE3",level:2,hash:"share-your-feedback",children:[]}],title:"Aggregate data like in Excel, but easier!",headers:{title:"Aggregate data like in Excel, but easier!",description:"Aggregation functions and summary rows are now available in the MUI X Premium Data Grid.",date:"2022-08-01T00:00:00.000Z",authors:["josefreitas","flaviendelangle","cherniavskii"],tags:["MUI X","News"],card:"false",components:[],hooks:[]}}},i=e(785893);function c(){return t||(t=(0,i.jsx)(s.Z,{docs:o}))}},502196:function(n,a,e){"use strict";e.d(a,{Z:function(){return l}});var t=e(163804),s=e(777193);e(667294);var o=e(602688),i=e(858280),c=e(785893),r=(0,o.ZP)(i.Z)(function(n){var a=n.theme;return(0,s.Z)({paddingTop:"calc(var(--MuiDocs-header-height) + ".concat(a.spacing(4),")"),fontFamily:"Arial",maxWidth:"105ch"},a.breakpoints.up("lg"),{paddingLeft:a.spacing(8),paddingRight:a.spacing(8)})});function l(n){return(0,c.jsx)(r,(0,t.Z)({id:"main-content",maxWidth:!1},n))}},406687:function(n,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/aggregation-functions",function(){return e(971786)}])}},function(n){n.O(0,[52996,8364,41512,82700,27830,7565,36195,17007,43374,48956,98826,16577,43765,98147,78189,76435,49774,92888,40179],function(){return n(n.s=406687)}),_N_E=n.O()}]);