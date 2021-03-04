import React, { useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import ChatWindow from './components/ChatWindow';


function App() {
 
const [token, setToken] = useState();

if (!token){
  return <LoginPage setToken={setToken}/>
}

  return (
    <>
  <Navbar/>
     <div className="wrapper">
      <BrowserRouter>
        <Switch>
          {/* <Route path="/login">
            <LoginPage />
          </Route> */}
          <Route path="/Chat">
            <ChatWindow />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
   
  
    </>
  );
}

export default App;
