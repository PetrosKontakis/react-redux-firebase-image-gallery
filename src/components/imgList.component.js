import React, {Component} from 'react';

import ImgThumb from './imgThumb.component';


class ImgList extends Component {
    render(){
        const {list} = this.props;
        return (
            <div>
                {list && list.map((img) => (<ImgThumb image={img} key={img.id}/>))}
            </div>
        )
    }
}

export default ImgList;