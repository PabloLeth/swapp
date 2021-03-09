import React, { useState, useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {GlobalContext} from './context/GlobalContext'
import {AuthContext} from './context/auth'

import './App.css';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import Index from './pages/Index';
import ChatWindow from './components/ChatWindow';
import jwt_decode from "jwt-decode";
function App() {

  const tokenStored =localStorage.getItem("token");
  // const decodedToken = jwt_decode(tokenStored);
  // console.log(decodedToken);
   const [authTokens, setAuthTokens] = useState(tokenStored);
   const setTokens = (data) =>{
     localStorage.setItem("token", data);
     setAuthTokens(data);
   }

 
    return (
      <>
    <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
      <Navbar />
     </AuthContext.Provider>
      </>
    );
  }


//   return (
//     <>
//       <div className="wrapper">
//         <BrowserRouter>
//           <Switch>
//             {/* <Route path="/login">
//             <LoginPage />
//           </Route> */}
//             <Route path="/Chat">
//               <ChatWindow />
//             </Route>
//           </Switch>
//         </BrowserRouter>
//       </div>


//     </>
//   );
// }

export default App;
