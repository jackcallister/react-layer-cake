import React from 'react'
import ReactDOM from 'react-dom'
import Layer from '../../src/react-layer-cake'

class ToggleButton extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      show: false
    }
  }

  handleClick(e) {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    var layer = null

    if (this.state.show) {
      layer = <Layer onClick={(e) => { this.handleClick(e) }} />
    }

    return (
      <div onClick={(e) => { this.handleClick(e) }}>
        Toggle {layer}
      </div>
    )
  }
}

ReactDOM.render(<ToggleButton />, document.getElementById('app'))
