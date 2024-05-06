import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import logoSena from '../../../../public/logo-sena.png';
import "./Portafolio.css"

const PortafolioSection = (props) => {
    const containerStyle = {
        height: '5px', 
    };
    return (
        <section className={`portfolio`}>
            <div className={`title ${props.hasBorder === false ? 'no-border' : ''}`}>
                {props.title}
            </div>
            <div>{props.children}</div>
            <div className=''>
                <img src={logoSena} alt='Logo SENA' /> 
                <div className='progress-bar'>
                    <ProgressBar completed={props.progressValue} bgColor="#39a900" customLabel=' ' width={props.width} height={props.height} containerStyle={containerStyle} />
            </div>
            </div>
        </section>
    )
}

export default PortafolioSection