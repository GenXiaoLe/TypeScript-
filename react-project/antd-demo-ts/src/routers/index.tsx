import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from '../page/home/index';
import Goods from '../page/basic/goods';
import App from '../App';


export default class RouteConfig extends Component {
    render() {
        return(
            <HashRouter>
                <Switch>
                    <Route exact path="/" components={App} />
                    {/* <Route exact path="/home"  components={Home} />
                    <Route exact path="/goods"  components={Goods} /> */}
                </Switch>
            </HashRouter>
        )
    }
}