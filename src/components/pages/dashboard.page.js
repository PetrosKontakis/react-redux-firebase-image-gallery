import React, { Component } from 'react';
import ImgList from '../imgList.component'
import { connect } from 'react-redux'
import {getDocuments} from '../../store/actions'
import {Link, Redirect} from 'react-router-dom'


class DashboardPage extends Component {

    componentWillMount() {
        this.props.getDocuments();
    }
   
    render() {
        const {list, loading, serverError} = this.props;

        if(!this.props.isAuth && this.props.authLoaded){
            return (<Redirect to='/login'/>)
        }
        
        return (
            <div>
                <h1>Galery</h1>
                <Link to="/create">Create new </Link>
                {loading && (<div>loading...</div>)}
                {serverError && (<div>Server error!</div>)}
                {list && (<ImgList list={list} />)}
                
            </div>
        );
    }
}

const mapStateToProp = (state) => {
    return {
        list: state.document.list,
        loading: state.document.loading,
        serverError: state.document.serverError,
        isAuth: state.document.isAuth,
        authLoaded: state.document.authLoaded
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDocuments: () => dispatch(getDocuments())
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(DashboardPage);