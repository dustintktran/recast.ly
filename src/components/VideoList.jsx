import exampleVideoData from "../data/exampleVideoData.js";
import VideoListEntry from "./VideoListEntry.js"

var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(item =>
      <VideoListEntry video={item} onClickFunction={props.onClickFunction}/>
    )}
  </div>
);

// var videoClicked = function(videoTitle){
  
// }
// class VideoList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentVideo: 'https://www.youtube.com'
//     }
//     // this.videoClick = this.videoClick.bind(this);
//   }

//   render() {
//     return (
//       <div className="video-list">
//         {this.props.videos.map(item =>
//           <VideoListEntry video={item} />
//         )}
//       </div>
//     );
//   }
// }

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

/* <div><h5><em>videoListEntry</em> view goes here</h5></div>
<div><h5><em>videoListEntry</em> view goes here</h5></div>
<div><h5><em>videoListEntry</em> view goes here</h5></div>
<div><h5><em>videoListEntry</em> view goes here</h5></div>
<div><h5><em>videoListEntry</em> view goes here</h5></div> */