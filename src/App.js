import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {AuthContext} from './context/auth';
import './App.css';
import Navbar from './components/Navbar';
import Index from './pages/Index';
import jwt_decode from "jwt-decode";
import Profile from './pages/Profile';
import Rota from "./components/Rota";
import Manager from './pages/Manager';
import Pool from './pages/Pool';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './PrivateRoute';

function App() {

  const tokenStored = localStorage.getItem("token");

   const [authTokens, setAuthTokens] = useState(tokenStored);
   const setTokens = (data) =>{
     localStorage.setItem("token", data);
     setAuthTokens(data);
   }
   const boss = () => {
    if (tokenStored){

        const userLogged = jwt_decode(tokenStored);
        const boss = userLogged.roles.find(rol => rol == "ROLE_MANAGER");
      
        if (boss) return true;
}}
const logged = () => {
    if (tokenStored){

        const userLogged = jwt_decode(tokenStored);
        const user = userLogged.roles.find(rol => rol == "ROLE_USER");
        if (user) return true;
}}


const logout = ()=> {
    localStorage.removeItem("token");
    setAuthTokens("");
}

     return (
      <>
    <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
    <BrowserRouter>
        {(logged())? <Navbar boss={boss} logged={logged} logout={logout}/> : ""}
      <div className = "min-view">

        <Route exact path="/" component={Index} />
        <Route  path="/Pool" component={Pool} />
        <Route  path="/profile" component={Profile} />
        <Route  path="/profile/rota" component={Rota} />
        <PrivateRoute  path="/manager" component={Manager} /> 
        <Route  path="/login" component={LoginPage} />
   
       
      </div>
    </BrowserRouter>
     </AuthContext.Provider>

      </>
    );
  }

export default App;
