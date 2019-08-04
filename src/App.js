import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Thumbnail from "./components/Thumbnail/Thumbnail.js";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path = '/' component ={Thumbnail}/>
            </Switch>
        )
    }
}

export default App;
