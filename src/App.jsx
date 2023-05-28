import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home';
import Profile from './page/Profile/Profile';
import Add from './page/Add/Add';
import People from './page/People/People';
import Message from './page/Message/Message';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/add" element={<Add />} />
      <Route path="/people" element={<People />} />
      <Route path="/message" element={<Message />} />
    </Routes>
  </BrowserRouter>
);

export default App;
