import './App.css';
import HelloWorld from './components/HelloWorld'


function App() {
  const name = 'Gabriel';

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>Olá, {name}</p>
      <HelloWorld />
    </div>
  );
}

export default App;
