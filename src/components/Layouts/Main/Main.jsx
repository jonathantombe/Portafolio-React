import React from 'react'
import './Main.css'
import PortafolioSection from '../../Ul/PortafolioSection/Portafolio';
import imageReact from '../../../../public/react.png';
import imageNode from '../../../../public/nodejs.png';
import imageMongodb from '../../../../public/mongodb.png';
import imageJava from '../../../../public/java.png'
import ProgressBar from "@ramonak/react-progress-bar";
import prj1 from '../../../../public/designer-Alex.jpg';
import prj2 from '../../../../public/designer-Alex.jpg';
import prj3 from '../../../../public/Concepto robo.jpg';
import prj4 from '../../../../public/descarga20.jpg';
    
    
const Main = () => {
    const projectData = [
        {
            title: "ridex",
            description: "Descripción  ",
            link: "Ir al proyecto",
            projectUrl: "https://github.com/jonathantombe/lamborghini-sports-cars.git",
            imageUrl: prj1,
        },
        {
            title: "market website",
            description: "Descripción ",
            link: "Ir al proyecto",
            projectUrl: "https://github.com/jonathantombe/marketplace-website.git",
            imageUrl: prj2,
        },
        {
            title: "car _website",
            description: "Descripción",
            link: "Ir al proyecto",
            projectUrl: "https://github.com/jonathantombe/-car_website.git",
            imageUrl: prj3,
        },
        {
            title: "Portafolio",
            description: "Descripción",
            link: "Ir al proyecto",
            projectUrl: "https://github.com/jonathantombe/Portafolio",
            imageUrl: prj4,
        },
        
    ];
    const referenceData = [
        {
            name: "Nombre ",
            position: "Cargo ",
            phone: "123456789",
            email: "@example.com",
        },
        {
            name: "Nombre",
            position: "Cargo ",
            phone: "987654321",
            email: "@example.com",
        },
        {
            name: "Nombre ",
            position: "Cargo ",
            phone: "987654321",
            email: "@example.com",
        },
    ];
    return (
        <main className='main'>
            
            <PortafolioSection id="#perfil" title="Perfil" hasBorder={true} progressValue="100" height="5px">
                <href />

            </PortafolioSection>
            <p className='parrafo-perfil'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero asperiores voluptatem dolorum odio exercitationem, labore at illum officiis delectus accusantium veniam laudantium soluta! Non esse quae obcaecati voluptatibus quaerat in!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor non, illo accusamus neque corporis nobis ullam fugiat alias similique odit delectus quasi aut nesciunt nam eos ab porro? Aliquam, animi?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque doloribus eveniet debitis, temporibus saepe quisquam quod, optio illo, in nam harum. Sit, exercitationem dignissimos fugiat voluptate aspernatur incidunt ea corrupti?
            </p>

            <PortafolioSection id="proyectos" title="Proyectos" hasBorder={false} progressValue="100" height="5px">
            </PortafolioSection>
            <div className="project-container">
                {projectData.map((project, index) => (
                    <div key={index} className="project">
                        <div className="image-container">
                            <img src={project.imageUrl} alt={project.title} />
                        </div>
                        <div className="content-container">
                            <h2 className='titulo-h2'>{project.title}</h2>
                            <p className='description'>{project.description}</p>
                            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                                <button className='button-link'>{project.link}</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <PortafolioSection id="Referencias" title="Referencias" hasBorder={true} progressValue="100" height="5px">
            </PortafolioSection>

            <div className="reference-container">
                {referenceData.map((reference, index) => (
                    <div key={index} className="reference">
                        <div className='reference-texto'>
                            <p>Nombre: {reference.name}</p>
                            <p>Cargo: {reference.position}</p>
                            <p>Teléfono: {reference.phone}</p>
                            <p>Email: {reference.email}</p>
                        </div>
                    </div>
                ))}
            </div>
                
            <PortafolioSection id="experiencia" title="Experiencia" hasBorder={false} progressValue="0" height="5px">
            </PortafolioSection>
            <div className='contenedor-image'>
            <div className='image-react'>
                <img src={imageReact} alt="" />
                
                <ProgressBar completed={50} className='progress-bar-linea'/>
                <h2 className='react-h2'>React</h2>
            </div>
            <div className='image-react'>
                <img src={imageNode} alt="" />

                <ProgressBar completed={50} className='progress-bar-linea'/>
                <h2 className='react-h2'>Nodejs</h2>
            </div>
            <div className='image-react'>
                <img src={imageMongodb} alt="" />

                <ProgressBar completed={50} className='progress-bar-linea' />
                <h2 className='react-h2'>Mongodb</h2>
            </div>
            <div className='image-react'>
                <img src={imageJava} alt="" />

                <ProgressBar completed={50} className='progress-bar-linea'/>
                <h2 className='react-h2'>Java</h2>
            </div>
            </div>
        </main>
    )
}

export default Main