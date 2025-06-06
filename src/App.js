import './App.css';
import { useState } from 'react';
import YourName from './components/YourName';
import Greeting from './components/Greeting';

function App() {

const [name, setName] = useState();

  return (
    <div className="App">
      <h1>State Lift</h1>
      <YourName setName={setName}/>
      <Greeting name={name}/>
    </div>
  );

}

export default App;
