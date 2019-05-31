import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createDocument } from '../../store/actions'

class AddDocumentPage extends Component {

    state = {
        title: '',
        content: '',
        url: ''
    }

    onInputChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        // const id = new Date().getTime()
        const newDocument = { ...this.state, createDate: new Date().getTime() };

        this.setState({
            title: '',
            content: '',
            url: ''
        });

        this.props.createDocument({ ...newDocument })
        this.props.history.push('/');
    }

    render() {

        const {title, content, url } = this.state;
        return (
            <div>
                <h1>Add to gallery</h1>

                <form onSubmit={this.onFormSubmit}>

                    <div>
                        <label htmlFor="title">Title: </label>
                        <input type="text" id="title" value={title} onChange={this.onInputChange} />
                    </div>
                    <div>
                        <label htmlFor="content">Description: </label>
                        <input type="text" id="content" value={content} onChange={this.onInputChange} />
                    </div>
                    <div>
                        <label htmlFor="url">Url: </label>
                        <input type="text" id="url" value={url} onChange={this.onInputChange} />
                    </div>

                    <button type="submit">add</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createDocument: (document) => dispatch(createDocument(document))
    }
}

export default connect(null, mapDispatchToProps)(AddDocumentPage);

