// import React from 'react';
import Main from './Components/Main/Main';
// import Service from './Components/Service/Service';
// import Team from './Components/Team/Team';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import './style.css';


function App() {
  return (

    // <Router>
    //   <Routes>
    //   <Route exact path='/' element={<Main />} />
    //   <Route exact path='/service' element={<Service />} />
    //   <Route exact path='/team' element={<Team />} />




    //   </Routes>
    // </Router>
    <>  
      <Header />
      <Main />
    </>
  );
}

export default App;
