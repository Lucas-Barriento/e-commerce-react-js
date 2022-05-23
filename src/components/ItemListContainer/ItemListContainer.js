import Item from '../Item/Item';
import { Grid } from '@mui/material';
import './ItemListContainer.css'

const ItemListContainer = ({productos}) =>{
    /* grid>grid-item>card */
    return (
        <Grid container spacing={2} >{
        productos.map(({id,nombre,stock,tipo,imagen1,precio})=>{   
            return(
                    <Grid item xs={3} md={3} key={id} >
                        <Item id={id} nombre={nombre} stock={stock} tipo={tipo} imagen1={imagen1} precio={precio}/>
                    </Grid>
            )
        })
    }
    </Grid>
    )  
}

export default ItemListContainer;