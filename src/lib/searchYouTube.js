var searchYouTube = (options, callback) => {
  console.log('kusadfhk');
  return $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type:'GET',
    data: {
      q: options.query, //the string to search for
      maxResults: options.max || 5, //the maximum number of videos to get, which should default to 5
      key: options.key //an authorized YouTube Browser API key
    },
    contentType: 'application/json',
    success: callback,
  });
};

export default searchYouTube;

