
import * as ReactDOMClient from 'react-dom/client';
import React from 'react';
import App from "./App";

import {BrowserRouter} from 'react-router-dom'

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(

        <BrowserRouter basename="/testtest">
            <App />
        </BrowserRouter>

);

//