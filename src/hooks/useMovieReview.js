// Movie Review api 호출
import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieReview = (id) => {
  return api.get(`/movie/${id}/reviews`); // baseURL 제외
};

export const useMovieReviewQuery = ({ id }) => {
  return useQuery({
    queryKey: ["movie-review", { id }],
    queryFn: () => fetchMovieReview(id),
    select: (result) => result.data, // data만 가져오기
  });
};
