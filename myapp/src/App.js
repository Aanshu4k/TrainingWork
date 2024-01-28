import React from "react";
<<<<<<< HEAD
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
=======
import Grid from "./TestComponent/Grid";
import './App.css';
import FormComponent from "./PersonTest/FormComponent";
const App = () => {
  return (
    <div className="App">
      <div className="App-header">
      <FormComponent />
      </div>
    </div>
>>>>>>> 4a05d76eab960e83c20b41447ea4d98db3ab0194
  );
}

export default App;
