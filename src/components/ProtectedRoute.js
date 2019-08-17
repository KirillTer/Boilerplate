import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import UnAuthorized from './UnAuthorized'

class ProtectedRoute extends Component {
    static propTypes = {

    };

    render() {
        const {component, ...rest} = this.props
        return <Route {...rest} render={this.renderProtected}/>
    }

    renderProtected = (routeProps) => {
        const {component: ProtectedComponent} = this.props
        return localStorage.getItem('token') ? <ProtectedComponent {...routeProps}/> : <UnAuthorized />
    }
}

export default ProtectedRoute
