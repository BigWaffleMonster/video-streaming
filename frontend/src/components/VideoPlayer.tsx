import React, { FC } from "react";
import { useLocation } from "react-router-dom";

const VideoPlayer: FC = () => {
  const search = useLocation().search;
  const title = new URLSearchParams(search).get("title");
  const id = new URLSearchParams(search).get("id");

  return (
    <div>
      <video id="videoPlayer" controls autoPlay>
        <source
          src={`http://localhost:5000/play?title=${title}&id=${id}`}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoPlayer;
