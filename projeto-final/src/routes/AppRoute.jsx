import { NavBar } from "../components/NavBar";

import React from "react";
import { Inicio } from "../components/Inicio";
import { Sobre } from "../components/Sobre";
import { Projects } from "../components/Projects";
import { Habilidades } from "../components/Habilidades";
import { Contato } from "../components/Contato";
import { Footer } from "../components/Footer";

export function AppRoute() {
  return (
    <>
      <Inicio />
      <NavBar />
      <Sobre />
      <Projects />
      <Habilidades />
      <Contato />
      <Footer />
    </>
  );
}
