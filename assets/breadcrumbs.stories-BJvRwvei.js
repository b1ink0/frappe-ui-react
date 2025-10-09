import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t,e as k}from"./iframe-D63EGmCQ.js";import{D as y}from"./dropdown-CeuTGwH1.js";import{B as j}from"./button-DEjfT9-O.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DY18yC1S.js";import"./index-CraNxlvZ.js";import"./index-BNx_2-zN.js";import"./index-kIEx9QcO.js";import"./Combination-Dy1jhtAU.js";import"./index-sIJJ310B.js";import"./index-CqVTiDnu.js";import"./floating-ui.react-dom-CjK91lMm.js";import"./featherIcon-C3cIBOWo.js";function C(){const[i,s]=t.useState({width:window.innerWidth,height:window.innerHeight});return t.useEffect(()=>{const r=()=>{s({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),i}const I=()=>e.jsxs("svg",{className:"w-4 text-(--ink-gray-5)",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"1"}),e.jsx("circle",{cx:"19",cy:"12",r:"1"}),e.jsx("circle",{cx:"5",cy:"12",r:"1"})]}),d=({items:i})=>{const{width:s}=C(),r=t.useMemo(()=>(i||[]).filter(Boolean),[i]),u=t.useMemo(()=>s>640?[]:r.slice(0,-2).map(o=>{const a=()=>{o.onClick&&o.onClick()};return{label:o.label,onClick:a}}),[s,r]),p=t.useMemo(()=>s>640?r:r.slice(-2),[s,r]),x=t.useCallback(n=>n.suffixIcon?e.jsx("span",{className:"mr-1",children:n.suffixIcon}):null,[]),b=t.useCallback(n=>n.prefixIcon?e.jsx("span",{className:"mr-1",children:n.prefixIcon}):null,[]);return e.jsxs("div",{className:"flex min-w-0 items-center bg-surface-gray-1",children:[u.length>0&&e.jsxs("div",{className:"h-7",children:[e.jsx(y,{options:u,children:e.jsx(j,{variant:"ghost",children:e.jsx(I,{})})}),e.jsx("span",{className:"ml-1 mr-0.5 text-base text-(--ink-gray-4)","aria-hidden":"true",children:"/"})]}),e.jsx("div",{className:"flex min-w-0 items-center overflow-hidden text-ellipsis whitespace-nowrap",children:p.map((n,o)=>{const a=o===p.length-1,h=`flex items-center rounded px-0.5 py-1 text-lg font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-(--outline-gray-3) ${a?"text-(--ink-gray-9)":"text-(--ink-gray-5) hover:text-(--ink-gray-7)"}`,w=g=>{n.onClick&&n.onClick(),n.onClick&&g.preventDefault()};return e.jsxs(k.Fragment,{children:[e.jsxs("button",{type:"button",onClick:w,className:`${h} cursor-pointer`,children:[b(n),e.jsx("span",{children:n.label}),x(n)]}),!a&&e.jsx("span",{className:"mx-0.5 text-base text-(--ink-gray-4) select-none","aria-hidden":"true",children:"/"})]},n.label)})})]})};d.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},renderPrefix:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: BreadcrumbItem) => ReactNode",signature:{arguments:[{type:{name:"BreadcrumbItem"},name:"item"}],return:{name:"ReactNode"}}},description:""},renderSuffix:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: BreadcrumbItem) => ReactNode",signature:{arguments:[{type:{name:"BreadcrumbItem"},name:"item"}],return:{name:"ReactNode"}}},description:""}}};const{action:m}=__STORYBOOK_MODULE_ACTIONS__,D={title:"Components/Breadcrumbs",component:d,argTypes:{items:{control:"object",description:"An array of breadcrumb items, each with a label, and optional onClick."},renderPrefix:{description:"Function to render a prefix element for each breadcrumb item."},renderSuffix:{description:"Function to render a suffix element for each breadcrumb item."}},parameters:{layout:"centered"},tags:["autodocs"]},f={render:i=>e.jsx("div",{className:"p-4 bg-surface-gray-1 rounded-lg shadow-sm",children:e.jsx(d,{...i})})},c={...f,args:{items:[{label:"Home",onClick:m("Home clicked")},{label:"Views",onClick:m("Views clicked")},{label:"Kanban",onClick:m("Kanban clicked")}]}},l={...f,args:{items:[{label:"Home",suffixIcon:"🏡"},{label:"Views",suffixIcon:"🏞️"},{label:"List",suffixIcon:"📃"}]}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...BreadcrumbsTemplate,
  args: {
    items: [{
      label: "Home",
      onClick: action("Home clicked")
    }, {
      label: "Views",
      onClick: action("Views clicked")
    }, {
      label: "Kanban",
      onClick: action("Kanban clicked")
    }]
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...BreadcrumbsTemplate,
  args: {
    items: [{
      label: "Home",
      suffixIcon: "🏡"
    }, {
      label: "Views",
      suffixIcon: "🏞️"
    }, {
      label: "List",
      suffixIcon: "📃"
    }]
  }
}`,...l.parameters?.docs?.source}}};const K=["WithOnClickOption","WithPrefixSlot"];export{c as WithOnClickOption,l as WithPrefixSlot,K as __namedExportsOrder,D as default};
