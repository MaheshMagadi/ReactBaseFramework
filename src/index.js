import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import App from './app/app';


import 'react-select/dist/react-select.css';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";

// basename must be match pom.xml's artifactId & WebSphere deployment root path
ReactDOM.render(<App />, document.getElementById('root'));

if (process.env.NODE_ENV === "production") {
    serviceWorkerRegister();
}