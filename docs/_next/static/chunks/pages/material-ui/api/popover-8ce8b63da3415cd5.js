(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3325],{792622:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return a}}),t(667294);var n=t(543285),r=t(59626),i=JSON.parse('{"props":{"open":{"type":{"name":"bool"},"required":true},"action":{"type":{"name":"custom","description":"ref"}},"anchorEl":{"type":{"name":"custom","description":"HTML element<br>&#124;&nbsp;func"}},"anchorOrigin":{"type":{"name":"shape","description":"{ horizontal: \'center\'<br>&#124;&nbsp;\'left\'<br>&#124;&nbsp;\'right\'<br>&#124;&nbsp;number, vertical: \'bottom\'<br>&#124;&nbsp;\'center\'<br>&#124;&nbsp;\'top\'<br>&#124;&nbsp;number }"},"default":"{\\n  vertical: \'top\',\\n  horizontal: \'left\',\\n}"},"anchorPosition":{"type":{"name":"shape","description":"{ left: number, top: number }"}},"anchorReference":{"type":{"name":"enum","description":"\'anchorEl\'<br>&#124;&nbsp;\'anchorPosition\'<br>&#124;&nbsp;\'none\'"},"default":"\'anchorEl\'"},"children":{"type":{"name":"node"}},"classes":{"type":{"name":"object"},"additionalInfo":{"cssApi":true}},"container":{"type":{"name":"union","description":"HTML element<br>&#124;&nbsp;func"}},"disableScrollLock":{"type":{"name":"bool"},"default":"false"},"elevation":{"type":{"name":"custom","description":"integer"},"default":"8"},"marginThreshold":{"type":{"name":"number"},"default":"16"},"onClose":{"type":{"name":"func"}},"PaperProps":{"type":{"name":"shape","description":"{ component?: element type }"},"default":"{}","deprecated":true,"deprecationInfo":"Use <code>slotProps.paper</code> instead."},"slotProps":{"type":{"name":"shape","description":"{ paper?: func<br>&#124;&nbsp;object, root?: func<br>&#124;&nbsp;object }"},"default":"{}"},"slots":{"type":{"name":"shape","description":"{ paper?: elementType, root?: elementType }"},"default":"{}"},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}},"transformOrigin":{"type":{"name":"shape","description":"{ horizontal: \'center\'<br>&#124;&nbsp;\'left\'<br>&#124;&nbsp;\'right\'<br>&#124;&nbsp;number, vertical: \'bottom\'<br>&#124;&nbsp;\'center\'<br>&#124;&nbsp;\'top\'<br>&#124;&nbsp;number }"},"default":"{\\n  vertical: \'top\',\\n  horizontal: \'left\',\\n}"},"TransitionComponent":{"type":{"name":"elementType"},"default":"Grow"},"transitionDuration":{"type":{"name":"union","description":"\'auto\'<br>&#124;&nbsp;number<br>&#124;&nbsp;{ appear?: number, enter?: number, exit?: number }"},"default":"\'auto\'"},"TransitionProps":{"type":{"name":"object"},"default":"{}"}},"name":"Popover","imports":["import Popover from \'@mui/material/Popover\';","import { Popover } from \'@mui/material\';"],"styles":{"classes":["root","paper"],"globalClasses":{},"name":"MuiPopover"},"spread":true,"themeDefaultProps":false,"muiName":"MuiPopover","forwardsRefTo":"HTMLDivElement","filename":"/packages/mui-material/src/Popover/Popover.js","inheritance":{"component":"Modal","pathname":"/material-ui/api/modal/"},"demos":"<ul><li><a href=\\"/material-ui/react-menu/\\">Menu</a></li>\\n<li><a href=\\"/material-ui/react-popover/\\">Popover</a></li></ul>","cssComponent":false}'),s=t(785893);function a(e){var o=e.descriptions,t=e.pageContent;return(0,s.jsx)(n.Z,{descriptions:o,pageContent:t})}a.getInitialProps=function(){var e=t(127196);return{descriptions:(0,r.Z)(e),pageContent:i}}},438673:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/api/popover",function(){return t(792622)}])},127196:function(e,o,t){var n={"./popover.json":275568,"translations/api-docs/popover/popover.json":275568};function r(e){return t(i(e))}function i(e){if(!t.o(n,e)){var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=127196},275568:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"action":{"description":"A ref for imperative actions. It currently only supports updatePosition() action."},"anchorEl":{"description":"An HTML element, <a href=\\"/material-ui/react-popover/#virtual-element\\">PopoverVirtualElement</a>, or a function that returns either. It&#39;s used to set the position of the popover."},"anchorOrigin":{"description":"This is the point on the anchor where the popover&#39;s <code>anchorEl</code> will attach to. This is not used when the anchorReference is &#39;anchorPosition&#39;.<br>Options: vertical: [top, center, bottom]; horizontal: [left, center, right]."},"anchorPosition":{"description":"This is the position that may be used to set the position of the popover. The coordinates are relative to the application&#39;s client area."},"anchorReference":{"description":"This determines which anchor prop to refer to when setting the position of the popover."},"children":{"description":"The content of the component."},"classes":{"description":"Override or extend the styles applied to the component."},"container":{"description":"An HTML element, component instance, or function that returns either. The <code>container</code> will passed to the Modal component.<br>By default, it uses the body of the anchorEl&#39;s top-level document object, so it&#39;s simply <code>document.body</code> most of the time."},"disableScrollLock":{"description":"Disable the scroll lock behavior."},"elevation":{"description":"The elevation of the popover."},"marginThreshold":{"description":"Specifies how close to the edge of the window the popover can appear. If null, the popover will not be constrained by the window."},"onClose":{"description":"Callback fired when the component requests to be closed. The <code>reason</code> parameter can optionally be used to control the response to <code>onClose</code>."},"open":{"description":"If <code>true</code>, the component is shown."},"PaperProps":{"description":"Props applied to the <a href=\\"/material-ui/api/paper/\\"><code>Paper</code></a> element.<br>This prop is an alias for <code>slotProps.paper</code> and will be overriden by it if both are used."},"slotProps":{"description":"The extra props for the slot components. You can override the existing props or add new ones."},"slots":{"description":"The components used for each slot inside."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."},"transformOrigin":{"description":"This is the point on the popover which will attach to the anchor&#39;s origin.<br>Options: vertical: [top, center, bottom, x(px)]; horizontal: [left, center, right, x(px)]."},"TransitionComponent":{"description":"The component used for the transition. <a href=\\"/material-ui/transitions/#transitioncomponent-prop\\">Follow this guide</a> to learn more about the requirements for this component."},"transitionDuration":{"description":"Set to &#39;auto&#39; to automatically calculate transition time based on height."},"TransitionProps":{"description":"Props applied to the transition element. By default, the element is based on this <a href=\\"http://reactcommunity.org/react-transition-group/transition/\\"><code>Transition</code></a> component."}},"classDescriptions":{"root":{"description":"Styles applied to the root element."},"paper":{"description":"Styles applied to {{nodeName}}.","nodeName":"the Paper component"}}}')}},function(e){e.O(0,[52996,8365,30970,41512,82700,27830,7565,36195,17007,43374,48956,98826,16577,94665,21011,43285,89307,49774,92888,40179],function(){return e(e.s=438673)}),_N_E=e.O()}]);