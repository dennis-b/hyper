import { useQuery } from "react-query";
import { parseData } from "../App.utils";

const dataUrl = "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/main/data/dataset.json";

export function useVideosData() {
  const { data, isLoading } = useQuery(
    "videos",
    async () => {
      const rawData = await fetch(dataUrl).then(res => res.json());
      return parseData(rawData);
    }
  );

  return {
    data,
    isLoading
  }
}
