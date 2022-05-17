import './App.css';
import Navbar from './components/Navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  let title = 'titulo';
  return(
<div>
  {/* navbar es verde xq es un componente */}
  <Navbar/>
  <h1>{title}</h1>
  <ItemListContainer ejemplo={"ejemplo de props"}/>
</div>
);
}

export default App;
