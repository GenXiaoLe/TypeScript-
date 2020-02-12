import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouteConfig from './routers/index';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './store/index';

ReactDOM.render(
    <Provider store={Store}>
        <HashRouter>
            <RouteConfig />
        </HashRouter>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();