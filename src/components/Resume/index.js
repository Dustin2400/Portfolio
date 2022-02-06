import React from 'react';

function Resume() {

    const skills1 = [
        {
            name: 'HTML',
            image: 'HTML',
        },
        {
            name: 'CSS',
            image: 'css3',
        },
        {
            name: 'JavaScript',
            image: 'javascript',
        },

    ]

    const skills2 = [
        {
            name: 'MongoDB',
            image: 'MongoDB',
        },
        {
            name: 'Express.js',
            image: 'nodejs',
        },
        {
            name: 'React',
            image: 'react',
        },
        {
            name: 'Node.js',
            image: 'node',
        },

    ]

    const skills3 = [
        {
            name: 'SQL',
            image: 'sql',
        },
        {
            name: 'GraphQL',
            image: 'graphql',
        },
        {
            name: 'JQuery',
            image: 'jquery'
        }
    ]

    return (
        <div className="content">
            <div className="resume">
            <span>Download my </span><a href='https://docs.google.com/document/d/1L00i9gWsLzb3SJ6r--vXQTk4kyXJwh4sdw582be311E/edit?usp=sharing'>resume</a>
            <p>Proficiencies:</p>
            </div>
            <div className="skillsContainer">
                <div className="skillRow">
                    {skills1.map((skill) => 
                        <div className={`skill ${skill.name}`} >
                        <img src={require(`../../images/${skill.image}-logo.png`)} alt={skill.name} className={skill.name}></img>
                        <p>{skill.name}</p>
                        </div>
                    )}
                </div>
                <div className="skillRow">
                    {skills2.map((skill) => 
                        <div className={`skill ${skill.name}`} >
                        <img src={require(`../../images/${skill.image}-logo.png`)} alt={skill.name} className={skill.name}></img>
                        <p>{skill.name}</p>
                        </div>
                    )}
                </div>
                <div className="skillRow">
                    {skills3.map((skill) => 
                        <div className={`skill ${skill.name}`} >
                        <img src={require(`../../images/${skill.image}-logo.png`)} alt={skill.name} className={skill.name}></img>
                        <p>{skill.name}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )


}

export default Resume