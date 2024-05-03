import React from 'react'
import './Section.css'
import imagePerfil from '../../../../public/foto-perfil.jpg'
import logoSena from '../../../../public/logo-sena.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Section = () => {
    return (
        <div className='section'>
            <img src={imagePerfil} alt="" />
            <h2 className='nombre'> JONATHAN TOMBE</h2>
            <hr />
             <a href="#perfil"><h3 className='perfil-h3'>Perfil</h3></a>
            <a href="#proyectos"><h3 className='perfil-h3'>Proyectos</h3></a>
            <a href="#referencias"><h3 className='perfil-h3'>Referencias</h3></a>
            <a href="#experiencia"><h3 className='perfil-h3'>Experiencia</h3></a>
            <img className='logo-sena-img' src={logoSena} alt="" />
            <div className="redes-sociales">
                <FontAwesomeIcon icon={faLinkedin} className='redes'/>
                <FontAwesomeIcon icon={faFacebook} className='redes'/>
                <FontAwesomeIcon icon={faInstagram} className='redes'/>
                <FontAwesomeIcon icon={faTwitter} className='redes'/>
                <FontAwesomeIcon icon={faWhatsapp} className='redes'/>
            </div>
        </div>
    )
}

export default Section