import React from "react";
import Banca from "./Banca";
import Orgao from "./Orgao";
import Questoes from "./Questoes";
import "../App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <h1>Programa de Estudos</h1>
        <Banca />
        <Orgao />
        <Questoes />
      </div>
    );
  }
}

export default App;
