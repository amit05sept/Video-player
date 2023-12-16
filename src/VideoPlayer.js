import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './VideoPlayer.css';

const VideoPlayer = ({ apiKey }) => {
  const videoId ='B_I-JMKzAHA'; // change the ID here 
  const [videoData, setVideoData] = useState(null);
  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`
        );
        setVideoData(response.data.items[0]);
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    if (videoId) {
      fetchVideoData();
    }
  }, [videoId, apiKey]);

  if (!videoData) {
    return (
      <div>

      </div>
    );
  }

  const { snippet } = videoData;
  const videoTitle = snippet.title;
  const videoEmbedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
    <div className='vidoContainer'>
      <h2>{videoTitle}</h2>
      <div className="video-wrapper">
        <iframe
          title={videoTitle}
          width="800"
          height="450"
          src={videoEmbedUrl}
          allowFullScreen
        ></iframe>
      </div>
    </div>
    </div>
  );
};

export default VideoPlayer;
