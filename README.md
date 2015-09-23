# What the?

So you need to set up a modal or some kind of "outsideClickHandler" - we'll you've come to the right place. `Layer` is the module to help you!

# Installation

Install via github with your authentication token.

```
import React from 'react';
import Layer from 'react-layer-cake';

class ToggleButton extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
  }

  handleClick(e) {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    var layer = null;

    if (this.state.show) {
      layer = <Layer onClick={(e) => { this.handleClick(e) }} />;
    }

    return (
      <div onClick={(e) => { this.handleClick(e) }}>
        Toggle {layer}
      </div>
    );
  }
}

```

Here we have a `Layer` component which is displayed show state true. The `Layer` can accept children (which is where you would put your modal or menu etc). The `Layer` requires an `onClick` handler which in this case sets toggles the show state.

You'll need to tmport the less file in order for the `Layer` element to cover the screen (an catch clicks!). Pass in `className` for dimming the `Layer` with styles and what not.

```
.react-layer-cake {
  background: grey;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
```

# Development Setup

Run `npm install` to install all dependencies. Next you'll want to run `npm start`. This will run webpack and start a python server to view your component. Visit `localhost:8000` while making changes.

