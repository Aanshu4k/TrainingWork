import React from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SearchPhoto from "./Comp_ImageSearch/SearchPhoto";

function App() {

  return (
    <PhotoContextProvider>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<SearchPhoto />} />
          </Routes>
        </div>
      </Router>
    </PhotoContextProvider>
  )
}
export default App;
