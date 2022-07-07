  import './Navbar.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { Box, Container, IconButton, Menu,MenuItem} from '@mui/material';
import { categories } from '../../utils/products';
import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';
import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';

const Navbar = () => {
  const {darkMode,handleTheme} = useContext(ThemeContext)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" id={`navbar${darkMode ? 'DarkMode' : '' }`}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div className="logo">
            <Link to="/">
              <img src="/logo192.png" alt="logoImg" className={`logoImg${darkMode ? 'DarkMode': ''}`} ></img>
            </Link>
          </div>
          <h1 style={{margin:'0'}}>Helmet Shop</h1>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} id={`boxMenu${darkMode? 'DarkMode':''}`} >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              className="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
                  <li>
                  <Link to="/">
                    <Button variant="contained">Inicio</Button>
                  </Link>
                </li>

                <li >
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    categorias
                  </Button>
                  <Menu
                    id="basic-menuDark"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    {categories.map((cat) => {
                      return (
                        <MenuItem id="menuItem" key={cat}>
                          <Link to={`/category/${cat}`}>
                            <Button>{cat}</Button>
                          </Link>
                        </MenuItem>
                      );
                    })}
                  </Menu>
                </li>

                <li>
                  <Link to="/about-us">
                    <Button variant="contained">Nosotros</Button>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <Button variant="contained">Contacto</Button>
                  </Link>
                </li>
                    
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            
              <li>
                <Link to="/">
                  <Button variant="contained">Inicio</Button>
                </Link>
              </li>

              <li>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
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
                    "aria-labelledby": "basic-button",
                  }}
                >
                  {categories.map((cat) => {
                    return (
                      <MenuItem id="menuItem" key={cat}>
                        <Link to={`/category/${cat}`}>
                          <Button>{cat}</Button>
                        </Link>
                      </MenuItem>
                    );
                  })}
                </Menu>
              </li>

              <li>
                <Link to="/about-us">
                  <Button variant="contained">Nosotros</Button>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <Button variant="contained">Contacto</Button>
                </Link>
              </li>
            
          </Box>
          <div id={`switch${darkMode ? 'DarkMode' : '' }`}>
            <Switch onChange={handleTheme} />
          </div>
          <div className="cart">
            <CartWidget/>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}; 
export default Navbar; 

