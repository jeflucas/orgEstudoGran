import React from "react";

class Assuntos extends React.Component {
  getAssuntos(arr, comp) {
    const assunto = arr
      .map((e) => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter((e) => arr[e])
      .map((e) => arr[e]);
    return assunto;
  }

  render() {
    const data = require("./bdGran.json");
    const assuntos = this.getAssuntos(data, "assunto");
    console.log(assuntos);

    

    return (
      <div>
        <h2>Assuntos disponíveis:</h2>

        <ul>
          {assuntos.map((assunto) => (
            <li>
              <h3>{assunto.assunto}</h3>
              <p>{assunto.assunto.length}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Assuntos;
