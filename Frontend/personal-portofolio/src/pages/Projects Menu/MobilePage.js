import React from 'react';
import Line from '../components/Line';
import Title from '../components/Title';
import ProjectMenu from '../components/ProjectMenu';
import Navigation from '../Tools/Navigation';


const MobilePage = () => {
    return (

      <div>

        <Navigation/>

        <div className='px-20 pt-10'>
          
          <br/>
          <br/>

          <Title
            title = "My Mobile App Projects"
          />

          <div className="w-full mx-auto">
            <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

              <div style={{ width: '300px', margin: '0 auto' }}>
                <ProjectMenu
                    title = "BOQ Request Mobile App"
                    width= "300px"
                    height= "400px"
                    linkTo= "/boqrequestmobile"
                    imageUrl = "./Projects Image/Mobile/Boq Request/1.png"
                    altText = "Whatever"
                    caption = ""
                />
              </div>

              <div style={{ width: '300px', margin: '0 auto' }}>
                  <ProjectMenu
                      title = "Paperboat"
                      width= "300px"
                      height= "400px"
                      linkTo= "/paperboat"
                      imageUrl = "./Projects Image/Games/PaperBoat/1.png"
                      altText = "BOQ Request"
                      caption = ""
                  />
              </div>

              <div style={{ width: '300px', margin: '0 auto' }}>
                <ProjectMenu
                    title = "AI Chess"
                    width= "300px"
                    height= "400px"
                    linkTo= "/aichess"
                    imageUrl = "./Projects Image/Games/AI Chess/1.png"
                    altText = "Whatever"
                    caption = ""
                />
              </div>

              <div style={{ width: '300px', margin: '0 auto' }}>
                <ProjectMenu
                    title = "AR Bapelkes"
                    width= "300px"
                    height= "400px"
                    linkTo= "/arbapelkes"
                    imageUrl = "./Projects Image/Games/AR Bapelkes/1.png"
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
  
export default MobilePage;
  