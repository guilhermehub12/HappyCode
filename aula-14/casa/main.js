import "./style.css";
import { randomValues } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>

  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>

  <div class="triangle"></div>
  <div class="triangle"></div>
  <div class="triangle"></div>
  <div class="triangle"></div>
  <div class="triangle"></div>

  <div class="frame">
      <div class="card">
          <div class="flip">
              <div class="front">
                  <h1>Hello World!</h1>
                  <p class="flip-me">Hover-me</p>
              </div>
              <div class="back">
                  <h3>Guilherme</h3>
                  <h2>Web Develeoper</h2>
                  <div>
                      <a href="https://github.com/guilhermehub12"><img title="github-icone"
                              src="https://github.com/ProfTau/Aulas-praTi/blob/main/Aula%2014/img/github.png?raw=true"
                              class="icone" /></a>
                      <a href="https://www.linkedin.com/in/guilhermedelmiro/"><img title="linkedin-icone"
                              src="https://github.com/ProfTau/Aulas-praTi/blob/main/Aula%2014/img/linkedin.png?raw=true"
                              class="icone" /></a>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </div>
`;

randomValues(document.querySelector("#counter"));
