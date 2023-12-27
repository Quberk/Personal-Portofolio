import React from 'react';
import Line from '../components/Line';
import Title from '../components/Title';
import ProjectMenu from '../components/ProjectMenu';
import Navigation from '../Tools/Navigation';


const GamePage = () => {
    return (
      <div>

        <Navigation/>

        <div className='px-20 pt-10'>
          
          <br/>
          <br/>

          <Title
            title = "My Game Projects"
          />

          <div className="w-full mx-auto">

            <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              <div style={{ width: '300px', margin: '0 auto' }}>
                <ProjectMenu
                    title = "Submarine"
                    width= "300px"
                    height= "400px"
                    linkTo= "/submarine"
                    imageUrl = "./Projects Image/Games/Submarine/1.png"
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
                    title = "VR Electrical Simulator"
                    width= "300px"
                    height= "400px"
                    linkTo= "/vrelectrical"
                    imageUrl = "./Projects Image/Games/Vr Electrical/1.png"
                    altText = "Whatever"
                    caption = ""
                />
              </div>

              <div style={{ width: '300px', margin: '0 auto' }}>
                <ProjectMenu
                    title = "Drac & Megs"
                    width= "300px"
                    height= "400px"
                    linkTo= "/dracandmegs"
                    imageUrl = "./Projects Image/Games/Drac & Meg/10.png"
                    altText = "Whatever"
                    caption = ""
                />
              </div>

              <div style={{ width: '300px', margin: '0 auto' }}>
                <ProjectMenu
                    title = "Piss Me Off"
                    width= "300px"
                    height= "400px"
                    linkTo= "/pissmeoff"
                    imageUrl = "./Projects Image/Games/Piss Me Off/2.png"
                    altText = "Whatever"
                    caption = ""
                />
              </div>

              <div style={{ width: '300px', margin: '0 auto' }}>
                <ProjectMenu
                    title = "Chessfornoobs"
                    width= "300px"
                    height= "400px"
                    linkTo= "/chessfornoobs"
                    imageUrl = "./Projects Image/Games/Chess For Noobs/1.png"
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
  
export default GamePage;
  