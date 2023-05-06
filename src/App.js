import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useState,useEffect } from "react";
import { auth } from "./Firebase";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Account from "./Components/Account/Account";
import './App.css';
import OcplPage from "./Components/OcplPage/OcplPage";


function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName.toUpperCase());
      } else setUserName("");
    });
  }, []);
  return (
    <div className="App">
    
    
      <Router>
        <Routes>
          <Route path='/' element={<OcplPage/>}/>
          <Route path='/register' element={<Register/>}/>
          {/* <Route path='91.203.132.6/register' element={<Register/>}/>  */}
          <Route path='/login' element={<Login/>}/>
          <Route path='/account' element={<Account name={userName}/>}/>
        </Routes>
      
      </Router> 

      {/* <OcplPage/> */}



    </div>
  );
}

export default App;
