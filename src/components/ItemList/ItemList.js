import { Grid } from "@mui/material"
import Item from "../Item/Item"
import './ItemList.css'
/* en ItemList esta el map de las props recibidas de ItemListContainer */
const ItemList = ({productos}) =>{
    return(
        productos.map(({id,nombre,stock,tipo,imagen1,precio})=>{   
            return(
                    <Grid item md={3} key={id} >
                        <Item id={id} nombre={nombre} stock={stock} tipo={tipo} imagen1={imagen1} precio={precio}/>
                    </Grid>
            )
        })
    )
}

export default ItemList