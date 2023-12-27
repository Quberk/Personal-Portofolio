import React from 'react';
import Navigation from '../../Tools/Navigation';
import Title from '../../components/Title';
import Video from '../../components/Video';
import HorizontalImageSlider from '../../components/HorizontalImageSlider';


const AiChess = () => {
    
    const imageUrls = [
        './Projects Image/Games/AI Chess/3.png',
        './Projects Image/Games/AI Chess/4.png',
        './Projects Image/Games/AI Chess/5.png',
        './Projects Image/Games/AI Chess/6.png',
    ];
    
    return (
    <div>

        <Navigation/>

        <br/>

        <div className='pt-20 px-10'>

            <Title
                title = "Ai Chess"
            />
            
            {/* lg to md*/}
            <div class="grid grid-cols-2 pb-20 hidden sm:flex">


                {/* First Section */}
                <div class="w-1/2 pl-10">
                    
                    <Video
                        video_path = "./Projects Video/Game/Ai Chess/AI Chess Gameplay.mp4"
                        poster_path = "./Projects Image/Games/AI Chess/2.png"
                    />

                    <HorizontalImageSlider
                    images={imageUrls}
                    />

                    <div className='w-full px-5 pt-5'>
                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-sm lg:text-lg font-semibold text-red-600'>Technology :</h3>
                            <h3 className='text-sm lg:text-lg font-semibold text-black'>C#, Unity, Photon PUN, Minimax Algorithm</h3>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-sm lg:text-lg font-semibold text-red-600'>Github Link : </h3>
                            <h3 className='text-sm lg:text-lg font-semibold text-black'>https.Github.com</h3>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-sm lg:text-lg font-semibold text-red-600'>Role : </h3>
                            <h3 className='text-sm lg:text-lg font-semibold text-black'>Game Designer, Programmer</h3>
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
                        <p className='text-justify text-md lg:text-lg'>For my final academic endeavor, I embarked on a solitary journey, crafting a project titled "AI Chess." This undertaking witnessed the fusion of strategic gameplay with cutting-edge artificial intelligence. As the sole architect behind the scenes, I delved into the intricate world of chess algorithms, specifically implementing the powerful Minimax algorithm to empower the AI's decision-making process. This project not only showcased my technical prowess but also underscored my commitment to pushing the boundaries of game development through the integration of advanced AI mechanisms.</p>
                    </div>

                    <div className='pt-3'>
                        <h3 className='text-md lg:text-lg font-semibold text-xl text-red-600'>Challange</h3>
                        <p className='text-justify text-md lg:text-lg'>One of the formidable challenges encountered during the development of "AI Chess" was seamlessly integrating the meticulously crafted single-player system, designed for engaging matches against the AI, with the complexities of an online multiplayer framework. The task demanded intricate synchronization and real-time communication to facilitate dynamic gameplay experiences for users engaging in strategic chess battles not only against the computer but also against fellow players worldwide. Overcoming this hurdle required a delicate balance between ensuring a seamless transition between single-player and online modes while maintaining the integrity of the AI's decision-making prowess in the ever-evolving landscape of online chess matches.</p>
                    </div>

                    <div className='pt-3'>
                        <h3 className='text-md lg:text-lg font-semibold text-xl text-red-600'>Achievement</h3>
                        <p className='text-justify text-md lg:text-lg'>A significant milestone in the development of "AI Chess" was the successful implementation of the Minimax algorithm, a sophisticated decision-making algorithm pivotal for the game's AI. The strategic prowess exhibited by the AI opponent, capable of evaluating numerous potential moves to determine the optimal one, provided players with challenging and intellectually stimulating gameplay. Additionally, the creation and integration of a robust online system marked a triumphant achievement, allowing players to engage in strategic battles against opponents from around the globe. The combination of the Minimax algorithm and the seamless online experience elevated "AI Chess" to a platform where players could test their skills against both formidable AI adversaries and human opponents, fostering a vibrant and competitive gaming community.</p>
                    </div>
                    
                </div>

            </div>

            {/* sm */}
            <div class="grid grid-cols-1 pb-10 sm:hidden">
                
                {/* First Section */}
                <div class="w-full pl-5">

                    <Video
                        video_path = "./Projects Video/Game/Ai Chess/AI Chess Gameplay.mp4"
                        poster_path = "./Projects Image/Games/AI Chess/2.png"
                    />

                    <HorizontalImageSlider
                    images={imageUrls}
                    />

                    <div className='w-full pt-5'>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Description</h3>
                            <p className='text-justify text-md'>For my final academic endeavor, I embarked on a solitary journey, crafting a project titled "AI Chess." This undertaking witnessed the fusion of strategic gameplay with cutting-edge artificial intelligence. As the sole architect behind the scenes, I delved into the intricate world of chess algorithms, specifically implementing the powerful Minimax algorithm to empower the AI's decision-making process. This project not only showcased my technical prowess but also underscored my commitment to pushing the boundaries of game development through the integration of advanced AI mechanisms.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Github Link : </h3>
                            <h3 className='text-md font-semibold text-black'>https.Github.com</h3>
                        </div>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Challange</h3>
                            <p className='text-justify text-md'>One of the formidable challenges encountered during the development of "AI Chess" was seamlessly integrating the meticulously crafted single-player system, designed for engaging matches against the AI, with the complexities of an online multiplayer framework. The task demanded intricate synchronization and real-time communication to facilitate dynamic gameplay experiences for users engaging in strategic chess battles not only against the computer but also against fellow players worldwide. Overcoming this hurdle required a delicate balance between ensuring a seamless transition between single-player and online modes while maintaining the integrity of the AI's decision-making prowess in the ever-evolving landscape of online chess matches.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Technology :</h3>
                            <h3 className='text-md font-semibold text-black'>C#, Unity, Photon PUN, Minimax Algorithm</h3>
                        </div>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Achievement</h3>
                            <p className='text-justify text-md'>A significant milestone in the development of "AI Chess" was the successful implementation of the Minimax algorithm, a sophisticated decision-making algorithm pivotal for the game's AI. The strategic prowess exhibited by the AI opponent, capable of evaluating numerous potential moves to determine the optimal one, provided players with challenging and intellectually stimulating gameplay. Additionally, the creation and integration of a robust online system marked a triumphant achievement, allowing players to engage in strategic battles against opponents from around the globe. The combination of the Minimax algorithm and the seamless online experience elevated "AI Chess" to a platform where players could test their skills against both formidable AI adversaries and human opponents, fostering a vibrant and competitive gaming community.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Role : </h3>
                            <h3 className='text-md font-semibold text-black'>Game Designer, Programmer</h3>
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

export default AiChess;
