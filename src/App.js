import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Login from './login/Login';
import Admin from './login/Admin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
    <Router>
      <Routes >
        <Route path="/login" element={<Login/>} />
        <Route path="" element={<Admin/>} />
        <Route path="/dashboard" element={<Main/>} />

      </Routes>
    </Router>


    </div>
  );
}

export default App;
