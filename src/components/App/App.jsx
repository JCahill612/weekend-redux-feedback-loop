import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header'; 
import Feels from '../Feels/Feels';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import Submit from '../Submit/Submit';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Feels />} />
          <Route path="/understanding" element={<Understanding />} />
          <Route path="/support" element={<Support />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/reviewfeedback" element={<ReviewFeedback />} />
          <Route path="/submit" element={<Submit />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
