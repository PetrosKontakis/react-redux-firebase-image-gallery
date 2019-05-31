import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteDocument} from '../store/actions';
import {Link} from 'react-router-dom';

class imgThumb extends Component {

    onClickHandler =  (e) =>{
        this.props.deleteDocument(this.props.image);
    }
    
    render(){
        const {id, url, title, content}  = this.props.image;
        return (
            <div>
                <h5>{title} - {id}</h5>
                <p>{content}</p>
                <img src={url} style={{maxWidth: '100%'}} alt={title}/>
                <button onClick={this.onClickHandler}>Delete</button> 
                <Link to={'edit/' + id}>Edit</Link>
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

