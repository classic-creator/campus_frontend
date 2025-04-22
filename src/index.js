import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux'
import store from './store'
// import 'antd/dist/antd.css'

import {positions,transitions,Provider as AlertProvider} from "react-alert"
import AlertTemplate from "react-alert-template-basic"

import { BrowserRouter } from 'react-router-dom';


const options ={
  timeout:8000,
  position:positions.BOTTOM_CENTER,
  transition:transitions.SCALE
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <Provider store={store}>
    <AlertProvider template={AlertTemplate}{...options}>
    <BrowserRouter  >  {/* basename="/build" */} 
        <App />
      </BrowserRouter>
    </AlertProvider>
  </Provider>
  
);


