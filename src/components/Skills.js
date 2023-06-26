import React from 'react';

function Skills(props) {
    return (
        <div className='skillContainer'>
            <ul className='listContainer'>{props.skills}</ul>
            <button><a href='https://arkaes13.github.io/Portfolio/'>Return to Portfolio</a></button>
        </div>
    )
}

export default Skills;