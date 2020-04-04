import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect, pos }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        onVideoSelect={onVideoSelect}
        dec={video.snippet.title}
        channel={video.snippet.channelTitle}
        video={video}
        key={video.id.videoId}
        pos={pos}
      />
    );
  });
  return (
    <div
      style={
        pos === "home"
          ? {
              marginTop: "15px",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridGap: "0px",
              gridAutoRows: "minmax(100px, auto)",
              justifyItems: "center"
            }
          : { marginTop: "15px" }
      }
      className={pos === "home" ? "ui list" : "ui relaxed divided list"}
    >
      {renderedList}
    </div>
  );
};

export default VideoList;
