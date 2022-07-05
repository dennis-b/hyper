import React, { useState } from 'react';
import { Bars } from "react-loader-spinner";
import { StyledContent, StyledMessage } from "../App.styled";
import { useVideosData } from "../hooks/useVideosData";
import { VideoList } from "./VideoList";
import { ToolBar } from "./ToolBar";
import { getFilteredVideos } from "../App.utils";

export const Content = () => {

  const [filter, setFilter] = useState('')
  const [year, setYear] = useState<any>()
  const [genre, setGenre] = useState<any>()
  const { isLoading, data } = useVideosData()

  if (isLoading) {
    return (<Bars width="100" color="blue"/>)
  }

  const filtered = getFilteredVideos(data?.videos, filter, year?.value, genre?.value)

  return (
    <>
      <ToolBar
        years={data?.years}
        genres={data?.genres && Array.from(data?.genres?.values())}
        onFilter={setFilter}
        filter={filter}
        genre={genre}
        onGenreChange={setGenre}
        onYearChange={setYear}
        year={year}
      />
      <StyledContent>
        {filtered?.length > 0 && <VideoList videos={filtered}/>}
        {!filtered?.length && <StyledMessage>No videos were found.</StyledMessage>}
      </StyledContent>
    </>
  );
};

