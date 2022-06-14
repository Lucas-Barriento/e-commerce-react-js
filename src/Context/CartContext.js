import { useState,createContext } from "react";

/* guardamos createContext en una const */
const CartContext = createContext();

/* creamos el componenente que vamos a usar de proveedor, que va recibir un children,
 que tiene toda la informacion que va a tener el provider (lo que va a englobar/wrappear) */
const CartProvider = ({children}) =>{
    //elementos del carrito
    const [cartListItems, setCartListItems] = useState([])
    const [totalPriceCart, setTotalPriceCart] = useState(0)
    const [itemQuantity, setItemQuantity] = useState(0)

    

    //agregar al carrito
    const addItem =(item,quantity)=>{
        let isInCart= cartListItems.find(obj =>  obj.id===item.id )
        
        setTotalPriceCart(totalPriceCart+item.price*quantity)
        setItemQuantity(itemQuantity+quantity)

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
        //se le asigna a aux el objeto del id recibido 
        let aux= cartListItems.find(obj => obj.id===id )

        setCartListItems(cartListItems.filter(obj => obj!== aux))
        setItemQuantity(itemQuantity-aux.cartQuantity)
        setTotalPriceCart(totalPriceCart-(aux.price*aux.cartQuantity))

    }
    const clear =()=>{
        setCartListItems([]);
    }

    //aca definimos lo que queremos pasar a los componentes
    const data = {
        cartListItems,
        addItem,
        removeItem,
        clear,
        totalPriceCart,
        itemQuantity
    }

return(
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
)
}
export default CartContext
export {CartProvider}