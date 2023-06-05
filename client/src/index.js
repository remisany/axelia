import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import {Provider} from 'react-redux';

//import components
import Router from './components/Router';

//import reportWebVitals
import reportWebVitals from './reportWebVitals';

//import serviceWorker
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

//import config
import {store} from './config/redux';

//import styles
import './styles/styles.scss'

//config url
axios.defaults.baseURL = process.env.REACT_APP_API_HOST

const dontSleep = () => 'wakeLock' in navigator && 'request' in navigator.wakeLock && navigator.wakeLock.request('screen')

dontSleep()

const root = ReactDOM.createRoot(
    document.getElementById('root')
)

root.render(
    <Provider store={store}>
        <Router/>
    </Provider>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
