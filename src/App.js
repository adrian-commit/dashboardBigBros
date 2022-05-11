
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';

function App() {
  return (
    <>
    <Routes>
    <Route path="/products" element={<Home />} />
    <Route path="/users" element={<User />} />
    </Routes>
    </>
  );
}
  

export default App;
