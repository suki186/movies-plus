import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import { Alert, Spinner } from "react-bootstrap";

import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    // 로딩스피너
    return (
      <div>
        <Spinner
          animation="border"
          variant="info"
          style={{ width: "3rem", height: "3rem" }}
        />
      </div>
    );
  }
  if (isError) {
    // 에러 메세지
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlider
        title="오늘 밤 뭐 볼까?"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default PopularMovieSlide;
