(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14790],{26748:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return i}}),t(667294);var n=t(543285),s=t(59626),a=JSON.parse('{"props":{"children":{"type":{"name":"custom","description":"element"},"required":true},"open":{"type":{"name":"bool"},"required":true},"BackdropComponent":{"type":{"name":"elementType"},"default":"styled(Backdrop, {\\n  name: \'MuiModal\',\\n  slot: \'Backdrop\',\\n  overridesResolver: (props, styles) => {\\n    return styles.backdrop;\\n  },\\n})({\\n  zIndex: -1,\\n})","deprecated":true,"deprecationInfo":"Use <code>slots.backdrop</code> instead. While this prop currently works, it will be removed in the next major version."},"BackdropProps":{"type":{"name":"object"},"deprecated":true,"deprecationInfo":"Use <code>slotProps.backdrop</code> instead."},"classes":{"type":{"name":"object"},"additionalInfo":{"cssApi":true}},"closeAfterTransition":{"type":{"name":"bool"},"default":"false"},"component":{"type":{"name":"elementType"}},"components":{"type":{"name":"shape","description":"{ Backdrop?: elementType, Root?: elementType }"},"default":"{}"},"componentsProps":{"type":{"name":"shape","description":"{ backdrop?: func<br>&#124;&nbsp;object, root?: func<br>&#124;&nbsp;object }"},"default":"{}"},"container":{"type":{"name":"union","description":"HTML element<br>&#124;&nbsp;func"}},"disableAutoFocus":{"type":{"name":"bool"},"default":"false"},"disableEnforceFocus":{"type":{"name":"bool"},"default":"false"},"disableEscapeKeyDown":{"type":{"name":"bool"},"default":"false"},"disablePortal":{"type":{"name":"bool"},"default":"false"},"disableRestoreFocus":{"type":{"name":"bool"},"default":"false"},"disableScrollLock":{"type":{"name":"bool"},"default":"false"},"hideBackdrop":{"type":{"name":"bool"},"default":"false"},"keepMounted":{"type":{"name":"bool"},"default":"false"},"onBackdropClick":{"type":{"name":"func"},"deprecated":true,"deprecationInfo":"Use the <code>onClose</code> prop with the <code>reason</code> argument to handle the <code>backdropClick</code> events."},"onClose":{"type":{"name":"func"},"signature":{"type":"function(event: object, reason: string) => void","describedArgs":["event","reason"]}},"onTransitionEnter":{"type":{"name":"func"}},"onTransitionExited":{"type":{"name":"func"}},"slotProps":{"type":{"name":"shape","description":"{ backdrop?: func<br>&#124;&nbsp;object, root?: func<br>&#124;&nbsp;object }"},"default":"{}"},"slots":{"type":{"name":"shape","description":"{ backdrop?: elementType, root?: elementType }"},"default":"{}"},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}}},"name":"Modal","imports":["import Modal from \'@mui/material/Modal\';","import { Modal } from \'@mui/material\';"],"styles":{"classes":[],"globalClasses":{},"name":"MuiModal"},"slots":[{"name":"root","description":"The component that renders the root.","default":"\'div\'","class":".MuiModal-root"},{"name":"backdrop","description":"The component that renders the backdrop.","class":".MuiModal-backdrop"}],"classes":{"classes":["hidden"],"globalClasses":{}},"spread":true,"themeDefaultProps":false,"muiName":"MuiModal","forwardsRefTo":"HTMLDivElement","filename":"/packages/mui-material/src/Modal/Modal.js","inheritance":null,"demos":"<ul><li><a href=\\"/material-ui/react-modal/\\">Modal</a></li></ul>","cssComponent":false}'),r=t(785893);function i(e){var o=e.descriptions,t=e.pageContent;return(0,r.jsx)(n.Z,{descriptions:o,pageContent:t})}i.getInitialProps=function(){var e=t(92191);return{descriptions:(0,s.Z)(e),pageContent:a}}},245224:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/api/modal",function(){return t(26748)}])},92191:function(e,o,t){var n={"./modal.json":647554,"translations/api-docs/modal/modal.json":647554};function s(e){return t(a(e))}function a(e){if(!t.o(n,e)){var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=a,e.exports=s,s.id=92191},647554:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"Modal is a lower-level construct that is leveraged by the following components:\\n\\n- [Dialog](/material-ui/api/dialog/)\\n- [Drawer](/material-ui/api/drawer/)\\n- [Menu](/material-ui/api/menu/)\\n- [Popover](/material-ui/api/popover/)\\n\\nIf you are creating a modal dialog, you probably want to use the [Dialog](/material-ui/api/dialog/) component\\nrather than directly using Modal.\\n\\nThis component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).","propDescriptions":{"BackdropComponent":{"description":"A backdrop component. This prop enables custom backdrop rendering."},"BackdropProps":{"description":"Props applied to the <a href=\\"/material-ui/api/backdrop/\\"><code>Backdrop</code></a> element."},"children":{"description":"A single child content element.","requiresRef":true},"classes":{"description":"Override or extend the styles applied to the component."},"closeAfterTransition":{"description":"When set to true the Modal waits until a nested Transition is completed before closing."},"component":{"description":"The component used for the root node. Either a string to use a HTML element or a component."},"components":{"description":"The components used for each slot inside.<br>This prop is an alias for the <code>slots</code> prop. It&#39;s recommended to use the <code>slots</code> prop instead."},"componentsProps":{"description":"The extra props for the slot components. You can override the existing props or add new ones.<br>This prop is an alias for the <code>slotProps</code> prop. It&#39;s recommended to use the <code>slotProps</code> prop instead, as <code>componentsProps</code> will be deprecated in the future."},"container":{"description":"An HTML element or function that returns one. The <code>container</code> will have the portal children appended to it.<br>By default, it uses the body of the top-level document object, so it&#39;s simply <code>document.body</code> most of the time."},"disableAutoFocus":{"description":"If <code>true</code>, the modal will not automatically shift focus to itself when it opens, and replace it to the last focused element when it closes. This also works correctly with any modal children that have the <code>disableAutoFocus</code> prop.<br>Generally this should never be set to <code>true</code> as it makes the modal less accessible to assistive technologies, like screen readers."},"disableEnforceFocus":{"description":"If <code>true</code>, the modal will not prevent focus from leaving the modal while open.<br>Generally this should never be set to <code>true</code> as it makes the modal less accessible to assistive technologies, like screen readers."},"disableEscapeKeyDown":{"description":"If <code>true</code>, hitting escape will not fire the <code>onClose</code> callback."},"disablePortal":{"description":"The <code>children</code> will be under the DOM hierarchy of the parent component."},"disableRestoreFocus":{"description":"If <code>true</code>, the modal will not restore focus to previously focused element once modal is hidden or unmounted."},"disableScrollLock":{"description":"Disable the scroll lock behavior."},"hideBackdrop":{"description":"If <code>true</code>, the backdrop is not rendered."},"keepMounted":{"description":"Always keep the children in the DOM. This prop can be useful in SEO situation or when you want to maximize the responsiveness of the Modal."},"onBackdropClick":{"description":"Callback fired when the backdrop is clicked."},"onClose":{"description":"Callback fired when the component requests to be closed. The <code>reason</code> parameter can optionally be used to control the response to <code>onClose</code>.","typeDescriptions":{"event":"The event source of the callback.","reason":"Can be: <code>&quot;escapeKeyDown&quot;</code>, <code>&quot;backdropClick&quot;</code>."}},"onTransitionEnter":{"description":"A function called when a transition enters."},"onTransitionExited":{"description":"A function called when a transition has exited."},"open":{"description":"If <code>true</code>, the component is shown."},"slotProps":{"description":"The props used for each slot inside the Modal."},"slots":{"description":"The components used for each slot inside the Modal. Either a string to use a HTML element or a component."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."}},"classDescriptions":{"root":{"description":"Class name applied to the root element."},"hidden":{"description":"Class name applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"the <code>Modal</code> has exited"},"backdrop":{"description":"Class name applied to {{nodeName}}.","nodeName":"the backdrop element"}},"slotDescriptions":{"root":"The component that renders the root.","backdrop":"The component that renders the backdrop."}}')}},function(e){e.O(0,[52996,8365,30970,41512,82700,27830,7565,36195,17007,43374,48956,98826,16577,94665,21011,43285,89307,49774,92888,40179],function(){return e(e.s=245224)}),_N_E=e.O()}]);