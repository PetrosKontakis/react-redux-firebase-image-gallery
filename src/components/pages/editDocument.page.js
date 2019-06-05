import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getDocument, editDocument } from '../../store/actions'
import { Redirect } from 'react-router-dom'


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
            <div>
                <h1>Add to gallery</h1>

                {!getImageDocumentStore.isLoaded() && (<div>loading...</div>)}
                {getImageDocumentStore.hasServerError() && (<div>Server error!</div>)}

                {
                    getImageDocumentStore.isLoaded() &&
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
        isloaded: state.document.getImageDocumentStore.isLoaded(),
        getImageDocumentStore: state.document.getImageDocumentStore,
        isAuth: state.auth.authUserStore.isUserAuth(),
        authLoaded: state.auth.authUserStore.isLoaded()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDocumentPage);

