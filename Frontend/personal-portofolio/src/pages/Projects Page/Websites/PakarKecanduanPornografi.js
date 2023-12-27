import React from 'react';
import Navigation from '../../Tools/Navigation';
import Title from '../../components/Title';
import Video from '../../components/Video';
import HorizontalImageSlider from '../../components/HorizontalImageSlider';


const PakarKecanduanPornografi = () => {
    
    const imageUrls = [
        './Projects Image/Websites/Kecanduan Pornografi/2.png',
        './Projects Image/Websites/Kecanduan Pornografi/3.png',
        './Projects Image/Websites/Kecanduan Pornografi/4.png',
        './Projects Image/Websites/Kecanduan Pornografi/5.png',
        './Projects Image/Websites/Kecanduan Pornografi/6.png',
        './Projects Image/Websites/Kecanduan Pornografi/7.png',
        './Projects Image/Websites/Kecanduan Pornografi/8.png',
    ];
    
    return (
    <div>

        <Navigation/>

        <br/>

        <div className='pt-20 px-10'>

            <Title
                title = "Pakar Kecanduan Pornografi Web"
            />
            
            {/* lg to md*/}
            <div class="grid grid-cols-2 pb-20 hidden sm:flex">


                {/* First Section */}
                <div class="w-1/2 pl-10">
                    
                    <Video
                        video_path = "./Projects Video/Website/Kecanduan Pornografi/Website with Laravel.mp4"
                        poster_path = "./Projects Image/Websites/Kecanduan Pornografi/3.png"
                    />

                    <HorizontalImageSlider
                    images={imageUrls}
                    />

                    <div className='w-full px-5 pt-5'>
                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-sm lg:text-lg font-semibold text-red-600'>Technology :</h3>
                            <h3 className='text-sm lg:text-lg font-semibold text-black'>PHP, Laravel, html, css, Bootstrap</h3>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-sm lg:text-lg font-semibold text-red-600'>Github Link : </h3>
                            <h3 className='text-sm lg:text-lg font-semibold text-black'>https.Github.com</h3>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-sm lg:text-lg font-semibold text-red-600'>Role : </h3>
                            <h3 className='text-sm lg:text-lg font-semibold text-black'>Fullstack Developer</h3>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-sm lg:text-lg font-semibold text-red-600'>Platform : </h3>
                            <h3 className='text-sm lg:text-lg font-semibold text-black'>Website</h3>
                        </div>
                    </div>

                    

                </div>

                {/* Second Section */}
                <div class="w-1/2 pl-10">
                    <div className='pt-3'>
                        <h3 className='text-md lg:text-lg font-semibold text-xl text-red-600'>Description</h3>
                        <p className='text-justify text-md lg:text-lg'>In the project titled "Pornography Addiction," I developed a specialized website for a client, serving as a platform for users seeking consultations with experts in the field. The website offers a unique set of features, allowing users to engage in consultations by posing questions that provide estimates of addiction levels, all managed by seasoned professionals. Additionally, the platform includes a live chat feature, facilitating direct and real-time conversations with experts to address concerns and provide guidance on overcoming pornography addiction. This comprehensive approach aims to create a supportive and informative environment for users seeking assistance in managing and understanding their addiction.</p>
                    </div>

                    <div className='pt-3'>
                        <h3 className='text-md lg:text-lg font-semibold text-xl text-red-600'>Challange</h3>
                        <p className='text-justify text-md lg:text-lg'>One of the significant challenges faced during the "Pornography Addiction" project was the development of a robust multi-user access system. Implementing an algorithm that allows experts to manipulate assessments and questions within the Consultation feature, aimed at providing estimated levels of pornography addiction, required careful consideration. Additionally, creating a Live Chat system with experts demanded intricate design and functionality to ensure seamless and secure real-time communication between users and professionals. Overcoming these challenges involved a meticulous approach to system architecture, user interface design, and algorithm development to guarantee a reliable and effective platform for both users and experts engaging in meaningful consultations and conversations.</p>
                    </div>

                    <div className='pt-3'>
                        <h3 className='text-md lg:text-lg font-semibold text-xl text-red-600'>Achievement</h3>
                        <p className='text-justify text-md lg:text-lg'>The achievement of the "Pornography Addiction" project lies in successfully creating a platform that seamlessly connects clients with experts for consultations regarding pornography addiction. The accomplishment involves the implementation of a user-friendly and secure system, providing individuals seeking assistance with a direct avenue to consult with professionals. By establishing this platform, the project has contributed to fostering a supportive and confidential environment where users can receive expert guidance and support in addressing issues related to pornography addiction.</p>
                    </div>
                    
                </div>

            </div>

            {/* sm */}
            <div class="grid grid-cols-1 pb-10 sm:hidden">
                
                {/* First Section */}
                <div class="w-full pl-5">

                <Video
                        video_path = "./Projects Video/Website/Kecanduan Pornografi/Website with Laravel.mp4"
                        poster_path = "./Projects Image/Websites/Kecanduan Pornografi/3.png"
                    />

                    <HorizontalImageSlider
                    images={imageUrls}
                    />

                    <div className='w-full pt-5'>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Description</h3>
                            <p className='text-justify text-md'>In the project titled "Pornography Addiction," I developed a specialized website for a client, serving as a platform for users seeking consultations with experts in the field. The website offers a unique set of features, allowing users to engage in consultations by posing questions that provide estimates of addiction levels, all managed by seasoned professionals. Additionally, the platform includes a live chat feature, facilitating direct and real-time conversations with experts to address concerns and provide guidance on overcoming pornography addiction. This comprehensive approach aims to create a supportive and informative environment for users seeking assistance in managing and understanding their addiction.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Github Link : </h3>
                            <h3 className='text-md font-semibold text-black'>https.Github.com</h3>
                        </div>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Challange</h3>
                            <p className='text-justify text-md'>One of the significant challenges faced during the "Pornography Addiction" project was the development of a robust multi-user access system. Implementing an algorithm that allows experts to manipulate assessments and questions within the Consultation feature, aimed at providing estimated levels of pornography addiction, required careful consideration. Additionally, creating a Live Chat system with experts demanded intricate design and functionality to ensure seamless and secure real-time communication between users and professionals. Overcoming these challenges involved a meticulous approach to system architecture, user interface design, and algorithm development to guarantee a reliable and effective platform for both users and experts engaging in meaningful consultations and conversations.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Technology :</h3>
                            <h3 className='text-md font-semibold text-black'>PHP, Laravel, html, css, Bootstrap</h3>
                        </div>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Achievement</h3>
                            <p className='text-justify text-md'>The achievement of the "Pornography Addiction" project lies in successfully creating a platform that seamlessly connects clients with experts for consultations regarding pornography addiction. The accomplishment involves the implementation of a user-friendly and secure system, providing individuals seeking assistance with a direct avenue to consult with professionals. By establishing this platform, the project has contributed to fostering a supportive and confidential environment where users can receive expert guidance and support in addressing issues related to pornography addiction.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Role : </h3>
                            <h3 className='text-md font-semibold text-black'>Fullstack Developer</h3>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Platform : </h3>
                            <h3 className='text-md font-semibold text-black'>Website</h3>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </div>

  );
};

export default PakarKecanduanPornografi;
