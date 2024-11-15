import React from 'react';
import {Routes , Route} from 'react-router-dom'
import Main from './pages/main';
import Header from './pages/Header';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />}/>
    </Routes>
   
  );
}

export default App;
