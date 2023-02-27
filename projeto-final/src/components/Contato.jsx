import React from "react";
import style from "../styles/Contato.module.css";
import PhoneIcon from "../assets/img/PhoneIcon.svg";
import EmailIcon from "../assets/img/EmailIcon.svg";
import LocalIcon from "../assets/img/LocalIcon.svg";
import { Container } from "react-bootstrap";

export const Contato = () => {
  return (
    <section id="contato">
      <Container>
        <div className={style.contato_title}>
          <h1>Contate-me</h1>
        </div>
        <div className={style.form}>
          <aside className={style.form_contact}>
            <div className={style.form_contact_number}>
              <img src={PhoneIcon} alt="Phone ícone" />
              <div className={style.form_contact_number_info}>
                <h4>WhatsApp</h4>
                <p>+5585994371770</p>
              </div>
            </div>
            <div className={style.form_contact_email}>
              <div className={style.form_contact_number}>
                <img src={EmailIcon} alt="Email ícone" />

                <div className={style.form_contact_number_info}>
                  <h4>Email</h4>
                  <p>+5585994371770</p>
                </div>
              </div>
            </div>
            <div className={style.form_contact_address}>
              <div className={style.form_contact_number}>
                <img src={LocalIcon} alt="Local ícone" />

                <div className={style.form_contact_number_info}>
                  <h4>Endereço</h4>
                  <p>Fortaleza - CE</p>
                </div>
              </div>
            </div>
          </aside>
          <aside className={style.form_contact}>
            <form action="" method="post">
              <div className={style.form_contact_form}>
                <input
                  placeholder="Seu Nome"
                  type="text"
                  name="nome"
                  id="nome"
                />

                <input
                  placeholder="Seu Número"
                  type="tel"
                  name="numero"
                  id="numero"
                />

                <input
                  placeholder="E-mail"
                  type="email"
                  name="email"
                  id="email"
                />

                <textarea
                  placeholder="Digite sua mensagem aqui!"
                  rows={4}
                  name="mensagem"
                  id="mensagem"
                ></textarea>
              </div>
              <div className={style.form_contact_button}>
                <button type="submit">Enviar</button>
              </div>
            </form>
          </aside>
        </div>
      </Container>
    </section>
  );
};
