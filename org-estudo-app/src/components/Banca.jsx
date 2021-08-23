import React from "react";

class Banca extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    var bancaEscolhida = this.state.value;
    event.preventDefault();
    return bancaEscolhida;
  }

  getBanca(arr, comp) {
    const banca = arr
      .map((e) => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter((e) => arr[e])
      .map((e) => arr[e]);
    return banca;
  }

  render() {
    const bancas = require("./bdGran.json");
    const bancaFiltro = this.getBanca(bancas, "banca");

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h2>Selecione a Banca:</h2>
          <select value={this.state.value} onChange={this.handleChange}>
            {bancaFiltro.map((banca) => (
              <option key={banca.banca} value={banca.banca}>
                {banca.banca}
              </option>
            ))}
          </select>
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Banca;
