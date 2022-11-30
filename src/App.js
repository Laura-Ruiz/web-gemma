// import logo from './logo.svg';
import './App.css';
import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes,} from 'react-router-dom'
import Home from './pages/Home/Home';
import Biography from './pages/Biography/Biography';
import Publications from './pages/Publications/Publications';
import Gallery from './pages/Gallery/Gallery';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/Biography" element={<Biography/>} />
      <Route exact path="/Publications" element={<Publications/>} />
      <Route exact path="/Gallery" element={<Gallery/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
