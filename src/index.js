import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'

class Button extends Component {
  static defaultProps = {
    children: 'Salvar'
  }

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  }
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