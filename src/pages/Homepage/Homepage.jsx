import React from "react";
import "./Homepage.css";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import TopRatingMovieSlide from "./components/TopRatingMovieSlide/TopRatingMovieSlide";
import UpcomingMovieSlide from "./components/UpcomigMovieSlide/UpcomingMovieSlide";

//1. 배너
//2. 인기있는 영화
//3. 곧 나올 영화
//4. 평점 좋은 영화
//5. 인기있는 시리즈

const Homepage = () => {
  return (
    <div className="homepage">
      <Banner />
      <PopularMovieSlide />
      <UpcomingMovieSlide />
      <TopRatingMovieSlide />
    </div>
  );
};

export default Homepage;
