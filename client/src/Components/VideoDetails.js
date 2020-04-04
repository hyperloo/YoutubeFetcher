import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) return <div>Loading...</div>;
  return (
    <div>
      <div className="ui embed">
        <iframe
          title="video player"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>

        <div
          style={{
            textAlign: "left",
            fontSize: "13px",
            color: "grey",
            display: "flex",
            alignItems: "center"
          }}
        >
          <div
            style={{
              margin: "10px 0px",
              backgroundColor: "black",
              width: "50px",
              height: "50px",
              borderRadius: "50%"
            }}
          >
            <img
              className="avatar image"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%"
              }}
              alt={video.snippet.channelTitle}
              key={video.snippet.videoId}
              src={`https://robohash.org/${video.snippet.channelTitle} `}
            />
          </div>
          <p style={{ marginLeft: "15px", color: "DarkGray" }}>
            {video.snippet.channelTitle}
          </p>
        </div>
        <p style={{ color: "grey" }}>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
