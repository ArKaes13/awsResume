import React from 'react';
import VisitCounter from './VisitCounter.js';

function Footer() {

    function copyright() {
        const currentYear = new Date().getFullYear();
        return (
            `&copy; ${currentYear} Tyler Montgomery <a href='https://github.com/ArKaes13' <i class="fa-brands fa-github"></a></i>`
        );
    };

    return (
        <footer>
            <div className='copyrightContainer'>
                <p dangerouslySetInnerHTML={{ __html: copyright() }}></p>
            </div>
            <VisitCounter />
        </footer>
    );
};

export default Footer;