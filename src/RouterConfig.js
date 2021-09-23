import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Notice from './Main/Notice';
import About from './About/About';

class RouterConfig extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={()=><Notice/>}/>
                    <Route exact path="/About" render={()=><About/>}/>
                </Switch>
              </BrowserRouter>
        );
    }
}

export default RouterConfig;