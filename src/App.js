import './App.css';
import { Routes, Route } from 'react-router';
import { Register } from './pages/Register';
import { Home } from './pages/Home/home';
import { Login } from './pages/Login';

function App() {
  return (
<>
<Routes>
  <Route path='home' element={<Home/>}/>
  <Route  path='register' element={<Register/>}/>
  <Route path='login' element={<Login/>}/>
</Routes>
</>
  );
}

export default App;
