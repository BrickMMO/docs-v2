(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13283],{212650:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return r}}),n(667294);var t=n(543285),i=n(59626),s=JSON.parse('{"props":{"action":{"type":{"name":"union","description":"func<br>&#124;&nbsp;{ current?: { focusVisible: func } }"}},"color":{"type":{"name":"union","description":"\'danger\'<br>&#124;&nbsp;\'neutral\'<br>&#124;&nbsp;\'primary\'<br>&#124;&nbsp;\'success\'<br>&#124;&nbsp;\'warning\'<br>&#124;&nbsp;string"},"default":"\'neutral\'","additionalInfo":{"joy-color":true}},"component":{"type":{"name":"elementType"}},"disabled":{"type":{"name":"bool"},"default":"false"},"focusVisibleClassName":{"type":{"name":"string"}},"size":{"type":{"name":"union","description":"\'sm\'<br>&#124;&nbsp;\'md\'<br>&#124;&nbsp;\'lg\'<br>&#124;&nbsp;string"},"default":"\'md\'","additionalInfo":{"joy-size":true}},"slotProps":{"type":{"name":"shape","description":"{ root?: func<br>&#124;&nbsp;object }"},"default":"{}"},"slots":{"type":{"name":"shape","description":"{ root?: elementType }"},"default":"{}","additionalInfo":{"slotsApi":true}},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}},"variant":{"type":{"name":"union","description":"\'outlined\'<br>&#124;&nbsp;\'plain\'<br>&#124;&nbsp;\'soft\'<br>&#124;&nbsp;\'solid\'<br>&#124;&nbsp;string"},"default":"\'plain\'","additionalInfo":{"joy-variant":true}}},"name":"IconButton","imports":["import IconButton from \'@mui/joy/IconButton\';","import { IconButton } from \'@mui/joy\';"],"styles":{"classes":[],"globalClasses":{},"name":"MuiIconButton"},"slots":[{"name":"root","description":"The component that renders the root.","default":"\'button\'","class":".MuiIconButton-root"}],"classes":{"classes":["colorContext","colorDanger","colorNeutral","colorPrimary","colorSuccess","colorWarning","disabled","focusVisible","sizeLg","sizeMd","sizeSm","variantOutlined","variantPlain","variantSoft","variantSolid"],"globalClasses":{"focusVisible":"Mui-focusVisible","disabled":"Mui-disabled"}},"spread":false,"themeDefaultProps":true,"muiName":"JoyIconButton","forwardsRefTo":"HTMLButtonElement","filename":"/packages/mui-joy/src/IconButton/IconButton.tsx","inheritance":null,"demos":"<ul><li><a href=\\"/joy-ui/react-button/\\">Button</a></li>\\n<li><a href=\\"/joy-ui/react-button-group/\\">Button Group</a></li>\\n<li><a href=\\"/joy-ui/react-toggle-button-group/\\">Toggle Button Group</a></li></ul>","cssComponent":false}'),a=n(785893);function r(e){var o=e.descriptions,n=e.pageContent;return(0,a.jsx)(t.Z,{descriptions:o,pageContent:n})}r.getInitialProps=function(){var e=n(812192);return{descriptions:(0,i.Z)(e),pageContent:s}}},20923:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/joy-ui/api/icon-button",function(){return n(212650)}])},812192:function(e,o,n){var t={"./icon-button.json":376802,"translations/api-docs-joy/icon-button/icon-button.json":376802};function i(e){return n(s(e))}function s(e){if(!n.o(t,e)){var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return t[e]}i.keys=function(){return Object.keys(t)},i.resolve=s,e.exports=i,i.id=812192},376802:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"action":{"description":"A ref for imperative actions. It currently only supports <code>focusVisible()</code> action."},"color":{"description":"The color of the component. It supports those theme colors that make sense for this component."},"component":{"description":"The component used for the root node. Either a string to use a HTML element or a component."},"disabled":{"description":"If <code>true</code>, the component is disabled."},"focusVisibleClassName":{"description":"This prop can help identify which element has keyboard focus. The class name will be applied when the element gains the focus through keyboard interaction. It&#39;s a polyfill for the <a href=\\"https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo\\">CSS :focus-visible selector</a>. The rationale for using this feature <a href=\\"https://github.com/WICG/focus-visible/blob/HEAD/explainer.md\\">is explained here</a>. A <a href=\\"https://github.com/WICG/focus-visible\\">polyfill can be used</a> to apply a <code>focus-visible</code> class to other components if needed."},"size":{"description":"The size of the component."},"slotProps":{"description":"The props used for each slot inside."},"slots":{"description":"The components used for each slot inside."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."},"variant":{"description":"The <a href=\\"https://mui.com/joy-ui/main-features/global-variants/\\">global variant</a> to use."}},"classDescriptions":{"root":{"description":"Class name applied to the root element."},"colorPrimary":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"primary\\"</code>"},"colorNeutral":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"neutral\\"</code>"},"colorDanger":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"danger\\"</code>"},"colorSuccess":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"success\\"</code>"},"colorWarning":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"warning\\"</code>"},"colorContext":{"description":"Class name applied to {{nodeName}} when {{conditions}}.","nodeName":"the root element","conditions":"color inversion is triggered"},"variantPlain":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"plain\\"</code>"},"variantOutlined":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"outlined\\"</code>"},"variantSoft":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"soft\\"</code>"},"variantSolid":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"solid\\"</code>"},"focusVisible":{"description":"State class applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"the button is keyboard focused"},"disabled":{"description":"State class applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>disabled={true}</code>"},"sizeSm":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"sm\\"</code>"},"sizeMd":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"md\\"</code>"},"sizeLg":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"lg\\"</code>"}},"slotDescriptions":{"root":"The component that renders the root."}}')}},function(e){e.O(0,[52996,8365,30970,41512,82700,27830,7565,36195,17007,43374,48956,98826,16577,94665,21011,43285,89307,49774,92888,40179],function(){return e(e.s=20923)}),_N_E=e.O()}]);