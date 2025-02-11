import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      return (
      <Router>
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
      </Router>
      );
    </div>
  );
}

export default App;
