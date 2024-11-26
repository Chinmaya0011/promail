import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HistorPage from '../pages/HistorPage';
import HomePage from '../pages/HomePage';
import PreviewMailPage from '../pages/PreviewMailPage';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistorPage />} />
        <Route path="/preivew" element={<PreviewMailPage />} />

      </Routes>
    </Router>
  );
};

export default AppRoutes;
