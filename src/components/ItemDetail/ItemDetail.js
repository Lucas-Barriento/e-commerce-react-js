import React from 'react'
import { Card,CardContent } from "@mui/material"
import { useState } from 'react'
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const ItemDetail = ({product}) =>{
    // eslint-disable-next-line no-unused-vars
    const {id,name,image1,stock,price} = product;
    const [showOnAdd, setShowOnAdd] = useState(true);

    const onAdd = (count) => {
        setShowOnAdd(false);
        alert(name+ " x "+count +" un. agregado al carrito")  
    }

    return(
        <Card id="cardItem">
            <CardContent id="cardItemDetail">
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
                    <Link to={'/cart'}><Button variant="contained">Terminar compra</Button></Link>
                    }                   
                </div>
            </CardContent>
        </Card>
    )
}
export default ItemDetail