import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-D63EGmCQ.js";import{B as j}from"./button-DEjfT9-O.js";import{d as ee}from"./debounce-C-hnF4Z3.js";import{C as q}from"./checkbox-B6TSbynL.js";import{T as te}from"./tooltip-Db-GayLO.js";import{F as se}from"./featherIcon-C3cIBOWo.js";import{B as V}from"./badge-CewcIR-Y.js";import{A as G}from"./avatar-QT8Uwxmo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DY18yC1S.js";import"./index-CraNxlvZ.js";import"./index-BNx_2-zN.js";import"./index-sIJJ310B.js";import"./index-CqVTiDnu.js";import"./floating-ui.react-dom-CjK91lMm.js";import"./index-aUzdW7hL.js";const f=r.createContext({options:void 0}),F=({children:t})=>{const s=r.useContext(f);if(!s||!s.options||!s.options.emptyState)throw new Error("EmptyState must be used within a ListContext.Provider");return e.jsx("div",{className:"flex h-full w-full flex-col items-center justify-center text-base",children:t||e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-xl font-medium",children:s.options.emptyState.title}),e.jsx("div",{className:"mt-1 text-base text-ink-gray-5",children:s.options.emptyState.description}),s.options.emptyState.button&&e.jsx(j,{...s.options.emptyState.button,className:"mt-4"})]})})};F.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function W(t,s=!0){const o=s?"14px ":"",n=t.map(a=>{const i=a.width||1;return typeof i=="number"?i+"fr":i}).join(" ");return o+n}const _={left:"justify-start",start:"justify-start",center:"justify-center",middle:"justify-center",right:"justify-end",end:"justify-end"},I=({item:t,firstItem:s=!1,debounce:o=1e3,onColumnWidthUpdated:n,children:a,prefix:i,suffix:l})=>{const{options:m}=r.useContext(f);if(!m)throw new Error("ListHeaderItem must be used within a ListProvider");const u=r.useRef(null),[w,y]=r.useState(!1),c=ee(d=>{n&&n(d)},o),g=r.useCallback(()=>{if(typeof t.width=="string"){const d=parseInt(t.width,10);if(t.width.includes("rem"))return d*16;if(t.width.includes("px"))return d}return u.current?.offsetWidth||0},[t.width]),x=r.useCallback(d=>{d.preventDefault(),y(!0);const h=d.clientX,T=g(),$=Y=>{const Z=T+(Y.clientX-h),P=Math.max(50,Z);u.current&&(u.current.style.width=`${P}px`),c(P)},B=()=>{y(!1),window.removeEventListener("mousemove",$),window.removeEventListener("mouseup",B)};window.addEventListener("mousemove",$),window.addEventListener("mouseup",B)},[g,c]),b=r.useMemo(()=>{const d=e.jsx("div",{className:"truncate",children:t.label});return a||d},[t.label,a]),p=r.useMemo(()=>["group relative flex items-center",s?"ml-4":"",t.align?_[t.align]:"justify-between"].filter(Boolean).join(" "),[t.align,s]);return e.jsxs("div",{ref:u,className:p,children:[e.jsxs("div",{className:`flex items-center space-x-2 truncate text-sm text-ink-gray-5 ${w?"cursor-col-resize":""}`,children:[i,b,l]}),m.options.resizeColumn&&e.jsx("div",{className:"flex h-4 absolute -right-2 w-2 cursor-col-resize justify-center",onMouseDown:x,children:e.jsx("div",{className:`h-full w-[2px] rounded-full transition-all duration-300 ease-in-out group-hover:bg-gray-400 ${w?"bg-gray-400":""}`})})]})};I.__docgenInfo={description:"",methods:[],displayName:"ListHeaderItem",props:{item:{required:!0,tsType:{name:"any"},description:""},debounce:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1000",computed:!1}},onColumnWidthUpdated:{required:!1,tsType:{name:"signature",type:"function",raw:"(width: number) => void",signature:{arguments:[{type:{name:"number"},name:"width"}],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},prefix:{required:!1,tsType:{name:"ReactNode"},description:""},suffix:{required:!1,tsType:{name:"ReactNode"},description:""},firstItem:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const z=({children:t})=>{const{options:s}=r.useContext(f);if(!s)throw new Error("ListHeader must be used within a ListProvider");const o=r.useMemo(()=>W(s.columns,s.options.selectable),[s.columns,s.options.selectable]);return e.jsxs("div",{className:"mb-2 grid items-center rounded bg-surface-gray-2 p-2",style:{gridTemplateColumns:o},children:[s.options.selectable&&e.jsx(q,{value:s.allRowsSelected,onChange:s.toggleAllRows}),t||s.columns.map((n,a)=>e.jsx(I,{firstItem:a===0,item:n,onColumnWidthUpdated:()=>{}},n.key))]})};z.__docgenInfo={description:"",methods:[],displayName:"ListHeader",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const M=({column:t,row:s,item:o,align:n="left",prefix:a,suffix:i,children:l})=>{const{options:m}=r.useContext(f);if(!m)throw new Error("ListRowItem must be used within a ListProvider");const u=r.useCallback(g=>g&&typeof g=="object"?g:{label:g},[]),w=r.useMemo(()=>t?.getLabel?t.getLabel({row:s}):u(o).label||"",[t,s,o,u]),y=r.useMemo(()=>m.options.showTooltip?t.getTooltip?t.getTooltip(s):u(o).label:"",[m.options.showTooltip,t,s,o,u]),c=r.useMemo(()=>t.prefix?typeof t.prefix=="function"?t.prefix({row:s}):t.prefix:a,[t,a,s]);return e.jsxs("div",{className:`flex items-center space-x-2 ${_[n]}`,children:[c&&c,l||e.jsx(te,{text:y,children:e.jsx("div",{className:"truncate text-base",children:w})}),i&&e.jsx("div",{className:"flex-shrink-0",children:i})]})};M.__docgenInfo={description:"",methods:[],displayName:"ListRowItem",props:{column:{required:!0,tsType:{name:"any"},description:""},row:{required:!0,tsType:{name:"any"},description:""},item:{required:!0,tsType:{name:"union",raw:"string | number | object",elements:[{name:"string"},{name:"number"},{name:"object"}]},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},prefix:{required:!1,tsType:{name:"ReactNode"},description:""},suffix:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const L=({row:t,isLastRow:s=!1,children:o})=>{const{options:n}=r.useContext(f);if(!n)throw new Error("ListRow must be used within a ListProvider");const a=r.useMemo(()=>n.selections.has(t[n.rowKey]),[n.selections,t,n.rowKey]),i=r.useMemo(()=>n.options.enableActive&&n.activeRow.value===t.name,[n.options.enableActive,n.activeRow,t.name]),l=r.useMemo(()=>!!n.options.onRowClick,[n.options.onRowClick]),m=r.useMemo(()=>typeof n.options.rowHeight=="number"?`${n.options.rowHeight}px`:n.options.rowHeight,[n.options.rowHeight]),u=r.useMemo(()=>{if(!a)return"rounded";const c=[...n.selections],g=n.rows.some(d=>d.group)?n.rows.flatMap(d=>d.rows):n.rows,x=g.findIndex(d=>d===t);if(x===-1)return"";const b=!c.includes(g[x+1]?.[n.rowKey]),p=!c.includes(g[x-1]?.[n.rowKey]);return(b?"rounded-b":"")+(p?"rounded-t":"")},[a,n.selections,n.rows,t,n.rowKey]),w=r.useCallback(c=>{n.options.onRowClick&&n.options.onRowClick(t,c),n.activeRow?.value===t.name?n.activeRow.value=null:n.activeRow.value=t.name},[n,t]),y=l?{onClick:w}:{};return e.jsx("div",{className:`flex flex-col transition-all duration-300 ease-in-out ${u} ${a||i?"bg-surface-gray-2":""} ${l?"cursor-pointer":""} ${l?a||i?"hover:bg-surface-gray-3":"hover:bg-surface-menu-bar":""}`,...y,children:e.jsxs("button",{className:"[all:unset] hover:[all:unset]",children:[e.jsxs("div",{className:"grid items-center px-2",style:{height:m,gridTemplateColumns:W(n.columns,n.options.selectable)},children:[n.options.selectable&&e.jsx("div",{className:"w-fit pr-2 py-3 flex",onClick:c=>{c.stopPropagation()},onDoubleClick:c=>c.stopPropagation(),children:e.jsx(q,{value:a,onChange:()=>n.toggleRow(t[n.rowKey])})}),o||n.columns.map((c,g)=>e.jsx("div",{className:`${_[c.align]} ${g===0?"ml-4 text-ink-gray-9":"text-ink-gray-7"}`,children:n.slots?.cell?e.jsx(n.slots.cell,{column:c,row:t,item:t[c.key],align:c.align}):e.jsx(M,{column:c,row:t,item:t[c.key],align:c.align})},c.key))]}),!s&&e.jsx("div",{className:`h-px border-t ${u==="rounded"||u.includes("rounded-b")?"mx-2 border-outline-gray-1":"border-t-[--surface-gray-2]"}`})]})})};L.__docgenInfo={description:"",methods:[],displayName:"ListRow",props:{row:{required:!0,tsType:{name:"any"},description:""},isLastRow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const E=({children:t})=>{const{options:s}=r.useContext(f);if(!s)throw new Error("ListRows must be used within a ListContext.Provider");return e.jsx("div",{className:"h-full overflow-y-auto",children:t||s.rows&&s.rows.map(o=>e.jsx(L,{row:o},o[s.rowKey]))})};E.__docgenInfo={description:"",methods:[],displayName:"ListRows",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const ne=t=>r.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",...t},r.createElement("path",{d:"M7 10l5 5 5-5z"})),J=({group:t,setCollapsed:s,index:o,collapsed:n})=>{const a=r.useContext(f),i=r.useCallback(()=>{s(m=>{const u=structuredClone(m);return u[o]?u[o].collapsed=!u[o].collapsed:u[o]={collapsed:!0},u})},[o,s]),l=r.useMemo(()=>{const m=a?.options?.slots?.["group-header"];return m?e.jsx(m,{group:{...t,collapsed:n}}):e.jsx("span",{className:"text-base font-medium leading-6",children:t.group})},[a?.options?.slots,t,n]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("button",{onClick:i,className:"ml-[3px] mr-[11px] rounded p-1 hover:bg-surface-gray-2",children:e.jsx(ne,{className:`h-4 w-4 text-ink-gray-6 transition-transform duration-200 ${n?"-rotate-90":""}`})}),l]}),e.jsx("div",{className:"mx-2 h-px border-t border-outline-gray-modals"})]})};J.__docgenInfo={description:"",methods:[],displayName:"ListGroupHeader",props:{group:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  collapsed?: boolean;
  group: string;
}`,signature:{properties:[{key:"collapsed",value:{name:"boolean",required:!1}},{key:"group",value:{name:"string",required:!0}}]}},description:""},setCollapsed:{required:!0,tsType:{name:"ReactDispatch",raw:`React.Dispatch<
  React.SetStateAction<{
    [index: number]: {
      collapsed: boolean;
    };
  }>
>`,elements:[{name:"ReactSetStateAction",raw:`React.SetStateAction<{
  [index: number]: {
    collapsed: boolean;
  };
}>`,elements:[{name:"signature",type:"object",raw:`{
  [index: number]: {
    collapsed: boolean;
  };
}`,signature:{properties:[{key:{name:"number"},value:{name:"signature",type:"object",raw:`{
  collapsed: boolean;
}`,signature:{properties:[{key:"collapsed",value:{name:"boolean",required:!0}}]},required:!0}}]}}]}]},description:""},index:{required:!0,tsType:{name:"number"},description:""},collapsed:{required:!0,tsType:{name:"boolean"},description:""}}};const O=({group:t,children:s})=>{const o=r.useContext(f);if(!o.options)throw new Error("ListGroupBody must be used within a ListContext.Provider");if(t.collapsed)return null;const{rowKey:n=""}=o.options;return e.jsx("div",{className:"mb-5 mt-2",children:s||t.rows&&t.rows.map(a=>e.jsx(L,{row:a},a[n]))})};O.__docgenInfo={description:"",methods:[],displayName:"ListGroupBody",props:{group:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  collapsed?: boolean;
  rows: any[];
}`,signature:{properties:[{key:"collapsed",value:{name:"boolean",required:!1}},{key:"rows",value:{name:"Array",elements:[{name:"any"}],raw:"any[]",required:!0}}]}},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const U=({children:t})=>{const{options:s}=r.useContext(f),[o,n]=r.useState({});r.useEffect(()=>{!s||!s.rows||n(i=>{const l={...i};return s.rows.forEach((m,u)=>{u>=Object.keys(l).length&&(l[u]={collapsed:!1})}),Object.keys(l).forEach(m=>{Number(m)>=s.rows.length&&delete l[Number(m)]}),l})},[s,s?.rows?.length]);const a=r.useMemo(()=>!s||!s.rows?[]:Array.isArray(s.rows)?s.rows.map((i,l)=>({...i,collapsed:o[l]?.collapsed})):[],[o,s]);if(!s)throw new Error("ListGroups must be used within a ListContext.Provider");return e.jsx("div",{className:"h-full overflow-y-auto",children:a.map((i,l)=>e.jsx("div",{children:t?t({group:i}):e.jsxs(e.Fragment,{children:[e.jsx(J,{group:i,setCollapsed:n,index:l,collapsed:o[l]?.collapsed??!1}),e.jsx(O,{group:{...i,collapsed:o[l]?.collapsed??!1}})]})},i.group))})};U.__docgenInfo={description:"",methods:[],displayName:"ListGroups",props:{children:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: { group: any }) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ group: any }",signature:{properties:[{key:"group",value:{name:"any",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}}},description:""}}};const H=({children:t,actions:s,...o})=>{const{options:n}=r.useContext(f);if(!n)throw new Error("ListSelectBanner must be used within a ListContext.Provider");const a=r.useMemo(()=>n.options.selectionText(n.selections.size),[n.selections.size,n.options]),i=r.useMemo(()=>({selections:n.selections,allRowsSelected:n.allRowsSelected,selectAll:()=>n.toggleAllRows(!0),unselectAll:()=>n.toggleAllRows(!1)}),[n]),l=n.selections.size>0?"opacity-100 duration-300 ease-out":"opacity-0 duration-300 ease-in transform";return e.jsx("div",{className:`transition-all ${l}`,"aria-live":"polite",children:n.selections.size>0&&e.jsx("div",{className:"absolute inset-x-0 bottom-6 mx-auto w-max text-base",...o,children:e.jsx("div",{className:"flex min-w-[596px] items-center space-x-3 rounded-lg bg-surface-white px-4 py-2 shadow-2xl",children:t?t(i):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-1 justify-between border-r border-outline-gray-2 text-ink-gray-9",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(q,{value:!0,disabled:!0}),e.jsx("div",{children:a})]}),e.jsx("div",{className:"mr-3",children:s&&s(i)})]}),e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx(j,{className:"text-ink-gray-7",disabled:n.allRowsSelected,variant:"ghost",onClick:()=>n.toggleAllRows(!0),label:"Select all"}),e.jsx(j,{icon:"x",variant:"ghost",onClick:()=>n.toggleAllRows(!1),label:"Unselect all"})]})]})})})})};H.__docgenInfo={description:"",methods:[],displayName:"ListSelectBanner",props:{children:{required:!1,tsType:{name:"signature",type:"function",raw:`(props: {
  selections: Set<any>;
  allRowsSelected: boolean;
  selectAll: () => void;
  unselectAll: () => void;
}) => React.ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  selections: Set<any>;
  allRowsSelected: boolean;
  selectAll: () => void;
  unselectAll: () => void;
}`,signature:{properties:[{key:"selections",value:{name:"Set",elements:[{name:"any"}],raw:"Set<any>",required:!0}},{key:"allRowsSelected",value:{name:"boolean",required:!0}},{key:"selectAll",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"unselectAll",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},actions:{required:!1,tsType:{name:"signature",type:"function",raw:`(props: {
  selections: Set<any>;
  allRowsSelected: boolean;
  selectAll: () => void;
  unselectAll: () => void;
}) => React.ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  selections: Set<any>;
  allRowsSelected: boolean;
  selectAll: () => void;
  unselectAll: () => void;
}`,signature:{properties:[{key:"selections",value:{name:"Set",elements:[{name:"any"}],raw:"Set<any>",required:!0}},{key:"allRowsSelected",value:{name:"boolean",required:!0}},{key:"selectAll",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"unselectAll",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};const X=({options:t,rows:s,rowKey:o,columns:n,children:a})=>{const[i,l]=r.useState(new Set),[m,u]=r.useState(null),w=r.useMemo(()=>({onRowClick:t.options.onRowClick,showTooltip:t.options.showTooltip!==void 0?t.options.showTooltip:!0,selectionText:t.options.selectionText||(p=>p===1?"1 row selected":`${p} rows selected`),enableActive:t.options.enableActive!==void 0?t.options.enableActive:!1,selectable:t.options.selectable!==void 0?t.options.selectable:!0,resizeColumn:t.options.resizeColumn!==void 0?t.options.resizeColumn:!1,rowHeight:t.options.rowHeight||40,emptyState:t.emptyState||{title:"No Data",description:"No data available"}}),[t]),y=r.useMemo(()=>s.every(p=>p.group&&p.rows&&Array.isArray(p.rows)),[s]),c=r.useMemo(()=>s.length?y?i.size===s.reduce((p,d)=>p+d.rows.length,0):i.size===s.length:!1,[s,y,i.size]),g=r.useCallback(p=>{l(d=>{const h=new Set(d);return h.has(p)?h.delete(p):h.add(p),h})},[]),x=r.useCallback(p=>{if(p===!1||c){l(new Set);return}const d=new Set;y?s.forEach(h=>{h.rows.forEach(T=>d.add(T[o]))}):s.forEach(h=>d.add(h[o])),l(d)},[c,s,y,o]);r.useMemo(()=>{i.size>0&&u({value:null})},[i.size]);const b=r.useMemo(()=>({options:{columns:n,rows:s,rowKey:o,options:w,selections:i,activeRow:m,allRowsSelected:c,slots:t.slots,toggleRow:g,toggleAllRows:x,emptyState:t.emptyState,setColumns:()=>{}}}),[n,s,o,t.slots,t.emptyState,w,i,m,c,g,x]);return e.jsx(f.Provider,{value:b,children:a})};X.__docgenInfo={description:"",methods:[],displayName:"ListProvider",props:{options:{required:!0,tsType:{name:"ListOptionsProps"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},rows:{required:!0,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:""},rowKey:{required:!0,tsType:{name:"string"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:""}}};const v=({columns:t,rows:s,rowKey:o,options:n,children:a,...i})=>{const l=r.useMemo(()=>s.every(w=>w.group&&w.rows&&Array.isArray(w.rows)),[s]);if(!n)return null;const m=n?.options?.selectable!==void 0?n.options.selectable:!0,u=e.jsxs(e.Fragment,{children:[e.jsx(z,{}),s.length?l?e.jsx(U,{}):e.jsx(E,{}):e.jsx(F,{}),m&&e.jsx(H,{})]});return e.jsx(X,{rows:s,columns:t,rowKey:o,options:{...n},children:e.jsx("div",{className:"relative flex w-full flex-1 flex-col overflow-x-auto",children:e.jsx("div",{className:`flex w-max min-w-full flex-col overflow-y-hidden ${i.className||""}`,style:i.style,children:a||u})})})};v.__docgenInfo={description:"",methods:[],displayName:"ListView",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:""},rows:{required:!0,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:""},rowKey:{required:!0,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"ListOptionsProps"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};const D=[{label:"Name",key:"name",width:3,getLabel:({row:t})=>t.name,prefix:({row:t})=>e.jsx(G,{shape:"circle",image:t.user_image,size:"sm",label:t.name})},{label:"Email",key:"email",width:"200px"},{label:"Role",key:"role"},{label:"Status",key:"status"}],Q=[{id:1,name:"John Doe",email:"john@doe.com",status:"Active",role:"Developer",user_image:"https://avatars.githubusercontent.com/u/499550"},{id:2,name:"Jane Doe",email:"jane@doe.com",status:"Inactive",role:"HR",user_image:"https://avatars.githubusercontent.com/u/499120"}],oe=[{label:"Name",key:"name",width:3},{label:"Email",key:"email",width:"200px"},{label:"Role",key:"role"},{label:"Status",key:"status"}],re=[{group:"Developer",collapsed:!1,rows:[{id:2,name:"Gary Fox",email:"gary@fox.com",status:"Inactive",role:"Developer"},{id:6,name:"Emily Davis",email:"emily@davis.com",status:"Active",role:"Developer"},{id:9,name:"David Lee",email:"david@lee.com",status:"Inactive",role:"Developer"}]},{group:"Manager",collapsed:!1,rows:[{id:3,name:"John Doe",email:"john@doe.com",status:"Active",role:"Manager"},{id:8,name:"Sarah Wilson",email:"sarah@wilson.com",status:"Active",role:"Manager"}]},{group:"Designer",collapsed:!1,rows:[{id:4,name:"Alice Smith",email:"alice@smith.com",status:"Active",role:"Designer"},{id:10,name:"Olivia Taylor",email:"olivia@taylor.com",status:"Active",role:"Designer"}]},{group:"HR",collapsed:!1,rows:[{id:1,name:"Jane Mary",email:"jane@doe.com",status:"Inactive",role:"HR"},{id:7,name:"Michael Brown",email:"michael@brown.com",status:"Inactive",role:"HR"},{id:12,name:"Sophia Martinez",email:"sophia@martinez.com",status:"Active",role:"HR"}]},{group:"Tester",collapsed:!1,rows:[{id:5,name:"Bob Johnson",email:"bob@johnson.com",status:"Inactive",role:"Tester"},{id:11,name:"James Anderson",email:"james@anderson.com",status:"Inactive",role:"Tester"}]}],A=[{label:"Name",key:"name",width:3,icon:"user"},{label:"Email",key:"email",width:"200px",icon:"at-sign"},{label:"Role",key:"role",icon:"users"},{label:"Status",key:"status",icon:"check-circle"}],K=[{id:1,name:{label:"John Doe",image:"https://avatars.githubusercontent.com/u/499550"},email:"john@doe.com",status:{label:"Active",bg_color:"bg-surface-green-3"},role:{label:"Developer",color:"green"}},{id:2,name:{label:"Jane Doe",image:"https://avatars.githubusercontent.com/u/499120"},email:"jane@doe.com",status:{label:"Inactive",bg_color:"bg-surface-red-5"},role:{label:"HR",color:"red"}}],Re={title:"Components/ListView",component:v,tags:["autodocs"],argTypes:{options:{control:{type:"object"}},rows:{control:{type:"object"}},columns:{control:{type:"object"}},rowKey:{control:"text"}}},R={render:t=>e.jsx("div",{children:e.jsx(v,{...t,columns:D,rows:Q,rowKey:"id"})}),args:{options:{options:{onRowClick:t=>`/users/${t.id}`,selectable:!0,showTooltip:!0,resizeColumn:!0}}}},N={render:t=>e.jsx("div",{children:e.jsx(v,{...t,columns:A,rows:K,rowKey:"id",children:e.jsxs(e.Fragment,{children:[e.jsx(z,{children:A.map((s,o)=>e.jsx(I,{item:s,children:e.jsxs("div",{className:`flex items-center gap-2 ${o===0?"ml-4":""}`,children:[e.jsx(se,{name:s.icon,className:"h-4 w-4"}),e.jsx("span",{children:s.label})]})},s.key))}),e.jsx(E,{children:K.map(s=>e.jsx(L,{row:s,children:A.map((o,n)=>{const a=s[o.key];return e.jsx("div",{className:`${n===0?"ml-4":""}`,children:e.jsx(M,{column:o,row:s,item:a,prefix:e.jsxs(e.Fragment,{children:[o.key==="status"&&e.jsx("div",{className:"h-3 w-3 rounded-full",style:{backgroundColor:a.bg_color}}),o.key==="name"&&e.jsx(G,{shape:"circle",image:a.image,size:"sm",label:a.label})]}),children:e.jsx(e.Fragment,{children:o.key==="role"?e.jsx(V,{variant:"subtle",theme:a.color,size:"md",label:a.label}):e.jsx("span",{className:"font-medium text-ink-gray-7",children:a.label||a})})},o.key)})})},s.id))}),e.jsx(H,{children:({unselectAll:s})=>e.jsxs("div",{className:"flex w-full justify-between",children:[e.jsx(j,{variant:"ghost",label:"Delete"}),e.jsx(j,{variant:"ghost",label:"Unselect all",onClick:s})]})})]})})}),args:{options:{options:{onRowClick:t=>console.log(t),selectable:!0,showTooltip:!0,resizeColumn:!0}}}},C={render:t=>e.jsx("div",{children:e.jsx(v,{...t,columns:oe,rows:re,rowKey:"id",options:{options:{selectable:!0,showTooltip:!0,resizeColumn:!0,onRowClick:s=>`/users/${s.id}`}}})}),args:{}},k={render:t=>{const s=({item:o,column:n})=>n.key==="status"?e.jsx(V,{children:o}):e.jsx("span",{className:"font-medium text-ink-gray-7",children:o});return e.jsx("div",{children:e.jsx(v,{...t,columns:D,rows:Q,rowKey:"id",options:{options:{selectable:!0,showTooltip:!0,resizeColumn:!0},slots:{cell:s},emptyState:{title:"No records found",description:"Create a new record to get started"}}})})},args:{}},S={render:t=>e.jsx("div",{children:e.jsx(v,{...t,columns:D,rows:[],rowKey:"id",options:{options:{selectable:!0,showTooltip:!0,resizeColumn:!0},emptyState:{title:"No records found",description:"Create a new record to get started",button:{label:"New Record",variant:"solid",onClick:()=>console.log("New Record")}}}})}),args:{}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div>
        <ListView {...args} columns={simple_columns} rows={simple_rows} rowKey="id" />
      </div>;
  },
  args: {
    options: {
      options: {
        onRowClick: row => \`/users/\${row.id}\`,
        selectable: true,
        showTooltip: true,
        resizeColumn: true
      }
    }
  }
}`,...R.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div>
        <ListView {...args} columns={custom_columns} rows={custom_rows} rowKey="id">
          <>
            <ListHeader>
              {custom_columns.map((column, index) => <ListHeaderItem key={column.key} item={column}>
                  <div className={\`flex items-center gap-2 \${index === 0 ? "ml-4" : ""}\`}>
                    <FeatherIcon name={column.icon} className="h-4 w-4" />
                    <span>{column.label}</span>
                  </div>
                </ListHeaderItem>)}
            </ListHeader>
            <ListRows>
              {custom_rows.map(row => <ListRow key={row.id} row={row}>
                  {custom_columns.map((column, index) => {
                //@ts-expects-error
                const item = row[column.key];
                return <div className={\`\${index === 0 ? "ml-4" : ""}\`}>
                        <ListRowItem key={column.key} column={column} row={row} item={item} prefix={<>
                              {column.key === "status" && <div className="h-3 w-3 rounded-full" style={{
                      backgroundColor: item.bg_color
                    }} />}
                              {column.key === "name" && <Avatar shape="circle" image={item.image} size="sm" label={item.label} />}
                            </>}>
                          <>
                            {column.key === "role" ? <Badge variant="subtle" theme={item.color} size="md" label={item.label} /> : <span className="font-medium text-ink-gray-7">
                                {item.label || item}
                              </span>}
                          </>
                        </ListRowItem>
                      </div>;
              })}
                </ListRow>)}
            </ListRows>
            <ListSelectBanner>
              {({
              unselectAll
            }) => <div className="flex w-full justify-between">
                  <Button variant="ghost" label="Delete" />
                  <Button variant="ghost" label="Unselect all" onClick={unselectAll} />
                </div>}
            </ListSelectBanner>
          </>
        </ListView>
      </div>;
  },
  args: {
    options: {
      options: {
        onRowClick: row => console.log(row),
        selectable: true,
        showTooltip: true,
        resizeColumn: true
      }
    }
  }
}`,...N.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div>
        <ListView {...args} columns={group_columns} rows={grouped_rows} rowKey="id" options={{
        options: {
          selectable: true,
          showTooltip: true,
          resizeColumn: true,
          onRowClick: row => \`/users/\${row.id}\`
        }
      }} />
      </div>;
  },
  args: {}
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    //@ts-expects-error
    const CustomCell = ({
      item,
      column
    }) => {
      if (column.key === "status") {
        return <Badge>{item}</Badge>;
      }
      return <span className="font-medium text-ink-gray-7">{item}</span>;
    };
    return <div>
        <ListView {...args} columns={simple_columns} rows={simple_rows} rowKey="id" options={{
        options: {
          selectable: true,
          showTooltip: true,
          resizeColumn: true
        },
        slots: {
          cell: CustomCell
        },
        emptyState: {
          title: "No records found",
          description: "Create a new record to get started"
        }
      }} />
      </div>;
  },
  args: {}
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div>
        <ListView {...args} columns={simple_columns} rows={[]} rowKey="id" options={{
        options: {
          selectable: true,
          showTooltip: true,
          resizeColumn: true
        },
        emptyState: {
          title: "No records found",
          description: "Create a new record to get started",
          button: {
            label: "New Record",
            variant: "solid",
            onClick: () => console.log("New Record")
          }
        }
      }} />
      </div>;
  },
  args: {}
}`,...S.parameters?.docs?.source}}};const Ne=["SimpleList","CustomList","GroupedRows","CellSlot","EmptyList"];export{k as CellSlot,N as CustomList,S as EmptyList,C as GroupedRows,R as SimpleList,Ne as __namedExportsOrder,Re as default};
