import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Characters from './pages/Characters/Characters';
import Location from './pages/Location/Location';
import Menu from './components/Menu/Menu';
import './App.css';


function App() {
  return (
    <div className="App">
      <Menu/>  
      <Routes>
        <Route path="/" element={<Characters/>}/>
        <Route path="/locations" element={<Location/>}/>
      </Routes>
     
     </div>

  );
}

export default App;

