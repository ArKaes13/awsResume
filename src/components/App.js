import React from 'react';
import Name from './Name.js';
import SectionHeader from './SectionHeader.js';
import JobInfo from './JobInfo.js';
import sanDiegoCounty from '../images/sanDiegoCounty.png';
import usCensusBureau from '../images/usCensusBureau.png';
import sanPasqual from '../images/sanPasqual.jpg';
import valleyView from '../images/valleyView.jpg';
import gpc from '../images/gpc.png';
import pvc from '../images/powayValleyCollision.jpg';
import wri from '../images/wildlifeResearchInstitute.jpg';
import Skills from './Skills.js';
import Footer from './Footer.js';

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
            <JobInfo 
                imgSrc={sanDiegoCounty}
                dates='Dec 2020 - Oct 2021'
                type='Full Time | Temp'
                employer='County of San Diego Health and Human Services Agency'
                title='Case Investigator'
                duties={
                    [
                        'Confirmed/processed lab reports, medical records, death certificates and conducted investigations into positive COVID-19 cases.',
                        'Made referrals to local, tribal, state, and federal agencies for high-profile cases.',
                        'Interviewed cases and extracted information regarding close contacts/whereabouts during communicable and exposure period.',
                        'Consolidated close contacts onto a spreadsheet and forwarded the information to the Contact Tracer Team.',
                        'Provided educational material to cases and referred/approved them to appropriate government programs. ',
                        'Maintained strict confidentiality in accordance with HIPAA.',
                    ].map(createListItem)
                }
            />
            <JobInfo 
                imgSrc={sanDiegoCounty}
                dates='Sep 2020 - Oct 2020'
                type='Full Time | Temp'
                employer='County of San Diego Registrar of Voters'
                title='Site Manager'
                duties={
                    [
                        'Learned election procedures and presented them to a class of 30 election workers.',
                        'Managed a diverse team of 15 election workers at a polling location.',
                        'Organized the set up/tear down of a polling location and ensured health and safety procedures were followed.',
                        'Represented the County in a professional manner and appropriately addressed controversial questions from the public.',
                    ].map(createListItem)
                }
            />
            <JobInfo 
                imgSrc={usCensusBureau}
                dates='Aug 2020 - Sep 2020'
                type='Full Time | Temp'
                employer='United States Census Bureau'
                title='Enumerator'
                duties={
                    [
                        'Conducted field interviews and data capture despite reluctance from the general public.',
                        'Represented the Federal Government in a professional manner while being faced with adverse social and environmental factors.',
                        'Quickly learned and applied complex government procedures and regulations.',
                        'Was offered several other duty locations, including interstate travel, due to my performance.',
                    ].map(createListItem)
                }
            />
            <JobInfo 
                imgSrc={sanPasqual}
                dates='July 2018 - Aug 2019'
                type='Full Time | Perm'
                employer='San Pasqual Band of Mission Indians'
                title='Tribal Gaming Agent'
                duties={
                    [
                        'Conducted investigations into customers/employees that resulted in their arrest/termination. Investigations consisted of primarily financial crimes with a wide variety of additional crimes.',
                        'Monitored closed-circuit television(CCTV) coverage to ensure the integrity of gambling, banking, count room, and cash handling procedures/regulations.',
                        'Wrote incident reports to document any suspicious activity(SARs), theft, procedural or regulatory violations and provided evidence to law enforcement as needed.',
                        'Stayed up to date on Tribal, State, and Federal laws/regulations. ',
                        'Maintained strict confidentiality and professionalism at all times.',
                    ].map(createListItem)
                }
            />
            <JobInfo 
                imgSrc={valleyView}
                dates='June 2017 - July 2018'
                type='Full Time | Perm'
                employer='Valley View Casino & Hotel'
                title='Security Officer/Dispatcher'
                duties={
                    [
                        'Monitored all traffic entering/exiting the casino and prohibited any alcohol, weapons, minors, excluded guests, or undesirables from entering/exiting.',
                        'Worked alongside law enforcement in the apprehension of undesirables on VVCH property. ',
                        'Wrote reports on any and all incidents concerning VVCH.',
                        'Checked for fraudulent identification/currency and submitted counterfeit currency to the United States Secret Service.',
                        'Dispatched officers/handled their scheduling/trained new officers.',
                    ].map(createListItem)
                }
            />
            <JobInfo 
                imgSrc={gpc}
                dates='Mar 2016 - Nov 2016'
                type='Full Time | Temp'
                employer='Genuine Parts Company'
                title='Renovator/District Coordinator'
                duties={
                    [
                        'Started as a Renovator and then took over responsibilities for the District Coordinator which handled scheduling, goals, and key decisions of our small team.',
                        'Removed all merchandise and display units from the sales floor and installed new units with more efficient spacing. ',
                        'Stocked, inventoried, organized, and expanded the Distribution Center warehouse.',
                        'Basic electrical and construction work.',
                        'Transported materials and merchandise throughout southern California.',
                    ].map(createListItem)
                }
            />
            <JobInfo 
                imgSrc={pvc}
                dates='2010 - Mar 2016'
                type='On-Call | Perm'
                employer='Poway Valley Collision'
                title='Auto Body Technician Apprentice'
                duties={
                    [
                        'Performed auto body and mechanical repair with integrity while under time constraints.',
                        'Thoroughly examined vehicles for damage and returned the vehicles to factory specifications.',
                        'Removed and replaced damaged parts using power and hands tools.',
                        'Detailed vehicles and prepped them for paint.',
                    ].map(createListItem)
                }
            />
            <JobInfo 
                imgSrc={wri}
                dates='2007 - 2009'
                type='On-Call | Volunteeer'
                employer='Wildlife Research Institute'
                title="Biologist's Assistant"
                duties={
                    [
                        'Fed and cared for buffalo, pigeons, and mice.',
                        'Performed general maintenance around the facility.',
                        'Conducted pest control for ground squirrels and mice.',
                        'Contracted for a falcon survey from the Bureau of Land Management.',
                        'Placed temporary watering holes for displaced wildlife at the Salton Sea.',
                        'Dug burrows for burrowing owls in the Ramona Grasslands.',
                    ].map(createListItem)
                }
            />
            <SectionHeader sectionName='Skills' />
            
            <Skills
                skills={
                    [
                        'HTML',
                        'CSS',
                        'Javascript',
                        'Python',
                        'React',
                        'Node.js',
                        'Git',
                        'Github',
                        'Webpack',
                        'NPM',
                        'VSCode',
                        'Bash',
                        'AWS'
                    ].map(createListItem)
                }
            />
            <Footer />
        </div>
    );
};

export default App;