import YOUTUBE_API_KEY from "../config/youtube.js"

var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type:'GET',
    data: {
      part: 'snippet',
      q: options.query, //the string to search for
      maxResults: options.max || 5, //the maximum number of videos to get, which should default to 5
      key: options.key, //an authorized YouTube Browser API key
      type: 'video',
      videoEmbeddable: 'true',
    },
    contentType: 'application/json',
    success: callback || function(input){
      console.log(input.items);
      return input;
    },
    error: function(err) {
      console.log(err)
    }
  });
};

export default searchYouTube;

var info = undefined;