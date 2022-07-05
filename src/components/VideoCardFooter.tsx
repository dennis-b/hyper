import React from 'react';
import { Video } from "../App.utils";
import { StyledLabel, StyleVideoCardFooter } from "../App.styled";

export const VideoCardFooter = ({ video }: { video: Video }) => {
  return (
    <StyleVideoCardFooter>
      <StyledLabel>
        {video.title}
      </StyledLabel>
      <StyledLabel>
        {video.artist}
      </StyledLabel>
      <StyledLabel>
        {video.release_year}
      </StyledLabel>
    </StyleVideoCardFooter>
  );
};

