import './App.css';
import NavBar from './components/Navbar/NavBar';
import Header from './components/Header/Header';
import Inicio from '../src/components/views/Inicio/Inicio'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Contacto from './components/views/Contacto/Contacto';
import Productos from './components/views/Productos/Productos';
import ItemDetailContainer from '../src/components/ItemDetailPadreContain/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';



function App() {
  return ( 
    <>
      
      <BrowserRouter>
        
        <NavBar/>
        <Header greetings='Bienvenido a MyCommerce'/>
        <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/Contacto' element={<Contacto/>}/>
        <Route path='/Productos' element={<Productos/>}/>
        <Route path='/Categorias/:catId' element={<Productos/>}/>
        <Route path='/Detail/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
        
        

      </BrowserRouter>
    </>
  );
}

export default App;
