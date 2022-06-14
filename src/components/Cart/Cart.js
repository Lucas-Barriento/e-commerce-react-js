import './Cart.css'
import { CardContent,Card,Button } from "@mui/material"
import { useContext } from "react"
import CartContext from "../../Context/CartContext"
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom';


const Cart = () =>{
    const {cartListItems,removeItem,totalPriceCart,itemQuantity} = useContext(CartContext)
    return(
            <div>
                {cartListItems.length!== 0 ?
                <div>
                <p>{itemQuantity} PRODUCTO/S</p>
            {   cartListItems.map((item)=>{
                const{id,name,image1,price,cartQuantity} = item;
                return(
                    <Card key={id} id="cardCart" >
                        <CardContent id="cardContentCart">
                            <div id="imgContainer">
                                <img src={image1} alt={id} ></img>
                            </div>
                            <div id='dataContainer'>
                                <h2>{name}</h2>
                                <p>Precio: ${Intl.NumberFormat().format(price)},00</p>
                                <p> Cantidad: {cartQuantity}</p>
                            </div>
                            <div id='deleteBtn'>
                                <ClearIcon size="small" onClick={()=>removeItem(id)}>delete</ClearIcon>
                            </div>
                        </CardContent>
                    </Card>
                    )
            })  }        
                    <p>TOTAL: ${Intl.NumberFormat().format(totalPriceCart)},00</p>
                    <div>
                        <Link to={'/'} >
                            <Button id="btnKeepBuying">SEGUIR COMPRANDO</Button>
                        </Link>
                    </div>
                </div>

                :
                
                <div>
                    <p>NO HAY PRODUCTOS EN EL CARRITO</p>
                <Link to={'/'} >
                    <Button id="btnKeepBuying">VER PRODUCTOS</Button>
                </Link>
                </div>
}
            </div>
                        
    )
}

export default Cart