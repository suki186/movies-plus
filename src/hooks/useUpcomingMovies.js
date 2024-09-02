// Upcoming Movie api 호출
import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchUpcomingMovies = () => {
  return api.get(`/movie/upcoming`); // baseURL 제외
};

export const useUpcomingMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-upcoming"],
    queryFn: fetchUpcomingMovies,
    select: (result) => result.data, // data만 가져오기
  });
};
