import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Route from './routers/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Route />, document.getElementById('root'));

serviceWorker.unregister();