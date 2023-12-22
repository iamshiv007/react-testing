import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>First react app</p>
      <p>This project made for to learn testing in a react application</p>
      <img src={logo} alt="React logo" title="React logo image" />
       <input type="text" placeholder="This is demo input box" id="demoInput" />
    </div>
  );
}

export default App;
