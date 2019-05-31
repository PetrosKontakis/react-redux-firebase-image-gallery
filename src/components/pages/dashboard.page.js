import React, { Component } from 'react';
import ImgList from '../imgList.component'
import { connect } from 'react-redux'
import {getDocuments, realTimeUpdate} from '../../store/actions'
import {Link} from 'react-router-dom'


class DashboardPage extends Component {

    componentWillMount() {
        this.props.getDocuments();
        this.props.realTimeUpdate();
    }
   
    render() {
        const {list, loading, serverError} = this.props;

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
        serverError: state.document.serverError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDocuments: () => dispatch(getDocuments()),
        realTimeUpdate: () => dispatch(realTimeUpdate())
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(DashboardPage);