import Categories from './components/Categories';
import NewsList from './components/NewsList';
import { useState, useCallback } from 'react';
import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import NewsPage from './pages/NewsPage';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="/:category" element={<NewsPage />} />
      </Routes>
    </>
  );
};

export default App;
