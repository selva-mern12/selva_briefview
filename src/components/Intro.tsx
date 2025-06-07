import React from 'react';
import introImg from "../../public/assets/portfolio-intro.png";
import '../styles/Intro.css';
import Image from 'next/image';


const Intro = () => {
    return (
        <div className='portfolio-intro-container'>
            <Image
              src={introImg}
              alt="Intro Image"
              loading='lazy'
              className='intro-image'
            />
            <div className="loading-bar" />
        </div>
    )
}

export default Intro;