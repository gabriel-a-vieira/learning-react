import './App.css';
import AnotherList from './components/AnotherList';

function App() {

  const mineItems = ['React', 'Vue', 'Angular'];

  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <AnotherList items={mineItems}/>
      <AnotherList items={[]}/>
    </div>
  );

}

export default App;
