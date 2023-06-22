import React from 'react';

function Skills(props) {
    return (
        <div className='skillContainer'>
            <ul className='listContainer'>{props.skills}</ul>
        </div>
        
    )
}

export default Skills;