import VideoList from "./VideoList.js";
import exampleVideoData from "../data/exampleVideoData.js";
import VideoPlayer from "./VideoPlayer.js";
import Search from "./Search.js";
import YOUTUBE_API_KEY from "../config/youtube.js"
import searchYouTube from "../lib/searchYouTube.js"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: 'https://www.youtube.com/embed/dwV04XuiWq4',
      currentTitle:'First Video',
      currentDescription:'First Description',
      videos: exampleVideoData,
      realVideos: searchYouTube({q:'cats',maxResults:10,key:YOUTUBE_API_KEY}),
    }
    this.onClick = this.onClick.bind(this);
  }
  onClick(video, title, description) {
    this.setState({currentVideo: 'https://www.youtube.com/embed/' + video,
     currentTitle: title,
     currentDescription: description,
});
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search search={this.state.realVideos}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer currentVideo={this.state.currentVideo} currentTitle={this.state.currentTitle} currentDescription={this.state.currentDescription}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videos} onClickFunction={this.onClick} /></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App;


{/* <div><h5><em>videolist</em> view goes here</h5></div> */ }

  // var App = () => (
  //   <div>
  //     <nav className="navbar">
  //       <div className="col-md-6 offset-md-3">
  //         <div><h5><em>search</em> view goes here</h5></div>
  //       </div>
  //     </nav>
  //     <div className="row">
  //       <div className="col-md-7">
  //         <div><VideoPlayer videos={exampleVideoData} /></div>
  //       </div>
  //       <div className="col-md-5">
  //         <div><VideoList videos={exampleVideoData} /></div>
  //       </div>
  //     </div>
  //   </div>
  // );