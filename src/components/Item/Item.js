import './Item.css'
import { Card,CardContent,Button } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../Context/CartContext';
import { ThemeContext } from '../../Context/ThemeContext';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* En Item se renderiza el card de cada producto, y la funcion onAdd */
const Item = ({product}) =>{
    const {darkMode} = useContext(ThemeContext)
    const{id,name,image1,price} = product;
    const { addItem } = useContext(CartContext)

    const onAdd = (count) => {
        addItem(product,count)
            toast.success(name+ " x "+count +" un. agregado al carrito", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                
        }
    
    return(
        <Card id={`cardItem${darkMode? 'DarkMode' : ''}`} >
            <CardContent id="cardContainer">
                <div id="imgItemContainer" > 
                <img src={image1} alt={id}></img>
                </div>
                <Link to={`/item/${id}`}>
                    <Button variant={'contained'} className="btnDetail">
                        Detalle
                    </Button>
                </Link>
                <h3>{name}</h3>
                <p>${Intl.NumberFormat().format(price)},00</p>
                <ItemCount product={product} onAdd={onAdd} />
            </CardContent>
            <ToastContainer/>
        </Card>
    )
}

export default Item;