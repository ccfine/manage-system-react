import React, { Component } from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Home from "page/home/Home.jsx"

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      hasError: false
    }
  } 

  componentDidCatch (err, info) {
    this.setState({
      hasError: true
    })
  }

  render () {
    return this.state.hasError? null: (
      <BrowserRouter>
        <Switch>
          <Route  path="/home" component={ Home } />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    )
  }
}