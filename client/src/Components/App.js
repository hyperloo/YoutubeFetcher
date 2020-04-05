import React from "react";
import Youtube, { baseParams } from "../api/Youtube";
import SearchBar from "./SearchBar";
import VideosList from "./VideoList";
import VideoDetails from "./VideoDetails";

class App extends React.Component {
  state = { videos: [], selectedVideo: null, pos: "home", size: "small" };

  componentDidMount() {
    window.addEventListener("load", this.atHome);
  }
  atHome = async () => {
    const response = await Youtube.get("/search", {
      params: { ...baseParams, q: "" },
    });
    //console.log(response.data.items);
    this.setState({
      videos: response.data.items,
      pos: "home",
      size: "small",
      selectedVideo: null,
    });
  };
  onSearchSubmit = async (term) => {
    const response =
      term === ""
        ? await Youtube.get("/search", {
            params: {
              ...baseParams,
              order: "date",
              channelId: this.state.selectedVideo.snippet.channelId,
            },
          })
        : await Youtube.get("/search", {
            params: { ...baseParams, q: term },
          });

    //console.log(response.data.items);
    this.setState({
      selectedVideo: null,
      videos: response.data.items,
      pos: "search",
      size: "small",
    });
  };

  onVideoSelect = async (video) => {
    await this.setState({
      selectedVideo: video,
      pos:
        video.id.kind === "youtube#channel" && this.state.pos !== "channel"
          ? "channel"
          : "view",
    });
    if (this.state.pos === "channel") this.onSearchSubmit("");
    window.scrollTo(0, 0);
  };

  onChangeSize = () => {
    this.state.size === "small"
      ? this.setState({ size: "wide" })
      : this.setState({ size: "small" });
  };
  render() {
    return (
      <div
        className="ui container"
        style={{ marginTop: "10px", height: "100%" }}
      >
        <div style={{ display: "flex", padding: "10px" }}>
          <span style={{ fontSize: "50px", paddingTop: "28px" }}>
            <button
              className="ui inverted red button"
              onClick={this.atHome}
              style={{ fontSize: "20px", marginLeft: "30px" }}
            >
              <i className="large play circle icon"></i>MYTube
            </button>
          </span>
          <SearchBar
            style={{ psoition: "absolute" }}
            onSubmit={this.onSearchSubmit}
            pos={this.state.pos}
          />
        </div>
        <div className="ui segment center aligned">
          Scroll Down For APP Info.....
        </div>
        <div className="ui grid">
          <div className="ui row">
            <div
              className={
                this.state.size === "wide"
                  ? "sixteen wide column"
                  : "eleven wide column"
              }
              style={
                this.state.pos === "view"
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <VideoDetails video={this.state.selectedVideo} />
              <div className="ui buttons" style={{ margin: "20px 0px" }}>
                <button
                  onClick={() => this.setState({ size: "small" })}
                  className="ui button"
                >
                  Small
                </button>
                <div className="or"></div>
                <button
                  onClick={() => this.setState({ size: "wide" })}
                  className="ui positive button"
                >
                  Large
                </button>
              </div>
            </div>
            {this.state.pos === "home" || this.state.pos === "channel" ? (
              <div
                style={{
                  height: `${window.innerHeight * 0.8}px`,
                  overflow: "scroll",
                  scrollbarWidth: "none",
                  border: "1px solid #e1dfdf",
                  marginTop: "15px",
                }}
                className="sixteen wide column"
              >
                <VideosList
                  videos={this.state.videos}
                  onVideoSelect={this.onVideoSelect}
                  pos={this.state.pos}
                />
              </div>
            ) : (
              <div
                style={{
                  height: `${window.innerHeight * 0.8}px`,
                  overflow: "scroll",
                  scrollbarWidth: "none",
                  border: "1px solid #e1dfdf",
                  marginTop: "15px",
                }}
                className={
                  this.state.pos === "search" || this.state.size === "wide"
                    ? "sixteen wide column"
                    : "five wide column"
                }
              >
                <VideosList
                  videos={this.state.videos}
                  onVideoSelect={this.onVideoSelect}
                  pos={this.state.pos}
                />
              </div>
            )}
          </div>
          <div className="ui row">
            <div className="ui segment">
              <div className="ui large header">Description of the app</div>
              <div class="ui divider"></div>
              <div className="ui medium header">Developed By Himanshu</div>
              <br />
              <div className="ui segment">
                This App is a React app which fetches data from "YouTube Data
                API v3" which is a Google's free API.
                <br />
                This app has following features:
                <br />
                1. It fetches a list of 15 YouTube's videos at the homepage. 2.
                It has a search bar which sends request to the API about the
                search and fetches results and displays them as a list of
                Results with "Thumbnail", "Video Title" & "Channel Name". 3. If
                the clicked result is a video, then the video plays in a
                "iframe" and there is a sidebar contains more videos.
                <br />
                a. It also has a feature of changing Screen Size (Small / Large)
                by just clicking the buttons.
                <br />
                4. If the clicked result is a channel result, then it fetches
                the channel's latest videos and one can the choose from it.
                <br />
                <br />
                <b>Note</b>: This app is not good at responsiveness to the
                screen as it was a learning app.
                <br />
                Explore more.....
                <br />
                <div class="content">
                  Portfolio ...
                  <a href="http://tekin2.tk/" target="_blank">
                    {" "}
                    http://tekhin2.tk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
