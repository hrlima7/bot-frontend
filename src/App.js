
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Login from  "./public/login/Login";
import Settings from './private/Settings/Settings';
import { PrivateRoute } from './privateRoute';
import Report from './private/Settings/report.js';

function App(){

   

   
    return (
      
      
       <Routes>
            <Route path="/" exact element={<Login />} />
                 
             <Route path="/settings" exact  element={
                <PrivateRoute>
                    <Settings />
                </PrivateRoute>
             } />
             <Route path="/Report" element={
                <PrivateRoute>
                    <Report />
                </PrivateRoute>
             } />
              
          
              
            

        </Routes>
       
      
    
     )



}


export default App;