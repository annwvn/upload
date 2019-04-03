import React, { Component } from 'react'
import { BrowserRouter } from "react-router-dom"
import RouterView from "../router/routerView"
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <RouterView></RouterView>
      </BrowserRouter>
    )
  }
}
