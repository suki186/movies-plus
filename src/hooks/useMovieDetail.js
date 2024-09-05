// Movie Detail info api 호출
import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieDetail = (id) => {
  return api.get(`/movie/${id}`); // baseURL 제외
};

export const useMovieDetailQuery = ({ id }) => {
  return useQuery({
    queryKey: ["movie-detail", { id }],
    queryFn: () => fetchMovieDetail(id),
    select: (result) => result.data, // data만 가져오기
  });
};
