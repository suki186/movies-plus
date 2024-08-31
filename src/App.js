import "./App.css";
import AppLayout from "./layout/AppLayout";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import MoviePage from "./pages/Movies/MoviePage";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";
import NotFound from "./pages/NotFound/NotFound";

// Homepage(메인페이지) /
// MoviePage(영화전체페이지, 검색, 카테고리별) /movies
// MovieDetailPage(영화상세페이지) /movies/:id
// (추천영화)
// (영화상세정보)
// (찜한영화)

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* 부모의 path를 그대로 쓰려면 index */}
          <Route index element={<Homepage />}></Route>

          <Route path="movies">
            <Route index element={<MoviePage />}></Route>
            <Route path=":id" element={<MovieDetailPage />}></Route>
          </Route>
        </Route>

        {/* 이외의 경로로 잘 못 들어온 경우 404페이지 */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
