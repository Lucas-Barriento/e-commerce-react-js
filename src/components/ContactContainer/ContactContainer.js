import { Button, Container, Grid, Modal } from '@mui/material'
import { useContext, useState } from 'react'
import './ContactContainer.css'
import {useNavigate} from "react-router-dom"
import { ThemeContext } from '../../Context/ThemeContext'


const ContactContainer = ({title}) =>{
    const {darkMode} = useContext(ThemeContext)
    const [openModal, setOpenModal] = useState(false)
    const navigate = useNavigate()

    const addContact = (e) => {
        e.preventDefault()
        setOpenModal(true)
    }
    const backToHome = () => {
        navigate('/')
    }
    return(
        <div id={`container${darkMode?'DarkMode':''}`}>
        
        <Container id={`contactData${darkMode?'DarkMode':''}`} >
        <h1 style={{textAlign:'center'}}>{title}</h1>
            <Grid>
                <h3>Dejanos tu mensaje</h3>
            </Grid>
            <Grid>
                <form className={`form${darkMode?'DarkMode':''}`} onSubmit={addContact}>
                    <input type="text" required placeholder="Nombre completo"/>
                    <input type="email" required placeholder="Correo Electronico" />
                    <input type="text" control="none" required placeholder="Telefono" />
                    <textarea placeholder="Motivo de su consulta"/>
                    <Button type="submit" className="btnContacto">Enviar</Button>
                </form>
            </Grid>
        </Container>
        <Modal onClose={() => setOpenModal(false)} open={openModal}>
                <div className="sendForm">
                    <h4>Muchas gracias por contactarnos, nos comunicaremos con usted a la brevedad.</h4>
                    <Button className="btnHome" onClick={backToHome}>Volver</Button>
                </div>
            </Modal>
            </div>
    )
}
export default ContactContainer