// import logo from './logo.svg';
import './App.css';
import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes,} from 'react-router-dom'
import Home from './pages/Home/Home';
import Biography from './pages/Biography/Biography';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/Biography" element={<Biography/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
