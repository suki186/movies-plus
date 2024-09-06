import React from "react";
import "./DetailInfo.css";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { useMovieDetailQuery } from "../../../../hooks/useMovieDetail";

import nineteen from "../../../../media/nineteen.png";
import twelve from "../../../../media/twelve.png";

const DetailInfo = ({ id }) => {
  const { data, isLoading, isError, error } = useMovieDetailQuery(id);
  const imgSrc = data?.adult ? nineteen : twelve;

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
    <Container>
      <Row>
        <Col xs={12} sm={6}>
          <h1>{data?.title}</h1>
          <div className="overview">{data?.overview}</div>
        </Col>

        <Col xs={12} sm={6}>
          <table className="detail-table">
            <tr>
              <td>런타임</td>
              <td>{data?.runtime} 분</td>
            </tr>
            <tr>
              <td>개봉일</td>
              <td>{data?.release_date}</td>
            </tr>
            <tr>
              <td>장르</td>
              <td>
                {data?.genres.map((genre, index) => (
                  <span key={genre.id}>
                    {genre.name}
                    {index < data.genres.length - 1 ? ", " : ""}
                  </span>
                ))}
              </td>
            </tr>
            <tr>
              <td>평점</td>
              <td>{data?.vote_average.toFixed(1)}</td>
            </tr>
            <tr>
              <td>관람 등급</td>
              <td>
                <img
                  src={imgSrc}
                  alt={data?.adult ? "19" : "All"}
                  width="20"
                  height="20"
                />
              </td>
            </tr>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailInfo;
