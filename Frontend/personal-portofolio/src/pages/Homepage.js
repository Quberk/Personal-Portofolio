import React from 'react';
import ProjectsPage from './ProjectsPage';
import ResumePage from './ResumePage';
import SkillsPage from './SkillsPage';
import Line from './components/Line';
import Title from './components/Title';
import NavigationHomepage from './Tools/NavigationHomepage';


const Home = () => {
  return (
    <div>

      <NavigationHomepage/>
      
      <img
        src="./Background/Portofolio Website.png"
        className="w-full h-full object-cover pt-20 shadow-xl shadow-red-500/50 z-2 animate-from-top sm:block hidden"
      />

      <img
        src="./Background/Portofolio Website-sm.png"
        className="w-full h-full object-cover pt-20 shadow-xl shadow-red-500/50 z-2 animate-from-top sm:hidden"
      />

      <div
        className="bg-opacity-20 font-custom leading-8"
      >
        
        {/* Introduction */}

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 p-10">

          <div class="col-span-1 pt-5 text-lg font-semibold text-red-600 text-shadow text-right flex items-center h-full hidden lg:flex">
            <p>
            Name : Andi Imran Wahyullah<br/><br/>
            Age : 23<br/><br/>
            Hobbies : Gym, Playing Video Games, Hiking<br/><br/>
            </p>

          </div>
          <div class="col-span-1 md:float-left flex items-center">

            <img src="./My Profile/Profile.png" alt="Your Photo" class="w-full object-cover rounded-full mx-auto"/>
          
          </div>
          <div class="col-span-1 pt-5 text-md font-semibold text-red-600 text-shadow text-justify flex items-center">

            <p>
              Welcome to my digital playground! I'm a tech enthusiast, juggling roles as a web, game, and mobile developer. Crafting beautiful and functional web experiences, building immersive game worlds, and bringing innovative concepts to mobile apps are my passions.

              <br/>In this coding journey, I find humor in every challenge. Why don't programmers get angry? Because they handle problems "calmly." 😄

              <br/>Join me on this adventure through exciting projects and vibrant creations. Let's create something special and, of course, have some fun!
            </p>

          </div>
        </div>



        <ProjectsPage/>
        <ResumePage/>
        <SkillsPage/>
      </div>
    </div>

  );
};

export default Home;
