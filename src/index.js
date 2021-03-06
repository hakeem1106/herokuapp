import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Ano from './components/Ano/Ano';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Ano />, document.getElementById('anoRoot'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
