import React from "react";
import "./Banner.css";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import Alert from "react-bootstrap/Alert";
import { Carousel, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log("Data:", data);

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
    <div className="carousel">
      <Carousel indicators={false}>
        {data?.results.slice(0, 5).map((item, index) => (
          <Carousel.Item key={index} className="carousel-item">
            <div
              className="banner"
              style={{
                backgroundImage: `url(https://media.themoviedb.org/t/p/original${item.poster_path})`,
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
  );
};

export default Banner;
