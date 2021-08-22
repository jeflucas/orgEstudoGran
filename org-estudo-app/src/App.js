
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Programa de Estudos</h1>
      <p>Selecione o órgão e a banca:</p>
      <div>
        <h2>Banca:</h2>
        <p>Dropdown com as bancas</p>
      </div>
      <div>
        <h2>Órgão:</h2>
        <p>Dropdown com os órgãos</p>
      </div>
      <div>
        <h2>Questões</h2>
        <ol>
          <li>
            <h3>ID questão</h3>
            <p>Texto questão</p>
          </li>
          <li>
            <h3>ID questão</h3>
            <p>Texto questão</p>
          </li>
          <li>
            <h3>ID questão</h3>
            <p>Texto questão</p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
