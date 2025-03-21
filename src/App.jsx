import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Bio from "./pages/Bio";
import Media from "./pages/Media";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
	<Route path="/bio" element={<Bio />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </Router>
  );
};

export default App;

