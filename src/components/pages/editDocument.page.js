import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getDocument, editDocument } from '../../store/actions'
import { Redirect } from 'react-router-dom';
import LinearLoader from '../linearLoader.component';

class EditDocumentPage extends Component {

    state = {
        title: '',
        content: '',
        url: '',
        id: ''
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.getImageDocumentStore && nextProps.getImageDocumentStore.imgDoc) {
            const { title, content, url, id } = nextProps.getImageDocumentStore.imgDoc;
            this.setState({ title, content, url, id });
        }
    }

    componentWillMount = (e) => {
        this.props.getDocument(this.props.match.params.id);
    }

    onInputChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        const { title, content, id } = this.state;
        const newDocument = { title, content, id };

        this.setState({
            title: '',
            content: '',
            url: '',
            id: ''
        });

        this.props.editDocument({ ...newDocument })
        this.props.history.push('/');
    }

    render() {

        const { getImageDocumentStore } = this.props;
        const { title, content, url } = this.state;

        if (!this.props.isAuth && this.props.authLoaded) {
            return (<Redirect to='/login' />)
        }

        return (
            <React.Fragment>
                {!getImageDocumentStore.isLoaded() && (<LinearLoader />)}
                <div className="container">



                    {getImageDocumentStore.hasServerError() && (<div>Server error!</div>)}

                    {
                        getImageDocumentStore.isLoaded() &&
                        (
                            <React.Fragment>
                                <h1 className="md-form-title">Edit picture</h1>
                                <form className="md-form-container" onSubmit={this.onFormSubmit}>

                                    <div className="md-input-container">
                                        <label htmlFor="title">Title: </label>
                                        <input type="text" id="title" value={title} onChange={this.onInputChange} />
                                    </div>
                                    <div className="md-input-container">
                                        <label htmlFor="content">Description: </label>
                                        <input type="text" id="content" value={content} onChange={this.onInputChange} />
                                    </div>
                                    <div>
                                        <img src={url} alt={title} style={{ width: '100%' }} />
                                    </div>
                                    <button className="btn-primary" type="submit">edit</button>
                                </form>
                            </React.Fragment>
                        )
                    }
                </div>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDocument: (documentId) => dispatch(getDocument(documentId)),
        editDocument: (document) => dispatch(editDocument(document))
    }
}

const mapStateToProps = (state) => {

    return {
        isloaded: state.document.getImageDocumentStore.isLoaded(),
        getImageDocumentStore: state.document.getImageDocumentStore,
        isAuth: state.auth.authUserStore.isUserAuth(),
        authLoaded: state.auth.authUserStore.isLoaded()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDocumentPage);

