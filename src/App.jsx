import React, { Component } from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Login from "page/login/Login.jsx"
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
          <Route path="/login" component={ Login } />
          <Route path="/home" component={ Home } />
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    )
  }
}