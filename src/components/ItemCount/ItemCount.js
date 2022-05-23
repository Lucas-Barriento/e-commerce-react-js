/* eslint-disable no-global-assign */
/* >> Consigna: crea un componente ItemCount.js, que debe estar compuesto de un botón y controles,
para incrementar y decrementar la cantidad requerida de ítems. 
>>Aspectos a incluir en el entregable:
Componente ItemCount.js con los respectivos controles de la consigna. */
import { Button } from "@mui/material";
import { useState } from "react";
import './ItemCount.css'

const ItemCount = ({stock}) =>{
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
    const add = ()=> {
        alert("unidades agregadas al carrito: "+count)  
    }
    return (
        <>
            <div id="btnCount">
                <Button onClick={removeCount}>-</Button>
                <p>{count}</p>
                <Button onClick={addCount}>+</Button>
            </div>
            <div id="btnAdd">
                <Button onClick={add}>Añadir</Button>
            </div>
        </>
    )

}
export default ItemCount
