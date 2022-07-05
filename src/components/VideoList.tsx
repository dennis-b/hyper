import React from 'react';
import { StyledBox } from "../App.styled";
import { VideoCard } from "./VideoCard";
import { Video } from "../App.utils";

export const VideoList = ({ videos }: { videos?: Video[] }) => {
  return (
    <StyledBox
      mt='md'
      display='flex'
      flexWrap='wrap'
      colGap='sm'
      rowGap='sm'
      pl='md'
      pr='sm'
      pb='sm'
    >
      {videos?.map((video: Video) => (<VideoCard key={video.id} video={video}/>))}
    </StyledBox>
  );
};

