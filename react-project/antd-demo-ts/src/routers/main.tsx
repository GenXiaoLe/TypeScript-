import * as React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import Home from '../page/home/index';
import Goods from '../page/basic/goods';
import First from '../page/first/index';

export default class RouteMain extends React.Component {
    render(){
        return (
            <Switch>
                <Route exact path="/layout" component={First}/>
                <Route path="/layout/home" component={Home}/>
                <Route path="/layout/goods" component={Goods}/>
            </Switch>
        )
    }
}