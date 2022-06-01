import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect,useState } from 'react';
import { useParams } from "react-router-dom";
import articulos from '../../utils/products'

const ItemDetailContainer = () =>{
    const [product, setproduct] = useState({});
    const {id} =useParams();

/*     const getItem = ()=>{
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(getProducts)                
            }, 2000);
        })
    } */

    useEffect(() => {
/*         getItem()
        .then((response) => {
            setproduct(response);
        }) */
        //usamos find para encontrar el id seleccionado y setearlo a product
        setproduct(articulos.find(item => {
            return item.id == id;
        }))
        
    }, [id])
    
    return(
        <ItemDetail producto={product}/>
    )
}
export default ItemDetailContainer