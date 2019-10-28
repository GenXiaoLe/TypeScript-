import * as React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import App from '../App';
import Login from '../page/login/index';

export default class RouteConfig extends React.Component {
    render(){
        return (
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/layout" component={App} />
            </Switch>
        )
    }
}