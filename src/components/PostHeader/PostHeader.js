import React, { Component } from 'react';
import thumbnail from '../../../public/img/thumbnail1.jpg'

class PostHeader extends Component {
    render() {
        return (
            <header>
                <div className="thumbnail">
                    <img src={thumbnail} alt="thumbnail"/>
                </div>
            </header>
        );
    }
}
export default PostHeader;