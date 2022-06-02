import './App.css';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import PageNotFound from './pages/PageNotFound';
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import Home from './pages/Home';
import Categories from './pages/Categories';

function App() {
/* falta usar use params */
  let title = 'Venta de cascos';

return(
<div id='app'>
  <BrowserRouter>
    <Navbar/>
    <h1>{title}</h1>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/category/:categoryId' element={<Categories/>}/>
    </Routes>
  </BrowserRouter>
</div>
);
}

export default App;