export interface Video {
  id: number;
  title: string;
  image_url: string
  release_year: number
  artist: string
  genre_id: number
  genre?: string
}

export interface Genre {
  id: number;
  name: string
}

export interface VideosData {
  genres: Genre[]
  videos: Video[]
}

export function parseData(data: VideosData) {

  const genres = new Map(data.genres.map(genre => [genre.id, genre.name]));
  const years: number[] = [];
  const videos: Video[] = [];

  data.videos.forEach((video) => {
    years.push(video.release_year)
    videos.push({ ...video, genre: genres.get(video.genre_id) })
  })
  return {
    genres,
    years,
    videos
  }

}

export function getFilteredVideos(videos: Video[] | undefined, filter: string | undefined, year: number | undefined, genre: string | undefined): Video[] {
  let filtered = videos;
  if (filter) {
    const filterLowerCase = filter.toLowerCase()
    filtered = filtered?.filter(video => String(video.title).toLowerCase().includes(filterLowerCase) || video.artist.toLowerCase().includes(filterLowerCase))
  }

  if (year) {
    filtered = filtered?.filter(video => video.release_year === year)
  }

  if (genre) {
    filtered = filtered?.filter(video => video.genre?.toLowerCase().includes(genre.toLowerCase()))
  }

  return filtered || []

}

export const debounce = (func: any) => {
  let timer: number | null;
  return function (...args: any) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      timer = null;
      func(...args);
    }, 300);
  };
};
