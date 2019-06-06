import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteDocument } from '../store/actions';
import { Link } from 'react-router-dom';

class imgThumb extends Component {

    onClickHandler = (e) => {
        this.props.deleteDocument(this.props.image);
    }

    render() {
        const { id, url, title, content } = this.props.image;
        return (
            <div className="img-thumb">


                <img src={url} alt={title} />

                <div className="img-thumb-info-container">
                    <h5>{title} - {id}</h5>
                    <p>{content}</p>
                    <button className="btn-primary" onClick={this.onClickHandler}>Delete</button>
                    <Link className="btn-primary" to={'edit/' + id}>Edit</Link>
                </div>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        deleteDocument: (document) => dispatch(deleteDocument(document))
    }
}

export default connect(null, mapDispatchToProps)(imgThumb);

