import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getDocument, editDocument } from '../../store/actions'
import {Redirect} from 'react-router-dom'


class EditDocumentPage extends Component {

    state = {
        title: '',
        content: '',
        url: '',
        id: ''
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.requestedDocument) {
            const { title, content, url, id } = nextProps.requestedDocument;
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

        // const id = new Date().getTime()
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
        
        const { loading, serverError, requestedDocument } = this.props;
        const { title, content, url } = this.state;

        if(!this.props.isAuth && this.props.authLoaded){
            return (<Redirect to='/login'/>)
        }
        
        return (
            <div>
                <h1>Add to gallery</h1>

                {loading && (<div>loading...</div>)}
                {serverError && (<div>Server error!</div>)}

                {
                    requestedDocument &&
                    (
                        <form onSubmit={this.onFormSubmit}>

                            <div>
                                <label htmlFor="title">Title: </label>
                                <input type="text" id="title" value={title} onChange={this.onInputChange} />
                            </div>
                            <div>
                                <label htmlFor="content">Description: </label>
                                <input type="text" id="content" value={content} onChange={this.onInputChange} />
                            </div>
                            <img src={url} alt={title} />

                            <button type="submit">edit</button>
                        </form>
                    )
                }
            </div>
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
        requestedDocument: state.document.requestedDocument,
        loading: state.document.loading,
        serverError: state.document.serverError,
        isAuth: state.document.isAuth,
        authLoaded: state.document.authLoaded
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDocumentPage);

