import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    fetch('http://127.0.0.1:8000//api')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Erro ao obter a mensagem:', error));
  }, []);
  
  return (
    <div>
      <h1>Mensagem do servidor:</h1>
      <p>{message || 'Carregando...'}</p>
    </div>
  );
}

export default App;