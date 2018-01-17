import React from 'react'; // import the main react dependency
import ReactDOM from 'react-dom'; // import reactDOM
import { Provider } from 'react-redux'; // glue for react and redux
import App from './app/App'; // import the main app component

import './assets/stylesheets/styles.scss';

ReactDOM.render(
  <Provider> {/* Glue for react and redux */}
    <App /> {/* Render or App component */}
  </Provider>,
  document.getElementById('root') // mount app to our #root element
); 
