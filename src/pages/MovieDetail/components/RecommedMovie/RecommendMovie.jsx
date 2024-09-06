import React from "react";
import { useParams } from "react-router-dom";
import { Spinner, Alert, Container, Row, Col } from "react-bootstrap";
import { useRecommendMoviesQuery } from "../../../../hooks/useRecommendMovies";
import MovieCard from "../../../../common/MovieCard/MovieCard";

const RecommendMovie = () => {
  const id = useParams();
  const { data, isLoading, isError, error } = useRecommendMoviesQuery(id);
  console.log("Recom", data);

  if (isLoading) {
    // 로딩스피너
    return (
      <div className="container">
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
      <h1 style={{ marginLeft: "20px", color: "rgb(61, 183, 204)" }}>추천작</h1>
      <Container>
        <Row>
          {data?.results.slice(0, 6).map((movie, index) => (
            <Col key={index} xs={6} sm={2}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default RecommendMovie;
