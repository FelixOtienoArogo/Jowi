const axios = require('axios');

class ThumbnailController{
    static getStatus(req, res){
        const status = {
            redis: "Active",
            db: "Inactive",
        };
        res.status(200).send(status);
    }
    
    static async getStats(req, res) {
        const stats = {
          users: await dbClient.nbUsers(),
          files: await dbClient.nbFiles(),
        };
        res.status(200).send(stats);
      }
      
      static async getThumbnail(req, res) {
        const API_KEY = 'AIzaSyA5hxN3l1Boxu1M-HIg08UcyDNpx8ZZtIs';
        const API_URL = 'https://www.googleapis.com/youtube/v3/videos';
        const MAX_RESULTS = 5; // Maximum number of videos to retrieve thumbnails for
        const videoIds = ["4SbbPAleuG0", "tuvORKvl9Sg", "0Fc9f-82830", "6IBuqlWcEdI",
"xTxxAgR4N_4", "v42r2GuHrQk", "_MfVBaTAtpw", "4FOqLUYeVBM", "8AVDN7QV_xg"]; // Array of video IDs

      
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
            const videoId  = String(video.id);
            const { url } = video.snippet.thumbnails.medium || video.snippet.thumbnails.default;
            return { videoId, url };
          });
          const thumbnailUrls = thumbnails.map(thumbnail => thumbnail.url);
          const video_Ids = thumbnails.map(thumbnail => thumbnail.videoId);

          res.status(200).send({ thumbnailUrls, video_Ids });
        } catch (error) {
            res.status(404).send({ error });
          console.error('Error retrieving video thumbnails:', error);
          return [];
        }
      }
}

export default ThumbnailController;
