/* eslint-disable react-hooks/exhaustive-deps */
import ItemList from '../ItemList/ItemList';
import { Grid } from '@mui/material';
import { useEffect,useState } from 'react';
import './ItemListContainer.css'

/*En ItemListContainer esta la promesa donde se llama al back  */

const ItemListContainer = ({productos}) =>{
    const [products,setProducts] = useState([])
    
    /* se declara la promesa */
    const getProducts = ()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(productos)                
            }, 2000);
        })
    }
    /* useEffect evita que se llame a getProducts cada vez que se modifica el estado */

    useEffect(() => {
    /* se llama a la promesa */
    getProducts()
    .then((response) => {
        /* seteamos products para despues enviar a ItemList */
        setProducts(response);
    })
    }, [])




return (
        <Grid container spacing={2}>{
            <ItemList productos={products}/>
        }
        </Grid>
)  

}

export default ItemListContainer;