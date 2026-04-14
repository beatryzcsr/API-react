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


export default App;