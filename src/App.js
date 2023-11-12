import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import LafGame from './Game';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/another-page" element={<LafGame />} />
    </Routes>
  );
}

export default App;


