/* Crea los componentes Item.js e ItemList.js para mostrar algunos productos en tu ItemListContainer.js.*/
/* Consigna: crea los componentes Item.js e ItemList.js para mostrar algunos productos en tu 
ItemListContainer.js. Los ítems deben provenir de un llamado a una promise que los resuelva
en tiempo diferido (setTimeout) de 2 segundos, para emular retrasos de red


>>Aspectos a incluir en el entregable:
Item.js: Es un componente destinado a mostrar información breve del producto que el user clickeará luego
para acceder a los detalles (los desarrollaremos más adelante) ItemList.js Es un agrupador de un set
de componentes Item.js (Deberías incluirlo dentro de ItemListContainer del desafío 3)
Implementa un async mock (promise): Usa un efecto de montaje para poder emitir un llamado 
asincrónico a un mock (objeto) estático de datos que devuelva un conjunto de item 
{ id, title, description, price, pictureUrl } en dos segundos (setTimeout), 
para emular retrasos de red.

 */
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import './Item.css'
import ItemCount from "../ItemCount/ItemCount";

const Item = ({id,nombre,stock,tipo,imagen1,precio}) =>{

    return(
        <Card >
            <CardContent id="cardContainer">
                <div id="imgItemContainer" > 
                <img src={imagen1} alt={id}></img>
                </div>
                <h3>{nombre}</h3>
                <p>${Intl.NumberFormat().format(precio)},00</p>
                <ItemCount stock={stock} />
            </CardContent>
        </Card>
    )
}

export default Item;