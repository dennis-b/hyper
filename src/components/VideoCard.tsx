import React from 'react';
import { Video } from "../App.utils";
import { StyleCard, StylesVideoCardImage } from "../App.styled";
import { VideoCardFooter } from "./VideoCardFooter";

export const VideoCard = ({ video }: { video: Video }) => {
  return (
    <StyleCard>
      <StylesVideoCardImage src={video.image_url}/>
      <VideoCardFooter video={video}/>
    </StyleCard>
  );
};

