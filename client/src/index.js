import React from 'react';
import {createRoot} from 'react-dom/client';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

//import components
import Router from "./components/Router";

//import styles
import './styles/styles.scss'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <React.StrictMode>
        <Router/>
    </React.StrictMode>
)

serviceWorkerRegistration.register()

reportWebVitals()
