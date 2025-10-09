import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-D63EGmCQ.js";import{T as t}from"./index-DLz6E2ic.js";import"./preload-helper-PPVm8Dsz.js";import"./label-C9KyqR28.js";import"./index-CraNxlvZ.js";import"./index-BNx_2-zN.js";import"./focus-management-DFQl7muc.js";import"./button-DEjfT9-O.js";import"./featherIcon-C3cIBOWo.js";const v={title:"Components/TabButtons",tags:["autodocs"],argTypes:{buttons:{control:"object",description:"Array of button items with label and value."},value:{control:"text",description:"Currently selected tab value."},onChange:{action:"changed",description:"Function called when the selected tab changes."}},parameters:{layout:"centered"},component:t},e={render:()=>{const[a,r]=o.useState("mytasks");return n.jsx(t,{buttons:[{label:"Tasks assigned to me",value:"mytasks"},{label:"Tasks created by me",value:"created"}],value:a,onChange:s=>r(s)})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentTab, setCurrentTab] = useState<string>("mytasks");
    return <TabButtons buttons={[{
      label: "Tasks assigned to me",
      value: "mytasks"
    }, {
      label: "Tasks created by me",
      value: "created"
    }]} value={currentTab} onChange={value => setCurrentTab(value as string)} />;
  }
}`,...e.parameters?.docs?.source}}};const y=["TabButtonsExample"];export{e as TabButtonsExample,y as __namedExportsOrder,v as default};
