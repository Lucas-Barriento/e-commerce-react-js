import { Card,CardContent } from "@mui/material"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'

const ItemDetail = ({producto}) =>{
    const {id,nombre,imagen1,stock,precio} = producto;
    const onAdd = (count) => {
        alert(nombre+ " x "+count +" un. agregado al carrito")  
    }

    return(
        <Card id="cardItem">
            <CardContent id="cardItemDetail">
                <div id="imgItemDetail" > 
                    <img src={imagen1} alt={id}></img>
                </div>
                <div id="dataItemDetail">
                    <h3>{nombre}</h3>
                    <p>${Intl.NumberFormat().format(precio)},00</p>
                    <p> o 6 cuotas sin interes de ${(precio / 6).toFixed(2)}</p>
                    <ItemCount stock={stock} onAdd={onAdd} />
                </div>
            </CardContent>
        </Card>
    )
}
export default ItemDetail