import logo from './logo.svg';
import './App.css';
import Box from './components/box/Box';
import MultipleBox from './pages/question1/MultipleBox';

function App() {
  return (
    <div className="App">
      <h1>The Box Game</h1>
      <MultipleBox />
    </div>
  );
}

export default App;
