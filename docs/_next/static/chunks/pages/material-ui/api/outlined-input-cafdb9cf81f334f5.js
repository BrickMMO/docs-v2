(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14975],{802410:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return s}}),o(667294);var n=o(543285),i=o(59626),d=JSON.parse('{"props":{"autoComplete":{"type":{"name":"string"}},"autoFocus":{"type":{"name":"bool"}},"classes":{"type":{"name":"object"},"additionalInfo":{"cssApi":true}},"color":{"type":{"name":"union","description":"\'primary\'<br>&#124;&nbsp;\'secondary\'<br>&#124;&nbsp;string"}},"components":{"type":{"name":"shape","description":"{ Input?: elementType, Root?: elementType }"},"default":"{}"},"defaultValue":{"type":{"name":"any"}},"disabled":{"type":{"name":"bool"}},"endAdornment":{"type":{"name":"node"}},"error":{"type":{"name":"bool"}},"fullWidth":{"type":{"name":"bool"},"default":"false"},"id":{"type":{"name":"string"}},"inputComponent":{"type":{"name":"elementType"},"default":"\'input\'"},"inputProps":{"type":{"name":"object"},"default":"{}"},"inputRef":{"type":{"name":"custom","description":"ref"}},"label":{"type":{"name":"node"}},"margin":{"type":{"name":"enum","description":"\'dense\'<br>&#124;&nbsp;\'none\'"}},"maxRows":{"type":{"name":"union","description":"number<br>&#124;&nbsp;string"}},"minRows":{"type":{"name":"union","description":"number<br>&#124;&nbsp;string"}},"multiline":{"type":{"name":"bool"},"default":"false"},"name":{"type":{"name":"string"}},"notched":{"type":{"name":"bool"}},"onChange":{"type":{"name":"func"},"signature":{"type":"function(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void","describedArgs":["event"]}},"placeholder":{"type":{"name":"string"}},"readOnly":{"type":{"name":"bool"}},"required":{"type":{"name":"bool"}},"rows":{"type":{"name":"union","description":"number<br>&#124;&nbsp;string"}},"slots":{"type":{"name":"shape","description":"{ input?: elementType, root?: elementType }"},"default":"{}"},"startAdornment":{"type":{"name":"node"}},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}},"type":{"type":{"name":"string"},"default":"\'text\'"},"value":{"type":{"name":"any"}}},"name":"OutlinedInput","imports":["import OutlinedInput from \'@mui/material/OutlinedInput\';","import { OutlinedInput } from \'@mui/material\';"],"styles":{"classes":["root","colorSecondary","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","notchedOutline","input","inputSizeSmall","inputMultiline","inputAdornedStart","inputAdornedEnd","inputTypeSearch"],"globalClasses":{"focused":"Mui-focused","disabled":"Mui-disabled","error":"Mui-error"},"name":"MuiOutlinedInput"},"spread":true,"themeDefaultProps":true,"muiName":"MuiOutlinedInput","forwardsRefTo":"HTMLDivElement","filename":"/packages/mui-material/src/OutlinedInput/OutlinedInput.js","inheritance":{"component":"InputBase","pathname":"/material-ui/api/input-base/"},"demos":"<ul><li><a href=\\"/material-ui/react-text-field/\\">Text Field</a></li></ul>","cssComponent":false}'),r=o(785893);function s(e){var t=e.descriptions,o=e.pageContent;return(0,r.jsx)(n.Z,{descriptions:t,pageContent:o})}s.getInitialProps=function(){var e=o(246355);return{descriptions:(0,i.Z)(e),pageContent:d}}},36707:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/api/outlined-input",function(){return o(802410)}])},246355:function(e,t,o){var n={"./outlined-input.json":473706,"translations/api-docs/outlined-input/outlined-input.json":473706};function i(e){return o(d(e))}function d(e){if(!o.o(n,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=d,e.exports=i,i.id=246355},473706:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"autoComplete":{"description":"This prop helps users to fill forms faster, especially on mobile devices. The name can be confusing, as it&#39;s more like an autofill. You can learn more about it <a href=\\"https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill\\">following the specification</a>."},"autoFocus":{"description":"If <code>true</code>, the <code>input</code> element is focused during the first mount."},"classes":{"description":"Override or extend the styles applied to the component."},"color":{"description":"The color of the component. It supports both default and custom theme colors, which can be added as shown in the <a href=\\"https://mui.com/material-ui/customization/palette/#custom-colors\\">palette customization guide</a>. The prop defaults to the value (<code>&#39;primary&#39;</code>) inherited from the parent FormControl component."},"components":{"description":"The components used for each slot inside.<br>This prop is an alias for the <code>slots</code> prop. It&#39;s recommended to use the <code>slots</code> prop instead."},"defaultValue":{"description":"The default value. Use when the component is not controlled."},"disabled":{"description":"If <code>true</code>, the component is disabled. The prop defaults to the value (<code>false</code>) inherited from the parent FormControl component."},"endAdornment":{"description":"End <code>InputAdornment</code> for this component."},"error":{"description":"If <code>true</code>, the <code>input</code> will indicate an error. The prop defaults to the value (<code>false</code>) inherited from the parent FormControl component."},"fullWidth":{"description":"If <code>true</code>, the <code>input</code> will take up the full width of its container."},"id":{"description":"The id of the <code>input</code> element."},"inputComponent":{"description":"The component used for the <code>input</code> element. Either a string to use a HTML element or a component."},"inputProps":{"description":"<a href=\\"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes\\">Attributes</a> applied to the <code>input</code> element."},"inputRef":{"description":"Pass a ref to the <code>input</code> element."},"label":{"description":"The label of the <code>input</code>. It is only used for layout. The actual labelling is handled by <code>InputLabel</code>."},"margin":{"description":"If <code>dense</code>, will adjust vertical spacing. This is normally obtained via context from FormControl. The prop defaults to the value (<code>&#39;none&#39;</code>) inherited from the parent FormControl component."},"maxRows":{"description":"Maximum number of rows to display when multiline option is set to true."},"minRows":{"description":"Minimum number of rows to display when multiline option is set to true."},"multiline":{"description":"If <code>true</code>, a <a href=\\"/material-ui/react-textarea-autosize/\\">TextareaAutosize</a> element is rendered."},"name":{"description":"Name attribute of the <code>input</code> element."},"notched":{"description":"If <code>true</code>, the outline is notched to accommodate the label."},"onChange":{"description":"Callback fired when the value is changed.","typeDescriptions":{"event":"The event source of the callback. You can pull out the new value by accessing <code>event.target.value</code> (string)."}},"placeholder":{"description":"The short hint displayed in the <code>input</code> before the user enters a value."},"readOnly":{"description":"It prevents the user from changing the value of the field (not from interacting with the field)."},"required":{"description":"If <code>true</code>, the <code>input</code> element is required. The prop defaults to the value (<code>false</code>) inherited from the parent FormControl component."},"rows":{"description":"Number of rows to display when multiline option is set to true."},"slots":{"description":"The components used for each slot inside.<br>This prop is an alias for the <code>components</code> prop, which will be deprecated in the future."},"startAdornment":{"description":"Start <code>InputAdornment</code> for this component."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."},"type":{"description":"Type of the <code>input</code> element. It should be <a href=\\"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types\\">a valid HTML5 input type</a>."},"value":{"description":"The value of the <code>input</code> element, required for a controlled component."}},"classDescriptions":{"root":{"description":"Styles applied to the root element."},"colorSecondary":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"the color is secondary"},"focused":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"the component is focused"},"disabled":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>disabled={true}</code>"},"adornedStart":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>startAdornment</code> is provided"},"adornedEnd":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>endAdornment</code> is provided"},"error":{"description":"State class applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>error={true}</code>"},"sizeSmall":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the input element","conditions":"<code>size=\\"small\\"</code>"},"multiline":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>multiline={true}</code>"},"notchedOutline":{"description":"Styles applied to {{nodeName}}.","nodeName":"the NotchedOutline element"},"input":{"description":"Styles applied to {{nodeName}}.","nodeName":"the input element"},"inputSizeSmall":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the input element","conditions":"<code>size=\\"small\\"</code>"},"inputMultiline":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the input element","conditions":"<code>multiline={true}</code>"},"inputAdornedStart":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the input element","conditions":"<code>startAdornment</code> is provided"},"inputAdornedEnd":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the input element","conditions":"<code>endAdornment</code> is provided"},"inputTypeSearch":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the input element","conditions":"<code>type=\\"search\\"</code>"}}}')}},function(e){e.O(0,[52996,8365,30970,41512,82700,27830,7565,36195,17007,43374,48956,98826,16577,94665,21011,43285,89307,49774,92888,40179],function(){return e(e.s=36707)}),_N_E=e.O()}]);