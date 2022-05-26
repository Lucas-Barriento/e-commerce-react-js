import { Button } from "@mui/material";
import { useState } from "react";
import './ItemCount.css'

/* en ItemCount se hace la logica y render de los botones + y - */
const ItemCount = ({stock,onAdd}) =>{
    const [count, setCount] = useState(1);
    const addCount = () =>{
        if (count<stock) {
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
                <Button onClick={()=>onAdd(count)}>Añadir</Button>
            </div>
        </> 
    )

}
export default ItemCount
