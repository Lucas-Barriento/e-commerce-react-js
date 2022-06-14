import './Item.css'
import { Card,CardContent,Button } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../Context/CartContext';

/* En Item se renderiza el card de cada producto, y la funcion onAdd */
const Item = ({product}) =>{
    const{id,name,image1,price} = product;
    const { addItem } = useContext(CartContext)
    const onAdd = (count) => {
        addItem(product,count)
        alert(name+ " x "+count +" un. agregado al carrito")  
    }

    return(
        <Card id="cardItem">
            <CardContent id="cardContainer">
                <div id="imgItemContainer" > 
                <img src={image1} alt={id}></img>
                </div>
                <Link to={`/item/${id}`}>
                    <Button variant={'contained'} className="btnDetail">
                        Detalle
                    </Button>
                </Link>
                <h3>{name}</h3>
                <p>${Intl.NumberFormat().format(price)},00</p>
                <ItemCount product={product} onAdd={onAdd} />
            </CardContent>
        </Card>
    )
}

export default Item;