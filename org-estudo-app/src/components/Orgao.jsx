import React from "react";

class Orgao extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getOrgao(arr, comp) {
    const banca = arr
      .map((e) => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter((e) => arr[e])
      .map((e) => arr[e]);
    return banca;
  }

  render() {
    const orgaos = require("./bdGran.json");
    const orgaoFiltro = this.getOrgao(orgaos, "orgao");

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h2>Selecione o Órgão:</h2>
          <select>
            {orgaoFiltro.map((orgao) => (
              <option key={orgao.orgao} value={orgao.orgao}>
                {orgao.orgao}
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

export default Orgao;
