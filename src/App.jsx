import logo from './logo.svg';
import Index from './pages';
import Perfil from './pages/perfil';
import Contacto from './pages/contacto';
import './styles/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import (BrowserRouter)

function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route  path='/' element= {<Index/>}/>
        <Route  path='/perfil' element= {<Perfil/>}/>
        <Route  path='/contacto' element= {<Contacto/>}/>
      </Routes>
      </BrowserRouter>
      
       
  );
}

export default App;
