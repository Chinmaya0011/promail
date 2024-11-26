import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HistorPage from '../pages/HistorPage';
import HomePage from '../pages/HomePage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
