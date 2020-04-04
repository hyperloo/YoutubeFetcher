import React from "react";
import "./VideoItem.css";

class VideoItem extends React.Component {
  Cardi() {
    //console.log(this.props.pos);
    if (this.props.pos === "home") {
      return (
        <div
          className="ui card"
          style={{
            cursor: "pointer"
          }}
          onClick={() => this.props.onVideoSelect(this.props.video)}
        >
          <div className="image">
            <img
              className=""
              alt={this.props.title}
              src={this.props.video.snippet.thumbnails.medium.url}
            />
          </div>
          <div className="content">
            <div className="header">
              {this.props.dec}
              <br />
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
                    alt={this.props.video.snippet.channelTitle}
                    src={`https://robohash.org/${this.props.video.snippet.channelTitle} `}
                  />
                </div>
                <p style={{ marginLeft: "15px" }}>{this.props.channel}</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="item video-item"
          style={{
            cursor: "pointer"
          }}
          onClick={() => this.props.onVideoSelect(this.props.video)}
        >
          <img
            className="ui image"
            alt={this.props.title}
            src={this.props.video.snippet.thumbnails.medium.url}
          />
          <div className="content">
            <div className="header">
              {this.props.dec}
              <br />
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
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%"
                  }}
                >
                  <img
                    className="avatar image"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%"
                    }}
                    alt={this.props.video.snippet.channelTitle}
                    src={`https://robohash.org/${this.props.video.id.videoId} `}
                  />
                </div>
                <p style={{ marginLeft: "10px" }}>{this.props.channel}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  render() {
    return this.Cardi();
  }
}

export default VideoItem;
