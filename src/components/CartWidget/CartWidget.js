/* icono de carrito */
import './CartWidget.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';

const CartWidget = () =>{
    return(
        <Button variant="contained" className='btnCart'>
        <svg data-testid="ShoppingCartIcon"><ShoppingCartIcon/></svg>
        </Button>
    )
}

export default CartWidget