import getProducts from "../functions/getProducts"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import ItemList from "../components/ItemList/ItemList";

const Categories = ()=>{
    const {categoryId} = useParams();
    const [products,setProducts] = useState([])

    useEffect(() => {
        getProducts()
        .then((response)=>{
            setProducts([]);
            filterCategories(response);
        })
    }, [categoryId])

    const filterCategories = (prod) =>{
        return prod.map((item) => {
            if (item.categoria == categoryId) {
                return setProducts(products => [...products,item]);
            }
        });
    }

    return (
        <Grid container spacing={2}>
            <ItemList productos={products}/>
        </Grid>
)  
}

export default Categories