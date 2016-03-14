import ControlsSidebar from './ControlsSidebar.react';
import Detail from './Detail.react';
import extendProps from '../helpers/extendProps';
import extendComponentProps from '../helpers/extendComponentProps';
import Radium from 'radium';
import React, {Component, PropTypes as RPT} from 'react';
import resolveComponent from '../helpers/resolveComponent';
@Radium
export default class Atom extends Component {

  static propTypes = {
    componentsIndex: RPT.object.isRequired,
    customProps: RPT.object,
    selectedAtom: RPT.string,
    simplePropsSelected: RPT.bool
  }

  static contextTypes = {
    createSetAtomProp: RPT.func.isRequired,
    setAtomProp: RPT.func.isRequired
  }

  getCurrentComponent() {
    const {selectedAtom, componentsIndex} = this.props

    return componentsIndex[selectedAtom]
  }

  getCurrentProps() {
    const {simplePropsSelected} = this.props
    const {createSetAtomProp, setAtomProp} = this.context
    const atom = this.getCurrentComponent()
    const defaultProps = simplePropsSelected ? atom.simpleProps : atom.fullProps
    const customProps = this.props.customProps[atom.name] || {}

    return extendProps({
      component: resolveComponent(atom.component),
      createSetAtomProp,
      customProps,
      defaultProps,
      propsDefinition: atom.propsDefinition,
      setAtomProp
    })
  }

  getComponentExtendendProps() {
    const {propsDefinition} = this.getCurrentComponent()

    return extendComponentProps(this.getCurrentProps(), propsDefinition)
  }

  render() {
    const atom = this.getCurrentComponent()
    const currentProps = this.getCurrentProps()
    const extendedProps = this.getComponentExtendendProps()
    const {simplePropsSelected} = this.props

    return (
      <div>
        <ControlsSidebar
          atom={atom}
          currentProps={currentProps}
          simplePropsSelected={simplePropsSelected}
        />
        <Detail
          atom={atom}
          currentProps={currentProps}
          extendedProps={extendedProps}
        />
      </div>
    )
  }

}
