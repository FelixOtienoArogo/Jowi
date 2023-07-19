const axios = require('axios');

// Function to retrieve high-resolution thumbnails for YouTube videos
async function getVideoThumbnails(videoIds) {
  const API_KEY = 'AIzaSyA5hxN3l1Boxu1M-HIg08UcyDNpx8ZZtIs';
  const API_URL = 'https://www.googleapis.com/youtube/v3/videos';
  const MAX_RESULTS = 5; // Maximum number of videos to retrieve thumbnails for

  try {
    const response = await axios.get(API_URL, {
      params: {
        key: API_KEY,
        part: 'snippet',
        id: videoIds.join(','),
        maxResults: MAX_RESULTS
      }
    });

    const thumbnails = response.data.items.map(video => {
      const { videoId } = video.id;
      const { url } = video.snippet.thumbnails.medium || video.snippet.thumbnails.default;
      return { videoId, url };
    });

    return thumbnails;
  } catch (error) {
    console.error('Error retrieving video thumbnails:', error);
    return [];
  }
}

// Usage example
const videoIds = ["4SbbPAleuG0", "tuvORKvl9Sg", "0Fc9f-82830", "6IBuqlWcEdI",
"xTxxAgR4N_4", "v42r2GuHrQk", "_MfVBaTAtpw", "4FOqLUYeVBM", "8AVDN7QV_xg"]; // Array of video IDs

getVideoThumbnails(videoIds)
  .then(thumbnails => {
    console.log('Video Thumbnails:');
    const thumbnailUrls = thumbnails.map(thumbnail => thumbnail.url);
    console.log(thumbnailUrls);
  })
  .catch(error => {
    console.error('Error:', error);
  });
