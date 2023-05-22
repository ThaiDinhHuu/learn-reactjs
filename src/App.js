import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Huu';
  const age = 21;
  const isMale = true;
  const student = {
    name: 'easy frontend'
  };
  const list = ['red', 'blue', 'green']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          thai dinh huu
        </p>
        <p>xin chao {name} - {age} - {isMale ? 'Male' : 'Female'}</p>
        {isMale ? <p>Male</p> : <p>Female</p>}

        {isMale && <p>Male</p>}
        {!isMale && <p>Female</p>}

        {isMale && (
          <>
            <p>Male</p>
            <p>Male</p>
            <p>Male</p>
          </>
        )}
        <p>{student.name}</p>

        <ul>{list.map(color => (
          <li style={{ color }}>{color}</li>
        ))}</ul>
      </header>
    </div>
  );
}

export default App;
