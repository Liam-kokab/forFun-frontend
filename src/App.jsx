import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home';
import Profile from './page/Profile/Profile';
import ColorTest from './page/ColorTest/ColorTest';
import People from './page/People/People';
import Message from './page/Message/Message';
import Add from './page/Add/Add';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/add" element={<Add />} />
      <Route path="/people" element={<People />} />
      <Route path="/message" element={<Message />} />
      <Route path="/test" element={<ColorTest />} />
    </Routes>
  </BrowserRouter>
);

export default App;
