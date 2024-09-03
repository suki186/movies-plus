// 영화 하나
import React from "react";
import Badge from "react-bootstrap/Badge";
import "./MovieCard.css";
import nineteen from "../../media/nineteen.png";
import twelve from "../../media/twelve.png";
import date from "../../media/date.png";
import rating from "../../media/rating.png";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

const MovieCard = ({ movie }) => {
  const imgSrc = movie?.adult ? nineteen : twelve;
  const { data: genreData } = useMovieGenreQuery(); // data이름 재정의

  const showGenre = (genreIdList) => {
    if (!genreData) return []; // 데이터가 없다면 보여주지 않기

    // movie의 id들과 id 목록에서 같은 데이터들에 해당하는 name값만 뽑아와서 genreNameList에 배열로 저장.
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w220_and_h330_bestv2${movie?.poster_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h1>{movie?.title}</h1>

        <div className="category">
          {/* id를 장르name으로 바꾼 후 map */}
          {showGenre(movie?.genre_ids).map((id) => (
            <Badge bg="danger">{id}</Badge>
          ))}
        </div>

        <div className="img-info1">
          <img src={date} alt="date" />
          {movie?.release_date?.slice(0, 7)}
        </div>

        <div className="img-info2">
          <img src={rating} alt="vote" />
          {movie?.vote_average?.toFixed(1)}
        </div>

        <div className="card-adult">
          <img src={imgSrc} alt={movie?.adult ? "19" : "All"} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
