import './App.css';
import Navbar from './components/Navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import articulos from './utils/products';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import PageNotFound from './pages/PageNotFound';
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'

function App() {
/* falta usar use params */
  let title = 'Venta de cascos';

return(
<div id='app'>
  <BrowserRouter>
    <Navbar/>
    <h1>{title}</h1>
    <Routes>
      <Route path='/' element={<ItemListContainer productos={articulos}/>}/>
      <Route path='/category/:id' element={<ItemListContainer productos={articulos}/>} />
      <Route path='/item/:id' element={<ItemDetailContainer/>} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  </BrowserRouter>
</div>
);
}

export default App;