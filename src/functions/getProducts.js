import articulos from '../utils/products';

/* se declara la promesa */
const GetProducts = ()=>{
        return new Promise((resolve,reject)=>{
            resolve(articulos)                
    })
    
    
}
export default GetProducts;