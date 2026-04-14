import { useState } from "react";
import "../src/App.css";

function App() {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  const buscarDados = async () => {
    setLoading(true);
    setErro(null);

    try {

      const response = await fetch(
        "https://swapi.dev/api/people/4/",
      );
      const resultado = await response.json();
      setDados(resultado);
    } catch (error) { 
      setErro(error.message)
    }finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="container">
      <h1>Titulo</h1>

<div className="info">
        <strong>Cliente Servidor:</strong> O cliente (usuário) solicita algo e o servidor (máquina) processa e fornece a resposta
      </div>


      <button onClick={buscarDados} disabled={loading}>
        {loading ? 'Carregando...' : 'Buscar Dados da API'}
      </button>

      <div className="resultado">
        {loading && <em>Carregando informações...</em>}

        {erro && (
          <>
          <h3>❌ Erro:</h3>
          <p>{erro}</p>
          </>
        )}

        {dados && !loading && (
          <>
          <h3>Dados Recebidos:</h3>
          <p><strong>Nome:</strong> {dados.name}</p>
          <p><strong>Data de Nascimento:</strong> {dados.birth_year}</p>
          <p><strong>Altura:</strong> {dados.height}</p>
          <p><strong>Cor:</strong> {dados.skin_color}</p>
          </>
        )}

        {!dados && !loading && !erro && (
          <em>Clique no botão para fazer uma requisição...</em>
        )}
      </div>
    </div>
  )
}

export default App;
