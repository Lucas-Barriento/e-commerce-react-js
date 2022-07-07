import { useState,createContext } from "react";

/* guardamos createContext en una const */
const CartContext = createContext();

/* creamos el componenente que vamos a usar de proveedor, que va recibir un children,
 que tiene toda la informacion que va a tener el provider (lo que va a englobar/wrappear) */
const CartProvider = ({children}) =>{
    //elementos del carrito
    const [cartListItems, setCartListItems] = useState(JSON.parse(localStorage.getItem('carritoStorage')) || [])
    const [totalPriceCart, setTotalPriceCart] = useState(parseInt(JSON.parse(localStorage.getItem('totalPriceCartStorage'))) || 0)
    const [itemQuantity, setItemQuantity] = useState(parseInt(JSON.parse(localStorage.getItem('itemQuantityStorage'))) || 0)

    //agregar al carrito
    const addItem =(item,quantity)=>{
        let isInCart= cartListItems.find(obj => obj.id===item.id)
        setTotalPriceCart(totalPriceCart+item.price*quantity)
        localStorage.setItem("totalPriceCartStorage",JSON.stringify([totalPriceCart+ item.price*quantity]))

        setItemQuantity(itemQuantity+quantity)
        localStorage.setItem("itemQuantityStorage",JSON.stringify([itemQuantity+quantity]))

        if (!isInCart) {
            let itemCart = {...item,cartQuantity:quantity}
            setCartListItems(cartListItems=>[...cartListItems,itemCart])
            localStorage.setItem("carritoStorage",JSON.stringify([...cartListItems, itemCart]))

        } else {
            const copyCartListItems = [...cartListItems];
            // eslint-disable-next-line array-callback-return
            copyCartListItems.find(obj => {
                if(obj.id===item.id)
                    {obj.cartQuantity+=quantity};
                });
            setCartListItems(copyCartListItems);
            localStorage.setItem("carritoStorage",JSON.stringify(copyCartListItems))
        }
    }
    
    const removeItem =(id)=>{
        const copyCartListItems = [...cartListItems];        
        //se le asigna a aux el objeto del id recibido 
        let aux = copyCartListItems.find(obj => obj.id===id)
        setCartListItems(copyCartListItems.filter(obj => obj!== aux))

        setItemQuantity(itemQuantity-aux.cartQuantity)
        localStorage.setItem("itemQuantityStorage",JSON.stringify([itemQuantity-aux.cartQuantity]))

        setTotalPriceCart(totalPriceCart-(aux.price*aux.cartQuantity))
        localStorage.setItem("totalPriceCartStorage",JSON.stringify([totalPriceCart-(aux.price*aux.cartQuantity)]))


        localStorage.setItem("carritoStorage",JSON.stringify(copyCartListItems.filter(obj => obj!== aux)))
    }

    const clear =()=>{
        setCartListItems([]);
        setItemQuantity(0);
        setTotalPriceCart(0);

        localStorage.removeItem("carritoStorage");
        localStorage.removeItem("totalPriceCartStorage");
        localStorage.removeItem("itemQuantityStorage");
        
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