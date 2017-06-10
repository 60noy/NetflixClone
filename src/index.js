import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
// import '../node_modules/grommet/scss/vanilla/index.scss';


ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();

export default Routes;
