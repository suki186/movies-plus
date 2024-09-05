import React, { useState } from "react";
import "./AppLayout.css";
import logo from "../media/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

import { Outlet, useNavigate } from "react-router-dom"; // 라우터 안 자손들 가져옴

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchByKeyword = (event) => {
    event.preventDefault(); // refresh 방지

    // url 바꾸기
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  };

  return (
    <div className="applayout">
      <Navbar expand="sm" className="navbar" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className="logo-img" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll">
            <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
          </Navbar.Toggle>

          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="/">홈</Nav.Link>
              <Nav.Link href="/movies/interest">관심 콘텐츠</Nav.Link>
              <Nav.Link href="/movies">영화</Nav.Link>
              <Nav.Link href="/">시리즈</Nav.Link>
              <Nav.Link href="/">오리지널</Nav.Link>
            </Nav>

            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="보고싶은 콘텐츠를 검색하세요"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
              <Button
                variant="outline-light"
                type="submit"
                className="search-btn"
              >
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </div>
  );
};

export default AppLayout;
