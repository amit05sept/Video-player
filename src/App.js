
import React from 'react';
import VideoPlayer from './VideoPlayer';
import './App.css'
const App = () => {
  const videoId = 'B_I-JMKzAHA'; 
  const apiKey = 'AIzaSyABLuGwSZL2PcyaxpXf982eOgOdG4YfjVo'; 

  return (
    <div className="App">
      <VideoPlayer videoId={videoId} apiKey={apiKey} />
    </div>
  );
};

export default App;
