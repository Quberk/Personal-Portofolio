import React from 'react';
import Navigation from '../../Tools/Navigation';
import Title from '../../components/Title';
import Video from '../../components/Video';
import HorizontalImageSlider from '../../components/HorizontalImageSlider';


const VrElectrical = () => {
    
    const imageUrls = [
        './Projects Image/Games/Vr Electrical/1.png',
        './Projects Image/Games/Vr Electrical/2.png',
        './Projects Image/Games/Vr Electrical/3.png',
        './Projects Image/Games/Vr Electrical/4.png',
        './Projects Image/Games/Vr Electrical/5.png',
        './Projects Image/Games/Vr Electrical/6.png',
        './Projects Image/Games/Vr Electrical/7.png',
    ];
    
    return (
    <div>

        <Navigation/>

        <br/>

        <div className='pt-20 px-10'>

            <Title
                title = "VR Electrical Simulator"
            />
            
            {/* lg to md*/}
            <div class="grid grid-cols-2 pb-20 hidden sm:flex">


                {/* First Section */}
                <div class="w-1/2 pl-10">
                    
                    <Video
                        video_path = "./Projects Video/Game/Vr Electrical/Electrical VR.mp4"
                        poster_path = "./Projects Image/Games/Vr Electrical/2.png"
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
                            <h3 className='text-sm lg:text-lg font-semibold text-black'>Programmer, Unity Developer</h3>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-sm lg:text-lg font-semibold text-red-600'>Platform : </h3>
                            <h3 className='text-sm lg:text-lg font-semibold text-black'>Oculus VR</h3>
                        </div>
                    </div>

                    

                </div>

                {/* Second Section */}
                <div class="w-1/2 pl-10">
                    <div className='pt-3'>
                        <h3 className='text-md lg:text-lg font-semibold text-xl text-red-600'>Description</h3>
                        <p className='text-justify text-md lg:text-lg'>Embarking on my first venture into Virtual Reality (VR) development at PT. Brilyan Trimata Utama, I spearheaded the creation of the "VR Electrical Simulator" project. This innovative endeavor aimed to provide a realistic simulation experience for the installation of electrical systems within homes. Through the immersive power of VR technology, users could navigate and engage with a lifelike environment, honing their skills in the intricate process of setting up electrical components. The project not only demonstrated my proficiency in VR development but also underscored its potential for educational applications, offering a hands-on, risk-free training ground for individuals entering the field of electrical installation.</p>
                    </div>

                    <div className='pt-3'>
                        <h3 className='text-md lg:text-lg font-semibold text-xl text-red-600'>Challange</h3>
                        <p className='text-justify text-md lg:text-lg'>One of the primary challenges encountered during the development of the "VR Electrical Simulator" project lay in crafting a systematic approach to facilitate the creation of simulation steps. This encompassed the intricate task of integrating animated interactions, tool usage, and various installation procedures seamlessly. Overcoming this challenge demanded a delicate balance between realism and user-friendly design to ensure that each step in the simulation, from equipment utilization to the installation process, was both intuitive and educationally effective. Navigating the complexities of virtual reality while prioritizing user experience marked a pivotal aspect of addressing this challenge, ultimately enhancing the overall quality and educational value of the VR Electrical Simulator.</p>
                    </div>

                    <div className='pt-3'>
                        <h3 className='text-md lg:text-lg font-semibold text-xl text-red-600'>Achievement</h3>
                        <p className='text-justify text-md lg:text-lg'>
A notable achievement in the creation of the "VR Electrical Simulator" project was the successful implementation of a flexible system for easily manipulating simulation steps. This accomplishment involved devising a user-friendly method to adjust various aspects of the simulation without delving into intricate scripts but rather relying on the Unity Engine's Inspector. This streamlined approach not only simplified the development process but also empowered users to tailor the simulation according to their instructional needs. The achievement underscores a commitment to accessibility and adaptability, enhancing the project's utility and educational effectiveness.</p>
                    </div>
                    
                </div>

            </div>

            {/* sm */}
            <div class="grid grid-cols-1 pb-10 sm:hidden">
                
                {/* First Section */}
                <div class="w-full pl-5">

                    <Video
                        video_path = "./Projects Video/Game/Vr Electrical/Electrical VR.mp4"
                        poster_path = "./Projects Image/Games/Vr Electrical/3.png"
                    />

                    <HorizontalImageSlider
                    images={imageUrls}
                    />

                    <div className='w-full pt-5'>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Description</h3>
                            <p className='text-justify text-md'>Embarking on my first venture into Virtual Reality (VR) development at PT. Brilyan Trimata Utama, I spearheaded the creation of the "VR Electrical Simulator" project. This innovative endeavor aimed to provide a realistic simulation experience for the installation of electrical systems within homes. Through the immersive power of VR technology, users could navigate and engage with a lifelike environment, honing their skills in the intricate process of setting up electrical components. The project not only demonstrated my proficiency in VR development but also underscored its potential for educational applications, offering a hands-on, risk-free training ground for individuals entering the field of electrical installation.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Github Link : </h3>
                            <h3 className='text-md font-semibold text-black'>https.Github.com</h3>
                        </div>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Challange</h3>
                            <p className='text-justify text-md'>One of the primary challenges encountered during the development of the "VR Electrical Simulator" project lay in crafting a systematic approach to facilitate the creation of simulation steps. This encompassed the intricate task of integrating animated interactions, tool usage, and various installation procedures seamlessly. Overcoming this challenge demanded a delicate balance between realism and user-friendly design to ensure that each step in the simulation, from equipment utilization to the installation process, was both intuitive and educationally effective. Navigating the complexities of virtual reality while prioritizing user experience marked a pivotal aspect of addressing this challenge, ultimately enhancing the overall quality and educational value of the VR Electrical Simulator.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Technology :</h3>
                            <h3 className='text-md font-semibold text-black'>C#, Unity3D</h3>
                        </div>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Achievement</h3>
                            <p className='text-justify text-md'>
A notable achievement in the creation of the "VR Electrical Simulator" project was the successful implementation of a flexible system for easily manipulating simulation steps. This accomplishment involved devising a user-friendly method to adjust various aspects of the simulation without delving into intricate scripts but rather relying on the Unity Engine's Inspector. This streamlined approach not only simplified the development process but also empowered users to tailor the simulation according to their instructional needs. The achievement underscores a commitment to accessibility and adaptability, enhancing the project's utility and educational effectiveness.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Role : </h3>
                            <h3 className='text-md font-semibold text-black'>Programmer, Unity Developer</h3>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Platform : </h3>
                            <h3 className='text-md font-semibold text-black'>Oculus VR</h3>
                        </div>
                    </div>

                </div>

            </div>

        </div>



    </div>

  );
};

export default VrElectrical;
