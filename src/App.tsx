import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
