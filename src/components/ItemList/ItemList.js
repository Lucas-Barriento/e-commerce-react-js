import { Grid } from "@mui/material"
import Item from "../Item/Item"
import './ItemList.css'
/* en ItemList esta el map de las props recibidas de ItemListContainer */
const ItemList = ({products}) =>{
    return(
        products.map((obj)=>{   
            const {id,name,stock,category,image1,price}= obj
            return(
                    <Grid item md={3} key={id} >
                        <Item id={id} name={name} stock={stock} category={category} image1={image1} price={price}/>
                    </Grid>
            )
        })
    )
}

export default ItemList