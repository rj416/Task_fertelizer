import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import FertilizerOverview from './components/FertilizerOverview'; // Import the FertilizerOverview component

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Topbar />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-4 overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/overview" element={<FertilizerOverview />} /> {/* Add route for FertilizerOverview */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
