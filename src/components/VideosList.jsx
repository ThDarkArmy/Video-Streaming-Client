import React, { useEffect } from "react";
import VideoCardContainer from "./videocard/VideoCardContainer";

const Videos = (props) => {
  console.log("fetch",props.fetchAllVideos())
  useEffect(() => {
    props.fetchAllVideos();
    // console.log("USEEFFECT", videos)
    // eslint-disable-next-line
  }, []);

  return (
    <div className="videos">
      {props.videos}
      {console.log("comp", props.videos)}
      {props.videos.map((video) => (
        <VideoCardContainer key={video.description} videoData={video} />
      ))}
    </div>
  );
};

export default Videos;
