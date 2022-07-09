/* eslint-disable react-hooks/exhaustive-deps */
import ItemList from '../ItemList/ItemList';
import { Grid } from '@mui/material';
import { useContext, useEffect,useState } from 'react';
import './ItemListContainer.css';
import GetProducts from '../../functions/GetProducts';
import Loader from "../../components/Loader/Loader";
import { ThemeContext } from '../../Context/ThemeContext';


/*En ItemListContainer esta la promesa donde se llama al back  */

const ItemListContainer = ({title}) =>{
    const {darkMode} = useContext(ThemeContext)
    const [products,setProducts] = useState([])
    const [loading, setLoading] = useState(true);


    /* useEffect evita que se llame a getProducts cada vez que se modifica el estado */
        useEffect(() => {
            setTimeout(() => {
                setLoading(false);
            }, 1000);

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
        <div id={`home${darkMode ? 'DarkMode': ''}`}>
            <h1 style={{textAlign:'center'}} >{title}</h1>
            <Grid container spacing={2} style={{margin:"0"}} id='grid' >
                <ItemList products={products}/>
            </Grid>
        </div>
)  
}

}


export default ItemListContainer;