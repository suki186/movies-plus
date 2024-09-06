import React, { useState } from "react";
import "./MovieDetailPage.css";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import {
  Spinner,
  Alert,
  Container,
  Row,
  Col,
  Button,
  Badge,
  Modal,
} from "react-bootstrap";

import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import { useMovieYoutubeQuery } from "../../hooks/useMovieYoutube";
import DetailInfo from "./components/DetailInfo/DetailInfo";
import DetailReview from "./components/DetailReview/DetailReview";
import RecommendMovie from "./components/RecommedMovie/RecommendMovie";

import nineteen from "../../media/nineteen.png";
import twelve from "../../media/twelve.png";
import noPoster2 from "../../media/noPoster2.png";
import cc from "../../media/cc.png";
import hd from "../../media/hd.png";

function MyVerticallyCenteredModal(props) {
  const opts = {
    height: "300",
    width: "470",
  };

  return (
    <Modal
      {...props}
      className="custom-modal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
          YouTube 예고편
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="youtube-video-wrapper">
          <YouTube
            videoId={props.videoId}
            opts={opts}
            className="youtube-video"
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

const MovieDetailPage = () => {
  const id = useParams();
  const { data, isLoading, isError, error } = useMovieDetailQuery(id);
  //console.log("Data", data);
  const { data: youtubeData } = useMovieYoutubeQuery(id);
  //console.log("yyy", youtubeData);

  const imgSrc = data?.adult ? nineteen : twelve;
  const [modalShow, setModalShow] = useState(false);
  const videoId = youtubeData?.results?.[0]?.key;

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
                  <Button variant="light" onClick={() => setModalShow(true)}>
                    ▶ 예고편
                  </Button>
                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    videoId={videoId}
                  />
                  <Button variant="secondary" className="jjim">
                    +
                  </Button>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={12}>
            {/* 상세정보 */}
            <DetailInfo id={id} />
            {/* 추천영화 */}
            <RecommendMovie />
            {/* 리뷰 */}
            <DetailReview />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetailPage;
