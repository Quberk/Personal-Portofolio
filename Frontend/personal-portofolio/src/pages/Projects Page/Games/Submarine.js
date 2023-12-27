import React from 'react';
import Navigation from '../../Tools/Navigation';
import Title from '../../components/Title';
import Video from '../../components/Video';
import HorizontalImageSlider from '../../components/HorizontalImageSlider';


const Submarine = () => {
    
    const imageUrls = [
        './Projects Image/Games/Submarine/2.png',
        './Projects Image/Games/Submarine/3.png',
        './Projects Image/Games/Submarine/4.png',
        './Projects Image/Games/Submarine/5.png',
    ];
    
    return (
    <div>

        <Navigation/>

        <br/>

        <div className='pt-20 px-10'>

            <Title
                title = "Submarine"
            />
            
            {/* lg to md*/}
            <div class="grid grid-cols-2 pb-20 hidden sm:flex">


                {/* First Section */}
                <div class="w-1/2 pl-10">
                    
                    <Video
                        video_path = "./Projects Video/Game/Submarine/Submarine Gameplay.mp4"
                        poster_path = "./Projects Image/Games/Submarine/1.png"
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
                        <p className='text-justify text-md lg:text-lg'>Embark on an extraterrestrial underwater odyssey with "Submarine," a captivating mobile game designed for both Android and iOS platforms. Developed in collaboration with enthusiastic classmates, this indie game is not just an immersive experience; it's a testament to teamwork, creativity, and the pursuit of excellence in game development.</p>
                    </div>

                    <div className='pt-3'>
                        <h3 className='text-md lg:text-lg font-semibold text-xl text-red-600'>Challange</h3>
                        <p className='text-justify text-md lg:text-lg'>Undertaking the development of "Submarine" presented our team with a myriad of challenges, each requiring innovative solutions and unwavering determination. One of the primary hurdles was the tight deadline imposed for the creation of the Minimum Viable Product (MVP), allowing us only a mere two weeks to bring our ambitious concept to life. Navigating the intricate details of game mechanics, perfecting the user interface, and ensuring a flawless gaming experience within this limited timeframe demanded meticulous planning and agile execution.</p>
                    </div>

                    <div className='pt-3'>
                        <h3 className='text-md lg:text-lg font-semibold text-xl text-red-600'>Achievement</h3>
                        <p className='text-justify text-md lg:text-lg'>In the dynamic realm of game development, achieving success often involves a delicate balance between innovation and adaptability. Our team's notable achievement during the development of "Submarine" lay in our ability to swiftly incorporate and iterate on features for the Minimum Viable Product (MVP). Recognizing the importance of agility, we prioritized speed in implementing desired functionalities to showcase a tangible prototype within the limited timeframe. This emphasis on rapid development allowed us to promptly gather valuable insights and user feedback, fostering a continuous improvement cycle.<br/>

A key lesson emerged from our commitment to promptly testing features with our target audience. Despite the ultimate outcome of not advancing to the next stage, the experience highlighted the critical nature of user testing in refining and validating game features. Our dedication to engaging potential consumers early in the development process not only informed iterative enhancements but also provided invaluable data for understanding user preferences.

</p>
                    </div>
                    
                </div>

            </div>

            {/* sm */}
            <div class="grid grid-cols-1 pb-10 sm:hidden">
                
                {/* First Section */}
                <div class="w-full pl-5">

                    <Video
                        video_path = "./Projects Video/Game/Submarine/Submarine Gameplay.mp4"
                        poster_path = "./Projects Image/Games/Submarine/1.png"
                    />

                    <HorizontalImageSlider
                    images={imageUrls}
                    />

                    <div className='w-full pt-5'>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Description</h3>
                            <p className='text-justify text-md'>Embark on an extraterrestrial underwater odyssey with "Submarine," a captivating mobile game designed for both Android and iOS platforms. Developed in collaboration with enthusiastic classmates, this indie game is not just an immersive experience; it's a testament to teamwork, creativity, and the pursuit of excellence in game development.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Github Link : </h3>
                            <h3 className='text-md font-semibold text-black'>https.Github.com</h3>
                        </div>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Challange</h3>
                            <p className='text-justify text-md'>Undertaking the development of "Submarine" presented our team with a myriad of challenges, each requiring innovative solutions and unwavering determination. One of the primary hurdles was the tight deadline imposed for the creation of the Minimum Viable Product (MVP), allowing us only a mere two weeks to bring our ambitious concept to life. Navigating the intricate details of game mechanics, perfecting the user interface, and ensuring a flawless gaming experience within this limited timeframe demanded meticulous planning and agile execution.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Technology :</h3>
                            <h3 className='text-md font-semibold text-black'>C#, Unity3D</h3>
                        </div>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Achievement</h3>
                            <p className='text-justify text-md'>In the dynamic realm of game development, achieving success often involves a delicate balance between innovation and adaptability. Our team's notable achievement during the development of "Submarine" lay in our ability to swiftly incorporate and iterate on features for the Minimum Viable Product (MVP). Recognizing the importance of agility, we prioritized speed in implementing desired functionalities to showcase a tangible prototype within the limited timeframe. This emphasis on rapid development allowed us to promptly gather valuable insights and user feedback, fostering a continuous improvement cycle.

A key lesson emerged from our commitment to promptly testing features with our target audience. Despite the ultimate outcome of not advancing to the next stage, the experience highlighted the critical nature of user testing in refining and validating game features. Our dedication to engaging potential consumers early in the development process not only informed iterative enhancements but also provided invaluable data for understanding user preferences.</p>
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

export default Submarine;
