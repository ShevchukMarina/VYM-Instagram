import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

// import Thumbnail from "./components/Thumbnail/Thumbnail.js";
// import MainPage from "./pages/MainPage/MainPage";
import MainPagePostList from "./components/MainPagePostList/MainPagePostList.js";


class App extends Component {
    render() {
        return (
            //<p>HELLLLLOOOOOO</p>
            <Switch>
               <Route path = '/' component ={MainPagePostList}/>
            </Switch>
        )
    }
}

export default App;
