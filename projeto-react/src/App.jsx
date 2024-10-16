

function App() {
const nome = "Rodrigo"

  function retornaNome (){
    return nome
  };

  const pessoa = {
    nome: "Maria"
  };

  let estaDeDia = true;

  return (
    <div>
      <h1>Olá, {pessoa.nome}</h1>
    <h2> Subtitulo </h2>
    {estaDeDia ? 'bom dia' : ' Boa Tarde'}
    </div>
    
  )

}

export default App
