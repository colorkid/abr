import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Calculator from './components/Calculator';
import store from './redux/store';
import './fonts/fonts.css';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Calculator />
    </Provider>,
    document.getElementById('root')
);
