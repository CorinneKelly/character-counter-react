import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(){
    super()

    this.state = {
      totalChars: 0,
      charCount: 0,
      charsLeft: 0
    }

    this.handleCharInput = this.handleCharInput.bind(this)    
    this.handleCharTotal = this.handleCharTotal.bind(this)    
  }

  handleCharInput(event){
    event.preventDefault()
    this.setState({
      charCount: event.target.value.length,
      charsLeft: this.state.totalChars - event.target.value.length
    })
  }

  handleCharTotal(event){
    event.preventDefault()
    this.setState({
      totalChars: event.target.value.parseInt()
    })
  }

  render() {
    return (
      <div className="">
        <input type="textbox" className="text-box" onChange={this.handleCharTotal}/>
        <input type="textarea" className="text-area" onChange={this.handleCharInput} />
        {this.state.charsLeft}
      </div>
    )
  }
}

export default App
