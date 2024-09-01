import React from "react";
import "./Homepage.css";
import Banner from "./components/Banner/Banner";

//1. 배너
//2. 인기있는 영화
//3. 평점 좋은 영화
//4. 곧 나올 영화
//5. 추천 영화

const Homepage = () => {
  return (
    <div className="homepage">
      <Banner />
    </div>
  );
};

export default Homepage;
