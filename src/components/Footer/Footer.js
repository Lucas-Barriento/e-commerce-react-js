import { Link } from '@mui/material'
import './Footer.css'
import { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'

const Footer = () =>{
    const {darkMode} = useContext(ThemeContext)
    return(
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top" id={`footer${darkMode ? 'DarkMode': ''}`} >
                            <div className="col-md-4 d-flex align-items-center">
                            <div className="logo">
                                <Link to="/">
                                    <img src="/logo192.png" alt="logoImg" className={`logoImg${darkMode ? 'DarkMode': ''}`} ></img>
                                </Link>
                            </div>
                                {/* <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                                    <svg className="bi" width="30" height="24"><use href="#bootstrap"></use></svg>
                                </a> */}
                                <span className="text-muted">© 2022 Helmet Shop, S.A.</span>
                            </div>
                            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                                <li className="ms-3"><a className="text-muted" target="_blank" rel="noopener noreferrer" href="http://www.facebook.com" id="iconsFooter"><img src="/img/facebook-icon.ico" alt="facebook"></img></a></li>
                                <li className="ms-3"><a className="text-muted" target="_blank" rel="noopener noreferrer" href="http://www.instagram.com" id="iconsFooter" ><img src="/img/instagram-icon.ico" alt="instagram"></img></a></li>
                                <li className="ms-3"><a className="text-muted" target="_blank" rel="noopener noreferrer" href="https://web.whatsapp.com" id="iconsFooter"><img src="/img/whatsapp-icon.ico" alt="whatsapp"></img></a></li>
                            </ul>
                        </footer>
    )
}

export default Footer

