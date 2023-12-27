import React from 'react';
import Navigation from '../../Tools/Navigation';
import Title from '../../components/Title';
import Video from '../../components/Video';
import HorizontalImageSlider from '../../components/HorizontalImageSlider';


const ChessforNoobs = () => {
    
    const imageUrls = [
        './Projects Image/Games/Chess For Noobs/2.png',
        './Projects Image/Games/Chess For Noobs/3.png',
        './Projects Image/Games/Chess For Noobs/4.png',
        './Projects Image/Games/Chess For Noobs/5.png',
        './Projects Image/Games/Chess For Noobs/6.png',
    ];
    
    return (
    <div>

        <Navigation/>

        <br/>

        <div className='pt-20 px-10'>

            <Title
                title = "ChessForNoobs"
            />
            
            {/* lg to md*/}
            <div class="grid grid-cols-2 pb-20 hidden sm:flex">


                {/* First Section */}
                <div class="w-1/2 pl-10">
                    
                    <Video
                        video_path = "./Projects Video/Game/Chess For Noobs/chessfornoobs_gameplay.mp4"
                        poster_path = "./Projects Image/Games/Chess For Noobs/2.png"
                    />

                    <HorizontalImageSlider
                    images={imageUrls}
                    />

                    <div className='w-full px-5 pt-5'>
                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-sm lg:text-lg font-semibold text-red-600'>Technology :</h3>
                            <h3 className='text-sm lg:text-lg font-semibold text-black'>C#, Java, Python, Unity</h3>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-sm lg:text-lg font-semibold text-red-600'>Github Link : </h3>
                            <h3 className='text-sm lg:text-lg font-semibold text-black'>https.Github.com</h3>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-sm lg:text-lg font-semibold text-red-600'>Role : </h3>
                            <h3 className='text-sm lg:text-lg font-semibold text-black'>Team Leader, Programmer</h3>
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
                        <p className='text-justify text-md lg:text-lg'>"ChessForNoob" stands as a collaborative project developed by myself and the team, conceived as a educational venture for our academic coursework. This platform offers an engaging twist to chess quizzes, presenting them interactively. Users navigate through quizzes by selecting the correct sequence of moves required to solve each puzzle. The project aims to enhance chess learning in an enjoyable manner, catering to beginners and enthusiasts seeking an interactive and educational chess experience.</p>
                    </div>

                    <div className='pt-3'>
                        <h3 className='text-md lg:text-lg font-semibold text-xl text-red-600'>Challange</h3>
                        <p className='text-justify text-md lg:text-lg'>The development of "ChessForNoob" came with its set of challenges, particularly for our team, as we were relatively new to programming and Unity3D. One significant hurdle was crafting a robust chess piece movement system. Implementing precise and rule-compliant movements on the chessboard posed a challenge, requiring a deep dive into Unity3D's intricacies. Overcoming this obstacle involved extensive research, trial and error, and collaborative learning, marking a crucial step in our journey to grasp the complexities of game development.</p>
                    </div>

                    <div className='pt-3'>
                        <h3 className='text-md lg:text-lg font-semibold text-xl text-red-600'>Achievement</h3>
                        <p className='text-justify text-md lg:text-lg'>The culmination of our efforts in developing "ChessForNoob" was met with praise from our instructors. We received commendation for successfully creating an application that demonstrated a commendable level of complexity. The positive feedback acknowledged not only the technical intricacies but also the engaging and enjoyable gameplay that we managed to incorporate into the chess quiz application. This acknowledgment served as validation for our team's dedication and perseverance in navigating the challenges of game development.</p>
                    </div>
                    
                </div>

            </div>

            {/* sm */}
            <div class="grid grid-cols-1 pb-10 sm:hidden">
                
                {/* First Section */}
                <div class="w-full pl-5">

                    <Video
                        video_path = "./Projects Video/Game/Chess For Noobs/chessfornoobs_gameplay.mp4"
                        poster_path = "./Projects Image/Games/Chess For Noobs/2.png"
                    />

                    <HorizontalImageSlider
                    images={imageUrls}
                    />

                    <div className='w-full pt-5'>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Description</h3>
                            <p className='text-justify text-md'>"ChessForNoob" stands as a collaborative project developed by myself and the team, conceived as a educational venture for our academic coursework. This platform offers an engaging twist to chess quizzes, presenting them interactively. Users navigate through quizzes by selecting the correct sequence of moves required to solve each puzzle. The project aims to enhance chess learning in an enjoyable manner, catering to beginners and enthusiasts seeking an interactive and educational chess experience.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Github Link : </h3>
                            <h3 className='text-md font-semibold text-black'>https.Github.com</h3>
                        </div>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Challange</h3>
                            <p className='text-justify text-md'>The development of "ChessForNoob" came with its set of challenges, particularly for our team, as we were relatively new to programming and Unity3D. One significant hurdle was crafting a robust chess piece movement system. Implementing precise and rule-compliant movements on the chessboard posed a challenge, requiring a deep dive into Unity3D's intricacies. Overcoming this obstacle involved extensive research, trial and error, and collaborative learning, marking a crucial step in our journey to grasp the complexities of game development.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Technology :</h3>
                            <h3 className='text-md font-semibold text-black'>C#, Unity3D</h3>
                        </div>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Achievement</h3>
                            <p className='text-justify text-md'>The culmination of our efforts in developing "ChessForNoob" was met with praise from our instructors. We received commendation for successfully creating an application that demonstrated a commendable level of complexity. The positive feedback acknowledged not only the technical intricacies but also the engaging and enjoyable gameplay that we managed to incorporate into the chess quiz application. This acknowledgment served as validation for our team's dedication and perseverance in navigating the challenges of game development.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Role : </h3>
                            <h3 className='text-md font-semibold text-black'>Team Leader, Programmer</h3>
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

export default ChessforNoobs;
