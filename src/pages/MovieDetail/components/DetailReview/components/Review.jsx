import React, { useState } from "react";
import "./Review.css";

const Review = ({ author, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // '더보기' 버튼 클릭 시 호출되는 함수
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="review-container">
      <div className="author">{author}</div>
      <div className={`content ${isExpanded ? "expanded" : "collapsed"}`}>
        {content}
      </div>
      {content.length > 150 && (
        <button className="toggle-button" onClick={handleToggle}>
          {isExpanded ? "접기" : "더보기"}
        </button>
      )}
    </div>
  );
};

export default Review;
