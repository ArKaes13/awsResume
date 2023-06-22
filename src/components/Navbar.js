import React from 'react';

function Navbar() {
    return (
        <div className='navbarContainer'>
            <a className='githubIcon' href='https://github.com/ArKaes13'><i className="fa-brands fa-github"/>Github</a>
            <button><a href='https://arkaes13.github.io/Portfolio/'>Return to Portfolio</a></button>
            <a className='awsLink' href="https://aws.amazon.com/what-is-cloud-computing"><img className='aws' src="https://d0.awsstatic.com/logos/powered-by-aws-white.png" alt="Powered by AWS Cloud Computing"/></a>
        </div>
    );
};

export default Navbar;