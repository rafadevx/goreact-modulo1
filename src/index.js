import React, { Component } from 'react'
import { render } from 'react-dom'
import Button from './Button'

import './style.scss'

class App extends Component {

  state = {
    counter: 0
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <div>
        <h1>Hello rafadevx</h1>
        <h2>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Somar</Button>
      </div>
    )
  }
}

render(<App />, document.querySelector('#app'))