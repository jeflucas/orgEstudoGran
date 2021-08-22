import React from "react";

class Banca extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          <select>
            {bancaFiltro.map((banca) => (
              <option key={banca.banca} value={banca.banca}>
                {banca.banca}
              </option>
            ))}
            onChange={this.handleChange}
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
