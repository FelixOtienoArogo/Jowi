import { storage_v1 } from 'googleapis';
import YTSearch from 'youtube-api-search';

class SearchController{
    static getSearch(req, res){
        const API_KEY = 'AIzaSyA5hxN3l1Boxu1M-HIg08UcyDNpx8ZZtIs';
        const term = req.body.term;
        let state = [];
        try{
        YTSearch({key: API_KEY, term: term}, (videos) => {
            const thumbnails = videos.map(video => {
                const videoId  = String(video.id.videoId);
                const { url } = video.snippet.thumbnails.medium || video.snippet.thumbnails.default;
                return { videoId, url };
              });
              const thumbnailUrls = thumbnails.map(thumbnail => thumbnail.url);
              const video_Ids = thumbnails.map(thumbnail => thumbnail.videoId);

            res.status(200).send({ thumbnailUrls, video_Ids });
        });} catch (error) {
            res.status(404).send({ error });
          console.error('Error searching for the results', error);
          return [];
        }
    }
}

export default SearchController;