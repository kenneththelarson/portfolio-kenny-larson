import React from 'react';

function Projects({ project, i }) {
    return (
        <div id={`project${i}`} >
            <a href={project.deployed} target="_blank" ><img src={project.img} alt={`Thumbnail of ${project.projectName}`} className="img-thumbnail mx-1" /></a>
            <a href={project.repo} target="_blank">
                <div className="project-description">
                    <h3>{project.projectName}</h3>
                </div>
            </a>
        </div>
    );
}

export default Projects;