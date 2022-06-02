import { Grid } from "@mui/material"
import Item from "../Item/Item"
import './ItemList.css'
/* en ItemList esta el map de las props recibidas de ItemListContainer */
const ItemList = ({productos}) =>{
    return(
        productos.map((obj)=>{   
            const {id,nombre,stock,categoria,imagen1,precio}= obj
            return(
                    <Grid item md={3} key={id} >
                        <Item id={id} nombre={nombre} stock={stock} tipo={categoria} imagen1={imagen1} precio={precio}/>
                    </Grid>
            )
        })
    )
}

export default ItemList