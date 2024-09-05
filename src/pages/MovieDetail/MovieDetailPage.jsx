import React from "react";
import "./MovieDetailPage.css";
import { useParams } from "react-router-dom";
import {
  Spinner,
  Alert,
  Container,
  Row,
  Col,
  Button,
  Badge,
} from "react-bootstrap";

import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import DetailInfo from "./components/DetailInfo/DetailInfo";

import nineteen from "../../media/nineteen.png";
import twelve from "../../media/twelve.png";
import noPoster2 from "../../media/noPoster2.png";
import cc from "../../media/cc.png";
import hd from "../../media/hd.png";

const MovieDetailPage = () => {
  const id = useParams();
  const { data, isLoading, isError, error } = useMovieDetailQuery(id);
  console.log("Data", data);

  const imgSrc = data?.adult ? nineteen : twelve;

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
    <div>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="background">
              {data?.backdrop_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
                  alt={data.title}
                  className="detail-poster"
                />
              ) : (
                // backdrop_path가 없는 경우
                <img
                  src={noPoster2}
                  alt={data.title}
                  className="detail-poster"
                />
              )}

              <div className="information">
                <h1>{data?.title}</h1>
                <div className="card-adult">
                  <img src={imgSrc} alt={data?.adult ? "19" : "All"} />
                  <img src={cc} alt="cc" />
                  <img src={hd} alt="hd" />
                </div>
                <div className="detail-info">
                  <p className="detail-item">
                    {data?.release_date.slice(0, 7)}
                  </p>
                  <p className="detail-item">{data?.runtime}분</p>

                  <p className="movie-genre">
                    {data?.genres.map((genre) => (
                      <Badge
                        key={genre.id}
                        bg="warning"
                        text="black"
                        className="detail-genre"
                      >
                        {genre.name}
                      </Badge>
                    ))}
                  </p>
                </div>
                <div className="detail-tagline">{data?.tagline}</div>

                <div className="detail-btn">
                  <Button variant="light">▶ 예고편</Button>
                  <Button variant="secondary" className="jjim">
                    +
                  </Button>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={12}>
            <DetailInfo id={id} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetailPage;
