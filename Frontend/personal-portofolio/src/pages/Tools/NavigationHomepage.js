import React from 'react';
import { Link } from 'react-scroll';

const NavigationHomepage = () => {
  return (
    <nav className="shadow-xl shadow-cyan-500/50 bg-black p-7 fixed w-full font-custom leading-6 z-20">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex space-x-10">
            <Link to="ProjectsPage" className="text-yellow-300 hover:text-yellow-100" smooth={true}>Projects</Link>
            <Link to="DownloadableResumePage" className="text-yellow-300 hover:text-yellow-100" smooth={true}>Resume</Link>
            <Link to="SkillsPage" className="text-yellow-300 hover:text-yellow-100" smooth={true}>Skills</Link>
          </div>
        </div>
      </div>
    </nav>
    
  );
};

export default NavigationHomepage;
