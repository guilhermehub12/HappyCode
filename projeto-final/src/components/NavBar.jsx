// import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "../styles/NavBar.module.css";
import HeaderLogo from "../assets/img/Logo.png";
import CV from "../pdf/guilherme_delmiro_cv.pdf";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useScrollPosition } from "../hooks";

import React from "react";

export const NavBar = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
  }

  const scrollPosition = useScrollPosition();

  return (
    <>
      <Navbar key="md" expand="md" fixed="top" className={classNames(
        scrollPosition > 700 ? style.nav_fixed : style.nav_sticky
      )}>
        <Container>
          <Navbar.Brand href="#">
            <img src={HeaderLogo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            className={style.toggle}
            aria-controls="offcanvasNavbar-expand-md"
          />
          <Navbar.Offcanvas
            className={style.offcanva}
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                <img src={HeaderLogo} alt="Logo" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-grow-1 align-items-center justify-content-center">
                <Nav.Link className={style.nav_texto} href="#inicio">
                  Início
                </Nav.Link>
                <Nav.Link className={style.nav_texto} href="#sobre">
                  Sobre
                </Nav.Link>
                <Nav.Link className={style.nav_texto} href="#habilidades">
                  Habilidades
                </Nav.Link>
                <Nav.Link className={style.nav_texto} href="#projetos">
                  Projetos
                </Nav.Link>
                <Nav.Link className={style.nav_texto} href="#contato">
                  Contato
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link
                  href={CV}
                  download
                  type="button"
                  className={`${style.nav_texto} border border-dark border-4 d-flex align-items-center justify-content-center`}
                >
                  Baixar CV
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
