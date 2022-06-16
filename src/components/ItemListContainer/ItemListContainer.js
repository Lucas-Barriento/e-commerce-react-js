/* eslint-disable react-hooks/exhaustive-deps */
import ItemList from '../ItemList/ItemList';
import { Grid } from '@mui/material';
import { useEffect,useState } from 'react';
import './ItemListContainer.css';
import GetProducts from '../../functions/GetProducts';
import Loader from "../../components/Loader/Loader";


/*En ItemListContainer esta la promesa donde se llama al back  */

const ItemListContainer = () =>{
    const [products,setProducts] = useState([])
    const [loading, setLoading] = useState(true);


    /* useEffect evita que se llame a getProducts cada vez que se modifica el estado */
        useEffect(() => {
            setTimeout(() => {
                setLoading(false);
            }, 2000);

        // se llama a la promesa 
        GetProducts()
        .then((response) => { 
            
            // seteamos products para despues enviar a ItemList 
            setProducts(response);
        })

        }, [])

if (loading) {
    return(
        <Loader/>
    )
    
}else{
    return (
        <Grid container spacing={2} style={{margin:"0"}} >
            <ItemList products={products}/>
        </Grid>
)  
}

}


export default ItemListContainer;