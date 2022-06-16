/* import articulos from '../utils/products'; */
import { collection, getDocs } from "firebase/firestore";
import dataBase from '../utils/firebaseConfig';


/* se declara la promesa */
/* const GetProducts = ()=>{
        return new Promise((resolve,reject)=>{
            resolve(articulos)                
    })
    
    
} */

//conexion a firebase mediante promesa
const GetProducts= async () =>{
    const productsSnapshot = await getDocs(collection(dataBase, "products"))
    
    const productsList = productsSnapshot.docs.map((item) => {
        let product = item.data()
        product.id = item.id;
        return product;
    });
    return productsList;
}
export default GetProducts;