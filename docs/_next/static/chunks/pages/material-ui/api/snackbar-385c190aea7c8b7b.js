(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38389],{212380:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return s}}),t(667294);var n=t(543285),i=t(59626),r=JSON.parse('{"props":{"action":{"type":{"name":"node"}},"anchorOrigin":{"type":{"name":"shape","description":"{ horizontal: \'center\'<br>&#124;&nbsp;\'left\'<br>&#124;&nbsp;\'right\', vertical: \'bottom\'<br>&#124;&nbsp;\'top\' }"},"default":"{ vertical: \'bottom\', horizontal: \'left\' }"},"autoHideDuration":{"type":{"name":"number"},"default":"null"},"children":{"type":{"name":"element"}},"classes":{"type":{"name":"object"},"additionalInfo":{"cssApi":true}},"ClickAwayListenerProps":{"type":{"name":"object"}},"ContentProps":{"type":{"name":"object"}},"disableWindowBlurListener":{"type":{"name":"bool"},"default":"false"},"key":{"type":{"name":"custom","description":"any"}},"message":{"type":{"name":"node"}},"onClose":{"type":{"name":"func"},"signature":{"type":"function(event: React.SyntheticEvent<any> | Event, reason: string) => void","describedArgs":["event","reason"]}},"open":{"type":{"name":"bool"}},"resumeHideDuration":{"type":{"name":"number"}},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}},"TransitionComponent":{"type":{"name":"elementType"},"default":"Grow"},"transitionDuration":{"type":{"name":"union","description":"number<br>&#124;&nbsp;{ appear?: number, enter?: number, exit?: number }"},"default":"{\\n  enter: theme.transitions.duration.enteringScreen,\\n  exit: theme.transitions.duration.leavingScreen,\\n}"},"TransitionProps":{"type":{"name":"object"},"default":"{}"}},"name":"Snackbar","imports":["import Snackbar from \'@mui/material/Snackbar\';","import { Snackbar } from \'@mui/material\';"],"styles":{"classes":["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"],"globalClasses":{},"name":"MuiSnackbar"},"spread":true,"themeDefaultProps":true,"muiName":"MuiSnackbar","forwardsRefTo":"HTMLDivElement","filename":"/packages/mui-material/src/Snackbar/Snackbar.js","inheritance":null,"demos":"<ul><li><a href=\\"/material-ui/react-snackbar/\\">Snackbar</a></li></ul>","cssComponent":false}'),a=t(785893);function s(e){var o=e.descriptions,t=e.pageContent;return(0,a.jsx)(n.Z,{descriptions:o,pageContent:t})}s.getInitialProps=function(){var e=t(440497);return{descriptions:(0,i.Z)(e),pageContent:r}}},86816:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/api/snackbar",function(){return t(212380)}])},440497:function(e,o,t){var n={"./snackbar.json":113560,"translations/api-docs/snackbar/snackbar.json":113560};function i(e){return t(r(e))}function r(e){if(!t.o(n,e)){var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=440497},113560:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"action":{"description":"The action to display. It renders after the message, at the end of the snackbar."},"anchorOrigin":{"description":"The anchor of the <code>Snackbar</code>. On smaller screens, the component grows to occupy all the available width, the horizontal alignment is ignored."},"autoHideDuration":{"description":"The number of milliseconds to wait before automatically calling the <code>onClose</code> function. <code>onClose</code> should then set the state of the <code>open</code> prop to hide the Snackbar. This behavior is disabled by default with the <code>null</code> value."},"children":{"description":"Replace the <code>SnackbarContent</code> component."},"classes":{"description":"Override or extend the styles applied to the component."},"ClickAwayListenerProps":{"description":"Props applied to the <code>ClickAwayListener</code> element."},"ContentProps":{"description":"Props applied to the <a href=\\"/material-ui/api/snackbar-content/\\"><code>SnackbarContent</code></a> element."},"disableWindowBlurListener":{"description":"If <code>true</code>, the <code>autoHideDuration</code> timer will expire even if the window is not focused."},"key":{"description":"When displaying multiple consecutive snackbars using a single parent-rendered <code>&lt;Snackbar/&gt;</code>, add the <code>key</code> prop to ensure independent treatment of each message. For instance, use <code>&lt;Snackbar key={message} /&gt;</code>. Otherwise, messages might update in place, and features like <code>autoHideDuration</code> could be affected."},"message":{"description":"The message to display."},"onClose":{"description":"Callback fired when the component requests to be closed. Typically <code>onClose</code> is used to set state in the parent component, which is used to control the <code>Snackbar</code> <code>open</code> prop. The <code>reason</code> parameter can optionally be used to control the response to <code>onClose</code>, for example ignoring <code>clickaway</code>.","typeDescriptions":{"event":"The event source of the callback.","reason":"Can be: <code>&quot;timeout&quot;</code> (<code>autoHideDuration</code> expired), <code>&quot;clickaway&quot;</code>, or <code>&quot;escapeKeyDown&quot;</code>."}},"open":{"description":"If <code>true</code>, the component is shown."},"resumeHideDuration":{"description":"The number of milliseconds to wait before dismissing after user interaction. If <code>autoHideDuration</code> prop isn&#39;t specified, it does nothing. If <code>autoHideDuration</code> prop is specified but <code>resumeHideDuration</code> isn&#39;t, we default to <code>autoHideDuration / 2</code> ms."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."},"TransitionComponent":{"description":"The component used for the transition. <a href=\\"/material-ui/transitions/#transitioncomponent-prop\\">Follow this guide</a> to learn more about the requirements for this component."},"transitionDuration":{"description":"The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object."},"TransitionProps":{"description":"Props applied to the transition element. By default, the element is based on this <a href=\\"http://reactcommunity.org/react-transition-group/transition/\\"><code>Transition</code></a> component."}},"classDescriptions":{"root":{"description":"Styles applied to the root element."},"anchorOriginTopCenter":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>anchorOrigin={{ \'top\', \'center\' }}</code>"},"anchorOriginBottomCenter":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>anchorOrigin={{ \'bottom\', \'center\' }}</code>"},"anchorOriginTopRight":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>anchorOrigin={{ \'top\', \'right\' }}</code>"},"anchorOriginBottomRight":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>anchorOrigin={{ \'bottom\', \'right\' }}</code>"},"anchorOriginTopLeft":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>anchorOrigin={{ \'top\', \'left\' }}</code>"},"anchorOriginBottomLeft":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>anchorOrigin={{ \'bottom\', \'left\' }}</code>"}}}')}},function(e){e.O(0,[52996,8365,30970,41512,82700,27830,7565,36195,17007,43374,48956,98826,16577,94665,21011,43285,89307,49774,92888,40179],function(){return e(e.s=86816)}),_N_E=e.O()}]);