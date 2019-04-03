
import React, { Component } from 'react'
import router from "../router/routers"
import Map from "../router/map"
class RouterView extends Component {
    render() {
        return (
                <Map routers={this.props.routers===undefined? router:this.props.routers}></Map>
        )
    }
}
export default RouterView