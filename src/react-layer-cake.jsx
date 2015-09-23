import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'

export default class LayerCake extends Component {

  static propTypes = {
    children: PropTypes.element,
    onClick: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.layerElement = document.createElement('div')
  }

  componentDidMount() {
    document.body.appendChild(this.layerElement)
    this.renderToLayer()
  }

  componentWillUnmount() {
    document.body.removeChild(this.layerElement)
  }

  renderToLayer() {
    const classes = classnames({
      'react-layer-cake': true
    }, this.props.className)

    ReactDOM.render(<div {...this.props} className={classes}>{this.props.children}</div>, this.layerElement)
  }

  render() {
    return null
  }
}
