import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouteConfig from './routers/index';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <RouteConfig />
    </HashRouter>, document.getElementById('root'));

serviceWorker.unregister();