import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../store/actions'
import { Redirect } from 'react-router-dom';

class LoginPage extends Component {

    state = {
        email: '',
        password: ''
    }

    onInputChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.login({ email: this.state.email, password: this.state.password })
    }

    render() {

        const { email, password } = this.state;

        const { authLoaded, isAuth } = this.props;

        if (authLoaded && isAuth) {
            return (<Redirect to='/' />)
        }

        return (
            <div>
                <h1>Login</h1>

                <form onSubmit={this.onFormSubmit}>

                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="email" id="email" value={email} onChange={this.onInputChange} />
                    </div>
                    <div>
                        <label htmlFor="Password">Password: </label>
                        <input type="password" id="password" value={password} onChange={this.onInputChange} />
                    </div>

                    <button type="submit">login</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.authUserStore.isUserAuth(),
        authLoaded: state.auth.authUserStore.isLoaded()
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (creds) => dispatch(login(creds)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)