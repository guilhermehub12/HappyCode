import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container } from "react-bootstrap";
import style from "../styles/Sobre.module.css";
import Profile from "../assets/img/Profile.svg";

export const Sobre = () => {
  return (
    <section id="sobre">
      <Container className={style.sobre}>
        <div className={style.sobre_texto}>
          <span className={style.sobre_texto_span}>Sobre mim</span>
          <h1 className={style.sobre_texto_titulo}>Guilherme Delmiro</h1>
          <p className={style.sobre_texto_descricao}>
          Hello I’m <b>Guilherme Delmiro</b>, a creative Web developer. I’ve been helping businesses to solve their problems with my coding skills.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aperiam repudiandae aut, nobis amet magni, et enim eligendi vero aliquid eaque hic maiores perferendis soluta corrupti minima distinctio. Quam, iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aperiam repudiandae aut, nobis amet magni, et enim eligendi vero aliquid eaque hic maiores perferendis soluta corrupti minima distinctio. Quam, iusto.
          </p>
        </div>
        <div className={style.sobre_img}>
          <div className={style.sobre_square}>
            <div className={style.sobre_square_empty}></div>
            <img className={style.sobre_square_profile} src={Profile} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};
