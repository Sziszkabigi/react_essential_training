import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";



/*ReactDOM.render(
  <ul>
    <li>Monday</li>
    <li>Tuesday</li>
    <li>Wednesday</li>
  </ul>,
document.getElementById('root')
);*/

function AppTwo() {
  return(
    <h1>This is the second app </h1>
  );
}

ReactDOM.render(
  <React.Fragment>
    <App />
    <AppTwo />
  </React.Fragment>,
document.getElementById('root')
);
/** sort version of this
 * <>
    <App />
    <AppTwo />
  </>,
 */