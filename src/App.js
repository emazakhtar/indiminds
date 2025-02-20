import React from "react";

import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import { Home } from "./features/Home/Home";
import { Details } from "./features/details/Detail";
import { Summary } from "./features/summary/Summary";
import { Bar } from "./features/bar/Bar";
import { Chart } from "./features/chart/Chart";
import { Header } from "./features/header/Header";

function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/chart" element={<Chart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
