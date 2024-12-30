import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="m-4 p-2 w-64 hover:shadow-lg">
      <img
        className="rounded-lg hover:rounded-none"
        src={thumbnails.medium.url}
        alt="video"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

const withBorder = (WrappedComponent) => {
  return (props) => {
    return (
      <div className="border border-blue-400">
        <WrappedComponent {...props} />
      </div>
    );
  };
};

const AdVideoCard = withBorder(VideoCard);

export { AdVideoCard };

export default VideoCard;
