import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState("");

  return (
    <div className="App">
      <p>First react app</p>
      <p>This project made for to learn testing in a react application</p>
      <img src={logo} alt="React logo" title="React logo image" />
       <input type="text" placeholder="This is demo input box" id="demoInput" value={data} onChange={(e) => setData(e.target.value + "test")} />
    </div>
  );
}

export default App;
