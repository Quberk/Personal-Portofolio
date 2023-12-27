import React from 'react';
import Line from '../components/Line';
import Title from '../components/Title';
import ProjectMenu from '../components/ProjectMenu';
import Navigation from '../Tools/Navigation';


const WebsitePage = () => {
    return (
      <div>

        <Navigation/>

        <div className='px-20 pt-10'>
          
          <br/>
          <br/>

          <Title
            title = "My Website Projects"
          />

          <div className="w-full mx-auto">
            <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              <div style={{ width: '300px', margin: '0 auto' }}>
                <ProjectMenu
                    title = "Personal Portofolio"
                    width= "300px"
                    height= "400px"
                    linkTo= "/personalportofolioweb"
                    imageUrl = "./Projects Image/Websites/Personal Website/1.png"
                    altText = "Whatever"
                    caption = ""
                />
              </div>

              <div style={{ width: '300px', margin: '0 auto' }}>
                  <ProjectMenu
                      title = "BOQ Request"
                      width= "300px"
                      height= "400px"
                      linkTo= "/boqrequestweb"
                      imageUrl = "./Projects Image/Websites/Project BOQ/1.png"
                      altText = "BOQ Request"
                      caption = ""
                  />
              </div>

              <div style={{ width: '300px', margin: '0 auto' }}>
                <ProjectMenu
                    title = "Kecanduan Pornografi"
                    width= "300px"
                    height= "400px"
                    linkTo= "/kecanduanpornografiweb"
                    imageUrl = "./Projects Image/Websites/Kecanduan Pornografi/1.png"
                    altText = "Whatever"
                    caption = ""
                />
              </div>
            </div>
          </div>

          <br/>
          <br/>
          
        </div>
      </div>
      
  
    );
  };
  
export default WebsitePage;
  