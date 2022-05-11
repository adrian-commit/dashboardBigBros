
import './App.css';
import {Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';

function App() {
  return (
    <>
    <nav>
      <Link to="/products">Products</Link>
      <Link to="/users">Users</Link>
    </nav>
    <main> <h1> Dashboard Big Bros</h1></main>
    <Routes>
    <Route path="/products" element={<Home />} />
    <Route path="/users" element={<User />} />
    </Routes>
    </>
  );
}
  

export default App;
