import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API_URL } from "../utils/const";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Loader } from "lucide-react";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEO_API_URL);
    const data = await response.json();
    setVideos(data.items);
    setIsLoading(false);
  };
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-full">
        <Loader />
      </div>
    );
  return (
    <div className="flex flex-wrap overflow-scroll">
      <AdVideoCard info={videos[0]} />
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
