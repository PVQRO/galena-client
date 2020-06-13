import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import './index.css';
import PresentationProjectPage from './Presentation';
import ContributorsPage from './Contributors';
import WhatItDoesPage from './WhatItDoesPage';
import NewsPage from './News';
import WhatWeNeed from './WhatWeNeed';
import ContactUs from './Contact';

export default function AboutPage(){

    /*const onClickArrow = function(){
        window.scrollTo(0, window.innerHeight)
        console.log('Click arrow')
    }*/


    return <div className="about-page">
            <PresentationProjectPage />
                {/*<div class="navigate-arrow" onClick={onClickArrow}> Contributors <IoIosArrowDown/> </div>*/}
            <WhatItDoesPage />
            <NewsPage />
            <WhatWeNeed />
            <ContactUs />
            <ContributorsPage />
        </div>
}