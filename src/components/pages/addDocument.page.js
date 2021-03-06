import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createDocument } from '../../store/actions'
import Dropzone from 'react-dropzone'
import { Redirect } from 'react-router-dom'

class AddDocumentPage extends Component {

    state = {
        title: '',
        content: '',
        url: ''
    }

    onInputChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    onInputFileInput = (selectedFiles) => {

        let state = this;
        if (selectedFiles.length > 0) {
            const file = selectedFiles[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                state.setState({ url: reader.result })
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
        }
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

        const { title, content, url } = this.state;

        if (!this.props.isAuth && this.props.authLoaded) {
            return (<Redirect to='/login' />)
        }

        return (
            <div className="container">
                <h1 className="md-form-title">Add to gallery</h1>
                <form className="md-form-container" onSubmit={this.onFormSubmit}>
                    <Dropzone
                        onDrop={this.onInputFileInput}>
                        {({ getRootProps, getInputProps, isDragActive, isDragReject, rejectedFiles }) => (

                            <div {...getRootProps()}>
                                {isDragActive && (<span>Is drag active</span>)}
                                {isDragReject && (<span>Is drag reject</span>)}
                                {rejectedFiles && (<span>Rejected files</span>)}

                                <div className="md-input-container">
                                    <label htmlFor="title">Title: </label>
                                    <input type="text" id="title" value={title} onChange={this.onInputChange} />
                                </div>
                                <div className="md-input-container">
                                    <label htmlFor="content">Description: </label>
                                    <input type="text" id="content" value={content} onChange={this.onInputChange} />
                                </div>
                                <div className="md-input-container">
                                    <label htmlFor="url">Url: </label>
                                    <input type="text" id="url" value={url} onChange={this.onInputChange} />
                                </div>

                                {url && (
                                    <div>
                                        <img src={url} alt={title} style={{width: '100%'}}/>
                                    </div>
                                )}
                            </div>
                        )}
                    </Dropzone>
                    <div className="md-input-container">
                        <label htmlFor="file">File: </label>
                        <input
                            type="file"
                            id="file"
                            onChange={(e) => this.onInputFileInput(e.target.files)} />
                    </div>

                    <button className="btn-primary" type="submit">add</button>
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

const mapStateToParams = state => {
    return {
        isAuth: state.auth.authUserStore.isUserAuth(),
        authLoaded: state.auth.authUserStore.isLoaded()
    }
}

export default connect(mapStateToParams, mapDispatchToProps)(AddDocumentPage);

