import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import config from './config';

ReactDOM.render(<App text={config.headerText} />, document.getElementById('app'));

