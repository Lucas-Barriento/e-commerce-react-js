import './App.css';
import Navbar from './components/Navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import articulos from './utils/products';

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {

  let title = 'Venta de cascos';

  return(
<div>
  <Navbar/>
  <h1>{title}</h1>
  <ItemListContainer productos={articulos}/>
  
  <ItemDetailContainer />
</div>
);
}

export default App;
