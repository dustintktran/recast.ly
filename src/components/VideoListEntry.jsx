import exampleVideoData from "../data/exampleVideoData.js";
import VideoList from "./VideoList.js"
import VideoPlayer from "./VideoPlayer.js";
import App from "./App.js";
import searchYouTube from "../lib/searchYouTube.js"
import Search from "./Search.js";

var VideoListEntry = (props) => (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img onClick={function(){props.onClickFunction(props.video.id.videoId,props.video.snippet.title, props.video.snippet.description)}} className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div onClick={function(){props.onClickFunction(props.video.id.videoId,props.video.snippet.title, props.video.snippet.description)}} className="video-list-entry-title">{props.video.snippet.title}</div>
      <div className="video-list-entry-detail">{props.video.snippet.description}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
