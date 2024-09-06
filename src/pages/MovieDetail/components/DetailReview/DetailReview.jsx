import React, { useState } from "react";
import { Spinner, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useMovieReviewQuery } from "../../../../hooks/useMovieReview";
import Review from "./components/Review";
import "./DetailReview.css";

const DetailReview = () => {
  const id = useParams();
  const { data, isLoading, isError, error } = useMovieReviewQuery(id);
  console.log("rrr", data);

  const [showReviews, setShowReviews] = useState(false);

  const handleShowReviews = () => {
    setShowReviews(!showReviews);
  };

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
      <h1 className="review-h1">
        Reviews{" "}
        <button className="showReviews" onClick={handleShowReviews}>
          {showReviews ? "접기" : "더보기"}
        </button>
      </h1>
      <div>
        {showReviews ? (
          data?.results.length > 0 ? (
            data.results.map((review) => (
              <Review author={review.author} content={review.content} />
            ))
          ) : (
            <p>리뷰가 존재하지 않습니다.</p>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DetailReview;
