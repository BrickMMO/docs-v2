(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95395],{770481:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}}),n(667294);var o=n(543285),i=n(59626),r=JSON.parse('{"props":{"children":{"type":{"name":"node"}},"columns":{"type":{"name":"union","description":"Array&lt;number&gt;<br>&#124;&nbsp;number<br>&#124;&nbsp;object"}},"columnSpacing":{"type":{"name":"union","description":"Array&lt;number<br>&#124;&nbsp;string&gt;<br>&#124;&nbsp;number<br>&#124;&nbsp;object<br>&#124;&nbsp;string"}},"container":{"type":{"name":"bool"}},"direction":{"type":{"name":"union","description":"\'column-reverse\'<br>&#124;&nbsp;\'column\'<br>&#124;&nbsp;\'row-reverse\'<br>&#124;&nbsp;\'row\'<br>&#124;&nbsp;Array&lt;\'column-reverse\'<br>&#124;&nbsp;\'column\'<br>&#124;&nbsp;\'row-reverse\'<br>&#124;&nbsp;\'row\'&gt;<br>&#124;&nbsp;object"}},"disableEqualOverflow":{"type":{"name":"bool"}},"lg":{"type":{"name":"union","description":"\'auto\'<br>&#124;&nbsp;number<br>&#124;&nbsp;bool"}},"lgOffset":{"type":{"name":"union","description":"\'auto\'<br>&#124;&nbsp;number"}},"md":{"type":{"name":"union","description":"\'auto\'<br>&#124;&nbsp;number<br>&#124;&nbsp;bool"}},"mdOffset":{"type":{"name":"union","description":"\'auto\'<br>&#124;&nbsp;number"}},"rowSpacing":{"type":{"name":"union","description":"Array&lt;number<br>&#124;&nbsp;string&gt;<br>&#124;&nbsp;number<br>&#124;&nbsp;object<br>&#124;&nbsp;string"}},"sm":{"type":{"name":"union","description":"\'auto\'<br>&#124;&nbsp;number<br>&#124;&nbsp;bool"}},"smOffset":{"type":{"name":"union","description":"\'auto\'<br>&#124;&nbsp;number"}},"spacing":{"type":{"name":"union","description":"Array&lt;number<br>&#124;&nbsp;string&gt;<br>&#124;&nbsp;number<br>&#124;&nbsp;object<br>&#124;&nbsp;string"}},"wrap":{"type":{"name":"enum","description":"\'nowrap\'<br>&#124;&nbsp;\'wrap-reverse\'<br>&#124;&nbsp;\'wrap\'"}},"xl":{"type":{"name":"union","description":"\'auto\'<br>&#124;&nbsp;number<br>&#124;&nbsp;bool"}},"xlOffset":{"type":{"name":"union","description":"\'auto\'<br>&#124;&nbsp;number"}},"xs":{"type":{"name":"union","description":"\'auto\'<br>&#124;&nbsp;number<br>&#124;&nbsp;bool"}},"xsOffset":{"type":{"name":"union","description":"\'auto\'<br>&#124;&nbsp;number"}}},"name":"Grid","imports":["import Grid from \'@mui/system/Unstable_Grid\';","import { Unstable_Grid as Grid } from \'@mui/system\';"],"styles":{"classes":["root","container","direction-xs-column","direction-xs-column-reverse","direction-xs-row-reverse","wrap-xs-nowrap","wrap-xs-wrap-reverse"],"globalClasses":{},"name":"MuiGrid"},"spread":true,"themeDefaultProps":true,"muiName":"MuiGrid","forwardsRefTo":"HTMLElement","filename":"/packages/mui-system/src/Unstable_Grid/Grid.tsx","inheritance":null,"demos":"<ul><li><a href=\\"/material-ui/react-grid/\\">Grid (Material UI)</a></li></ul>","cssComponent":true}'),s=n(785893);function a(e){var t=e.descriptions,n=e.pageContent;return(0,s.jsx)(o.Z,{descriptions:t,pageContent:n})}a.getInitialProps=function(){var e=n(343821);return{descriptions:(0,i.Z)(e),pageContent:r}}},577896:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/system/api/grid",function(){return n(770481)}])},343821:function(e,t,n){var o={"./grid.json":218616,"translations/api-docs/grid/grid.json":218616};function i(e){return n(r(e))}function r(e){if(!n.o(o,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=r,e.exports=i,i.id=343821},218616:function(e){"use strict";e.exports=JSON.parse('{"componentDescription":"","propDescriptions":{"children":{"description":"The content of the component."},"columns":{"description":"The number of columns."},"columnSpacing":{"description":"Defines the horizontal space between the type <code>item</code> components. It overrides the value of the <code>spacing</code> prop."},"container":{"description":"If <code>true</code>, the component will have the flex <em>container</em> behavior. You should be wrapping <em>items</em> with a <em>container</em>."},"direction":{"description":"Defines the <code>flex-direction</code> style property. It is applied for all screen sizes."},"disableEqualOverflow":{"description":"If <code>true</code>, the negative margin and padding are apply only to the top and left sides of the grid."},"lg":{"description":"If a number, it sets the number of columns the grid item uses. It can&#39;t be greater than the total number of columns of the container (12 by default). If &#39;auto&#39;, the grid item&#39;s width matches its content. If false, the prop is ignored. If true, the grid item&#39;s width grows to use the space available in the grid container. The value is applied for the <code>lg</code> breakpoint and wider screens if not overridden."},"lgOffset":{"description":"If a number, it sets the margin-left equals to the number of columns the grid item uses. If &#39;auto&#39;, the grid item push itself to the right-end of the container. The value is applied for the <code>lg</code> breakpoint and wider screens if not overridden."},"md":{"description":"If a number, it sets the number of columns the grid item uses. It can&#39;t be greater than the total number of columns of the container (12 by default). If &#39;auto&#39;, the grid item&#39;s width matches its content. If false, the prop is ignored. If true, the grid item&#39;s width grows to use the space available in the grid container. The value is applied for the <code>md</code> breakpoint and wider screens if not overridden."},"mdOffset":{"description":"If a number, it sets the margin-left equals to the number of columns the grid item uses. If &#39;auto&#39;, the grid item push itself to the right-end of the container. The value is applied for the <code>md</code> breakpoint and wider screens if not overridden."},"rowSpacing":{"description":"Defines the vertical space between the type <code>item</code> components. It overrides the value of the <code>spacing</code> prop."},"sm":{"description":"If a number, it sets the number of columns the grid item uses. It can&#39;t be greater than the total number of columns of the container (12 by default). If &#39;auto&#39;, the grid item&#39;s width matches its content. If false, the prop is ignored. If true, the grid item&#39;s width grows to use the space available in the grid container. The value is applied for the <code>sm</code> breakpoint and wider screens if not overridden."},"smOffset":{"description":"If a number, it sets the margin-left equals to the number of columns the grid item uses. If &#39;auto&#39;, the grid item push itself to the right-end of the container. The value is applied for the <code>sm</code> breakpoint and wider screens if not overridden."},"spacing":{"description":"Defines the space between the type <code>item</code> components. It can only be used on a type <code>container</code> component."},"wrap":{"description":"Defines the <code>flex-wrap</code> style property. It&#39;s applied for all screen sizes."},"xl":{"description":"If a number, it sets the number of columns the grid item uses. It can&#39;t be greater than the total number of columns of the container (12 by default). If &#39;auto&#39;, the grid item&#39;s width matches its content. If false, the prop is ignored. If true, the grid item&#39;s width grows to use the space available in the grid container. The value is applied for the <code>xl</code> breakpoint and wider screens if not overridden."},"xlOffset":{"description":"If a number, it sets the margin-left equals to the number of columns the grid item uses. If &#39;auto&#39;, the grid item push itself to the right-end of the container. The value is applied for the <code>xl</code> breakpoint and wider screens if not overridden."},"xs":{"description":"If a number, it sets the number of columns the grid item uses. It can&#39;t be greater than the total number of columns of the container (12 by default). If &#39;auto&#39;, the grid item&#39;s width matches its content. If false, the prop is ignored. If true, the grid item&#39;s width grows to use the space available in the grid container. The value is applied for all the screen sizes with the lowest priority."},"xsOffset":{"description":"If a number, it sets the margin-left equals to the number of columns the grid item uses. If &#39;auto&#39;, the grid item push itself to the right-end of the container. The value is applied for the <code>xs</code> breakpoint and wider screens if not overridden."}},"classDescriptions":{"root":{"description":"Styles applied to the root element."},"container":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>container={true}</code>"},"direction-xs-column":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>direction=\\"column\\"</code>"},"direction-xs-column-reverse":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>direction=\\"column-reverse\\"</code>"},"direction-xs-row-reverse":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>direction=\\"row-reverse\\"</code>"},"wrap-xs-nowrap":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>wrap=\\"nowrap\\"</code>"},"wrap-xs-wrap-reverse":{"description":"Styles applied to {{nodeName}} if {{conditions}}.","nodeName":"the root element","conditions":"<code>wrap=\\"reverse\\"</code>"}}}')}},function(e){e.O(0,[52996,8365,30970,41512,82700,27830,7565,36195,17007,43374,48956,98826,16577,94665,21011,43285,89307,49774,92888,40179],function(){return e(e.s=577896)}),_N_E=e.O()}]);