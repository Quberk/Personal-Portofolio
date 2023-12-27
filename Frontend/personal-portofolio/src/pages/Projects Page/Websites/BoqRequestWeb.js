import React from 'react';
import Navigation from '../../Tools/Navigation';
import Title from '../../components/Title';
import Video from '../../components/Video';
import HorizontalImageSlider from '../../components/HorizontalImageSlider';


const BoqRequestWeb = () => {
    
    const imageUrls = [
        './Projects Image/Websites/Project BOQ/2.png',
        './Projects Image/Websites/Project BOQ/3.png',
        './Projects Image/Websites/Project BOQ/4.png',
        './Projects Image/Websites/Project BOQ/5.png',
        './Projects Image/Websites/Project BOQ/6.png',
        './Projects Image/Websites/Project BOQ/7.png',
    ];
    
    return (
    <div>

        <Navigation/>

        <br/>

        <div className='pt-20 px-10'>

            <Title
                title = "Boq Request Web"
            />
            
            {/* lg to md*/}
            <div class="grid grid-cols-2 pb-20 hidden sm:flex">


                {/* First Section */}
                <div class="w-1/2 pl-10">
                    
                    <Video
                        video_path = "./Projects Video/Website/Project BOQ/Project BOQ.mp4"
                        poster_path = "./Projects Image/Websites/Project BOQ/1.png"
                    />

                    <HorizontalImageSlider
                    images={imageUrls}
                    />

                    <div className='w-full px-5 pt-5'>
                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-sm lg:text-lg font-semibold text-red-600'>Technology :</h3>
                            <h3 className='text-sm lg:text-lg font-semibold text-black'>React Js, Node Js, Tailwind</h3>
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
                        <p className='text-justify text-md lg:text-lg'>The "Boq Request" project serves as an admin control panel designed to manage Boq (Bill of Quantities) requests initiated by users on the Android platform. This project entails the development of a comprehensive web interface, complemented by the creation of dedicated APIs to facilitate seamless communication with the Android platform. The primary goal is to empower administrators with the necessary tools to efficiently handle and organize Boq requests initiated by users. Through this project, a streamlined and user-friendly process is established for both administrators and Android users, enhancing the overall management of Boq requests on the platform.</p>
                    </div>

                    <div className='pt-3'>
                        <h3 className='text-md lg:text-lg font-semibold text-xl text-red-600'>Challange</h3>
                        <p className='text-justify text-md lg:text-lg'>One of the key challenges encountered during the development of "Boq Request" was the implementation of APIs capable of handling user-submitted data, including images and files. This required a meticulous approach to design APIs that could seamlessly receive, process, and store diverse data formats from users on the Android platform. Additionally, another significant challenge was creating APIs that enabled administrators to efficiently manage and respond to user uploads, with functionalities for both acceptance and rejection of submitted data. Overcoming these challenges involved a thoughtful integration of robust API endpoints, ensuring the smooth flow of data between the Android platform and the administrative control panel, ultimately enhancing the overall functionality of the "Boq Request" project.</p>
                    </div>

                    <div className='pt-3'>
                        <h3 className='text-md lg:text-lg font-semibold text-xl text-red-600'>Achievement</h3>
                        <p className='text-justify text-md lg:text-lg'>
The noteworthy achievement in the development of "Boq Request" lies in the creation of a user-friendly platform, meticulously designed for seamless accessibility and control by administrators. The successful implementation of a robust API system further enhances the project's achievements, facilitating smooth interaction between users on the Android platform and the database. The achievement is marked by the project's ability to provide administrators with effective control over the platform while ensuring users can effortlessly upload data through a well-functioning API. This accomplishment underscores the project's commitment to delivering a reliable and efficient solution for managing Boq Requests.</p>
                    </div>
                    
                </div>

            </div>

            {/* sm */}
            <div class="grid grid-cols-1 pb-10 sm:hidden">
                
                {/* First Section */}
                <div class="w-full pl-5">

                    <Video
                        video_path = "./Projects Video/Website/Project BOQ/Project BOQ.mp4"
                        poster_path = "./Projects Image/Websites/Project BOQ/1.png"
                    />

                    <HorizontalImageSlider
                    images={imageUrls}
                    />

                    <div className='w-full pt-5'>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Description</h3>
                            <p className='text-justify text-md'>The "Boq Request" project serves as an admin control panel designed to manage Boq (Bill of Quantities) requests initiated by users on the Android platform. This project entails the development of a comprehensive web interface, complemented by the creation of dedicated APIs to facilitate seamless communication with the Android platform. The primary goal is to empower administrators with the necessary tools to efficiently handle and organize Boq requests initiated by users. Through this project, a streamlined and user-friendly process is established for both administrators and Android users, enhancing the overall management of Boq requests on the platform.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Github Link : </h3>
                            <h3 className='text-md font-semibold text-black'>https.Github.com</h3>
                        </div>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Challange</h3>
                            <p className='text-justify text-md'>One of the key challenges encountered during the development of "Boq Request" was the implementation of APIs capable of handling user-submitted data, including images and files. This required a meticulous approach to design APIs that could seamlessly receive, process, and store diverse data formats from users on the Android platform. Additionally, another significant challenge was creating APIs that enabled administrators to efficiently manage and respond to user uploads, with functionalities for both acceptance and rejection of submitted data. Overcoming these challenges involved a thoughtful integration of robust API endpoints, ensuring the smooth flow of data between the Android platform and the administrative control panel, ultimately enhancing the overall functionality of the "Boq Request" project.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Technology :</h3>
                            <h3 className='text-md font-semibold text-black'>React Js, Node Js, Tailwind</h3>
                        </div>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Achievement</h3>
                            <p className='text-justify text-md'>
The noteworthy achievement in the development of "Boq Request" lies in the creation of a user-friendly platform, meticulously designed for seamless accessibility and control by administrators. The successful implementation of a robust API system further enhances the project's achievements, facilitating smooth interaction between users on the Android platform and the database. The achievement is marked by the project's ability to provide administrators with effective control over the platform while ensuring users can effortlessly upload data through a well-functioning API. This accomplishment underscores the project's commitment to delivering a reliable and efficient solution for managing Boq Requests.</p>
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

export default BoqRequestWeb;
