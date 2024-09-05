// Movie Youtube info api 호출
import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieYoutube = (id) => {
  return api.get(`/movie/${id}/videos`); // baseURL 제외
};

export const useMovieYoutubeQuery = ({ id }) => {
  return useQuery({
    queryKey: ["movie-youtube", { id }],
    queryFn: () => fetchMovieYoutube(id),
    select: (result) => result.data, // data만 가져오기
  });
};
