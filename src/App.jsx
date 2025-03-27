import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Bio from "./pages/Bio";
import Media from "./pages/Media";
import Header from "./components/Header";
import Footer from "./components/Footer"; 
import './styles/App.css';


const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-black text-white">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/biography" element={<Bio />} />
            <Route path="/media" element={<Media />} />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
};

export default App;

