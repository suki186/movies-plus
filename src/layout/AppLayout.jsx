import React from "react";
import logo from "../media/logo.png";
import "./AppLayout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Outlet } from "react-router-dom"; // 라우터 안 자손들 가져옴

const AppLayout = () => {
  return (
    <div>
      <Navbar expand="lg" className="navbar" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className="logo-img" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll">
            <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
          </Navbar.Toggle>

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "none" }}
              navbarScroll
            >
              <Nav.Link href="/">홈</Nav.Link>
              <Nav.Link href="/movies/search">검색</Nav.Link>
              <Nav.Link href="/movies/interest">관심 콘텐츠</Nav.Link>
              <Nav.Link href="/movies">영화</Nav.Link>
              <Nav.Link href="/">시리즈</Nav.Link>
              <Nav.Link href="/">오리지널</Nav.Link>
            </Nav>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </div>
  );
};

export default AppLayout;
