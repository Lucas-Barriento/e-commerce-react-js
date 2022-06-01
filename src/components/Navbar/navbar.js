import './navbar.css'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import SplitButton from '../SplitButton/SplitButton';
import { Link } from 'react-router-dom';

const Navbar = () =>{
return(
      <AppBar id='navbar' position="static">
        <Toolbar variant="dense">
          <div className='logo'>
          <Link to='/' >
            <img src='/logo192.png' alt='logoImg' className='logoImg'></img>
          </Link>
          </div>
            <ul>
                <li>
                <Button variant="contained"><Link to='/' >Inicio</Link> </Button>
                </li>
                <li>
                <SplitButton variant="contained"><Link to='/products/:categories' >Productos</Link></SplitButton>
                </li>
                <li>
                <Button variant="contained"><Link to='/about-us' >Nosotros</Link></Button>
                </li>
                <li>
                <Button variant="contained"><Link to='/contact' >Contacto</Link></Button>
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