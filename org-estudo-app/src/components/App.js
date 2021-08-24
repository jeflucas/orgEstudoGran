import React from "react";
import Banca from "./Banca";
import Orgao from "./Orgao";
import "../App.css";
import Assuntos from "./Assuntos";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Programa de Estudos</h1>
        <Banca banca="" />
        <Orgao orgao="" />
        <Assuntos />
      </div>
    );
  }
}

export default App;
