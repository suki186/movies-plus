// 검색한 영화 api 호출
import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovie = ({ keyword }) => {
  return keyword
    ? api.get(`/search/movie?query=${keyword}`)
    : api.get(`/movie/popular`); // baseURL 제외
};

export const useSearchMovieQuery = ({ keyword }) => {
  return useQuery({
    queryKey: ["movie-search", keyword],
    queryFn: () => fetchSearchMovie({ keyword }),
    select: (result) => result.data, // data만 가져오기
  });
};
