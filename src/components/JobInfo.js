import React from 'react';

function JobInfo(props) {
    return (
        <div className='jobContainer'>
            <div className='jobTypeContainer'>
                <img src={props.imgSrc}></img>
                <p>{props.dates}</p>
                <p>{props.type}</p>
            </div>
            <div className='jobDescriptionContainer'>
                <h2>{props.employer}</h2>
                <h3><em>{props.title}</em></h3>
                <ul>{props.duties}</ul>
            </div>
        </div>
    );
};

export default JobInfo;