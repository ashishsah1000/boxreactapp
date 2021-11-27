import logo from './logo.svg';
import './App.css';
import MultipleBox from './pages/question1/MultipleBox';
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from "react-router-dom";
import News from './pages/question2/News';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      
      <Routes>
                    <Route path="/box" element={<MultipleBox />} />
                    <Route path="/news" element={<News />} />
                  </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
