import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Navbar/>
                <div className="content">
                    <Route path="/profile" render={() => <Profile state={props.state.profileReducer} dispatch={props.dispatch}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsReducer} dispatch={props.dispatch}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
