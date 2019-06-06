import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { logout } from '../store/actions'

class LogoutLink extends Component {

    logout = () => {
        this.props.logout();
    }
    render() {
        const { isAuth, isAuthLoaded } = this.props
      
        return (
            <div className="md-toolbar">
                <div className="container">

                    <p className="md-branding pull-left">
                        <Link to="/">
                            Gallery
                        </Link>
                    </p>

                    {isAuth && isAuthLoaded ? (
                        <div className="md-toolbar-actions pull-right text-right">

                            <Link className="btn-primary" to="/create">Upload </Link>

                            <a href='/#' className="btn-primary" onClick={this.logout}>log out</a>
                        </div>
                    ) : (<React.Fragment />)}

                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    }
}
const mapStateToProps = state => {
    return {
        isAuth: state.auth.authUserStore.isUserAuth(),
        isAuthLoaded: state.auth.authUserStore.isLoaded()
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LogoutLink);