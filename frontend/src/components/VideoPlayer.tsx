import React from "react";

export default function VideoPlayer(id: string, title: string) {
  return (
    <div>
      <video id="videoPlayer" controls autoPlay>
        <source
          src={`http://localhost:8080/play?title=${title}&id=${id}`}
          type="video/mp4"
        />
      </video>
    </div>
  );
}
