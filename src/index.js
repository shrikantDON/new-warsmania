import React from 'react';
import ReactDOM from 'react-dom';
import Editor from "../src/editor/Editor.js";

import Drawer from './models/drawer/Drawer.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import contentShow from './showCardContnent.js';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(


   <>
  
     


   <BrowserRouter>
        <Route exact path='/'  component={Drawer} />
        <Route exact path="/fgreejjrgrgfrmberdm" component={contentShow}/>
        <Route exact path="/createwar" component={Editor}/>
        
      </BrowserRouter>

   </>

 ,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

