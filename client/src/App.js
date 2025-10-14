import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import './App.css';

//so we're using react router to setup multiple homepages
//right now login is the only page
function App() {
  return (
    <Router>
      <Routes>
        {/* current homepage */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
