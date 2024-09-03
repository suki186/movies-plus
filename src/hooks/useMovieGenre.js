// Movie Genre api 호출
import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieGenre = () => {
  return api.get(`/genre/movie/list`); // baseURL 제외
};

export const useMovieGenreQuery = () => {
  return useQuery({
    queryKey: ["movie-genre"],
    queryFn: fetchMovieGenre,
    select: (result) => result.data.genres, // data 중 genres만 가져오기
    staleTime: 300000, // 5분마다 호출
  });
};
