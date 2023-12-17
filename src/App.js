import './App.css';
import { Routes, Route } from 'react-router';
import { Register } from './pages/Register';
import { Home } from './pages/Home/home';

function App() {
  return (
<>
<Routes>
  <Route path='home' element={<Home/>}/>
  <Route  path='register' element={<Register/>}/>
</Routes>
</>
  );
}

export default App;
