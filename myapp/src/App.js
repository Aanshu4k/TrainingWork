import React from "react";
import Grid from "./TestComponent/Grid";
import './App.css';
import FormComponent from "./PersonTest/FormComponent";
import ConvertHTML from "./HtmlToImage/ConvertHTML";
const App = () => {
  return (
    <div className="App">
      <div className="App-header">
      {/* <FormComponent /> */}
      <ConvertHTML/>
      </div>
    </div>
  );
};

export default App;
