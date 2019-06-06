import React, { Component } from 'react';
import ImgList from '../imgList.component'
import { connect } from 'react-redux'
import { getDocuments } from '../../store/actions'
import { Redirect } from 'react-router-dom'

import LinearLoader from "../linearLoader.component";

class DashboardPage extends Component {

    componentWillMount() {
        this.props.getDocuments();
    }

    render() {
        const { list, loading, serverError } = this.props;

        if (!this.props.isAuth && this.props.authLoaded) {
            return (<Redirect to='/login' />)
        }

        return (
            <div>
                {loading && (<LinearLoader />)}
                <div className="container">
                    <br/>
                    {serverError && (<div>Server error!</div>)}
                    {list && (<ImgList list={list} />)}
                </div>
            </div>
        );
    }
}

const mapStateToProp = (state) => {
    return {
        list: state.document.getImageDocumensStore.getDocuments(),
        loading: state.document.getImageDocumensStore.isLoading(),
        serverError: state.document.getImageDocumensStore.getServerError(),
        isAuth: state.auth.authUserStore.isUserAuth(),
        authLoaded: state.auth.authUserStore.isLoaded()
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDocuments: () => dispatch(getDocuments())
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(DashboardPage);