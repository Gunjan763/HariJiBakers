import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import First from "./Home/first.jsx";
import Second from "./Services/second.jsx";
import Third from "./about/third.jsx";
import Fourth from "./contact/fourth.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/home" element={<First />} />
        <Route path="/services"element={<Second />} />
        <Route path="/about" element={<Third />} />
        <Route path="/contact" element={<Fourth />} />
      </Routes>
    </Router>
  );
}

export default App;
