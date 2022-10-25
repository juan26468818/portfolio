import "./projects.css"
const Projects = (props)=>{


    return(
        <div class="project-container">
            <img src={props.image} alt={`An image of the web ${props.name}`} class="project-img" />
            <div class="project-description-container">
                <h3>{props.name}</h3>
                <p class="project-description">
                    You can take a look at the code <a href={props.code} target="_blank">here</a>
                    <br /> You can also go to the page by clicking <a href={props.web} target="_blank">here</a>
                </p>
            </div>
        </div>
    )
}

export default Projects;