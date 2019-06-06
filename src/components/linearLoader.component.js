import React from 'react'
import '../styles/_loader.scss' 

const LinearLoader = props => {
    return (
        <div className="load-bar">
            <div className="bar"></div><div className="bar"></div><div className="bar"></div>
        </div>
    )
}

export default LinearLoader
