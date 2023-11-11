(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41024],{504805:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return r}}),o(667294);var n=o(543285),i=o(59626),s=JSON.parse('{"props":{"children":{"type":{"name":"node"}},"color":{"type":{"name":"union","description":"\'danger\'<br>&#124;&nbsp;\'neutral\'<br>&#124;&nbsp;\'primary\'<br>&#124;&nbsp;\'success\'<br>&#124;&nbsp;\'warning\'<br>&#124;&nbsp;string"},"default":"\'neutral\'","additionalInfo":{"joy-color":true}},"component":{"type":{"name":"elementType"}},"endAction":{"type":{"name":"node"}},"nested":{"type":{"name":"bool"},"default":"false"},"slotProps":{"type":{"name":"shape","description":"{ endAction?: func<br>&#124;&nbsp;object, root?: func<br>&#124;&nbsp;object, startAction?: func<br>&#124;&nbsp;object }"},"default":"{}"},"slots":{"type":{"name":"shape","description":"{ endAction?: elementType, root?: elementType, startAction?: elementType }"},"default":"{}","additionalInfo":{"slotsApi":true}},"startAction":{"type":{"name":"node"}},"sticky":{"type":{"name":"bool"},"default":"false"},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}},"variant":{"type":{"name":"union","description":"\'outlined\'<br>&#124;&nbsp;\'plain\'<br>&#124;&nbsp;\'soft\'<br>&#124;&nbsp;\'solid\'<br>&#124;&nbsp;string"},"default":"\'plain\'","additionalInfo":{"joy-variant":true}}},"name":"ListItem","imports":["import ListItem from \'@mui/joy/ListItem\';","import { ListItem } from \'@mui/joy\';"],"styles":{"classes":[],"globalClasses":{},"name":"MuiListItem"},"slots":[{"name":"root","description":"The component that renders the root.","default":"\'li\'","class":".MuiListItem-root"},{"name":"startAction","description":"The component that renders the start action.","default":"\'div\'","class":".MuiListItem-startAction"},{"name":"endAction","description":"The component that renders the end action.","default":"\'div\'","class":".MuiListItem-endAction"}],"classes":{"classes":["colorContext","colorDanger","colorNeutral","colorPrimary","colorSuccess","colorWarning","nested","nesting","sticky","variantOutlined","variantPlain","variantSoft","variantSolid"],"globalClasses":{}},"spread":true,"themeDefaultProps":true,"muiName":"JoyListItem","forwardsRefTo":"HTMLLIElement","filename":"/packages/mui-joy/src/ListItem/ListItem.tsx","inheritance":null,"demos":"<ul><li><a href=\\"/joy-ui/react-list/\\">Lists</a></li></ul>","cssComponent":false}'),a=o(785893);function r(e){var t=e.descriptions,o=e.pageContent;return(0,a.jsx)(n.Z,{descriptions:t,pageContent:o})}r.getInitialProps=function(){var e=o(525476);return{descriptions:(0,i.Z)(e),pageContent:s}}},841298:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/joy-ui/api/list-item",function(){return o(504805)}])},525476:function(e,t,o){var n={"./list-item.json":974397,"translations/api-docs-joy/list-item/list-item.json":974397};function i(e){return o(s(e))}function s(e){if(!o.o(n,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=s,e.exports=i,i.id=525476},974397:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"children":{"description":"The content of the component."},"color":{"description":"The color of the component. It supports those theme colors that make sense for this component."},"component":{"description":"The component used for the root node. Either a string to use a HTML element or a component."},"endAction":{"description":"The element to display at the end of ListItem."},"nested":{"description":"If <code>true</code>, the component can contain NestedList."},"slotProps":{"description":"The props used for each slot inside."},"slots":{"description":"The components used for each slot inside."},"startAction":{"description":"The element to display at the start of ListItem."},"sticky":{"description":"If <code>true</code>, the component has sticky position (with top = 0)."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."},"variant":{"description":"The <a href=\\"https://mui.com/joy-ui/main-features/global-variants/\\">global variant</a> to use."}},"classDescriptions":{"root":{"description":"Class name applied to the root element."},"startAction":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the component element","conditions":"<code>startAction</code> element is provided"},"endAction":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the component element","conditions":"<code>endAction</code> element is provided"},"nested":{"description":"Class name applied to {{nodeName}}, {{conditions}}.","nodeName":"the root element","conditions":"if nested={true}"},"nesting":{"description":"Class name applied to {{nodeName}}, {{conditions}}.","nodeName":"the root element","conditions":"if it is under a nested list item"},"sticky":{"description":"Class name applied to {{nodeName}}, {{conditions}}.","nodeName":"the root element","conditions":"if sticky={true}"},"colorPrimary":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"primary\\"</code>"},"colorNeutral":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"neutral\\"</code>"},"colorDanger":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"danger\\"</code>"},"colorSuccess":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"success\\"</code>"},"colorWarning":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"warning\\"</code>"},"colorContext":{"description":"Class name applied to {{nodeName}} when {{conditions}}.","nodeName":"the root element","conditions":"color inversion is triggered"},"variantPlain":{"description":"State class applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"plain\\"</code>"},"variantSoft":{"description":"State class applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"soft\\"</code>"},"variantOutlined":{"description":"State class applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"outlined\\"</code>"},"variantSolid":{"description":"State class applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"solid\\"</code>"}},"slotDescriptions":{"root":"The component that renders the root.","startAction":"The component that renders the start action.","endAction":"The component that renders the end action."}}')}},function(e){e.O(0,[52996,8365,30970,41512,82700,27830,7565,36195,17007,43374,48956,98826,16577,94665,21011,43285,89307,49774,92888,40179],function(){return e(e.s=841298)}),_N_E=e.O()}]);