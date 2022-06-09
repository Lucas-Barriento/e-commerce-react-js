import { Button } from "@mui/material";
import { useState,useContext } from "react";
import './ItemCount.css'
import CartContext from '../../Context/CartContext'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

// en ItemCount se hace la logica y render de los botones + y - 
const ItemCount = ({product,onAdd}) =>{
//se importa el addItem de CartContext
const {addItem} = useContext(CartContext)

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
{/*                 <Button onClick={()=>onAdd(count)}>Añadir</Button>
 */}            
                    <AddShoppingCartIcon onClick={()=>addItem(product,count)}/>
            </div>

        </> 
    )

}
export default ItemCount
