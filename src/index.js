import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './React/App';
import store from './Redux/store';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
