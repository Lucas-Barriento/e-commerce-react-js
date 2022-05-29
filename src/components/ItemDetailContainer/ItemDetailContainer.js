import ItemDetail from "../ItemDetail/ItemDetail"
import {articulo} from '../../utils/products'
import { useEffect,useState } from 'react';

const ItemDetailContainer = () =>{
    const [product, setproduct] = useState({});

    const getItem = ()=>{
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(articulo)                
            }, 2000);
        })
    }

    useEffect(() => {
        getItem()
        .then((response) => {
            setproduct(response);
        })
    }, [])
    
    return(
        <ItemDetail producto={product}/>
    )
}
export default ItemDetailContainer