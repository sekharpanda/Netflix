import React from 'react';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


import './App.css';
import HomeScreen from './screens/HomeScreen';
import Banner from './Banner';
import Loginscreen from './LoginScreen';


function App() {

  const user=null;
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
