import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Another from './Another';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />,document.getElementById('root'));
ReactDOM.render(<Another />,document.getElementById('root2'));


registerServiceWorker();

if (module.hot) {
    module.hot.accept();
}
