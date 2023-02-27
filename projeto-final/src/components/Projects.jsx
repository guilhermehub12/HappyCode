import "bootstrap/dist/css/bootstrap.min.css";
import style from "../styles/Projects.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import ProjetoLocadora from "../assets/img/ProjetoLocadora.png";
import ProjetoMario from "../assets/img/ProjetoMario.png";
import ProjetoCard from "../assets/img/ProjetoCard.png";

export const Projects = () => {
  return (
    <section id="projetos" style={{ paddingTop: "100px" }}>
      <Container>
        <div className={style.projetos_title}>
          <h1>Meus Projetos</h1>
        </div>
        <Carousel
          interval={null}
          slide={true}
          className={style.carousel}
          nextIcon={
            <FontAwesomeIcon
              icon={faArrowRight}
              className={`${style.carousel_arrow_right}"carousel-control-next text-decoration-none w-auto ps-3"`}
            />
          }
          prevIcon={
            <FontAwesomeIcon
              icon={faArrowLeft}
              className={`${style.carousel_arrow_left}"carousel-control-prev text-decoration-none w-auto ps-3"`}
            />
          }
        >
          <Carousel.Item>
            <Container>
              <Row md={12} lg={8}>
                <Col>
                  <img
                    className={style.carousel_image}
                    src={ProjetoMario}
                    alt="Jogo Mario"
                  />
                  <div className="text-align-left align-self-center">
                    <h2 className={style.carousel_titulo}>
                      Projeto Game Mario
                    </h2>
                    <p className={style.carousel_descricao}>
                    Projeto de jogo do Mário desenvolvido no Curso Do Zero ao primero site, ofertado pelo grupo +praTI. Nesse projeto foram usadas funções JavaScript para controlar o Mário, fazendo ele pular ao acionar uma tecla do teclado.
                    </p>
                    <div className={style.carousel_icons}>
                      <a href="https://github.com/guilhermehub12/HappyCode/tree/main/Aula%2013%20-%20gameMario">
                        Repositório
                        <FontAwesomeIcon
                          width={40}
                          icon={faArrowUpRightFromSquare}
                        />
                      </a>
                      <a href="#">
                        Deploy
                        <FontAwesomeIcon
                          width={40}
                          icon={faArrowUpRightFromSquare}
                        />
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row md={12} lg={8}>
                <Col>
                  <img
                    className={style.carousel_image}
                    src={ProjetoLocadora}
                    alt="Jogo Locadora"
                  />
                  <div className="text-align-left align-self-center">
                    <h2 className={style.carousel_titulo}>Projeto Locadora</h2>
                    <p className={style.carousel_descricao}>
                    Projeto com framework Bootstrap desenvolvido no Curso Do Zero ao primero site, ofertado pelo grupo +praTI. Nessa página foram aplicados os padrões do Bootstrap para exibir conteúdos em tabela, criação de formulário, e inclusão de conteúdo usando JavaScript.
                    </p>
                    <div className={style.carousel_icons}>
                      <a href="https://github.com/guilhermehub12/HappyCode/tree/main/aula-6-casa">
                        Repositório
                        <FontAwesomeIcon
                          width={40}
                          icon={faArrowUpRightFromSquare}
                        />
                      </a>
                      <a href="#">
                        Deploy
                        <FontAwesomeIcon
                          width={40}
                          icon={faArrowUpRightFromSquare}
                        />
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row md={12} lg={8}>
                <Col>
                  <div>
                    <img
                      className={style.carousel_image}
                      src={ProjetoCard}
                      alt="Jogo Card"
                    />
                    <div className="text-align-left align-self-center">
                      <h2 className={style.carousel_titulo}>Projeto Card</h2>
                      <p className={style.carousel_descricao}>
                      Projeto de cartão de visitas digital desenvolvido no Curso Do Zero ao primero site, ofertado pelo grupo +praTI. Nesse projeto foram aplicados ofeitos de transição com CSS e Animejs. Ao passar o mouse sobre o cartão ele vira e exibe outras informações.
                      </p>
                      <div className={style.carousel_icons}>
                        <a href="https://github.com/guilhermehub12/HappyCode/tree/main/aula-14/casa">
                          Repositório
                          <FontAwesomeIcon
                            width={40}
                            icon={faArrowUpRightFromSquare}
                          />
                        </a>
                        <a href="https://codepen.io/guilhermee12/pen/BaOzwGb">
                          Deploy
                          <FontAwesomeIcon
                            width={40}
                            icon={faArrowUpRightFromSquare}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};
