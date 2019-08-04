import React, {Component} from 'react';
import {Link} from "react-router-dom";
import thumbnail from '../../img/thumbnail.jpg';
import './Thumbnail.scss';

class Thumbnail extends Component {
    render() {
        return (
            <Link to='/:nickName' className="thumbnail-item">
                <img src={thumbnail} className="thumbnail" alt="thumbnail"/>
            </Link>
        );
    }
}
export default Thumbnail;