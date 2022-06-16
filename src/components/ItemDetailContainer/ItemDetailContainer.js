import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect,useState } from 'react';
import { useParams } from "react-router-dom";
//import GetProducts from '../../functions/GetProducts';
import Loader from '../Loader/Loader'
import dataBase from "../../utils/firebaseConfig";
import { getDoc ,doc } from "firebase/firestore";

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true)
    const {id} = useParams();



    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);

/*         GetProducts()
        .then((response) => { 
            
            // seteamos products para despues enviar a ItemList 
            setProduct(response.find(item => {
                return item.id === id;
            }));
        }) */

        //usamos find para encontrar el id seleccionado y setearlo a product
    /*  setProduct(product.find(item => {
            return item.id === id;
        })) */
        
        const getProduct = async ()=>{
            const docRef = doc(dataBase,"products",id)
            const docSnaptshop = await getDoc(docRef)
            let product = docSnaptshop.data()
            product.id = docSnaptshop.id;
            return product;
        }
        
        getProduct()
        .then((response)=>{
            setProduct(response);
        })

        
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