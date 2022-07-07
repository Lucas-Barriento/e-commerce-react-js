import { Button } from "@mui/material";
import { useState,useContext } from "react";
import './ItemCount.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ThemeContext } from "../../Context/ThemeContext";


// en ItemCount se hace la logica y render de los botones + y - 
const ItemCount = ({product,onAdd}) =>{

    const {darkMode} = useContext(ThemeContext)
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
            <div id={`btnCount${darkMode?'DarkMode':''}`}>
                <Button onClick={removeCount}>-</Button>
                <p>{count}</p>
                <Button onClick={addCount}>+</Button>
            </div>
            <div id={`btnAddToCart${darkMode?'DarkMode':''}`}>
                <Button onClick={()=>onAdd(count)}>
                <AddShoppingCartIcon />
                </Button>
            </div>

        </> 
    )

}
export default ItemCount
