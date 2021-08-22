import React from "react";
import Banca from "./Banca";
import Orgao from "./Orgao";
import Questoes from "./Questoes";
import "../App.css";
import Assuntos from "./Assuntos";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Programa de Estudos</h1>
        <Banca />
        <Orgao />
        <Assuntos />
        <Questoes />
      </div>
    );
  }
}

export default App;
