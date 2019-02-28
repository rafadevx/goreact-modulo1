import React, { Component } from 'react'
import { render } from 'react-dom'

class Button extends Component {
  render() {
    return <a href="" onClick={this.props.onClick} >{this.props.children}</a>
  }
}

class App extends Component {

  handleClick() {
    alert('Botao Clicado')
  }

  render() {
    return (
      <div>
        <h1>Hello Rafadevx</h1>
        <Button onClick={this.handleClick}>Enviar</Button>
      </div>
    )
  }
}

render(<App />, document.querySelector('#app'))