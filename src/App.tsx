import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./Header";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header companyName="Databaze" />
      </header>
    </div>
  );
};

export default App;
