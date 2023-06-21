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
                <h3>{props.title}</h3>
                <div>{props.duties}</div>
            </div>
        </div>
    );
};

export default JobInfo;