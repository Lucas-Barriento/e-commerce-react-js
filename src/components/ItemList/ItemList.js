import { Grid } from "@mui/material"
import Item from "../Item/Item"
import './ItemList.css'
/* en ItemList esta el map de las props recibidas de ItemListContainer */
const ItemList = ({products}) =>{

    return(
        products.map((obj)=>{   
            
            return(
                    <Grid item md={3} key={obj.id} >
                        <Item product={obj}/>
                    </Grid>
            )
        })
    )
}

export default ItemList