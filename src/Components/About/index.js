import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import Contributor from '../Contributor';
import './index.css';

export default function AboutPage(){

    const onClickArrow = function(){
        window.scrollTo(0, window.innerHeight)
        console.log('Click arrow')
    }


    return <div className="about-page">
            <div className="row presentation">
                <div className="col-6 video-presentation">
                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/EQtnySUjpXg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="col-6 presentation-project">
                    <h3>Inspiration</h3>
                    <p className="monospace">We have the responsibility and the technological tools to design and plan action strategies in the face of the current health crisis. Now, more than ever, our role is to provide tools to the system that facilitate decision-making and the generation of knowledge for the health of the entire citizenry. Constituting the first line of action in this crisis.</p>
                    <h3>What it does</h3>
                    <p className="monospace">We propose to carry out a database exchange system. Doctors and researchers will be able to extract from the anonymised medical reports the variables of interest of the patients affected by Covid-19 and other pathologies through natural language processing, create their own databases, share them among their colleagues or even among other research groups from different communities or countries. Promoting free access to data among physicians, allowing research studies to be carried out with greater speed and sample size, creating a communication network between scientists and thus being able to promote new prevention, diagnosis and treatment measures.</p>
                    {/*<h5>The solution’s impact to the crisis</h5>
                    <p>Our platform will allow a more united collaboration between researchers, providing a tool to share ideas, projects and data. They will be able to create their own databases through the extraction of anonymous reports. It will also allow them to incorporate and unify already created and publicly accessible databases. All this, with the intention of accelerating the investigation and using prediction tools based on artificial intelligence or other statistical methods (in which large data samples are required) to fight and defeat the Covid-19</p>
                    <h5>How can this idea be replicable in other contexts</h5>
                    <p>The extraction of data through clinical reports through natural language processing and the creation of a database could be carried out for the study and investigation of all medical and surgical pathologies, although at the moment our primary focus is Covid-19.</p>
                    <p>Medical reports can be analyzed in different languages, with subsequent coding using SNOMED CT and ICD-10, allowing health professionals to represent the information and share it appropriately, accurately and unequivocally even between different countries.</p>
                    <h5>Could it be taken to other environments</h5>
                    <p>Data extraction will be performed by exporting anonymised medical reports through a website that can be installed on the system intranet, through online access or even through an offline web app, where clinical variables are extracted and stored in its own database. Hence, it would not necessarily be associated exclusively for hospitals</p>
                    <p>The use of this tool could cover all disciplines related to health, medicine, nursing, health administration, preclinical sciences, pharmaceutical industry, health organizations, prevention and epidemiology institutions.</p>
                    <h5>How can this idea be replicable in other contexts</h5>
                    <h5>What are our main competitors</h5>*/}
                    {/*<h3>What measures should we take into account to ensure personal protection of the health data contained in the Medical Records</h3>
                    <p>The RGPD defines health data as those referred to the mental or physical health of a person, that is, that reveal information about your health status. The general rule according to article 9 of the GDPR is that the treatment of health-related data is prohibited. But the GDPR also establishes exceptions, within which there is "a general public interest".

For its part, article 9 of the LOPDGDD also regulates data processing health expressly referring to article 9.2 letter G of the RGPD, protected also by other laws such as the General Health Law, the Research Law biomedical or the General Law of Public Health and considers that the treatment of such data is justified for reasons of "public interest".

In this way, we can conclude that:

We can treat health data and our basis of legitimacy will be article 9.2 G) in accordance with article 6.1 E);

To provide content to our database, we must have access to the medical records that have health data, that is, we must request a transfer of health data to the corresponding institutions, and in this case there are have to have the following precautions:</p>
                    */}
                </div>
                {/*<div class="navigate-arrow" onClick={onClickArrow}> Contributors <IoIosArrowDown/> </div>*/}
            </div>
        </div>
}