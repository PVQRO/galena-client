import React from 'react';
import Contributor from '../Contributor';
import './index.css';

export default function ContributorsPage(){

    return (
            <div className="contributors">
                <div className="row">
                    {/*<div><h3>Contributors</h3></div>*/}
                    <Contributor image="images/pablo.png" name="Pablo Vaquero Martínez" position="Medicine" linkedin="https://www.linkedin.com/in/pablo-vaquero-mart%C3%ADnez-162088196/" />
                    <Contributor image="images/victor.png" name="Victor Vaquero Martínez" position="Data scientis" linkedin="https://www.linkedin.com/in/victor-vaquero-martinez-8633b916b/?locale=es_ES" />
                    <Contributor image="images/fadel.png" name="Fadel Hamed" position="Telecommunications engineer" linkedin="https://www.linkedin.com/in/fadelha/?originalSubdomain=es" />
                    <Contributor image="images/default.png" name="Carmen Arquero Domínguez" position="Medicine" />
                    <Contributor image="images/joseangel.png" name="José Ángel Álvarez Vázquez" position="Medicine" linkedin="https://www.linkedin.com/in/jos%C3%A9-%C3%A1ngel-%C3%A1lvarez-v%C3%A1zquez-a42623161/?originalSubdomain=es" />
                    <Contributor image="images/jose.png" name="José de la Mata" position="Biology" linkedin="https://www.linkedin.com/in/jose-maria-de-la-mata-chicharro-750750111/?locale=en_US" />
                    <Contributor image="images/default.png" name="Yasna Vanessa Bastidas Cid" position="Law and Data Protection" />
                    <Contributor image="images/oscar.png" name="Óscar Otero Martínez" position="Telecommunications engineer" linkedin="https://www.linkedin.com/in/oscaroteromar/?originalSubdomain=es" />
                    <Contributor image="images/javier.png" name="Javier González Bodas" position="Computer engineer" linkedin="https://www.linkedin.com/in/javier-gonz%C3%A1lez-bodas-70a59787/" />
                </div>
            </div>
    );
}