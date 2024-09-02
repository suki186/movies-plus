// Now Playing Movie api 호출
import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchNowPlayingMovies = () => {
  return api.get(`/movie/now_playing`); // baseURL 제외
};

export const useNowPlayingMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-upcoming"],
    queryFn: fetchNowPlayingMovies,
    select: (result) => result.data, // data만 가져오기
  });
};
