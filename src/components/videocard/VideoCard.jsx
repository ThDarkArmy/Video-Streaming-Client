import React from "react";

const VideoCard = ({ videoData }) => {
  return (
    <div className="video">
      <h2>Video</h2>
      <img src={videoData.thumbnailPath} className="thumbnail" alt="video" />
    </div>
  );
};

export default VideoCard;
