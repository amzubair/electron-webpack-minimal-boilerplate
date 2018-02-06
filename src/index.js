import React, { Component } from 'react'
import { render } from 'react-dom'
import printer from 'printer'
import style from './style.scss'

class App extends Component {
  state = {
    printers: []
  }

  componentDidMount() {
    this.setState({
      printers: printer.getPrinters()
    })
  }

  render() {
    return (
      <div>
        {this.state.printers.map((printer, index) => (
          <li key={index}>{printer.name}</li>
        ))}
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
