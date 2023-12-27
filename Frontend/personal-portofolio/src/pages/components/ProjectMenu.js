import React from "react";
import ImageWithText from "./ImageWithText";



const ProjectMenu = ({ title, width, height, imageUrl, altText, caption, linkTo }) => {
    return (

        <div className={'bg-black transition-transform duration-300 ease-in-out hover:translate-y-[-10px]'} style={{ width: width }}>
            
            <div className="w-fulll">
              <br/>
                <p className="h-10 text-lg font-semibold text-yellow-500 text-center">{title}</p>
            </div>

            <ImageWithText
            
            width={width}
            height={height}
            linkTo={linkTo}
            imageUrl={imageUrl}
            altText={altText}
            caption={caption}
            blur={0}
            brightness={1}>
                
            </ImageWithText>
      </div>
  
    );
  };
  
export default ProjectMenu;