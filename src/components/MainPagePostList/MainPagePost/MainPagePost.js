import React from 'react';

    export default function MainPagePost(props) {
        return (
            <li>
                <div style={{"display": "inline-block"}}>{props.nickName
                }</div>
                <div style={{"display": "inline-block"}}>{props.firstName
                }</div>
            </li>
        )
    }