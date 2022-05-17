import './navbar.css'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
//funcion flecha
const Navbar = () =>{
return(
      <AppBar id='navbar' position="static">
        <Toolbar variant="dense">
          <div className='logo'>
            <img src='logo192.png' alt='logoImg' className='logoImg'></img>
          </div>
            <ul>
                <li>
                <Button variant="contained">Inicio</Button>
                </li>
                <li>
                <Button variant="contained">Productos</Button>
                </li>
                <li>
                <Button variant="contained">Nosotros</Button>
                </li>
                <li>
                <Button variant="contained">Contacto</Button>
                </li>
            </ul>
            <div className='cart'>
              <CartWidget/>
            </div>
        </Toolbar>
      </AppBar>
);
}
export default Navbar;