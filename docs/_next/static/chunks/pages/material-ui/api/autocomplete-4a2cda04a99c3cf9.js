(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[67841],{374318:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return s}}),o(667294);var n=o(543285),i=o(59626),a=JSON.parse('{"props":{"options":{"type":{"name":"array"},"required":true},"renderInput":{"type":{"name":"func"},"required":true,"signature":{"type":"function(params: object) => ReactNode","describedArgs":[]}},"autoComplete":{"type":{"name":"bool"},"default":"false"},"autoHighlight":{"type":{"name":"bool"},"default":"false"},"autoSelect":{"type":{"name":"bool"},"default":"false"},"blurOnSelect":{"type":{"name":"union","description":"\'mouse\'<br>&#124;&nbsp;\'touch\'<br>&#124;&nbsp;bool"},"default":"false"},"ChipProps":{"type":{"name":"object"}},"classes":{"type":{"name":"object"},"additionalInfo":{"cssApi":true}},"clearIcon":{"type":{"name":"node"},"default":"<ClearIcon fontSize=\\"small\\" />"},"clearOnBlur":{"type":{"name":"bool"},"default":"!props.freeSolo"},"clearOnEscape":{"type":{"name":"bool"},"default":"false"},"clearText":{"type":{"name":"string"},"default":"\'Clear\'"},"closeText":{"type":{"name":"string"},"default":"\'Close\'"},"componentsProps":{"type":{"name":"shape","description":"{ clearIndicator?: object, paper?: object, popper?: object, popupIndicator?: object }"},"default":"{}"},"defaultValue":{"type":{"name":"custom","description":"any"},"default":"props.multiple ? [] : null"},"disableClearable":{"type":{"name":"bool"},"default":"false"},"disableCloseOnSelect":{"type":{"name":"bool"},"default":"false"},"disabled":{"type":{"name":"bool"},"default":"false"},"disabledItemsFocusable":{"type":{"name":"bool"},"default":"false"},"disableListWrap":{"type":{"name":"bool"},"default":"false"},"disablePortal":{"type":{"name":"bool"},"default":"false"},"filterOptions":{"type":{"name":"func"},"default":"createFilterOptions()","signature":{"type":"function(options: Array<Value>, state: object) => Array<Value>","describedArgs":["options","state"]}},"filterSelectedOptions":{"type":{"name":"bool"},"default":"false"},"forcePopupIcon":{"type":{"name":"union","description":"\'auto\'<br>&#124;&nbsp;bool"},"default":"\'auto\'"},"freeSolo":{"type":{"name":"bool"},"default":"false"},"fullWidth":{"type":{"name":"bool"},"default":"false"},"getLimitTagsText":{"type":{"name":"func"},"default":"(more) => `+${more}`","signature":{"type":"function(more: number) => ReactNode","describedArgs":["more"]}},"getOptionDisabled":{"type":{"name":"func"},"signature":{"type":"function(option: Value) => boolean","describedArgs":["option"]}},"getOptionLabel":{"type":{"name":"func"},"default":"(option) => option.label ?? option","signature":{"type":"function(option: Value) => string","describedArgs":[]}},"groupBy":{"type":{"name":"func"},"signature":{"type":"function(options: Value) => string","describedArgs":["options"]}},"handleHomeEndKeys":{"type":{"name":"bool"},"default":"!props.freeSolo"},"id":{"type":{"name":"string"}},"includeInputInList":{"type":{"name":"bool"},"default":"false"},"inputValue":{"type":{"name":"string"}},"isOptionEqualToValue":{"type":{"name":"func"},"signature":{"type":"function(option: Value, value: Value) => boolean","describedArgs":["option","value"]}},"limitTags":{"type":{"name":"custom","description":"integer"},"default":"-1"},"ListboxComponent":{"type":{"name":"elementType"},"default":"\'ul\'"},"ListboxProps":{"type":{"name":"object"}},"loading":{"type":{"name":"bool"},"default":"false"},"loadingText":{"type":{"name":"node"},"default":"\'Loading…\'"},"multiple":{"type":{"name":"bool"},"default":"false"},"noOptionsText":{"type":{"name":"node"},"default":"\'No options\'"},"onChange":{"type":{"name":"func"},"signature":{"type":"function(event: React.SyntheticEvent, value: Value | Array<Value>, reason: string, details?: string) => void","describedArgs":["event","value","reason"]}},"onClose":{"type":{"name":"func"},"signature":{"type":"function(event: React.SyntheticEvent, reason: string) => void","describedArgs":["event","reason"]}},"onHighlightChange":{"type":{"name":"func"},"signature":{"type":"function(event: React.SyntheticEvent, option: Value, reason: string) => void","describedArgs":["event","option","reason"]}},"onInputChange":{"type":{"name":"func"},"signature":{"type":"function(event: React.SyntheticEvent, value: string, reason: string) => void","describedArgs":["event","value","reason"]}},"onOpen":{"type":{"name":"func"},"signature":{"type":"function(event: React.SyntheticEvent) => void","describedArgs":["event"]}},"open":{"type":{"name":"bool"}},"openOnFocus":{"type":{"name":"bool"},"default":"false"},"openText":{"type":{"name":"string"},"default":"\'Open\'"},"PaperComponent":{"type":{"name":"elementType"},"default":"Paper"},"PopperComponent":{"type":{"name":"elementType"},"default":"Popper"},"popupIcon":{"type":{"name":"node"},"default":"<ArrowDropDownIcon />"},"readOnly":{"type":{"name":"bool"},"default":"false"},"renderGroup":{"type":{"name":"func"},"signature":{"type":"function(params: AutocompleteRenderGroupParams) => ReactNode","describedArgs":["params"]}},"renderOption":{"type":{"name":"func"},"signature":{"type":"function(props: object, option: Value, state: object, ownerState: object) => ReactNode","describedArgs":["props","option","state","ownerState"]}},"renderTags":{"type":{"name":"func"},"signature":{"type":"function(value: Array<Value>, getTagProps: function, ownerState: object) => ReactNode","describedArgs":["value","getTagProps","ownerState"]}},"selectOnFocus":{"type":{"name":"bool"},"default":"!props.freeSolo"},"size":{"type":{"name":"union","description":"\'small\'<br>&#124;&nbsp;\'medium\'<br>&#124;&nbsp;string"},"default":"\'medium\'"},"slotProps":{"type":{"name":"shape","description":"{ clearIndicator?: object, paper?: object, popper?: object, popupIndicator?: object }"},"default":"{}"},"sx":{"type":{"name":"union","description":"Array&lt;func<br>&#124;&nbsp;object<br>&#124;&nbsp;bool&gt;<br>&#124;&nbsp;func<br>&#124;&nbsp;object"},"additionalInfo":{"sx":true}},"value":{"type":{"name":"custom","description":"any"}}},"name":"Autocomplete","imports":["import Autocomplete from \'@mui/material/Autocomplete\';","import { Autocomplete } from \'@mui/material\';"],"styles":{"classes":["root","fullWidth","expanded","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"],"globalClasses":{"expanded":"Mui-expanded","focused":"Mui-focused","focusVisible":"Mui-focusVisible"},"name":"MuiAutocomplete"},"spread":true,"themeDefaultProps":true,"muiName":"MuiAutocomplete","forwardsRefTo":"HTMLDivElement","filename":"/packages/mui-material/src/Autocomplete/Autocomplete.js","inheritance":null,"demos":"<ul><li><a href=\\"/material-ui/react-autocomplete/\\">Autocomplete</a></li></ul>","cssComponent":false}'),p=o(785893);function s(e){var t=e.descriptions,o=e.pageContent;return(0,p.jsx)(n.Z,{descriptions:t,pageContent:o})}s.getInitialProps=function(){var e=o(756098);return{descriptions:(0,i.Z)(e),pageContent:a}}},361724:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/material-ui/api/autocomplete",function(){return o(374318)}])},756098:function(e,t,o){var n={"./autocomplete.json":547695,"translations/api-docs/autocomplete/autocomplete.json":547695};function i(e){return o(a(e))}function a(e){if(!o.o(n,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=a,e.exports=i,i.id=756098},547695:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"autoComplete":{"description":"If <code>true</code>, the portion of the selected suggestion that has not been typed by the user, known as the completion string, appears inline after the input cursor in the textbox. The inline completion string is visually highlighted and has a selected state."},"autoHighlight":{"description":"If <code>true</code>, the first option is automatically highlighted."},"autoSelect":{"description":"If <code>true</code>, the selected option becomes the value of the input when the Autocomplete loses focus unless the user chooses a different option or changes the character string in the input.<br>When using <code>freeSolo</code> mode, the typed value will be the input value if the Autocomplete loses focus without highlighting an option."},"blurOnSelect":{"description":"<p>Control if the input should be blurred when an option is selected:</p>\\n<ul>\\n<li><code>false</code> the input is not blurred.</li>\\n<li><code>true</code> the input is always blurred.</li>\\n<li><code>touch</code> the input is blurred after a touch event.</li>\\n<li><code>mouse</code> the input is blurred after a mouse event.</li>\\n</ul>\\n"},"ChipProps":{"description":"Props applied to the <a href=\\"/material-ui/api/chip/\\"><code>Chip</code></a> element."},"classes":{"description":"Override or extend the styles applied to the component."},"clearIcon":{"description":"The icon to display in place of the default clear icon."},"clearOnBlur":{"description":"If <code>true</code>, the input&#39;s text is cleared on blur if no value is selected.<br>Set to <code>true</code> if you want to help the user enter a new value. Set to <code>false</code> if you want to help the user resume their search."},"clearOnEscape":{"description":"If <code>true</code>, clear all values when the user presses escape and the popup is closed."},"clearText":{"description":"Override the default text for the <em>clear</em> icon button.<br>For localization purposes, you can use the provided <a href=\\"/material-ui/guides/localization/\\">translations</a>."},"closeText":{"description":"Override the default text for the <em>close popup</em> icon button.<br>For localization purposes, you can use the provided <a href=\\"/material-ui/guides/localization/\\">translations</a>."},"componentsProps":{"description":"The props used for each slot inside."},"defaultValue":{"description":"The default value. Use when the component is not controlled."},"disableClearable":{"description":"If <code>true</code>, the input can&#39;t be cleared."},"disableCloseOnSelect":{"description":"If <code>true</code>, the popup won&#39;t close when a value is selected."},"disabled":{"description":"If <code>true</code>, the component is disabled."},"disabledItemsFocusable":{"description":"If <code>true</code>, will allow focus on disabled items."},"disableListWrap":{"description":"If <code>true</code>, the list box in the popup will not wrap focus."},"disablePortal":{"description":"If <code>true</code>, the <code>Popper</code> content will be under the DOM hierarchy of the parent component."},"filterOptions":{"description":"A function that determines the filtered options to be rendered on search.","typeDescriptions":{"options":"The options to render.","state":"The state of the component."}},"filterSelectedOptions":{"description":"If <code>true</code>, hide the selected options from the list box."},"forcePopupIcon":{"description":"Force the visibility display of the popup icon."},"freeSolo":{"description":"If <code>true</code>, the Autocomplete is free solo, meaning that the user input is not bound to provided options."},"fullWidth":{"description":"If <code>true</code>, the input will take up the full width of its container."},"getLimitTagsText":{"description":"The label to display when the tags are truncated (<code>limitTags</code>).","typeDescriptions":{"more":"The number of truncated tags."}},"getOptionDisabled":{"description":"Used to determine the disabled state for a given option.","typeDescriptions":{"option":"The option to test."}},"getOptionLabel":{"description":"Used to determine the string value for a given option. It&#39;s used to fill the input (and the list box options if <code>renderOption</code> is not provided).<br>If used in free solo mode, it must accept both the type of the options and a string."},"groupBy":{"description":"If provided, the options will be grouped under the returned string. The groupBy value is also used as the text for group headings when <code>renderGroup</code> is not provided.","typeDescriptions":{"options":"The options to group."}},"handleHomeEndKeys":{"description":"If <code>true</code>, the component handles the &quot;Home&quot; and &quot;End&quot; keys when the popup is open. It should move focus to the first option and last option, respectively."},"id":{"description":"This prop is used to help implement the accessibility logic. If you don&#39;t provide an id it will fall back to a randomly generated one."},"includeInputInList":{"description":"If <code>true</code>, the highlight can move to the input."},"inputValue":{"description":"The input value."},"isOptionEqualToValue":{"description":"Used to determine if the option represents the given value. Uses strict equality by default. ⚠️ Both arguments need to be handled, an option can only match with one value.","typeDescriptions":{"option":"The option to test.","value":"The value to test against."}},"limitTags":{"description":"The maximum number of tags that will be visible when not focused. Set <code>-1</code> to disable the limit."},"ListboxComponent":{"description":"The component used to render the listbox."},"ListboxProps":{"description":"Props applied to the Listbox element."},"loading":{"description":"If <code>true</code>, the component is in a loading state. This shows the <code>loadingText</code> in place of suggestions (only if there are no suggestions to show, e.g. <code>options</code> are empty)."},"loadingText":{"description":"Text to display when in a loading state.<br>For localization purposes, you can use the provided <a href=\\"/material-ui/guides/localization/\\">translations</a>."},"multiple":{"description":"If <code>true</code>, <code>value</code> must be an array and the menu will support multiple selections."},"noOptionsText":{"description":"Text to display when there are no options.<br>For localization purposes, you can use the provided <a href=\\"/material-ui/guides/localization/\\">translations</a>."},"onChange":{"description":"Callback fired when the value changes.","typeDescriptions":{"event":"The event source of the callback.","value":"The new value of the component.","reason":"One of &quot;createOption&quot;, &quot;selectOption&quot;, &quot;removeOption&quot;, &quot;blur&quot; or &quot;clear&quot;."}},"onClose":{"description":"Callback fired when the popup requests to be closed. Use in controlled mode (see open).","typeDescriptions":{"event":"The event source of the callback.","reason":"Can be: <code>&quot;toggleInput&quot;</code>, <code>&quot;escape&quot;</code>, <code>&quot;selectOption&quot;</code>, <code>&quot;removeOption&quot;</code>, <code>&quot;blur&quot;</code>."}},"onHighlightChange":{"description":"Callback fired when the highlight option changes.","typeDescriptions":{"event":"The event source of the callback.","option":"The highlighted option.","reason":"Can be: <code>&quot;keyboard&quot;</code>, <code>&quot;auto&quot;</code>, <code>&quot;mouse&quot;</code>, <code>&quot;touch&quot;</code>."}},"onInputChange":{"description":"Callback fired when the input value changes.","typeDescriptions":{"event":"The event source of the callback.","value":"The new value of the text input.","reason":"Can be: <code>&quot;input&quot;</code> (user input), <code>&quot;reset&quot;</code> (programmatic change), <code>&quot;clear&quot;</code>."}},"onOpen":{"description":"Callback fired when the popup requests to be opened. Use in controlled mode (see open).","typeDescriptions":{"event":"The event source of the callback."}},"open":{"description":"If <code>true</code>, the component is shown."},"openOnFocus":{"description":"If <code>true</code>, the popup will open on input focus."},"openText":{"description":"Override the default text for the <em>open popup</em> icon button.<br>For localization purposes, you can use the provided <a href=\\"/material-ui/guides/localization/\\">translations</a>."},"options":{"description":"Array of options."},"PaperComponent":{"description":"The component used to render the body of the popup."},"PopperComponent":{"description":"The component used to position the popup."},"popupIcon":{"description":"The icon to display in place of the default popup icon."},"readOnly":{"description":"If <code>true</code>, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted."},"renderGroup":{"description":"Render the group.","typeDescriptions":{"params":"The group to render."}},"renderInput":{"description":"Render the input."},"renderOption":{"description":"Render the option, use <code>getOptionLabel</code> by default.","typeDescriptions":{"props":"The props to apply on the li element.","option":"The option to render.","state":"The state of each option.","ownerState":"The state of the Autocomplete component."}},"renderTags":{"description":"Render the selected value.","typeDescriptions":{"value":"The <code>value</code> provided to the component.","getTagProps":"A tag props getter.","ownerState":"The state of the Autocomplete component."}},"selectOnFocus":{"description":"If <code>true</code>, the input&#39;s text is selected on focus. It helps the user clear the selected value."},"size":{"description":"The size of the component."},"slotProps":{"description":"The props used for each slot inside."},"sx":{"description":"The system prop that allows defining system overrides as well as additional CSS styles."},"value":{"description":"The value of the autocomplete.<br>The value must have reference equality with the option in order to be selected. You can customize the equality behavior with the <code>isOptionEqualToValue</code> prop."}},"classDescriptions":{"root":{"description":"Styles applied to the root element."},"fullWidth":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>fullWidth={true}</code>"},"expanded":{"description":"State class applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"the listbox is displayed"},"focused":{"description":"State class applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"focused"},"focusVisible":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the option elements","conditions":"they are keyboard focused"},"tag":{"description":"Styles applied to {{nodeName}}, {{conditions}}.","nodeName":"the tag elements","conditions":"e.g. the chips"},"tagSizeSmall":{"description":"Styles applied to {{nodeName}}, {{conditions}}.","nodeName":"the tag elements","conditions":"e.g. the chips if <code>size=\\"small\\"</code>"},"tagSizeMedium":{"description":"Styles applied to {{nodeName}}, {{conditions}}.","nodeName":"the tag elements","conditions":"e.g. the chips if <code>size=\\"medium\\"</code>"},"hasPopupIcon":{"description":"Styles applied when the popup icon is rendered."},"hasClearIcon":{"description":"Styles applied when the clear icon is rendered."},"inputRoot":{"description":"Styles applied to {{nodeName}}.","nodeName":"the Input element"},"input":{"description":"Styles applied to {{nodeName}}.","nodeName":"the input element"},"inputFocused":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the input element","conditions":"the input is focused"},"endAdornment":{"description":"Styles applied to {{nodeName}}.","nodeName":"the endAdornment element"},"clearIndicator":{"description":"Styles applied to {{nodeName}}.","nodeName":"the clear indicator"},"popupIndicator":{"description":"Styles applied to {{nodeName}}.","nodeName":"the popup indicator"},"popupIndicatorOpen":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the popup indicator","conditions":"the popup is open"},"popper":{"description":"Styles applied to {{nodeName}}.","nodeName":"the popper element"},"popperDisablePortal":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the popper element","conditions":"<code>disablePortal={true}</code>"},"paper":{"description":"Styles applied to {{nodeName}}.","nodeName":"the Paper component"},"listbox":{"description":"Styles applied to {{nodeName}}.","nodeName":"the listbox component"},"loading":{"description":"Styles applied to {{nodeName}}.","nodeName":"the loading wrapper"},"noOptions":{"description":"Styles applied to {{nodeName}}.","nodeName":"the no option wrapper"},"option":{"description":"Styles applied to {{nodeName}}.","nodeName":"the option elements"},"groupLabel":{"description":"Styles applied to {{nodeName}}.","nodeName":"the group&#39;s label elements"},"groupUl":{"description":"Styles applied to {{nodeName}}.","nodeName":"the group&#39;s ul elements"}}}')}},function(e){e.O(0,[52996,8365,30970,41512,82700,27830,7565,36195,17007,43374,48956,98826,16577,94665,21011,43285,89307,49774,92888,40179],function(){return e(e.s=361724)}),_N_E=e.O()}]);