import './Cart.css'
import { CardContent,Card,Button, TextField } from "@mui/material"
import { useContext,useState } from "react"
import CartContext from "../../Context/CartContext"
import ClearIcon from '@mui/icons-material/Clear';
import { Link,useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal'
import dataBase from '../../utils/firebaseConfig';
import { addDoc,collection } from 'firebase/firestore';


const Cart = () =>{
    const {cartListItems,removeItem,totalPriceCart,itemQuantity,clear} = useContext(CartContext)
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ name:  '', phone: '', email: ''})
    const [order, setOrder] = useState({
        //{}: objeto, []: array
        buyer: {},
        items: cartListItems.map(obj=>{ return{ id: obj.id, title: obj.name, price: obj.price, quantity: obj.cartQuantity } }) ,
        date: new Date().toLocaleString(),
        total: totalPriceCart
    })
    const [orderCompleted, setOrderCompleted] = useState()
    const navigate = useNavigate()

    //enviar orden a firestore
    const pushOrder = async (newOrder) => {
        //llamamos a la coleccion orders
        const orderFireBase = collection(dataBase,'orders')
        //agregamos la nueva orden a la coleccion
        const orderDoc = await addDoc(orderFireBase, newOrder)
        setOrderCompleted(orderDoc.id)
    }

    //handleSubmit para evitar el comportamiento por default del form
    const handleSubmit = (e) =>{
        e.preventDefault();
        setOrder({...order,buyer:formData})
        pushOrder({...order,buyer:formData})
        setOrderCompleted(order.id)
    }

    const handleChange = (e) =>{
        //se ponen los corchetes para tomar el valor de la variable name
        setFormData({...formData,[e.target.name]: e.target.value})
    }

    const finishOrder = () => {
        clear();
        navigate('/')
    }

    return(
            <div>
                {cartListItems.length!== 0 ?
                <div style={{display: "flex",flexDirection: "column"}}>
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
                                <h2>{name.toUpperCase()}</h2>
                                <p>PRECIO: ${Intl.NumberFormat().format(price)},00</p>
                                <p>CANTIDAD: {cartQuantity}</p>
                            </div>
                            <div id='deleteBtn'>
                                <ClearIcon size="small" onClick={()=>removeItem(id)}>delete</ClearIcon>
                            </div>
                        </CardContent>
                    </Card>
                    )
            })  }        
                    <p>TOTAL: ${Intl.NumberFormat().format(totalPriceCart)},00</p>
                    <div id="btnKeepBuying">
                        <Link to='/' >
                            <Button variant="contained">SEGUIR COMPRANDO</Button>
                        </Link>
                    </div>
                    <div id="btnFinishBuying">
                        <Link to='' >
                            <Button onClick={()=>setShowModal(true)} variant="contained">TERMINAR COMPRA</Button>
                        </Link>
                    </div>
                </div>

                : 
                
                <div style={{display: "flex",flexDirection: "column"}}>
                    <p>NO HAY PRODUCTOS EN EL CARRITO</p>
                    <div id="btnKeepBuying">
                        <Link to='/' >
                            <Button variant="contained">VER PRODUCTOS</Button>
                        </Link>
                    </div>
                </div>                
}
                <Modal title={orderCompleted ? 'COMPRA FINALIZADA' : 'FINALIZAR COMPRA'} open={showModal} handleClose ={() => setShowModal(false)}>
                {orderCompleted ? 
                    <div style={{display: "flex",flexDirection: "column",alignItems: "center"}}>
                        <p>se genero el codigo de compra : {orderCompleted}  </p>
                        <Button onClick={finishOrder} type='submit' id="btnAcept">ACEPTAR</Button>
                    </div>
                    :
                    <form id='formCart' onSubmit={handleSubmit}>
                        <TextField id="outlined-basic" label="Nombre completo" variant="outlined"  onChange={handleChange} name="name" value={formData.name}/>
                        <TextField id="outlined-basic" label="Telefono" variant="outlined" onChange={handleChange} name="phone" value={formData.phone}/>
                        <TextField id="outlined-basic" label="Correo electronico" variant="outlined" onChange={handleChange} name="email" value={formData.email}/>
                        <Button type='submit' id="btnSend">Enviar</Button>
                    </form>}
                </Modal>
            </div>
            
    )   
}

export default Cart