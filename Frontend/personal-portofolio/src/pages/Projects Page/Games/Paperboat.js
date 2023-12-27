import React from 'react';
import Navigation from '../../Tools/Navigation';
import Title from '../../components/Title';
import Video from '../../components/Video';
import HorizontalImageSlider from '../../components/HorizontalImageSlider';


const PaperBoat = () => {
    
    const imageUrls = [
        './Projects Image/Games/Paperboat/2.png',
        './Projects Image/Games/Paperboat/3.png',
        './Projects Image/Games/Paperboat/4.png',
        './Projects Image/Games/Paperboat/5.png',
        './Projects Image/Games/Paperboat/6.png',
        './Projects Image/Games/Paperboat/7.png',
    ];
    
    return (
    <div>

        <Navigation/>

        <br/>

        <div className='pt-20 px-10'>

            <Title
                title = "Paperboat"
            />
            
            {/* lg to md*/}
            <div class="grid grid-cols-2 pb-20 hidden sm:flex">


                {/* First Section */}
                <div class="w-1/2 pl-10">
                    
                    <Video
                        video_path = "./Projects Video/Game/Paperboat/Paperboat gameplay.mp4"
                        poster_path = "./Projects Image/Games/Paperboat/2.png"
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
                        <p className='text-justify text-md lg:text-lg'>"Paperboat" sets sail on a unique adventure as players guide a paper boat through lively urban waterways. This whimsical endless runner game, inspired by the spirit of exploration, brings a fresh perspective to the genre. Collaborating with a game publisher for the first time, we successfully launched the Alpha version on the Google Play Store. Dodge obstacles, collect power-ups, and experience endless fun in the charming world of "Paperboat" – where every twist and turn unlocks a new adventure!</p>
                    </div>

                    <div className='pt-3'>
                        <h3 className='text-md lg:text-lg font-semibold text-xl text-red-600'>Challange</h3>
                        <p className='text-justify text-md lg:text-lg'>The development of "Paperboat" was not without its challenges. Striving for optimal performance, we embarked on a journey to reduce the quality of 3D models and implement batching methods. This required a delicate balance to maintain a visually appealing experience while ensuring smooth gameplay. Additionally, crafting a water effect that struck the right balance between realism and a whimsical, cartoonish aesthetic posed its own set of hurdles. Overcoming these challenges, we steered "Paperboat" towards success, creating an engaging and delightful gaming experience for players.</p>
                    </div>

                    <div className='pt-3'>
                        <h3 className='text-md lg:text-lg font-semibold text-xl text-red-600'>Achievement</h3>
                        <p className='text-justify text-md lg:text-lg'>Celebrating a significant achievement, the alpha release of "Paperboat" garnered over 1500 downloads on Google Playstore. This positive reception marked a promising start to our collaboration with the gaming community. The encouraging response fueled our determination to further refine and enhance the game, setting the course for future successes.</p>
                    </div>
                    
                </div>

            </div>

            {/* sm */}
            <div class="grid grid-cols-1 pb-10 sm:hidden">
                
                {/* First Section */}
                <div class="w-full pl-5">

                    <Video
                        video_path = "./Projects Video/Game/Paperboat/Paperboat gameplay.mp4"
                        poster_path = "./Projects Image/Games/Paperboat/2.png"
                    />

                    <HorizontalImageSlider
                    images={imageUrls}
                    />

                    <div className='w-full pt-5'>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Description</h3>
                            <p className='text-justify text-md'>"Paperboat" sets sail on a unique adventure as players guide a paper boat through lively urban waterways. This whimsical endless runner game, inspired by the spirit of exploration, brings a fresh perspective to the genre. Collaborating with a game publisher for the first time, we successfully launched the Alpha version on the Google Play Store. Dodge obstacles, collect power-ups, and experience endless fun in the charming world of "Paperboat" – where every twist and turn unlocks a new adventure!</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Github Link : </h3>
                            <h3 className='text-md font-semibold text-black'>https.Github.com</h3>
                        </div>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Challange</h3>
                            <p className='text-justify text-md'>The development of "Paperboat" was not without its challenges. Striving for optimal performance, we embarked on a journey to reduce the quality of 3D models and implement batching methods. This required a delicate balance to maintain a visually appealing experience while ensuring smooth gameplay. Additionally, crafting a water effect that struck the right balance between realism and a whimsical, cartoonish aesthetic posed its own set of hurdles. Overcoming these challenges, we steered "Paperboat" towards success, creating an engaging and delightful gaming experience for players.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Technology :</h3>
                            <h3 className='text-md font-semibold text-black'>C#, Unity3D</h3>
                        </div>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Achievement</h3>
                            <p className='text-justify text-md'>Celebrating a significant achievement, the alpha release of "Paperboat" garnered over 1500 downloads on Google Playstore. This positive reception marked a promising start to our collaboration with the gaming community. The encouraging response fueled our determination to further refine and enhance the game, setting the course for future successes.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Role : </h3>
                            <h3 className='text-md font-semibold text-black'>Team Leader, Programmer, Project Manager</h3>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Platform : </h3>
                            <h3 className='text-md font-semibold text-black'>Android</h3>
                        </div>
                    </div>

                </div>

            </div>

        </div>



    </div>

  );
};

export default PaperBoat;
