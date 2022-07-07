import React from 'react'
import { Card,CardContent } from "@mui/material"
import { useState, useContext } from 'react'
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext'
import { ThemeContext } from '../../Context/ThemeContext'

const ItemDetail = ({product}) =>{
    const {darkMode} = useContext(ThemeContext)
    // eslint-disable-next-line no-unused-vars
    const {id,name,image1,stock,price} = product;
    const [showOnAdd, setShowOnAdd] = useState(true);
    const {addItem} = useContext(CartContext)
    const onAdd = (count) => {
        setShowOnAdd(false);
        addItem(product,count)
        alert(name+ " x "+count +" un. agregado al carrito")  
    }

    return(
        <Card id={`cardItem${darkMode?'DarkMode':''}`}>
            <CardContent id='cardItemDetail'>
                <div id="imgItemDetail" > 
                    <img src={image1} alt={id}></img>
                </div>
                <div id="dataItemDetail">
                    <h2>{name}</h2>
                    <p>${Intl.NumberFormat().format(price)},00</p>
                    <p> o 6 cuotas sin interes de ${(price / 6).toFixed(2)}</p>
                    {showOnAdd ?
                    <ItemCount product={product} onAdd={onAdd} />
                    :
                    <Link to={'/cart'}>Terminar compra</Link>
                    }                   
                </div>
            </CardContent>
        </Card>
    )
}
export default ItemDetail