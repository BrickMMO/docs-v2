(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68431],{297648:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return a}}),n(667294);var t=n(543285),i=n(59626),s=JSON.parse('{"props":{"children":{"type":{"name":"node"}},"color":{"type":{"name":"union","description":"\'danger\'<br>&#124;&nbsp;\'neutral\'<br>&#124;&nbsp;\'primary\'<br>&#124;&nbsp;\'success\'<br>&#124;&nbsp;\'warning\'<br>&#124;&nbsp;string"},"default":"\'neutral\'","additionalInfo":{"joy-color":true}},"component":{"type":{"name":"elementType"}},"invertedColors":{"type":{"name":"bool"},"default":"false"},"orientation":{"type":{"name":"enum","description":"\'horizontal\'<br>&#124;&nbsp;\'vertical\'"},"default":"\'vertical\'"},"size":{"type":{"name":"union","description":"\'lg\'<br>&#124;&nbsp;\'md\'<br>&#124;&nbsp;\'sm\'<br>&#124;&nbsp;string"},"default":"\'md\'","additionalInfo":{"joy-size":true}},"slotProps":{"type":{"name":"shape","description":"{ root?: func<br>&#124;&nbsp;object }"},"default":"{}"},"slots":{"type":{"name":"shape","description":"{ root?: elementType }"},"default":"{}","additionalInfo":{"slotsApi":true}},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}},"variant":{"type":{"name":"union","description":"\'outlined\'<br>&#124;&nbsp;\'plain\'<br>&#124;&nbsp;\'soft\'<br>&#124;&nbsp;\'solid\'<br>&#124;&nbsp;string"},"default":"\'outlined\'","additionalInfo":{"joy-variant":true}}},"name":"Card","imports":["import Card from \'@mui/joy/Card\';","import { Card } from \'@mui/joy\';"],"styles":{"classes":[],"globalClasses":{},"name":"MuiCard"},"slots":[{"name":"root","description":"The component that renders the root.","default":"\'div\'","class":".MuiCard-root"}],"classes":{"classes":["colorContext","colorDanger","colorNeutral","colorPrimary","colorSuccess","colorWarning","horizontal","sizeLg","sizeMd","sizeSm","variantOutlined","variantPlain","variantSoft","variantSolid","vertical"],"globalClasses":{}},"spread":true,"themeDefaultProps":true,"muiName":"JoyCard","forwardsRefTo":"HTMLDivElement","filename":"/packages/mui-joy/src/Card/Card.tsx","inheritance":null,"demos":"<ul><li><a href=\\"/joy-ui/react-card/\\">Card</a></li></ul>","cssComponent":false}'),r=n(785893);function a(e){var o=e.descriptions,n=e.pageContent;return(0,r.jsx)(t.Z,{descriptions:o,pageContent:n})}a.getInitialProps=function(){var e=n(850080);return{descriptions:(0,i.Z)(e),pageContent:s}}},186279:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/joy-ui/api/card",function(){return n(297648)}])},850080:function(e,o,n){var t={"./card.json":156596,"translations/api-docs-joy/card/card.json":156596};function i(e){return n(s(e))}function s(e){if(!n.o(t,e)){var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return t[e]}i.keys=function(){return Object.keys(t)},i.resolve=s,e.exports=i,i.id=850080},156596:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"children":{"description":"Used to render icon or text elements inside the Card if <code>src</code> is not set. This can be an element, or just a string."},"color":{"description":"The color of the component. It supports those theme colors that make sense for this component."},"component":{"description":"The component used for the root node. Either a string to use a HTML element or a component."},"invertedColors":{"description":"If <code>true</code>, the children with an implicit color prop invert their colors to match the component&#39;s variant and color."},"orientation":{"description":"The component orientation."},"size":{"description":"The size of the component. It accepts theme values between &#39;sm&#39; and &#39;lg&#39;."},"slotProps":{"description":"The props used for each slot inside."},"slots":{"description":"The components used for each slot inside."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."},"variant":{"description":"The <a href=\\"https://mui.com/joy-ui/main-features/global-variants/\\">global variant</a> to use."}},"classDescriptions":{"root":{"description":"Class name applied to the root element."},"colorPrimary":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"primary\\"</code>"},"colorNeutral":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"neutral\\"</code>"},"colorDanger":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"danger\\"</code>"},"colorSuccess":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"success\\"</code>"},"colorWarning":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"warning\\"</code>"},"colorContext":{"description":"Class name applied to {{nodeName}} when {{conditions}}.","nodeName":"the root element","conditions":"color inversion is triggered"},"variantPlain":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"plain\\"</code>"},"variantOutlined":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"outlined\\"</code>"},"variantSoft":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"soft\\"</code>"},"variantSolid":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"solid\\"</code>"},"sizeSm":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"sm\\"</code>"},"sizeMd":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"md\\"</code>"},"sizeLg":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"lg\\"</code>"},"horizontal":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>orientation=\\"horizontal\\"</code>"},"vertical":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>orientation=\\"vertical\\"</code>"}},"slotDescriptions":{"root":"The component that renders the root."}}')}},function(e){e.O(0,[52996,8365,30970,41512,82700,27830,7565,36195,17007,43374,48956,98826,16577,94665,21011,43285,89307,49774,92888,40179],function(){return e(e.s=186279)}),_N_E=e.O()}]);