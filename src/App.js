import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";


import MainPage from "./pages/MainPage/MainPage.js";


class App extends Component {
    render() {
        return (
            <Switch>
                // eslint-disable-next-line react/jsx-no-undef
                <Route path = '/' component ={MainPage}/>
            </Switch>

        )
    }

}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


////rcjc
export default App;
