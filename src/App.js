import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
    </div>
  );
}

export default App;
