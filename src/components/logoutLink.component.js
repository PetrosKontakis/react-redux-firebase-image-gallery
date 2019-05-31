import React, { Component } from 'react'
import {connect} from 'react-redux'

import {logout} from '../store/actions'

class LogoutLink extends Component {

    logout = () =>{
        this.props.logout();
    }
    render() {
        return (<a href='/#' onClick={this.logout}>log out</a>)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    }
}

export default connect(null, mapDispatchToProps)(LogoutLink);