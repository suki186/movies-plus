// Recommend Movie api 호출
import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchRecommendMovies = (id) => {
  return api.get(`/movie/${id}/recommendations`); // baseURL 제외
};

export const useRecommendMoviesQuery = ({ id }) => {
  return useQuery({
    queryKey: ["movie-recommend", { id }],
    queryFn: () => fetchRecommendMovies(id),
    select: (result) => result.data, // data만 가져오기
  });
};
