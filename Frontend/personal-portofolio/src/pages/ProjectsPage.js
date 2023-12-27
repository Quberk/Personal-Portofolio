import React from 'react';
import ImageWithText from './components/ImageWithText';
import Title from './components/Title';
import Line from './components/Line';


const ProjectsPage = () => {
  return (
    <section id="ProjectsPage" className='px-12 pt-10'>

      <Title
        title = "My Projects"
      />    


      {/* lg */}
      <div className="md:block hidden w-full lg:w-1/2 mx-auto">

        <div className='mx-auto grid grid-cols-2'>

          <div className='transition-transform duration-300 ease-in-out hover:translate-y-[-10px]'
          style={{ width: '300px', margin: '0 auto' }}>
            <ImageWithText
              width= "300px"
              height= "500px"
              linkTo= "/websites"
              imageUrl = "./Projects Image/Websites/Kecanduan Pornografi/1.png"
              altText = "Whatever"
              caption = "Websites"
              blur = {1}
              brightness = {0.4}
            />
          </div>

          <div className='transition-transform duration-300 ease-in-out hover:translate-y-[-10px]'
          style={{ width: '300px', margin: '0 auto' }}>
            <ImageWithText
              width= "300px"
              height= "500px"
              linkTo= "/game"
              imageUrl = "./Projects Image/Games/PaperBoat/1.png"
              altText = "Whatever"
              caption = "Games"
              blur = {1}
              brightness = {0.4}
            />
          </div>
          
        </div>
        
      </div>

      {/* sm */}
      <div className="grid grid-cols-1 gap-5 md:hidden w-full">
        
        <div className='transition-transform duration-300 ease-in-out hover:translate-y-[-10px]'
        style={{ width: '300px', margin: '0 auto' }}>
          <ImageWithText
            width= "300px"
            height= "150px"
            linkTo= "/websites"
            imageUrl = "./Projects Image/Websites/Kecanduan Pornografi/1.png"
            altText = "Whatever"
            caption = "Websites"
            blur = {1}
            brightness = {0.4}
          />
        </div>

        <div className='transition-transform duration-300 ease-in-out hover:translate-y-[-10px]'
        style={{ width: '300px', margin: '0 auto' }}>
          <ImageWithText
            width= "300px"
            height= "150px"
            linkTo= "/game"
            imageUrl = "./Projects Image/Games/PaperBoat/1.png"
            altText = "Whatever"
            caption = "Games"
            blur = {1}
            brightness = {0.4}
          />
        </div>

      </div>

      <Line/>

    </section>
  );
};

export default ProjectsPage;