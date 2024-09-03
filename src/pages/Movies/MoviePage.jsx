import React from "react";
import "./MoviePage.css";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";

// 경로 2가지
// 1. Nav바에서 "영화" 클릭 -> popularMovie 보여주기
// 2. keyword 검색 -> keyword 들어있는 영화 보여주기

const MoviePage = () => {
  const [query /*setQuery*/] = useSearchParams(); // url에 있는 q 읽어오기
  const keyword = query.get("q");

  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword });
  console.log("Data", data);

  if (isLoading) {
    // 로딩스피너
    return (
      <div className="container">
        <Spinner
          animation="border"
          variant="danger"
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
    <Container>
      <Row>
        <Col xs={12} lg={4}>
          filter
        </Col>
        <Col xs={12} lg={8}>
          <Row>
            {data?.results.map((movie, index) => (
              <Col key={index} xs={6} sm={4}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
