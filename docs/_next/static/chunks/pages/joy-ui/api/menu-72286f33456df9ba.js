(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26057],{741447:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return a}}),n(667294);var t=n(543285),i=n(59626),s=JSON.parse('{"props":{"actions":{"type":{"name":"custom","description":"ref"}},"color":{"type":{"name":"enum","description":"\'danger\'<br>&#124;&nbsp;\'neutral\'<br>&#124;&nbsp;\'primary\'<br>&#124;&nbsp;\'success\'<br>&#124;&nbsp;\'warning\'"},"default":"\'neutral\'","additionalInfo":{"joy-color":true}},"component":{"type":{"name":"elementType"}},"disablePortal":{"type":{"name":"bool"},"default":"false"},"invertedColors":{"type":{"name":"bool"},"default":"false"},"keepMounted":{"type":{"name":"bool"},"default":"false"},"modifiers":{"type":{"name":"arrayOf","description":"Array&lt;{ data?: object, effect?: func, enabled?: bool, fn?: func, name?: any, options?: object, phase?: \'afterMain\'<br>&#124;&nbsp;\'afterRead\'<br>&#124;&nbsp;\'afterWrite\'<br>&#124;&nbsp;\'beforeMain\'<br>&#124;&nbsp;\'beforeRead\'<br>&#124;&nbsp;\'beforeWrite\'<br>&#124;&nbsp;\'main\'<br>&#124;&nbsp;\'read\'<br>&#124;&nbsp;\'write\', requires?: Array&lt;string&gt;, requiresIfExists?: Array&lt;string&gt; }&gt;"}},"onClose":{"type":{"name":"func"}},"onItemsChange":{"type":{"name":"func"}},"open":{"type":{"name":"bool"},"default":"false"},"size":{"type":{"name":"union","description":"\'sm\'<br>&#124;&nbsp;\'md\'<br>&#124;&nbsp;\'lg\'<br>&#124;&nbsp;string"},"default":"\'md\'","additionalInfo":{"joy-size":true}},"slotProps":{"type":{"name":"shape","description":"{ root?: func<br>&#124;&nbsp;object }"},"default":"{}"},"slots":{"type":{"name":"shape","description":"{ root?: elementType }"},"default":"{}","additionalInfo":{"slotsApi":true}},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}},"variant":{"type":{"name":"union","description":"\'outlined\'<br>&#124;&nbsp;\'plain\'<br>&#124;&nbsp;\'soft\'<br>&#124;&nbsp;\'solid\'<br>&#124;&nbsp;string"},"default":"\'outlined\'","additionalInfo":{"joy-variant":true}}},"name":"Menu","imports":["import Menu from \'@mui/joy/Menu\';","import { Menu } from \'@mui/joy\';"],"styles":{"classes":[],"globalClasses":{},"name":"MuiMenu"},"slots":[{"name":"root","description":"The component that renders the root.","default":"\'ul\'","class":".MuiMenu-root"}],"classes":{"classes":["colorContext","colorDanger","colorNeutral","colorPrimary","colorSuccess","colorWarning","expanded","listbox","sizeLg","sizeMd","sizeSm","variantOutlined","variantPlain","variantSoft","variantSolid"],"globalClasses":{"expanded":"Mui-expanded"}},"spread":true,"themeDefaultProps":false,"muiName":"JoyMenu","forwardsRefTo":"HTMLUListElement","filename":"/packages/mui-joy/src/Menu/Menu.tsx","inheritance":{"component":"Popper","pathname":"/base-ui/api/popper/"},"demos":"<ul><li><a href=\\"/joy-ui/react-menu/\\">Menu</a></li></ul>","cssComponent":false}'),r=n(785893);function a(e){var o=e.descriptions,n=e.pageContent;return(0,r.jsx)(t.Z,{descriptions:o,pageContent:n})}a.getInitialProps=function(){var e=n(57637);return{descriptions:(0,i.Z)(e),pageContent:s}}},869187:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/joy-ui/api/menu",function(){return n(741447)}])},57637:function(e,o,n){var t={"./menu.json":627286,"translations/api-docs-joy/menu/menu.json":627286};function i(e){return n(s(e))}function s(e){if(!n.o(t,e)){var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return t[e]}i.keys=function(){return Object.keys(t)},i.resolve=s,e.exports=i,i.id=57637},627286:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"actions":{"description":"A ref with imperative actions. It allows to select the first or last menu item."},"color":{"description":"The color of the component. It supports those theme colors that make sense for this component."},"component":{"description":"The component used for the root node. Either a string to use a HTML element or a component."},"disablePortal":{"description":"The <code>children</code> will be under the DOM hierarchy of the parent component."},"invertedColors":{"description":"If <code>true</code>, the children with an implicit color prop invert their colors to match the component&#39;s variant and color."},"keepMounted":{"description":"Always keep the children in the DOM. This prop can be useful in SEO situation or when you want to maximize the responsiveness of the Popper."},"modifiers":{"description":"Popper.js is based on a &quot;plugin-like&quot; architecture, most of its features are fully encapsulated &quot;modifiers&quot;.<br>A modifier is a function that is called each time Popper.js needs to compute the position of the popper. For this reason, modifiers should be very performant to avoid bottlenecks. To learn how to create a modifier, <a href=\\"https://popper.js.org/docs/v2/modifiers/\\">read the modifiers documentation</a>."},"onClose":{"description":"Triggered when focus leaves the menu and the menu should close."},"onItemsChange":{"description":"Function called when the items displayed in the menu change."},"open":{"description":"Controls whether the menu is displayed."},"size":{"description":"The size of the component (affect other nested list* components because the <code>Menu</code> inherits <code>List</code>)."},"slotProps":{"description":"The props used for each slot inside."},"slots":{"description":"The components used for each slot inside."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."},"variant":{"description":"The <a href=\\"https://mui.com/joy-ui/main-features/global-variants/\\">global variant</a> to use."}},"classDescriptions":{"root":{"description":"Class name applied to the root element."},"listbox":{"description":"Class name applied to {{nodeName}}.","nodeName":"the listbox element"},"expanded":{"description":"Class name applied to {{nodeName}} when {{conditions}}.","nodeName":"the root element","conditions":"the menu open"},"colorPrimary":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"primary\\"</code>"},"colorNeutral":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"neutral\\"</code>"},"colorDanger":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"danger\\"</code>"},"colorSuccess":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"success\\"</code>"},"colorWarning":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>color=\\"warning\\"</code>"},"colorContext":{"description":"Class name applied to {{nodeName}} when {{conditions}}.","nodeName":"the root element","conditions":"color inversion is triggered"},"variantPlain":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"plain\\"</code>"},"variantOutlined":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"outlined\\"</code>"},"variantSoft":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"soft\\"</code>"},"variantSolid":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"solid\\"</code>"},"sizeSm":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"sm\\"</code>"},"sizeMd":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"md\\"</code>"},"sizeLg":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>size=\\"lg\\"</code>"}},"slotDescriptions":{"root":"The component that renders the root."}}')}},function(e){e.O(0,[52996,8365,30970,41512,82700,27830,7565,36195,17007,43374,48956,98826,16577,94665,21011,43285,89307,49774,92888,40179],function(){return e(e.s=869187)}),_N_E=e.O()}]);