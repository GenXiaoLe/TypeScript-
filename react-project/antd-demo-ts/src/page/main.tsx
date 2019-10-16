import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from '../page/home/index';
import Goods from '../page/basic/goods';

export default class MainRouter extends Component {
    render() {
        return(
            <section>
                <Switch>
                    <Route path="/layout/home" components={Home}></Route>
                    <Route path="/layout/goods"  components={Goods}></Route>
                </Switch>
            </section>
        )
    }
}