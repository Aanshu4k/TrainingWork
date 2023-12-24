import React from "react";
import "./App.css";
import SearchPhoto from "./Comp_ImageSearch/SearchPhoto";
const App = () => {
  return (
    <div className="App">
      <div className="container"></div>
      <div className="title">React Photo Search App</div>
      <SearchPhoto/>
    </div>
  );
};

export default App;
