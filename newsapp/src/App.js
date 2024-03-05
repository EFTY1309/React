
 import './App.css';


import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
 
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

const App = ()=>  {
  const pageSize=100;
  const [progress, setProgress] = useState(0)
  
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Routes>
          <Route path="/" element={< News setProgress={setProgress}  key='general' pageSize={pageSize} country="in" category="General"/>}></Route>
          <Route path="/Business" element={ <News setProgress={setProgress}  key='business'  pageSize={pageSize} country="in" category="Business"/>}></Route>
          <Route path="/Entertainment" element={<News setProgress={setProgress} key='entertainment'  pageSize={pageSize} country="in" category="Entertainment"/>}></Route>
          <Route path="/General" element={ <News setProgress={setProgress} key='general'  pageSize={pageSize} country="in" category="General"/>}></Route>
          <Route path="/Health" element={ <News setProgress={setProgress} key='health'  pageSize={pageSize} country="in" category="Health"/>}></Route>
          <Route path="/Science" element={ <News setProgress={setProgress} key='science'  pageSize={pageSize} country="in" category="Science"/>}></Route>
          <Route path="/Sports" element={ <News setProgress={setProgress} key='sports'  pageSize={pageSize} country="in" category="Sports"/>}></Route>
          <Route path="/Technology" element={ <News setProgress={setProgress}  key='technology}>' pageSize={pageSize} country="in" category="Technology"/>}></Route>

        </Routes>
        </Router>
      </div>
    )
  
}


export default App;

  