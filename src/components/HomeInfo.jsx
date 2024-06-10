import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-small sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn"> 
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center 
            neo-brutalism-blue py-2 px-6 text-white mx-5">
            Hi, I am <span className="font-semibold">Pierina</span>👋 
            <br/> 
            A Software Developer
        </h1>
    ),
    2: (
        <InfoBox 
            text="I am Computer Science Student and I am passionte for new technologies."
            link="/About"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox 
            text="Led multiple projects to success over the years. Curious obout the impact?"
            link="/Projects"
            btnText="Visit my portafolio"
        />
    ),
    4: (
        <InfoBox 
            text="Need a project done? Or Looking for dev? I'm just a few keystrokes away"
            link="/Contact"
            btnText="Let's talk"
        />
    )
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo