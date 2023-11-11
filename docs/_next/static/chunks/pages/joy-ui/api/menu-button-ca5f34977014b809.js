(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79066],{69226:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return s}}),n(667294);var t=n(543285),i=n(59626),a=JSON.parse('{"props":{"color":{"type":{"name":"union","description":"\'danger\'<br>&#124;&nbsp;\'info\'<br>&#124;&nbsp;\'neutral\'<br>&#124;&nbsp;\'primary\'<br>&#124;&nbsp;\'success\'<br>&#124;&nbsp;\'warning\'<br>&#124;&nbsp;string"},"default":"\'neutral\'","additionalInfo":{"joy-color":true}},"component":{"type":{"name":"elementType"}},"disabled":{"type":{"name":"bool"},"default":"false"},"endDecorator":{"type":{"name":"node"}},"fullWidth":{"type":{"name":"bool"},"default":"false"},"loading":{"type":{"name":"bool"},"default":"false"},"loadingIndicator":{"type":{"name":"node"},"default":"<CircularProgress />"},"loadingPosition":{"type":{"name":"enum","description":"\'center\'<br>&#124;&nbsp;\'end\'<br>&#124;&nbsp;\'start\'"},"default":"\'center\'"},"size":{"type":{"name":"union","description":"\'sm\'<br>&#124;&nbsp;\'md\'<br>&#124;&nbsp;\'lg\'<br>&#124;&nbsp;string"},"default":"\'md\'","additionalInfo":{"joy-size":true}},"slotProps":{"type":{"name":"shape","description":"{ endDecorator?: func<br>&#124;&nbsp;object, loadingIndicatorCenter?: func<br>&#124;&nbsp;object, root?: func<br>&#124;&nbsp;object, startDecorator?: func<br>&#124;&nbsp;object }"},"default":"{}"},"slots":{"type":{"name":"shape","description":"{ endDecorator?: elementType, loadingIndicatorCenter?: elementType, root?: elementType, startDecorator?: elementType }"},"default":"{}","additionalInfo":{"slotsApi":true}},"startDecorator":{"type":{"name":"node"}},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}},"variant":{"type":{"name":"union","description":"\'outlined\'<br>&#124;&nbsp;\'plain\'<br>&#124;&nbsp;\'soft\'<br>&#124;&nbsp;\'solid\'<br>&#124;&nbsp;string"},"default":"\'outlined\'","additionalInfo":{"joy-variant":true}}},"name":"MenuButton","imports":["import MenuButton from \'@mui/joy/MenuButton\';","import { MenuButton } from \'@mui/joy\';"],"styles":{"classes":[],"globalClasses":{},"name":"MuiMenuButton"},"slots":[{"name":"root","description":"The component that renders the root.","default":"\'button\'","class":".MuiMenuButton-root"},{"name":"startDecorator","description":"The component that renders the start decorator.","default":"\'span\'","class":".MuiMenuButton-startDecorator"},{"name":"endDecorator","description":"The component that renders the end decorator.","default":"\'span\'","class":".MuiMenuButton-endDecorator"},{"name":"loadingIndicatorCenter","description":"The component that renders the loading indicator center.","default":"\'span\'","class":".MuiMenuButton-loadingIndicatorCenter"}],"classes":{"classes":["colorContext","colorDanger","colorInfo","colorNeutral","colorPrimary","colorSuccess","colorWarning","disabled","fullWidth","loading","sizeLg","sizeMd","sizeSm","variantOutlined","variantPlain","variantSoft","variantSolid"],"globalClasses":{"disabled":"Mui-disabled"}},"spread":true,"themeDefaultProps":true,"muiName":"JoyMenuButton","forwardsRefTo":"HTMLButtonElement","filename":"/packages/mui-joy/src/MenuButton/MenuButton.tsx","inheritance":null,"demos":"<ul><li><a href=\\"/joy-ui/react-menu/\\">Menu</a></li></ul>","cssComponent":false}'),r=n(785893);function s(e){var o=e.descriptions,n=e.pageContent;return(0,r.jsx)(t.Z,{descriptions:o,pageContent:n})}s.getInitialProps=function(){var e=n(609245);return{descriptions:(0,i.Z)(e),pageContent:a}}},785721:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/joy-ui/api/menu-button",function(){return n(69226)}])},609245:function(e,o,n){var t={"./menu-button.json":477381,"translations/api-docs-joy/menu-button/menu-button.json":477381};function i(e){return n(a(e))}function a(e){if(!n.o(t,e)){var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return t[e]}i.keys=function(){return Object.keys(t)},i.resolve=a,e.exports=i,i.id=609245},477381:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"color":{"description":"The color of the component. It supports those theme colors that make sense for this component."},"component":{"description":"The component used for the root node. Either a string to use a HTML element or a component."},"disabled":{"description":"If <code>true</code>, the component is disabled."},"endDecorator":{"description":"Element placed after the children."},"fullWidth":{"description":"If <code>true</code>, the button will take up the full width of its container."},"loading":{"description":"If <code>true</code>, the loading indicator is shown."},"loadingIndicator":{"description":"The node should contain an element with <code>role=&quot;progressbar&quot;</code> with an accessible name. By default we render a <code>CircularProgress</code> that is labelled by the button itself."},"loadingPosition":{"description":"The loading indicator can be positioned on the start, end, or the center of the button."},"size":{"description":"The size of the component."},"slotProps":{"description":"The props used for each slot inside."},"slots":{"description":"The components used for each slot inside."},"startDecorator":{"description":"Element placed before the children."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."},"variant":{"description":"The <a href=\\"https://mui.com/joy-ui/main-features/global-variants/\\">global variant</a> to use."}},"classDescriptions":{"root":{"description":"Class name applied to the root element."},"colorPrimary":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"primary\\"</code>"},"colorNeutral":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"neutral\\"</code>"},"colorDanger":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"danger\\"</code>"},"colorInfo":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"info\\"</code>"},"colorSuccess":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"success\\"</code>"},"colorWarning":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"warning\\"</code>"},"colorContext":{"description":"Class name applied to {{nodeName}} when {{conditions}}.","nodeName":"the root element","conditions":"color inversion is triggered"},"variantPlain":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"plain\\"</code>"},"variantOutlined":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"outlined\\"</code>"},"variantSoft":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"soft\\"</code>"},"variantSolid":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"solid\\"</code>"},"disabled":{"description":"State class applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>disabled={true}</code>"},"sizeSm":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"sm\\"</code>"},"sizeMd":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"md\\"</code>"},"sizeLg":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"lg\\"</code>"},"fullWidth":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>fullWidth={true}</code>"},"startDecorator":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the startDecorator element","conditions":"supplied"},"endDecorator":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the endDecorator element","conditions":"supplied"},"loading":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>loading={true}</code>"},"loadingIndicatorCenter":{"description":"Class name applied to {{nodeName}}.","nodeName":"the loadingIndicatorCenter element"}},"slotDescriptions":{"root":"The component that renders the root.","startDecorator":"The component that renders the start decorator.","endDecorator":"The component that renders the end decorator.","loadingIndicatorCenter":"The component that renders the loading indicator center."}}')}},function(e){e.O(0,[52996,8365,30970,41512,82700,27830,7565,36195,17007,43374,48956,98826,16577,94665,21011,43285,89307,49774,92888,40179],function(){return e(e.s=785721)}),_N_E=e.O()}]);