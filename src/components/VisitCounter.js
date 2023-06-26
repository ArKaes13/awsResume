import React, { useState, useEffect } from 'react';

function VisitCounter() {
    const [visits, setVisits] = useState('')

    async function updateCounter() {
        let response = await fetch('https://trdydwel5qkcescabxvjwrbysi0tckba.lambda-url.us-west-1.on.aws/');
        let data = await response.json();
        setVisits(data)
    }

    useEffect( () => {
        updateCounter()
    }, [])

    return (
        <div className='visitContainer'>
            <a className='awsLink' href="https://aws.amazon.com/what-is-cloud-computing"><img className='aws' src="https://d0.awsstatic.com/logos/powered-by-aws-white.png" alt="Powered by AWS Cloud Computing"/></a>
            <div className='counterText'>
                <p>Page Visits</p>
                <span id='visitDisplay'>{visits}</span>
            </div> 
        </div>
    );
};

export default VisitCounter;