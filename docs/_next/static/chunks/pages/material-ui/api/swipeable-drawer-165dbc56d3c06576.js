(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18121],{50330:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return s}}),t(667294);var n=t(543285),i=t(59626),r=JSON.parse('{"props":{"onClose":{"type":{"name":"func"},"required":true,"signature":{"type":"function(event: React.SyntheticEvent<{}>) => void","describedArgs":["event"]}},"onOpen":{"type":{"name":"func"},"required":true,"signature":{"type":"function(event: React.SyntheticEvent<{}>) => void","describedArgs":["event"]}},"allowSwipeInChildren":{"type":{"name":"union","description":"func<br>&#124;&nbsp;bool"},"default":"false"},"children":{"type":{"name":"node"}},"disableBackdropTransition":{"type":{"name":"bool"},"default":"false"},"disableDiscovery":{"type":{"name":"bool"},"default":"false"},"disableSwipeToOpen":{"type":{"name":"bool"},"default":"typeof navigator !== \'undefined\' && /iPad|iPhone|iPod/.test(navigator.userAgent)"},"hysteresis":{"type":{"name":"number"},"default":"0.52"},"minFlingVelocity":{"type":{"name":"number"},"default":"450"},"open":{"type":{"name":"bool"},"default":"false"},"SwipeAreaProps":{"type":{"name":"object"}},"swipeAreaWidth":{"type":{"name":"number"},"default":"20"},"transitionDuration":{"type":{"name":"union","description":"number<br>&#124;&nbsp;{ appear?: number, enter?: number, exit?: number }"},"default":"{\\n  enter: theme.transitions.duration.enteringScreen,\\n  exit: theme.transitions.duration.leavingScreen,\\n}"}},"name":"SwipeableDrawer","imports":["import SwipeableDrawer from \'@mui/material/SwipeableDrawer\';","import { SwipeableDrawer } from \'@mui/material\';"],"styles":{"classes":["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedTop","paperAnchorDockedRight","paperAnchorDockedBottom","modal"],"globalClasses":{},"name":"MuiSwipeableDrawer"},"spread":true,"themeDefaultProps":false,"muiName":"MuiSwipeableDrawer","forwardsRefTo":"HTMLDivElement","filename":"/packages/mui-material/src/SwipeableDrawer/SwipeableDrawer.js","inheritance":{"component":"Drawer","pathname":"/material-ui/api/drawer/"},"demos":"<ul><li><a href=\\"/material-ui/react-drawer/\\">Drawer</a></li></ul>","cssComponent":false}'),a=t(785893);function s(e){var o=e.descriptions,t=e.pageContent;return(0,a.jsx)(n.Z,{descriptions:o,pageContent:t})}s.getInitialProps=function(){var e=t(895978);return{descriptions:(0,i.Z)(e),pageContent:r}}},258130:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/api/swipeable-drawer",function(){return t(50330)}])},895978:function(e,o,t){var n={"./swipeable-drawer.json":746014,"translations/api-docs/swipeable-drawer/swipeable-drawer.json":746014};function i(e){return t(r(e))}function r(e){if(!t.o(n,e)){var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=895978},746014:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"allowSwipeInChildren":{"description":"If set to true, the swipe event will open the drawer even if the user begins the swipe on one of the drawer&#39;s children. This can be useful in scenarios where the drawer is partially visible. You can customize it further with a callback that determines which children the user can drag over to open the drawer (for example, to ignore other elements that handle touch move events, like sliders)."},"children":{"description":"The content of the component."},"disableBackdropTransition":{"description":"Disable the backdrop transition. This can improve the FPS on low-end devices."},"disableDiscovery":{"description":"If <code>true</code>, touching the screen near the edge of the drawer will not slide in the drawer a bit to promote accidental discovery of the swipe gesture."},"disableSwipeToOpen":{"description":"If <code>true</code>, swipe to open is disabled. This is useful in browsers where swiping triggers navigation actions. Swipe to open is disabled on iOS browsers by default."},"hysteresis":{"description":"Affects how far the drawer must be opened/closed to change its state. Specified as percent (0-1) of the width of the drawer"},"minFlingVelocity":{"description":"Defines, from which (average) velocity on, the swipe is defined as complete although hysteresis isn&#39;t reached. Good threshold is between 250 - 1000 px/s"},"onClose":{"description":"Callback fired when the component requests to be closed.","typeDescriptions":{"event":"The event source of the callback."}},"onOpen":{"description":"Callback fired when the component requests to be opened.","typeDescriptions":{"event":"The event source of the callback."}},"open":{"description":"If <code>true</code>, the component is shown."},"SwipeAreaProps":{"description":"The element is used to intercept the touch events on the edge."},"swipeAreaWidth":{"description":"The width of the left most (or right most) area in <code>px</code> that the drawer can be swiped open from."},"transitionDuration":{"description":"The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object."}},"classDescriptions":{"root":{"description":"Styles applied to the root element."},"docked":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>variant=\\"permanent or persistent\\"</code>"},"paper":{"description":"Styles applied to {{nodeName}}.","nodeName":"the Paper component"},"paperAnchorLeft":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the Paper component","conditions":"<code>anchor=\\"left\\"</code>"},"paperAnchorRight":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the Paper component","conditions":"<code>anchor=\\"right\\"</code>"},"paperAnchorTop":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the Paper component","conditions":"<code>anchor=\\"top\\"</code>"},"paperAnchorBottom":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the Paper component","conditions":"<code>anchor=\\"bottom\\"</code>"},"paperAnchorDockedLeft":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the Paper component","conditions":"<code>anchor=\\"left\\"</code> and <code>variant</code> is not &quot;temporary&quot;"},"paperAnchorDockedTop":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the Paper component","conditions":"<code>anchor=\\"top\\"</code> and <code>variant</code> is not &quot;temporary&quot;"},"paperAnchorDockedRight":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the Paper component","conditions":"<code>anchor=\\"right\\"</code> and <code>variant</code> is not &quot;temporary&quot;"},"paperAnchorDockedBottom":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the Paper component","conditions":"<code>anchor=\\"bottom\\"</code> and <code>variant</code> is not &quot;temporary&quot;"},"modal":{"description":"Styles applied to {{nodeName}}.","nodeName":"the Modal component"}}}')}},function(e){e.O(0,[52996,8365,30970,41512,82700,27830,7565,36195,17007,43374,48956,98826,16577,94665,21011,43285,89307,49774,92888,40179],function(){return e(e.s=258130)}),_N_E=e.O()}]);