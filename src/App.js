import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import PageNotFound from './pages/PageNotFound';
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import Home from './pages/Home';
import Cart from './components/Cart/Cart';
//se importa CartProvider solo aca para wrappear toda la app
import { CartProvider } from './Context/CartContext';
import ThemeProvider from './Context/ThemeContext';
import CategoriesContainer from './components/CategoriesContainer/CategoriesContainer';

function App(){

return(
<div id='app'>
  <ThemeProvider>
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='/contact' element={<Contact title={'Contacto'}/>}/>
          <Route path='*' element={<PageNotFound title={'Error 404 - Page not found'}/>}/>
          <Route path='/about-us' element={<AboutUs title={'Sobre nosotros'}/>}/>
          <Route path='/category/:categoryId' element={<CategoriesContainer/>}/>
          <Route path='/cart' element={<Cart title={'Tu carrito'}/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </ThemeProvider>
</div>
);
}

export default App;