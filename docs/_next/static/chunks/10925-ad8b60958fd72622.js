"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10925],{670671:function(e,n,t){t.d(n,{k:function(){return w}});var r=t(648611),o=t(777193),a=t(378149),i=t.n(a),l=t(263366),d=t(487462),u=t(667294),c=t(490512),s=t(273953),f=t(602688),p=t(992443),v=t(424633),g=t(564460),N=t(881886),m=t(829624),h=t(743340),b=t(879651),I=t(785893),x=["classes","className","displayIcon","expansionIcon","icon","label","nodeId","onClick","onMouseDown"],y=u.forwardRef(function(e,n){var t=e.classes,r=e.className,o=e.displayIcon,a=e.expansionIcon,i=e.icon,u=e.label,s=e.nodeId,f=e.onClick,p=e.onMouseDown,v=(0,l.Z)(e,x),g=(0,b.I)(s),N=g.disabled,m=g.expanded,h=g.selected,y=g.focused,S=g.handleExpansion,C=g.handleSelection,Z=g.preventSelection;return(0,I.jsxs)("div",(0,d.Z)({},v,{className:(0,c.default)(r,t.root,m&&t.expanded,h&&t.selected,y&&t.focused,N&&t.disabled),onClick:function(e){S(e),C(e),f&&f(e)},onMouseDown:function(e){Z(e),p&&p(e)},ref:n,children:[(0,I.jsx)("div",{className:t.iconContainer,children:i||a||o}),(0,I.jsx)("div",{className:t.label,children:u})]}))}),S=t(921727),C=t(733544),Z=["children","className","collapseIcon","ContentComponent","ContentProps","endIcon","expandIcon","disabled","icon","id","label","nodeId","onClick","onMouseDown","TransitionComponent","TransitionProps"],E=function(e){var n=e.classes;return(0,m.Z)({root:["root"],content:["content"],expanded:["expanded"],selected:["selected"],focused:["focused"],disabled:["disabled"],iconContainer:["iconContainer"],label:["label"],group:["group"]},S.P,n)},P=(0,f.ZP)("li",{name:"MuiTreeItem",slot:"Root",overridesResolver:function(e,n){return n.root}})({listStyle:"none",margin:0,padding:0,outline:0}),k=(0,f.ZP)(y,{name:"MuiTreeItem",slot:"Content",overridesResolver:function(e,n){return[n.content,n.iconContainer&&(0,o.Z)({},"& .".concat(S.r.iconContainer),n.iconContainer),n.label&&(0,o.Z)({},"& .".concat(S.r.label),n.label)]}})(function(e){var n,t=e.theme;return n={padding:"0 8px",width:"100%",boxSizing:"border-box",display:"flex",alignItems:"center",cursor:"pointer",WebkitTapHighlightColor:"transparent","&:hover":{backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,o.Z)(n,"&.".concat(S.r.disabled),{opacity:(t.vars||t).palette.action.disabledOpacity,backgroundColor:"transparent"}),(0,o.Z)(n,"&.".concat(S.r.focused),{backgroundColor:(t.vars||t).palette.action.focus}),(0,o.Z)(n,"&.".concat(S.r.selected),(0,o.Z)({backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,p.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,p.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,p.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}}},"&.".concat(S.r.focused),{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,p.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)})),(0,o.Z)(n,"& .".concat(S.r.iconContainer),{marginRight:4,width:15,display:"flex",flexShrink:0,justifyContent:"center","& svg":{fontSize:18}}),(0,o.Z)(n,"& .".concat(S.r.label),(0,d.Z)({paddingLeft:4,width:"100%",boxSizing:"border-box",minWidth:0,position:"relative"},t.typography.body1)),n}),R=(0,f.ZP)(s.Z,{name:"MuiTreeItem",slot:"Group",overridesResolver:function(e,n){return n.group}})({margin:0,padding:0,marginLeft:17}),w=u.forwardRef(function(e,n){var t,o,a,f,p=(0,v.Z)({props:e,name:"MuiTreeItem"}),m=p.children,b=p.className,x=p.collapseIcon,S=p.ContentComponent,w=void 0===S?y:S,T=p.ContentProps,O=p.endIcon,D=p.expandIcon,F=p.disabled,M=p.icon,K=p.id,V=p.label,j=p.nodeId,L=p.onClick,A=p.onMouseDown,z=p.TransitionComponent,$=void 0===z?s.Z:z,_=p.TransitionProps,q=(0,l.Z)(p,Z),B=(0,C.E)(),G=B.icons,H=B.multiSelect,U=B.disabledItemsFocusable,W=B.treeId,Y=B.instance;null!=K?t=K:W&&j&&(t="".concat(W,"-").concat(j));var J=u.useState(null),Q=(0,r.Z)(J,2),X=Q[0],ee=Q[1],en=u.useRef(null),et=(0,N.Z)(ee,n),er=u.useMemo(function(){return{element:X,id:j}},[j,X]),eo=(0,h.Y)(er),ea=eo.index,ei=eo.parentId,el=!!(i()(m)?m.length:m),ed=!!Y&&Y.isNodeExpanded(j),eu=!!Y&&Y.isNodeFocused(j),ec=!!Y&&Y.isNodeSelected(j),es=!!Y&&Y.isNodeDisabled(j),ef=(0,d.Z)({},p,{expanded:ed,focused:eu,selected:ec,disabled:es}),ep=E(ef);return el&&(a=ed?x||G.defaultCollapseIcon:D||G.defaultExpandIcon),o=el?G.defaultParentIcon:O||G.defaultEndIcon,u.useEffect(function(){if(Y&&-1!==ea)return Y.updateNode({id:j,idAttribute:t,index:ea,parentId:ei,expandable:el,disabled:F}),function(){return Y.removeNode(j)}},[Y,ei,ea,j,el,F,t]),u.useEffect(function(){if(Y&&V){var e,n;return Y.mapFirstChar(j,(null!=(e=null==(n=en.current)?void 0:n.textContent)?e:"").substring(0,1).toLowerCase())}},[Y,j,V]),H?f=ec:ec&&(f=!0),(0,I.jsxs)(P,(0,d.Z)({className:(0,c.default)(ep.root,b),role:"treeitem","aria-expanded":el?ed:void 0,"aria-selected":f,"aria-disabled":es||void 0,id:t,tabIndex:-1},q,{ownerState:ef,onFocus:function(e){e.target===e.currentTarget&&("function"==typeof e.target.getRootNode?e.target.getRootNode():(0,g.Z)(e.target)).getElementById(W).focus({preventScroll:!0}),!Y||eu||e.currentTarget!==e.target||!U&&es||Y.focusNode(e,j)},ref:et,children:[(0,I.jsx)(k,(0,d.Z)({as:w,ref:en,classes:{root:ep.content,expanded:ep.expanded,selected:ep.selected,focused:ep.focused,disabled:ep.disabled,iconContainer:ep.iconContainer,label:ep.label},label:V,nodeId:j,onClick:L,onMouseDown:A,icon:M,expansionIcon:a,displayIcon:o,ownerState:ef},T)),m&&(0,I.jsx)(h.w,{id:j,children:(0,I.jsx)(R,(0,d.Z)({as:$,unmountOnExit:!0,className:ep.group,in:ed,component:"ul",role:"group"},_,{children:m}))})]}))})},921727:function(e,n,t){t.d(n,{P:function(){return o},r:function(){return a}});var r=t(899933);function o(e){return(0,r.Z)("MuiTreeItem",e)}var a=(0,t(173729).Z)("MuiTreeItem",["root","group","content","expanded","selected","focused","disabled","iconContainer","label"])},879651:function(e,n,t){t.d(n,{I:function(){return o}});var r=t(733544);function o(e){var n=(0,r.E)(),t=n.instance,o=n.multiSelect,a=!!t&&t.isNodeExpandable(e),i=!!t&&t.isNodeExpanded(e),l=!!t&&t.isNodeFocused(e),d=!!t&&t.isNodeSelected(e),u=!!t&&t.isNodeDisabled(e);return{disabled:u,expanded:i,selected:d,focused:l,handleExpansion:function(n){if(t&&!u){l||t.focusNode(n,e);var r=o&&(n.shiftKey||n.ctrlKey||n.metaKey);a&&!(r&&t.isNodeExpanded(e))&&t.toggleNodeExpansion(n,e)}},handleSelection:function(n){t&&!u&&(l||t.focusNode(n,e),o&&(n.shiftKey||n.ctrlKey||n.metaKey)?n.shiftKey?t.selectRange(n,{end:e}):t.selectNode(n,e,!0):t.selectNode(n,e))},preventSelection:function(e){(e.shiftKey||e.ctrlKey||e.metaKey||u)&&e.preventDefault()}}}},811527:function(e,n,t){t.d(n,{L:function(){return ef}});var r,o,a=t(487462),i=t(263366),l=t(667294),d=t(602688),u=t(424633),c=t(829624),s=t(315412),f=t(899933);function p(e){return(0,f.Z)("MuiTreeView",e)}(0,t(173729).Z)("MuiTreeView",["root"]);var v=t(69055),g=t(648611),N=t(849088),m=t(881886),h=t(628558),b=t(777193),I=t(343562),x=t.n(I);t(508450);var y=function(e,n){var t=l.useRef({}),r=l.useState(function(){var r={};return e.forEach(function(e){e.models&&x()(e.models).forEach(function(e){var o=(0,g.Z)(e,2),a=o[0],i=o[1];t.current[a]={controlledProp:i.controlledProp,defaultProp:i.defaultProp,isControlled:void 0!==n[i.controlledProp]},r[a]=n[i.defaultProp]})}),r}),o=(0,g.Z)(r,2),i=o[0],d=o[1];return Object.fromEntries(x()(t.current).map(function(e){var t=(0,g.Z)(e,2),r=t[0],o=t[1],l=o.isControlled?n[o.controlledProp]:i[r];return[r,{value:l,setValue:function(e){o.isControlled||d(function(n){return(0,a.Z)({},n,(0,b.Z)({},r,e))})}}]}))},S=t(8167),C=t(731314),Z=t(18281),E=t.n(Z),P=t(27921),k=t.n(P),R=function(){function e(){(0,S.Z)(this,e),this.maxListeners=20,this.warnOnce=!1,this.events={}}return(0,C.Z)(e,[{key:"on",value:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=this.events[e];r||(r={highPriority:new(E()),regular:new(E())},this.events[e]=r),t.isFirst?r.highPriority.set(n,!0):r.regular.set(n,!0)}},{key:"removeListener",value:function(e,n){this.events[e]&&(this.events[e].regular.delete(n),this.events[e].highPriority.delete(n))}},{key:"removeAllListeners",value:function(){this.events={}}},{key:"emit",value:function(e){var n=this.events[e];if(n){for(var t=k()(n.highPriority.keys()),r=k()(n.regular.keys()),o=arguments.length,a=Array(o>1?o-1:0),i=1;i<o;i++)a[i-1]=arguments[i];for(var l=t.length-1;l>=0;l-=1){var d=t[l];n.highPriority.has(d)&&d.apply(this,a)}for(var u=0;u<r.length;u+=1){var c=r[u];n.regular.has(c)&&c.apply(this,a)}}}},{key:"once",value:function(e,n){var t=this;this.on(e,function r(){t.removeListener(e,r);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];n.apply(t,a)})}}]),e}(),w=function(e,n){var t=e.getNode(n),r=e.getNavigableChildrenIds(t.parentId),o=r.indexOf(n);if(0===o)return t.parentId;for(var a=r[o-1];e.isNodeExpanded(a)&&e.getNavigableChildrenIds(a).length>0;)a=e.getNavigableChildrenIds(a).pop();return a},T=function(e,n){if(e.isNodeExpanded(n)&&e.getNavigableChildrenIds(n).length>0)return e.getNavigableChildrenIds(n)[0];for(var t=e.getNode(n);null!=t;){var r=e.getNavigableChildrenIds(t.parentId),o=r[r.indexOf(t.id)+1];if(o)return o;t=e.getNode(t.parentId)}return null},O=function(e){for(var n=e.getNavigableChildrenIds(null).pop();e.isNodeExpanded(n);)n=e.getNavigableChildrenIds(n).pop();return n},D=function(e){return e.getNavigableChildrenIds(null)[0]},F=function(e,n){(0,v.Z)(e,n)},M=[function(e){var n=e.instance,t=l.useState(function(){return new R}),r=(0,g.Z)(t,1)[0];F(n,{$$publishEvent:l.useCallback(function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=n[0],a=n[1],i=n[2],l=void 0===i?{}:i;l.defaultMuiPrevented=!1,void 0!==l.isPropagationStopped&&l.isPropagationStopped()||r.emit(o,a,l)},[r]),$$subscribeEvent:l.useCallback(function(e,n){return r.on(e,n),function(){r.removeListener(e,n)}},[r])})}],K=function(e){var n=[].concat((0,N.Z)(M),(0,N.Z)(e.plugins)),t=n.reduce(function(e,n){return n.getDefaultizedParams?n.getDefaultizedParams(e):e},e),r=y(n,t),o=l.useRef({}).current,i=l.useRef(null),d=(0,m.Z)(i,e.rootRef),u=l.useState(function(){var e={};return n.forEach(function(n){n.getInitialState&&(0,v.Z)(e,n.getInitialState(t))}),e}),c=(0,g.Z)(u,2),s=c[0],f=c[1],p=[],b=h.P;return n.forEach(function(e){var n=e({instance:o,params:t,state:s,setState:f,rootRef:i,models:r})||{};n.getRootProps&&p.push(n.getRootProps),n.contextValue&&(b=n.contextValue)}),{getRootProps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,a.Z)({role:"tree",tabIndex:0},e,{ref:d});return p.forEach(function(t){(0,v.Z)(n,t(e))}),n},rootRef:d,contextValue:b}},V=t(743340),j=t(785893);function L(e){var n=e.value,t=e.children;return(0,j.jsx)(h.d.Provider,{value:n,children:(0,j.jsx)(V.w,{children:t})})}var A=t(418433),z=t.n(A),$=t(92557),_=function(e,n,t){e.$$publishEvent(n,t)},q=t(378149),B=t.n(q),G=function(e){var n=e.instance,t=e.params,r=e.models,o=l.useCallback(function(e){return!!B()(r.expanded.value)&&-1!==r.expanded.value.indexOf(e)},[r.expanded.value]),a=l.useCallback(function(e){var t;return!!(null!=(t=n.getNode(e))&&t.expandable)},[n]);F(n,{isNodeExpanded:o,isNodeExpandable:a,toggleNodeExpansion:(0,$.Z)(function(e,n){var o;null!=n&&(o=-1!==r.expanded.value.indexOf(n)?r.expanded.value.filter(function(e){return e!==n}):[n].concat(r.expanded.value),t.onNodeToggle&&t.onNodeToggle(e,o),r.expanded.setValue(o))}),expandAllSiblings:function(e,o){var a=n.getNode(o),i=n.getChildrenIds(a.parentId).filter(function(e){return n.isNodeExpandable(e)&&!n.isNodeExpanded(e)}),l=r.expanded.value.concat(i);i.length>0&&(r.expanded.setValue(l),t.onNodeToggle&&t.onNodeToggle(e,l))}})};G.models={expanded:{controlledProp:"expanded",defaultProp:"defaultExpanded"}};var H=[];G.getDefaultizedParams=function(e){var n;return(0,a.Z)({},e,{defaultExpanded:null!=(n=e.defaultExpanded)?n:H})};var U=function(e,n,t){if(n===t)return[n,t];var r=e.getNode(n),o=e.getNode(t);if(r.parentId===o.id||o.parentId===r.id)return o.parentId===r.id?[r.id,o.id]:[o.id,r.id];for(var a=[r.id],i=[o.id],l=r.parentId,d=o.parentId,u=-1!==i.indexOf(l),c=-1!==a.indexOf(d),s=!0,f=!0;!c&&!u;)s&&(a.push(l),u=-1!==i.indexOf(l),s=null!==l,!u&&s&&(l=e.getNode(l).parentId)),f&&!u&&(i.push(d),c=-1!==a.indexOf(d),f=null!==d,!c&&f&&(d=e.getNode(d).parentId));var p=u?l:d,v=e.getChildrenIds(p),g=a[a.indexOf(p)-1],N=i[i.indexOf(p)-1];return v.indexOf(g)<v.indexOf(N)?[n,t]:[t,n]},W=function(e){var n=e.instance,t=e.params,r=e.models,o=l.useRef(null),a=l.useRef(!1),i=l.useRef([]),d=function(e,t){for(var r=U(n,e,t),o=(0,g.Z)(r,2),a=o[0],i=o[1],l=[a],d=a;d!==i;)l.push(d=T(n,d));return l},u=function(e,n){var o=r.selected.value.slice(),l=n.start,d=n.next,u=n.current;d&&u&&(-1===i.current.indexOf(u)&&(i.current=[]),a.current?-1!==i.current.indexOf(d)?(o=o.filter(function(e){return e===l||e!==u}),i.current=i.current.filter(function(e){return e===l||e!==u})):(o.push(d),i.current.push(d)):(o.push(d),i.current.push(u,d)),t.onNodeSelect&&t.onNodeSelect(e,o),r.selected.setValue(o))},c=function(e,o){var l=r.selected.value.slice(),u=o.start,c=o.end;a.current&&(l=l.filter(function(e){return -1===i.current.indexOf(e)}));var s=d(u,c);s=s.filter(function(e){return!n.isNodeDisabled(e)}),i.current=s;var f=l.concat(s);f=f.filter(function(e,n){return f.indexOf(e)===n}),t.onNodeSelect&&t.onNodeSelect(e,f),r.selected.setValue(f)};return F(n,{isNodeSelected:function(e){return B()(r.selected.value)?-1!==r.selected.value.indexOf(e):r.selected.value===e},selectNode:function(e,n){var l,d=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!t.disableSelection){if(d)B()(r.selected.value)&&(l=-1!==r.selected.value.indexOf(n)?r.selected.value.filter(function(e){return e!==n}):[n].concat(r.selected.value),t.onNodeSelect&&t.onNodeSelect(e,l),r.selected.setValue(l));else{var u=t.multiSelect?[n]:n;t.onNodeSelect&&t.onNodeSelect(e,u),r.selected.setValue(u)}o.current=n,a.current=!1,i.current=[]}},selectRange:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!t.disableSelection){var i=n.start,l=void 0===i?o.current:i,d=n.end,s=n.current;r?u(e,{start:l,next:d,current:s}):null!=l&&null!=d&&c(e,{start:l,end:d}),a.current=!0}},rangeSelectToLast:function(e,t){o.current||(o.current=t);var r=a.current?o.current:t;n.selectRange(e,{start:r,end:O(n)})},rangeSelectToFirst:function(e,t){o.current||(o.current=t);var r=a.current?o.current:t;n.selectRange(e,{start:r,end:D(n)})}}),{getRootProps:function(){return{"aria-multiselectable":t.multiSelect}}}};W.models={selected:{controlledProp:"selected",defaultProp:"defaultSelected"}};var Y=[];W.getDefaultizedParams=function(e){var n,t,r;return(0,a.Z)({},e,{disableSelection:null!=(n=e.disableSelection)&&n,multiSelect:null!=(t=e.multiSelect)&&t,defaultSelected:null!=(r=e.defaultSelected)?r:e.multiSelect?Y:null})};var J=t(564460),Q=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;(0,S.Z)(this,e),this.timeouts=new(E()),this.cleanupTimeout=1e3,this.cleanupTimeout=n}return(0,C.Z)(e,[{key:"register",value:function(e,n,t){var r=this;this.timeouts||(this.timeouts=new(E()));var o=setTimeout(function(){"function"==typeof n&&n(),r.timeouts.delete(t.cleanupToken)},this.cleanupTimeout);this.timeouts.set(t.cleanupToken,o)}},{key:"unregister",value:function(e){var n=this.timeouts.get(e.cleanupToken);n&&(this.timeouts.delete(e.cleanupToken),clearTimeout(n))}},{key:"reset",value:function(){var e=this;this.timeouts&&(this.timeouts.forEach(function(n,t){e.unregister({cleanupToken:t})}),this.timeouts=void 0)}}]),e}(),X=function(){function e(){(0,S.Z)(this,e),this.registry=new FinalizationRegistry(function(e){"function"==typeof e&&e()})}return(0,C.Z)(e,[{key:"register",value:function(e,n,t){this.registry.register(e,n,t)}},{key:"unregister",value:function(e){this.registry.unregister(e)}},{key:"reset",value:function(){}}]),e}(),ee=(0,C.Z)(function e(){(0,S.Z)(this,e)}),en=(r={registry:null},o=0,function(e,n,t){null===r.registry&&(r.registry="undefined"!=typeof FinalizationRegistry?new X:new Q);var a=l.useState(new ee),i=(0,g.Z)(a,1)[0],d=l.useRef(null),u=l.useRef();u.current=t;var c=l.useRef(null);!d.current&&u.current?(d.current=e.$$subscribeEvent(n,function(e,n){if(!n.defaultMuiPrevented){var t;null==(t=u.current)||t.call(u,e,n)}}),o+=1,c.current={cleanupToken:o},r.registry.register(i,function(){var e;null==(e=d.current)||e.call(d),d.current=null,c.current=null},c.current)):!u.current&&d.current&&(d.current(),d.current=null,c.current&&(r.registry.unregister(c.current),c.current=null)),l.useEffect(function(){return!d.current&&u.current&&(d.current=e.$$subscribeEvent(n,function(e,n){if(!n.defaultMuiPrevented){var t;null==(t=u.current)||t.call(u,e,n)}})),c.current&&r.registry&&(r.registry.unregister(c.current),c.current=null),function(){var e;null==(e=d.current)||e.call(d),d.current=null}},[e,n])}),et=function(e){var n=e.instance,t=e.params,r=e.state,o=e.setState,i=e.models,d=e.rootRef,u=(0,$.Z)(function(e){var n="function"==typeof e?e(r.focusedNodeId):e;o(function(e){return(0,a.Z)({},e,{focusedNodeId:n})})});F(n,{isNodeFocused:l.useCallback(function(e){return r.focusedNodeId===e},[r.focusedNodeId]),focusNode:(0,$.Z)(function(e,n){n&&(u(n),t.onNodeFocus&&t.onNodeFocus(e,n))})}),en(n,"removeNode",function(e){var t=e.id;u(function(e){return e===t&&d.current===(0,J.Z)(d.current).activeElement?n.getChildrenIds(null)[0]:e})});var c=n.getNode(r.focusedNodeId),s=c?c.idAttribute:null;return{getRootProps:function(e){return{onFocus:function(t){var r;if(null==(r=e.onFocus)||r.call(e,t),t.target===t.currentTarget){var o,a=function(e){var t=n.getNode(e);return t&&(null==t.parentId||n.isNodeExpanded(t.parentId))};B()(i.selected.value)?o=i.selected.value.find(a):null!=i.selected.value&&a(i.selected.value)&&(o=i.selected.value),null==o&&(o=n.getNavigableChildrenIds(null)[0]),n.focusNode(t,o)}},onBlur:function(n){var t;null==(t=e.onBlur)||t.call(e,n),u(null)},"aria-activedescendant":null!=s?s:void 0}}}};et.getInitialState=function(){return{focusedNodeId:null}},et.getDefaultizedParams=function(e){var n;return(0,a.Z)({},e,{disabledItemsFocusable:null!=(n=e.disabledItemsFocusable)&&n})};var er=t(726243),eo=t.n(er),ea=t(178198);function ei(e,n,t){for(var r=n;r<e.length;r+=1)if(t===e[r])return r;return -1}var el=t(27262),ed=[function(e){var n=e.instance,t=e.params,r=l.useRef({}),o=l.useCallback(function(e){return r.current[e]},[]),i=l.useCallback(function(e){r.current[e.id]=e},[]),d=l.useCallback(function(e){var t=(0,a.Z)({},r.current);delete t[e],r.current=t,_(n,"removeNode",{id:e})},[n]),u=l.useCallback(function(e){if(null==e)return!1;var t=n.getNode(e);if(!t)return!1;if(t.disabled)return!0;for(;null!=t.parentId;)if((t=n.getNode(t.parentId)).disabled)return!0;return!1},[n]);F(n,{getNode:o,updateNode:i,removeNode:d,getChildrenIds:(0,$.Z)(function(e){return z()(r.current).filter(function(n){return n.parentId===e}).sort(function(e,n){return e.index-n.index}).map(function(e){return e.id})}),getNavigableChildrenIds:function(e){var r=n.getChildrenIds(e);return t.disabledItemsFocusable||(r=r.filter(function(e){return!n.isNodeDisabled(e)})),r},isNodeDisabled:u})},G,W,et,function(e){var n=e.instance,t=e.params,r=e.state,o="rtl"===(0,ea.Z)().direction,i=l.useRef({});F(n,{mapFirstChar:(0,$.Z)(function(e,n){return i.current[e]=n,function(){var n=(0,a.Z)({},i.current);delete n[e],i.current=n}})});var d=function(e){return null!=r.focusedNodeId&&n.isNodeExpandable(r.focusedNodeId)&&(n.isNodeExpanded(r.focusedNodeId)?n.focusNode(e,T(n,r.focusedNodeId)):n.isNodeDisabled(r.focusedNodeId)||n.toggleNodeExpansion(e,r.focusedNodeId)),!0},u=function(e){if(null==r.focusedNodeId)return!1;if(n.isNodeExpanded(r.focusedNodeId)&&!n.isNodeDisabled(r.focusedNodeId))return n.toggleNodeExpansion(e,r.focusedNodeId),!0;var t=n.getNode(r.focusedNodeId).parentId;return!!t&&(n.focusNode(e,t),!0)},c=function(e,r,o){var a,l,d=o.toLowerCase(),u=[],c=[];eo()(i.current).forEach(function(e){var r=n.getNode(e),o=!r.parentId||n.isNodeExpanded(r.parentId),a=!t.disabledItemsFocusable&&n.isNodeDisabled(e);o&&!a&&(u.push(e),c.push(i.current[e]))}),(a=u.indexOf(r)+1)>=u.length&&(a=0),-1===(l=ei(c,a,d))&&(l=ei(c,0,d)),l>-1&&n.focusNode(e,u[l])},s=function(e,t){n.isNodeDisabled(T(n,t))||n.selectRange(e,{end:T(n,t),current:t},!0)},f=function(e,t){n.isNodeDisabled(w(n,t))||n.selectRange(e,{end:w(n,t),current:t},!0)};return{getRootProps:function(e){return{onKeyDown:function(a){null==(l=e.onKeyDown)||l.call(e,a);var i,l,p=!1,v=a.key;if(!a.altKey&&a.currentTarget===a.target&&null!=r.focusedNodeId){var g=a.ctrlKey||a.metaKey;switch(v){case" ":t.disableSelection||n.isNodeDisabled(r.focusedNodeId)||(p=!0,t.multiSelect&&a.shiftKey?n.selectRange(a,{end:r.focusedNodeId}):t.multiSelect?n.selectNode(a,r.focusedNodeId,!0):n.selectNode(a,r.focusedNodeId)),a.stopPropagation();break;case"Enter":n.isNodeDisabled(r.focusedNodeId)||(n.isNodeExpandable(r.focusedNodeId)?(n.toggleNodeExpansion(a,r.focusedNodeId),p=!0):t.disableSelection||(p=!0,t.multiSelect?n.selectNode(a,r.focusedNodeId,!0):n.selectNode(a,r.focusedNodeId))),a.stopPropagation();break;case"ArrowDown":t.multiSelect&&a.shiftKey&&!t.disableSelection&&s(a,r.focusedNodeId),n.focusNode(a,T(n,r.focusedNodeId)),p=!0;break;case"ArrowUp":t.multiSelect&&a.shiftKey&&!t.disableSelection&&f(a,r.focusedNodeId),n.focusNode(a,w(n,r.focusedNodeId)),p=!0;break;case"ArrowRight":p=o?u(a):d(a);break;case"ArrowLeft":p=o?d(a):u(a);break;case"Home":t.multiSelect&&g&&a.shiftKey&&!t.disableSelection&&!n.isNodeDisabled(r.focusedNodeId)&&n.rangeSelectToFirst(a,r.focusedNodeId),n.focusNode(a,D(n)),p=!0;break;case"End":t.multiSelect&&g&&a.shiftKey&&!t.disableSelection&&!n.isNodeDisabled(r.focusedNodeId)&&n.rangeSelectToLast(a,r.focusedNodeId),n.focusNode(a,O(n)),p=!0;break;default:"*"===v?(n.expandAllSiblings(a,r.focusedNodeId),p=!0):t.multiSelect&&g&&"a"===v.toLowerCase()&&!t.disableSelection?(n.selectRange(a,{start:D(n),end:O(n)}),p=!0):!g&&!a.shiftKey&&(i=v)&&1===i.length&&i.match(/\S/)&&(c(a,r.focusedNodeId,v),p=!0)}p&&(a.preventDefault(),a.stopPropagation())}}}}}},function(e){var n=e.instance,t=e.params,r=(0,el.Z)(t.id);return{getRootProps:function(){return{id:r}},contextValue:{treeId:r,instance:n,multiSelect:t.multiSelect,disabledItemsFocusable:t.disabledItemsFocusable,icons:{defaultCollapseIcon:t.defaultCollapseIcon,defaultEndIcon:t.defaultEndIcon,defaultExpandIcon:t.defaultExpandIcon,defaultParentIcon:t.defaultParentIcon}}}}],eu=["disabledItemsFocusable","expanded","defaultExpanded","onNodeToggle","onNodeFocus","disableSelection","defaultSelected","selected","multiSelect","onNodeSelect","id","defaultCollapseIcon","defaultEndIcon","defaultExpandIcon","defaultParentIcon","children"],ec=function(e){var n=e.classes;return(0,c.Z)({root:["root"]},p,n)},es=(0,d.ZP)("ul",{name:"MuiTreeView",slot:"Root",overridesResolver:function(e,n){return n.root}})({padding:0,margin:0,listStyle:"none",outline:0}),ef=l.forwardRef(function(e,n){var t=(0,u.Z)({props:e,name:"MuiTreeView"}),r=t.disabledItemsFocusable,o=t.expanded,l=t.defaultExpanded,d=t.onNodeToggle,c=t.onNodeFocus,f=t.disableSelection,p=t.defaultSelected,v=t.selected,g=t.multiSelect,N=t.onNodeSelect,m=t.id,h=t.defaultCollapseIcon,b=t.defaultEndIcon,I=t.defaultExpandIcon,x=t.defaultParentIcon,y=t.children,S=(0,i.Z)(t,eu),C=K({disabledItemsFocusable:r,expanded:o,defaultExpanded:l,onNodeToggle:d,onNodeFocus:c,disableSelection:f,defaultSelected:p,selected:v,multiSelect:g,onNodeSelect:N,id:m,defaultCollapseIcon:h,defaultEndIcon:b,defaultExpandIcon:I,defaultParentIcon:x,plugins:ed,rootRef:n}),Z=C.getRootProps,E=C.contextValue,P=ec(t),k=(0,s.y)({elementType:es,externalSlotProps:{},externalForwardedProps:S,className:P.root,getSlotProps:Z,ownerState:t});return(0,j.jsx)(L,{value:E,children:(0,j.jsx)(es,(0,a.Z)({},k,{children:y}))})})},743340:function(e,n,t){t.d(n,{Y:function(){return f},w:function(){return p}});var r=t(648611),o=t(263366),a=t(487462),i=t(667294),l=t(375437),d=t(785893),u=["element"],c=i.createContext({}),s=function(){};function f(e){var n,t=i.useState(),o=(0,r.Z)(t,2)[1],d=i.useContext(c),u=d.registerDescendant,f=void 0===u?s:u,p=d.unregisterDescendant,v=void 0===p?s:p,g=d.descendants,N=void 0===g?[]:g,m=d.parentId,h=function(e,n){for(var t=0;t<e.length;t+=1)if(n(e[t]))return t;return -1}(N,function(n){return n.element===e.element}),b=(n=i.useRef(null),i.useEffect(function(){n.current=N},[N]),n.current),I=N.some(function(e,n){return b&&b[n]&&b[n].element!==e.element});return(0,l.Z)(function(){if(e.element)return f((0,a.Z)({},e,{index:h})),function(){v(e.element)};o({})},[f,v,h,I,e]),{parentId:void 0===m?null:m,index:h}}function p(e){var n=e.children,t=e.id,l=i.useState([]),s=(0,r.Z)(l,2),f=s[0],p=s[1],v=i.useCallback(function(e){var n=e.element,t=(0,o.Z)(e,u);p(function(e){if(0===e.length)return[(0,a.Z)({},t,{element:n,index:0})];var r,o=function(e,n){for(var t=0,r=e.length-1;t<=r;){var o=Math.floor((t+r)/2);if(e[o].element===n)return o;e[o].element.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_PRECEDING?r=o-1:t=o+1}return t}(e,n);if(e[o]&&e[o].element===n)r=e;else{var i=(0,a.Z)({},t,{element:n,index:o});(r=e.slice()).splice(o,0,i)}return r.forEach(function(e,n){e.index=n}),r})},[]),g=i.useCallback(function(e){p(function(n){return n.filter(function(n){return e!==n.element})})},[]),N=i.useMemo(function(){return{descendants:f,registerDescendant:v,unregisterDescendant:g,parentId:t}},[f,v,g,t]);return(0,d.jsx)(c.Provider,{value:N,children:n})}},628558:function(e,n,t){t.d(n,{P:function(){return o},d:function(){return a}});var r=t(667294),o={instance:null,multiSelect:!1,disabledItemsFocusable:!1,treeId:void 0,icons:{defaultCollapseIcon:null,defaultExpandIcon:null,defaultParentIcon:null,defaultEndIcon:null}},a=r.createContext(o)},733544:function(e,n,t){t.d(n,{E:function(){return a}});var r=t(667294),o=t(628558),a=function(){return r.useContext(o.d)}}}]);