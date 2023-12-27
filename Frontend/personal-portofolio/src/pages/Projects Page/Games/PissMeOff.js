import React from 'react';
import Navigation from '../../Tools/Navigation';
import Title from '../../components/Title';
import Video from '../../components/Video';
import HorizontalImageSlider from '../../components/HorizontalImageSlider';


const PissMeOff = () => {
    
    const imageUrls = [
        './Projects Image/Games/Piss Me Off/2.png',
        './Projects Image/Games/Piss Me Off/3.png',
        './Projects Image/Games/Piss Me Off/4.png',
        './Projects Image/Games/Piss Me Off/5.png',
        './Projects Image/Games/Piss Me Off/6.png',
        './Projects Image/Games/Piss Me Off/7.png',
        './Projects Image/Games/Piss Me Off/8.png',
        './Projects Image/Games/Piss Me Off/9.png',
        './Projects Image/Games/Piss Me Off/10.png',
    ];
    
    return (
    <div>

        <Navigation/>

        <br/>

        <div className='pt-20 px-10'>

            <Title
                title = "Piss Me Off"
            />
            
            {/* lg to md*/}
            <div class="grid grid-cols-2 pb-20 hidden sm:flex">


                {/* First Section */}
                <div class="w-1/2 pl-10">
                    
                    <Video
                        video_path = "./Projects Video/Game/Piss Me Off/Piss Me Off - Gameplay.mp4"
                        poster_path = "./Projects Image/Games/Piss Me Off/2.png"
                    />

                    <HorizontalImageSlider
                    images={imageUrls}
                    />

                    <div className='w-full px-5 pt-5'>
                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-sm lg:text-lg font-semibold text-red-600'>Technology :</h3>
                            <h3 className='text-sm lg:text-lg font-semibold text-black'>C#, Unity3D</h3>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-sm lg:text-lg font-semibold text-red-600'>Github Link : </h3>
                            <h3 className='text-sm lg:text-lg font-semibold text-black'>https.Github.com</h3>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-sm lg:text-lg font-semibold text-red-600'>Role : </h3>
                            <h3 className='text-sm lg:text-lg font-semibold text-black'>Team Leader, Programmer, Project Manager</h3>
                        </div>
                        
                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-sm lg:text-lg font-semibold text-red-600'>Platform : </h3>
                            <h3 className='text-sm lg:text-lg font-semibold text-black'>Android</h3>
                        </div>
                    </div>

                    

                </div>

                {/* Second Section */}
                <div class="w-1/2 pl-10">
                    <div className='pt-3'>
                        <h3 className='text-md lg:text-lg font-semibold text-xl text-red-600'>Description</h3>
                        <p className='text-justify text-md lg:text-lg'>"Piss Me Off" stands as a unique creation born out of a Game Jam with the theme "Control The Environment." In this game, the primary objective is to agitate the target as much as possible by manipulating various objects within a household setting. The gameplay revolves around the ingenious concept of inciting frustration through environmental interactions. Whether it's rearranging furniture, causing chaos, or triggering unexpected events, the game challenges players to creatively use the environment to elicit maximum irritation from the designated target. "Piss Me Off" exemplifies the team's innovation and humor in crafting an entertaining and unconventional gaming experience.

</p>
                    </div>

                    <div className='pt-3'>
                        <h3 className='text-md lg:text-lg font-semibold text-xl text-red-600'>Challange</h3>
                        <p className='text-justify text-md lg:text-lg'>Creating "Piss Me Off" posed a thrilling challenge for our team, primarily due to the exceptionally tight deadline imposed during the game's development. The urgency to deliver required us to expedite the creation of assets and programming aspects of the game swiftly. This demanding timeframe not only tested our ability to work efficiently under pressure but also prompted us to streamline our processes, ensuring that each team member contributed effectively to meet the project's stringent time constraints. Overcoming this temporal challenge showcased the team's resilience and dedication to delivering a polished and entertaining gaming experience within the specified timeframe.</p>
                    </div>

                    <div className='pt-3'>
                        <h3 className='text-md lg:text-lg font-semibold text-xl text-red-600'>Achievement</h3>
                        <p className='text-justify text-md lg:text-lg'>The culmination of our efforts in developing "Piss Me Off" resulted in a noteworthy achievement – a substantial influx of visitors eager to experience our game. The engaging and unique concept of manipulating household items to infuriate targets successfully captured the attention of players. This achievement not only validated our creativity and execution but also emphasized the game's appeal in drawing players into its amusing and captivating virtual world.</p>
                    </div>
                    
                </div>

            </div>

            {/* sm */}
            <div class="grid grid-cols-1 pb-10 sm:hidden">
                
                {/* First Section */}
                <div class="w-full pl-5">

                    <Video
                        video_path = "./Projects Video/Game/Piss Me Off/Piss Me Off - Gameplay.mp4"
                        poster_path = "./Projects Image/Games/Piss Me Off/2.png"
                    />

                    <HorizontalImageSlider
                    images={imageUrls}
                    />

                    <div className='w-full pt-5'>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Description</h3>
                            <p className='text-justify text-md'>"Piss Me Off" stands as a unique creation born out of a Game Jam with the theme "Control The Environment." In this game, the primary objective is to agitate the target as much as possible by manipulating various objects within a household setting. The gameplay revolves around the ingenious concept of inciting frustration through environmental interactions. Whether it's rearranging furniture, causing chaos, or triggering unexpected events, the game challenges players to creatively use the environment to elicit maximum irritation from the designated target. "Piss Me Off" exemplifies the team's innovation and humor in crafting an entertaining and unconventional gaming experience.

</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Github Link : </h3>
                            <h3 className='text-md font-semibold text-black'>https.Github.com</h3>
                        </div>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Challange</h3>
                            <p className='text-justify text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Technology :</h3>
                            <h3 className='text-md font-semibold text-black'>C#, Unity</h3>
                        </div>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Achievement</h3>
                            <p className='text-justify text-md'>The culmination of our efforts in developing "Piss Me Off" resulted in a noteworthy achievement – a substantial influx of visitors eager to experience our game. The engaging and unique concept of manipulating household items to infuriate targets successfully captured the attention of players. This achievement not only validated our creativity and execution but also emphasized the game's appeal in drawing players into its amusing and captivating virtual world.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Role : </h3>
                            <h3 className='text-md font-semibold text-black'>Team Leader, Programmer, Project Manager</h3>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Platform : </h3>
                            <h3 className='text-md font-semibold text-black'>PC</h3>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </div>

  );
};

export default PissMeOff;
