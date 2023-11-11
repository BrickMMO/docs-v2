(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42588],{350441:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return r}}),o(667294);var n=o(543285),i=o(59626),s=JSON.parse('{"props":{"children":{"type":{"name":"node"}},"color":{"type":{"name":"enum","description":"\'danger\'<br>&#124;&nbsp;\'neutral\'<br>&#124;&nbsp;\'primary\'<br>&#124;&nbsp;\'success\'<br>&#124;&nbsp;\'warning\'"},"default":"\'neutral\'","additionalInfo":{"joy-color":true}},"component":{"type":{"name":"elementType"}},"flex":{"type":{"name":"bool"},"default":"false"},"maxHeight":{"type":{"name":"union","description":"number<br>&#124;&nbsp;string"}},"minHeight":{"type":{"name":"union","description":"number<br>&#124;&nbsp;string"}},"objectFit":{"type":{"name":"enum","description":"\'-moz-initial\'<br>&#124;&nbsp;\'contain\'<br>&#124;&nbsp;\'cover\'<br>&#124;&nbsp;\'fill\'<br>&#124;&nbsp;\'inherit\'<br>&#124;&nbsp;\'initial\'<br>&#124;&nbsp;\'none\'<br>&#124;&nbsp;\'revert-layer\'<br>&#124;&nbsp;\'revert\'<br>&#124;&nbsp;\'scale-down\'<br>&#124;&nbsp;\'unset\'"},"default":"\'cover\'"},"ratio":{"type":{"name":"union","description":"number<br>&#124;&nbsp;string"},"default":"\'16 / 9\'"},"slotProps":{"type":{"name":"shape","description":"{ content?: func<br>&#124;&nbsp;object, root?: func<br>&#124;&nbsp;object }"},"default":"{}"},"slots":{"type":{"name":"shape","description":"{ content?: elementType, root?: elementType }"},"default":"{}","additionalInfo":{"slotsApi":true}},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}},"variant":{"type":{"name":"union","description":"\'outlined\'<br>&#124;&nbsp;\'plain\'<br>&#124;&nbsp;\'soft\'<br>&#124;&nbsp;\'solid\'<br>&#124;&nbsp;string"},"default":"\'soft\'","additionalInfo":{"joy-variant":true}}},"name":"AspectRatio","imports":["import AspectRatio from \'@mui/joy/AspectRatio\';","import { AspectRatio } from \'@mui/joy\';"],"styles":{"classes":[],"globalClasses":{},"name":"MuiAspectRatio"},"slots":[{"name":"root","description":"The component that renders the root.","default":"\'div\'","class":".MuiAspectRatio-root"},{"name":"content","description":"The component that renders the content.","default":"\'div\'","class":".MuiAspectRatio-content"}],"classes":{"classes":["colorContext","colorDanger","colorNeutral","colorPrimary","colorSuccess","colorWarning","variantOutlined","variantPlain","variantSoft","variantSolid"],"globalClasses":{}},"spread":true,"themeDefaultProps":true,"muiName":"JoyAspectRatio","forwardsRefTo":"HTMLDivElement","filename":"/packages/mui-joy/src/AspectRatio/AspectRatio.tsx","inheritance":null,"demos":"<ul><li><a href=\\"/joy-ui/react-aspect-ratio/\\">Aspect Ratio</a></li>\\n<li><a href=\\"/joy-ui/react-skeleton/\\">Skeleton</a></li></ul>","cssComponent":false}'),a=o(785893);function r(e){var t=e.descriptions,o=e.pageContent;return(0,a.jsx)(n.Z,{descriptions:t,pageContent:o})}r.getInitialProps=function(){var e=o(727137);return{descriptions:(0,i.Z)(e),pageContent:s}}},573302:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/joy-ui/api/aspect-ratio",function(){return o(350441)}])},727137:function(e,t,o){var n={"./aspect-ratio.json":930417,"translations/api-docs-joy/aspect-ratio/aspect-ratio.json":930417};function i(e){return o(s(e))}function s(e){if(!o.o(n,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=s,e.exports=i,i.id=727137},930417:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"children":{"description":"Used to render icon or text elements inside the AspectRatio if <code>src</code> is not set. This can be an element, or just a string."},"color":{"description":"The color of the component. It supports those theme colors that make sense for this component."},"component":{"description":"The component used for the root node. Either a string to use a HTML element or a component."},"flex":{"description":"By default, the AspectRatio will maintain the aspect ratio of its content. Set this prop to <code>true</code> when the container is a flex row and you want the AspectRatio to fill the height of its container."},"maxHeight":{"description":"The maximum calculated height of the element (not the CSS height)."},"minHeight":{"description":"The minimum calculated height of the element (not the CSS height)."},"objectFit":{"description":"The CSS object-fit value of the first-child."},"ratio":{"description":"The aspect-ratio of the element. The current implementation uses padding instead of the CSS aspect-ratio due to browser support. <a href=\\"https://caniuse.com/?search=aspect-ratio\\">https://caniuse.com/?search=aspect-ratio</a>"},"slotProps":{"description":"The props used for each slot inside."},"slots":{"description":"The components used for each slot inside."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."},"variant":{"description":"The <a href=\\"https://mui.com/joy-ui/main-features/global-variants/\\">global variant</a> to use."}},"classDescriptions":{"root":{"description":"Class name applied to the root element."},"content":{"description":"Class name applied to {{nodeName}}.","nodeName":"the content element"},"colorPrimary":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the content element","conditions":"<code>color=\\"primary\\"</code>"},"colorNeutral":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the content element","conditions":"<code>color=\\"neutral\\"</code>"},"colorDanger":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the content element","conditions":"<code>color=\\"danger\\"</code>"},"colorSuccess":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the content element","conditions":"<code>color=\\"success\\"</code>"},"colorWarning":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the content element","conditions":"<code>color=\\"warning\\"</code>"},"colorContext":{"description":"Class name applied to {{nodeName}} when {{conditions}}.","nodeName":"the root element","conditions":"color inversion is triggered"},"variantPlain":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the content element","conditions":"<code>variant=\\"plain\\"</code>"},"variantOutlined":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the content element","conditions":"<code>variant=\\"outlined\\"</code>"},"variantSoft":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the content element","conditions":"<code>variant=\\"soft\\"</code>"},"variantSolid":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the content element","conditions":"<code>variant=\\"solid\\"</code>"}},"slotDescriptions":{"root":"The component that renders the root.","content":"The component that renders the content."}}')}},function(e){e.O(0,[52996,8365,30970,41512,82700,27830,7565,36195,17007,43374,48956,98826,16577,94665,21011,43285,89307,49774,92888,40179],function(){return e(e.s=573302)}),_N_E=e.O()}]);