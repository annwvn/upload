import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"


class Map extends Component {
    render() {
        const DefaultRoute =
            <Route path="/" key={"DefaultRoute"} exact component={() => {
                return <Redirect to="/file" />
            }}></Route>
        return (
            <Switch>
                {
                    this.props.routers && this.props.routers.map((item, index) => {
                        const Comp = item.component
                        return (
                            <Route key={index} path={item.path} component={(api) => {
                                return (
                                    <Comp routers={item.children} {...api} ></Comp>
                                    )
                            }} />
                        )
                    }).concat(DefaultRoute)
                }
            </Switch>
        )
    }
}
export default Map