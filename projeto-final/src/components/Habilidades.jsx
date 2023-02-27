import "bootstrap/dist/css/bootstrap.min.css";
import style from "../styles/Hablidades.module.css";
import { Card, Container, Col, Row } from "react-bootstrap";

export const Habilidades = () => {
  return (
    <section id="habilidades">
      <Container className={`container mt-5 pt-4 pb-4`}>
        <div className={style.habilidades_title}>
          <h1>Habilidades</h1>
        </div>
        <Row className={style.habilidades_container}>
          <Col md={6} lg={8} className={style.habilidades_group}>
            <Card className={style.habilidades_card}>
              <Card.Body className={style.card_body}>
                <Card.Title className={style.card_title}>FRONT END</Card.Title>
                <Card.Text className={style.card_text}>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>REACT</li>
                    <li>TAILWIND</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={8} className={style.habilidades_group}>
            <Card className={style.habilidades_card}>
              <Card.Body className={style.card_body}>
                <Card.Title className={style.card_title}>BACK END</Card.Title>
                <Card.Text className={style.card_text}>
                  <ul>
                    <li>NODE</li>
                    <li>EXPRESS</li>
                    <li>HTTP</li>
                    <li>API</li>
                    <li>SQL</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={8} className={style.habilidades_group}>
            <Card className={style.habilidades_card}>
              <Card.Body className={style.card_body}>
                <Card.Title className={style.card_title}>
                  SOFT SKILLS
                </Card.Title>
                <Card.Text className={style.card_text}>
                  <ul>
                    <li>TRABALHO EM EQUIPE</li>
                    <li>COMUNICAÇÃO</li>
                    <li>AUTODIDATA</li>
                    <li>RESOLUÇÃO DE PROBLEMAS</li>
                    <li>INGLÊS</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={8} className={style.habilidades_group}>
            <Card className={style.habilidades_card}>
              <Card.Body className={style.card_body}>
                <Card.Title className={style.card_title}>OUTROS</Card.Title>
                <Card.Text className={style.card_text}>
                  <ul>
                    <li>CLOUD</li>
                    <li>LINUX</li>
                    <li>GIT/GITHUB</li>
                    <li>SCRUM/KANBAN</li>
                    <li>TDD/BDD</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
