import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import FlexboxChallenge from "./flexboxChallenge"
import Background from "./components/background"

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <h1 style={{ color: "white " }}>DUDE, I'm IN!</h1>
        <div
          style={{
            marginTop: -9,
            transform: "skewY(30deg)"
          }}
        >
          <Background />
        </div>
      </div>
    )
  }
}

export default App
