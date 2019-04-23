import searchYouTube from "../lib/searchYouTube.js"
import YOUTUBE_API_KEY from "../config/youtube.js"

var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button onClick={props.search} className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;


/*  data: {
      q: options.query, //the string to search for
      maxResults: options.max || 5, //the maximum number of videos to get, which should default to 5
      key: options.key //an authorized YouTube Browser API key
    },
    
    */