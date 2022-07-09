/* icono de carrito */
import './CartWidget.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import { useState,useContext } from "react";
import CartContext from '../../Context/CartContext'
import { Menu } from '@mui/material';
import CartItem from '../CartItem/CartItem';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../Context/ThemeContext';

const CartWidget = () =>{
    const {darkMode} = useContext(ThemeContext)
    const {cartListItems,clear} = useContext(CartContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div className={`${cartListItems.length===0 ? 'emptyCart':''}`} >
            <Button
                variant="contained"
                className='btnCart'
                id={`basic-button${darkMode?'DarkMode':''}`}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <svg data-testid="ShoppingCartIcon" id={`ShoppingCartIcon${darkMode?'DarkMode':''}`}><ShoppingCartIcon/></svg>
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
            {cartListItems.length=== 0 ?
            /* corregir */
                    <div></div>
                    :
                    <div id='cartContainer'>
                    <div id={`clearBtn${darkMode?'DarkMode':''}`}>
                        <Button onClick={()=>clear()}>
                            <ClearIcon/>
                        </Button>
                    </div>
                    <div id='btnCart'>
                        <Link to={'/cart'}><Button variant="contained">Ver detalle</Button></Link>
                    </div>
                {cartListItems.map((item)=>{
                    return(
                        <CartItem key={item.id} product={item}/>
                    )
                })}
                </div>
            }   
                </Menu>            
        </div>
    )
}

export default CartWidget