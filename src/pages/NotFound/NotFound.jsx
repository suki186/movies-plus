import "./NotFound.css";
import React from "react";

const NotFound = () => {
  return (
    <div className="not-found">
      <img
        alt="error img"
        id="notFound-img"
        src="https://cdn-icons-png.flaticon.com/128/4539/4539472.png"
      />
      <div id="notFound-error">404 NOT FOUND</div>
      <div id="notFound-msg">존재하지 않는 페이지입니다!</div>
    </div>
  );
};

export default NotFound;
