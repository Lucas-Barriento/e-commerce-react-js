import { Button } from "@mui/material";
import { useState } from "react";
import './ItemCount.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

// en ItemCount se hace la logica y render de los botones + y - 
const ItemCount = ({product,onAdd}) =>{
//se importa el addItem de CartContext

    const [count, setCount] = useState(1);
    const addCount = () =>{
        if (count<product.stock) {
            setCount(count+1)            
        }
    }
    const removeCount = () =>{
        if (count>1) {
            setCount(count-1)
        }
    }
    return (
        <>
            <div id="btnCount">
                <Button onClick={removeCount}>-</Button>
                <p>{count}</p>
                <Button onClick={addCount}>+</Button>
            </div>
            <div id="btnAddToCart">
                <Button onClick={()=>onAdd(count)}>
                <AddShoppingCartIcon />
                </Button>
            </div>

        </> 
    )

}
export default ItemCount
