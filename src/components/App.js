import React from 'react';
import Name from './Name.js';
import SectionHeader from './SectionHeader.js';
import JobInfo from './JobInfo.js';
import sanDiegoCounty from '../images/sanDiegoCounty.png';

function createListItem(duty, index) {
    return <li key={index}>{duty}</li>
}

function App() {
    return (
        <div>
            <Name />
            <SectionHeader sectionName='Work Experience' />
            <JobInfo 
                imgSrc={sanDiegoCounty}
                dates='Oct 2021 - May 2022'
                type='Full Time | Temp'
                employer='County of San Diego Health and Human Services Agency'
                title='Lead Case Investigator'
                duties={
                    [
                        'Supervised a team of 30 Case Investigators and approved their time cards.',
                        'Conducted routine quality assurance checks on Case Investigators and advised them on what they could improve upon.',
                        'Filed Privacy Incident Reports when investigators sent information to the wrong contact or failed to encrypt their emails.',
                        'Communicated with the CDC to place cases on a Do Not Board list if they had travel plans while communicable.',
                        'Monitored caseloads for investigators to make sure they were not getting overwhelmed and reduced intake as needed.',
                        'Referred poor performers to 1 on 1 training and processed their removal if performance did not improve.',
                        'Received priority cases from senior staff that were deemed too high-profile for regular investigators.',
                        'Conducted all previous Case Investigator tasks as well.'
                    ].map(createListItem)
                }
            />
        </div>
    );
};

export default App;