import React from "react";
import "../PopularMovieSlide/PopularMovieSlide.css";
import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRatedMovies";
import { Alert } from "react-bootstrap";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const TopRatingMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

  if (isLoading) {
    // 로딩스피너
    return <h1>Loading...</h1>;
  }
  if (isError) {
    // 에러 메세지
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      <h3>놓칠 수 없는 히트 영화 모음</h3>
      <Carousel
        draggable={false}
        infinite={false} // 무한반복
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
      >
        {data.results?.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default TopRatingMovieSlide;
