import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as s}from"./tooltip-Db-GayLO.js";import{B as a}from"./button-DEjfT9-O.js";import"./iframe-D63EGmCQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DY18yC1S.js";import"./index-CraNxlvZ.js";import"./index-BNx_2-zN.js";import"./index-sIJJ310B.js";import"./index-CqVTiDnu.js";import"./floating-ui.react-dom-CjK91lMm.js";import"./index-aUzdW7hL.js";import"./featherIcon-C3cIBOWo.js";const T={title:"Components/Tooltip",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placement:{control:"select",options:["top","right","bottom","left"],description:"Placement of the tooltip relative to the trigger"},children:{control:!1,description:"Element that triggers the tooltip on hover"},body:{description:"Custom content to render inside the tooltip"},text:{control:"text",description:"Text content of the tooltip"},hoverDelay:{control:"number",description:"Delay in seconds before showing the tooltip on hover"},disabled:{control:"boolean",description:"If true, the tooltip is disabled"},arrowClass:{control:"text",description:"Custom CSS classes for the tooltip arrow"}},args:{placement:"top"}},o={render:t=>e.jsx(s,{text:t.text,hoverDelay:t.hoverDelay,children:e.jsx(a,{theme:"red",children:"Delete"})}),args:{text:"This action cannot be undone",hoverDelay:1,placement:"top",body:null}},r={render:t=>e.jsx(s,{...t,children:e.jsx(a,{theme:"red",children:"Delete"})}),args:{...o.args,text:"disabled tooltip",disabled:!0}},n={render:t=>e.jsx(s,{...t,children:e.jsx(a,{theme:"red",children:"Delete"})}),args:{...o.args,text:"disabled tooltip",arrowClass:"fill-surface-white",body:e.jsx("div",{className:"min-w-[6rem] rounded bg-surface-white px-2 py-1 text-xs text-ink-gray-9 shadow-xl",children:"test"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Tooltip text={args.text} hoverDelay={args.hoverDelay}>
          <Button theme="red">Delete</Button>
        </Tooltip>;
  },
  args: {
    text: "This action cannot be undone",
    hoverDelay: 1,
    placement: "top",
    body: null
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Tooltip {...args}>
          <Button theme="red">Delete</Button>
        </Tooltip>;
  },
  args: {
    ...WithText.args,
    text: "disabled tooltip",
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Tooltip {...args}>
          <Button theme="red">Delete</Button>
        </Tooltip>;
  },
  args: {
    ...WithText.args,
    text: "disabled tooltip",
    arrowClass: "fill-surface-white",
    body: <div className="min-w-[6rem] rounded bg-surface-white px-2 py-1 text-xs text-ink-gray-9 shadow-xl">
        test
      </div>
  }
}`,...n.parameters?.docs?.source}}};const D=["WithText","Disabled","WithCustomContent"];export{r as Disabled,n as WithCustomContent,o as WithText,D as __namedExportsOrder,T as default};
