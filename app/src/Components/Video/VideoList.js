import React from 'react';
import VideoListItem from './VideoListItems'

const VideoList = ({videos, onVideoSelect}) => {
  if (!videos) {
    return <div>Loading...</div>;
  }
  const videoItems = videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={ onVideoSelect }
        key={video.etag}
        video={video}
      />
  );
  });

  return (
    <ul className="col-md-4 list-group">
      { videoItems }
    </ul>
  );
}

export default VideoList;   