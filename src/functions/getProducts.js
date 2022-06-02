import articulos from '../utils/products';

    
/* se declara la promesa */
const getProducts = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(articulos)                
        }, 0);
    })
}
export default getProducts;