import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';

function Main({ searchResult }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [searchResult]);

  const fetchData = async () => {
    try {
      let response;

      if(searchResult) {
       response = await axios.post("/search", {
        term: searchResult
       });
      } else {
        response = await axios.get("/thumbnail");
      }

      const videoIds = response.data.video_Ids;
      const thumbnailUrls = response.data.thumbnailUrls;

      const associatedData = videoIds.map((videoId, index) => ({
        videoId,
        thumbnailUrl: thumbnailUrls[index]
      }));

      setData(associatedData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="main">
      <div id="content">
        <ul>
          {data.map((item, index) => (
            <li>
              <YouTube videoId={item.videoId}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Main;
