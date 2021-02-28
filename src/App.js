
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import ChatWindow from './components/ChatWindow';


function App() {
 




  return (
    <>
    <Navbar />
     <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
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
