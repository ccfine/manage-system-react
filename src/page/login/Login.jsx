import React, { Component } from "react"
import styles from "./login.css"

export default class Login extends Component {
  handleLogin () {
    this.props.history.push("/home")
  }

  render () {
    return (
      <button className={ styles.login } onClick={ () => this.handleLogin() }>登录</button>
    )
  }
}