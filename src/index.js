import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PurchaseLi from './PurchaseLi';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PurchaseLi />, document.getElementById('root'));
registerServiceWorker();
