import { Container } from "react-bootstrap";
import LinkedinIcon from "../assets/img/LinkedinIcon.svg";
import GithubIcon from "../assets/img/GithubIcon.svg";
import style from "../styles/Footer.module.css";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.footer_line}></div>
        <div className={style.footer_container}>
          <p>@ 2022. All Rights Reserved</p>
          <p>Designed by Guilherme Dlemiro</p>
          <span>
            <a href="https://www.linkedin.com/in/guilhermedelmiro/">
              <img src={LinkedinIcon} alt="" />
            </a>
            <a href="https://github.com/guilhermehub12">
              <img src={GithubIcon} alt="" />
            </a>
          </span>
        </div>
      </Container>
    </footer>
  );
};
