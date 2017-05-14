import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(){
    super()

    this.state = {
      totalChars: 0,
      charCount: 0,
      charsLeft: 0,
      err: ""
    }

    this.handleCharInput = this.handleCharInput.bind(this)    
    this.handleCharTotal = this.handleCharTotal.bind(this)    
    this.charsLeftColorChanger = this.charsLeftColorChanger.bind(this) 
  }

  componentWillUpdate(nextProps, nextState){
    this.charsLeftColorChanger(nextState)
  }

  charsLeftColorChanger(nextState) {
    if (nextState.charsLeft === 0) {
      document.querySelector(".chars-left").style.color = "#FFFFFF"
    } else if (nextState.charsLeft < 0) {
      document.querySelector(".chars-left").style.color = "red"
    } else if (nextState.charsLeft > 0){
      document.querySelector(".chars-left").style.color = "#449978"
    }
  }

  handleCharInput(event){
    event.preventDefault()
    this.setState({
      charCount: event.target.value.length,
      charsLeft: this.state.totalChars - event.target.value.length
    })
  }


  handleCharTotal(event) {
    event.preventDefault()
    if (!!parseInt(event.target.value)) {
      this.setState({
        totalChars: parseInt(event.target.value),
        charsLeft: parseInt(event.target.value) - this.state.charCount,
        err: ""
      })
    } else {
      this.setState({
        err: "Please enter a valid number"
      })
    }
  }

  render() {
    return (
      <div className="page-wrapper">
        <div className="display-flex text-align">
          <span className="flex-auto">
            <input type="text" placeholder="Enter character limit" className="text-box" onChange={this.handleCharTotal}/>
            <span className="error-message">
              {this.state.err}
            </span>
          </span>
          
          <span className="flex-auto chars-left">
            {this.state.charsLeft}
          </span>
        </div>
        <div className="display-flex">
          <input type="integer" className="text-area flex-auto" onChange={this.handleCharInput} />
        </div>
      </div>
    )
  }
}

export default App
