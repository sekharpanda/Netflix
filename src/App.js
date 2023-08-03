import React, { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


import './App.css';
import HomeScreen from './screens/HomeScreen';
import Banner from './Banner';
import Loginscreen from './LoginScreen';
import { auth } from './firebase';


function App() {

  const user=null;

  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
  if( userAuth){
    console.log(userAuth);
  }else{
    //LoggedOut
  }
});
return unsubscribe;
  },[]);
  return (
    <div className="App">


    <Router>
      {!user ?(<Loginscreen/>):(
           <Routes>
           <Route path="/" element={<HomeScreen/>}></Route>
           <Route path="/test" element={<h1>I am Test</h1>}></Route>

           </Routes>
         
        
         )}
   
    </Router>
  

    </div>
  );
}

export default App;
