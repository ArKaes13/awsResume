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
            <p>Page Visits</p>
            <span id='visitDisplay'>{visits}</span>
        </div>
    );
};

export default VisitCounter;