import { FiSearch } from "react-icons/fi";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite o seu CEP..."/>

        <button className="buttonSearch">
          <FiSearch size={25} color= "#fff" />
          </button>
      </div>

      <main className="main">
        <h2>CEP: 0000000</h2>

        <span>Rua teste</span>
        <span>Complemento</span>
        <span>Ipiranga</span>
        <span>São Paulo- SP</span>

      </main>

    </div>
  );
}

export default App;
