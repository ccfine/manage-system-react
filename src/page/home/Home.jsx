import React, { Component } from "react"
import { Switch, Route, Link } from "react-router-dom"
import Main from "page/test/Main.jsx"
import A from "page/test/A.jsx"
import A1 from "page/test/A1.jsx"
import B from "page/test/B.jsx"
import styles from "./home.css"

export default class Home extends Component {
  render () {
    return (
      <div className={ styles.home }>
        <div>
          <div className={ styles.aside }>
            <Link to="/home/a/index">a</Link>
          </div>
          <div className={ styles.aside }>
            <Link to="/home/b/index">b</Link>
          </div>
        </div>
        <div className={ styles.content }>
          <Switch>
            <Route path="/home" exact component={ Main } />
            <Route path="/home/a/index" component={ A } />
            <Route path="/home/a/a1" component={ A1 } />
            <Route path="/home/b/index" component={ B } />
          </Switch>
        </div>
      </div>
    )
  }
}