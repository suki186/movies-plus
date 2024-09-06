// 검색한 영화 api 호출
import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovie = ({ keyword, page, genre }) => {
  return keyword
    ? api.get(
        `/search/movie?query=${keyword}&page=${page}${
          genre ? `&genre=${genre}` : ""
        }`
      )
    : api.get(`/movie/popular?page=${page}${genre ? `&genre=${genre}` : ""}`); // baseURL 제외
};

export const useSearchMovieQuery = ({ keyword, page, genre }) => {
  return useQuery({
    queryKey: ["movie-search", { keyword, page, genre }],
    queryFn: () => fetchSearchMovie({ keyword, page, genre }),
    select: (result) => result.data, // data만 가져오기
  });
};
