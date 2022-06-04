import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect,useState } from 'react';
import { useParams } from "react-router-dom";
import articulos from '../../utils/products'
import Loader from '../Loader/Loader'

const ItemDetailContainer = () =>{
    const [product, setproduct] = useState({});
    const [loading, setLoading] = useState(true)
    const {id} = useParams();



    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
        //usamos find para encontrar el id seleccionado y setearlo a product
        setproduct(articulos.find(item => {
            return item.id === parseInt(id);
        }))
        
    }, [id])
    
    if (loading) {
        return(
            <Loader/>
        )
    }else{
        return(
            <ItemDetail product={product}/>
            )
        }
}
export default ItemDetailContainer