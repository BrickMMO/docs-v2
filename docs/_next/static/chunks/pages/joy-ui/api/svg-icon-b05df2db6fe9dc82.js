(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[63489],{719239:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return d}}),n(667294);var t=n(543285),i=n(59626),s=JSON.parse('{"props":{"children":{"type":{"name":"node"}},"color":{"type":{"name":"union","description":"\'danger\'<br>&#124;&nbsp;\'inherit\'<br>&#124;&nbsp;\'neutral\'<br>&#124;&nbsp;\'primary\'<br>&#124;&nbsp;\'success\'<br>&#124;&nbsp;\'warning\'<br>&#124;&nbsp;string"},"additionalInfo":{"joy-color":true}},"component":{"type":{"name":"elementType"}},"fontSize":{"type":{"name":"union","description":"\'inherit\'<br>&#124;&nbsp;\'lg\'<br>&#124;&nbsp;\'md\'<br>&#124;&nbsp;\'sm\'<br>&#124;&nbsp;\'xl\'<br>&#124;&nbsp;\'xl2\'<br>&#124;&nbsp;\'xl3\'<br>&#124;&nbsp;\'xl4\'<br>&#124;&nbsp;\'xs\'<br>&#124;&nbsp;string"}},"htmlColor":{"type":{"name":"string"}},"inheritViewBox":{"type":{"name":"bool"},"default":"false"},"shapeRendering":{"type":{"name":"string"}},"size":{"type":{"name":"union","description":"\'sm\'<br>&#124;&nbsp;\'md\'<br>&#124;&nbsp;\'lg\'<br>&#124;&nbsp;string"},"default":"\'md\'","additionalInfo":{"joy-size":true}},"slotProps":{"type":{"name":"shape","description":"{ root?: func<br>&#124;&nbsp;object }"},"default":"{}"},"slots":{"type":{"name":"shape","description":"{ root?: elementType }"},"default":"{}","additionalInfo":{"slotsApi":true}},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}},"titleAccess":{"type":{"name":"string"}},"viewBox":{"type":{"name":"string"},"default":"\'0 0 24 24\'"}},"name":"SvgIcon","imports":["import SvgIcon from \'@mui/joy/SvgIcon\';","import { SvgIcon } from \'@mui/joy\';"],"styles":{"classes":[],"globalClasses":{},"name":"MuiSvgIcon"},"slots":[{"name":"root","description":"The component that renders the root.","default":"\'svg\'","class":".MuiSvgIcon-root"}],"classes":{"classes":["colorDanger","colorInherit","colorNeutral","colorPrimary","colorSuccess","colorWarning","fontSizeInherit","fontSizeLg","fontSizeMd","fontSizeSm","fontSizeXl","fontSizeXl2","fontSizeXl3","fontSizeXl4","fontSizeXs","sizeLg","sizeMd","sizeSm"],"globalClasses":{}},"spread":true,"themeDefaultProps":true,"muiName":"JoySvgIcon","forwardsRefTo":"SVGSVGElement","filename":"/packages/mui-joy/src/SvgIcon/SvgIcon.tsx","inheritance":null,"demos":"<ul><li><a href=\\"/joy-ui/react-avatar/\\">Avatar</a></li></ul>","cssComponent":false}'),r=n(785893);function d(e){var o=e.descriptions,n=e.pageContent;return(0,r.jsx)(t.Z,{descriptions:o,pageContent:n})}d.getInitialProps=function(){var e=n(203626);return{descriptions:(0,i.Z)(e),pageContent:s}}},87866:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/joy-ui/api/svg-icon",function(){return n(719239)}])},203626:function(e,o,n){var t={"./svg-icon.json":561856,"translations/api-docs-joy/svg-icon/svg-icon.json":561856};function i(e){return n(s(e))}function s(e){if(!n.o(t,e)){var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return t[e]}i.keys=function(){return Object.keys(t)},i.resolve=s,e.exports=i,i.id=203626},561856:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"children":{"description":"Node passed into the SVG element."},"color":{"description":"The color of the component. It supports those theme colors that make sense for this component. You can use the <code>htmlColor</code> prop to apply a color attribute to the SVG element."},"component":{"description":"The component used for the root node. Either a string to use a HTML element or a component."},"fontSize":{"description":"The theme&#39;s fontSize applied to the icon that will override the <code>size</code> prop. Use this prop when you want to use a specific font-size from the theme."},"htmlColor":{"description":"Applies a color attribute to the SVG element."},"inheritViewBox":{"description":"If <code>true</code>, the root node will inherit the custom <code>component</code>&#39;s viewBox and the <code>viewBox</code> prop will be ignored. Useful when you want to reference a custom <code>component</code> and have <code>SvgIcon</code> pass that <code>component</code>&#39;s viewBox to the root node."},"shapeRendering":{"description":"The shape-rendering attribute. The behavior of the different options is described on the <a href=\\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering\\">MDN Web Docs</a>. If you are having issues with blurry icons you should investigate this prop."},"size":{"description":"The size of the component."},"slotProps":{"description":"The props used for each slot inside."},"slots":{"description":"The components used for each slot inside."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."},"titleAccess":{"description":"Provides a human-readable title for the element that contains it. <a href=\\"https://www.w3.org/TR/SVG-access/#Equivalent\\">https://www.w3.org/TR/SVG-access/#Equivalent</a>"},"viewBox":{"description":"Allows you to redefine what the coordinates without units mean inside an SVG element. For example, if the SVG element is 500 (width) by 200 (height), and you pass viewBox=&quot;0 0 50 20&quot;, this means that the coordinates inside the SVG will go from the top left corner (0,0) to bottom right (50,20) and each unit will be worth 10px."}},"classDescriptions":{"root":{"description":"Class name applied to the root element."},"colorInherit":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"inherit\\"</code>"},"colorPrimary":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"primary\\"</code>"},"colorNeutral":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"neutral\\"</code>"},"colorDanger":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"danger\\"</code>"},"colorSuccess":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"success\\"</code>"},"colorWarning":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"warning\\"</code>"},"fontSizeInherit":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>fontSize=\\"inherit\\"</code>"},"fontSizeXs":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>fontSize=\\"xs\\"</code>"},"fontSizeSm":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>fontSize=\\"sm\\"</code>"},"fontSizeMd":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>fontSize=\\"md\\"</code>"},"fontSizeLg":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>fontSize=\\"lg\\"</code>"},"fontSizeXl":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>fontSize=\\"xl\\"</code>"},"fontSizeXl2":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>fontSize=\\"xl2\\"</code>"},"fontSizeXl3":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>fontSize=\\"xl3\\"</code>"},"fontSizeXl4":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>fontSize=\\"xl4\\"</code>"},"sizeSm":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"sm\\"</code>"},"sizeMd":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"md\\"</code>"},"sizeLg":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"lg\\"</code>"}},"slotDescriptions":{"root":"The component that renders the root."}}')}},function(e){e.O(0,[52996,8365,30970,41512,82700,27830,7565,36195,17007,43374,48956,98826,16577,94665,21011,43285,89307,49774,92888,40179],function(){return e(e.s=87866)}),_N_E=e.O()}]);