/* eslint-disable */
// Generated by component library do not modify
// can be ignored by .gitignore
import ComponentsButton from '../components/Button.react.js'
import ComponentsEmptyProps from '../components/EmptyProps.react.js'
import ComponentsErrorMessage from '../components/ErrorMessage.react.js'
import ComponentsIcon from '../components/Icon.react.js'
import ComponentsNoProps from '../components/NoProps.react.js'
import ComponentsOnChangeEvent from '../components/OnChangeEvent.js'
import ComponentsOnChangeNameAndValue from '../components/OnChangeNameAndValue.js'
import ComponentsRadioInput from '../components/RadioInput.react.js'
import ComponentsTooltip from '../components/Tooltip.react.js'
import ComponentsWithExtendProps from '../components/WithExtendProps.react.js'
import ComponentsWithShapePropsWithDefaults from '../components/WithShapePropsWithDefaults.react.js'

export default {
  ComponentsButton: {
    name: 'ComponentsButton',
    menu: 'Components Button',
    file: '../components/Button.react.js',
    component: ComponentsButton,
    componentName: 'Button',
    description: '',
    customProps: {},
    propsDefinition: {children:{type:{name:"any"},required:true,description:""},disabled:{type:{name:"bool"},required:false,description:""},fullWidth:{type:{name:"bool"},required:false,description:""},inheritedStyle:{type:{name:"object"},required:false,description:""},kind:{type:{name:"enum",value:[{value:"'primary'",computed:false},{value:"'secondary'",computed:false},{value:"'outlined'",computed:false}]},required:true,description:""},onClick:{type:{name:"func"},required:true,description:""},size:{type:{name:"enum",value:[{value:"'small'",computed:false},{value:"'large'",computed:false}]},required:false,description:""},type:{type:{name:"string"},required:false,description:""}},
    simpleProps: {children:"Default ANY",kind:"primary",onClick:function () {
        alert('executed function');
      }},
    fullProps: {children:"Default ANY",disabled:true,fullWidth:true,inheritedStyle:null,kind:"primary",onClick:function () {
        alert('executed function');
      },size:"small",type:"Default string type"}
  },
  ComponentsEmptyProps: {
    name: 'ComponentsEmptyProps',
    menu: 'Components EmptyProps',
    file: '../components/EmptyProps.react.js',
    component: ComponentsEmptyProps,
    componentName: 'EmptyProps',
    description: '',
    customProps: {},
    propsDefinition: {},
    simpleProps: {},
    fullProps: {}
  },
  ComponentsErrorMessage: {
    name: 'ComponentsErrorMessage',
    menu: 'Components ErrorMessage',
    file: '../components/ErrorMessage.react.js',
    component: ComponentsErrorMessage,
    componentName: 'ErrorMessage',
    description: '',
    customProps: {},
    propsDefinition: {children:{type:{name:"any"},required:true,description:""},type:{type:{name:"string"},required:false,description:""}},
    simpleProps: {children:"Default ANY"},
    fullProps: {children:"Default ANY",type:"Default string type"}
  },
  ComponentsIcon: {
    name: 'ComponentsIcon',
    menu: 'Components Icon',
    file: '../components/Icon.react.js',
    component: ComponentsIcon,
    componentName: 'Icon',
    description: '',
    customProps: {},
    propsDefinition: {color:{type:{name:"string"},required:false,description:""},display:{type:{name:"string"},required:false,description:""},inheritedStyle:{type:{name:"object"},required:false,description:""},kind:{type:{name:"enum",value:[{value:"'check'",computed:false},{value:"'star'",computed:false}]},required:true,description:""},size:{type:{name:"string"},required:false,description:""}},
    simpleProps: {kind:"check"},
    fullProps: {color:"Default string color",display:"Default string display",inheritedStyle:null,kind:"check",size:"Default string size"}
  },
  ComponentsNoProps: {
    name: 'ComponentsNoProps',
    menu: 'Components NoProps',
    file: '../components/NoProps.react.js',
    component: ComponentsNoProps,
    componentName: 'NoProps',
    description: '',
    customProps: {},
    propsDefinition: {},
    simpleProps: {},
    fullProps: {}
  },
  ComponentsOnChangeEvent: {
    name: 'ComponentsOnChangeEvent',
    menu: 'Components OnChangeEvent',
    file: '../components/OnChangeEvent.js',
    component: ComponentsOnChangeEvent,
    componentName: 'OnChangeEvent',
    description: '',
    customProps: {},
    propsDefinition: {children:{type:{name:"any"},required:false,description:""},error:{type:{name:"string"},required:false,description:""},icon:{type:{name:"string"},required:false,description:""},iconSize:{type:{name:"string"},required:false,description:""},label:{type:{name:"string"},required:false,description:""},name:{type:{name:"string"},required:true,description:""},onChange:{type:{name:"func"},required:true,description:""},placeholder:{type:{name:"string"},required:true,description:""},tooltip:{type:{name:"string"},required:false,description:""},type:{type:{name:"string"},required:true,description:"",defaultValue:{value:"'text'",computed:false}},unit:{type:{name:"string"},required:false,description:""},value:{type:{name:"string"},required:false,description:""}},
    simpleProps: {name:"Default string name",onChange:function () {
        alert('executed function');
      },placeholder:"Default string placeholder",type:"text"},
    fullProps: {tooltip:"Default string tooltip",unit:"Default string unit",error:"Default string error",name:"Default string name",onChange:function () {
        alert('executed function');
      },value:"Default string value",placeholder:"Default string placeholder",label:"Default string label",icon:"Default string icon",iconSize:"Default string iconSize",type:"text",children:"Default ANY"}
  },
  ComponentsOnChangeNameAndValue: {
    name: 'ComponentsOnChangeNameAndValue',
    menu: 'Components OnChangeNameAndValue',
    file: '../components/OnChangeNameAndValue.js',
    component: ComponentsOnChangeNameAndValue,
    componentName: 'OnChangeNameAndValue',
    description: '',
    customProps: {},
    propsDefinition: {children:{type:{name:"any"},required:false,description:""},error:{type:{name:"string"},required:false,description:""},icon:{type:{name:"string"},required:false,description:""},iconSize:{type:{name:"string"},required:false,description:""},label:{type:{name:"string"},required:false,description:""},name:{type:{name:"string"},required:true,description:""},onChange:{type:{name:"func"},required:true,description:""},placeholder:{type:{name:"string"},required:true,description:""},tooltip:{type:{name:"string"},required:false,description:""},type:{type:{name:"string"},required:true,description:"",defaultValue:{value:"'text'",computed:false}},unit:{type:{name:"string"},required:false,description:""},value:{type:{name:"string"},required:false,description:""}},
    simpleProps: {name:"Default string name",onChange:function () {
        alert('executed function');
      },placeholder:"Default string placeholder",type:"text"},
    fullProps: {tooltip:"Default string tooltip",unit:"Default string unit",error:"Default string error",name:"Default string name",onChange:function () {
        alert('executed function');
      },value:"Default string value",placeholder:"Default string placeholder",label:"Default string label",icon:"Default string icon",iconSize:"Default string iconSize",type:"text",children:"Default ANY"}
  },
  ComponentsRadioInput: {
    name: 'ComponentsRadioInput',
    menu: 'Components RadioInput',
    file: '../components/RadioInput.react.js',
    component: ComponentsRadioInput,
    componentName: 'RadioInput',
    description: '',
    customProps: {},
    propsDefinition: {horizontal:{type:{name:"bool"},required:false,description:""},name:{type:{name:"string"},required:true,description:""},onChange:{type:{name:"func"},required:true,description:""},selected:{type:{name:"bool"},required:true,description:""},text:{type:{name:"string"},required:false,description:""},tooltip:{type:{name:"string"},required:false,description:""},value:{type:{name:"string"},required:true,description:""}},
    simpleProps: {name:"Default string name",onChange:function () {
        alert('executed function');
      },selected:true,value:"Default string value"},
    fullProps: {horizontal:true,name:"Default string name",onChange:function () {
        alert('executed function');
      },selected:true,text:"Default string text",tooltip:"Default string tooltip",value:"Default string value"}
  },
  ComponentsTooltip: {
    name: 'ComponentsTooltip',
    menu: 'Components Tooltip',
    file: '../components/Tooltip.react.js',
    component: ComponentsTooltip,
    componentName: 'Tooltip',
    description: '',
    customProps: {},
    propsDefinition: {tooltip:{type:{name:"string"},required:true,description:""}},
    simpleProps: {tooltip:"Default string tooltip"},
    fullProps: {tooltip:"Default string tooltip"}
  },
  ComponentsWithExtendProps: {
    name: 'ComponentsWithExtendProps',
    menu: 'Components WithExtendProps',
    file: '../components/WithExtendProps.react.js',
    component: ComponentsWithExtendProps,
    componentName: 'WithExtendProps',
    description: '',
    customProps: {},
    propsDefinition: {children:{type:{name:"object"},required:true,description:"",defaultValue:{value:"'Editable field with value'",computed:false}},editing:{type:{name:"bool"},required:true,description:"",defaultValue:{value:"false",computed:false}},label:{type:{name:"string"},required:true,description:"",defaultValue:{value:"'Value to show'",computed:false}},onEditingModeChange:{type:{name:"func"},required:true,description:""}},
    simpleProps: {children:"Editable field with value",editing:false,label:"Value to show",onEditingModeChange:function () {
        alert('executed function');
      }},
    fullProps: {children:"Editable field with value",editing:false,label:"Value to show",onEditingModeChange:function () {
        alert('executed function');
      }}
  },
  ComponentsWithShapePropsWithDefaults: {
    name: 'ComponentsWithShapePropsWithDefaults',
    menu: 'Components WithShapePropsWithDefaults',
    file: '../components/WithShapePropsWithDefaults.react.js',
    component: ComponentsWithShapePropsWithDefaults,
    componentName: 'WithShapePropsWithDefaults',
    description: '',
    customProps: {},
    propsDefinition: {interval:{type:{name:"shape",value:{value:{name:"number",required:true},text:{name:"string",required:true}}},required:true,description:"",defaultValue:{value:"{\n  value: 123,\n  text: 'Foo'\n}",computed:false}}},
    simpleProps: {interval:{value:123,text:"Foo"}},
    fullProps: {interval:{value:123,text:"Foo"}}
  },
}
