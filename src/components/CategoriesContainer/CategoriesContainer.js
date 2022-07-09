import './CategoriesContainer.css'
import GetProducts from "../../functions/GetProducts"
import { useState,useEffect, useContext } from "react"
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import ItemList from "../../components/ItemList/ItemList";
import Loader from '../../components/Loader/Loader'
import { ThemeContext } from "../../Context/ThemeContext";

const CategoriesContainer = ()=>{
    const {darkMode} = useContext(ThemeContext)
    const {categoryId} = useParams();
    const [products,setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const filterCategories = (prod) =>{
        // eslint-disable-next-line array-callback-return
        return prod.map((item) => {
            if (item.category ===categoryId) {
                return setProducts(products => [...products,item]);
            }   
            
        });
    }
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
        
        GetProducts()
        .then((response)=>{
            setProducts([]);
            filterCategories(response);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryId])

    if (loading) {
        return(
            <Loader/>
        )
    } else {
        return (
            <div id={`category${darkMode?'DarkMode':''}`}>
                <h1 style={{textAlign:'center'}}>{'Cascos '+categoryId}</h1>
                <Grid container spacing={2}>
                    <ItemList List products={products}/>
                </Grid>
            </div>
    )  
    }
}

export default CategoriesContainer