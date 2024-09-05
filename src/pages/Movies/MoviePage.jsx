import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MoviePage.css";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";

// 경로 2가지
// 1. Nav바에서 "영화" 클릭 -> popularMovie 보여주기
// 2. keyword 검색 -> keyword 들어있는 영화 보여주기

const MoviePage = () => {
  const navigate = useNavigate();

  const [query /*setQuery*/] = useSearchParams(); // url에 있는 q 읽어오기
  const [page, setPage] = useState(1);

  const keyword = query.get("q");

  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });
  console.log("Data", data);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  // 검색을 다시하면 페이지가 1로
  useEffect(() => {
    setPage(1);
  }, [keyword]);

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

  if (data?.results.length === 0) {
    // 검색 결과가 없는 경우
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <div className="no-results">검색 결과가 없습니다.</div>
            <button onClick={() => navigate("/movies")} className="retry-btn">
              인기 영화 보러가기
            </button>
          </Col>
        </Row>
      </Container>
    );
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

          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            pageCount={data?.total_pages} // 전체페이지
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page - 1}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
