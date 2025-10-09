import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-D63EGmCQ.js";import{D as a}from"./dialog-4Qw91Kf5.js";import{B as o}from"./button-DEjfT9-O.js";import{A as C}from"./autoComplete-BBk4scoZ.js";import{D as v}from"./dropdown-CeuTGwH1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DY18yC1S.js";import"./index-CraNxlvZ.js";import"./index-BNx_2-zN.js";import"./index-sIJJ310B.js";import"./Combination-Dy1jhtAU.js";import"./featherIcon-C3cIBOWo.js";import"./x-jQXvhGfn.js";import"./createLucideIcon-_XuVPz65.js";import"./combobox-CQ0qGCA2.js";import"./label-C9KyqR28.js";import"./use-resolve-button-type-Dd9Si3Ox.js";import"./focus-management-DFQl7muc.js";import"./floating-ui.react-dom-CjK91lMm.js";import"./popover-B_sjOSoo.js";import"./index-kIEx9QcO.js";import"./index-CqVTiDnu.js";const W={title:"Components/Dialog",component:a,decorators:[t=>e.jsx("div",{style:{display:"grid",gap:"1rem",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))"},children:e.jsx(t,{})})],parameters:{layout:"centered"},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"Controls whether the dialog is open or closed."},onOpenChange:{description:"Callback function called when the open state changes."},disableOutsideClickToClose:{control:"boolean",description:"If true, clicking outside the dialog will not close it."},options:{control:"object",description:"Configuration object for the dialog (title, message, size, icon, actions)."},actions:{control:"object",description:"Custom action buttons to display in the dialog footer."},children:{control:"text",description:"Custom content to render inside the dialog body."},onAfterLeave:{description:"Callback function called after the dialog has fully closed."}}},x=()=>new Promise(t=>{setTimeout(t,2e3)}),r={render:()=>{const[t,n]=i.useState(!1),l={title:"Confirm Action",message:"Are you sure you want to proceed with this action?",size:"lg",icon:{name:"alert-triangle",appearance:"warning"},actions:[{label:"Confirm",variant:"solid",onClick:()=>x()}]};return e.jsxs("div",{children:[e.jsx(o,{onClick:()=>n(!0),children:"Show Confirmation Dialog"}),e.jsx(a,{open:t,onOpenChange:n,options:l})]})}},c={render:()=>{const[t,n]=i.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{onClick:()=>n(!0),children:"Show Custom Dialog"}),e.jsx(a,{open:t,onOpenChange:n,options:{title:()=>e.jsx("h3",{className:"text-2xl font-semibold text-blue-600",children:"Custom Title with Styling"})},actions:e.jsxs("div",{className:"flex justify-start flex-row-reverse gap-2",children:[e.jsx(o,{variant:"solid",onClick:()=>n(!1),children:"Save Changes"}),e.jsx(o,{variant:"outline",onClick:()=>n(!1),children:"Cancel"})]}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"This dialog uses props for flexible content layout."}),e.jsx("div",{className:"bg-blue-50 p-4 rounded-lg",children:e.jsx("p",{className:"text-blue-800",children:"You can put any content here including forms, lists, or other components."})})]})})]})}},p={render:()=>{const[t,n]=i.useState(!1),[l,s]=i.useState(!1);return e.jsxs("div",{className:"space-x-2",children:[e.jsx(o,{onClick:()=>n(!0),children:"Small Dialog"}),e.jsx(o,{onClick:()=>s(!0),children:"Large Dialog"}),e.jsx(a,{open:t,onOpenChange:n,options:{title:"Small Dialog",message:"This is a small dialog.",size:"sm",actions:[{label:"OK",variant:"solid"}]}}),e.jsx(a,{open:l,onOpenChange:s,options:{title:"Large Dialog",message:"This is a large dialog with more space for content.",size:"4xl",actions:[{label:"OK",variant:"solid"}]}})]})}},d={render:()=>{const[t,n]=i.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{onClick:()=>n(!0),children:"Show Modal Dialog"}),e.jsx(a,{open:t,onOpenChange:n,disableOutsideClickToClose:!0,options:{title:"Modal Dialog",message:"This dialog cannot be closed by clicking outside. Use the buttons or ESC key.",actions:[{label:"Close",variant:"solid"}]}})]})}},u={render:()=>{const[t,n]=i.useState(!1),[l,s]=i.useState("Option 1"),[m,g]=i.useState(""),O=[{label:"Option 1",onClick:()=>s("Option 1"),key:"1"},{label:"Option 2",onClick:()=>s("Option 2"),key:"2"},{label:"Option 3",onClick:()=>s("Option 3"),key:"3"},{group:"Advanced Options",key:"group-1",items:[{label:"Advanced Option A",icon:"settings",onClick:()=>s("Advanced Option A"),key:"1"},{label:"Advanced Option B",icon:"star",onClick:()=>s("Advanced Option B"),key:"2"}]}];return e.jsxs("div",{children:[e.jsx(o,{onClick:()=>n(!0),children:"Show Settings Dialog"}),e.jsx(a,{open:t,onOpenChange:n,options:{title:()=>e.jsx("h3",{className:"text-2xl font-semibold text-ink-gray-9",children:"Settings Dialog"})},actions:e.jsxs("div",{className:"flex space-x-2",children:[e.jsx(o,{variant:"solid",onClick:()=>n(!1),children:"Save Settings"}),e.jsx(o,{variant:"outline",onClick:()=>n(!1),children:"Cancel"})]}),children:e.jsxs("div",{className:"space-y-6 text-base",children:[e.jsx("p",{className:"text-gray-700",children:"This dialog contains interactive elements to test proper layering."}),e.jsx(C,{options:[{label:"Option A",value:"A"},{label:"Option B",value:"B"},{label:"Option C",value:"C"}],placeholder:"Type to search...",value:m??"",onChange:h=>g(h)}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Select an option:"}),e.jsx(v,{options:O,placement:"left",children:e.jsx(o,{variant:"outline",iconRight:"chevron-down",children:l})})]}),e.jsxs("div",{className:"bg-gray-50 text-sm p-4 text-gray-600 rounded-lg",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Selected value:"})," ",l]}),e.jsx("p",{className:"mt-1",children:"Interactive components should work properly within dialogs."})]})]})})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const dialogOptions: DialogOptions = {
      title: "Confirm Action",
      message: "Are you sure you want to proceed with this action?",
      size: "lg",
      icon: {
        name: "alert-triangle",
        appearance: "warning"
      },
      actions: [{
        label: "Confirm",
        variant: "solid",
        onClick: () => createPromise()
      }]
    };
    return <div>
        <Button onClick={() => setIsOpen(true)}>
          Show Confirmation Dialog
        </Button>
        <Dialog open={isOpen} onOpenChange={setIsOpen} options={dialogOptions} />
      </div>;
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Show Custom Dialog</Button>
        <Dialog open={isOpen} onOpenChange={setIsOpen} options={{
        title: () => <h3 className="text-2xl font-semibold text-blue-600">
                Custom Title with Styling
              </h3>
      }} actions={<div className="flex justify-start flex-row-reverse gap-2">
              <Button variant="solid" onClick={() => setIsOpen(false)}>
                Save Changes
              </Button>
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
            </div>}>
          <div className="space-y-4">
            <p className="text-gray-700">
              This dialog uses props for flexible content layout.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800">
                You can put any content here including forms, lists, or other
                components.
              </p>
            </div>
          </div>
        </Dialog>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isSmallOpen, setSmallOpen] = useState(false);
    const [isLargeOpen, setLargeOpen] = useState(false);
    return <div className="space-x-2">
        <Button onClick={() => setSmallOpen(true)}>Small Dialog</Button>
        <Button onClick={() => setLargeOpen(true)}>Large Dialog</Button>

        <Dialog open={isSmallOpen} onOpenChange={setSmallOpen} options={{
        title: "Small Dialog",
        message: "This is a small dialog.",
        size: "sm",
        actions: [{
          label: "OK",
          variant: "solid"
        }]
      }} />

        <Dialog open={isLargeOpen} onOpenChange={setLargeOpen} options={{
        title: "Large Dialog",
        message: "This is a large dialog with more space for content.",
        size: "4xl",
        actions: [{
          label: "OK",
          variant: "solid"
        }]
      }} />
      </div>;
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Show Modal Dialog</Button>
        <Dialog open={isOpen} onOpenChange={setIsOpen} disableOutsideClickToClose={true} options={{
        title: "Modal Dialog",
        message: "This dialog cannot be closed by clicking outside. Use the buttons or ESC key.",
        actions: [{
          label: "Close",
          variant: "solid"
        }]
      }} />
      </div>;
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Option 1");
    const [autocompleteValue, setAutocompleteValue] = useState("" as AutocompleteOption);
    const dropdownOptions = [{
      label: "Option 1",
      onClick: () => setSelectedOption("Option 1"),
      key: "1"
    }, {
      label: "Option 2",
      onClick: () => setSelectedOption("Option 2"),
      key: "2"
    }, {
      label: "Option 3",
      onClick: () => setSelectedOption("Option 3"),
      key: "3"
    }, {
      group: "Advanced Options",
      key: "group-1",
      items: [{
        label: "Advanced Option A",
        icon: "settings",
        onClick: () => setSelectedOption("Advanced Option A"),
        key: "1"
      }, {
        label: "Advanced Option B",
        icon: "star",
        onClick: () => setSelectedOption("Advanced Option B"),
        key: "2"
      }]
    }];
    return <div>
        <Button onClick={() => setIsOpen(true)}>Show Settings Dialog</Button>
        <Dialog open={isOpen} onOpenChange={setIsOpen} options={{
        title: () => <h3 className="text-2xl font-semibold text-ink-gray-9">
                Settings Dialog
              </h3>
      }} actions={<div className="flex space-x-2">
              <Button variant="solid" onClick={() => setIsOpen(false)}>
                Save Settings
              </Button>
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
            </div>}>
          <div className="space-y-6 text-base">
            <p className="text-gray-700">
              This dialog contains interactive elements to test proper layering.
            </p>
            <Autocomplete options={[{
            label: "Option A",
            value: "A"
          }, {
            label: "Option B",
            value: "B"
          }, {
            label: "Option C",
            value: "C"
          }]} placeholder="Type to search..." value={autocompleteValue ?? ""} onChange={_value => setAutocompleteValue(_value as AutocompleteOption)} />
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                Select an option:
              </label>
              <Dropdown options={dropdownOptions} placement="left">
                <Button variant="outline" iconRight="chevron-down">
                  {selectedOption}
                </Button>
              </Dropdown>
            </div>
            <div className="bg-gray-50 text-sm p-4 text-gray-600 rounded-lg">
              <p>
                <strong>Selected value:</strong> {selectedOption}
              </p>
              <p className="mt-1">
                Interactive components should work properly within dialogs.
              </p>
            </div>
          </div>
        </Dialog>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};const Y=["BasicConfirmation","CustomContent","DifferentSizes","DisableOutsideClick","WithInteractiveComponents"];export{r as BasicConfirmation,c as CustomContent,p as DifferentSizes,d as DisableOutsideClick,u as WithInteractiveComponents,Y as __namedExportsOrder,W as default};
