import React from 'react';
import Main from './Components/Home/Home';
import Service from './Components/Service/Service';
import Team from './Components/Team/Team';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";


function App() {
  return (

    <Router>
      <Routes>
      <Route exact path='/' element={<Main />} />
      <Route exact path='/service' element={<Service />} />
      <Route exact path='/team' element={<Team />} />




      </Routes>
    </Router>

  );
}

export default App;
