import React from 'react';
import Title from './components/Title';
import Line from './components/Line';


const ResumePage = () => {

  const handleDownload = () => {
    const resumeUrl = './Resume/Software Engineer - Andi Imran Wahyullah - English.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Software Engineer - Andi Imran Wahyullah - English.pdf';
    link.click();
  };


  return (
    <section id="DownloadableResumePage" className='pt-2 px-12'>
      <br/>
      <br/>
      
      <Title
        title = "My Resume"
      />
      <div className="pt-5 flex items-center justify-center">
        <button onClick={handleDownload} className="shadow-lg shadow-cyan-500/50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-1/2 transition-transform duration-300 ease-in-out transform hover:translate-y-[-10px]">
          Download Resume
        </button>
      </div>

      <Line/>
    
    </section>
  );
};

export default ResumePage;