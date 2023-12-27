import React from 'react';
import Navigation from '../../Tools/Navigation';
import Title from '../../components/Title';
import Video from '../../components/Video';
import HorizontalImageSlider from '../../components/HorizontalImageSlider';


const DracAndMegs = () => {
    
    const imageUrls = [
        './Projects Image/Games/Drac & Meg/3.png',
        './Projects Image/Games/Drac & Meg/4.png',
        './Projects Image/Games/Drac & Meg/5.png',
        './Projects Image/Games/Drac & Meg/6.png',
        './Projects Image/Games/Drac & Meg/7.png',
        './Projects Image/Games/Drac & Meg/8.png',
        './Projects Image/Games/Drac & Meg/9.png',
        './Projects Image/Games/Drac & Meg/10.png',
    ];
    
    return (
    <div>

        <Navigation/>

        <br/>

        <div className='pt-20 px-10'>

            <Title
                title = "Drac And Megs"
            />
            
            {/* lg to md*/}
            <div class="grid grid-cols-2 pb-20 hidden sm:flex">


                {/* First Section */}
                <div class="w-1/2 pl-10">
                    
                    <Video
                        video_path = "./Projects Video/Game/Drac & Meg/Drac & Megs Trailer.mp4"
                        poster_path = "./Projects Image/Games/Drac & Meg/2.png"
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
                            <h3 className='text-sm lg:text-lg font-semibold text-black'>Game Designer, 2D Artist, Programmer</h3>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-sm lg:text-lg font-semibold text-red-600'>Project Duration : </h3>
                            <h3 className='text-sm lg:text-lg font-semibold text-black'>December 2022 - January 2023</h3>
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
                        <p className='text-justify text-md lg:text-lg'>"Drac and Megs" stands as my inaugural foray into ambitious game development, presenting an endless runner that cleverly blends shooter elements with the engaging mechanics reminiscent of "Jetpack Joyride." The narrative unfolds in a captivating realm where Drac, embodying the iconic Dracula, embarks on a relentless quest to vanquish the Megs, a coven of formidable witches. This innovative game offers players a unique fusion of genres, providing an exhilarating gaming experience that marries action-packed shooting sequences with the thrill of navigating through the enchanted world of airborne witchcraft.</p>
                    </div>

                    <div className='pt-3'>
                        <h3 className='text-md lg:text-lg font-semibold text-xl text-red-600'>Challange</h3>
                        <p className='text-justify text-md lg:text-lg'>One notable challenge encountered during the development of "Drac and Megs" was the intricate task of implementing a robust Wave System within the framework of the endless runner mechanics. The Wave System was pivotal to the dynamic progression of the game, introducing waves of adversaries and environmental challenges that intensified as players advanced. Balancing the difficulty curve while maintaining an engaging experience demanded meticulous fine-tuning. Overcoming this challenge involved extensive iteration, algorithm refinement, and meticulous testing to ensure a seamless integration of the Wave System, contributing to the overall excitement and replayability of the game.</p>
                    </div>

                    <div className='pt-3'>
                        <h3 className='text-md lg:text-lg font-semibold text-xl text-red-600'>Achievement</h3>
                        <p className='text-justify text-md lg:text-lg'>The achievements in the development of "Drac and Megs" lie in the successful creation of a game that excels in both engaging mechanics and a sophisticated Endless Runner system. The meticulous crafting of diverse challenges that evolve as the game unfolds contributes to an immersive player experience. The Endless Runner system, designed to offer a dynamic and ever-changing environment, not only enhances the game's replayability but also showcases a commitment to delivering a captivating gaming adventure. These achievements underscore the dedication to creating a title that stands out for its gameplay depth and continuous player engagement.</p>
                    </div>
                    
                </div>

            </div>

            {/* sm */}
            <div class="grid grid-cols-1 pb-10 sm:hidden">
                
                {/* First Section */}
                <div class="w-full pl-5">

                    <Video
                        video_path = "./Projects Video/Game/Drac & Meg/Drac & Megs Trailer.mp4"
                        poster_path = "./Projects Image/Games/Drac & Meg/2.png"
                    />

                    <HorizontalImageSlider
                    images={imageUrls}
                    />

                    <div className='w-full pt-5'>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Description</h3>
                            <p className='text-justify text-md'>"Drac and Megs" stands as my inaugural foray into ambitious game development, presenting an endless runner that cleverly blends shooter elements with the engaging mechanics reminiscent of "Jetpack Joyride." The narrative unfolds in a captivating realm where Drac, embodying the iconic Dracula, embarks on a relentless quest to vanquish the Megs, a coven of formidable witches. This innovative game offers players a unique fusion of genres, providing an exhilarating gaming experience that marries action-packed shooting sequences with the thrill of navigating through the enchanted world of airborne witchcraft.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Github Link : </h3>
                            <h3 className='text-md font-semibold text-black'>https.Github.com</h3>
                        </div>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Challange</h3>
                            <p className='text-justify text-md'>One notable challenge encountered during the development of "Drac and Megs" was the intricate task of implementing a robust Wave System within the framework of the endless runner mechanics. The Wave System was pivotal to the dynamic progression of the game, introducing waves of adversaries and environmental challenges that intensified as players advanced. Balancing the difficulty curve while maintaining an engaging experience demanded meticulous fine-tuning. Overcoming this challenge involved extensive iteration, algorithm refinement, and meticulous testing to ensure a seamless integration of the Wave System, contributing to the overall excitement and replayability of the game.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Technology :</h3>
                            <h3 className='text-md font-semibold text-black'>C#, Unity3D</h3>
                        </div>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Achievement</h3>
                            <p className='text-justify text-md'>The achievements in the development of "Drac and Megs" lie in the successful creation of a game that excels in both engaging mechanics and a sophisticated Endless Runner system. The meticulous crafting of diverse challenges that evolve as the game unfolds contributes to an immersive player experience. The Endless Runner system, designed to offer a dynamic and ever-changing environment, not only enhances the game's replayability but also showcases a commitment to delivering a captivating gaming adventure. These achievements underscore the dedication to creating a title that stands out for its gameplay depth and continuous player engagement.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Role : </h3>
                            <h3 className='text-md font-semibold text-black'>Game Designer, 2D Artist, Programmer</h3>
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

export default DracAndMegs;
