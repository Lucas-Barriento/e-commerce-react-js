import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import './Item.css'
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
/* En Item se renderiza el card de cada producto, y la funcion onAdd */
const Item = ({id,name,stock,category,image1,price}) =>{

    const onAdd = (count) => {
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
                <ItemCount stock={stock} onAdd={onAdd} />
            </CardContent>
        </Card>
    )
}

export default Item;