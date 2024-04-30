import React from 'react'
import './Main.css'
import PortafolioSection from '../../Ul/PortafolioSection/Portafolio';
import logoSena from '../../../../public/car-2.jpg';


const Main = () => {
    const projectData = [
        {
            title: "Proyecto 1",
            description: "Descripción del proyecto 1",
            link: "Enlace al proyecto 1",
        },
        {
            title: "Proyecto 2",
            description: "Descripción del proyecto 2",
            link: "Enlace al proyecto 2",
        },
        {
            title: "Proyecto 1",
            description: "Descripción del proyecto 1",
            link: "Enlace al proyecto 1",
        },
        {
            title: "Proyecto 2",
            description: "Descripción del proyecto 2",
            link: "Enlace al proyecto 2",
        },
        
    ];
    const referenceData = [
        {
            name: "Nombre de la Persona 1",
            position: "Cargo de la Persona 1",
            phone: "123456789",
            email: "persona1@example.com",
        },
        {
            name: "Nombre de la Persona 2",
            position: "Cargo de la Persona 2",
            phone: "987654321",
            email: "persona2@example.com",
        },
    ];
    return (
        <main className='main'>

            <PortafolioSection title="Perfil" hasBorder={true} progressValue="100" height="5px">

            </PortafolioSection>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero asperiores voluptatem dolorum odio exercitationem, labore at illum officiis delectus accusantium veniam laudantium soluta! Non esse quae obcaecati voluptatibus quaerat in!</p>

            <PortafolioSection title="Proyectos" hasBorder={false} progressValue="100" height="5px">
            </PortafolioSection>
            <div className="project-container">
                {projectData.map((project, index) => (
                    <div key={index} className="project">
                        <div className="image-container">
                            <img src={logoSena} alt='Logo SENA' />
                        </div>
                        <div className="content-container">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <button>{project.link}</button>
                        </div>
                    </div>
                ))}
            </div>

            <PortafolioSection title="Referencias" hasBorder={true} progressValue="10" height="5px">
                <div className="reference-container">
                    {referenceData.map((reference, index) => (
                        <div key={index} className="reference">
                            <div>
                                <strong>Nombre:</strong> {reference.name}
                            </div>
                            <div>
                                <strong>Cargo:</strong> {reference.position}
                            </div>
                            <div>
                                <strong>Teléfono:</strong> {reference.phone}
                            </div>
                            <div>
                                <strong>Email:</strong> {reference.email}
                            </div>
                        </div>
                    ))}
                </div>
            </PortafolioSection>
            
        
            
            <PortafolioSection title="titulo 4" hasBorder={false} progressValue="95" height="5px">
                content 4
            </PortafolioSection>
        </main>
    )
}

export default Main