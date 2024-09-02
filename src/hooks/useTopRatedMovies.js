// Popular Movie api 호출
import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchTopRatedMovies = () => {
  return api.get(`/movie/top_rated`); // baseURL 제외
};

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-toprate"],
    queryFn: fetchTopRatedMovies,
    select: (result) => result.data, // data만 가져오기
  });
};
