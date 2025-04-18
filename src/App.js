import './App.css';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'

function App() {

  const nome = "Camile"

  return (
    <div className="App">
      <Frase />
      <SayMyName nome="Gabriel" />
      <SayMyName nome="Geraldo" />
      <SayMyName nome={nome} />
      <Pessoa 
        nome="Gabriel Vieira" 
        idade="23" 
        profissao="Programador" 
        foto="https://img.freepik.com/vetores-gratis/empresario-andando-com-confianca-segurando-o-icone-da-maleta-isolado_24911-109659.jpg" 
      />
      <List />
    </div>
  );

}

export default App;
