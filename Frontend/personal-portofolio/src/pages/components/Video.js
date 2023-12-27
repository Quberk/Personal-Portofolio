import React from "react";

const Video = ({ video_path, poster_path }) => {
    return (
        <div className="relative">
            <video
                className="w-full object-cover border border-blue-500 border-4 shadow-md-red"
                controls
                controlsList="nodownload"
                poster = {poster_path}
            >
                <source src = {video_path} type="video/mp4" />
                Maaf, browser Anda tidak mendukung tag video.
            </video>
        </div>
    );
  };

export default Video;