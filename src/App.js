import logo from './logo.svg';
//import './App.css';
import TodoFeature from './Features/Todo';
import AlbumFeature from './Features/Album';
import Counter from './components/Counter';

function App() {

  return (
    <div className="App">
      {/* <TodoFeature /> */}
      <AlbumFeature />
      <Counter />
    </div>
  );
}

export default App;
