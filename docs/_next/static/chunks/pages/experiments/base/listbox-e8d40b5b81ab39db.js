(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25311],{913723:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return v}});var i,r=t(648611),o=t(163804),a=t(27921),l=t.n(a),s=t(18281),c=t.n(s),u=t(667294),d=t(490512),f=t(61272),x=t(258693),h=t(733762),g=t(785893),b=l()({length:200},function(n,e){return e+1}),p=u.forwardRef(function(n,e){var t=n.value,i=n.id,r=(0,f.J)({item:t,rootRef:e}),a=r.getRootProps,l=r.selected,s=r.highlighted,c=a(),u=(0,d.default)("item",s&&"highlighted",l&&"selected");return(0,g.jsx)("div",(0,o.Z)((0,o.Z)({},c),{},{className:u,id:i,children:t}))});function m(){var n,e=u.useState("horizontal-ltr"),t=(0,r.Z)(e,2),i=t[0],a=t[1],l=u.useState("activeDescendant"),s=(0,r.Z)(l,2),d=s[0],f=s[1];switch(i){case"horizontal-ltr":n="row";break;case"horizontal-rtl":n="row-reverse";break;default:n="column"}var m=u.useRef(new(c())),v=(0,x.s)({items:b,getItemDomElement:u.useCallback(function(n){return m.current.get(n)||null},[]),getItemId:u.useCallback(function(n){return"item-".concat(n)},[]),orientation:i,focusManagement:d,selectionMode:"single"}),j=v.getRootProps,k=v.contextValue,w=v.state,y=w.selectedValues,N=w.highlightedValue,_=u.useCallback(function(n,e){e?m.current.set(n,e):m.current.delete(n)},[]);return(0,g.jsxs)(u.Fragment,{children:[(0,g.jsxs)("div",{className:"controls",children:[(0,g.jsxs)("div",{children:["Orientation:\xa0",(0,g.jsx)("button",{type:"button",onClick:function(){return a("horizontal-ltr")},className:"horizontal-ltr"===i?"active":"",children:"horizontal-ltr"}),(0,g.jsx)("button",{type:"button",onClick:function(){return a("horizontal-rtl")},className:"horizontal-rtl"===i?"active":"",children:"horizontal-rtl"}),(0,g.jsx)("button",{type:"button",onClick:function(){return a("vertical")},className:"vertical"===i?"active":"",children:"vertical"})]}),(0,g.jsxs)("div",{children:["Focus management:\xa0",(0,g.jsx)("button",{type:"button",onClick:function(){return f("activeDescendant")},className:"activeDescendant"===d?"active":"",children:"activeDescendant"}),(0,g.jsx)("button",{type:"button",onClick:function(){return f("DOM")},className:"DOM"===d?"active":"",children:"DOM"})]})]}),(0,g.jsxs)("div",{className:"state",children:[(0,g.jsxs)("pre",{children:["Selected: ",y.join(", ")]}),(0,g.jsxs)("pre",{children:["Highlighted: ",null!=N?N:"(none)"]})]}),(0,g.jsx)("div",(0,o.Z)((0,o.Z)({},j()),{},{className:"list",style:{flexDirection:n},children:(0,g.jsx)(h.Z.Provider,{value:k,children:b.map(function(n){return(0,g.jsx)(p,{value:n,ref:function(e){return _(n,e)},id:"item-".concat(n)},n)})})}))]})}function v(){return(0,g.jsxs)(u.Fragment,{children:[(0,g.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n  body {\n    padding: 0;\n    margin: 0;\n    font-family: IBM Plex Sans, sans-serif;\n  }\n\n  .list {\n    display: flex;\n    gap: 16px;\n    align-items: center;\n    justify-content: flex-start;\n    max-height: 70vh;\n    padding: 16px;\n    width: 100vw;\n    flex-wrap: wrap;\n    background: linear-gradient(-30deg, #009245, #FCEE21);\n    box-sizing: border-box;\n    margin: 0;\n  }\n\n  .list:focus-visible {\n    outline: none;\n  }\n\n  .item {\n    width: 50px;\n    height: 50px;\n    flex: 0 0 auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    border-radius: 4px;\n    box-sizing: border-box;\n    background: linear-gradient(-30deg, #f5f5f5, #fff);\n    font-size: 18px;\n    color: #333;\n    user-select: none;\n    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1), 0 4px 4px -2px rgba(0, 0, 0, 0.15);\n  }\n\n  .item.highlighted:not([tabindex]),\n  .item:focus-visible\n   {\n    outline: 2px solid #fff;\n    outline-offset: 4px;\n  }\n\n  .item.selected {\n    background: linear-gradient(-30deg, #363636, #666);\n    color: #fff;\n  }\n\n  .controls {\n    padding: 16px;\n  }\n\n  .controls > div {\n    margin-bottom: 8px;\n  }\n\n  .controls button {\n    border: 1px solid #999;\n    background: #fff;\n    padding: 8px 16px;\n    border-radius: 4px;\n    font-family: inherit;\n    margin: 0 4px;\n    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1), 0 4px 4px -2px rgba(0, 0, 0, 0.15);\n  }\n\n  .controls button.active {\n    background: #73bc34;\n    color: #fff;\n  }\n\n  .state {\n    padding: 16px;\n    background: #202020;\n    color: #fff;\n  }"}}),i||(i=(0,g.jsx)(m,{}))]})}},117385:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/experiments/base/listbox",function(){return t(913723)}])}},function(n){n.O(0,[44749,49774,92888,40179],function(){return n(n.s=117385)}),_N_E=n.O()}]);