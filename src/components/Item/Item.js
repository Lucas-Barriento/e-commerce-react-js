import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import './Item.css'
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
/* En Item se renderiza el card de cada producto, y la funcion onAdd */
const Item = ({id,nombre,stock,categoria,imagen1,precio}) =>{

    const onAdd = (count) => {
        alert(nombre+ " x "+count +" un. agregado al carrito")  
    }

    return(
        <Card id="cardItem">
            <CardContent id="cardContainer">
                <div id="imgItemContainer" > 
                <img src={imagen1} alt={id}></img>
                </div>
                <Link to={`/item/${id}`}>
                    <Button variant={'contained'} className="btnDetail">
                        Detalle
                    </Button>
                </Link>
                <h3>{nombre}</h3>
                <p>${Intl.NumberFormat().format(precio)},00</p>
                <ItemCount stock={stock} onAdd={onAdd} />
            </CardContent>
        </Card>
    )
}

export default Item;