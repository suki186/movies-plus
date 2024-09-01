import React from "react";
import "./Banner.css";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import Alert from "react-bootstrap/Alert";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log("Data:", data);

  if (isLoading) {
    // 로딩스피너
    <h1>Loading...</h1>;
  }
  if (isError) {
    // 에러 메세지
    <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div className="carousel">
      <Carousel indicators={false}>
        {data?.results.slice(0, 10).map((item, index) => (
          <Carousel.Item key={index} className="carousel-item">
            <div
              className="banner"
              style={{
                backgroundImage: `url(https://media.themoviedb.org/t/p/w533_and_h300_bestv2${item.poster_path})`,
              }}
            >
              <div className="banner-text">
                <h1>{item.title}</h1>
                <p id="p-overview">{item.overview}</p>
                <p id="p-date">{item.release_date}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
    // <div
    //   style={{
    //     backgroundImage:
    //       "url(" +
    //       `https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data?.results[0].poster_path}` +
    //       ")",
    //   }}
    //   className="banner"
    // >
    //   <div className="banner-text">
    //     <h1>{data?.results[0].title}</h1>
    //     <p>{data?.results[0].release_date}</p>
    //   </div>
    // </div>
  );
};

export default Banner;
