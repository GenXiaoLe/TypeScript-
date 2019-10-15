import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterView from './routers/index';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<RouterView />, document.getElementById('root'));

serviceWorker.unregister();