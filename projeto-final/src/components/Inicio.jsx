import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef } from "react";
import InicioImage from "../assets/img/InicioImage.webp";
import style from "../styles/Inicio.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";
import { Parallax } from "react-parallax";

function animateText(textRef) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;
  let iteration = 0;
  const textLength = textRef.current.dataset.value.length;

  clearInterval(interval);

  interval = setInterval(() => {
    textRef.current.innerText = textRef.current.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return textRef.current.dataset.value[index];
        }

        return alphabet[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= textLength) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
}

export const Inicio = () => {
  const initialText = "Olá! Meu nome é Guilherme.";
  const textRef = useRef(null);
  const iconProps = {
    icon: faAnglesDown,
    className: "fa-2x fa-beat-fade",
  };

  useEffect(() => {
    const handleMouseOver = (event) => {
      animateText(textRef);
    };

    textRef.current.addEventListener("mouseover", handleMouseOver);

    return () =>
      textRef.current.removeEventListener("mouseover", handleMouseOver);
  }, [textRef]);

  return (
    <header id="inicio" className={style.inicio}>
      <Parallax
        bgImage={InicioImage}
        bgImageAlt="programming setup"
        strength={200}
      >
        <div className={style.bgInicio}></div>
      </Parallax>
      <Col className={style.container}>
        <h1 className={style.titulo} ref={textRef} data-value={initialText}>
          Bem vindo ao meu Portfólio!
        </h1>
        <Typewriter
          className={style.subtitulo}
          options={{
            autoStart: true,
            delay: 50,
            loop: true,
            pauseFor: 2500,
            strings: [
              "Eu sou um Desenvolvedor Web",
              "Eu sou um Desenvolvedor Front End",
            ],
          }}
        />

        <FontAwesomeIcon {...iconProps} />
      </Col>
    </header>
  );
}
