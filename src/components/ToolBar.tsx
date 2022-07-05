import React, { useCallback, useMemo } from 'react';
import { StyledBox, StyledInput } from "../App.styled";
import Select from "react-select";
import { debounce } from "../App.utils";

interface TollBarProps {
  years?: number[];
  year?: number;
  genres?: string[];
  genre: string;
  filter: string;
  onFilter: (val: string) => void;
  onYearChange: (val: any) => void;
  onGenreChange: (val: any) => void;
}

export const ToolBar = (
  {
    year,
    years,
    genres,
    onFilter,
    onYearChange,
    onGenreChange,
    filter,
    genre
  }: TollBarProps) => {


  const onFilterChange = (e: React.FormEvent<HTMLInputElement>) => {
    onFilter(e.currentTarget?.value)
  };

  const yearOptions: any[] = useMemo(() => Array.from(new Set(years)).sort().map(year => ({
    label: year,
    value: year
  })), [years]);

  const genresOptions: any[] = useMemo(() => Array.from(new Set(genres)).sort().map(genre => ({
    label: genre,
    value: genre
  })), [genres]);

  return (
    <StyledBox
      mb='md'
      display='flex'
      width='100%'
      justifyContent='center'

    >
      <StyledBox>
        <StyledInput
          type='text'
          value={filter}
          onChange={onFilterChange}
          placeholder='Search Video'
        />
      </StyledBox>

      <StyledBox ml='md' width='25%'>
        <Select
          placeholder='Search by Year ...'
          value={year}
          name="year"
          options={yearOptions}
          onChange={onYearChange}
          isClearable
        />
      </StyledBox>

      <StyledBox ml='md' width='25%'>
        <Select
          placeholder='Search by Genre ...'
          value={genre}
          name="year"
          options={genresOptions}
          onChange={onGenreChange}
          isClearable
        />
      </StyledBox>
    </StyledBox>
  );
};

