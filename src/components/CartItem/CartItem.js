import './CartItem.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CartContext from '../../Context/CartContext'
import {useContext} from "react"
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({product}) =>{    
    const{id,name,image1,price,cartQuantity} = product;
    const {removeItem} = useContext(CartContext)

        return (
            <Card sx={{ minWidth: 100 }} id="cartCard" >
                <CardContent id="cartCardContent" >
                    <div id="imgCartItemContainer" > 
                        <img src={image1} alt={id}></img>
                    </div>
                    <div id='dataCartItem'>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="h5" component="div">
                        ${Intl.NumberFormat().format(price)},00
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        C: {cartQuantity}
                    </Typography>
                    </div>
                </CardContent>
                <CardActions>
                    <div id='deleteBtn'>
                    <DeleteIcon size="small" onClick={()=>removeItem(id)}>delete</DeleteIcon>
                    </div>
                </CardActions>
            </Card>
        );  
}
export default CartItem