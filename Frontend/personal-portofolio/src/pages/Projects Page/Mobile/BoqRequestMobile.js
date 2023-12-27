import React from 'react';
import Navigation from '../../Tools/Navigation';
import Title from '../../components/Title';
import Video from '../../components/Video';
import HorizontalImageSlider from '../../components/HorizontalImageSlider';


const BoqRequestMobile = () => {
    
    const imageUrls = [
        './Projects Image/Mobile/Boq Request/2.png',
        './Projects Image/Mobile/Boq Request/3.png',
        './Projects Image/Mobile/Boq Request/4.png',
        './Projects Image/Mobile/Boq Request/5.png',
        './Projects Image/Mobile/Boq Request/6.png',
        './Projects Image/Mobile/Boq Request/7.png',
        './Projects Image/Mobile/Boq Request/8.png',
    ];
    
    return (
    <div>

        <Navigation/>

        <br/>

        <div className='pt-20 px-10'>

            <Title
                title = "BOQ Request Mobile App"
            />
            
            {/* lg to md*/}
            <div class="grid grid-cols-2 pb-20 hidden sm:flex">


                {/* First Section */}
                <div class="w-1/2 pl-10">
                    
                    <Video
                        video_path = "./Projects Video/Mobile/Boq Request/Boq Request.mp4"
                        poster_path = "./Projects Image/Mobile/Boq Request/2.png"
                    />

                    <HorizontalImageSlider
                    images={imageUrls}
                    />

                    <div className='w-full px-5 pt-5'>
                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-sm lg:text-lg font-semibold text-red-600'>Technology :</h3>
                            <h3 className='text-sm lg:text-lg font-semibold text-black'>C#, Augmented Reality, Unity3D</h3>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-sm lg:text-lg font-semibold text-red-600'>Github Link : </h3>
                            <h3 className='text-sm lg:text-lg font-semibold text-black'>https.Github.com</h3>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-sm lg:text-lg font-semibold text-red-600'>Role : </h3>
                            <h3 className='text-sm lg:text-lg font-semibold text-black'>Unity Developer, Programmerr</h3>
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
                        <p className='text-justify text-md lg:text-lg'>As a Unity Developer at PT. Brilyan Trimata Utama, I contributed to the development of "AR Bapelkes," a pioneering project that harnessed the power of Augmented Reality (AR) to enhance midwifery education. The application aimed to provide an immersive and interactive learning experience for midwives, incorporating AR technology to simulate various scenarios and showcase essential midwifery tools. By seamlessly integrating AR into the educational process, "AR Bapelkes" not only demonstrated the potential of cutting-edge technology in training but also opened new avenues for more effective and engaging learning methodologies in the field of midwifery.</p>
                    </div>

                    <div className='pt-3'>
                        <h3 className='text-md lg:text-lg font-semibold text-xl text-red-600'>Challange</h3>
                        <p className='text-justify text-md lg:text-lg'>One of the significant challenges encountered during the creation of "AR Bapelkes" was the need for optimization to ensure the application's smooth functionality across a wide range of Android devices. With the diverse specifications and capabilities of Android hardware, achieving optimal performance required meticulous adjustments and fine-tuning. The development team faced the task of implementing optimizations to accommodate varying processing power, screen sizes, and AR rendering capabilities, ensuring that "AR Bapelkes" could deliver a consistent and effective augmented reality experience for users regardless of the device they were using.</p>
                    </div>

                    <div className='pt-3'>
                        <h3 className='text-md lg:text-lg font-semibold text-xl text-red-600'>Achievement</h3>
                        <p className='text-justify text-md lg:text-lg'>A significant achievement in the development of "AR Bapelkes" was the successful creation of an augmented reality learning platform tailored for midwifery education. Leveraging advanced AR technology, the team achieved the milestone of delivering an immersive and interactive learning experience accessible to a broad audience. Notably, the application's compatibility with common smartphones empowered nearly every midwifery student to access and benefit from the augmented reality-enhanced educational content. This accomplishment marked a pivotal step in utilizing cutting-edge technology to enhance the accessibility and effectiveness of midwifery education.</p>
                    </div>
                    
                </div>

            </div>

            {/* sm */}
            <div class="grid grid-cols-1 pb-10 sm:hidden">
                
                {/* First Section */}
                <div class="w-full pl-5">

                    <Video
                        video_path = "./Projects Video/Mobile/Boq Request/Boq Request.mp4"
                        poster_path = "./Projects Image/Mobile/Boq Request/2.png"
                    />

                    <HorizontalImageSlider
                    images={imageUrls}
                    />

                    <div className='w-full pt-5'>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Description</h3>
                            <p className='text-justify text-md'>As a Unity Developer at PT. Brilyan Trimata Utama, I contributed to the development of "AR Bapelkes," a pioneering project that harnessed the power of Augmented Reality (AR) to enhance midwifery education. The application aimed to provide an immersive and interactive learning experience for midwives, incorporating AR technology to simulate various scenarios and showcase essential midwifery tools. By seamlessly integrating AR into the educational process, "AR Bapelkes" not only demonstrated the potential of cutting-edge technology in training but also opened new avenues for more effective and engaging learning methodologies in the field of midwifery.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Github Link : </h3>
                            <h3 className='text-md font-semibold text-black'>https.Github.com</h3>
                        </div>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Challange</h3>
                            <p className='text-justify text-md'>One of the significant challenges encountered during the creation of "AR Bapelkes" was the need for optimization to ensure the application's smooth functionality across a wide range of Android devices. With the diverse specifications and capabilities of Android hardware, achieving optimal performance required meticulous adjustments and fine-tuning. The development team faced the task of implementing optimizations to accommodate varying processing power, screen sizes, and AR rendering capabilities, ensuring that "AR Bapelkes" could deliver a consistent and effective augmented reality experience for users regardless of the device they were using.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Technology :</h3>
                            <h3 className='text-md font-semibold text-black'>C#, Augmented Reality,Unity3D</h3>
                        </div>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Achievement</h3>
                            <p className='text-justify text-md'>A significant achievement in the development of "AR Bapelkes" was the successful creation of an augmented reality learning platform tailored for midwifery education. Leveraging advanced AR technology, the team achieved the milestone of delivering an immersive and interactive learning experience accessible to a broad audience. Notably, the application's compatibility with common smartphones empowered nearly every midwifery student to access and benefit from the augmented reality-enhanced educational content. This accomplishment marked a pivotal step in utilizing cutting-edge technology to enhance the accessibility and effectiveness of midwifery education.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Role : </h3>
                            <h3 className='text-md font-semibold text-black'>Unity Developer, Programmer</h3>
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

export default BoqRequestMobile;
