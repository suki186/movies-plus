// Recommend Movie api 호출
import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchRecommendMovies = () => {
  return api.get(`/movie/get-movie-recommendations`); // baseURL 제외
};

export const useRecommendMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-recommend"],
    queryFn: fetchRecommendMovies,
    select: (result) => result.data, // data만 가져오기
  });
};
