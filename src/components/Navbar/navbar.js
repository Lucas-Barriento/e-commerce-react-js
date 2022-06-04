import './navbar.css'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { Menu,MenuItem } from '@mui/material';
import { categories } from '../../utils/products';

const Navbar = () =>{
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
                <Link to='/' >
                <Button variant="contained">Inicio</Button>
                </Link>
                </li>
                <li>
                <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                >
                  categorias
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                  'aria-labelledby': 'basic-button',
                  }}
                >
                  {categories.map((cat)=>{
                      return <MenuItem id="menuItem" key={cat}><Link to={`/category/${cat}`}><Button >{cat}</Button></Link></MenuItem>
                      })}
                </Menu>                
                </li>
                <li>
                <Link to='/about-us'>
                <Button variant="contained">Nosotros</Button>
                </Link>
                </li>
                <li>
                <Link to='/contact'>
                <Button variant="contained">Contacto</Button>
                </Link>
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