"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[71550],{71550:function(e,o,n){n.d(o,{_$:function(){return X},nR:function(){return eo},Hj:function(){return ee}});var r=n(487462),l=n(667294),i=n(45697),t=n.n(i),a=n(928125),u=n(154691),s=n(813639),c=n(341490),d=n(325286),f=n(662585),b=n(372828),p=n(267476),m=n(734594),g=n(74246),C=n(217978),h=n(747457),R=n(248346),w=n(595294),O=n(553723),M=n(291400),y=n(516969),S=n(96083),j=n(976933),v=n(30584),P=n(327587),x=n(291580),q=n(368056),D=n(937520),E=n(742642),k=n(544369),H=n(483237),T=n(7730),F=n(232989),N=n(266739),z=n(342811),I=n(846144),V=n(712848),G=n(746578),Z=function(e,o){var n=(0,b.S)(e,o);return(0,E.$)(n,o),(0,x.Q)(n),(0,p.l)(D.x,n,o),(0,p.l)(C.P,n,o),(0,p.l)(P.F,n,o),(0,p.l)(v.U,n,o),(0,p.l)(M.W,n,o),(0,p.l)(k.Q,n,o),(0,p.l)(j.Z,n,o),(0,p.l)(O.B,n,o),(0,p.l)(h.ce,n,o),(0,p.l)(S.IL,n,o),(0,p.l)(N.Q,n,o),(0,p.l)(g.V,n,o),(0,p.l)(V.u,n,o),(0,p.l)(G.N,n,o),(0,y.D)(n,o),(0,D.r)(n,o),(0,C.C)(n,o),(0,P.K)(n,o),(0,q.G)(n,o),(0,I.n)(n),(0,V.a)(n,o),(0,v.s)(n,o),(0,M.z)(n,o),(0,j.M)(n,o),(0,O.L)(n,o),(0,k.G)(n,o),(0,h.km)(n,o),(0,S.ev)(n,o),(0,N.y)(n,o),(0,H.K)(n,o),(0,g.p)(n),(0,R._)(n,o),(0,w.d)(n,o),(0,m.D)(n,o),(0,F.J)(n,o),(0,T.I)(n,o),(0,z.s)(n),(0,G.f)(n,o),n},_=n(53698),B=n(263366),U=n(949526),L=n(960149),J=n(192311),K=n(823981),Q=n(206275),Y=n(785893),$=["className"],A=l.forwardRef(function(e,o){var n=e.className,l=(0,B.Z)(e,$),i=(0,K.cD)({ref:o}),t=i.getRootProps,a=i.getContentProps,u=i.getRenderZoneProps,s=i.getRows;return(0,Y.jsxs)(U.O,(0,r.Z)({className:n},t(l),{children:[(0,Y.jsx)(Q.P,{}),(0,Y.jsx)(L._,(0,r.Z)({},a(),{children:(0,Y.jsx)(J.H,(0,r.Z)({},u(),{children:s()}))}))]}))}),W=l.forwardRef(function(e,o){var n=(0,_.p)(e),l=Z(n.apiRef,n);return(0,Y.jsx)(f.d,{privateApiRef:l,props:n,children:(0,Y.jsxs)(u.n,(0,r.Z)({className:n.className,style:n.style,sx:n.sx,ref:o},n.forwardedProps,{children:[(0,Y.jsx)(s.C,{}),(0,Y.jsx)(c.U,{VirtualScrollerComponent:A}),(0,Y.jsx)(d.B,{})]}))})}),X=l.memo(W),ee=_.J.filterDebounceMs,eo=_.J.filterDebounceMs;W.propTypes={apiRef:t().shape({current:t().object.isRequired}),"aria-label":t().string,"aria-labelledby":t().string,autoHeight:t().bool,autoPageSize:t().bool,cellModesModel:t().object,checkboxSelection:t().bool,classes:t().object,clipboardCopyCellDelimiter:t().string,columnBuffer:t().number,columnGroupingModel:t().arrayOf(t().object),columnHeaderHeight:t().number,columns:(0,a.Z)(t().array.isRequired,function(e){return e.columns&&e.columns.some(function(e){return e.resizable})?Error("MUI: `column.resizable = true` is not a valid prop.\nColumn resizing is not available in the MIT version.\n\nYou need to upgrade to DataGridPro or DataGridPremium component to unlock this feature."):null}),columnThreshold:t().number,columnVisibilityModel:t().object,components:t().object,componentsProps:t().object,density:t().oneOf(["comfortable","compact","standard"]),disableColumnFilter:t().bool,disableColumnMenu:t().bool,disableColumnSelector:t().bool,disableDensitySelector:t().bool,disableEval:t().bool,disableRowSelectionOnClick:t().bool,disableVirtualization:t().bool,editMode:t().oneOf(["cell","row"]),experimentalFeatures:t().shape({ariaV7:t().bool,columnGrouping:t().bool,warnIfFocusStateIsNotSynced:t().bool}),filterDebounceMs:t().number,filterMode:t().oneOf(["client","server"]),filterModel:t().shape({items:t().arrayOf(t().shape({field:t().string.isRequired,id:t().oneOfType([t().number,t().string]),operator:t().string.isRequired,value:t().any})).isRequired,logicOperator:t().oneOf(["and","or"]),quickFilterExcludeHiddenColumns:t().bool,quickFilterLogicOperator:t().oneOf(["and","or"]),quickFilterValues:t().array}),forwardedProps:t().object,getCellClassName:t().func,getDetailPanelContent:t().func,getEstimatedRowHeight:t().func,getRowClassName:t().func,getRowHeight:t().func,getRowId:t().func,getRowSpacing:t().func,hideFooter:t().bool,hideFooterPagination:t().bool,hideFooterSelectedRowCount:t().bool,initialState:t().object,isCellEditable:t().func,isRowSelectable:t().func,keepNonExistentRowsSelected:t().bool,loading:t().bool,localeText:t().object,logger:t().shape({debug:t().func.isRequired,error:t().func.isRequired,info:t().func.isRequired,warn:t().func.isRequired}),logLevel:t().oneOf(["debug","error","info","warn",!1]),nonce:t().string,onCellClick:t().func,onCellDoubleClick:t().func,onCellEditStart:t().func,onCellEditStop:t().func,onCellKeyDown:t().func,onCellModesModelChange:t().func,onClipboardCopy:t().func,onColumnHeaderClick:t().func,onColumnHeaderDoubleClick:t().func,onColumnHeaderEnter:t().func,onColumnHeaderLeave:t().func,onColumnHeaderOut:t().func,onColumnHeaderOver:t().func,onColumnOrderChange:t().func,onColumnVisibilityModelChange:t().func,onFilterModelChange:t().func,onMenuClose:t().func,onMenuOpen:t().func,onPaginationModelChange:t().func,onPreferencePanelClose:t().func,onPreferencePanelOpen:t().func,onProcessRowUpdateError:t().func,onResize:t().func,onRowClick:t().func,onRowDoubleClick:t().func,onRowEditCommit:t().func,onRowEditStart:t().func,onRowEditStop:t().func,onRowModesModelChange:t().func,onRowSelectionModelChange:t().func,onSortModelChange:t().func,onStateChange:t().func,pageSizeOptions:t().arrayOf(t().oneOfType([t().number,t().shape({label:t().string.isRequired,value:t().number.isRequired})]).isRequired),pagination:function(e){return!1===e.pagination?Error("MUI: `<DataGrid pagination={false} />` is not a valid prop.\nInfinite scrolling is not available in the MIT version.\n\nYou need to upgrade to DataGridPro or DataGridPremium component to disable the pagination."):null},paginationMode:t().oneOf(["client","server"]),paginationModel:t().shape({page:t().number.isRequired,pageSize:t().number.isRequired}),processRowUpdate:t().func,rowBuffer:t().number,rowCount:t().number,rowHeight:t().number,rowModesModel:t().object,rows:t().arrayOf(t().object).isRequired,rowSelection:t().bool,rowSelectionModel:t().oneOfType([t().arrayOf(t().oneOfType([t().number,t().string]).isRequired),t().number,t().string]),rowSpacingType:t().oneOf(["border","margin"]),rowThreshold:t().number,scrollbarSize:t().number,showCellVerticalBorder:t().bool,showColumnVerticalBorder:t().bool,slotProps:t().object,slots:t().object,sortingMode:t().oneOf(["client","server"]),sortingOrder:t().arrayOf(t().oneOf(["asc","desc"])),sortModel:t().arrayOf(t().shape({field:t().string.isRequired,sort:t().oneOf(["asc","desc"])})),sx:t().oneOfType([t().arrayOf(t().oneOfType([t().func,t().object,t().bool])),t().func,t().object]),unstable_ignoreValueFormatterDuringExport:t().oneOfType([t().shape({clipboardExport:t().bool,csvExport:t().bool}),t().bool])}}}]);