import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Budget from './pages/Budget/Budget.jsx'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Budget />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
