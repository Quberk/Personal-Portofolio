import React from 'react';
import Navigation from '../../Tools/Navigation';
import Title from '../../components/Title';
import Video from '../../components/Video';
import HorizontalImageSlider from '../../components/HorizontalImageSlider';


const PersonalPortofolioWeb = () => {
    
    const imageUrls = [
        './Projects Image/Websites/Personal Website/2.png',
        './Projects Image/Websites/Personal Website/3.png',
        './Projects Image/Websites/Personal Website/4.png',
        './Projects Image/Websites/Personal Website/5.png',
        './Projects Image/Websites/Personal Website/6.png',
        './Projects Image/Websites/Personal Website/7.png',
        './Projects Image/Websites/Personal Website/8.png',
        './Projects Image/Websites/Personal Website/9.png',
        './Projects Image/Websites/Personal Website/10.png',
    ];
    
    return (
    <div>

        <Navigation/>

        <br/>

        <div className='pt-20 px-10'>

            <Title
                title = "Personal Portofolio Web"
            />
            
            {/* lg to md*/}
            <div class="grid grid-cols-2 pb-20 hidden sm:flex">


                {/* First Section */}
                <div class="w-1/2 pl-10">
                    
                    <Video
                        video_path = "./Projects Video/Website/Personal Website/Personal Website.mp4"
                        poster_path = "./Projects Image/Websites/Personal Website/2.png"
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
                            <h3 className='text-sm lg:text-lg font-semibold text-black'>Fullstack Website Developer</h3>
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
                        <p className='text-justify text-md lg:text-lg'>
"Personal Portfolio" serves as my digital showcase, providing a comprehensive overview of my professional journey and skills. This personal website is meticulously designed to highlight various projects I have undertaken, offering insights into my technical capabilities as a web developer, game developer, and mobile app developer. Beyond showcasing projects, the portfolio delves into my personal character, presenting a holistic perspective on who I am and the values I bring to my work. With a user-friendly interface, the website aims to create a seamless experience for visitors, offering a glimpse into my expertise and the passion I bring to each endeavor.</p>
                    </div>

                    <div className='pt-3'>
                        <h3 className='text-md lg:text-lg font-semibold text-xl text-red-600'>Challange</h3>
                        <p className='text-justify text-md lg:text-lg'>
Developing my "Personal Portfolio" posed the challenge of crafting an interactive and visually engaging design that not only reflects my personality but also captivates visitors. Striking the right balance between aesthetics and functionality was crucial, and I navigated through the intricacies of web design to ensure a seamless and enjoyable user experience. Incorporating interactive elements while maintaining a professional and cohesive look required careful consideration of design principles and user interface dynamics. Overcoming this challenge involved experimenting with various layouts, color schemes, and interactive features to create a website that not only showcases my projects but also leaves a lasting impression on those who explore it.</p>
                    </div>

                    <div className='pt-3'>
                        <h3 className='text-md lg:text-lg font-semibold text-xl text-red-600'>Achievement</h3>
                        <p className='text-justify text-md lg:text-lg'>In the development of my "Personal Portfolio," a notable achievement was the creation of a media platform that effectively showcases the projects I've worked on. The challenge lay in presenting each project in an engaging yet informative manner. Through careful design and curation, I successfully crafted a showcase that combines visually appealing elements with detailed descriptions. This achievement not only highlights my technical skills but also demonstrates my ability to communicate complex concepts in an accessible and captivating way, providing visitors with a comprehensive understanding of the projects in a visually compelling format.</p>
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
                            <p className='text-justify text-md'>
"Personal Portfolio" serves as my digital showcase, providing a comprehensive overview of my professional journey and skills. This personal website is meticulously designed to highlight various projects I have undertaken, offering insights into my technical capabilities as a web developer, game developer, and mobile app developer. Beyond showcasing projects, the portfolio delves into my personal character, presenting a holistic perspective on who I am and the values I bring to my work. With a user-friendly interface, the website aims to create a seamless experience for visitors, offering a glimpse into my expertise and the passion I bring to each endeavor.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Github Link : </h3>
                            <h3 className='text-md font-semibold text-black'>https.Github.com</h3>
                        </div>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Challange</h3>
                            <p className='text-justify text-md'>
Developing my "Personal Portfolio" posed the challenge of crafting an interactive and visually engaging design that not only reflects my personality but also captivates visitors. Striking the right balance between aesthetics and functionality was crucial, and I navigated through the intricacies of web design to ensure a seamless and enjoyable user experience. Incorporating interactive elements while maintaining a professional and cohesive look required careful consideration of design principles and user interface dynamics. Overcoming this challenge involved experimenting with various layouts, color schemes, and interactive features to create a website that not only showcases my projects but also leaves a lasting impression on those who explore it.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Technology :</h3>
                            <h3 className='text-md font-semibold text-black'>React Js, Node Js, Tailwind</h3>
                        </div>

                        <div className='pt-3'>
                            <h3 className='text-md font-semibold text-xl text-red-600'>Achievement</h3>
                            <p className='text-justify text-md'>In the development of my "Personal Portfolio," a notable achievement was the creation of a media platform that effectively showcases the projects I've worked on. The challenge lay in presenting each project in an engaging yet informative manner. Through careful design and curation, I successfully crafted a showcase that combines visually appealing elements with detailed descriptions. This achievement not only highlights my technical skills but also demonstrates my ability to communicate complex concepts in an accessible and captivating way, providing visitors with a comprehensive understanding of the projects in a visually compelling format.</p>
                        </div>

                        <div className='pt-5 flex gap-1'>
                            <h3 className='text-md font-semibold text-red-600'>Role : </h3>
                            <h3 className='text-md font-semibold text-black'>Fullstack Website Developer</h3>
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

export default PersonalPortofolioWeb;
