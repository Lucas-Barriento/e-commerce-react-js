import './App.css';
import Navbar from './components/Navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  let title = 'Venta de cascos';
  const articulos =[{
    id: 1,
    nombre: 'Casco Rebatible LS2 FF399 Valiant Prox Doble Visor Con Pinlock',
    precio: 119590,
    stock: 5,
    tipo: 'rebatible',
    imagen1: './img/Casco Rebatible LS2 FF399 Valiant Prox Doble Visor Con Pinlock.png', 
  },
  {
    id: 2,
    nombre: 'Casco Rebatible LS2 FF900 Valiant II Doble Visor', 
    precio: 129690,
    stock: 5,
    tipo: 'rebatible',
    imagen1: './img/Casco Rebatible LS2 FF900 Valiant II Doble Visor.png' 
  }]
  return(
<div>
  <Navbar/>
  <h1>{title}</h1>
  <ItemListContainer productos={articulos}/>
</div>
);
}

export default App;
