import React from 'react';



function Project({ project }) {

    const newText = project.text.split('\n')

    return (
        <div className={project.title}>
            <a  href={project.link}>
            {newText.map(str => <p>{str}</p>)}
            </a>
            <img 
                className="github" 
                src={require('../../images/github-icon.png')} 
                alt='GitHub link'
                onClick={() => window.open(project.github)}
            />
        </div>
    )
}

export default Project