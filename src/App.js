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

  charsLeftColorChanger() {
    if(this.state.charsLeft > 0) {
      document.querySelector(".chars-left").style.color = '#449978'
    } else if (this.state.charsLeft < 0) {
      document.querySelector(".chars-left").style.color = '#EO5C57'
    } else if (this.state.charsLeft === 0){
      document.querySelector(".chars-left").style.color = '#000000'
    }
  }

  handleCharInput(event){
    event.preventDefault()

    this.setState({
      charCount: event.target.value.length,
      charsLeft: this.state.totalChars - event.target.value.length
    })
    this.charsLeftColorChanger()
  }


  handleCharTotal(event) {
    event.preventDefault()
    this.setState({
      totalChars: parseInt(event.target.value),
      charsLeft: parseInt(event.target.value) - this.state.charCount
    })

    this.charsLeftColorChanger()
  }

  render() {
    return (
      <div>
        Enter the max number of characters:<input type="textbox" className="text-box" onChange={this.handleCharTotal}/>
        <div className="display-flex">
          <input type="integer" className="text-area" onChange={this.handleCharInput} />
        </div>
        <span className="chars-left">Characters Left: {this.state.charsLeft}</span>
      </div>
    )
  }
}

export default App
