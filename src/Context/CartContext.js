import { useState,createContext } from "react";

/* guardamos createContext en una const */
const CartContext = createContext();

/* creamos el componenente que vamos a usar de proveedor, que va recibir un children,
 que tiene toda la informacion que va a tener el provider (lo que va a englobar/wrappear) */
const CartProvider = ({children}) =>{
    //elementos del carrito
    const [cartListItems, setCartListItems] = useState([])

    //agregar al carrito
    const addItem =(item,quantity)=>{
        let isInCart= cartListItems.find(obj =>  obj.id===item.id )

        if (!isInCart) {
            let itemCart = {...item,cartQuantity:quantity}
            setCartListItems(cartListItems=>[...cartListItems,itemCart])
        } else {
            const copyCartListItems = [...cartListItems];
            // eslint-disable-next-line array-callback-return
            copyCartListItems.find(obj => {
                if(obj.id===item.id)
                    {obj.cartQuantity+=quantity};
            });

            setCartListItems(copyCartListItems);
        }

    }
    
    const removeItem =(id)=>{
        setCartListItems(cartListItems.filter(obj => obj.id!== id))
    }
    const clear =()=>{
        setCartListItems([]);
    }

    //aca definimos lo que queremos pasar a los componentes
    const data = {
        cartListItems,
        addItem,
        removeItem,
        clear
    }

return(
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
)
}
export default CartContext
export {CartProvider}